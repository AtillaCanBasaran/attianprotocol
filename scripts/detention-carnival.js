(function () {
    "use strict";

    var STATE_KEY = "attian-carnival-state-v1";
    var ATTRACTIONS = ["oracle", "wheel", "cake"];
    var GROUND_SCENES = ["ticketmaster", "merchant", "detainee", "staff", "village"];
    var transferTimers = [];

    var defaultState = {
        version: 1,
        introSeen: false,
        activeScene: "hub",
        exit: { hasToken: false, gateOpened: false },
        games: { wheelSpins: 0, oracleReadings: 0, cakeCompleted: false },
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

    var scenes = {
        oracle: {
            code: "GAME_001 // MEMORY DIVINATION",
            title: "The Maybe Machine",
            summary: "An obsolete fragment scanner now displays possibilities with professionally unverified confidence.",
            speaker: "MUSE // PROBABILITY MYSTIC",
            comment: "THE FUTURE! THE PAST! THE PRESENT! THE— wait, what is the mystical word for next Thursday?",
            body: '<div class="carnival-scene-machine oracle-scene-machine" aria-hidden="true"><i></i><i></i><i></i></div><p>Three illuminated receptacles wait for original archive cards. The reading chamber is connected; its deck and interpretations remain sealed for the next construction phase.</p><div class="carnival-preview-options"><button type="button" data-carnival-action="oracle-question">Ask about a possibility</button><button type="button" data-carnival-action="oracle-question">Ask about a bad idea</button><button type="button" data-carnival-action="oracle-question">Ask about next Thursday</button></div><p class="carnival-scene-status">ORACLE DECK // NOT YET INSTALLED</p>'
        },
        wheel: {
            code: "GAME_002 // PRIZE REDISTRIBUTION",
            title: "Wheel Of Nice Things And Tax Consequences",
            summary: "The carnival centerpiece turns slowly inside a probability apparatus that the Administrator definitely did not approve for prizes.",
            speaker: "MUSE // DEPARTMENT HEAD, APPARENTLY",
            comment: "It has prizes, momentum, lights, and one magnificently improbable Exit Token. It currently lacks only the part where I let you pull the lever.",
            body: '<div class="carnival-scene-machine wheel-scene-machine" aria-hidden="true"><i></i><b></b></div><p>The wheel is physically present, mildly enormous, and awaiting its reward table. Future spins will place prizes into the collection slot and update the detention record without leaving this room.</p><div class="carnival-preview-slot"><span>COLLECTION SLOT</span><strong>EMPTY // EXPECTANT</strong></div><button type="button" class="carnival-inspect-control" data-carnival-action="wheel-lever">[ inspect the very tempting lever ]</button><p class="carnival-scene-status">SPIN CONTROL // ADMINISTRATIVELY DISCONNECTED</p>'
        },
        cake: {
            code: "GAME_003 // CERTIFIED DESSERT EXAMINATION",
            title: "The Cake Trial",
            summary: "A suspiciously orderly aptitude terminal promises cake, certification, and perhaps an acceptable substitute for release authorization.",
            speaker: "ADMINISTRATOR // RELUCTANT SUPERVISOR",
            comment: "This is the only attraction with a syllabus. MUSE has drawn icing over most of it, but the underlying assessment remains recoverable.",
            body: '<div class="carnival-scene-machine cake-scene-machine" aria-hidden="true"><i>?</i><i>!</i><i>?</i></div><p>The examination chamber will eventually combine real knowledge, archive lore, logic, and questions MUSE submitted under several false departmental names.</p><div class="carnival-preview-slot"><span>GRAND PRIZE</span><strong>THE CAKE // EXISTENCE UNCONFIRMED</strong></div><button type="button" class="carnival-inspect-control" data-carnival-action="cake-syllabus">[ inspect provisional syllabus ]</button><p class="carnival-scene-status">QUESTION BANK // UNDER REVIEW</p>'
        },
        exit: {
            code: "RELEASE CONTROL // LOCKED",
            title: "Administrative Exit Gate",
            summary: "The way out is clearly visible. This is helpful mainly because it confirms how unavailable it currently is.",
            speaker: "ADMINISTRATOR // RELEASE CONTROL",
            comment: "A valid Exit Token, approved equivalent, or future judicial override is required. The ordinary return link remains available because this is fiction, not unlawful confinement.",
            body: '<div class="carnival-gate-diagram" aria-hidden="true"><i></i><strong>LOCKED</strong><i></i></div><p>MUSE has decorated the scanner with stars. The scanner has not interpreted this as authorization.</p><div class="carnival-preview-slot"><span>CREDENTIAL SCAN</span><strong>NO TOKEN DETECTED</strong></div><p class="carnival-scene-status is-restricted">RELEASE ROUTE // PENDING FUTURE GAMEPLAY</p>'
        },
        ticketmaster: {
            code: "GROUNDS_001 // TICKET OFFICE",
            title: "The Ticketmaster",
            summary: "A narrow office sits behind reinforced glass. Its occupant keeps counting tickets that all appear to have the same number.",
            speaker: "TICKETMASTER // PROCEDURALLY DELIGHTED",
            comment: "An Exit Token? Certainly. Nobody gets one without authorization. Nobody has authorization without an Exit Token. A remarkably efficient system.",
            body: '<p>This interaction is the first doorway toward the optional roleplaying layer. For now, the figure is willing to entertain three lines of inquiry.</p><div class="carnival-preview-options"><button type="button" data-carnival-action="regulations">Ask where the regulations are kept</button><button type="button" data-carnival-action="tickets">Inspect the suspicious ticket pile</button><button type="button" data-carnival-action="organize">Offer to help organize the tickets</button></div><p class="carnival-scene-status">TEMPORARY CARNIVAL IDENTITY FORM // FILED SOMEWHERE NEARBY</p>'
        },
        merchant: {
            code: "GROUNDS_002 // MARKET STALL",
            title: "Travelling Merchant",
            summary: "A folding stall offers objects whose usefulness decreases whenever someone asks for a price.",
            speaker: "MUSE // UNLICENSED MARKET ANNOUNCER",
            comment: "The merchant has a permit! It is handwritten, unsigned, and permits the holder to write permits, which seems comprehensive.",
            body: '<p>Future stock may include certificates, disguises, rumours, and one item described only as “probably a key.” Trading and inventory are not active yet.</p><button type="button" class="carnival-inspect-control" data-carnival-action="merchant-stock">[ inspect the covered merchandise ]</button><p class="carnival-scene-status">INVENTORY EXCHANGE // COUNTER CLOSED</p>'
        },
        detainee: {
            code: "GROUNDS_003 // VOLUNTARY RESIDENT",
            title: "Former Detainee",
            summary: "Someone who claims to have completed their sentence is still leaning comfortably against the same fence.",
            speaker: "FORMER DETAINEE // STATUS DISPUTED",
            comment: "Leaving is allowed once you earn it. Staying is allowed once nobody remembers to object. I found the second process more efficient.",
            body: '<p>The resident knows an alternative exit story, several pieces of MUSE lore, and why the wheel sometimes turns when nobody is touching it. None are available during foundation work.</p><button type="button" class="carnival-inspect-control" data-carnival-action="detainee-rumour">[ ask why they stayed ]</button><p class="carnival-scene-status">ALTERNATIVE RELEASE QUEST // DORMANT</p>'
        },
        staff: {
            code: "GROUNDS_004 // RESTRICTED PASSAGE",
            title: "Interesting People Only",
            summary: "The sign originally said STAFF ONLY. The correction is in cyan paint and has suspiciously cheerful handwriting.",
            speaker: "ADMINISTRATOR // ACCESS CONTROL",
            comment: "The passage is locked. The amendment to its sign does not alter its permission model, despite MUSE submitting it three times.",
            body: '<div class="carnival-staff-door" aria-hidden="true"><span>STAFF ONLY</span><strong>INTERESTING PEOPLE</strong></div><p>Backstage exploration and secret routes belong to the later roleplaying layer. The door currently responds only by looking more interesting.</p><button type="button" class="carnival-inspect-control" data-carnival-action="staff-knock">[ knock with unjustified confidence ]</button><p class="carnival-scene-status is-restricted">ACCESS // LOCKED, ATTRACTIVELY</p>'
        },
        village: {
            code: "GROUNDS_005 // DISTANT ROUTE",
            title: "The Village Road",
            summary: "Beyond the carnival fencing, a route bends toward an unfinished fantasy settlement with its own quests and extremely local drama.",
            speaker: "MUSE // TOURISM OFFICE",
            comment: "The road goes somewhere! This is already more than can be said for several official corridors.",
            body: '<p>The road will eventually connect carnival quests and characters to the Fantasy Village. Its present destination can still be visited independently.</p><a class="carnival-route-link" href="/memory_node/attian/fantasyvillage/">[ inspect the distant village route ]</a><p class="carnival-scene-status">CROSS-NODE QUEST LINK // FUTURE EXPANSION</p>'
        }
    };

    var hoverLines = {
        oracle: ["MUSE // ATTRACTION PREVIEW", "Three cards, several possibilities, absolutely no refunds for symbolic ambiguity."],
        wheel: ["MUSE // ATTRACTION PREVIEW", "That slow movement is atmospheric. It is not spinning without supervision. Probably."],
        cake: ["ADMINISTRATOR // ATTRACTION PREVIEW", "A controlled assessment terminal. The cake graphics are unauthorized but structurally harmless."],
        exit: ["ADMINISTRATOR // RELEASE CONTROL", "The gate recognizes attention. It does not recognize attention as a credential."],
        ticketmaster: ["MUSE // GROUNDS PREVIEW", "A tiny office containing a remarkably large quantity of circular logic."],
        merchant: ["MUSE // GROUNDS PREVIEW", "Do not ask where the stock came from unless you enjoy longer forms."],
        detainee: ["MUSE // GROUNDS PREVIEW", "Former detainee! Current loiterer! Excellent conversational posture!"],
        staff: ["ADMINISTRATOR // ACCESS CONTROL", "The handwriting is not an approved access-control mechanism."],
        village: ["MUSE // GROUNDS PREVIEW", "There are taverns down that road. And consequences. Mostly taverns first."]
    };

    var actionReplies = {
        "oracle-question": ["MUSE // MACHINE STATUS", "The cards wiggle meaningfully, then remember their data set has not been installed."],
        "wheel-lever": ["ADMINISTRATOR // SAFETY NOTICE", "Inspection is permitted. Pulling it will become possible only after rewards and failure states exist."],
        "cake-syllabus": ["MUSE // EXAM PREPARATION", "Study everything, remember nothing, and look confident near desserts."],
        regulations: ["TICKETMASTER // OFFICE WINDOW", "The regulations are locked inside the cabinet requiring the authorization described by the regulations."],
        tickets: ["TICKETMASTER // OFFICE WINDOW", "Every ticket reads 0001. The Ticketmaster calls this an elegant counting system."],
        organize: ["MUSE // RPG PREVIEW", "A form slides halfway beneath the glass, notices the RPG system is dormant, and retreats with dignity."],
        "merchant-stock": ["MERCHANT // COVERED STALL", "A label reads: ONE CERTIFICATE OF MEDIOCRE LUCK. Value pending economic invention."],
        "detainee-rumour": ["FORMER DETAINEE // QUIETLY", "I earned freedom. Then MUSE added string lights. Circumstances changed."],
        "staff-knock": ["UNKNOWN // BEHIND THE DOOR", "Three knocks answer yours. Administrator records this as infrastructure settling."],
    };

    var state;
    var context;
    var elements;

    function copyDefault() {
        return JSON.parse(JSON.stringify(defaultState));
    }

    function readState() {
        var saved;
        try { saved = JSON.parse(window.localStorage.getItem(STATE_KEY) || "null"); } catch (error) { saved = null; }
        if (!saved || saved.version !== 1) return copyDefault();
        var fresh = copyDefault();
        fresh.introSeen = Boolean(saved.introSeen);
        fresh.activeScene = scenes[saved.activeScene] ? saved.activeScene : "hub";
        fresh.exit.hasToken = Boolean(saved.exit && saved.exit.hasToken);
        fresh.exit.gateOpened = Boolean(saved.exit && saved.exit.gateOpened);
        fresh.games.wheelSpins = Math.max(0, Number(saved.games && saved.games.wheelSpins) || 0);
        fresh.games.oracleReadings = Math.max(0, Number(saved.games && saved.games.oracleReadings) || 0);
        fresh.games.cakeCompleted = Boolean(saved.games && saved.games.cakeCompleted);
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
        try { window.localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch (error) { /* Experience remains session-local. */ }
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
        var attractions = discoveredCount(ATTRACTIONS);
        var grounds = discoveredCount(GROUND_SCENES);
        elements.recordDiscovery.textContent = attractions + " / " + ATTRACTIONS.length;
        elements.recordToken.textContent = state.exit.hasToken ? "Present" : "Missing";
        elements.tokenCompact.textContent = state.exit.hasToken ? "PRESENT" : "MISSING";
        elements.recordIdentity.textContent = state.roleplay.enabled ? "Registered" : "Not registered";
        elements.inventory.textContent = state.roleplay.inventory.length
            ? state.roleplay.inventory.join(" // ")
            : "No items. Several pockets remain optimistic.";
        elements.inspectObjective.classList.toggle("is-complete", attractions === ATTRACTIONS.length);
        elements.groundsObjective.classList.toggle("is-complete", grounds > 0);
        elements.tokenObjective.classList.toggle("is-complete", state.exit.hasToken);
        document.querySelectorAll("[data-carnival-scene]").forEach(function (button) {
            button.classList.toggle("is-discovered", Boolean(state.discovered[button.dataset.carnivalScene]));
        });
    }

    function openScene(sceneId) {
        var scene = scenes[sceneId];
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
        elements.focusBody.innerHTML = scene.body;
        elements.focus.hidden = false;
        setCommentary(scene.speaker, scene.comment);
        elements.returnHub.focus({ preventScroll: true });
    }

    function returnToHub(options) {
        state.activeScene = "hub";
        saveState();
        elements.stage.classList.remove("is-focused");
        delete elements.stage.dataset.activeScene;
        elements.focus.hidden = true;
        elements.world.removeAttribute("aria-hidden");
        elements.world.inert = false;
        setCommentary("MUSE // UNAUTHORIZED HOST", "Everything is exactly where I left it, except the parts that move by themselves. Choose something interesting!");
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
        elements.transfer.hidden = true;
        elements.experience.hidden = false;
        document.title = "MUSE'S DETENTION CARNIVAL // SECTOR M-00";
        document.body.classList.remove("carnival-transfer-running");
        document.body.classList.add("carnival-open");
        state.introSeen = true;
        saveState();
        updateRecord();
        if (state.activeScene !== "hub" && scenes[state.activeScene]) openScene(state.activeScene);
        else returnToHub({ focus: false });
    }

    function beginTransfer() {
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            revealCarnival();
            return;
        }
        clearTransferTimers();
        document.body.classList.add("carnival-transfer-running");
        elements.beginTransfer.disabled = true;
        elements.transferSteps.forEach(function (step, index) {
            transferTimers.push(window.setTimeout(function () {
                elements.transferSteps.forEach(function (item, itemIndex) {
                    item.classList.toggle("is-complete", itemIndex < index);
                    item.classList.toggle("is-active", itemIndex === index);
                });
                if (index === 2) {
                    elements.transfer.querySelector(".detention-muse-line").textContent = "MUSE: I HEARD THE TRANSFER! IS IT A VISITOR? IT'S A VISITOR!";
                }
            }, index * 430));
        });
        transferTimers.push(window.setTimeout(revealCarnival, 2300));
    }

    function resetCarnival() {
        try { window.localStorage.removeItem(STATE_KEY); } catch (error) { /* Nothing local to clear. */ }
        state = copyDefault();
        updateRecord();
        returnToHub({ focus: false });
        setCommentary("ADMINISTRATOR // LOCAL RECORD CONTROL", "Carnival progress cleared. The conviction record remains separate and session-bound.");
    }

    function handleFocusAction(event) {
        var control = event.target.closest("[data-carnival-action]");
        if (!control) return;
        var reply = actionReplies[control.dataset.carnivalAction];
        if (reply) setCommentary(reply[0], reply[1]);
    }

    function bindWorld() {
        document.querySelectorAll("[data-carnival-scene]").forEach(function (button) {
            var sceneId = button.dataset.carnivalScene;
            button.addEventListener("click", function () { openScene(sceneId); });
            ["mouseenter", "focus"].forEach(function (eventName) {
                button.addEventListener(eventName, function () {
                    if (elements.focus.hidden && hoverLines[sceneId]) {
                        setCommentary(hoverLines[sceneId][0], hoverLines[sceneId][1]);
                    }
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
