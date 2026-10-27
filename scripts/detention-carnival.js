(function () {
    "use strict";

    var STATE_KEY = "attian-carnival-state-v1";
    var ATTRACTIONS = ["oracle", "wheel", "cake"];
    var GROUND_SCENES = ["ticketmaster", "merchant", "detainee", "staff", "village"];
    var transferTimers = [];
    var wheelTimer = null;
    var cakeRun = null;
    var state;
    var context;
    var elements;

    var sceneMeta = {
        oracle: {
            code: "GAME_001 // REPURPOSED MEMORY SCANNER",
            title: "The Maybe Machine",
            summary: "Administrator built it to inspect damaged memory fragments. MUSE discovered it can also arrange them into extremely confident advice.",
            speaker: "MUSE // LICENSE PENDING FOREVER",
            comment: "It cannot predict the future. It can, however, point dramatically at a possibility and refuse follow-up questions."
        },
        wheel: {
            code: "GAME_002 // PROBABILITY COMPLIANCE APPARATUS",
            title: "Wheel Of Nice Things And Tax Consequences",
            summary: "The hall's probability-testing rotor is now the centerpiece. The official calibration lever has acquired prizes and several unnecessary bulbs.",
            speaker: "MUSE // DEPARTMENT OF PRIZE REDISTRIBUTION",
            comment: "Administrator used this for probability testing, which is just spinning without prizes. I corrected the oversight."
        },
        cake: {
            code: "GAME_003 // APTITUDE REASSESSMENT TERMINAL",
            title: "Certified Cake Trial",
            summary: "The only machine Administrator still considers rehabilitative. MUSE added dessert graphics but left the test inconveniently functional.",
            speaker: "ADMINISTRATOR // EXAMINATION CONTROL",
            comment: "Three questions. Two correct answers earn a clearance wafer. It is not cake. MUSE has appealed this terminology."
        },
        exit: {
            code: "RELEASE CONTROL // ORIGINAL FACILITY HARDWARE",
            title: "Administrative Exit Gate",
            summary: "The original detention gate remains intact, visible, and unimpressed by decorative authority. It accepts one valid token.",
            speaker: "ADMINISTRATOR // RELEASE CONTROL",
            comment: "The gate predates MUSE's appointment. This is why it still requires actual authorization rather than enthusiasm."
        },
        ticketmaster: {
            code: "GROUNDS_001 // FORMER INTAKE WINDOW",
            title: "The Ticketmaster",
            summary: "The original intake booth has become a ticket office without changing its forms, glass, queue markings, or circular reasoning.",
            speaker: "TICKETMASTER // FORM ENTHUSIAST",
            comment: "Nobody receives a ticket without registration. Registration requires a ticket. MUSE calls this a puzzle. I call it Tuesday."
        },
        merchant: {
            code: "GROUNDS_002 // STORAGE CAGE B",
            title: "Travelling Merchant",
            summary: "A former confiscation cage now contains a market stall. Its permit is written on the back of another permit.",
            speaker: "MUSE // TEMPORARY COMMERCE AUTHORITY",
            comment: "Everything is ethically sourced from places where nobody was using it at the exact moment it was acquired."
        },
        detainee: {
            code: "GROUNDS_003 // EXERCISE YARD BENCH 04",
            title: "Former Detainee",
            summary: "Their sentence ended. They stayed when MUSE installed the lights and have since become the facility's least official historian.",
            speaker: "FORMER DETAINEE // VOLUNTARY RESIDENT",
            comment: "Freedom is excellent. So is sitting down while somebody else operates a carnival. The categories overlap."
        },
        staff: {
            code: "GROUNDS_004 // STAFF ACCESS",
            title: "Interesting People Only",
            summary: "The steel service door still says STAFF ONLY. MUSE crossed out one noun after receiving administrative authority.",
            speaker: "ADMINISTRATOR // ACCESS CONTROL",
            comment: "Her amendment is technically authorized. I regret making the policy language broad enough for that sentence to be true."
        },
        village: {
            code: "GROUNDS_005 // PERIMETER ROUTE",
            title: "The Village Road",
            summary: "A maintenance route now bends toward an unfinished fantasy settlement. MUSE has classified this as interdepartmental tourism.",
            speaker: "MUSE // TOURISM AND QUESTIONABLE ROADS",
            comment: "The road has taverns, side quests, local monsters, and almost no standardized detention paperwork."
        }
    };

    var hoverLines = {
        oracle: ["MUSE // FLOOR COMMENTARY", "The old scanner likes symbols. I gave the symbols tiny jobs."],
        wheel: ["MUSE // FLOOR COMMENTARY", "It is already turning because anticipation is a renewable resource."],
        cake: ["ADMINISTRATOR // FLOOR COMMENTARY", "The examination remains valid despite the frosting drawn on its casing."],
        exit: ["ADMINISTRATOR // RELEASE CONTROL", "Visible is not the same as available. Acquire a credential."],
        ticketmaster: ["MUSE // FLOOR COMMENTARY", "Ask about forms! People behind glass love questions about forms."],
        merchant: ["MUSE // FLOOR COMMENTARY", "The storage cage was full of confiscated nothing. Now it has merchandise."],
        detainee: ["MUSE // FLOOR COMMENTARY", "They completed detention and unlocked loitering as a prestige class."],
        staff: ["ADMINISTRATOR // ACCESS CONTROL", "The cyan handwriting is legally mine to tolerate."],
        village: ["MUSE // FLOOR COMMENTARY", "The road goes somewhere. Several official corridors cannot make that claim."]
    };

    var oracleReadings = {
        possibility: [
            "A door appears after the third attempt. The first two attempts are still judging you.",
            "Something misplaced will become useful shortly after you stop looking dignified.",
            "A tiny administrative victory approaches wearing an unnecessarily large hat."
        ],
        badIdea: [
            "The idea is bad, but unusually well lit. Proceed only if the story is worth the paperwork.",
            "Three warning signs agree. MUSE has added a fourth reading WELCOME.",
            "This path ends in either treasure or a meeting. The cards refuse to say which is worse."
        ],
        thursday: [
            "Next Thursday contains a crow, a delayed message, and one snack of strategic importance.",
            "Thursday is structurally stable. The afternoon has been crossed out in cyan.",
            "Bring patience. Leave room for cake. Ignore any wheel that knows your name."
        ]
    };

    var cakeQuestions = [
        {
            question: "Which voice uses bright cyan throughout the Archive?",
            answers: ["The Administrator", "MUSE", "The Red Channel"],
            correct: 1,
            admin: "Basic signal classification remains intact."
        },
        {
            question: "A sealed client-side page should be treated as…",
            answers: ["True confidential storage", "A decorative interface boundary", "Legally invisible"],
            correct: 1,
            admin: "Correct. Presentation is not encryption."
        },
        {
            question: "The Cake is best described as…",
            answers: ["Confirmed dessert", "Confirmed acronym", "An unresolved prize condition"],
            correct: 2,
            admin: "Acceptable. Its ontology remains outside the syllabus."
        }
    ];

    var defaultState = {
        version: 2,
        introSeen: false,
        activeScene: "hub",
        exit: { hasToken: false, gateOpened: false, tokenSource: "" },
        games: {
            wheelSpins: 0,
            lastWheelPrize: "",
            oracleReadings: 0,
            lastOracleReading: "",
            cakeCompleted: false,
            cakeBestScore: 0
        },
        roleplay: {
            enabled: false,
            charm: 1,
            wits: 1,
            audacity: 1,
            inventory: [],
            flags: {}
        },
        discovered: {
            oracle: false,
            wheel: false,
            cake: false,
            ticketmaster: false,
            merchant: false,
            detainee: false,
            staff: false,
            village: false,
            exit: false
        }
    };

    function copyDefault() {
        return JSON.parse(JSON.stringify(defaultState));
    }

    function readState() {
        var saved;
        var fresh = copyDefault();
        try { saved = JSON.parse(window.localStorage.getItem(STATE_KEY) || "null"); } catch (error) { saved = null; }
        if (!saved || typeof saved !== "object") return fresh;

        fresh.introSeen = Boolean(saved.introSeen);
        fresh.activeScene = sceneMeta[saved.activeScene] ? saved.activeScene : "hub";
        fresh.exit.hasToken = Boolean(saved.exit && saved.exit.hasToken);
        fresh.exit.gateOpened = Boolean(saved.exit && saved.exit.gateOpened);
        fresh.exit.tokenSource = typeof (saved.exit && saved.exit.tokenSource) === "string" ? saved.exit.tokenSource : "";
        fresh.games.wheelSpins = Math.max(0, Number(saved.games && saved.games.wheelSpins) || 0);
        fresh.games.lastWheelPrize = typeof (saved.games && saved.games.lastWheelPrize) === "string" ? saved.games.lastWheelPrize : "";
        fresh.games.oracleReadings = Math.max(0, Number(saved.games && saved.games.oracleReadings) || 0);
        fresh.games.lastOracleReading = typeof (saved.games && saved.games.lastOracleReading) === "string" ? saved.games.lastOracleReading : "";
        fresh.games.cakeCompleted = Boolean(saved.games && saved.games.cakeCompleted);
        fresh.games.cakeBestScore = Math.max(0, Number(saved.games && saved.games.cakeBestScore) || 0);
        fresh.roleplay.enabled = Boolean(saved.roleplay && saved.roleplay.enabled);
        ["charm", "wits", "audacity"].forEach(function (stat) {
            fresh.roleplay[stat] = Math.max(1, Number(saved.roleplay && saved.roleplay[stat]) || 1);
        });
        fresh.roleplay.inventory = saved.roleplay && Array.isArray(saved.roleplay.inventory)
            ? saved.roleplay.inventory.filter(function (item) { return typeof item === "string"; }).slice(0, 40)
            : [];
        fresh.roleplay.flags = saved.roleplay && saved.roleplay.flags && typeof saved.roleplay.flags === "object"
            ? saved.roleplay.flags
            : {};
        Object.keys(fresh.discovered).forEach(function (key) {
            fresh.discovered[key] = Boolean(saved.discovered && saved.discovered[key]);
        });
        return fresh;
    }

    function saveState() {
        try { window.localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (error) { /* Local play still works for this visit. */ }
    }

    function hasItem(item) {
        return state.roleplay.inventory.indexOf(item) !== -1;
    }

    function addItem(item) {
        if (!hasItem(item)) state.roleplay.inventory.push(item);
    }

    function removeItem(item) {
        state.roleplay.inventory = state.roleplay.inventory.filter(function (entry) { return entry !== item; });
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
        });
    }

    function awardToken(source) {
        state.exit.hasToken = true;
        state.exit.tokenSource = source;
        addItem("Exit Token");
        saveState();
        updateRecord();
        elements.stage.classList.add("has-exit-token");
    }

    function setCommentary(speaker, message) {
        elements.speaker.textContent = speaker;
        elements.commentary.textContent = message;
        elements.commentaryBox.dataset.voice = speaker.indexOf("ADMINISTRATOR") === 0
            ? "admin"
            : speaker.indexOf("MUSE") === 0
                ? "muse"
                : "resident";
        elements.commentaryBox.classList.remove("is-speaking");
        window.requestAnimationFrame(function () { elements.commentaryBox.classList.add("is-speaking"); });
    }

    function discoveredCount(list) {
        return list.filter(function (key) { return state.discovered[key]; }).length;
    }

    function updateRecord() {
        var attractionCount = discoveredCount(ATTRACTIONS);
        var groundsCount = discoveredCount(GROUND_SCENES);
        var tokenLabel = state.exit.hasToken ? "Present // " + state.exit.tokenSource : "Missing";
        elements.recordDiscovery.textContent = attractionCount + " / " + ATTRACTIONS.length;
        elements.recordToken.textContent = tokenLabel;
        elements.tokenCompact.textContent = state.exit.hasToken ? "PRESENT" : "MISSING";
        elements.commandExit.textContent = state.exit.hasToken ? "EXIT CREDENTIAL // PRESENT" : "EXIT CREDENTIAL // MISSING";
        elements.recordIdentity.textContent = state.roleplay.enabled ? "Temporary identity issued" : "Not registered";
        elements.inventory.textContent = state.roleplay.inventory.length
            ? state.roleplay.inventory.join(" // ")
            : "No items. Several pockets remain optimistic.";
        elements.inspectObjective.classList.toggle("is-complete", attractionCount === ATTRACTIONS.length);
        elements.groundsObjective.classList.toggle("is-complete", groundsCount > 0);
        elements.tokenObjective.classList.toggle("is-complete", state.exit.hasToken);
        elements.stage.classList.toggle("has-exit-token", state.exit.hasToken);
        elements.stage.classList.toggle("is-released", state.exit.gateOpened);
        document.querySelectorAll("[data-carnival-scene]").forEach(function (button) {
            button.classList.toggle("is-discovered", Boolean(state.discovered[button.dataset.carnivalScene]));
        });
    }

    function sceneStatus(text, restricted) {
        return '<p class="carnival-scene-status' + (restricted ? ' is-restricted' : '') + '">' + text + '</p>';
    }

    function renderOracle() {
        var result = state.games.lastOracleReading
            ? '<div class="carnival-result oracle-result"><span>ASSEMBLED POSSIBILITY</span><p>' + escapeHTML(state.games.lastOracleReading) + '</p></div>'
            : '<div class="carnival-result is-empty"><span>ASSEMBLED POSSIBILITY</span><p>The receptacles are waiting for a question.</p></div>';
        return '<div class="carnival-machine-workbench oracle-workbench"><div class="carnival-scene-machine oracle-scene-machine" aria-hidden="true"><i></i><i></i><i></i></div><div><span class="carnival-old-instruction">ORIGINAL PROCEDURE: INSERT DAMAGED MEMORY SAMPLE</span><strong class="carnival-muse-instruction">MUSE PROCEDURE: ASK SOMETHING DRAMATIC</strong></div></div>' +
            '<p>Choose a category. The scanner will combine one harmless local reading from archived symbolic debris.</p>' +
            '<div class="carnival-preview-options"><button type="button" data-carnival-action="oracle-draw" data-category="possibility">A possibility</button><button type="button" data-carnival-action="oracle-draw" data-category="badIdea">A questionable plan</button><button type="button" data-carnival-action="oracle-draw" data-category="thursday">Next Thursday</button></div>' +
            result + sceneStatus("READINGS COMPLETED // " + state.games.oracleReadings, false);
    }

    function renderWheel() {
        var result = state.games.lastWheelPrize
            ? '<div class="carnival-result wheel-result"><span>COLLECTION SLOT</span><p>' + escapeHTML(state.games.lastWheelPrize) + '</p></div>'
            : '<div class="carnival-result is-empty"><span>COLLECTION SLOT</span><p>Empty, but making hopeful mechanical noises.</p></div>';
        return '<div class="carnival-machine-workbench wheel-workbench"><div class="carnival-scene-machine wheel-scene-machine" aria-hidden="true"><i></i><b></b></div><div><span class="carnival-old-instruction">CALIBRATION CONTROL // AUTHORIZED STAFF</span><strong class="carnival-muse-instruction">PRIZE LEVER // AUTHORIZED EVERYBODY INTERESTING</strong></div></div>' +
            '<p>Pull the repurposed calibration lever. The first spins establish the machine’s deeply serious prize distribution; a detention-release credential is guaranteed by the third spin.</p>' +
            '<button type="button" class="carnival-primary-control" data-carnival-action="wheel-spin">[ pull the oversized prize lever ]</button>' +
            result + sceneStatus("REGISTERED SPINS // " + state.games.wheelSpins, false);
    }

    function renderCake() {
        if (state.games.cakeCompleted) {
            return '<div class="carnival-machine-workbench cake-workbench"><div class="carnival-scene-machine cake-scene-machine" aria-hidden="true"><i>✓</i><i>CAKE</i><i>✓</i></div><div><span class="carnival-old-instruction">APTITUDE STANDARD // SATISFIED</span><strong class="carnival-muse-instruction">DESSERT HERO CERTIFIED!</strong></div></div>' +
                '<div class="carnival-result cake-result"><span>EXAMINATION RESULT</span><p>Clearance Wafer issued. Best result: ' + state.games.cakeBestScore + ' / ' + cakeQuestions.length + '.</p></div>' +
                sceneStatus("CAKE STATUS // STILL PHILOSOPHICALLY DISPUTED", false);
        }

        if (!cakeRun) {
            return '<div class="carnival-machine-workbench cake-workbench"><div class="carnival-scene-machine cake-scene-machine" aria-hidden="true"><i>?</i><i>CAKE</i><i>?</i></div><div><span class="carnival-old-instruction">REHABILITATIVE APTITUDE REASSESSMENT</span><strong class="carnival-muse-instruction">THREE QUESTIONS BETWEEN YOU AND CAKE*</strong></div></div>' +
                '<p>Answer two of three questions correctly. Administrator supplies the standards; MUSE supplies the legally unhelpful prize description.</p>' +
                '<button type="button" class="carnival-primary-control" data-carnival-action="cake-start">[ begin certified dessert examination ]</button>' +
                sceneStatus("*CAKE MAY BE A TOKEN-SHAPED CLEARANCE WAFER", false);
        }

        var question = cakeQuestions[cakeRun.index];
        var answers = question.answers.map(function (answer, index) {
            return '<button type="button" data-carnival-action="cake-answer" data-answer="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + answer + '</button>';
        }).join("");
        var feedback = cakeRun.feedback
            ? '<div class="carnival-quiz-feedback ' + (cakeRun.feedback.correct ? 'is-correct' : 'is-wrong') + '"><strong>' + (cakeRun.feedback.correct ? 'ACCEPTED' : 'REJECTED') + '</strong><p>' + cakeRun.feedback.text + '</p><button type="button" data-carnival-action="cake-next">[ next question ]</button></div>'
            : '<div class="carnival-quiz-options">' + answers + '</div>';
        return '<div class="carnival-quiz-head"><span>QUESTION ' + (cakeRun.index + 1) + ' / ' + cakeQuestions.length + '</span><strong>SCORE ' + cakeRun.score + '</strong></div><h4 class="carnival-quiz-question">' + question.question + '</h4>' + feedback;
    }

    function renderTicketmaster() {
        var ticketLine = hasItem("Ticket 0001")
            ? '<div class="carnival-result"><span>ISSUED OBJECT</span><p>Ticket 0001 // suspiciously identical to every other ticket.</p></div>'
            : '';
        return '<div class="carnival-npc-scene"><div class="carnival-npc-silhouette ticketmaster-npc" aria-hidden="true"><i></i></div><blockquote>“An Exit Token? Certainly. Nobody gets one without authorization. Nobody has authorization without an Exit Token.”</blockquote></div>' +
            '<div class="carnival-preview-options"><button type="button" data-carnival-action="regulations">Ask about regulations</button><button type="button" data-carnival-action="tickets">Inspect the ticket pile</button><button type="button" data-carnival-action="organize">Offer to organize the forms</button></div>' + ticketLine +
            sceneStatus(state.roleplay.enabled ? "TEMPORARY CARNIVAL IDENTITY // ACTIVE" : "IDENTITY FORM // AVAILABLE THROUGH QUESTIONABLE HELPFULNESS", false);
    }

    function renderMerchant() {
        var trade = hasItem("Ticket 0001") && !hasItem("Suspicious Staff Key")
            ? '<button type="button" class="carnival-primary-control" data-carnival-action="merchant-trade">[ trade Ticket 0001 for a suspicious staff key ]</button>'
            : hasItem("Suspicious Staff Key")
                ? '<div class="carnival-result"><span>PREVIOUS TRANSACTION</span><p>One suspicious staff key. No refunds if it opens something.</p></div>'
                : '<p class="dim">The merchant appears interested in numbered paper from the Ticket Office.</p>';
        return '<div class="carnival-npc-scene"><div class="carnival-npc-silhouette merchant-npc" aria-hidden="true"><i></i></div><blockquote>“Currency is a social agreement. Tickets are paper. I am flexible.”</blockquote></div>' +
            '<button type="button" class="carnival-inspect-control" data-carnival-action="merchant-stock">[ inspect the covered merchandise ]</button>' + trade +
            sceneStatus("MARKET LICENSE // WRITTEN BY MUSE IN VERY SMALL PRINT", false);
    }

    function renderDetainee() {
        var extra = state.roleplay.flags.detaineeRumour
            ? '<div class="carnival-result"><span>VOLUNTARY RESIDENT ADVICE</span><p>The Wheel releases everyone eventually. The back office releases curious people faster.</p></div>'
            : '';
        return '<div class="carnival-npc-scene"><div class="carnival-npc-silhouette detainee-npc" aria-hidden="true"><i></i></div><blockquote>“My sentence expired. Then the string lights came on. Circumstances changed.”</blockquote></div>' +
            '<button type="button" class="carnival-inspect-control" data-carnival-action="detainee-rumour">[ ask why they stayed and how they left ]</button>' + extra +
            sceneStatus("DETENTION STATUS // FORMER, PROBABLY", false);
    }

    function renderStaff() {
        var control;
        if (state.roleplay.flags.staffOpened) {
            control = '<div class="carnival-result"><span>BACK OFFICE RECOVERY</span><p>An abandoned emergency Exit Token was recovered from an immaculately labeled drawer.</p></div>';
        } else if (hasItem("Suspicious Staff Key")) {
            control = '<button type="button" class="carnival-primary-control" data-carnival-action="staff-unlock">[ use the suspicious staff key ]</button>';
        } else {
            control = '<button type="button" class="carnival-inspect-control" data-carnival-action="staff-knock">[ knock with unjustified confidence ]</button>';
        }
        return '<div class="carnival-staff-door" aria-hidden="true"><span>STAFF ONLY</span><strong>INTERESTING PEOPLE</strong><small>— amended by MUSE, Acting Administrator of Fun</small></div><p>The original steel door, lock, and access warning remain untouched. Only the definition of authorized personnel has changed.</p>' + control +
            sceneStatus(state.roleplay.flags.staffOpened ? "SERVICE OFFICE // INSPECTED" : "ACCESS // LOCKED, ATTRACTIVELY", !state.roleplay.flags.staffOpened);
    }

    function renderVillage() {
        return '<div class="carnival-route-window" aria-hidden="true"><i></i><span>PERIMETER ROAD</span><b>→</b></div><p>The road is a real route to the Fantasy Village. Its Carnival quests are not connected yet, but the settlement itself can be inspected.</p><div class="carnival-preview-options"><button type="button" data-carnival-action="village-look">Look down the road</button><a class="carnival-route-link" href="/memory_node/attian/fantasyvillage/">Visit the distant village</a></div>' +
            sceneStatus("CROSS-NODE QUESTS // UNDER CONSTRUCTION", false);
    }

    function renderExit() {
        if (state.exit.gateOpened) {
            return '<div class="carnival-release-sequence"><span>RELEASE AUTHORIZATION ACCEPTED</span><strong>GATE OPEN</strong><p>Your sentence has expired. You may leave, or remain voluntarily. MUSE has prepared for both outcomes.</p><div><a href="' + context.returnPath + '">[ leave detention ]</a><button type="button" data-carnival-action="exit-stay">[ stay at the carnival ]</button></div></div>';
        }
        if (state.exit.hasToken) {
            return '<div class="carnival-gate-diagram has-token" aria-hidden="true"><i></i><strong>TOKEN READY</strong><i></i></div><p>Your ' + escapeHTML(state.exit.tokenSource || "locally restored") + ' credential matches the original gate reader. MUSE has stopped drawing extra stars on the scanner long enough for you to use it.</p><button type="button" class="carnival-primary-control" data-carnival-action="exit-present">[ present Exit Token ]</button>' + sceneStatus("RELEASE ROUTE // AUTHORIZED", false);
        }
        return '<div class="carnival-gate-diagram" aria-hidden="true"><i></i><strong>LOCKED</strong><i></i></div><p>The scanner accepts an Exit Token from the Wheel, a clearance wafer from the Cake Trial, or a forgotten token recovered through the grounds.</p><div class="carnival-token-routes"><span>WHEEL // third spin guarantee</span><span>CAKE // two correct answers</span><span>GROUNDS // follow tickets and keys</span></div>' + sceneStatus("RELEASE ROUTE // CREDENTIAL REQUIRED", true);
    }

    function renderScene(sceneId) {
        var renderers = {
            oracle: renderOracle,
            wheel: renderWheel,
            cake: renderCake,
            ticketmaster: renderTicketmaster,
            merchant: renderMerchant,
            detainee: renderDetainee,
            staff: renderStaff,
            village: renderVillage,
            exit: renderExit
        };
        return renderers[sceneId] ? renderers[sceneId]() : "";
    }

    function refreshActiveScene() {
        if (state.activeScene !== "hub") elements.focusBody.innerHTML = renderScene(state.activeScene);
    }

    function openScene(sceneId) {
        var scene = sceneMeta[sceneId];
        if (!scene) return;
        state.activeScene = sceneId;
        state.discovered[sceneId] = true;
        saveState();
        updateRecord();
        elements.stage.dataset.activeScene = sceneId;
        elements.stage.classList.add("is-focused");
        elements.world.setAttribute("aria-hidden", "true");
        elements.world.inert = true;
        elements.focusCode.textContent = scene.code;
        elements.focusTitle.textContent = scene.title;
        elements.focusSummary.textContent = scene.summary;
        elements.focusBody.innerHTML = renderScene(sceneId);
        elements.focus.hidden = false;
        setCommentary(scene.speaker, scene.comment);
        elements.returnHub.focus({ preventScroll: true });
    }

    function returnToHub(options) {
        state.activeScene = "hub";
        saveState();
        elements.stage.classList.remove("is-focused", "is-wheel-spinning");
        delete elements.stage.dataset.activeScene;
        elements.focus.hidden = true;
        elements.world.removeAttribute("aria-hidden");
        elements.world.inert = false;
        setCommentary("MUSE // ACTING ADMINISTRATOR OF FUN", state.exit.hasToken
            ? "You have a token! The old gate is pretending not to look nervous."
            : "The old facility had one recreation schedule. I improved it until it became a jurisdiction.");
        if (!options || options.focus !== false) {
            var first = document.querySelector('[data-carnival-scene="wheel"]');
            if (first) first.focus({ preventScroll: true });
        }
    }

    function clearTransferTimers() {
        transferTimers.forEach(function (timer) { window.clearTimeout(timer); });
        transferTimers = [];
    }

    function revealCarnival() {
        clearTransferTimers();
        elements.access.hidden = true;
        elements.transfer.hidden = true;
        elements.experience.hidden = false;
        document.body.classList.remove("carnival-transfer-running");
        document.body.classList.add("carnival-open");
        document.title = "MUSE'S DETENTION CARNIVAL // SECTOR M-00";
        state.introSeen = true;
        saveState();
        updateRecord();
        if (state.activeScene !== "hub" && sceneMeta[state.activeScene]) openScene(state.activeScene);
        else returnToHub({ focus: false });
    }

    function beginTransfer() {
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) return revealCarnival();
        clearTransferTimers();
        document.body.classList.add("carnival-transfer-running");
        elements.beginTransfer.disabled = true;
        elements.transferSteps.forEach(function (step, index) {
            transferTimers.push(window.setTimeout(function () {
                elements.transferSteps.forEach(function (item, itemIndex) {
                    item.classList.toggle("is-complete", itemIndex < index);
                    item.classList.toggle("is-active", itemIndex === index);
                });
                if (index === 2) elements.transfer.querySelector(".detention-muse-line").textContent = "MUSE: I HEARD THE TRANSFER! IS IT A VISITOR? IT'S A VISITOR!";
            }, index * 430));
        });
        transferTimers.push(window.setTimeout(revealCarnival, 2300));
    }

    function resetCarnival() {
        try { window.localStorage.removeItem(STATE_KEY); } catch (error) { /* Nothing local to clear. */ }
        state = copyDefault();
        state.introSeen = true;
        cakeRun = null;
        updateRecord();
        returnToHub({ focus: false });
        setCommentary("ADMINISTRATOR // LOCAL RECORD CONTROL", "Carnival progress cleared. The court disposition remains separate and session-bound.");
    }

    function choose(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function handleOracle(control) {
        var pool = oracleReadings[control.dataset.category] || oracleReadings.possibility;
        state.games.oracleReadings += 1;
        state.games.lastOracleReading = choose(pool);
        if (state.games.oracleReadings === 1) addItem("Threadbare Prophecy");
        saveState();
        updateRecord();
        refreshActiveScene();
        setCommentary("MUSE // ORACLE OPERATOR", state.games.lastOracleReading + " See? Extremely possibly accurate.");
    }

    function handleWheel() {
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var prizes = ["Certificate of Adequate Luck", "One Premium Compliment", "Permit for a Tiny Festival", "A Word: Defenestration", "Golden Nothing // Limited Edition"];
        var finish = function () {
            state.games.wheelSpins += 1;
            if (!state.exit.hasToken && state.games.wheelSpins >= 3) {
                state.games.lastWheelPrize = "EXIT TOKEN // improbably legitimate";
                awardToken("Prize Wheel");
                setCommentary("MUSE // EXTREMELY PROFESSIONAL HOST", "JACKPOT! Freedom! Legally processed by a machine I improved with bulbs!");
            } else {
                state.games.lastWheelPrize = choose(prizes);
                addItem(state.games.lastWheelPrize);
                setCommentary("MUSE // PRIZE DISTRIBUTION", "You won: " + state.games.lastWheelPrize + ". Its value is emotional and therefore tax-resistant.");
            }
            elements.stage.classList.remove("is-wheel-spinning");
            saveState();
            updateRecord();
            refreshActiveScene();
        };
        if (wheelTimer) return;
        elements.stage.classList.add("is-wheel-spinning");
        setCommentary("MUSE // PRIZE DISTRIBUTION", "Probability is being encouraged. Please make a suspenseful face.");
        if (reduced) return finish();
        wheelTimer = window.setTimeout(function () { wheelTimer = null; finish(); }, 1450);
    }

    function startCake() {
        cakeRun = { index: 0, score: 0, feedback: null };
        refreshActiveScene();
        setCommentary("ADMINISTRATOR // EXAMINATION CONTROL", "Assessment opened. MUSE is prohibited from providing hints through frosting gestures.");
    }

    function answerCake(control) {
        if (!cakeRun || cakeRun.feedback) return;
        var question = cakeQuestions[cakeRun.index];
        var correct = Number(control.dataset.answer) === question.correct;
        if (correct) cakeRun.score += 1;
        cakeRun.feedback = {
            correct: correct,
            text: correct ? question.admin : "Correct answer: " + question.answers[question.correct] + ". " + question.admin
        };
        refreshActiveScene();
        setCommentary(correct ? "ADMINISTRATOR // EXAMINATION CONTROL" : "MUSE // UNQUALIFIED TUTOR", correct
            ? question.admin
            : "That was not the approved answer, but confidence has historically survived worse obstacles.");
    }

    function nextCake() {
        if (!cakeRun) return;
        cakeRun.index += 1;
        cakeRun.feedback = null;
        if (cakeRun.index >= cakeQuestions.length) {
            state.games.cakeBestScore = Math.max(state.games.cakeBestScore, cakeRun.score);
            if (cakeRun.score >= 2) {
                state.games.cakeCompleted = true;
                addItem("Certified Cake Clearance Wafer");
                awardToken("Cake Trial Clearance Wafer");
                setCommentary("MUSE // DESSERT APPEALS BOARD", "YOU PASSED! This wafer is flat cake with administrative authority. Nobody can prove otherwise.");
            } else {
                setCommentary("ADMINISTRATOR // EXAMINATION CONTROL", "One correct answer is insufficient. The terminal permits immediate reassessment without penalty.");
            }
            cakeRun = null;
            saveState();
            updateRecord();
        }
        refreshActiveScene();
    }

    function handleGroundAction(action) {
        if (action === "regulations") {
            setCommentary("TICKETMASTER // OFFICE WINDOW", "The regulations are inside the cabinet requiring the authorization described by the regulations.");
        } else if (action === "tickets") {
            state.roleplay.flags.ticketInspected = true;
            addItem("Ticket 0001");
            setCommentary("TICKETMASTER // OFFICE WINDOW", "You may inspect one. Please ignore that every ticket has the same serial number.");
        } else if (action === "organize") {
            state.roleplay.enabled = true;
            state.roleplay.flags.identityIssued = true;
            addItem("Temporary Carnival Identity");
            setCommentary("MUSE // PERSONNEL DEPARTMENT", "You helped with forms! You are now officially someone who helped with forms. Identity achieved!");
        } else if (action === "merchant-stock") {
            state.roleplay.flags.merchantVisited = true;
            setCommentary("MERCHANT // STORAGE CAGE B", hasItem("Ticket 0001") ? "That numbered paper interests me. I have a key with similarly uncertain provenance." : "Bring me something numbered, official-looking, and unlikely to be missed.");
        } else if (action === "merchant-trade") {
            removeItem("Ticket 0001");
            addItem("Suspicious Staff Key");
            state.roleplay.flags.merchantTrade = true;
            setCommentary("MERCHANT // TRANSACTION COMPLETE", "A perfect exchange: paper nobody values for a key nobody admits losing.");
        } else if (action === "detainee-rumour") {
            state.roleplay.flags.detaineeRumour = true;
            addItem("Back Office Rumour");
            setCommentary("FORMER DETAINEE // QUIETLY", "Tickets become keys. Keys open offices. Offices contain things Administrator labeled too accurately to notice.");
        } else if (action === "staff-knock") {
            setCommentary("UNKNOWN // BEHIND THE DOOR", "Three knocks answer yours. MUSE calls this a conversation. The lock remains less social.");
        } else if (action === "staff-unlock") {
            state.roleplay.flags.staffOpened = true;
            removeItem("Suspicious Staff Key");
            addItem("Recovered Emergency Exit Token");
            awardToken("Back Office Recovery");
            setCommentary("ADMINISTRATOR // INVENTORY AUDIT", "That emergency token was not intended as a scavenger-hunt reward. It is nevertheless valid.");
        } else if (action === "village-look") {
            state.roleplay.flags.villageInspected = true;
            setCommentary("MUSE // TOURISM OFFICE", "The village appears peaceful from here. This means the drama is indoors or waiting for a quest trigger.");
        }
        saveState();
        updateRecord();
        refreshActiveScene();
    }

    function handleExit(action) {
        if (action === "exit-present" && state.exit.hasToken) {
            state.exit.gateOpened = true;
            saveState();
            updateRecord();
            refreshActiveScene();
            setCommentary("ADMINISTRATOR // RELEASE CONTROL", "Sentence complete. The gate is open. Remaining at the Carnival is now voluntary.");
        } else if (action === "exit-stay") {
            returnToHub();
            setCommentary("MUSE // VERY CASUALLY", "You can still play, you know. The games do not stop when you are free. I made sure.");
        }
    }

    function handleFocusAction(event) {
        var control = event.target.closest("[data-carnival-action]");
        if (!control) return;
        var action = control.dataset.carnivalAction;
        if (action === "oracle-draw") handleOracle(control);
        else if (action === "wheel-spin") handleWheel();
        else if (action === "cake-start") startCake();
        else if (action === "cake-answer") answerCake(control);
        else if (action === "cake-next") nextCake();
        else if (action.indexOf("exit-") === 0) handleExit(action);
        else handleGroundAction(action);
    }

    function bindWorld() {
        document.querySelectorAll("[data-carnival-scene]").forEach(function (button) {
            var sceneId = button.dataset.carnivalScene;
            button.addEventListener("click", function () { openScene(sceneId); });
            ["mouseenter", "focus"].forEach(function (eventName) {
                button.addEventListener(eventName, function () {
                    if (elements.focus.hidden && hoverLines[sceneId]) setCommentary(hoverLines[sceneId][0], hoverLines[sceneId][1]);
                });
            });
        });
        elements.returnHub.addEventListener("click", returnToHub);
        elements.focusBody.addEventListener("click", handleFocusAction);
        elements.reset.addEventListener("click", resetCarnival);
        elements.beginTransfer.addEventListener("click", beginTransfer);
        elements.skipTransfer.addEventListener("click", revealCarnival);
    }

    function collectElements() {
        return {
            access: document.getElementById("detentionAccessPanel"),
            transfer: document.getElementById("detentionTransferPanel"),
            transferSteps: Array.prototype.slice.call(document.querySelectorAll("[data-transfer-step]")),
            beginTransfer: document.getElementById("carnivalBeginTransfer"),
            skipTransfer: document.getElementById("carnivalSkipTransfer"),
            experience: document.getElementById("carnivalExperience"),
            stage: document.getElementById("carnivalStage"),
            world: document.getElementById("carnivalWorld"),
            focus: document.getElementById("carnivalFocusPanel"),
            focusCode: document.getElementById("carnivalFocusCode"),
            focusTitle: document.getElementById("carnivalFocusTitle"),
            focusSummary: document.getElementById("carnivalFocusSummary"),
            focusBody: document.getElementById("carnivalFocusBody"),
            returnHub: document.getElementById("carnivalReturnHub"),
            recordCase: document.getElementById("carnivalRecordCase"),
            recordToken: document.getElementById("carnivalRecordToken"),
            recordDiscovery: document.getElementById("carnivalRecordDiscovery"),
            recordIdentity: document.getElementById("carnivalRecordIdentity"),
            inventory: document.getElementById("carnivalInventoryState"),
            tokenCompact: document.getElementById("carnivalTokenCompact"),
            commandExit: document.getElementById("carnivalCommandExit"),
            inspectObjective: document.querySelector('[data-carnival-objective="inspect"]'),
            tokenObjective: document.querySelector('[data-carnival-objective="token"]'),
            groundsObjective: document.querySelector('[data-carnival-objective="grounds"]'),
            reset: document.getElementById("carnivalResetState"),
            commentaryBox: document.querySelector(".carnival-commentary"),
            speaker: document.getElementById("carnivalSpeaker"),
            commentary: document.getElementById("carnivalCommentary")
        };
    }

    function init(options) {
        context = options || {};
        elements = collectElements();
        if (!elements.experience || !elements.transfer) return;
        state = readState();
        elements.recordCase.textContent = "CASE " + ((context.caseFile && context.caseFile.id) || "M-00");
        bindWorld();
        updateRecord();
        if (state.introSeen) revealCarnival();
        else {
            elements.experience.hidden = true;
            elements.transfer.hidden = false;
        }
    }

    window.AttianCarnival = { init: init };
}());
