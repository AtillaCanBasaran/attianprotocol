(function () {
    var MAX_SCAN = 30;
    var PENDING_SLOTS = 6;

    function imgExists(src) {
        return new Promise(function (resolve) {
            var img = new Image();
            img.onload = function () { resolve(src); };
            img.onerror = function () { resolve(null); };
            img.src = src;
        });
    }

    async function firstExisting(candidates) {
        for (var i = 0; i < candidates.length; i += 1) {
            var found = await imgExists(candidates[i]);
            if (found) return found;
        }
        return null;
    }

    function pad(num) {
        return String(num).padStart(4, "0");
    }

    function escapeHTML(text) {
        return String(text)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    var creatureMeta = {
        1: {
            code: "CRTR-FEL-0001",
            title: "PAMUK",
            subtitle: "also indexed as: Gollum",
            rarity: "RARE / HOUSEHOLD BOSS",
            classes: "rare-card",
            tags: ["CAT", "SHADOW", "DRAMA"],
            latin: "Felis catus",
            inn: "Household thingy / 40°55'50\"N - 29°7'2\"E",
            size: "small",
            age: "11",
            eyes: "Blue",
            fur: "Soft / weaponized",
            skills: "Professional sleeper, affection economist, emotional damage specialist. Can be antisocial for an entire day without compromising human attachment.",
            quest: "Issues no obvious quest. This is interpreted as a high-level quest requiring patience, tribute, and correct blanket placement.",
            comment: "Administrator restoration note: Subject aura detected: royal, soft, and socially unavailable. The restored version correctly amplifies the household-boss energy. Original fragment retained as proof that even divinity starts as a regular photograph."
        },
        2: {
            code: "CRTR-FLD-0002",
            title: "FIELD ENTITY 02",
            subtitle: "restored encounter file",
            rarity: "UNCOMMON / QUEST-ADJACENT",
            tags: ["FIELD", "QUEST", "WATCHER"],
            latin: "Pending identification",
            inn: "Recovered from travel-adjacent visual residue",
            size: "small / pending",
            age: "Unknown",
            eyes: "Restoration-enhanced / pending review",
            fur: "Pending image-specific notes",
            skills: "Maintains suspicious narrative presence. Capable of turning a casual photograph into an encounter record, which is rude but useful.",
            quest: "Likely demands attention first, interpretation later. Standard archive nuisance behavior.",
            comment: "Administrator restoration note: I enhanced the creature-shaped importance until the image stopped pretending it was casual. This one has sidequest posture. Do not encourage it."
        },
        3: {
            code: "CRTR-FLD-0003",
            title: "FIELD ENTITY 03",
            subtitle: "urban encounter file",
            rarity: "COMMON / HIGH VALUE",
            tags: ["URBAN", "SOFT SIGNAL", "NPC"],
            latin: "Pending identification",
            inn: "Street-level memory coordinate pending",
            size: "smol to small",
            age: "Unknown",
            eyes: "Pending photo review",
            fur: "Pending photo review",
            skills: "Converts environment into story texture. Possibly harmless. Possibly a tiny official of some invisible department.",
            quest: "Stares, exists, and waits for the subject to invent meaning. The subject usually complies instantly.",
            comment: "Administrator restoration note: This restored fragment has the usual problem: too much personality for insufficient documentation. I blame the subject's tendency to assign lore to anything with eyes."
        },
        4: {
            code: "CRTR-FLD-0004",
            title: "FIELD ENTITY 04",
            subtitle: "motion / companion-energy file",
            rarity: "COMMON / PARTY BUFF",
            tags: ["ALLY", "MOTION", "ROUTE"],
            latin: "Pending identification",
            inn: "Pathway, plaza, field edge, or wherever joy interrupts the schedule",
            size: "small to big boi",
            age: "Unknown",
            eyes: "Pending photo review",
            fur: "Pending photo review",
            skills: "Morale engine, route inspector, unauthorized party member. Can convert ordinary walking into a heroic escort sequence.",
            quest: "May initiate follow quest, fetch prophecy, or sudden loyalty cutscene without prior consent from the narrative department.",
            comment: "Administrator restoration note: The image has been upgraded from animal sighting to party-member candidate. Dangerous. Effective. Annoyingly wholesome."
        },
        5: {
            code: "CRTR-FLD-0005",
            title: "FIELD ENTITY 05",
            subtitle: "newly restored encounter",
            rarity: "NEW / AWAITING TAXONOMY",
            tags: ["NEW", "QUEST", "PENDING"],
            latin: "Pending identification",
            inn: "Recovered from incoming creature batch",
            size: "Pending",
            age: "Unknown",
            eyes: "Pending Administrator inspection",
            fur: "Pending Administrator inspection",
            skills: "Recently restored. Currently radiating enough creature energy to justify a file, which is already more responsibility than it asked for.",
            quest: "Quest parameters pending. The archive expects unnecessary emotional projection shortly.",
            comment: "Administrator restoration note: New creature file accepted. The restored version has been promoted from image to encounter. Original fragment remains below, sulking in lower resolution."
        },
        6: {
            code: "CRTR-FLD-0006",
            title: "FIELD ENTITY 06",
            subtitle: "newly restored encounter",
            rarity: "NEW / AWAITING TAXONOMY",
            tags: ["NEW", "FIELD", "PENDING"],
            latin: "Pending identification",
            inn: "Recovered from incoming creature batch",
            size: "Pending",
            age: "Unknown",
            eyes: "Pending Administrator inspection",
            fur: "Pending Administrator inspection",
            skills: "Visual fragment restored successfully. Personality inference is underway, because apparently the archive has chosen nonsense as a methodology.",
            quest: "Likely a minor encounter with major over-interpretation potential.",
            comment: "Administrator restoration note: Another creature has entered the index. I have not approved the emotional escalation, but I have formatted it nicely."
        }
    };

    function defaultCreatureMeta(index) {
        return {
            code: "CRTR-AUTO-" + pad(index),
            title: "AUTO-RESTORED CREATURE " + String(index).padStart(2, "0"),
            subtitle: "auto-detected incoming file",
            rarity: "PENDING / AUTO-INDEXED",
            tags: ["AUTO", "PENDING", "FIELD"],
            latin: "Pending identification",
            inn: "Auto-detected from /images/creature" + index,
            size: "Pending",
            age: "Unknown",
            eyes: "Pending Administrator inspection",
            fur: "Pending Administrator inspection",
            skills: "This creature appeared because matching image files were detected. Metadata is temporary. Blame automation, then thank it.",
            quest: "Quest parameters pending. Subject must provide context before the Administrator starts inventing dangerous lore.",
            comment: "Administrator auto-index note: New restored image detected. I created the file because apparently numbered creatures reproduce through filename conventions now."
        };
    }

    function creatureCard(index, restored, original) {
        var m = creatureMeta[index] || defaultCreatureMeta(index);
        var tags = m.tags.map(function (tag) { return "<span>" + escapeHTML(tag) + "</span>"; }).join("\n            ");
        var originalHTML = original ? [
            "<details class=\"original-fragment\">",
            "    <summary>inspect original fragment</summary>",
            "    <img src=\"" + original + "\" alt=\"Original creature fragment " + index + "\">",
            "</details>"
        ].join("\n        ") : "";

        return [
            "<article class=\"creature-card " + escapeHTML(m.classes || "") + "\">",
            "    <div class=\"creature-card-top\">",
            "        <div>",
            "            <span class=\"creature-code\">" + escapeHTML(m.code) + "</span>",
            "            <h2>" + escapeHTML(m.title) + "</h2>",
            "            <p class=\"dim\">" + escapeHTML(m.subtitle) + "</p>",
            "        </div>",
            "        <span class=\"creature-rarity\">" + escapeHTML(m.rarity) + "</span>",
            "    </div>",
            "    <div class=\"creature-image-slot\"><img class=\"restored-visual\" src=\"" + restored + "\" alt=\"Restored creature fragment " + index + "\"></div>",
            "    <p class=\"restored-note\">Restored creature visual by the Administrator. Original fragment " + (original ? "attached below for humiliating comparison." : "not detected yet. Suspicious.") + "</p>",
            originalHTML,
            "    <div class=\"creature-type-row\">" + tags + "</div>",
            "    <dl class=\"creature-meta\">",
            "        <dt>Latin Name</dt><dd>" + escapeHTML(m.latin) + "</dd>",
            "        <dt>I.N.N.</dt><dd>" + escapeHTML(m.inn) + "</dd>",
            "        <dt>Size Class</dt><dd>" + escapeHTML(m.size) + "</dd>",
            "        <dt>Age</dt><dd>" + escapeHTML(m.age) + "</dd>",
            "        <dt>Eyes</dt><dd>" + escapeHTML(m.eyes) + "</dd>",
            "        <dt>Fur</dt><dd>" + escapeHTML(m.fur) + "</dd>",
            "    </dl>",
            "    <div class=\"creature-section\"><h3>Skills / Profession / Abstract</h3><p>" + escapeHTML(m.skills) + "</p></div>",
            "    <div class=\"creature-section\"><h3>Quest Behavior</h3><p>" + escapeHTML(m.quest) + "</p></div>",
            "    <p class=\"creature-admin\">" + escapeHTML(m.comment) + "</p>",
            "</article>"
        ].join("\n");
    }

    function pendingCreatureCard(index) {
        return [
            "<article class=\"creature-card pending-card\">",
            "    <div class=\"creature-card-top\"><div><span class=\"creature-code\">CRTR-PENDING-" + pad(index) + "</span><h2>INCOMING CREATURE SLOT " + index + "</h2><p class=\"dim\">waiting for creature" + index + ".png</p></div><span class=\"creature-rarity\">EMPTY / READY</span></div>",
            "    <div class=\"creature-image-slot\">CREATURE" + index + "_IMAGE_PENDING</div>",
            "    <p class=\"creature-admin\">Administrator staging note: Drop <code>creature" + index + ".png</code> and optionally <code>creature" + index + "_original.jpeg</code> into <code>/images</code>. I will do the clerical suffering.</p>",
            "</article>"
        ].join("\n");
    }

    async function loadCreatures() {
        var container = document.getElementById("creatureDexAuto");
        if (!container) return;
        var cards = [];
        var lastFound = 0;
        for (var i = 1; i <= MAX_SCAN; i += 1) {
            var restored = await firstExisting(["/images/creature" + i + ".png", "/images/creature" + i + ".jpeg", "/images/creature" + i + ".jpg"]);
            if (restored) {
                var original = await firstExisting(["/images/creature" + i + "_original.jpeg", "/images/creature" + i + "_original.jpg", "/images/creature" + i + "_original.png"]);
                cards.push(creatureCard(i, restored, original));
                lastFound = i;
            }
        }
        for (var p = lastFound + 1; p <= lastFound + PENDING_SLOTS; p += 1) {
            cards.push(pendingCreatureCard(p));
        }
        container.innerHTML = cards.join("\n");
    }

    var artifactTypes = [
        { prefix: "drawing", label: "Drawing Fragment", code: "ART-DRW", type: "Drawing / visual output" },
        { prefix: "memory", label: "Memory Fragment", code: "ART-MEM", type: "Restored memory image" },
        { prefix: "mini", label: "Miniature Fragment", code: "ART-MINI", type: "Miniature / object-memory" }
    ];

    function artifactCard(serial, config, index, restored, original) {
        var title = config.label + " " + String(index).padStart(2, "0");
        var originalHTML = original ? [
            "<details class=\"original-fragment\">",
            "    <summary>inspect original fragment</summary>",
            "    <img src=\"" + original + "\" alt=\"Original artifact fragment " + serial + "\">",
            "</details>"
        ].join("\n                ") : "";
        return [
            "<details class=\"artifact-card\"" + (serial === 1 ? " open" : "") + ">",
            "    <summary class=\"artifact-summary\">",
            "        <span class=\"artifact-thumb-slot\"><img class=\"restored-visual\" src=\"" + restored + "\" alt=\"Restored thumbnail for " + escapeHTML(title) + "\"></span>",
            "        <span class=\"artifact-code\">" + config.code + "-" + pad(serial) + "</span>",
            "        <b>" + escapeHTML(title) + "</b>",
            "        <small>restored visual fragment</small>",
            "    </summary>",
            "    <div class=\"artifact-body\">",
            "        <div>",
            "            <div class=\"artifact-image-slot\"><img class=\"restored-visual\" src=\"" + restored + "\" alt=\"Restored artifact fragment " + serial + "\"></div>",
            "            <p class=\"restored-note\">Restored by the Administrator. Displaying how the archive insists this fragment is remembered.</p>",
            "            " + originalHTML,
            "        </div>",
            "        <div class=\"artifact-copy\">",
            "            <dl class=\"artifact-meta\"><dt>Artifact Type</dt><dd>" + escapeHTML(config.type) + "</dd><dt>Timestamp State</dt><dd>Pending</dd><dt>Integrity</dt><dd>Restored / source " + (original ? "attached" : "pending") + "</dd></dl>",
            "            <p>Placeholder text pending. Visual payload installed automatically from filename sequence; final memory label, context, and Administrator complaint can be added later.</p>",
            "            <p class=\"artifact-admin\">Administrator restoration note: This fragment has been promoted from loose image to archived evidence. Original version " + (original ? "is available below, looking less theatrical but technically useful." : "was not detected. Very convenient. Suspiciously convenient.") + "</p>",
            "        </div>",
            "    </div>",
            "</details>"
        ].join("\n");
    }

    async function loadArtifacts() {
        var container = document.getElementById("artifactGridAuto");
        if (!container) return;
        var cards = [];
        var serial = 1;
        for (var t = 0; t < artifactTypes.length; t += 1) {
            var config = artifactTypes[t];
            for (var i = 1; i <= MAX_SCAN; i += 1) {
                var restored = await firstExisting(["/images/" + config.prefix + i + ".png", "/images/" + config.prefix + i + "_restored.png", "/images/" + config.prefix + i + ".jpeg", "/images/" + config.prefix + i + "_original.png"]);
                if (restored) {
                    var original = await firstExisting(["/images/" + config.prefix + i + "_original.jpeg", "/images/" + config.prefix + i + "_original.jpg", "/images/" + config.prefix + i + "_original.png"]);
                    if (original === restored) original = null;
                    cards.push(artifactCard(serial, config, i, restored, original));
                    serial += 1;
                }
            }
        }
        container.innerHTML = cards.join("\n");
        var featured = document.getElementById("artifactFeaturedAuto");
        if (featured && cards.length) {
            featured.innerHTML = [
                "<div><div class=\"artifact-image-slot artifact-feature-slot\"><img class=\"restored-visual\" src=\"/images/drawing1.png\" alt=\"Featured restored artifact fragment\"></div><p class=\"restored-note\">Featured restored artifact by the Administrator. Original fragment available in the first record below.</p></div>",
                "<div><p class=\"artifact-kicker\">FEATURED SLOT // RESTORED MATERIAL</p><h2>Primary Recovered Artifact</h2><p>Restored visual fragments are now installed automatically from the image sequence. Final titles and narrative context remain pending, because apparently the archive must become beautiful before anyone finishes the paperwork.</p><dl class=\"artifact-meta\"><dt>Archive Class</dt><dd>Visual / Physical Memory Artifact</dd><dt>Integrity</dt><dd>Restored by the Administrator</dd><dt>Display Mode</dt><dd>Restored first / original collapsible</dd></dl></div>"
            ].join("\n");
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        loadCreatures();
        loadArtifacts();
    });
}());
