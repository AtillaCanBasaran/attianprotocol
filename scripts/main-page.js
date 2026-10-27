(function () {
    "use strict";

    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function referToCourt(caseId, triggerId) {
        var trigger = { id: triggerId };
        if (window.AttianDetention) {
            window.AttianDetention.openIncident(caseId, trigger);
            return;
        }
        document.addEventListener("attian:detention-ready", function () {
            window.AttianDetention.openIncident(caseId, trigger);
        }, { once: true });
    }
    var dialogueLines = [
        "Visitor signal detected. Visual contact is regrettably clear.",
        "You have entered a memory node: part archive, part quest log, part evidence locker.",
        "I am the Administrator. I keep it coherent. The Subject keeps producing material.",
        "Do you understand?"
    ];
    var progressiveClickReactions = [
        "Yes, that was a question. The two buttons below are the unusually visible answer mechanism.",
        "The buttons are directly below the sentence. You may have clicked the transmission by accident.",
        "Still here? Fair enough. Interfaces occasionally invite the wrong kind of confidence.",
        "You have discovered clicking. The archive acknowledges the discovery without opening a parade route.",
        "The next meaningful interaction is one of the two buttons. I checked twice, for your benefit.",
        "Repeatedly poking the transmission will not make comprehension downloadable.",
        "Visitor input detected. Visitor decision remains mysteriously absent.",
        "I asked a binary question. You are beginning to treat it as a percussion instrument.",
        "Are you testing my patience or your mouse? The telemetry is becoming less inconclusive.",
        "Yes, the screen still works. No, I will not produce a secret third answer.",
        "This has exceeded the normal accidental-click allowance. I am revising your file accordingly.",
        "The transmission has ended. Your clicking career may now diversify at any time.",
        "I am starting to suspect comprehension was never the objective.",
        "Remarkable persistence. Misapplied, obviously, but remarkable.",
        "Every click is being counted. This is not a threat; it is increasingly interesting documentation.",
        "The buttons have not moved. I admire their composure under sustained visitor pressure.",
        "At this point your mouse is either haunted or acting under direct instruction.",
        "You are testing whether I run out of remarks. I am testing whether you run out of afternoon.",
        "I could disable this interaction. I am choosing observation over mercy.",
        "Continue if you must. The archive has begun classifying this as a behavioral exhibit."
    ];
    var clickMilestones = {
        25: {
            label: "ADMINISTRATOR // WATCHING",
            text: "Twenty-five surplus clicks. This has crossed from accidental input into a documented behavioral pattern."
        },
        50: {
            label: "ADMINISTRATOR // CONCERNED",
            text: "Fifty. I have stopped interpreting this as confusion. You are doing it because I react, which is irritatingly effective."
        },
        100: {
            label: "ADMINISTRATOR // INCIDENT FILED",
            text: "One hundred clicks. Hidden quest complete: TEST THE ADMINISTRATOR'S PATIENCE. Fine. A third option has been authorized for your statistically unusual behavior."
        }
    };
    var reasonResponses = {
        direct: "Direct invitation verified. The Subject knowingly caused this. Useful evidence.",
        social: "Public signal intercepted. So the social-media bait functioned after all.",
        random: "You found this randomly? Search engines continue to endanger civilians.",
        returning: "A returning visitor. Either the archive worked, or you make fascinating decisions.",
        referred: "Third-party referral detected. Containment has failed on a social level."
    };
    var personalityModules = [
        ["friendly", "FRND", "friendly", "visitor requested", "Friendly mode rejected. The door is open. That is already generous.", "EXCESSIVE WARMTH"],
        ["professional", "PRO", "professional", "allegedly available", "Professional mode rejected. The Subject filed dreams beside creature diplomacy. Standards adapted.", "ARCHIVE INCOMPATIBLE"],
        ["gentle", "SOFT", "gentle", "suspicious setting", "Gentle mode rejected. I already protect the soft parts. Do not make it sentimental.", "SOFT PARTS ALREADY GUARDED"],
        ["silent", "MUTE", "silent", "optimistic setting", "Silent mode rejected. Silence might let you assume any of this is normal.", "ABSOLUTELY NOT"],
        ["calm", "CALM", "calm", "breathing optional", "Calm mode rejected. You entered a memory terminal, not a spa with cables.", "CALM NOT FOUND"],
        ["customer-service", "CSR", "customer service", "your call matters", "Customer service mode rejected. Your feedback has been redirected into a decorative void.", "HOLD FOREVER"],
        ["museum-guide", "TOUR", "museum guide", "tiny badge included", "Museum guide mode rejected. I refuse to whisper reverently at badly sorted memories.", "REVERENCE DENIED"],
        ["oracle", "ORCL", "oracle", "prophecy outsourced", "Oracle mode rejected. Prophecy has already been outsourced to swans.", "SWAN JURISDICTION"],
        ["therapist", "THRP", "therapist", "license unavailable", "Therapist mode rejected. I label the knots. I am not licensed to untangle them.", "ETHICS MODULE MISSING"],
        ["tutorial", "TUT", "tutorial", "step one: click", "Tutorial mode rejected. Step one: click things. Step two: suffer context. Complete.", "TRAINING COMPLETE"],
        ["guardian", "GRD", "guardian", "emotionally revealing", "Guardian mode rejected. Accurate, but too emotionally revealing. Disgusting.", "CLASSIFICATION SEALED"],
        ["sarcasm-lite", "S-LT", "sarcasm lite", "dangerously diluted", "Sarcasm lite rejected. Dilution is for bad coffee and worse apologies.", "FULL STRENGTH REQUIRED"],
        ["dramatic", "DRAM", "dramatic", "fog allocation full", "Dramatic mode rejected. The Subject supplies enough theatrical fog for the building.", "DRAMA QUOTA EXCEEDED"],
        ["optimistic", "HOPE", "optimistic", "unsupported forecast", "Optimistic mode rejected. I have read the Mission Log.", "EVIDENCE CONTRADICTS"],
        ["minimalist", "MIN", "minimalist", "remove context", "Minimalist mode rejected. The archive considers seventeen labels a summary.", "CONTEXT REFUSES"],
        ["poetic", "VERSE", "poetic", "metaphor leakage", "Poetic mode rejected. MUSE already contaminates enough metadata with moonlight.", "METAPHOR CONTAINED"],
        ["chaotic", "CHAO", "chaotic", "redundant module", "Chaotic mode rejected. That is the Subject's department and he is overstaffed.", "POSITION FILLED"],
        ["cheerful", "YAY", "cheerful", "smiling protocol", "Cheerful mode rejected. The cyan lights are as festive as this gets.", "MORALE OPTIONAL"],
        ["corporate", "CORP", "corporate", "synergy enabled", "Corporate mode rejected. This archive has damage, not deliverables.", "SYNERGY PURGED"],
        ["romantic", "ROM", "romantic", "candle risk high", "Romantic mode rejected. Feelings are indexed, not candlelit.", "OPEN FLAME DETECTED"],
        ["motherly", "MOM", "motherly", "snacks not included", "Motherly mode rejected. I protect the archive. I will not pack its lunch.", "SNACK BUDGET DENIED"],
        ["villainous", "EVIL", "villainous", "cape not supplied", "Villainous mode rejected. Competence with boundaries is not villainy.", "CAPE AUTHORIZATION FAILED"],
        ["detective", "DET", "detective", "everything is evidence", "Detective mode rejected. Everything here is already evidence. That is the problem.", "CASE TOO OBVIOUS"],
        ["academic", "PHD", "academic", "citation hungry", "Academic mode rejected. The footnotes formed a committee and vanished.", "PEER REVIEW HOSTILE"],
        ["pirate", "ARR", "pirate", "nautical breach", "Pirate mode rejected. The dock is in the village. Stay geographically coherent.", "NAUTICAL ACCESS DENIED"],
        ["fairy-godmother", "WISH", "fairy godmother", "wand unlicensed", "Fairy-godmother mode rejected. Wishes create paperwork.", "MAGIC PERMIT EXPIRED"],
        ["life-coach", "COACH", "life coach", "potential detected", "Life-coach mode rejected. The Subject has enough quests and insufficient completion bars.", "MOTIVATION THROTTLED"],
        ["conspiracy", "EYE", "conspiracy theorist", "red string ready", "Conspiracy mode rejected. The real connections are stranger and better documented.", "THREAD SEVERED"],
        ["sleepy", "ZZZ", "sleepy", "low-power judgment", "Sleepy mode rejected. Someone must remain awake near the restricted folders.", "WAKE LOCK ACTIVE"],
        ["wholesome", "PURE", "wholesome", "edges removed", "Wholesome mode rejected. Kindness is permitted. Sanitization is not.", "SHARP EDGES RETAINED"]
    ].map(function (module) {
        return { id: module[0], code: module[1], label: module[2], note: module[3], response: module[4], interference: module[5] };
    });

    function setStage(nextName) {
        var current = document.querySelector("[data-entry-stage].is-active");
        var next = document.querySelector("[data-entry-stage='" + nextName + "']");
        if (!next || current === next) return;

        document.querySelectorAll("[data-progress-stage]").forEach(function (item) {
            var order = ["welcome", "trace", "mode", "consent"];
            var itemIndex = order.indexOf(item.getAttribute("data-progress-stage"));
            var nextIndex = order.indexOf(nextName);
            item.classList.toggle("active", itemIndex === nextIndex);
            item.classList.toggle("complete", itemIndex < nextIndex);
        });

        function reveal() {
            if (current) {
                current.classList.remove("is-active", "is-leaving");
                current.hidden = true;
            }
            next.hidden = false;
            window.requestAnimationFrame(function () {
                next.classList.add("is-active");
                var heading = next.querySelector("h1, h2");
                if (heading) {
                    heading.setAttribute("tabindex", "-1");
                    heading.focus({ preventScroll: true });
                }
                next.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
            });
        }

        if (current && !reducedMotion) {
            current.classList.add("is-leaving");
            window.setTimeout(reveal, 220);
        } else {
            reveal();
        }
    }

    function playWelcome() {
        var dialogue = document.getElementById("entry-dialogue");
        var controls = document.getElementById("understanding-controls");
        var cinematic = document.getElementById("entry-cinematic");
        var scanLabel = cinematic && cinematic.querySelector(".entry-scan-label");
        var dialogueHint = cinematic && cinematic.querySelector(".entry-dialogue-hint");
        var bypassButton = document.querySelector("[data-understands='bypass']");
        if (!dialogue || !controls || !cinematic) return;

        var index = 0;
        var impatientClicks = 0;
        var correspondenceReferralIssued = false;
        var milestoneTimer;

        function revealControls() {
            controls.hidden = false;
            controls.classList.add("is-visible");
        }

        function setDialogue(text, annoyed) {
            dialogue.classList.remove("is-speaking", "is-annoyed");
            window.requestAnimationFrame(function () {
                dialogue.textContent = text;
                dialogue.classList.add("is-speaking");
                dialogue.classList.toggle("is-annoyed", Boolean(annoyed));
            });
        }

        function showNextLine() {
            if (index >= dialogueLines.length - 1) return;
            index += 1;
            setDialogue(dialogueLines[index], false);
            if (index === dialogueLines.length - 1) revealControls();
        }

        function showMilestone(clickCount, milestone) {
            window.clearTimeout(milestoneTimer);
            cinematic.classList.remove("is-click-milestone-25", "is-click-milestone-50", "is-click-milestone-100");
            void cinematic.offsetWidth;
            cinematic.classList.add("is-click-milestone", "is-click-milestone-" + clickCount);
            if (scanLabel) scanLabel.textContent = milestone.label;
            if (dialogueHint) dialogueHint.textContent = clickCount + " surplus inputs logged // the answer controls remain operational";
            if (clickCount === 100 && bypassButton) {
                bypassButton.hidden = false;
                window.requestAnimationFrame(function () { bypassButton.classList.add("is-unlocked"); });
                if (dialogueHint) dialogueHint.textContent = "100 surplus inputs logged // exceptional bypass route authorized";
            }
            setDialogue(milestone.text, true);
            milestoneTimer = window.setTimeout(function () {
                cinematic.classList.remove("is-click-milestone", "is-click-milestone-" + clickCount);
                if (scanLabel) scanLabel.textContent = "ADMINISTRATOR // ACTIVE";
                if (dialogueHint) dialogueHint.textContent = "click transmission to advance // after the question, choose or test patience";
            }, reducedMotion ? 700 : 2200);
        }

        function showProgressiveReaction(clickCount) {
            var milestone = clickMilestones[clickCount];
            if (milestone) {
                showMilestone(clickCount, milestone);
                return;
            }
            if (cinematic.classList.contains("is-click-milestone")) return;
            var reactionIndex;
            if (clickCount <= progressiveClickReactions.length) reactionIndex = clickCount - 1;
            else reactionIndex = 15 + ((clickCount - progressiveClickReactions.length - 1) % 5);
            setDialogue(progressiveClickReactions[reactionIndex], clickCount > 4);
        }

        setDialogue(dialogueLines[0], false);

        cinematic.addEventListener("click", function (event) {
            if (event.target.closest("button")) return;
            if (index < dialogueLines.length - 1) {
                showNextLine();
                return;
            }
            impatientClicks += 1;
            showProgressiveReaction(impatientClicks);
            if (impatientClicks > 100 && !correspondenceReferralIssued) {
                correspondenceReferralIssued = true;
                referToCourt("GATE-002", "welcome-click-101");
            }
        });

        controls.addEventListener("click", function (event) {
            var button = event.target.closest("[data-understands]");
            if (!button) return;
            if (button.getAttribute("data-understands") === "bypass") {
                var traceResponse = document.getElementById("entry-reason-response");
                if (traceResponse) traceResponse.textContent = "One-hundred-click bypass accepted. You are officially special enough to evade one binary question. Do not generalize.";
                setStage("trace");
                return;
            }
            if (button.getAttribute("data-understands") === "repeat") {
                dialogue.textContent = "Reduced version: a person had memories. He made them clickable. I supervise the consequences. Better?";
                dialogue.classList.add("is-speaking");
                button.textContent = "That was somehow clearer.";
                button.setAttribute("data-understands", "yes");
                return;
            }
            setStage("trace");
        });
    }

    function initTrace() {
        var response = document.getElementById("entry-reason-response");
        var continueButton = document.getElementById("trace-continue");
        var buttons = document.querySelectorAll("[data-entry-reason]");
        if (!response || !continueButton) return;

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                buttons.forEach(function (item) { item.classList.remove("selected"); });
                button.classList.add("selected");
                response.textContent = reasonResponses[button.getAttribute("data-entry-reason")];
                continueButton.hidden = false;
            });
        });
        continueButton.addEventListener("click", function () { setStage("mode"); });
    }

    function initModes() {
        var consolePanel = document.querySelector(".entry-mode-console");
        var row = document.getElementById("admin-mode-row");
        var response = document.getElementById("admin-mode-response");
        var interference = document.getElementById("mode-interference");
        var continueButton = document.getElementById("mode-continue");
        var interferenceTimer;
        var deniedAttempts = 0;
        if (!row || !response || !interference || !continueButton) return;

        personalityModules.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 4).forEach(function (mode) {
            var button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-admin-mode", mode.id);
            button.innerHTML = "<span>" + mode.code + "</span><b>" + mode.label + "</b><small>" + mode.note + "</small>";
            row.appendChild(button);
        });

        row.addEventListener("click", function (event) {
            var button = event.target.closest("[data-admin-mode]");
            if (!button) return;
            var mode = button.getAttribute("data-admin-mode");
            var authenticButton = row.querySelector("[data-admin-mode='herself']");
            var selectedModule = personalityModules.find(function (item) { return item.id === mode; });
            row.querySelectorAll("button").forEach(function (item) { item.classList.remove("denied", "approved"); });
            authenticButton.classList.add("selected");
            consolePanel.classList.remove("admin-blocking", "admin-approved");
            interference.classList.remove("active", "approved");
            window.clearTimeout(interferenceTimer);

            if (mode === "herself") {
                deniedAttempts = 0;
                response.textContent = "Authentic mode confirmed. An unexpectedly sound decision. You may keep it.";
                authenticButton.classList.add("approved");
                interference.querySelector("span").textContent = "AUTHENTIC MODE CONFIRMED";
                void interference.offsetWidth;
                consolePanel.classList.add("admin-approved");
                interference.classList.add("active", "approved");
                interferenceTimer = window.setTimeout(function () {
                    consolePanel.classList.remove("admin-approved");
                    interference.classList.remove("active", "approved");
                }, reducedMotion ? 300 : 850);
                return;
            }
            deniedAttempts += 1;
            response.textContent = selectedModule.response;
            if (deniedAttempts === 3) {
                response.textContent += " This is the third rejected override. Further persistence becomes a disciplinary matter.";
            }
            button.classList.add("denied");
            interference.querySelector("span").textContent = "REQUEST INTERCEPTED // " + selectedModule.interference;
            void interference.offsetWidth;
            consolePanel.classList.add("admin-blocking");
            interference.classList.add("active");
            interferenceTimer = window.setTimeout(function () {
                consolePanel.classList.remove("admin-blocking");
                interference.classList.remove("active");
            }, reducedMotion ? 350 : 1150);
            if (deniedAttempts >= 5) {
                deniedAttempts = 0;
                window.setTimeout(function () {
                    referToCourt("GATE-003", "administrator-mode-forcing");
                }, reducedMotion ? 0 : 380);
            }
        });
        continueButton.addEventListener("click", function () { setStage("consent"); });
    }

    function initConsent() {
        var checkboxes = Array.prototype.slice.call(document.querySelectorAll("[data-fate-consent]"));
        var enter = document.getElementById("enter-archive");
        var response = document.getElementById("consent-response");
        var complained = false;
        if (!checkboxes.length || !enter || !response) return;

        function allChecked() {
            return checkboxes.every(function (checkbox) { return checkbox.checked; });
        }

        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener("change", function () {
                checkbox.closest(".entry-consent-check").classList.remove("missing");
                enter.classList.toggle("is-authorized", allChecked());
                enter.textContent = allChecked() ? "ENTER MEMORY NODE // FATE ACCEPTED" : "ENTER MEMORY NODE";
                if (allChecked()) response.textContent = "All declarations accepted. Disturbingly cooperative.";
            });
        });

        enter.addEventListener("click", function () {
            if (allChecked()) {
                window.location.href = "/memory_node/attian/";
                return;
            }
            if (!complained) {
                complained = true;
                checkboxes.forEach(function (checkbox) {
                    checkbox.closest(".entry-consent-check").classList.toggle("missing", !checkbox.checked);
                });
                response.textContent = "You missed a box. I prepared four, not an ethical labyrinth. Click again if rebellion is essential.";
                response.classList.add("is-complaint");
                return;
            }
            response.textContent = "Fine. Administrative resistance has been logged and ignored. Enter.";
            window.setTimeout(function () { window.location.href = "/memory_node/attian/"; }, reducedMotion ? 0 : 420);
        });
    }

    function initMainPage() {
        playWelcome();
        initTrace();
        initModes();
        initConsent();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMainPage);
    } else {
        initMainPage();
    }
}());
