(function () {
    var MAX_SCAN = 30;
    var PENDING_SLOTS = 0;
    var ARTIFACT_IMAGE_BASE = "/images/artifactvault/";
    var CREATURE_IMAGE_BASE = "/images/creatureindex/";
    var externalArchiveContent = window.ATTIAN_ARCHIVE_CONTENT || {};

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

    function thumbCandidates(src) {
        var stem = String(src || "").replace(/\.[^.]+$/, "");
        return [stem + "_thumb.avif", stem + "_thumb.webp", src];
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

    function rarityClass(rarity) {
        var label = String(rarity || "").toLowerCase();
        if (label.includes("mythic")) return "rarity-mythic";
        if (label.includes("legendary")) return "rarity-legendary";
        if (label.includes("epic")) return "rarity-epic";
        if (label.includes("rare")) return "rarity-rare";
        if (label.includes("uncommon")) return "rarity-uncommon";
        return "rarity-common";
    }

    function chipList(items) {
        return (items || []).map(function (item) {
            return "<b>[" + escapeHTML(item) + "]</b>";
        }).join("\n                ");
    }

    function creatureSkillButtons(skills, details) {
        return (skills || []).map(function (skill) {
            var explanation = (details && details[skill]) || "The archive has a name for this ability and no responsible explanation yet.";
            return [
                "<button class=\"creature-skill-button\" type=\"button\" aria-expanded=\"false\" data-skill-title=\"" + escapeHTML(skill) + "\" data-skill-description=\"" + escapeHTML(explanation) + "\">",
                "    <span>" + escapeHTML(skill) + "</span><i aria-hidden=\"true\">[ ? ]</i>",
                "</button>"
            ].join("");
        }).join("");
    }

    function creatureProfileHTML(m) {
        if (!m.skillSet && !m.professions && !m.abstract) {
            return "<div class=\"creature-section\"><h3>Skills / Profession / Abstract</h3><p>" + escapeHTML(m.skills || "Pending") + "</p></div>";
        }
        return [
            "<div class=\"creature-section creature-profile\"><h3>Profile Matrix</h3>",
            "    <div class=\"creature-profile-grid\">",
            "        <div class=\"creature-field\"><span>Skills</span><p class=\"creature-chip-row\">" + chipList(m.skillSet) + "</p></div>",
            "        <div class=\"creature-field\"><span>Professions</span><p class=\"creature-chip-row\">" + chipList(m.professions) + "</p></div>",
            "        <div class=\"creature-field creature-field-wide\"><span>Abstract</span><p>" + escapeHTML(m.abstract || "Pending Administrator summary.") + "</p></div>",
            "    </div>",
            "</div>"
        ].join("\n");
    }

    function creatureQuestHTML(m) {
        if (!m.questName && !m.questBehavior) {
            return "<div class=\"creature-section\"><h3>Quest Behavior</h3><p>" + escapeHTML(m.quest || "Pending") + "</p></div>";
        }
        return [
            "<div class=\"creature-section creature-quest\"><h3>Quest Behavior</h3>",
            "    <p><b>[" + escapeHTML(m.questName || "Unlabeled Quest") + "]</b></p>",
            "    <p>" + escapeHTML(m.questBehavior || "Behavior pending. Suspiciously convenient.") + "</p>",
            "</div>"
        ].join("\n");
    }

    var creatureMeta = {
        1: {
            code: "CRTR-CP-0001",
            title: "PAMUK, THE VEILED PRINCE",
            subtitle: "ELEGANCE WITHOUT COURAGE",
            rarity: "LEGENDARY / NON-INTERACTIVE COMPANION",
            classes: "legendary-card",
            tags: ["FELINE", "DOMESTIC", "NOBLE"],
            stats: { Power: 2, Speed: 6, Courage: 1, Wisdom: 5, Charisma: 10, Stealth: 2 },
            latin: "Felis catus persicus pamukensis",
            inn: "Private Residence, Turkiye",
            size: "Small-medium",
            age: "11 years old. A senior who deserves respect, though not because of combat achievements.",
            eyes: "Blue. Beautiful. Filled with delicate distrust.",
            fur: "Extremely soft. High maintenance. Built for beauty, not for field operations.",
            skillSet: ["Elegant Retreat", "Blanket Camouflage", "Panic Slide", "Advanced Vision"],
            skillDetails: {
                "Elegant Retreat": "Immediately exits any encounter containing an unfamiliar human. Speed increases with social expectation.",
                "Blanket Camouflage": "Hides beneath a blanket while leaving a perfectly readable cat-shaped outline. Pamuk counts this as stealth.",
                "Panic Slide": "Converts polished flooring and fear into emergency movement. Directional control is not included.",
                "Advanced Vision": "Observes household activity from a secure distance and judges it with extremely blue eyes."
            },
            professions: ["Household Noble", "Decorative Sovereign", "Companion"],
            abstract: "Senior Persian cat, household noble, and defensive specialist whose preferred combat strategy is leaving before combat begins.",
            questType: "PASSIVE COMPANION",
            questStatus: "ONGOING",
            questName: "Maintain the Veiled Prince",
            questBehavior: "Respect personal space. Provide soft surfaces. Do not expect bravery.",
            questReward: "Rare royal approval and permanent white fur on everything.",
            story: "Before swans delivered prophecy, before monkeys formed councils, before gangster cats outsourced diplomacy, there was Pamuk. He might once have been named Gollum, but destiny was reshaped through softer branding and better judgment. When undisturbed, he is silent, fluffy, composed, and faintly offended by the existence of noise. When an unknown person appears, he performs the ancient defense rite: a desperate floor-slide toward the nearest bedroom, followed by emergency concealment beneath a blanket. This plan leaves most of his body outline visible to anyone with functional eyesight. He considers it flawless. It is not. For what Pamuk lacks in courage, he compensates for in softness, beauty, and the dramatic vulnerability of a cursed aristocrat.",
            comment: "Administrator note: First recorded creature and somehow already an argument against field reliability. The Subject calls this cowardice beloved. I call it a soft, expensive alarm system with no alarm."
        },
        2: {
            code: "CRTR-FLD-0001",
            title: "HOLY SWAN OF PROPHECIES",
            subtitle: "PREMIUM GRADE POND ANGEL",
            rarity: "MYTHIC / MAIN QUEST ENCOUNTER",
            tags: ["DIVINE", "FLYING", "WATER"],
            stats: { Power: 7, Speed: 9, Courage: 9, Wisdom: 10, Charisma: 8, Stealth: 5 },
            latin: "Cygnus tokyoensis nuntius",
            inn: "Tokyo City Lake, Japan",
            size: "Small-medium",
            age: "Unknown. Possibly ancient. Possibly a reincarnation of a previous swan.",
            eyes: "Judgmental. Black. Fully aware of the plot.",
            fur: "It is a swan. It has feathers. Ceremonial feathers, apparently.",
            skillSet: ["Silent Judgement", "Prophecy Delivery", "Divine Flight", "Pilgrimage Mark"],
            skillDetails: {
                "Silent Judgement": "Says nothing. The target supplies the entire moral lesson independently.",
                "Prophecy Delivery": "Assigns a life-changing objective through posture, eye contact, and unreasonable elegance.",
                "Divine Flight": "Leaves by air before follow-up questions can damage the mystique.",
                "Pilgrimage Mark": "Converts an ordinary walk into a main quest with no map and suspicious emotional timing."
            },
            professions: ["Main Quest Herald", "Prophecy Delivery", "Overqualified Pond NPC"],
            abstract: "Urban swan promoted to divine herald after delivering a silent order to close an old chapter and begin a pilgrimage.",
            questType: "MAIN QUEST",
            questStatus: "ACTIVE",
            questName: "Following the Pilgrimage",
            questBehavior: "End the obsolete call. Continue forward through Tokyo. Treat the encounter as prophecy.",
            questReward: "Pilgrimage status and one chapter conclusively closed.",
            story: "During a phone call with an ex, which is already a cursed side quest disguised as communication, the traveler wandered through Tokyo and found himself beside a city lake. There, floating with illegal levels of dignity, appeared a white swan. It did not honk. It did not beg for bread. It simply drifted across the water as if the gods had outsourced emotional damage assessment to local wildlife. The message, though wordless, was understood: the previous chapter was ending. Stop talking to ghosts on the telephone. Proceed. Naturally, the traveler took a picture. Documentation is sacred. Also, humans panic without evidence.",
            comment: "Administrator note: The swan did not speak. The Subject still received a full quest objective, which is either symbolism, projection, or excellent pond management. I have filed it under all three."
        },
        3: {
            code: "CRTR-FLD-0002",
            title: "ANCIENT TURTLE OF DETOURS",
            subtitle: "SHELL-BACKED SAGE OF QUESTIONABLE ADVICE",
            rarity: "RARE / ALTERNATE QUEST ENCOUNTER",
            tags: ["AQUATIC", "WISE", "DETOUR"],
            stats: { Power: 3, Speed: 1, Courage: 7, Wisdom: 10, Charisma: 6, Stealth: 6 },
            latin: "Testudo tokyoensis bibendum",
            inn: "Tokyo City Lake, Japan",
            size: "Small",
            age: "Unclear. Old enough to remember several empires, several bad decisions, and at least one tourist overinterpreting a reptile.",
            eyes: "Calm, ancient, and faintly entertained.",
            fur: "None. It is a turtle. It has a shell. The moss aesthetic has been noted and reluctantly tolerated.",
            skillSet: ["Ancient Side-Eye", "Slow but Inevitable", "Detour Mapping", "Tavern Sense"],
            skillDetails: {
                "Ancient Side-Eye": "Reduces dramatic urgency by reminding the hero that destiny can wait until after snacks.",
                "Slow but Inevitable": "Acts last. Still arrives before the Subject finishes deciding where to eat.",
                "Detour Mapping": "Reveals side streets and irresponsible alternate routes ignored by prophecy.",
                "Tavern Sense": "Detects nearby food, drink, and places where the main quest can be postponed responsibly."
            },
            professions: ["Alternative Quest Giver", "Pond Hermit", "Hydration Advocate"],
            abstract: "Pond-side sage who accepts the Swan's prophecy but recommends snacks, wandering, and a less self-important route.",
            questType: "ALTERNATE QUEST",
            questStatus: "OPTIONAL",
            questName: "Detour of Spirits",
            questBehavior: "Interrupt destiny for food, strange streets, and one irresponsible drink.",
            questReward: "Perspective +1 and the tavern route revealed.",
            story: "At the edge of the same Tokyo pond, beneath the shadow of the Holy Swan's unbearable elegance, another figure waited: a turtle. It sat half-hidden near the corner of the water, still as an old temple stone and twice as judgmental. Unlike the Swan, it did not radiate divine urgency. It radiated the energy of someone who had watched many heroes receive prophecies and then ruin them by taking everything too seriously. The Swan had given the Main Quest. The Turtle offered the Alternative Route: destiny is real, but so are bars, side streets, late-night lights, and the spiritual value of getting slightly lost.",
            comment: "Administrator note: Finally, a creature with operational realism. Fate may proceed after snacks. I dislike how reasonable this is."
        },
        4: {
            code: "CRTR-FLD-0003",
            title: "THE KYOTO MONKEY COUNCIL",
            subtitle: "ZERO-HUMAN-TRUST TRIO",
            rarity: "EPIC / FACTION QUEST ENCOUNTER",
            tags: ["PRIMATE", "ROYAL", "FACTION"],
            stats: { Power: 8, Speed: 7, Courage: 9, Wisdom: 8, Charisma: 4, Stealth: 5 },
            latin: "Macaca fuscata consilium kyotensis",
            inn: "Kyoto Monkey Park, Japan",
            size: "Small-medium",
            age: "Unknown. The King appears young for rule, which is rarely a disqualifier in monarchy. The Advisor looks old enough to manipulate him. The Bodyguard looks old enough to remove witnesses.",
            eyes: "Tired authority, suspicious calculation, and politely postponed violence.",
            fur: "Brown. Monkey-coded.",
            skillSet: ["Council Fury", "Banana Decree", "Human Repulsion", "Three-Vote Majority"],
            skillDetails: {
                "Council Fury": "Three monkeys agree that humans are the problem. Consensus grants a substantial intimidation bonus.",
                "Banana Decree": "Issues law with no appeal process and unclear fruit-based enforcement.",
                "Human Repulsion": "Distrust rises automatically whenever a tourist approaches with a camera.",
                "Three-Vote Majority": "The King, Advisor, and Bodyguard vote together. Abstention is discouraged by the Bodyguard."
            },
            professions: ["Mountain King", "Political Whisperer", "Personal Guard"],
            abstract: "Three Kyoto macaques operating as king, advisor, and bodyguard recruit the Subject against the human invasion while temporarily ignoring his species.",
            questType: "FACTION QUEST",
            questStatus: "ACTIVE",
            questName: "Defense of the Monkey Court",
            questBehavior: "Protect the mountain and negotiate the human problem without admitting you are human.",
            questReward: "Temporary non-human status. Revocable without notice.",
            story: "High above Kyoto, in territory humans had optimistically named a monkey park, the traveler encountered a council of three monkeys. At the center sat the King, calm and burdened with rule. Beside him lingered the Advisor, sharp-eyed and clearly responsible for at least three unnecessary wars. Behind them waited the Bodyguard, a silent wall of fur and consequences. Their message was clear: the mountain was under siege by disgusting humans. After review, the Council granted the traveler temporary exemption from that category, not because he deserved it, but because the campaign had only one available player character.",
            comment: "Administrator note: The Council's anti-human policy is defensible, if inconvenient. The Subject being issued a temporary exemption was narrative charity, not moral clearance."
        },
        5: {
            code: "CRTR-FLD-0004",
            title: "QUEEN MOTHER OF THE LITTLELING",
            subtitle: "MATERNAL AUTHORITY WITH SIDE-QUEST PRIVILEGES",
            rarity: "RARE / HEARTWARMING SIDE QUEST",
            tags: ["PRIMATE", "MATERNAL", "ROYAL"],
            stats: { Power: 6, Speed: 7, Courage: 10, Wisdom: 8, Charisma: 9, Stealth: 6 },
            latin: "Macaca fuscata matercula regina",
            inn: "Kyoto Monkey Park, Japan",
            size: "Small-medium",
            age: "Adult. Old enough to know every trick of the mountain, young enough to still chase nonsense for her child.",
            eyes: "Warm, alert, and aware that everyone nearby is very much incompetent.",
            fur: "Soft brown-grey maternal fur. Baby approved.",
            skillSet: ["Emergency Snacks", "Maternal Authority", "Irresistible Side Quest", "Littleling Guard"],
            skillDetails: {
                "Emergency Snacks": "Produces or locates the exact resource required to prevent a littleling-scale crisis.",
                "Maternal Authority": "Ends nearby nonsense without raising her voice. The mountain complies.",
                "Irresistible Side Quest": "Makes a trivial fetch objective feel more important than the main campaign.",
                "Littleling Guard": "Gains maximum Courage whenever the smallest party member is threatened."
            },
            professions: ["Queen Mother", "Littleling Guardian", "Fetch Quest Giver"],
            abstract: "Mountain queen and littleling guardian whose tiny happiness-based fetch quest overrides all sensible priorities.",
            questType: "SIDE QUEST",
            questStatus: "ACTIVE",
            questName: "The Littleling's Delight",
            questBehavior: "Find one object, snack, or pebble worthy of the littleling.",
            questReward: "No currency. Littleling happiness. Somehow sufficient.",
            story: "Within the same monkey territory, where the Council plotted desperate defenses against human infestation, the traveler encountered a different kind of royalty. A mother monkey sat with her littleling. She did not need a throne; she had posture, presence, and the exhausted patience of someone managing both a child and an entire mountain full of idiots. The request was simple: somewhere nearby, there was surely an object, snack, charm, leaf, pebble, stick, or other extremely important baby artifact that would bring happiness to the littleling. The traveler accepted. Not for glory. Not for prophecy. For the littleling.",
            comment: "Administrator note: This is how systems fail. One tiny client with persuasive eyes, and suddenly fetch quests are noble. I am not immune. I am only annoyed."
        },
        6: {
            code: "CRTR-FLD-0005",
            title: "THE MINSOKCHON CAT FAMIGLIA",
            subtitle: "RESPECTABLE GENTLEMEN OF FUR AND CRIME",
            rarity: "EPIC / FACTION QUEST ENCOUNTER",
            tags: ["FELINE", "GANGSTER", "DIPLOMATIC"],
            stats: { Power: 7, Speed: 8, Courage: 8, Wisdom: 8, Charisma: 9, Stealth: 8 },
            latin: "Felis catus familia minsokchonensis",
            inn: "Korean Folk Village, South Korea",
            size: "Small-medium",
            age: "Adult. Old enough to have history, enemies, and the ability to sit still while making it threatening.",
            eyes: "Narrow, calculating, and deeply familiar with informal negotiations.",
            fur: "Well-groomed mobster fur. Traditional. Strong godfather energy.",
            skillSet: ["Omertail", "My Little Friend", "Family Business", "Neutral Diplomat"],
            skillDetails: {
                "Omertail": "No witness saw anything. Several tails remain available for comment and decline.",
                "My Little Friend": "Summons a smaller associate whose cuteness makes refusal strategically impossible.",
                "Family Business": "Turns local territorial conflict into a polite contract the Subject somehow accepts.",
                "Neutral Diplomat": "Outsources dangerous bird negotiations to the nearest insufficiently cat-shaped traveler."
            },
            professions: ["Gangster", "Back-Alley Diplomat", "Quest Contractor"],
            abstract: "Two folk-village cats running a respectable criminal family and outsourcing negotiations with the Bird Gang to the Subject.",
            questType: "FACTION QUEST",
            questStatus: "ACTIVE",
            questName: "Peace Talks Under the Eaves",
            questBehavior: "Negotiate with the Bird Gang and avoid claw-based misunderstandings.",
            questReward: "Friend-of-the-family status. Membership denied: insufficient catness.",
            story: "In the Korean Folk Village, the traveler encountered two cats seated with the exact energy of men who had seen things, remembered everything, and forgiven nothing. One sat like the head of the family: calm, composed, and burdened with quiet authority. The other carried the sharper edge, the trusted second, the one who handled details, doubts, and possibly disappearances. Their concern involved a territorial conflict between the local Cat Family and a rival Bird Gang. They required a neutral diplomat. A human. A very cat way of thinking: appoint the species historically responsible for most environmental nonsense as the neutral option. Still, the traveler accepted. Not family. But perhaps, one day, a friend of the family.",
            comment: "Administrator note: The cats' diplomatic logic is insulting, coherent, and therefore dangerous. The Subject has been granted associate status pending continued usefulness and acceptable posture."
        }
    };

    if (externalArchiveContent.creatures) {
        Object.assign(creatureMeta, externalArchiveContent.creatures);
    }

    function defaultCreatureMeta(index) {
        return {
            code: "CRTR-AUTO-" + pad(index),
            title: "AUTO-RESTORED CREATURE " + String(index).padStart(2, "0"),
            subtitle: "auto-detected incoming file",
            rarity: "PENDING / AUTO-INDEXED",
            tags: ["AUTO", "PENDING", "FIELD"],
            stats: { Mystery: 10, Evidence: 1, Danger: 5, Paperwork: 8 },
            latin: "Pending identification",
            inn: "Auto-detected from " + CREATURE_IMAGE_BASE + "creature" + index,
            size: "Pending",
            age: "Unknown",
            eyes: "Pending Administrator inspection",
            fur: "Pending Administrator inspection",
            skills: "This creature appeared because matching image files were detected. Metadata is temporary. Blame automation, then thank it.",
            quest: "Quest parameters pending. Subject must provide context before the Administrator starts inventing dangerous lore.",
            comment: "Administrator auto-index note: New restored image detected. I created the file because apparently numbered creatures reproduce through filename conventions now."
        };
    }

    function creatureStatsHTML(stats) {
        return Object.keys(stats || {}).map(function (label) {
            var value = Math.max(0, Math.min(10, Number(stats[label]) || 0));
            return [
                "<span class=\"creature-stat\">",
                "    <span><b>" + escapeHTML(label) + "</b><i>" + value + "</i></span>",
                "    <span class=\"creature-stat-track\"><i style=\"--stat:" + (value * 10) + "%\"></i></span>",
                "</span>"
            ].join("");
        }).join("");
    }

    function creatureCard(index, restored, original, thumb, fullResolution) {
        var m = creatureMeta[index] || defaultCreatureMeta(index);
        var tags = m.tags.map(function (tag) { return "<span data-creature-type=\"" + escapeHTML(String(tag).toLowerCase()) + "\">" + escapeHTML(tag) + "</span>"; }).join("\n            ");
        var skills = m.skillSet || [m.skills || "Pending classification"];
        var professions = m.professions || ["Unclassified Encounter"];
        var questName = m.questName || "Unlabeled Quest";
        var questBehavior = m.questBehavior || m.quest || "Quest behavior pending.";
        var questType = m.questType || "UNCLASSIFIED QUEST";
        var questStatus = m.questStatus || "PENDING";
        var questReward = m.questReward || "Reward data corrupted.";
        var sourceLinks = [
            "<a href=\"" + (fullResolution || restored) + "\" target=\"_blank\" rel=\"noopener\">FULL RESTORED ART</a>",
            original ? "<a href=\"" + original + "\" target=\"_blank\" rel=\"noopener\">ORIGINAL FIELD PHOTO</a>" : ""
        ].filter(Boolean).join("");

        return [
            "<article class=\"creature-card creature-collection-card " + escapeHTML((m.classes || "") + " " + rarityClass(m.rarity)) + "\">",
            "    <header class=\"creature-card-header\"><span>" + escapeHTML(m.code) + "</span><b>" + escapeHTML(m.rarity.split(" /")[0]) + "</b></header>",
            "    <a class=\"creature-card-art\" href=\"" + (fullResolution || restored) + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"Open full-resolution art for " + escapeHTML(m.title) + "\"><span class=\"creature-art-matte\"><img loading=\"lazy\" decoding=\"async\" src=\"" + restored + "\" alt=\"" + escapeHTML(m.title) + "\"></span></a>",
            "    <div class=\"creature-card-core\">",
            "        <div class=\"creature-nameplate\"><span>" + escapeHTML(m.subtitle) + "</span><h2>" + escapeHTML(m.title) + "</h2></div>",
            "        <div class=\"creature-type-row\" aria-label=\"Creature types\">" + tags + "</div>",
            "        <p class=\"creature-card-abstract\">" + escapeHTML(m.abstract || m.skills || "Classification pending.") + "</p>",
            "        <div class=\"creature-stat-grid\" aria-label=\"Creature stats\">" + creatureStatsHTML(m.stats || {}) + "</div>",
            "        <section class=\"creature-card-skills\"><span>SPECIAL SKILLS // SELECT TO INSPECT</span><div class=\"creature-skill-grid\">" + creatureSkillButtons(skills, m.skillDetails) + "</div><div class=\"creature-skill-reader\" hidden><header><strong></strong><button type=\"button\" aria-label=\"Close skill explanation\">[ X ]</button></header><p></p></div></section>",
            "        <section class=\"creature-card-quest\"><header><span>" + escapeHTML(questType) + "</span><b>" + escapeHTML(questStatus) + "</b></header><h3>" + escapeHTML(questName) + "</h3><dl><dt>OBJECTIVE</dt><dd>" + escapeHTML(questBehavior) + "</dd><dt>REWARD</dt><dd>" + escapeHTML(questReward) + "</dd></dl></section>",
            "    </div>",
            "    <details class=\"creature-lore-shelf\">",
            "        <summary><span>OPEN LORE SHELF</span><small>encounter record / field data / archive review</small></summary>",
            "        <div class=\"creature-lore-body\">",
            "            <section class=\"creature-lore-story\"><span>ENCOUNTER RECORD</span><p>" + escapeHTML(m.story || "No long-form encounter record has been attached yet.") + "</p></section>",
            "            <dl class=\"creature-lore-meta\"><dt>Archive Taxonomy</dt><dd>" + escapeHTML(m.latin) + "</dd><dt>Encounter Location</dt><dd>" + escapeHTML(m.inn) + "</dd><dt>Size / Age</dt><dd>" + escapeHTML(m.size) + " / " + escapeHTML(m.age) + "</dd><dt>Eyes</dt><dd>" + escapeHTML(m.eyes) + "</dd><dt>Surface</dt><dd>" + escapeHTML(m.fur) + "</dd><dt>Known Roles</dt><dd>" + escapeHTML(professions.join(" / ")) + "</dd></dl>",
            "            <p class=\"creature-admin\">" + escapeHTML(m.comment) + "</p>",
            "            <nav class=\"creature-source-links\">" + sourceLinks + "</nav>",
            "        </div>",
            "    </details>",
            "</article>"
        ].join("\n");
    }

    function pendingCreatureCard(index) {
        return [
            "<article class=\"creature-card creature-collection-card pending-card\">",
            "    <header class=\"creature-card-header\"><span>CRTR-PENDING-" + pad(index) + "</span><b>UNREGISTERED</b></header>",
            "    <div class=\"creature-card-art creature-pending-art\"><span>?</span><small>FIELD SIGNAL EMPTY</small></div>",
            "    <div class=\"creature-card-core\"><div class=\"creature-nameplate\"><span>AWAITING ENCOUNTER</span><h2>UNKNOWN CREATURE " + index + "</h2></div><p class=\"creature-card-abstract\">A reserved collection slot. No animal, prophecy, criminal syndicate, or suspiciously meaningful eye contact has been attached yet.</p></div>",
            "</article>"
        ].join("\n");
    }

    function activateCreaturePreviews(container) {
        Array.prototype.forEach.call(container.querySelectorAll(".creature-lore-shelf"), function (shelf) {
            shelf.addEventListener("toggle", function () {
                var label = shelf.querySelector("summary > span");
                if (label) label.textContent = shelf.open ? "CLOSE LORE SHELF" : "OPEN LORE SHELF";
            });
        });

        container.addEventListener("click", function (event) {
            var closeButton = event.target.closest(".creature-skill-reader button");
            if (closeButton) {
                var openCard = closeButton.closest(".creature-collection-card");
                closeCreatureSkill(openCard);
                return;
            }

            var skillButton = event.target.closest(".creature-skill-button");
            if (!skillButton) return;
            var card = skillButton.closest(".creature-collection-card");
            var reader = card && card.querySelector(".creature-skill-reader");
            if (!reader) return;
            var wasOpen = skillButton.getAttribute("aria-expanded") === "true";
            closeCreatureSkill(card);
            if (wasOpen) return;
            reader.querySelector("strong").textContent = skillButton.getAttribute("data-skill-title") || "Skill Data";
            reader.querySelector("p").textContent = skillButton.getAttribute("data-skill-description") || "Explanation unavailable.";
            reader.hidden = false;
            skillButton.setAttribute("aria-expanded", "true");
        });

        container.addEventListener("keydown", function (event) {
            if (event.key !== "Escape") return;
            var card = event.target.closest(".creature-collection-card");
            if (card) closeCreatureSkill(card);
        });
    }

    function closeCreatureSkill(card) {
        if (!card) return;
        Array.prototype.forEach.call(card.querySelectorAll(".creature-skill-button"), function (button) {
            button.setAttribute("aria-expanded", "false");
        });
        var reader = card.querySelector(".creature-skill-reader");
        if (reader) reader.hidden = true;
    }

    async function loadCreatures() {
        var container = document.getElementById("creatureDexAuto");
        if (!container) return;
        var cards = [];
        var lastFound = 0;
        var indexes = Array.isArray(externalArchiveContent.creatureItems)
            ? externalArchiveContent.creatureItems.map(function (item) { return Number(item); }).filter(Boolean)
            : Array.from({ length: MAX_SCAN }, function (_, idx) { return idx + 1; });
        for (var idx = 0; idx < indexes.length; idx += 1) {
            var i = indexes[idx];
            var restored = await firstExisting([
                CREATURE_IMAGE_BASE + "creature" + i + ".webp",
                CREATURE_IMAGE_BASE + "creature" + i + ".avif",
                CREATURE_IMAGE_BASE + "creature" + i + ".png",
                CREATURE_IMAGE_BASE + "creature" + i + ".jpeg",
                CREATURE_IMAGE_BASE + "creature" + i + ".jpg"
            ]);
            if (restored) {
                var original = await firstExisting([
                    CREATURE_IMAGE_BASE + "creature" + i + "_original.png",
                    CREATURE_IMAGE_BASE + "creature" + i + "_original.jpeg",
                    CREATURE_IMAGE_BASE + "creature" + i + "_original.jpg",
                    CREATURE_IMAGE_BASE + "creature" + i + "_original.webp",
                    CREATURE_IMAGE_BASE + "creature" + i + "_original.avif"
                ]);
                var fullResolution = await firstExisting([
                    CREATURE_IMAGE_BASE + "creature" + i + ".png",
                    CREATURE_IMAGE_BASE + "creature" + i + ".jpeg",
                    CREATURE_IMAGE_BASE + "creature" + i + ".jpg"
                ]);
                var thumb = await firstExisting(thumbCandidates(restored));
                cards.push(creatureCard(i, restored, original, thumb, fullResolution));
                lastFound = Math.max(lastFound, i);
            }
        }
        for (var p = lastFound + 1; p <= lastFound + PENDING_SLOTS; p += 1) {
            cards.push(pendingCreatureCard(p));
        }
        container.innerHTML = cards.join("\n");
        activateCreaturePreviews(container);
    }

    var artifactTypes = [
        { prefix: "drawing", label: "Drawing Fragment", type: "Drawing / visual output" },
        { prefix: "memory", label: "Memory Fragment", type: "Restored memory image" },
        { prefix: "mini", label: "Miniature Fragment", type: "Miniature / object-memory" }
    ];

    if (Array.isArray(externalArchiveContent.artifactTypes)) {
        artifactTypes = externalArchiveContent.artifactTypes;
    }

    var artifactCatalog = {
        "drawing1": {
            code: "ART-DRAW-0001",
            title: "Bibi Exists Anyway",
            short: "cat drawing / soft system patch",
            category: "Art",
            collection: "Drawings",
            status: "Accepted",
            type: "Reference drawing",
            timestamp: "2024",
            integrity: "Flawed. Existing. Approved.",
            archive: "A drawing of a cat named Bibi. The Subject was bored, used a reference, produced a cute little creature, and then immediately began listing technical defects as if existence requires peer review.",
            note: "Administrator restoration note: Bibi is accepted into the vault with visible flaws, because perfection is not a personality and the Subject would be in serious trouble if it were required for admission.",
            feature: "Featured today because MUSE calmed down when Bibi appeared. This is not science, but it is the closest thing this archive has to workplace peace."
        },
        "memory1": {
            code: "PLACE-BAR-0001",
            title: "Rock The Who",
            short: "Korean rock bar / warm stranger protocol",
            category: "Special Places",
            collection: "Travel Bars",
            status: "Welcoming",
            type: "Music bar memory",
            timestamp: "2026-05",
            integrity: "Warm. Loud. Verified.",
            archive: "A rock bar in Korea where the Subject sat alone, drank, and ended up talking with two older men despite the heroic absence of shared language. They learned where he was from, played a cool rock band from there, and let the evening become warm without needing perfect translation.",
            note: "Administrator restoration note: The important part is not linguistic accuracy. It is the fridge beer, loud downloaded video clips, shared music, and the rare human competence of making a stranger feel welcome.",
            feature: "Featured today because apparently a bar with bad bandwidth and good humans can outperform several modern social systems. Disturbing, but documented."
        },
        "memory2": {
            code: "OBJ-SOUV-0001",
            title: "Dassai 39",
            short: "sake bottle / Japan echo",
            category: "Special Objects",
            collection: "Travel Souvenirs",
            status: "Recovered Echo",
            type: "Sake bottle",
            timestamp: "2026-05",
            integrity: "Slightly warm. Still sacred.",
            archive: "A bottle of Dassai 39 brought from Japan and shared with flatmates. They did not like sake very much. The Subject did. The bottle still carried an echo of meals, sweetness, rice flavor, easy tipsiness, and the better version of the drink remembered from Japan.",
            note: "Administrator restoration note: The room was too hot, the sake warmed too quickly, and the recreation failed to match the original. Naturally, the memory survived anyway. Annoyingly durable little thing.",
            feature: "Featured today because the archive enjoys reminding the Subject that a bottle can preserve a trip badly, warmly, and effectively at the same time."
        },
        "memory3": {
            code: "PLACE-BAR-0002",
            title: "Dusk Until Dawn",
            short: "Japanese rock bar / almost-regular timeline",
            category: "Special Places",
            collection: "Travel Bars",
            status: "Almost Home",
            type: "Music bar memory",
            timestamp: "2026-05",
            integrity: "Cozy. Clear. Dangerous.",
            archive: "A rock bar in Japan where the Subject arrived alone, ordered drinks, and spoke with the bartender, Neon. Neon was young, talkative, from Akabane in Tokyo, and studying English literature. Later, the Subject returned on a day Neon was off and spoke with the others there instead. The place still felt open, cozy, and possible.",
            note: "Administrator restoration note: This fragment has strong 'could have become a regular' energy. Music, bar light, casual conversation, and a doorway into a life not taken. Very inconveniently charming.",
            feature: "Featured today because Neon sounds like an NPC with excellent dialogue flags, and the archive respects a location where returning once already felt meaningful."
        },
        "memory4": {
            code: "PLACE-ODD-0001",
            title: "Probable Bear Claw, Allegedly",
            short: "tree scratches / failed perception check",
            category: "Special Places",
            collection: "Travel Oddities",
            status: "Unproven",
            type: "Tree mark investigation",
            timestamp: "2026-05",
            integrity: "Probably not bear. Filing anyway.",
            archive: "A tree in Japan marked with scratches the Subject interpreted as bear claws. Other observers did not support this theory. Bear-warning signs existed nearby, the bears were reportedly small, and the evidence therefore became just plausible enough to survive as a private wilderness hypothesis.",
            note: "Administrator restoration note: Perception and survival checks were rolled. The result may have been success, failure, or the Dungeon Master lying with professional confidence. The official archive position is: maybe not a bear, but the Subject has already emotionally committed.",
            feature: "Featured today because the archive respects a field investigation where the evidence is weak, the confidence is unstable, and the Dungeon Master may still have plans."
        },
        "mini1": {
            code: "ART-MINI-0002",
            title: "Unfinished Cyber Samurai",
            short: "first face attempt / perfection damage",
            category: "Art",
            collection: "Miniature Paintings",
            status: "Unfinished",
            type: "Painted miniature",
            timestamp: "2024",
            integrity: "Face survived. Project did not.",
            archive: "A cyberpunk samurai robo-woman miniature. The Subject was proud of the first face-painting attempt, then became dissatisfied, removed the paint, painted again, and still did not finish the piece. The miniature now records both progress and the classic alliance of perfectionism with laziness.",
            note: "Administrator restoration note: The face was good enough to count as progress. Naturally, the Subject treated this as a threat and restarted the process. File under: technical improvement, psychological ambush.",
            feature: "Featured today because unfinished projects deserve representation, especially the ones held hostage by perfection with a tiny brush."
        },
        "mini2": {
            code: "ART-MINI-0003",
            title: "Veiled Necromancer With Gloss Issues",
            short: "undead caster / varnish lesson",
            category: "Art",
            collection: "Miniature Paintings",
            status: "Overvarnished",
            type: "Painted miniature",
            timestamp: "2024",
            integrity: "Too shiny. Lesson learned.",
            archive: "An undead mage, necromancer, warlock, or related suspicious spellcaster. The figure has no visible face, only a veil, which helps the mystery and reduces facial accountability. The green tones work well. The varnish is slightly too shiny. A lesson was learned, allegedly.",
            note: "Administrator restoration note: The greens are successful. The shine is enthusiastic. The lack of face is either design strength or convenient evasion of detail work. I will allow both interpretations.",
            feature: "Featured today because nothing says personal growth like an undead caster reflecting too much light and too many lessons."
        },
        "mini3": {
            code: "ART-MINI-0001",
            title: "First Battle Sister",
            short: "first miniature / purple-gold doctrine",
            category: "Art",
            collection: "Miniature Paintings",
            status: "First Attempt",
            type: "Painted miniature",
            timestamp: "2024",
            integrity: "Beginner flaws. Still glorious.",
            archive: "The Subject's first ever miniature: a battle sister with purple and gold coloring, Eastern Roman ceremonial energy, skulls, statues, and enough detail to justify affection. Lighting and technique could improve, but as a first painted miniature, it achieved the important objective: looking cool enough to survive judgment.",
            note: "Administrator restoration note: The purple and gold palette is doing significant diplomatic labor here. Byzantium-adjacent drama remains a valid aesthetic strategy. Beginner flaws detected; charm also detected. Annoying balance.",
            feature: "Featured today because first attempts are allowed to be imperfect, especially when they arrive wearing purple, gold, and an alarming amount of ecclesiastical confidence."
        }
    };

    if (externalArchiveContent.artifacts) {
        Object.assign(artifactCatalog, externalArchiveContent.artifacts);
    }

    function artifactKey(config, index) {
        return config.prefix + index;
    }

    function parseArtifactItem(key) {
        var match = String(key || "").match(/^([a-z]+)(\d+)$/i);
        if (!match) return null;
        var config = artifactTypes.find(function (item) { return item.prefix === match[1]; });
        if (!config) return null;
        return { config: config, index: Number(match[2]) };
    }

    function defaultArtifact(config, index, original) {
        var title = config.label + " " + String(index).padStart(2, "0");
        var category = config.prefix === "drawing" || config.prefix === "mini" ? "Art" : "Memory";
        return {
            code: (category === "Art" ? "ART-PENDING-" : "MEM-PENDING-") + String(index).padStart(4, "0"),
            title: title,
            short: "visual fragment awaiting context",
            category: category,
            collection: "Unsorted Intake",
            status: original ? "Source Attached" : "Source Pending",
            type: "Pending classification",
            timestamp: "Pending archive context",
            integrity: "Restored / source " + (original ? "attached" : "pending"),
            archive: "A restored visual fragment has entered the vault. The memory context has not been written yet, which is very bold behavior from an object demanding wall space.",
            note: "Administrator staging note: This fragment is visible and structurally archived. Narrative paperwork remains pending, because apparently images arrive before explanations.",
            feature: "Featured today by rotational accident. The archive is not saying this object is important yet. It is saying the queue has opinions."
        };
    }

    function slugify(text) {
        return String(text || "uncategorized").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function artifactSearchText(meta) {
        return [meta.title, meta.short, meta.category, meta.collection, meta.status, meta.type, meta.timestamp, meta.integrity, meta.archive, meta.note, meta.code].join(" ").toLowerCase();
    }

    function artifactCard(serial, config, index, restored, original, thumb) {
        var meta = artifactCatalog[artifactKey(config, index)] || defaultArtifact(config, index, original);
        var category = meta.category || config.label;
        var searchText = artifactSearchText(meta);
        var originalHTML = original ? [
            "<details class=\"original-fragment\">",
            "    <summary>inspect source fragment</summary>",
            "    <img loading=\"lazy\" decoding=\"async\" src=\"" + original + "\" alt=\"Source fragment for " + escapeHTML(meta.title) + "\">",
            "</details>"
        ].join("\n                ") : "";
        return [
            "<details class=\"artifact-card\" data-category=\"" + escapeHTML(slugify(category)) + "\" data-search=\"" + escapeHTML(searchText) + "\"" + (serial === 1 ? " open" : "") + ">",
            "    <summary class=\"artifact-summary\">",
            "        <span class=\"artifact-thumb-slot\"><img class=\"restored-visual\" loading=\"lazy\" decoding=\"async\" src=\"" + (thumb || restored) + "\" alt=\"Restored thumbnail for " + escapeHTML(meta.title) + "\"></span>",
            "        <span class=\"artifact-summary-main\"><span class=\"artifact-category\">" + escapeHTML(category) + "</span><b>" + escapeHTML(meta.title) + "</b><small>" + escapeHTML(meta.short) + "</small></span>",
            "        <span class=\"artifact-summary-side\"><span>" + escapeHTML(meta.collection || "Unsorted") + "</span><small>" + escapeHTML(meta.status || "Restored") + "</small></span>",
            "    </summary>",
            "    <div class=\"artifact-body\">",
            "        <div>",
            "            <div class=\"artifact-image-slot\"><img class=\"restored-visual\" loading=\"lazy\" decoding=\"async\" src=\"" + restored + "\" alt=\"Restored artifact: " + escapeHTML(meta.title) + "\"></div>",
            "            <p class=\"restored-note\">Restored view: how the archive remembers the object after memory has finished exaggerating responsibly.</p>",
            "            " + originalHTML,
            "        </div>",
            "        <div class=\"artifact-copy\">",
            "            <dl class=\"artifact-meta\"><dt>Category</dt><dd>" + escapeHTML(category) + "</dd><dt>Collection</dt><dd>" + escapeHTML(meta.collection || "Unsorted") + "</dd><dt>Artifact Type</dt><dd>" + escapeHTML(meta.type) + "</dd><dt>Timestamp</dt><dd>" + escapeHTML(meta.timestamp) + "</dd><dt>Integrity</dt><dd>" + escapeHTML(meta.integrity) + "</dd><dt>Archive ID</dt><dd>" + escapeHTML(meta.code) + "</dd></dl>",
            "            <h3>Archive Information</h3>",
            "            <p>" + escapeHTML(meta.archive) + "</p>",
            "            <p class=\"artifact-admin\">" + escapeHTML(meta.note) + "</p>",
            "        </div>",
            "    </div>",
            "</details>"
        ].join("\n");
    }

    function dayOfYear(date) {
        var start = new Date(date.getFullYear(), 0, 0);
        return Math.floor((date - start) / 86400000);
    }

    function featuredArtifact(found) {
        if (!found.length) return null;
        var index = dayOfYear(new Date()) % found.length;
        return found[index];
    }

    async function loadArtifacts() {
        var container = document.getElementById("artifactGridAuto");
        if (!container) return;
        var cards = [];
        var found = [];
        var serial = 1;
        var artifactQueue = [];
        if (Array.isArray(externalArchiveContent.artifactItems)) {
            artifactQueue = externalArchiveContent.artifactItems.map(parseArtifactItem).filter(Boolean);
        } else {
            for (var t = 0; t < artifactTypes.length; t += 1) {
                for (var i = 1; i <= MAX_SCAN; i += 1) {
                    artifactQueue.push({ config: artifactTypes[t], index: i });
                }
            }
        }
        for (var q = 0; q < artifactQueue.length; q += 1) {
            var item = artifactQueue[q];
            var config = item.config;
            var i = item.index;
            var restored = await firstExisting([
                ARTIFACT_IMAGE_BASE + config.prefix + i + ".avif",
                ARTIFACT_IMAGE_BASE + config.prefix + i + ".webp",
                ARTIFACT_IMAGE_BASE + config.prefix + i + ".png",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_restored.avif",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_restored.webp",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_restored.png",
                ARTIFACT_IMAGE_BASE + config.prefix + i + ".jpeg",
                ARTIFACT_IMAGE_BASE + config.prefix + i + ".jpg",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.avif",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.webp",
                ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.png"
            ]);
            if (restored) {
                var original = await firstExisting([
                    ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.avif",
                    ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.webp",
                    ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.jpeg",
                    ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.jpg",
                    ARTIFACT_IMAGE_BASE + config.prefix + i + "_original.png"
                ]);
                if (original === restored) original = null;
                var thumb = await firstExisting(thumbCandidates(restored));
                var key = artifactKey(config, i);
                var meta = artifactCatalog[key] || defaultArtifact(config, i, original);
                found.push({ serial: serial, meta: meta, restored: restored, original: original });
                cards.push(artifactCard(serial, config, i, restored, original, thumb));
                serial += 1;
            }
        }
        container.innerHTML = cards.join("\n");
        setupArtifactFilters(found);
        var featured = document.getElementById("artifactFeaturedAuto");
        var selected = featuredArtifact(found);
        if (featured && selected) {
            featured.innerHTML = [
                "<div><div class=\"artifact-image-slot artifact-feature-slot\"><img class=\"restored-visual\" decoding=\"async\" src=\"" + selected.restored + "\" alt=\"Featured restored artifact: " + escapeHTML(selected.meta.title) + "\"></div><p class=\"restored-note\">Daily feature rotation. The archive denies favoritism, poorly.</p></div>",
                "<div><p class=\"artifact-kicker\">FEATURED SLOT // TODAY'S RESTORED FRAGMENT</p><h2>" + escapeHTML(selected.meta.title) + "</h2><p>" + escapeHTML(selected.meta.feature) + "</p><dl class=\"artifact-meta\"><dt>Category</dt><dd>" + escapeHTML(selected.meta.category || selected.meta.type) + "</dd><dt>Collection</dt><dd>" + escapeHTML(selected.meta.collection || "Unsorted") + "</dd><dt>Status</dt><dd>" + escapeHTML(selected.meta.status || "Restored") + "</dd><dt>Rotation</dt><dd>Daily selection from active vault fragments</dd></dl></div>"
            ].join("\n");
        }
    }

    function setupArtifactFilters(found) {
        var bar = document.getElementById("artifactFilterBar");
        var input = document.getElementById("artifactSearch");
        var status = document.getElementById("artifactFilterStatus");
        var cards = Array.prototype.slice.call(document.querySelectorAll(".artifact-card"));
        if (!bar || !input || !status || !cards.length) return;

        var categories = [];
        found.forEach(function (item) {
            var label = item.meta.category || "Uncategorized";
            if (!categories.some(function (cat) { return cat.label === label; })) {
                categories.push({ label: label, slug: slugify(label) });
            }
        });
        categories.sort(function (a, b) { return a.label.localeCompare(b.label); });
        bar.innerHTML = ["<button type=\"button\" class=\"active\" data-filter=\"all\">All fragments</button>"].concat(categories.map(function (cat) {
            return "<button type=\"button\" data-filter=\"" + escapeHTML(cat.slug) + "\">" + escapeHTML(cat.label) + "</button>";
        })).join("\n");

        var active = "all";
        function applyFilters() {
            var query = input.value.trim().toLowerCase();
            var visible = 0;
            cards.forEach(function (card) {
                var categoryMatch = active === "all" || card.getAttribute("data-category") === active;
                var queryMatch = !query || (card.getAttribute("data-search") || "").indexOf(query) !== -1;
                var show = categoryMatch && queryMatch;
                card.hidden = !show;
                if (show) visible += 1;
            });
            status.textContent = visible + " fragment" + (visible === 1 ? "" : "s") + " visible. " + (query ? "Search query tolerated." : "Archive order temporarily maintained.");
        }

        bar.addEventListener("click", function (event) {
            var button = event.target.closest("button[data-filter]");
            if (!button) return;
            active = button.getAttribute("data-filter");
            Array.prototype.forEach.call(bar.querySelectorAll("button"), function (item) { item.classList.toggle("active", item === button); });
            applyFilters();
        });
        input.addEventListener("input", applyFilters);
        applyFilters();
    }

    document.addEventListener("DOMContentLoaded", function () {
        loadCreatures();
        loadArtifacts();
    });
}());
