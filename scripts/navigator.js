(function () {
    "use strict";

    var speakerProfiles = {
        administrator: {
            label: "Administrator",
            avatar: "/images/avatars/lili_avatar_thumb.png",
            className: "navigator-speaker-admin"
        },
        lili: {
            label: "Administrator",
            avatar: "/images/avatars/lili_avatar_thumb.png",
            className: "navigator-speaker-admin"
        },
        muse: {
            label: "MUSE",
            avatar: "/images/avatars/muse_avatar_thumb.png",
            className: "navigator-speaker-muse"
        },
        red: {
            label: "Transmission Interrupted",
            avatar: "/images/avatars/lili_avatar_thumb.png",
            className: "navigator-speaker-red"
        }
    };


    function normalize(value) {
        return String(value || "").toLowerCase().trim().replace(/ö/g, "o").replace(/ü/g, "u").replace(/ä/g, "a");
    }

    function currentNodeName(value) {
        return String(value || "")
            .replace(/GAMING AREA/g, "DETENTION FACILITY")
            .replace(/Gaming Area/g, "Detention Facility");
    }

    function currentRouteName(value) {
        return String(value || "") === "gaming" ? "detention" : String(value || "");
    }

    function containsTerm(query, term) {
        var normalizedQuery = normalize(query).replace(/[^a-z0-9&.]+/g, " ").replace(/\s+/g, " ").trim();
        var normalizedTerm = normalize(term).replace(/[^a-z0-9&.]+/g, " ").replace(/\s+/g, " ").trim();
        if (!normalizedQuery || !normalizedTerm) return false;
        return normalizedQuery === normalizedTerm || (" " + normalizedQuery + " ").indexOf(" " + normalizedTerm + " ") !== -1;
    }

    function matchedTermLength(entry, query) {
        return Math.max.apply(null, entry.terms.filter(function (term) {
            return containsTerm(query, term);
        }).map(function (term) {
            return normalize(term).length;
        }).concat([0]));
    }

    function normalizeReaction(entry) {
        if (entry && typeof entry === "object") {
            var terms = Array.isArray(entry.terms) ? entry.terms : [entry.term || entry.trigger || ""];
            return {
                terms: terms.map(function (term) { return String(term || ""); }).filter(Boolean),
                speaker: normalize(entry.speaker || "administrator"),
                text: currentNodeName(entry.text || entry.response || ""),
                category: String(entry.category || "uncategorized"),
                routes: (Array.isArray(entry.routes) ? entry.routes : [entry.route || ""]).map(currentRouteName).filter(Boolean),
                node: currentNodeName(entry.node || ""),
                showAll: Boolean(entry.showAll),
                mode: String(entry.mode || "route").toLowerCase(),
                virtualCode: String(entry.virtualCode || ""),
                virtualTitle: String(entry.virtualTitle || ""),
                virtualText: String(entry.virtualText || "")
            };
        }

        return null;
    }

    function buildReactionBank() {
        return []
            .concat(Array.isArray(window.NAVIGATOR_RESPONSE_BANK) ? window.NAVIGATOR_RESPONSE_BANK : [])
            .concat(Array.isArray(window.NAVIGATOR_LEGACY_ROUTED_RESPONSES) ? window.NAVIGATOR_LEGACY_ROUTED_RESPONSES : [])
            .concat(Array.isArray(window.NAVIGATOR_UNASSIGNED_RESPONSES) ? window.NAVIGATOR_UNASSIGNED_RESPONSES : [])
            .map(normalizeReaction)
            .filter(function (entry) { return entry && entry.terms.length && entry.text; });
    }

    function chooseReaction(reactions, query) {
        var matches = reactions.map(function (entry) {
            return { entry: entry, specificity: matchedTermLength(entry, query) };
        }).filter(function (match) {
            return match.specificity > 0;
        });
        if (!matches.length) return null;

        var highestSpecificity = Math.max.apply(null, matches.map(function (match) { return match.specificity; }));
        var seen = {};
        var candidates = matches.filter(function (match) {
            if (match.specificity !== highestSpecificity) return false;
            var key = [
                match.entry.speaker,
                match.entry.text,
                match.entry.mode,
                match.entry.node,
                match.entry.routes.join("|")
            ].join("\u0000");
            if (seen[key]) return false;
            seen[key] = true;
            return true;
        });

        return candidates[Math.floor(Math.random() * candidates.length)].entry;
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function readResultName(result) {
        var title = result.querySelector("strong");
        return title ? title.textContent.trim() : result.textContent.trim();
    }

    function speakerFromMarker(marker) {
        if (/^MUSE$/i.test(marker)) return "muse";
        if (/^ADMINISTRATOR$/i.test(marker)) return "administrator";
        return "administrator";
    }

    function parseVoiceSegments(text, speaker) {
        if (normalize(speaker) === "red") {
            return [{ speaker: "red", text: text }];
        }

        var segments = [];
        var pattern = /\b(ADMINISTRATOR|MUSE)\s*:\s*/gi;
        var match;
        var cursor = 0;
        var currentSpeaker = normalize(speaker || "administrator");

        while ((match = pattern.exec(text)) !== null) {
            var before = text.slice(cursor, match.index).trim();
            if (before) {
                segments.push({ speaker: currentSpeaker, text: before });
            }
            currentSpeaker = speakerFromMarker(match[1]);
            cursor = pattern.lastIndex;
        }

        var after = text.slice(cursor).trim();
        if (after) {
            segments.push({ speaker: currentSpeaker, text: after });
        }

        return segments.length ? segments : [{ speaker: currentSpeaker, text: text }];
    }

    function renderVoiceSegment(segment, side) {
        var profile = speakerProfiles[normalize(segment.speaker)] || speakerProfiles.administrator;
        var portrait = [
            "<span class=\"navigator-response-portrait\" aria-hidden=\"true\">",
            "    <img class=\"navigator-response-avatar\" src=\"", profile.avatar, "\" alt=\"\" loading=\"lazy\">",
            "</span>"
        ].join("");
        var copy = [
            "<span class=\"navigator-response-copy\">",
            "    <span class=\"navigator-response-speaker\">", escapeHtml(profile.label), "</span>",
            "    <span class=\"navigator-response-text\">", escapeHtml(segment.text), "</span>",
            "</span>"
        ].join("");

        return [
            "<span class=\"navigator-voice-segment navigator-voice-", side, " ", profile.className, "\">",
            side === "right" ? copy + portrait : portrait + copy,
            "</span>"
        ].join("");
    }

    function initNavigator() {
        var input = document.getElementById("navigator-query");
        var response = document.getElementById("navigator-response");
        var virtualNode = document.getElementById("navigator-virtual-node");
        var directory = document.querySelector(".navigator-directory");
        var topology = document.querySelector(".navigator-topology");
        var routes = Array.prototype.slice.call(document.querySelectorAll(".navigator-route"));
        var results = Array.prototype.slice.call(document.querySelectorAll(".navigator-result"));
        var sealedNodeClicks = {};
        var reactions = buildReactionBank();
        if (!input || !response) return;

        function setActiveRoute(result, active) {
            var routeName = result && result.getAttribute("data-route");
            var route = routeName ? document.getElementById("route-" + routeName) : null;
            if (route) route.classList.toggle("navigator-route-active", Boolean(active));
        }

        function nodeLabelHTML(nodeLabel) {
            if (!nodeLabel) return "";
            return "<span class=\"navigator-response-node\">NODE // " + escapeHtml(nodeLabel) + "</span>";
        }

        function setResponse(text, speaker, nodeLabel) {
            var profile = speakerProfiles[normalize(speaker)] || speakerProfiles.administrator;
            var segments = parseVoiceSegments(text, speaker);

            if (segments.length > 1) {
                response.className = "navigator-response navigator-response-card navigator-response-dual";
                response.innerHTML = [
                    "<span class=\"navigator-dual-rail\" aria-hidden=\"true\"></span>",
                    segments.map(function (segment, index) {
                        return renderVoiceSegment(segment, index % 2 ? "right" : "left");
                    }).join(""),
                    nodeLabelHTML(nodeLabel)
                ].join("");
                return;
            }

            response.className = "navigator-response navigator-response-card " + profile.className;
            response.innerHTML = [
                "<span class=\"navigator-response-portrait\" aria-hidden=\"true\">",
                "    <img class=\"navigator-response-avatar\" src=\"", profile.avatar, "\" alt=\"\" loading=\"lazy\">",
                "</span>",
                "<span class=\"navigator-response-copy\">",
                "    <span class=\"navigator-response-speaker\">", escapeHtml(profile.label), "</span>",
                "    <span class=\"navigator-response-text\">", escapeHtml(text), "</span>",
                "</span>",
                nodeLabelHTML(nodeLabel)
            ].join("");
        }

        function markResponseMode(mode) {
            ["route", "suggestion", "pending", "question", "error"].forEach(function (name) {
                response.classList.toggle("navigator-response-mode-" + name, mode === name);
            });
        }

        function setDisconnectedResponse(query) {
            response.className = "navigator-response navigator-response-card navigator-response-disconnected";
            response.innerHTML = [
                "<span class=\"navigator-disconnected-glyph\" aria-hidden=\"true\">?</span>",
                "<span class=\"navigator-response-copy\">",
                "    <span class=\"navigator-response-speaker\">UNCONNECTED NODE</span>",
                "    <span class=\"navigator-response-text\">No route claims ‘", escapeHtml(query), "’. Try another signal.</span>",
                "</span>"
            ].join("");
        }

        function hideVirtualNode() {
            if (virtualNode) virtualNode.hidden = true;
            if (topology) {
                topology.classList.remove("navigator-has-virtual", "navigator-virtual-suggestion", "navigator-virtual-pending", "navigator-virtual-question", "navigator-virtual-error");
            }
        }

        function showVirtualNode(mode, reaction) {
            if (!virtualNode) return;
            var defaults = {
                pending: { code: "...", title: "SIGNAL PENDING", text: "A possible archive branch has not been constructed yet.", state: "PENDING" },
                error: { code: "ERR", title: "NO MATCH FOUND", text: "The query has no permitted route in this memory node.", state: "REJECTED" },
                question: { code: "?", title: "UNCONNECTED SIGNAL", text: "No existing node claims this query. Try another route signature.", state: "UNKNOWN" }
            };
            var fallback = defaults[mode] || defaults.question;
            virtualNode.className = "navigator-virtual-node mode-" + mode;
            virtualNode.querySelector(".navigator-virtual-code").textContent = reaction && reaction.virtualCode || fallback.code;
            virtualNode.querySelector(".navigator-virtual-copy em").textContent = reaction && reaction.virtualTitle || fallback.title;
            virtualNode.querySelector(".navigator-virtual-copy strong").textContent = reaction && reaction.node || fallback.title;
            virtualNode.querySelector(".navigator-virtual-copy small").textContent = reaction && reaction.virtualText || fallback.text;
            virtualNode.querySelector(".navigator-virtual-state").textContent = fallback.state;
            virtualNode.hidden = false;
            if (topology) {
                topology.classList.remove("navigator-virtual-suggestion", "navigator-virtual-pending", "navigator-virtual-question", "navigator-virtual-error");
                topology.classList.add("navigator-has-virtual", "navigator-virtual-" + mode);
            }
        }

        function update() {
            var raw = input.value.trim();
            var query = normalize(raw);
            var reaction = query ? chooseReaction(reactions, query) : null;
            var mode = reaction ? reaction.mode : "route";
            var virtualMode = mode === "pending" || mode === "question" || mode === "error";
            var visible = 0;
            var visibleResults = [];

            results.forEach(function (result) {
                var searchable = normalize(result.textContent + " " + (result.getAttribute("data-search") || ""));
                var routeName = result.getAttribute("data-route") || "";
                var directMatch = searchable.indexOf(query) !== -1 || query.split(/\s+/).every(function (word) {
                    return word && searchable.indexOf(word) !== -1;
                });
                var show = !query || (reaction
                    ? !virtualMode && (reaction.showAll || reaction.routes.indexOf(routeName) !== -1)
                    : directMatch);
                result.hidden = !show;
                result.classList.toggle("navigator-search-hit", Boolean(query && show));
                result.classList.toggle("navigator-suggested-hit", Boolean(query && show && mode === "suggestion"));
                setActiveRoute(result, Boolean(query && show));
                if (show) {
                    visible += 1;
                    visibleResults.push(result);
                }
            });

            if (directory) directory.classList.toggle("navigator-directory-searching", Boolean(query));
            if (topology) topology.classList.toggle("navigator-single-route", Boolean(query && visible === 1));
            hideVirtualNode();

            if (reaction) {
                setResponse(reaction.text, reaction.speaker, reaction.node);
                markResponseMode(mode);
                if (virtualMode) showVirtualNode(mode, reaction);
            } else if (!query) {
                setResponse("Fifteen connected signals detected. Some are stable. Some are MUSE. Four require judgment and a cyber key.", "administrator", "ATTIAN MEMORY CORE");
                markResponseMode("route");
            } else if (visible) {
                var names = visibleResults.slice(0, 3).map(readResultName).join(" / ");
                setResponse(
                    visible === 1
                        ? (visibleResults[0].getAttribute("data-note") || "One route accepted the signal. Press Enter to continue.")
                        : "The chipset produced " + visible + " plausible routes. Specificity remains available as an optional upgrade.",
                    visibleResults[0].classList.contains("muse-result") ? "muse" : "administrator",
                    names
                );
                markResponseMode("route");
            } else {
                setDisconnectedResponse(raw);
                markResponseMode("question");
                showVirtualNode("question", null);
            }
        }

        input.addEventListener("input", update);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                input.value = "";
                update();
                input.blur();
            }
            if (event.key === "Enter") {
                event.preventDefault();
                var visibleResult = results.find(function (result) { return !result.hidden; });
                if (visibleResult && visibleResult.getAttribute("aria-disabled") !== "true" && visibleResult.href) {
                    window.location.href = visibleResult.href;
                } else if (visibleResult) {
                    setResponse(visibleResult.getAttribute("data-note"), "administrator", readResultName(visibleResult));
                    markResponseMode("error");
                }
            }
        });

        results.forEach(function (result) {
            function previewNode() {
                if (input.value.trim() || document.activeElement === input) return;
                results.forEach(function (item) { item.classList.toggle("navigator-node-active", item === result); });
                routes.forEach(function (route) { route.classList.remove("navigator-route-active"); });
                setActiveRoute(result, true);
                setResponse(
                    result.getAttribute("data-note") || readResultName(result) + " route available.",
                    result.getAttribute("data-speaker") || "administrator",
                    readResultName(result)
                );
            }

            function releaseNode() {
                result.classList.remove("navigator-node-active");
                setActiveRoute(result, false);
                if (!input.value.trim() && document.activeElement !== result) update();
            }

            result.addEventListener("mouseenter", previewNode);
            result.addEventListener("mouseleave", releaseNode);
            result.addEventListener("focus", previewNode);
            result.addEventListener("blur", releaseNode);
            result.addEventListener("pointerdown", function () {
                result.classList.add("navigator-node-routing");
            });
            result.addEventListener("click", function (event) {
                if (result.getAttribute("aria-disabled") !== "true") return;
                event.preventDefault();
                result.classList.remove("navigator-node-routing");
                var routeName = result.getAttribute("data-route") || "sealed";
                sealedNodeClicks[routeName] = (sealedNodeClicks[routeName] || 0) + 1;
                var warning = sealedNodeClicks[routeName] >= 3
                    ? "Final warning: this node requires a referral. Repeated impact is not a referral protocol."
                    : result.getAttribute("data-note");
                setResponse(warning, "administrator", readResultName(result));
                markResponseMode("error");
                if (sealedNodeClicks[routeName] >= 5 && window.AttianDetention) {
                    sealedNodeClicks[routeName] = 0;
                    window.AttianDetention.openIncident("DTN-001", { id: "navigator-detention-node-bashing" });
                }
            });
        });

        update();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initNavigator);
    else initNavigator();
}());
