(function () {
    "use strict";

    var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var dialogueLines = [
        "Visitor signal detected. Visual contact is regrettably clear.",
        "You have entered a memory node: part archive, part quest log, part evidence locker.",
        "I am the Administrator. I keep it coherent. The Subject keeps producing material.",
        "Do you understand?"
    ];
    var impatientReactions = [
        "The buttons are directly below the sentence. A bold interface decision, apparently.",
        "Repeatedly poking the transmission will not make comprehension downloadable.",
        "You have discovered clicking. The archive is very proud of you.",
        "I asked a binary question. You are attempting a percussion solo.",
        "The next meaningful interaction is one of the two buttons. I checked.",
        "Are you testing my patience or your mouse? The telemetry is inconclusive.",
        "The transmission has ended. Your clicking career may now diversify.",
        "Yes, the screen still works. No, I will not produce a secret third answer.",
        "Visitor input detected. Visitor decision remains mysteriously absent."
    ];
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
        if (!dialogue || !controls || !cinematic) return;

        var index = 0;
        var lineTimer;
        var controlTimer;
        var controlsVisible = false;
        var impatientClicks = 0;

        function revealControls() {
            window.clearTimeout(controlTimer);
            controlsVisible = true;
            controls.hidden = false;
            controls.classList.add("is-visible");
        }

        function showLine() {
            window.clearTimeout(lineTimer);
            if (index >= dialogueLines.length) {
                revealControls();
                return;
            }
            var currentLine = dialogueLines[index];
            dialogue.classList.remove("is-speaking");
            window.requestAnimationFrame(function () {
                dialogue.textContent = currentLine;
                dialogue.classList.add("is-speaking");
            });
            index += 1;
            if (index < dialogueLines.length) {
                lineTimer = window.setTimeout(showLine, reducedMotion ? 80 : 2450);
            } else {
                controlTimer = window.setTimeout(revealControls, reducedMotion ? 0 : 700);
            }
        }
        lineTimer = window.setTimeout(showLine, reducedMotion ? 0 : 450);

        cinematic.addEventListener("click", function (event) {
            if (event.target.closest("button")) return;
            if (!controlsVisible) {
                showLine();
                return;
            }
            impatientClicks += 1;
            if (impatientClicks > 1 || Math.random() < 0.55) {
                dialogue.classList.remove("is-speaking");
                dialogue.textContent = impatientReactions[Math.floor(Math.random() * impatientReactions.length)];
                void dialogue.offsetWidth;
                dialogue.classList.add("is-speaking", "is-annoyed");
            }
        });

        controls.addEventListener("click", function (event) {
            var button = event.target.closest("[data-understands]");
            if (!button) return;
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
            response.textContent = selectedModule.response;
            button.classList.add("denied");
            interference.querySelector("span").textContent = "REQUEST INTERCEPTED // " + selectedModule.interference;
            void interference.offsetWidth;
            consolePanel.classList.add("admin-blocking");
            interference.classList.add("active");
            interferenceTimer = window.setTimeout(function () {
                consolePanel.classList.remove("admin-blocking");
                interference.classList.remove("active");
            }, reducedMotion ? 350 : 1150);
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
