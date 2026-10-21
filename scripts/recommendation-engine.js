(function () {
    "use strict";

    var action = "random";
    var moods = [];
    var clickCount = 0;
    var lastSignature = "";
    var history = [];
    var rareTimer;
    var dischargeTimer;

    var actionPanel = document.getElementById("muse-actions");
    var moodPanel = document.getElementById("muse-moods");
    var clearMoods = document.getElementById("clearMuseMoods");
    var button = document.getElementById("museButton");
    var output = document.getElementById("museOutput");
    var idle = document.getElementById("museOutputIdle");
    var outputState = document.getElementById("museOutputState");
    var signalMeta = document.getElementById("museSignalMeta");
    var resultTitle = document.getElementById("museResultTitle");
    var museLine = document.getElementById("museLine");
    var followup = document.getElementById("museFollowup");
    var followupSpeaker = document.getElementById("museFollowupSpeaker");
    var followupAvatar = document.getElementById("museFollowupAvatar");
    var adminLine = document.getElementById("adminLine");
    var historyPanel = document.getElementById("museHistoryPanel");
    var historyList = document.getElementById("museHistory");
    var moodComment = document.getElementById("museMoodComment");
    var consoleDeck = button ? button.closest(".muse-engine-console") : null;

    var moodReactions = {
        tired: [
            { speaker: "MUSE", line: "Low battery. Excellent. The strange ideas can catch up." },
            { speaker: "ADMIN", line: "Energy estimate noted. Nothing heroic will be required." }
        ],
        curious: [
            { speaker: "MUSE", line: "A dangerous little question mark. I approve." },
            { speaker: "ADMIN", line: "Curiosity registered. Rabbit-hole depth remains unregulated." }
        ],
        restless: [
            { speaker: "MUSE", line: "Too many legs in the brain today. Understood." },
            { speaker: "ADMIN", line: "Restlessness logged. The chair is not at fault." }
        ],
        cozy: [
            { speaker: "MUSE", line: "Blanket-compatible outcomes only. Mostly." },
            { speaker: "ADMIN", line: "Comfort parameters accepted." }
        ],
        brave: [
            { speaker: "MUSE", line: "Oh good. I found the dramatic lever." },
            { speaker: "ADMIN", line: "Confidence detected. Recklessness not automatically included." }
        ],
        haunted: [
            { speaker: "MUSE", line: "Something followed you in. It may have recommendations." },
            { speaker: "ADMIN", line: "Haunting status unverified. Mood accepted." }
        ],
        social: [
            { speaker: "MUSE", line: "Other humans! A multiplayer condition!" },
            { speaker: "ADMIN", line: "Social capacity noted. Consent still applies to side quests." }
        ],
        focused: [
            { speaker: "MUSE", line: "A straight line. I promise to bend it only slightly." },
            { speaker: "ADMIN", line: "Focus detected. Scope containment activated." }
        ],
        chaotic: [
            { speaker: "MUSE", line: "YES. The weather has teeth." },
            { speaker: "ADMIN", line: "Chaos selected voluntarily. Recording that detail." }
        ]
    };

    if (!button || !output || !window.MUSE_RECOMMENDATIONS || !window.MUSE_CONTEXTUAL_RECOMMENDATIONS) return;

    function stripVoice(text) {
        return String(text || "").replace(/^\s*(MUSE|Administrator)\s*:\s*/i, "");
    }

    function randomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }

    function renderMoodComment(mood) {
        if (!moodComment) return;
        var reaction = mood && moodReactions[mood] ? randomItem(moodReactions[mood]) : {
            speaker: "MUSE",
            line: "Emotional weather cleared. Suspiciously calm."
        };
        moodComment.classList.toggle("is-admin", reaction.speaker === "ADMIN");
        moodComment.querySelector("span").textContent = reaction.speaker;
        moodComment.querySelector("p").textContent = reaction.line;
        moodComment.classList.remove("is-speaking");
        void moodComment.offsetWidth;
        moodComment.classList.add("is-speaking");
    }

    function withoutImmediateRepeat(items) {
        if (items.length < 2) return items;
        var filtered = items.filter(function (item) {
            return String(item.title || item.muse) !== lastSignature;
        });
        return filtered.length ? filtered : items;
    }

    function scoreContextual(item) {
        var score = 0;
        if (action === "random") score += 2;
        else if (item.actions.indexOf(action) !== -1) score += 8;
        else return -100;

        if (!moods.length) score += 1;
        moods.forEach(function (mood) {
            if (item.moods.indexOf(mood) !== -1) score += 4;
        });
        return score;
    }

    function chooseRecommendation() {
        var contextual = window.MUSE_CONTEXTUAL_RECOMMENDATIONS.map(function (item) {
            return { item: item, score: scoreContextual(item) };
        }).filter(function (candidate) {
            return candidate.score > -100;
        });

        var legacy = window.MUSE_RECOMMENDATIONS.map(function (item) {
            return {
                title: "FREE-RANGE MUSE SIGNAL",
                muse: stripVoice(item.muse),
                admin: stripVoice(item.admin),
                legacy: true
            };
        });

        if (action === "random" && !moods.length) {
            return randomItem(withoutImmediateRepeat(contextual.map(function (candidate) { return candidate.item; }).concat(legacy)));
        }

        if (action === "random" && Math.random() < 0.14) return randomItem(withoutImmediateRepeat(legacy));

        var highScore = Math.max.apply(null, contextual.map(function (candidate) { return candidate.score; }));
        var best = contextual.filter(function (candidate) {
            return candidate.score >= highScore - 1;
        }).map(function (candidate) {
            return candidate.item;
        });
        return randomItem(withoutImmediateRepeat(best.length ? best : legacy));
    }

    function selectedLabel() {
        var moodText = moods.length ? moods.join(" + ") : "mood unspecified";
        return "REQUEST // " + (action === "random" ? "surprise me" : action) + " // " + moodText;
    }

    function setFollowup(text, speaker) {
        var museFollowup = speaker === "muse";
        followup.classList.toggle("is-muse-followup", museFollowup);
        followupSpeaker.textContent = museFollowup ? "MUSE // IMPORTANT ADDENDUM" : "ADMINISTRATOR // REVIEW";
        followupAvatar.src = museFollowup ? "/images/avatars/muse_avatar_thumb.png" : "/images/avatars/lili_avatar_thumb.png";
        adminLine.textContent = stripVoice(text);
    }

    function renderHistory(item, rare) {
        history.unshift({
            title: item.title || "FREE-RANGE MUSE SIGNAL",
            request: selectedLabel(),
            rare: rare
        });
        history = history.slice(0, 5);
        historyList.innerHTML = history.map(function (entry) {
            return "<li" + (entry.rare ? " class=\"is-rare\"" : "") + "><span>" + (entry.rare ? "RARE" : "LOG") + "</span><strong>" + entry.title + "</strong><small>" + entry.request + "</small></li>";
        }).join("");
        historyPanel.hidden = false;
    }

    function revealOutput() {
        idle.hidden = true;
        output.hidden = false;
        output.classList.remove("is-arriving");
        void output.offsetWidth;
        output.classList.add("is-arriving");
    }

    function renderRecommendation() {
        var item = chooseRecommendation();
        var secondaryMuse = Math.random() < 0.12;
        lastSignature = String(item.title || item.muse);
        signalMeta.textContent = selectedLabel();
        resultTitle.textContent = item.title || "FREE-RANGE MUSE SIGNAL";
        museLine.textContent = stripVoice(item.muse);
        setFollowup(
            secondaryMuse ? randomItem(window.MUSE_SECONDARY_COMMENTS) : item.admin,
            secondaryMuse ? "muse" : "administrator"
        );
        outputState.textContent = secondaryMuse ? "MUSE ECHO // SUPERVISION DELAYED" : "SIGNAL GENERATED // REVIEW ATTACHED";
        outputState.className = secondaryMuse ? "is-muse-state" : "";
        revealOutput();
        renderHistory(item, false);
    }

    function rareClass(item) {
        var text = (item.muse + " " + item.admin).toLowerCase();
        if (text.indexOf("red signal") !== -1 || text.indexOf("red channel") !== -1) return "is-red-event";
        if (text.indexOf("connection lost") !== -1 || text.indexOf("administrator is gone") !== -1 || text.indexOf("disconnected") !== -1) return "is-admin-lost";
        return "is-signal-overflow";
    }

    function renderRareEvent() {
        var item = randomItem(window.MUSE_GLITCHES);
        var eventClass = rareClass(item);
        window.clearTimeout(rareTimer);
        document.body.classList.remove("is-red-event", "is-admin-lost", "is-signal-overflow");
        document.body.classList.add(eventClass);
        resultTitle.textContent = eventClass === "is-red-event" ? "RESTRICTED SIGNAL PROXIMITY" : "UNSCHEDULED MUSE EVENT";
        signalMeta.textContent = "RARE EVENT // " + selectedLabel();
        museLine.textContent = stripVoice(item.muse);
        setFollowup(item.admin, "administrator");
        outputState.textContent = eventClass === "is-red-event" ? "SIGNAL INTEGRITY COMPROMISED" : "RARE SIGNAL // CONTAINMENT LATE";
        outputState.className = "is-rare-state";
        revealOutput();
        renderHistory({ title: resultTitle.textContent }, true);
        rareTimer = window.setTimeout(function () {
            document.body.classList.remove("is-red-event", "is-admin-lost", "is-signal-overflow");
        }, 1400);
    }

    actionPanel.addEventListener("click", function (event) {
        var selected = event.target.closest("[data-muse-action]");
        if (!selected) return;
        action = selected.getAttribute("data-muse-action");
        actionPanel.querySelectorAll("[data-muse-action]").forEach(function (item) {
            item.classList.toggle("is-selected", item === selected);
            item.setAttribute("aria-pressed", String(item === selected));
        });
    });

    moodPanel.addEventListener("click", function (event) {
        var selected = event.target.closest("[data-muse-mood]");
        if (!selected) return;
        var mood = selected.getAttribute("data-muse-mood");
        var active = selected.getAttribute("aria-pressed") !== "true";
        selected.setAttribute("aria-pressed", String(active));
        selected.classList.toggle("is-selected", active);
        if (active) moods.push(mood);
        else moods = moods.filter(function (item) { return item !== mood; });
        renderMoodComment(active ? mood : moods[moods.length - 1]);
    });

    clearMoods.addEventListener("click", function () {
        moods = [];
        moodPanel.querySelectorAll("[data-muse-mood]").forEach(function (item) {
            item.setAttribute("aria-pressed", "false");
            item.classList.remove("is-selected");
        });
        renderMoodComment("");
    });

    actionPanel.querySelectorAll("[data-muse-action]").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item.classList.contains("is-selected")));
    });

    button.addEventListener("click", function () {
        if (button.disabled) return;
        clickCount += 1;
        button.disabled = true;
        button.classList.remove("is-pressed");
        void button.offsetWidth;
        button.classList.add("is-pressed");
        if (consoleDeck) {
            consoleDeck.classList.remove("is-discharging");
            void consoleDeck.offsetWidth;
            consoleDeck.classList.add("is-discharging");
        }
        outputState.textContent = "MUSE SIGNAL IN TRANSIT";
        outputState.className = "is-muse-state";
        window.clearTimeout(dischargeTimer);
        dischargeTimer = window.setTimeout(function () {
            if (clickCount % 9 === 0 || Math.random() < 0.055) renderRareEvent();
            else renderRecommendation();
        }, 260);
        window.setTimeout(function () {
            button.classList.remove("is-pressed");
            button.disabled = false;
            if (consoleDeck) consoleDeck.classList.remove("is-discharging");
        }, 620);
    });
}());
