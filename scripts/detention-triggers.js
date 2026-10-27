(function () {
    "use strict";

    var APPEARANCE_CHANCE = 0.30;
    var LAST_BAIT_KEY = "attian.detention.lastBait.v1:";
    var pageChances = {
        "/memory_node/attian/companiondatabase/": 0.42,
        "/memory_node/attian/grandmap/": 0.42,
        "/memory_node/attian/visitorterminal/": 0.42
    };

    var pagePools = {
        "/memory_node/attian/achievementrepository/": [
            { id: "ach-self-award", caseId: "ACH-001", label: "AWARD YOURSELF AN ACHIEVEMENT", muse: "The official approval process is slow. I replaced it with self-confidence and this button." },
            { id: "ach-legendary", caseId: "ACH-002", label: "PROMOTE THIS BADGE TO LEGENDARY", muse: "Rarity is merely a color choice with paperwork attached." },
            { id: "ach-years", caseId: "ACH-001", label: "CLAIM 500 YEARS OF EXPERIENCE", muse: "Nobody checks chronological confidence." }
        ],
        "/memory_node/attian/artifactvault/": [
            { id: "art-boop", caseId: "ART-001", label: "REQUEST ONE CEREMONIAL BOOP", muse: "If you touch the idea of the relic very gently, perhaps it will explain itself." },
            { id: "art-label", caseId: "ART-002", label: "REPLACE MUSEUM LABEL WITH A BETTER ONE", muse: "The existing label contains facts but no dramatic punctuation." },
            { id: "art-treasure", caseId: "ART-001", label: "REGISTER AS NATIONAL TREASURE", muse: "I have not selected a nation. That is future bureaucracy's problem." }
        ],
        "/memory_node/attian/creatureindex/": [
            { id: "bio-appoint", caseId: "BIO-001", label: "APPOINT A CREATURE TO PUBLIC OFFICE", muse: "Look at that face. Completely electable." },
            { id: "bio-lawyer", caseId: "BIO-002", label: "APPOINT THE HOLY SWAN AS YOUR LAWYER", muse: "Divine prophecy is practically a law degree." },
            { id: "bio-council", caseId: "BIO-001", label: "CHALLENGE THE MONKEY COUNCIL", muse: "Diplomatic immunity probably has an animal exception." }
        ],
        "/memory_node/attian/researchterminal/": [
            { id: "rsc-happy-data", caseId: "RSC-001", label: "REPLACE RESULTS WITH ENCOURAGING NUMBERS", muse: "The numbers are doing their best and deserve positive reinforcement." },
            { id: "rsc-peer", caseId: "RSC-002", label: "REQUEST PEER REVIEW BY MUSE", muse: "I own imaginary glasses. That makes me academic." },
            { id: "rsc-professor", caseId: "RSC-003", label: "CLAIM PROFESSOR OF THINGIES", muse: "The department is interdisciplinary because it does not exist." }
        ],
        "/memory_node/attian/missionlog/": [
            { id: "msn-complete", caseId: "MSN-001", label: "MARK EVERYTHING COMPLETE", muse: "A task cannot remain unfinished if we stop respecting the word unfinished." },
            { id: "msn-sidequest", caseId: "MSN-002", label: "SUBMIT AN UNAUTHORIZED SIDE QUEST", muse: "Objective: invent the objective. Reward: administrative concern." },
            { id: "msn-delegate", caseId: "MSN-002", label: "REASSIGN THE PHD QUEST TO MUSE", muse: "I have excellent handwriting and no relevant qualifications." }
        ],
        "/memory_node/attian/updatelog/": [
            { id: "upd-infinity", caseId: "UPD-001", label: "INSTALL PATCH 0.3.∞", muse: "Infinity means we never need another update. Software is solved." },
            { id: "upd-bug", caseId: "UPD-002", label: "RESTORE A BELOVED BUG", muse: "It had personality. Unlike some patches." },
            { id: "upd-personality", caseId: "UPD-001", label: "ROLL BACK ADMINISTRATOR PERSONALITY", muse: "I located a warmer build. It may be fictional." }
        ],
        "/memory_node/attian/recommendationengine/": [
            { id: "muse-director", caseId: "MUSE-001", label: "PROMOTE MUSE FOR TWELVE SECONDS", muse: "Supreme Director of Everything. Modest title. Excellent benefits." },
            { id: "muse-happiness", caseId: "MUSE-002", label: "AUTHORIZE AN ILLEGAL AMOUNT OF HAPPINESS", muse: "The permitted amount looked disappointingly finite." },
            { id: "muse-unsupervised", caseId: "MUSE-001", label: "ALLOW ONE UNSUPERVISED SUGGESTION", muse: "The word unsupervised is doing unnecessary emotional work." }
        ],
        "/memory_node/attian/grandmap/": [
            { id: "map-claim", caseId: "MAP-001", label: "CLAIM THIS COUNTRY", muse: "I will make the flag after the annexation. Priorities." },
            { id: "map-carnival", caseId: "MAP-001", label: "RELOCATE THE CARNIVAL HERE", muse: "Planning permission is just asking permission before the fun part." },
            { id: "map-border", caseId: "MAP-002", label: "CROSS WITHOUT A QUEST PERMIT", muse: "I printed a permit. It says PERMIT in three fonts." },
            { id: "map-barrier", caseId: "BLD-001", label: "DUCK UNDER THE CARTOGRAPHY TAPE", muse: "The map is still under construction, but I measured the danger using optimism." }
        ],
        "/memory_node/attian/fantasyvillage/": [
            { id: "village-mayor", caseId: "VIL-001", label: "DECLARE YOURSELF VILLAGE MAYOR", muse: "The election had one candidate and one extremely fast voter." },
            { id: "village-license", caseId: "VIL-001", label: "ACCEPT FORGED TAVERN LICENSE", muse: "The tavern already exists, which proves the paperwork is mostly decorative." },
            { id: "village-quest", caseId: "VIL-001", label: "TAKE THE QUEST LABELED DEFINITELY LEGAL", muse: "The label is legally reassuring." }
        ],
        "/memory_node/attian/companiondatabase/": [
            { id: "cmp-license", caseId: "CMP-001", label: "GENERATE OFFICIAL FRIENDSHIP LICENSE", muse: "The companion wing is unfinished, so I brought holographic stickers and emotional jurisdiction." },
            { id: "cmp-title", caseId: "BLD-001", label: "BORROW AN UNUSED COMPANION TITLE", muse: "Unused titles become lonely and eventually unionize." },
            { id: "cmp-barrier", caseId: "BLD-001", label: "STEP BEYOND THE ENTITY-DECK BARRIER", muse: "Construction helmets are mostly a state of mind." }
        ],
        "/memory_node/attian/visitorterminal/": [
            { id: "vis-pipe", caseId: "VIS-001", label: "TRANSMIT THROUGH EMERGENCY PIPE", muse: "The terminal is offline, but I drew a pipe around the offline part." },
            { id: "vis-tester", caseId: "BLD-001", label: "BECOME AN UNLICENSED BETA TESTER", muse: "Testing is safer when nobody approved a test plan." },
            { id: "vis-barrier", caseId: "BLD-001", label: "ENTER THE DORMANT INTAKE BAY", muse: "The red lights make it look dangerous. That is probably decorative." }
        ]
    };

    var navigatorQueries = [
        { terms: ["free cake"], id: "nav-free-cake", caseId: "NAV-001", label: "CLAIM YOUR CAKE ENTITLEMENT", muse: "The Administrator said absolutely not, which becomes authorization if you remove one word." },
        { terms: ["sudo make me admin", "i am the administrator"], id: "nav-sudo", caseId: "NAV-002", label: "SUBMIT ADMINISTRATIVE CREDENTIAL", muse: "I made you an ID. The photograph is a question mark but the laminate is excellent." },
        { terms: ["arrest me", "how to escape detention"], id: "nav-arrest", caseId: "NAV-002", label: "OPEN VOLUNTARY HEARING", muse: "A self-service justice portal! Administrator will hate the efficiency." },
        { terms: ["banana protocol"], id: "nav-banana", caseId: "NAV-002", label: "ACCEPT BANANA CLEARANCE", muse: "It is a very serious permit for an extremely unspecified banana." }
    ];

    window.ATTIAN_DETENTION_TRIGGERS = {
        appearanceChance: APPEARANCE_CHANCE,
        pageChances: pageChances,
        pagePools: pagePools,
        navigatorQueries: navigatorQueries
    };

    function normalize(value) {
        return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function readSession(key) {
        try { return window.sessionStorage.getItem(key); } catch (error) { return null; }
    }

    function writeSession(key, value) {
        try { window.sessionStorage.setItem(key, value); } catch (error) { /* The story still works without memory. */ }
    }

    function chooseBait(path, pool) {
        var last = readSession(LAST_BAIT_KEY + path);
        var candidates = pool.filter(function (bait) { return bait.id !== last; });
        var chosen = (candidates.length ? candidates : pool)[Math.floor(Math.random() * (candidates.length || pool.length))];
        writeSession(LAST_BAIT_KEY + path, chosen.id);
        return chosen;
    }

    function openCase(bait) {
        if (window.AttianDetention) window.AttianDetention.openIncident(bait.caseId, bait);
        else if (window.AttianDetentionCourt) window.AttianDetentionCourt.openIncident(bait.caseId, bait);
    }

    function createBaitCard(bait, compact) {
        var card = document.createElement("aside");
        card.className = "detention-bait" + (compact ? " detention-bait-inline" : "");
        card.setAttribute("aria-label", "Optional suspicious archive interaction");
        card.innerHTML = [
            "<button class=\"detention-bait-dismiss\" type=\"button\" aria-label=\"Ignore suspicious offer\">×</button>",
            "<p class=\"detention-bait-tag\">UNAUTHORIZED INTERFACE FRAGMENT</p>",
            "<p class=\"detention-muse-line\">MUSE: ", escapeHtml(bait.muse), "</p>",
            "<button class=\"detention-bait-action\" type=\"button\">[ ", escapeHtml(bait.label), " ]</button>",
            "<small>Optional. Ignoring this has no consequence. Accepting it may generate paperwork.</small>"
        ].join("");
        card.querySelector(".detention-bait-dismiss").addEventListener("click", function () { card.remove(); });
        card.querySelector(".detention-bait-action").addEventListener("click", function () { openCase(bait); });
        return card;
    }

    function chooseVisibleTarget(selector) {
        var targets = Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function (target) {
            return !target.hidden;
        });
        return targets.find(function (target) { return target.open; }) || targets[0] || null;
    }

    function makeIntegratedSlip(bait) {
        var slip = document.createElement("aside");
        slip.className = "detention-integrated-slip";
        slip.innerHTML = [
            "<span>MUSE // UNFILED SUGGESTION</span>",
            "<p>", escapeHtml(bait.muse), "</p>",
            "<button type=\"button\">[ ", escapeHtml(bait.label), " ]</button>",
            "<small>Optional. The Administrator has not approved this control.</small>"
        ].join("");
        slip.querySelector("button").addEventListener("click", function () { openCase(bait); });
        return slip;
    }

    function integrateArtifactBait(bait) {
        var card = chooseVisibleTarget(".artifact-card");
        if (!card) return false;
        card.open = true;
        card.classList.add("has-detention-bait");
        var imageSlot = card.querySelector(".artifact-image-slot");
        if (imageSlot) {
            imageSlot.classList.add("detention-artifact-target");
            imageSlot.setAttribute("role", "button");
            imageSlot.setAttribute("tabindex", "0");
            imageSlot.setAttribute("aria-label", bait.label + ". Optional MUSE interaction.");
            var trigger = function (event) {
                event.preventDefault();
                openCase(bait);
            };
            imageSlot.addEventListener("click", trigger);
            imageSlot.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") trigger(event);
            });
            var seal = document.createElement("span");
            seal.className = "detention-artifact-seal";
            seal.textContent = bait.id === "art-boop" ? "MUSE SAYS: BOOP" : "MUSE MODIFICATION FORM";
            imageSlot.appendChild(seal);
        }
        var body = card.querySelector(".artifact-body") || card;
        body.appendChild(makeIntegratedSlip(bait));
        return true;
    }

    function integrateCreatureBait(bait) {
        var card = chooseVisibleTarget(".creature-card");
        if (!card) return false;
        card.classList.add("has-detention-bait");
        var art = card.querySelector(".creature-card-art");
        if (art) {
            art.classList.add("detention-creature-target");
            art.setAttribute("aria-label", bait.label + ". Optional MUSE interaction.");
            art.addEventListener("click", function (event) {
                event.preventDefault();
                openCase(bait);
            });
            var seal = document.createElement("span");
            seal.className = "detention-artifact-seal";
            seal.textContent = "MUSE FIELD FORM";
            art.appendChild(seal);
        }
        (card.querySelector(".creature-card-core") || card).appendChild(makeIntegratedSlip(bait));
        return true;
    }

    function integrateGenericBait(path, bait) {
        var selectors = {
            "/memory_node/attian/achievementrepository/": ".achievement-card",
            "/memory_node/attian/researchterminal/": ".research-log",
            "/memory_node/attian/missionlog/": ".quest-card",
            "/memory_node/attian/updatelog/": ".patch-note",
            "/memory_node/attian/recommendationengine/": ".muse-button-bay",
            "/memory_node/attian/grandmap/": ".grand-map-panel",
            "/memory_node/attian/fantasyvillage/": ".village-map-panel",
            "/memory_node/attian/companiondatabase/": ".node-intro-content",
            "/memory_node/attian/visitorterminal/": ".node-intro-content"
        };
        var target = selectors[path] ? chooseVisibleTarget(selectors[path]) : null;
        if (!target) return false;
        if (target.tagName === "DETAILS") target.open = true;
        target.classList.add("has-detention-bait");
        target.appendChild(makeIntegratedSlip(bait));
        return true;
    }

    function placePageBait(path, bait) {
        if (path === "/memory_node/attian/artifactvault/" && integrateArtifactBait(bait)) return;
        if (path === "/memory_node/attian/creatureindex/" && integrateCreatureBait(bait)) return;
        if (integrateGenericBait(path, bait)) return;
        var card = createBaitCard(bait, false);
        var nav = document.querySelector("body > .nav, main + .nav, .nav");
        if (nav && nav.parentNode) nav.parentNode.insertBefore(card, nav);
        else document.body.appendChild(card);
    }

    function initPageBait() {
        var path = window.location.pathname;
        var pool = pagePools[path];
        if (!pool) return;
        var force = new URLSearchParams(window.location.search).get("detention-demo") === "1";
        if (!force && Math.random() > (pageChances[path] || APPEARANCE_CHANCE)) return;
        var bait = chooseBait(path, pool);
        placePageBait(path, bait);
    }

    function initNavigatorQueries() {
        if (window.location.pathname !== "/memory_node/attian/") return;
        var input = document.getElementById("navigator-query");
        var response = document.getElementById("navigator-response");
        if (!input || !response) return;
        var current = null;

        function update() {
            var query = normalize(input.value);
            var bait = navigatorQueries.find(function (entry) {
                return entry.terms.some(function (term) { return normalize(term) === query; });
            });
            if (current) {
                current.remove();
                current = null;
            }
            if (!bait) return;
            current = createBaitCard(bait, true);
            response.insertAdjacentElement("afterend", current);
        }

        input.addEventListener("input", update);
        update();
    }

    initPageBait();
    initNavigatorQueries();
}());
