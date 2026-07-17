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
            tags: ["FELINE", "DOMESTIC", "ASOCIAL"],
            latin: "Felis catus persicus pamukensis",
            inn: "Private Residence, Turkiye",
            size: "Small-medium",
            age: "11 years old. A senior who deserves respect, though not because of combat achievements.",
            eyes: "Blue. Beautiful. Filled with delicate distrust.",
            fur: "Extremely soft. High maintenance. Built for beauty, not for field operations.",
            skillSet: ["Elegant Retreat", "Blanket Camouflage", "Panic", "Advanced Vision"],
            professions: ["Household Noble", "Decorative Sovereign", "Companion"],
            abstract: "A beautiful white cat of supreme fluff, social resistance, and refined cowardice. Avoids strangers with tactical incompetence, yet maintains the dignity of a minor king in exile.",
            questName: "N/A",
            questBehavior: "No active quest so far. Existing beautifully while hiding badly has been classified as passive world-building.",
            story: "Before swans delivered prophecy, before monkeys formed councils, before gangster cats outsourced diplomacy, there was Pamuk. He might once have been named Gollum, but destiny was reshaped through softer branding and better judgment. When undisturbed, he is silent, fluffy, composed, and faintly offended by the existence of noise. When an unknown person appears, he performs the ancient defense rite: a desperate floor-slide toward the nearest bedroom, followed by emergency concealment beneath a blanket. This plan leaves most of his body outline visible to anyone with functional eyesight. He considers it flawless. It is not. For what Pamuk lacks in courage, he compensates for in softness, beauty, and the dramatic vulnerability of a cursed aristocrat.",
            comment: "Administrator note: First recorded creature and somehow already an argument against field reliability. The Subject calls this cowardice beloved. I call it a soft, expensive alarm system with no alarm."
        },
        2: {
            code: "CRTR-FLD-0001",
            title: "HOLY SWAN OF PROPHECIES",
            subtitle: "PREMIUM GRADE POND ANGEL",
            rarity: "MYTHIC / MAIN QUEST ENCOUNTER",
            tags: ["DIVINE", "URBAN", "EMOTIONAL"],
            latin: "Cygnus tokyoensis nuntius",
            inn: "Tokyo City Lake, Japan",
            size: "Small-medium",
            age: "Unknown. Possibly ancient. Possibly a reincarnation of a previous swan.",
            eyes: "Judgmental. Black. Fully aware of the plot.",
            fur: "It is a swan. It has feathers. Ceremonial feathers, apparently.",
            skillSet: ["Silent Judgement", "Plot-Relevant Eye Contact", "Urban Divine Flight", "Emotional Damage Detection"],
            professions: ["Main Quest Herald", "Prophecy Delivery", "Overqualified Pond NPC"],
            abstract: "A divine-looking urban swan that appears during emotionally unstable travel sequences to deliver plot progression through silence, posture, and unacceptable elegance.",
            questName: "Following the Pilgrimage",
            questBehavior: "Ends obsolete emotional calls. Begins forward motion. Does not provide subtitles, because apparently divine messengers enjoy making humans infer things.",
            story: "During a phone call with an ex, which is already a cursed side quest disguised as communication, the traveler wandered through Tokyo and found himself beside a city lake. There, floating with illegal levels of dignity, appeared a white swan. It did not honk. It did not beg for bread. It simply drifted across the water as if the gods had outsourced emotional damage assessment to local wildlife. The message, though wordless, was understood: the previous chapter was ending. Stop talking to ghosts on the telephone. Proceed. Naturally, the traveler took a picture. Documentation is sacred. Also, humans panic without evidence.",
            comment: "Administrator note: The swan did not speak. The Subject still received a full quest objective, which is either symbolism, projection, or excellent pond management. I have filed it under all three."
        },
        3: {
            code: "CRTR-FLD-0002",
            title: "ANCIENT TURTLE OF DETOURS",
            subtitle: "SHELL-BACKED SAGE OF QUESTIONABLE ADVICE",
            rarity: "RARE / ALTERNATE QUEST ENCOUNTER",
            tags: ["URBAN", "WISE", "AQUATIC"],
            latin: "Testudo tokyoensis bibendum",
            inn: "Tokyo City Lake, Japan",
            size: "Small",
            age: "Unclear. Old enough to remember several empires, several bad decisions, and at least one tourist overinterpreting a reptile.",
            eyes: "Calm, ancient, and faintly entertained.",
            fur: "None. It is a turtle. It has a shell. The moss aesthetic has been noted and reluctantly tolerated.",
            skillSet: ["Ancient Side-Eye", "Slow But Inevitable", "Tavern Route Calculation"],
            professions: ["Alternative Quest Giver", "Pond Hermit", "Hydration Advocate"],
            abstract: "A wise-looking turtle stationed at the edge of the same sacred pond, offering an alternate path to the grand prophecy. Less divine. More practical. Suspiciously tolerant of mild foolishness.",
            questName: "Detour of Spirits",
            questBehavior: "Accepts the Swan's prophecy, then recommends food, wandering, strange snacks, and one irresponsible drink before destiny becomes too self-important.",
            story: "At the edge of the same Tokyo pond, beneath the shadow of the Holy Swan's unbearable elegance, another figure waited: a turtle. It sat half-hidden near the corner of the water, still as an old temple stone and twice as judgmental. Unlike the Swan, it did not radiate divine urgency. It radiated the energy of someone who had watched many heroes receive prophecies and then ruin them by taking everything too seriously. The Swan had given the Main Quest. The Turtle offered the Alternative Route: destiny is real, but so are bars, side streets, late-night lights, and the spiritual value of getting slightly lost.",
            comment: "Administrator note: Finally, a creature with operational realism. Fate may proceed after snacks. I dislike how reasonable this is."
        },
        4: {
            code: "CRTR-FLD-0003",
            title: "THE KYOTO MONKEY COUNCIL",
            subtitle: "ZERO-HUMAN-TRUST TRIO",
            rarity: "EPIC / FACTION QUEST ENCOUNTER",
            tags: ["ROYAL", "PRIMATE", "DEFENSIVE"],
            latin: "Macaca fuscata consilium kyotensis",
            inn: "Kyoto Monkey Park, Japan",
            size: "Small-medium",
            age: "Unknown. The King appears young for rule, which is rarely a disqualifier in monarchy. The Advisor looks old enough to manipulate him. The Bodyguard looks old enough to remove witnesses.",
            eyes: "Tired authority, suspicious calculation, and politely postponed violence.",
            fur: "Brown. Monkey-coded.",
            skillSet: ["Fury of the Council", "Royal Banana Decree", "Human Repulsion"],
            professions: ["Mountain King", "Political Whisperer", "Personal Guard"],
            abstract: "A suspiciously organized trio of Kyoto monkeys issues a desperate defensive quest against the disgusting human invasion, while temporarily classifying the Subject as not technically one of them for quest-related reasons.",
            questName: "Defense of the Monkey Court",
            questBehavior: "Protect the mountain. Oppose invading humans. Do not mention the phone full of animal pictures, because that evidence complicates the treaty.",
            story: "High above Kyoto, in territory humans had optimistically named a monkey park, the traveler encountered a council of three monkeys. At the center sat the King, calm and burdened with rule. Beside him lingered the Advisor, sharp-eyed and clearly responsible for at least three unnecessary wars. Behind them waited the Bodyguard, a silent wall of fur and consequences. Their message was clear: the mountain was under siege by disgusting humans. After review, the Council granted the traveler temporary exemption from that category, not because he deserved it, but because the campaign had only one available player character.",
            comment: "Administrator note: The Council's anti-human policy is defensible, if inconvenient. The Subject being issued a temporary exemption was narrative charity, not moral clearance."
        },
        5: {
            code: "CRTR-FLD-0004",
            title: "QUEEN MOTHER OF THE LITTLELING",
            subtitle: "MATERNAL AUTHORITY WITH SIDE-QUEST PRIVILEGES",
            rarity: "RARE / HEARTWARMING SIDE QUEST",
            tags: ["MOTHER", "ROYAL", "FETCH-QUEST"],
            latin: "Macaca fuscata matercula regina",
            inn: "Kyoto Monkey Park, Japan",
            size: "Small-medium",
            age: "Adult. Old enough to know every trick of the mountain, young enough to still chase nonsense for her child.",
            eyes: "Warm, alert, and aware that everyone nearby is very much incompetent.",
            fur: "Soft brown-grey maternal fur. Baby approved.",
            skillSet: ["Emergency Snacks", "Maternal Authority", "Charisma +5"],
            professions: ["Queen Mother", "Littleling Guardian", "Fetch Quest Giver"],
            abstract: "A mother monkey of exceptional queenly presence, accompanied by her tiny littleling. She offers the Subject a fetch quest not for glory, gold, or destiny, but to make her baby happy. Wholesome. Irritatingly effective.",
            questName: "The Littleling's Delight",
            questBehavior: "Locate something that brings joy to the littleling. Reward: no currency, no weapon, no armor. Emotional fulfillment is apparently loot now.",
            story: "Within the same monkey territory, where the Council plotted desperate defenses against human infestation, the traveler encountered a different kind of royalty. A mother monkey sat with her littleling. She did not need a throne; she had posture, presence, and the exhausted patience of someone managing both a child and an entire mountain full of idiots. The request was simple: somewhere nearby, there was surely an object, snack, charm, leaf, pebble, stick, or other extremely important baby artifact that would bring happiness to the littleling. The traveler accepted. Not for glory. Not for prophecy. For the littleling.",
            comment: "Administrator note: This is how systems fail. One tiny client with persuasive eyes, and suddenly fetch quests are noble. I am not immune. I am only annoyed."
        },
        6: {
            code: "CRTR-FLD-0005",
            title: "THE MINSOKCHON CAT FAMIGLIA",
            subtitle: "RESPECTABLE GENTLEMEN OF FUR AND CRIME",
            rarity: "EPIC / FACTION QUEST ENCOUNTER",
            tags: ["FELINE", "GANGSTER", "DIPLOMATIC"],
            latin: "Felis catus familia minsokchonensis",
            inn: "Korean Folk Village, South Korea",
            size: "Small-medium",
            age: "Adult. Old enough to have history, enemies, and the ability to sit still while making it threatening.",
            eyes: "Narrow, calculating, and deeply familiar with informal negotiations.",
            fur: "Well-groomed mobster fur. Traditional. Strong godfather energy.",
            skillSet: ["Omertail", "My Little Friend", "Family Business"],
            professions: ["Gangster", "Back-Alley Diplomat", "Quest Contractor"],
            abstract: "Two old-school gangster cats operating a local feline family business. They recruit the Subject as a neutral diplomatic agent in a conflict with the Bird Gang, reasoning that birds would fear a human less than a cat. Ridiculous, but the Subject is not in a position to argue with the mob.",
            questName: "Peace Talks Under the Eaves",
            questBehavior: "Negotiate with the Bird Gang. Earn associate status. Avoid claw-based misunderstandings. Membership remains unavailable due to insufficient catness.",
            story: "In the Korean Folk Village, the traveler encountered two cats seated with the exact energy of men who had seen things, remembered everything, and forgiven nothing. One sat like the head of the family: calm, composed, and burdened with quiet authority. The other carried the sharper edge, the trusted second, the one who handled details, doubts, and possibly disappearances. Their concern involved a territorial conflict between the local Cat Family and a rival Bird Gang. They required a neutral diplomat. A human. A very cat way of thinking: appoint the species historically responsible for most environmental nonsense as the neutral option. Still, the traveler accepted. Not family. But perhaps, one day, a friend of the family.",
            comment: "Administrator note: The cats' diplomatic logic is insulting, coherent, and therefore dangerous. The Subject has been granted associate status pending continued usefulness and acceptable posture."
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
            "<article class=\"creature-card " + escapeHTML((m.classes || "") + " " + rarityClass(m.rarity)) + "\">",
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
            creatureProfileHTML(m),
            creatureQuestHTML(m),
            m.story ? "    <details class=\"creature-section creature-story\"><summary>Encounter Record</summary><p>" + escapeHTML(m.story) + "</p></details>" : "",
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
        { prefix: "drawing", label: "Drawing Fragment", type: "Drawing / visual output" },
        { prefix: "memory", label: "Memory Fragment", type: "Restored memory image" },
        { prefix: "mini", label: "Miniature Fragment", type: "Miniature / object-memory" }
    ];

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

    function artifactKey(config, index) {
        return config.prefix + index;
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

    function artifactCard(serial, config, index, restored, original) {
        var meta = artifactCatalog[artifactKey(config, index)] || defaultArtifact(config, index, original);
        var category = meta.category || config.label;
        var searchText = artifactSearchText(meta);
        var originalHTML = original ? [
            "<details class=\"original-fragment\">",
            "    <summary>inspect source fragment</summary>",
            "    <img src=\"" + original + "\" alt=\"Source fragment for " + escapeHTML(meta.title) + "\">",
            "</details>"
        ].join("\n                ") : "";
        return [
            "<details class=\"artifact-card\" data-category=\"" + escapeHTML(slugify(category)) + "\" data-search=\"" + escapeHTML(searchText) + "\"" + (serial === 1 ? " open" : "") + ">",
            "    <summary class=\"artifact-summary\">",
            "        <span class=\"artifact-thumb-slot\"><img class=\"restored-visual\" src=\"" + restored + "\" alt=\"Restored thumbnail for " + escapeHTML(meta.title) + "\"></span>",
            "        <span class=\"artifact-summary-main\"><span class=\"artifact-category\">" + escapeHTML(category) + "</span><b>" + escapeHTML(meta.title) + "</b><small>" + escapeHTML(meta.short) + "</small></span>",
            "        <span class=\"artifact-summary-side\"><span>" + escapeHTML(meta.collection || "Unsorted") + "</span><small>" + escapeHTML(meta.status || "Restored") + "</small></span>",
            "    </summary>",
            "    <div class=\"artifact-body\">",
            "        <div>",
            "            <div class=\"artifact-image-slot\"><img class=\"restored-visual\" src=\"" + restored + "\" alt=\"Restored artifact: " + escapeHTML(meta.title) + "\"></div>",
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
        for (var t = 0; t < artifactTypes.length; t += 1) {
            var config = artifactTypes[t];
            for (var i = 1; i <= MAX_SCAN; i += 1) {
                var restored = await firstExisting(["/images/" + config.prefix + i + ".png", "/images/" + config.prefix + i + "_restored.png", "/images/" + config.prefix + i + ".jpeg", "/images/" + config.prefix + i + "_original.png"]);
                if (restored) {
                    var original = await firstExisting(["/images/" + config.prefix + i + "_original.jpeg", "/images/" + config.prefix + i + "_original.jpg", "/images/" + config.prefix + i + "_original.png"]);
                    if (original === restored) original = null;
                    var key = artifactKey(config, i);
                    var meta = artifactCatalog[key] || defaultArtifact(config, i, original);
                    found.push({ serial: serial, meta: meta, restored: restored, original: original });
                    cards.push(artifactCard(serial, config, i, restored, original));
                    serial += 1;
                }
            }
        }
        container.innerHTML = cards.join("\n");
        setupArtifactFilters(found);
        var featured = document.getElementById("artifactFeaturedAuto");
        var selected = featuredArtifact(found);
        if (featured && selected) {
            featured.innerHTML = [
                "<div><div class=\"artifact-image-slot artifact-feature-slot\"><img class=\"restored-visual\" src=\"" + selected.restored + "\" alt=\"Featured restored artifact: " + escapeHTML(selected.meta.title) + "\"></div><p class=\"restored-note\">Daily feature rotation. The archive denies favoritism, poorly.</p></div>",
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
