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

    function normalizeReaction(entry) {
        if (entry && typeof entry === "object") {
            var terms = Array.isArray(entry.terms) ? entry.terms : [entry.term || entry.trigger || ""];
            return {
                terms: terms.map(function (term) { return String(term || ""); }).filter(Boolean),
                speaker: normalize(entry.speaker || "administrator"),
                text: String(entry.text || entry.response || "")
            };
        }

        return null;
    }

    function buildReactionBank() {
        return (Array.isArray(window.NAVIGATOR_RESPONSE_BANK) ? window.NAVIGATOR_RESPONSE_BANK : [])
            .map(normalizeReaction)
            .filter(function (entry) { return entry && entry.terms.length && entry.text; });
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
        var empty = document.getElementById("navigator-empty");
        var directory = document.querySelector(".navigator-directory");
        var topology = document.querySelector(".navigator-topology");
        var routes = Array.prototype.slice.call(document.querySelectorAll(".navigator-route"));
        var results = Array.prototype.slice.call(document.querySelectorAll(".navigator-result"));
        var reactions = buildReactionBank();
        if (!input || !response) return;

        function setActiveRoute(result, active) {
            var routeName = result && result.getAttribute("data-route");
            var route = routeName ? document.getElementById("route-" + routeName) : null;
            if (route) route.classList.toggle("navigator-route-active", Boolean(active));
        }

        function setResponse(text, speaker) {
            var profile = speakerProfiles[normalize(speaker)] || speakerProfiles.administrator;
            var segments = parseVoiceSegments(text, speaker);

            if (segments.length > 1) {
                response.className = "navigator-response navigator-response-card navigator-response-dual";
                response.innerHTML = [
                    "<span class=\"navigator-dual-rail\" aria-hidden=\"true\"></span>",
                    segments.map(function (segment, index) {
                        return renderVoiceSegment(segment, index % 2 ? "right" : "left");
                    }).join("")
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
                "</span>"
            ].join("");
        }

        function update() {
            var raw = input.value.trim();
            var query = normalize(raw);
            var reaction = query ? reactions.filter(function (entry) {
                return entry.terms.some(function (term) {
                    var trigger = normalize(term);
                    return query === trigger || query.indexOf(trigger) !== -1 || (" " + query + " ").indexOf(" " + trigger + " ") !== -1;
                });
            }).sort(function (a, b) {
                var aLongest = Math.max.apply(null, a.terms.map(function (term) { return normalize(term).length; }));
                var bLongest = Math.max.apply(null, b.terms.map(function (term) { return normalize(term).length; }));
                return bLongest - aLongest;
            })[0] : null;
            var visible = 0;
            var visibleResults = [];

            results.forEach(function (result) {
                var searchable = normalize(result.textContent + " " + (result.getAttribute("data-search") || ""));
                var show = !query || searchable.indexOf(query) !== -1 || query.split(/\s+/).every(function (word) {
                    return word && searchable.indexOf(word) !== -1;
                });
                result.hidden = !show;
                result.classList.toggle("navigator-search-hit", Boolean(query && show));
                setActiveRoute(result, Boolean(query && show));
                if (show) {
                    visible += 1;
                    visibleResults.push(result);
                }
            });

            if (directory) directory.classList.toggle("navigator-directory-searching", Boolean(query));
            if (topology) topology.classList.toggle("navigator-single-route", Boolean(query && visible === 1));

            if (reaction) {
                setResponse(reaction.text, reaction.speaker);
            } else if (!query) {
                setResponse("Fifteen connected signals detected. Some are stable. Some are MUSE. Four require judgment and a cyber key.", "administrator");
            } else if (visible) {
                var names = visibleResults.slice(0, 3).map(readResultName).join(" / ");
                setResponse(
                    visible === 1
                        ? names + " found. Press Enter to breach politely."
                        : visible + " nodes found: " + names + ". Press Enter to open the first door.",
                    visibleResults[0].classList.contains("muse-result") ? "muse" : "administrator"
                );
            } else {
                setResponse("No archive match. The search term has still been logged for judgment.", "administrator");
            }

            if (empty) empty.hidden = visible !== 0;
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
                if (visibleResult) window.location.href = visibleResult.href;
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
                    result.getAttribute("data-speaker") || "administrator"
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
        });

        update();
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initNavigator);
    else initNavigator();
}());
