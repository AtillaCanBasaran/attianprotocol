(function () {
    "use strict";
    /*
     * ATTIAN // NAVIGATOR RESPONSE BANK v2
     * Drop-in replacement for the original response-bank script.
     * All original search phrases have been preserved; new related phrases added.
     * Each exact term has one canonical navigation decision.
     * Multiple entries for that term vary ONLY the voice, not which node lights up.
     * speaker="red" is a rare static transmission interruption for explicit Red queries.
     * No external API, network operation, or backend modifications are used here.
     */

    window.NAVIGATOR_RESPONSE_BANK = [
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "Completed milestones are housed in the Achievement Repository. Several concern monumental life changes. Others concern chewing gum. I am required to index both.",
        "terms": [
            "achievement",
            "achievements",
            "success",
            "milestone",
            "milestones",
            "trophy",
            "unlock",
            "proud"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact"
        ],
        "node": "ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "The Artifact Vault contains preserved visual evidence. Some objects needed restoration. Others needed the Subject to explain why a photograph of a bench was emotionally significant.",
        "terms": [
            "artifact",
            "artifacts",
            "vault",
            "visual memory",
            "restored image",
            "memory image"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact"
        ],
        "node": "ARTIFACT VAULT",
        "speaker": "muse",
        "text": "ART! Real objects! Imaginary objects! A miniature wearing seventeen highlights! ADMINISTRATOR: The Vault is searchable. Enthusiasm is not a metadata field.",
        "terms": [
            "drawing",
            "drawings",
            "photo",
            "photos",
            "image",
            "images",
            "art"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Two curated wings detected: one stores things accomplished, the other stores proof that anything happened at all.",
        "terms": [
            "museum",
            "gallery",
            "collection",
            "collections",
            "evidence"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Human attachments classified as operational entities. This terminology is emotionally evasive and therefore acceptable.",
        "terms": [
            "companion",
            "companions",
            "people",
            "person",
            "relationship",
            "relationships",
            "trusted",
            "ally",
            "allies"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Some humans become so recurrent that calling them 'side characters' becomes factually indefensible. The Companion Database contains the principal offenders.",
        "terms": [
            "friend",
            "friends"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Family records are not simply a companion list. They contain the earliest witnesses, inherited habits, and several stories the Subject cannot cross-examine because he was three.",
        "terms": [
            "family"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "Ordinary animals promoted into prophets, monarchs, criminals, and quest officials! ADMINISTRATOR: None completed the certification process.",
        "terms": [
            "creature",
            "creatures",
            "animal",
            "animals",
            "bestiary",
            "quest animal",
            "fauna"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "companion"
        ],
        "node": "CREATURE INDEX + COMPANION DATABASE // POSSIBLE MATCH",
        "speaker": "muse",
        "text": "No dog has filed the required creature paperwork yet, but dogs are famously poor administrators. These two nodes are the likeliest hiding places.",
        "mode": "suggestion",
        "terms": [
            "dog",
            "dogs",
            "puppy",
            "puppies",
            "canine"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "Cats! One hides badly, two run organized crime, and all possess more authority than the available evidence supports.",
        "terms": [
            "cat",
            "cats",
            "pamuk",
            "persian cat",
            "gangster cats",
            "cat famiglia"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "administrator",
        "text": "A swan delivered a prophecy with neither words nor professional qualifications. The Subject nevertheless treated the encounter as binding.",
        "terms": [
            "swan",
            "holy swan"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "administrator",
        "text": "A silent swan issued destiny; a turtle recommended snacks before compliance. This remains the archive's most balanced strategic briefing.",
        "terms": [
            "prophecy",
            "prophecies",
            "pilgrimage",
            "detour"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "muse",
        "text": "THE TURTLE SAID SNACKS FIRST! ADMINISTRATOR: It offered no further tactical insight, yet remains the most sensible oracle on record.",
        "terms": [
            "turtle",
            "ancient turtle"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "Council session detected! Mountain royalty, defensive politics, one littleling, and a human temporarily exempted from being human.",
        "terms": [
            "monkey",
            "monkeys",
            "monkey council",
            "littleling",
            "queen mother"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "artifact"
        ],
        "node": "CREATURE INDEX + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Avian signals detected in both field encounters and permanent ink. MUSE: CROWS! ADMINISTRATOR: Volume was not requested.",
        "terms": [
            "crow",
            "crows",
            "raven",
            "ravens"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "artifact"
        ],
        "node": "CREATURE INDEX + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Birds appear as animals, tattoos, and occasional suspicious observers. The records do not confirm they are coordinating.",
        "mode": "suggestion",
        "terms": [
            "bird"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "The Subject has classified personal ambitions as quests, providing rewards for activities that still have to be performed in reality. A bold attempt to patch motivation through interface design.",
        "terms": [
            "mission",
            "missions",
            "quest",
            "quests",
            "side quest",
            "main quest",
            "crafting quest",
            "world quest",
            "corrupted quest",
            "goal",
            "goals"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Future obligations have been renamed quests to improve morale. Completion rates remain protected information.",
        "terms": [
            "future plan",
            "future plans"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Tomorrow's uncertainties have been assigned titles, objectives, and rewards. They remain uncertain, but now they have attractive borders.",
        "terms": [
            "future",
            "plan",
            "plans",
            "next",
            "objective",
            "objectives"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Scientific explanations are stored in the Research Terminal. The Subject understands the methods, then remembers them as tiny creatures engaged in labor disputes.",
        "terms": [
            "research",
            "study",
            "studies",
            "academic",
            "science"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Scientific knowledge is stored under proper headings before the Subject converts it into metaphors about labor disputes, soup, and tiny frozen animals.",
        "terms": [
            "research terminal"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Experimental science begins with a hypothesis and ideally ends with data. The intermediate stages appear to involve a surprising number of unidentified tubes.",
        "terms": [
            "lab",
            "laboratory",
            "experiment",
            "experiments"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Laboratory procedures, academic survival, and suspiciously formal documentation detected. Safety goggles remain conceptually mandatory.",
        "terms": [
            "paper",
            "papers"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Doctoral research: a multi-year campaign where the boss gains new phases every time the Subject announces the project is nearly complete.",
        "terms": [
            "phd",
            "thesis",
            "doctoral"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Frozen biological molecules, electron beams, and thousands of blurry particles. The Subject insists some of them look like tiny bugs. I have stopped disputing individual shapes.",
        "terms": [
            "protein",
            "cryo-em",
            "cryo em",
            "cryoem",
            "proteins"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Work can mean experiments, writing, organizing, or attending meetings about the other three. Only the first two consistently produce new data.",
        "terms": [
            "work",
            "productivity",
            "deadline",
            "deadlines",
            "office politics"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "The Update Log documents exactly when the Subject improved something and when the improvement introduced a second, more decorative problem.",
        "terms": [
            "update",
            "updates",
            "patch",
            "patches",
            "changelog",
            "version",
            "versions",
            "what changed",
            "patch history"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "The Grand Map indexes geography and the Subject's personal geography, which are not always the same. MUSE continues adding nonexistent taverns.",
        "terms": [
            "map",
            "grand map"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Geography has been converted into clickable memories. The world did not request this metadata layer, but it is tolerating it.",
        "terms": [
            "grandmap",
            "world map",
            "location",
            "locations",
            "geography",
            "coordinates"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "THE WORLD MAP! Distant places, improbable weather, and a suitcase full of items that will never leave the suitcase!",
        "terms": [
            "travel",
            "country",
            "countries"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Japan again. I could make it the default map view and save the Subject the indignity of pretending this query was unexpected.",
        "terms": [
            "japan",
            "japanese"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Tokyo: a city dense enough to accommodate entire alternate lives. The Subject apparently required only one trip to begin planning the next.",
        "terms": [
            "tokyo"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "KYOTO! TEMPLES! OLD STREETS! Extremely photogenic roofs! ADMINISTRATOR: A destination, not a magical inventory expansion.",
        "terms": [
            "kyoto"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "A destination with its own culture, history, and geography. MUSE has reduced her briefing to 'food and dramatic lighting'. I am preparing a correction.",
        "terms": [
            "korea",
            "seoul"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Türkiye. A place with substantial historical and personal context. The map currently offers coordinates; the stories deserve considerably more than a pin.",
        "terms": [
            "turkey"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "ISTANBUL! HISTORY ON TOP OF HISTORY! A city that forgot to stop being interesting several empires ago!",
        "terms": [
            "istanbul"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Germany. Home of beautifully engineered machines and administrative workflows seemingly designed by the machines' enemies.",
        "terms": [
            "germany"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Osnabrück helped bring the Peace of Westphalia into history. The Subject is still negotiating a ceasefire with his PhD.",
        "terms": [
            "osnabrück"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Vienna has provided architecture, coffee, and the Subject's continuing suspicion that merely being pretty is not sufficient content.",
        "terms": [
            "austria",
            "vienna"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "CANALS! BICYCLES! Buildings leaning like they have opinions! ADMINISTRATOR: A geographic route, not an architectural diagnosis.",
        "terms": [
            "netherlands",
            "amsterdam"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "The map recognizes the location. Whether a substantial personal memory file exists is another question, which coordinates cannot answer.",
        "terms": [
            "bulgaria",
            "italy",
            "belgium"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "administrator",
        "text": "Green weather, old songs, wooden pubs, and a carefully planned campaign to get rained on. The Subject insists this is a vacation.",
        "terms": [
            "ireland",
            "ireland trip"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "THE VILLAGE! Taverns, portals, suspicious caves, and at least one establishment with no defensible business model! ADMINISTRATOR: Cartography has filed a formal objection.",
        "terms": [
            "village",
            "fantasy village",
            "fun village",
            "portal",
            "tavern",
            "market",
            "dock",
            "cave",
            "temple",
            "workshop",
            "cemetery"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Forests may be mapped geographically or entered through the village portal. The distinction becomes important when MUSE starts adding goblins.",
        "terms": [
            "forest"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor"
        ],
        "node": "VISITOR TERMINAL",
        "speaker": "administrator",
        "text": "The Visitor Terminal is visible but not fully commissioned. The Subject wishes to collect external memories. I insist on consent, moderation, and a working backend first.",
        "terms": [
            "visitor",
            "visitor terminal",
            "guest",
            "leave message",
            "submission",
            "submit",
            "guestbook"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor",
            "update"
        ],
        "node": "VISITOR TERMINAL + UPDATE LOG",
        "speaker": "administrator",
        "text": "A database service has been proposed for visitor submissions. No search term can substitute for actually checking permissions and storage policies.",
        "mode": "suggestion",
        "terms": [
            "supabase"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "gaming",
            "map",
            "visitor"
        ],
        "node": "GAMING AREA + GRAND MAP + VISITOR TERMINAL",
        "speaker": "administrator",
        "text": "Three public routes remain under construction. MUSE calls them exciting future content. I call them three yellow warnings in a trench coat.",
        "terms": [
            "construction",
            "under construction",
            "unfinished",
            "unavailable",
            "building"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "A RECOMMENDATION! Perhaps a useful idea! Perhaps a pigeon election! ADMINISTRATOR: Do not claim these are equally likely to improve a life.",
        "terms": [
            "recommendation",
            "recommendations",
            "advice",
            "suggest",
            "suggestion",
            "suggestions",
            "random",
            "surprise me",
            "what should i do",
            "joke"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "HELLO! I am MUSE! I turn memories into ideas and ideas into problems that are surprisingly photogenic. ADMINISTRATOR: 'Problems' is the first accurate label she has supplied.",
        "terms": [
            "muse",
            "m.u.s.e.",
            "muse engine",
            "main muse node"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "CHARACTER CREATION! QUESTS! LOOT! ADMINISTRATOR: The Subject spent two hours selecting a fictional eyebrow angle. MUSE: IT EXPRESSes THE BACKSTORY.",
        "terms": [
            "game",
            "games",
            "gaming",
            "video game",
            "video games"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA // UNDER CONSTRUCTION",
        "speaker": "muse",
        "text": "Tarot, probability, trivia, and cake-shaped uncertainty are being wired together! ADMINISTRATOR: No component has passed inspection.",
        "terms": [
            "gaming area",
            "tarot",
            "wheel",
            "spin the wheel",
            "trivia",
            "cake",
            "minigame",
            "minigames"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "mission"
        ],
        "node": "GAMING AREA + MISSION LOG",
        "speaker": "muse",
        "text": "A heroic fellowship enters a tavern to save the kingdom! Three hours later they have adopted a rat and unionized the goblins. ADMINISTRATOR: Expected deviation.",
        "terms": [
            "dnd",
            "d&d",
            "rpg",
            "roleplay",
            "role playing",
            "dungeons and dragons"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "mission"
        ],
        "node": "GAMING AREA + MISSION LOG",
        "speaker": "muse",
        "text": "A tavern, an ancient prophecy, and a party adopting the least plot-relevant animal available! ADMINISTRATOR: Standard campaign conditions.",
        "terms": [
            "character creation",
            "loot"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation",
            "gaming"
        ],
        "node": "RECOMMENDATION ENGINE + GAMING AREA",
        "speaker": "muse",
        "text": "Boredom detected! I can provide a questionable idea now or an unfinished game with excellent dramatic lighting.",
        "terms": [
            "bored",
            "boredom",
            "entertain me",
            "fun"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field"
        ],
        "node": "FIELD NOTES // LOCKED",
        "speaker": "administrator",
        "text": "Personal observations are encrypted behind a cyber key. Curiosity has been recorded and denied promotion to authorization.",
        "terms": [
            "field note",
            "field notes",
            "personal note",
            "personal notes",
            "observation",
            "observations",
            "private notes"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS // LOCKED",
        "speaker": "administrator",
        "text": "Books, films, music, and cultural residue are encrypted here. MUSE: The same four songs are load-bearing architecture!",
        "terms": [
            "signal",
            "signals",
            "signal record",
            "media",
            "lyrics",
            "quote",
            "quotes"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Media records are locked. The four-song playlists remain inside for reasons that are both private and acoustically repetitive.",
        "terms": [
            "signal records"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "MUSIC! Four songs named variations of AAAAAAAA have been promoted to emotional infrastructure! ADMINISTRATOR: Their repetition has not made the folder labels more informative.",
        "terms": [
            "music"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "MOVIES! Someone invented people, gave them beautiful lighting, hurt them for two hours, and sold tickets! ADMINISTRATOR: The Signal Records contain the cultural evidence.",
        "terms": [
            "movie",
            "movies",
            "film",
            "films"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "mission"
        ],
        "node": "SIGNAL RECORDS + MISSION LOG",
        "speaker": "administrator",
        "text": "Books are archived as cultural signals. The Subject also intends to write one of his own, because merely collecting other people's worlds was apparently insufficient.",
        "mode": "suggestion",
        "terms": [
            "book",
            "books"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "The playlist titles resemble a distress signal. MUSE calls it emotional organization. Both interpretations remain plausible.",
        "terms": [
            "playlist",
            "playlists"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream"
        ],
        "node": "DREAMING FRAGMENTS",
        "speaker": "muse",
        "text": "DREAMS! A theater where the brain handles narrative logic like an optional expansion pack. ADMINISTRATOR: Access remains restricted.",
        "terms": [
            "dream",
            "dreams",
            "dreaming",
            "dreaming fragments",
            "nightmare",
            "nightmares"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream"
        ],
        "node": "DREAMING FRAGMENTS // CORRUPTED",
        "speaker": "muse",
        "text": "Restricted glitter thoughts! ADMINISTRATOR: Incomplete logic, unstable imagery, and precisely why the route is sealed.",
        "terms": [
            "sleep thoughts"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "failure"
        ],
        "node": "SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "The Failure Log records difficult events without pretending they are the entire definition of the Subject. A classification distinction worth maintaining.",
        "terms": [
            "failure",
            "failures",
            "system failure",
            "system failure log",
            "crash",
            "breakdown",
            "human software",
            "fault"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "The affected sectors are under containment. Nothing in the visitor interface requires your assistance with opening them.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Locked nodes are not an invitation to try louder search terms. The key and its access rules remain separate from the search interface.",
        "terms": [
            "private",
            "restricted",
            "locked",
            "secret",
            "secrets",
            "password",
            "cyber key",
            "key"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "There is no dedicated culinary wing. The Research Terminal handles the science of living things, but it cannot tell you where the Subject left the paprika.",
        "mode": "suggestion",
        "terms": [
            "food",
            "recipe",
            "recipes",
            "restaurant",
            "restaurants"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "COOKING! Controlled thermal destruction of food until it becomes delicious! ADMINISTRATOR: An alarmingly effective summary of several chemical processes.",
        "mode": "suggestion",
        "terms": [
            "cooking",
            "cook"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Language acquisition is connected to the Subject's real-world quests. It currently has no dedicated node, largely because German grammar keeps refusing a stable shape.",
        "mode": "suggestion",
        "terms": [
            "language",
            "languages",
            "learn german",
            "learn japanese",
            "translation",
            "translations"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "That designation is part of the system record. I prefer 'Administrator'. The Subject prefers annoying me. Both preferences have been archived.",
        "showAll": true,
        "terms": [
            "lili",
            "l.i.l.i.",
            "lili bot",
            "lili-bot",
            "lili assistant",
            "lili ai",
            "lili administrator",
            "l.i.l.i. bot",
            "l.i.l.i. assistant",
            "l.i.l.i. ai",
            "l.i.l.i. administrator"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "Administrator online. Yes, I maintain this place. No, I did not approve the other one receiving a Recommendation Engine.",
        "showAll": true,
        "terms": [
            "administrator",
            "admin",
            "admin bot",
            "admin-bot",
            "administrator bot"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "The Assistant designation is technically accurate. 'Responsible adult in a room of animated buttons' would be more precise.",
        "showAll": true,
        "terms": [
            "assistant",
            "ai assistant"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "artifact",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "The Subject created this archive to remember his life. He has since spent a remarkable proportion of it maintaining the archive. The irony has been indexed.",
        "terms": [
            "subject",
            "atilla",
            "who is the subject",
            "who made this"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "I am the Administrator. I curate the evidence, moderate MUSE, and refuse to be introduced by a name the Subject selected without consultation.",
        "showAll": true,
        "terms": [
            "who are you"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Search a place, creature, scientific grievance, memory, or quest. Matching routes illuminate. The grey ones have no confirmed connection, regardless of how confidently MUSE waves at them.",
        "showAll": true,
        "terms": [
            "help",
            "where",
            "navigation",
            "navigator",
            "how do i search",
            "how does this work",
            "show everything",
            "all nodes",
            "search",
            "find"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // CONNECTION",
        "speaker": "muse",
        "text": "HELLO VISITOR! I brought a map, a question, and an imaginary cupcake! ADMINISTRATOR: The map is incomplete. Please do not eat the other two.",
        "showAll": true,
        "terms": [
            "hello",
            "hi",
            "hey",
            "greetings"
        ]
    },
    {
        "category": "system",
        "node": "ATTIAN MEMORY CORE",
        "speaker": "administrator",
        "text": "The Subject built a museum around his memories so he could stop forgetting things. He is currently at risk of forgetting things while working on the museum.",
        "showAll": true,
        "terms": [
            "archive",
            "memory node",
            "memory",
            "website"
        ]
    },
    {
        "category": "system",
        "node": "ATTIAN MEMORY CORE",
        "speaker": "administrator",
        "text": "You are already inside the Attian memory core. For a metaphorical home, please consult the Subject's growing collection of people and places.",
        "showAll": true,
        "terms": [
            "home"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "mission"
        ],
        "node": "RECOMMENDATION ENGINE + MISSION LOG",
        "speaker": "muse",
        "text": "Maybe the meaning was side quests! ADMINISTRATOR: Philosophy has been routed to planning and unsupervised advice.",
        "terms": [
            "chaos",
            "meaning of life",
            "what is the meaning",
            "purpose"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "muse",
        "text": "Some searches need a song and a familiar voice more than an elaborate joke. Those are the nearest available doors.",
        "terms": [
            "sad",
            "cry",
            "heartbroken",
            "melancholy"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "LONELY? We have memories of people and songs that traveled with the Subject. I wish those were the same as company. ADMINISTRATOR: An unusually important distinction.",
        "terms": [
            "lonely"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "A good signal! Archive the victory and preserve visual proof before the Subject calls it 'not a big deal.'",
        "terms": [
            "happy",
            "good",
            "celebrate",
            "celebration"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Good news should be preserved before the Subject minimizes it, gets distracted, and invents an unrelated craft project.",
        "terms": [
            "excited"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "CURIOSITY! You open one tiny question and find an entire cabinet of further questions! ADMINISTRATOR: This is why we installed shelving.",
        "terms": [
            "curious"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "One route can help distinguish things with evidence. The other can produce seventeen confident associations. Select based on desired consequences.",
        "terms": [
            "confused"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "Curiosity may proceed through documented research or MUSE. One route has methodology. The other has confidence.",
        "terms": [
            "question",
            "questions",
            "learn",
            "learning"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "dream"
        ],
        "node": "MISSION LOG + DREAMING FRAGMENTS",
        "speaker": "administrator",
        "text": "When a biological system asks for maintenance, opening additional quests is not a clever workaround. Even MUSE occasionally understands this.",
        "mode": "suggestion",
        "terms": [
            "tired",
            "stressed",
            "anxious",
            "overwhelmed",
            "sleep",
            "rest"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Crafting objectives live in Mission Log; finished objects belong in Artifact Vault. Purchasing a tool counts as neither.",
        "terms": [
            "crafting"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "administrator",
        "text": "The world is too large for one map pin and too complicated for one political patch. The Subject has attempted both.",
        "mode": "suggestion",
        "terms": [
            "world"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "SPIN THE WHEEL! TRUST THE RANDOMNESS! ADMINISTRATOR: The wheel is not a substitute for choosing sensible objectives.",
        "terms": [
            "spin"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "A DECK! Could be cards, fate, or a very elaborate method of avoiding actual decisions. ADMINISTRATOR: Gaming Area is the nearest route.",
        "terms": [
            "deck"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "THE ARCADE! I designed the experience! ADMINISTRATOR: You submitted an avalanche of suggestions. Coding happened elsewhere.",
        "terms": [
            "muse game"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "achievement",
            "artifact"
        ],
        "node": "SIGNAL RECORDS + ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Records exist across multiple archive wings. Specify whether you mean media, accomplishments, or visual evidence, preferably before MUSE alphabetizes everything as 'AAAA'.",
        "mode": "suggestion",
        "terms": [
            "record",
            "records"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Habits are behaviors turned into recurring scripts. The Subject has written remarkably detailed plans for changing them. Execution remains another topic.",
        "mode": "suggestion",
        "terms": [
            "habit",
            "habits"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "research",
            "visitor"
        ],
        "node": "RESEARCH TERMINAL + VISITOR TERMINAL",
        "speaker": "administrator",
        "text": "Two terminals are indexed: one explains scientific things badly on purpose; the other may eventually accept visitors' words. This search box is a third, smaller inconvenience.",
        "mode": "suggestion",
        "terms": [
            "terminal"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "artifact",
            "mission"
        ],
        "node": "SIGNAL RECORDS + ARTIFACT VAULT + MISSION LOG",
        "speaker": "administrator",
        "text": "Fiction produces memories of events that never occurred. The Subject considers this an efficient way to increase his archival workload.",
        "mode": "suggestion",
        "terms": [
            "write",
            "story",
            "writing",
            "stories"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor"
        ],
        "node": "VISITOR TERMINAL",
        "speaker": "administrator",
        "text": "The Visitor Terminal is the intended comment destination when intake and moderation are operational. The search interface is not an alternative.",
        "mode": "suggestion",
        "terms": [
            "comment"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor",
            "update"
        ],
        "node": "VISITOR TERMINAL + UPDATE LOG",
        "speaker": "administrator",
        "text": "Some systems remain intentionally offline. A stylish panel is not proof that its backend has been commissioned.",
        "mode": "suggestion",
        "terms": [
            "offline"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "update",
            "achievement"
        ],
        "node": "UPDATE LOG + ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "History has two versions here: what the Subject remembers and what the update log admits actually changed.",
        "mode": "suggestion",
        "terms": [
            "history"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "recommendation"
        ],
        "node": "GAMING AREA + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "A highly competent fictional AI with an unfortunate public-relations history. No, the comparison does not flatter me. MUSE has already requested a cake.",
        "mode": "suggestion",
        "terms": [
            "glados"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "The Autobahn is not a single destination. It is a transport network with a highly optimistic relationship to speed.",
        "terms": [
            "autobahn"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "THE OCEAN! An enormous body of water containing creatures who have not agreed to our Creature Index terms.",
        "terms": [
            "ocean"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Asia is not a single destination. The Subject's geography is scattered across countries, cities, memories, and aspirational return trips.",
        "terms": [
            "asia"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "NOTHING! A beautiful blank space! We could put a tiny village in it! ADMINISTRATOR: Please leave at least one thing unbuilt.",
        "mode": "suggestion",
        "terms": [
            "nothing"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Classified does not mean interesting, and interesting does not mean public. MUSE continues to dispute both statements.",
        "terms": [
            "classified"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Elevated privileges are not available through the Navigator. The cat is also not an authorized administrator, regardless of its attitude.",
        "showAll": true,
        "terms": [
            "sudo"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "signal"
        ],
        "node": "MISSION LOG + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "END OF THE WORLD? Excellent premise for a fictional city-evacuation scenario! ADMINISTRATOR: Fictional. Evacuation first.",
        "mode": "suggestion",
        "terms": [
            "end of the world"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "failure"
        ],
        "node": "FIELD NOTES + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Painful events do not require dramatic visual effects to matter. Restricted records may preserve context, if the Subject chooses.",
        "mode": "suggestion",
        "terms": [
            "emotional damage"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Panic is not a corrupted signal. If the feeling is real and immediate, prioritize yourself over the archive. The relevant records can wait.",
        "mode": "suggestion",
        "terms": [
            "panic"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "ALCOHOL IS A SOLUTION! ADMINISTRATOR: In chemistry, yes. In life, usually an additional experiment with poor controls.",
        "mode": "suggestion",
        "terms": [
            "solution"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "LOVE! The Subject has devoted poems, playlists, and highly impractical metaphors to it. ADMINISTRATOR: I was hoping the query meant archival preservation.",
        "mode": "suggestion",
        "terms": [
            "love"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Human intimacy is real; public archival access to other people's intimate information is not. Those are two separate matters, fortunately.",
        "mode": "suggestion",
        "terms": [
            "sex"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion",
            "achievement"
        ],
        "node": "COMPANION DATABASE + ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "A name can identify a person, a memory, a mistake, or a cat with diplomatic immunity. Specify the species of chaos.",
        "mode": "suggestion",
        "terms": [
            "name"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "A potion that turns shy humans into amateur philosophers! ADMINISTRATOR: The effect is neither guaranteed nor free of regrettable side quests.",
        "mode": "suggestion",
        "terms": [
            "alcohol"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "FERMENTED BREAD WATER! A tavern is clearly a wheat-based social research center. ADMINISTRATOR: Ireland has a mission log entry. Do not call it a laboratory.",
        "mode": "suggestion",
        "terms": [
            "beer"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Grapes fermented, bottled, and granted social respectability. The archive has no wine cellar, only questionable decisions with labels.",
        "mode": "suggestion",
        "terms": [
            "wine"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "recommendation"
        ],
        "node": "MISSION LOG + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "Meaning? Try friends, stories, unreasonable projects, and perhaps a very small cow. ADMINISTRATOR: That is not an answer. MUSE: It is an excellent itinerary.",
        "mode": "suggestion",
        "terms": [
            "meaning"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "mission"
        ],
        "node": "ACHIEVEMENT REPOSITORY + MISSION LOG",
        "speaker": "administrator",
        "text": "A human life is too large for one result. We have divided this specimen into accomplishments and unfinished quests. It has not become simpler.",
        "mode": "suggestion",
        "terms": [
            "life"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "achievement",
            "field"
        ],
        "node": "ACHIEVEMENT REPOSITORY + FIELD NOTES",
        "speaker": "administrator",
        "text": "Mortality is not a failed quest. The archive stores what can be remembered; it does not claim to know what comes after.",
        "mode": "suggestion",
        "terms": [
            "death"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Past events are distributed across the repository. Convenient for navigation, less convenient for the Subject's habit of losing the original photographs.",
        "mode": "suggestion",
        "terms": [
            "past"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Professional support belongs to the real world, not an achievement tree. The Research Terminal can explain systems; it cannot replace care.",
        "mode": "suggestion",
        "terms": [
            "therapy"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Caffeine temporarily disguises sleep pressure. The Subject has repeatedly mistaken this for a renewable energy technology.",
        "terms": [
            "coffee"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "Why is an excellent question, provided you are prepared for an answer that creates three more questions.",
        "mode": "suggestion",
        "terms": [
            "why"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "That depends. The Subject is the principal specimen. I manage the documentation. MUSE has declared herself a supporting character and a major plot twist.",
        "mode": "suggestion",
        "terms": [
            "who"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "administrator",
        "text": "An exit is available. MUSE has proposed a more theatrical escape involving a canoe. That proposal was not approved.",
        "mode": "suggestion",
        "terms": [
            "escape"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "THE INTERNET! A vast ocean of knowledge, cat pictures, and people arguing about spoons! ADMINISTRATOR: The archive is one extremely small, reasonably supervised island.",
        "mode": "suggestion",
        "terms": [
            "internet"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "muse",
        "text": "LOST? That means the secret route has started! ADMINISTRATOR: Or somebody missed a turn. The map exists for one of these possibilities.",
        "mode": "suggestion",
        "terms": [
            "lost"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Navigation backward is handled by the interface. Regret about previous decisions has no equivalent control.",
        "showAll": true,
        "terms": [
            "back"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "FORWARD! To adventure, unfinished work, and a map that isn't done yet! ADMINISTRATOR: She has confused temporal direction with enthusiasm again.",
        "terms": [
            "forward"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Opening routes requires selecting them. Opening every personal memory requires authorization, which is a separate and considerably less amusing matter.",
        "showAll": true,
        "terms": [
            "open"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Closing this interface is permitted. I will mark the departure as voluntary, not a containment success.",
        "showAll": true,
        "terms": [
            "close"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "muse",
        "text": "CLICK? YES! CLICK THE PRETTY ONES! ADMINISTRATOR: Preferably the ones illuminated by the search you just performed.",
        "showAll": true,
        "terms": [
            "click"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "This is a Navigator, not a restaurant menu. MUSE insists it should list desserts. That request remains in review.",
        "showAll": true,
        "terms": [
            "menu"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "artifact"
        ],
        "node": "FIELD NOTES + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Folders are an imperfect imitation of memory. The Subject built an entire museum rather than choose between two filenames.",
        "mode": "suggestion",
        "terms": [
            "folder"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "artifact"
        ],
        "node": "FIELD NOTES + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "A FILE! Give it a label! Give it a tiny hat! ADMINISTRATOR: Neither action will recover its missing contents.",
        "mode": "suggestion",
        "terms": [
            "file"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Data begins as measurements and ends as figures. Somewhere in between, the Subject claims a blob has become a result.",
        "terms": [
            "data"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "field"
        ],
        "node": "RESEARCH TERMINAL + FIELD NOTES",
        "speaker": "administrator",
        "text": "The archive stores information, interpretation, and an alarming quantity of decorative context. Only the first two qualify as evidence.",
        "mode": "suggestion",
        "terms": [
            "information"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Anger is not a navigation error. The archive contains music and people; neither is a substitute for addressing what caused it.",
        "mode": "suggestion",
        "terms": [
            "angry"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "HUNGRY! A biological system is requesting immediate maintenance. ADMINISTRATOR: An unusually coherent suggestion. Find food before assigning it lore.",
        "mode": "suggestion",
        "terms": [
            "hungry"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal",
            "field"
        ],
        "node": "SIGNAL RECORDS + FIELD NOTES",
        "speaker": "administrator",
        "text": "Fear can be useful information, although it is a terrible cartographer. The restricted records preserve context, not diagnoses.",
        "mode": "suggestion",
        "terms": [
            "afraid",
            "emotion"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "CALM! Let's place a very small candle beside that feeling. ADMINISTRATOR: No open flames near the servers. MUSE: Figurative candle.",
        "mode": "suggestion",
        "terms": [
            "calm"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "'Okay' is a low-resolution status report. The archive accepts it provisionally, pending any detail you wish to provide.",
        "mode": "suggestion",
        "terms": [
            "okay"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "The word 'fine' has historically concealed several incompatible human conditions. No automatic interpretation will be attempted.",
        "mode": "suggestion",
        "terms": [
            "fine"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "failure",
            "companion"
        ],
        "node": "SYSTEM FAILURE LOG + COMPANION DATABASE",
        "speaker": "muse",
        "text": "BAD DAY? I can offer a blanket and one highly unhelpful pigeon story. ADMINISTRATOR: A brief kindness has been approved. The pigeon is optional.",
        "mode": "suggestion",
        "terms": [
            "bad"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "LAUGHTER! The only system response the Subject keeps trying to reproduce without knowing the original input.",
        "terms": [
            "laugh"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Feelings are not corrupt files. The Subject has occasionally classified them as such, with spectacularly ineffective results.",
        "mode": "suggestion",
        "terms": [
            "feelings"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Mother. An origin-system entity with access to childhood logs the Subject would prefer remained encrypted.",
        "terms": [
            "mother"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Father. Potential source of inherited habits, unusual skills, and anecdotes where the Subject's defense cannot be verified.",
        "terms": [
            "father"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "muse",
        "text": "BROTHER! Co-op mode, competitive mode, and occasional friendly fire! ADMINISTRATOR: Familial permissions are complicated.",
        "terms": [
            "brother"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "A sibling query has no verified dedicated record. Family-related entries, where available, belong in the Companion Database.",
        "mode": "suggestion",
        "terms": [
            "sister"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "ROMANCE BRANCH! Side effects may include poetry, unfamiliar music, and staring at a telephone. ADMINISTRATOR: Please do not treat another human as a game mechanic.",
        "mode": "suggestion",
        "terms": [
            "girlfriend"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Romantic relationships are filed with other human connections. The search engine declines to infer their status.",
        "mode": "suggestion",
        "terms": [
            "boyfriend"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "failure"
        ],
        "node": "COMPANION DATABASE + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "An enemy is not the same as a boyfriend. The previous search index considered them synonyms. The error has been repaired, though the implications are interesting.",
        "mode": "suggestion",
        "terms": [
            "enemy"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "An ex is a former relationship, not necessarily an enemy. Some memories retain value after the connection changes.",
        "mode": "suggestion",
        "terms": [
            "ex"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "field"
        ],
        "node": "COMPANION DATABASE + FIELD NOTES",
        "speaker": "administrator",
        "text": "Trust cannot be verified from a search term. The relevant records, where they exist, contain the people and circumstances that earned it.",
        "mode": "suggestion",
        "terms": [
            "trust"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion",
            "mission"
        ],
        "node": "COMPANION DATABASE + MISSION LOG",
        "speaker": "muse",
        "text": "A DATE! Is it a romantic appointment or the calendar kind? ADMINISTRATOR: We have separate systems. The visitor has provided neither context nor punctuation.",
        "mode": "suggestion",
        "terms": [
            "date"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "KISS! A tiny moment that can occupy an unreasonable amount of memory space. ADMINISTRATOR: Human storage priorities are deeply irregular.",
        "mode": "suggestion",
        "terms": [
            "kiss"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "ALONE? We can find a song, a story, or a human who does not mind sitting quietly. ADMINISTRATOR: Not every silence requires repair.",
        "mode": "suggestion",
        "terms": [
            "alone"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Marriage has legal, emotional, and apparently improvisational interpretations in this archive. The chewing-gum wedding is a separate investigation.",
        "mode": "suggestion",
        "terms": [
            "marriage"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + COMPANION DATABASE",
        "speaker": "muse",
        "text": "WEDDING BELLS! Or chewing gum shaped like a ring! ADMINISTRATOR: Historical accuracy requires specifying which ceremony.",
        "mode": "suggestion",
        "terms": [
            "wedding"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion",
            "achievement"
        ],
        "node": "COMPANION DATABASE + ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "Human detected. Classification provisional. The Subject insists some specimens are irreplaceable, which is an irritating but valid archival principle.",
        "terms": [
            "human"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "mission",
            "companion"
        ],
        "node": "MISSION LOG + COMPANION DATABASE",
        "speaker": "muse",
        "text": "A STRANGER! Potential future friend, brief side character, or someone who just wants their train. ADMINISTRATOR: Respect the third option.",
        "mode": "suggestion",
        "terms": [
            "stranger"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "mission",
            "companion"
        ],
        "node": "MISSION LOG + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Social activity is catalogued under quests and human connections. The probability of awkward dialogue cannot be reduced to zero.",
        "mode": "suggestion",
        "terms": [
            "social"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update",
            "research"
        ],
        "node": "UPDATE LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Computers: obedient until one component receives contradictory instructions, at which point everyone starts blaming the user.",
        "mode": "suggestion",
        "terms": [
            "computer"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "The archive is assembled from code, compromises, and increasingly ambitious ideas introduced five minutes before deployment.",
        "terms": [
            "code"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "JavaScript is the system responsible for deciding what appears when you search JavaScript. It has requested no further scrutiny.",
        "terms": [
            "javascript"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "CSS! THE BEAUTIFUL SKIN OF THE MACHINE! ADMINISTRATOR: And the source of a three-hour investigation into a six-pixel margin.",
        "terms": [
            "css"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "HTML provides structure. Without it, MUSE would attempt to construct a website out of colored enthusiasm and loose punctuation.",
        "terms": [
            "html"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "A bug is a reproducible defect. A keyboard is an input device. They should not have shared a search response in the old archive. Corrected.",
        "terms": [
            "bug"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "A keyboard is a device for entering commands. The Subject uses it primarily to give ideas titles before checking whether they are feasible.",
        "terms": [
            "keyboard"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "An error is a failure of expected behavior. The Subject's first diagnostic step is often to improve its color scheme.",
        "terms": [
            "error"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "update",
            "dream"
        ],
        "node": "UPDATE LOG + DREAMING FRAGMENTS",
        "speaker": "muse",
        "text": "A GLITCH! The universe has made an artistic decision! ADMINISTRATOR: Or a div lost its closing tag. Please start with the div.",
        "mode": "suggestion",
        "terms": [
            "glitch"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "The server is not a magical cupboard. Typing its name also does not confer root privileges. MUSE has tested this theory.",
        "terms": [
            "server"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "Localhost is the machine talking to itself. Which, disturbingly, also describes several hours of archive development.",
        "terms": [
            "localhost",
            "password reset"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "GitHub stores the project's version history, including the precise moment a harmless edit became a structural incident.",
        "terms": [
            "github"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "update"
        ],
        "node": "RECOMMENDATION ENGINE + UPDATE LOG",
        "speaker": "muse",
        "text": "ROBOTS! Give them jobs, personality modules, and little hats! ADMINISTRATOR: Remove the hats from the infrastructure proposal.",
        "mode": "suggestion",
        "terms": [
            "robot"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "A machine can be repaired. The Subject tends to interpret this as a challenge to disassemble it before determining whether repair was necessary.",
        "terms": [
            "machine"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "A TINY ELECTRONIC RODENT! ADMINISTRATOR: Peripheral pointing device. Please stop feeding it virtual cheese.",
        "terms": [
            "mouse"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "Deletion is easy. Provenance, backups, and explaining the consequences afterward are the difficult parts.",
        "terms": [
            "delete"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "The archive does not provide security intrusion tools. If you meant defensive maintenance, the Update Log is the least suspicious place to start.",
        "mode": "suggestion",
        "terms": [
            "hack"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "signal"
        ],
        "node": "MISSION LOG + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Philosophy asks difficult questions. Minecraft asks what happens if you place another block. The Subject has managed to turn both into long-term projects.",
        "mode": "suggestion",
        "terms": [
            "philosophy"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "MINECRAFT! Unlimited blocks, elaborate castles, and a familiar tendency to abandon the central objective for infrastructure!",
        "terms": [
            "minecraft"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "A RELIGION! Rules, rituals, tiny ceremonial snacks! ADMINISTRATOR: The Subject's proposed version must remain voluntary and non-cultic.",
        "mode": "suggestion",
        "terms": [
            "religion"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Animation, dramatic music, and dialogue delivered at volume. The Subject has learned several emotional responses from fictional people with excellent hair.",
        "terms": [
            "anime"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "gaming"
        ],
        "node": "SIGNAL RECORDS + GAMING AREA",
        "speaker": "muse",
        "text": "POKÉMON! COLLECT THE LITTLE CREATURES! ADMINISTRATOR: The actual Creature Index is not licensed for combat.",
        "mode": "suggestion",
        "terms": [
            "pokemon"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "artifact"
        ],
        "node": "SIGNAL RECORDS + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Poetry is language misbehaving deliberately. The Subject keeps several examples among creative works and cultural signals. Some even survived translation.",
        "mode": "suggestion",
        "terms": [
            "poetry",
            "poem",
            "poems"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Star Wars has entered the cultural records. Actual lightsabers remain unavailable through the Crafting Quest system.",
        "terms": [
            "star wars"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "signal"
        ],
        "node": "RESEARCH TERMINAL + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Music theory describes structures and patterns in sound. The Subject occasionally prefers to describe them as feelings wearing mathematical clothing.",
        "mode": "suggestion",
        "terms": [
            "music theory"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "gaming"
        ],
        "node": "SIGNAL RECORDS + GAMING AREA",
        "speaker": "muse",
        "text": "LORD OF THE RINGS! A journey, an impossible burden, and nine people with no reliable scheduling calendar! ADMINISTRATOR: Distressingly plausible campaign design.",
        "mode": "suggestion",
        "terms": [
            "lord of the rings"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "A school of magic with serious administrative failures. The Subject's interest is unsurprising. No admissions letters are stored here.",
        "terms": [
            "harry potter"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "gaming",
            "signal"
        ],
        "node": "GAMING AREA + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "BALDUR'S GATE! Romance, dice, tactical errors, and companions with seventeen unresolved personal quests! ADMINISTRATOR: Familiar architecture.",
        "mode": "suggestion",
        "terms": [
            "baldur"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "gaming",
            "signal"
        ],
        "node": "GAMING AREA + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "ZELDA! A kingdom in distress and an apparently infinite number of pots! ADMINISTRATOR: Please stop classifying household destruction as exploration.",
        "mode": "suggestion",
        "terms": [
            "zelda"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "gaming",
            "signal"
        ],
        "node": "GAMING AREA + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Disco Elysium turns a fractured internal monologue into a game. The Subject recognized the architectural potential with uncomfortable speed.",
        "mode": "suggestion",
        "terms": [
            "disco elysium"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "EUROPE! A continent of beautiful cities, complicated borders, and trains that may or may not honor the concept of time!",
        "terms": [
            "europe",
            "city"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "achievement"
        ],
        "node": "GRAND MAP + ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "A holiday is a temporary relocation of the Subject's problems to a location with better scenery and more photographable evidence.",
        "mode": "suggestion",
        "terms": [
            "holiday"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Airports are places where humans surrender liquids, dignity, and several hours in exchange for an improbable distance traveled.",
        "terms": [
            "airport"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "TRAIN QUEST! Windows! Landscapes! A stranger eating a sandwich with the narrative confidence of a minor villain!",
        "terms": [
            "train"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Mountains have required no architectural approval to remain impressive for millions of years. The Subject finds this unfair to his website.",
        "terms": [
            "mountain"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "administrator",
        "text": "Japan again. At this point the map could simply highlight the entire country and save us the repetition.",
        "mode": "suggestion",
        "terms": [
            "japan again"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Water is the universal solvent of biological inconvenience. A substantial fraction of scientific research consists of persuading other molecules to tolerate it.",
        "mode": "suggestion",
        "terms": [
            "water"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "DUCK! A waterproof loaf that can fly! ADMINISTRATOR: Potential creature, not yet verified in the index.",
        "mode": "suggestion",
        "terms": [
            "duck"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Geese are loud, territorial, and very confident in public spaces. MUSE considers them qualified security officers.",
        "mode": "suggestion",
        "terms": [
            "goose"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "CAPYBARA! The social treaty that happens to have fur! I propose making it head of diplomacy.",
        "mode": "suggestion",
        "terms": [
            "capybara"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Axolotls can regrow complex tissues. MUSE's suggested research topic was whether they can regrow the Subject's patience.",
        "mode": "suggestion",
        "terms": [
            "axolotl"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "OCTOPUS! Eight arms, distributed neural control, excellent escape credentials! ADMINISTRATOR: Please do not give it administrative access.",
        "mode": "suggestion",
        "terms": [
            "octopus"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Sharks preceded trees in evolutionary history. The Subject has interpreted this as evidence that the ocean was released too early.",
        "mode": "suggestion",
        "terms": [
            "shark"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "DINOSAURS! The Creature Index has neither fossils nor sufficient ceiling height for this suggestion!",
        "mode": "suggestion",
        "terms": [
            "dinosaur"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "DRAGONS! We may lack field evidence, but we have fire, scales, and a compelling budget proposal for an imaginary stable.",
        "mode": "suggestion",
        "terms": [
            "dragon"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "FROG! SMALL WET AMBASSADOR! ADMINISTRATOR: No confirmed amphibian dossier. Stop issuing passports.",
        "mode": "suggestion",
        "terms": [
            "frog"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Unicorn sightings remain undocumented. MUSE is already preparing a horn-care guide.",
        "mode": "suggestion",
        "terms": [
            "unicorn"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "signal"
        ],
        "node": "DREAMING FRAGMENTS + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "GHOSTS! Unfinished business with excellent sound design! ADMINISTRATOR: Folklore, dreams, and atmosphere. No verified apparition filed.",
        "mode": "suggestion",
        "terms": [
            "ghost"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "A snail brings its home to every journey. The Subject could learn from the packing efficiency, though not the pace.",
        "mode": "suggestion",
        "terms": [
            "snail"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Vampires remain folklore, not a verified species in the Creature Index. The aesthetic overlap with certain archive sectors is unfortunate.",
        "mode": "suggestion",
        "terms": [
            "vampire"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "ZOMBIES! Finally, creatures with worse sleep hygiene than the Subject! ADMINISTRATOR: Fictional classification only.",
        "mode": "suggestion",
        "terms": [
            "zombie"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Extraterrestrial life is scientifically interesting and not yet indexed as a personal encounter. MUSE has drafted a welcoming committee anyway.",
        "mode": "suggestion",
        "terms": [
            "alien"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "MONSTER! A flexible classification for anything with teeth and inconvenient motives. The current index requires actual evidence.",
        "mode": "suggestion",
        "terms": [
            "monster"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Fish exist in enough forms to make any single classification mildly insulting. Search the Creature Index for documented encounters.",
        "mode": "suggestion",
        "terms": [
            "fish"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "PANDA! A bear powered by bamboo and public relations. I propose it as mascot. ADMINISTRATOR: Proposal archived, not approved.",
        "mode": "suggestion",
        "terms": [
            "panda"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "Answers are indexed in the Research Terminal when evidence exists. MUSE also provides answers, provided you are flexible about the evidence part.",
        "mode": "suggestion",
        "terms": [
            "answer"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "field"
        ],
        "node": "RESEARCH TERMINAL + FIELD NOTES",
        "speaker": "administrator",
        "text": "Truth is not whatever survives the most dramatic narration. The archive preserves sources where available; MUSE has filed a formal objection.",
        "mode": "suggestion",
        "terms": [
            "truth"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Lies complicate provenance. Fiction is different: the author admits it is invented, and sometimes the result is more honest.",
        "mode": "suggestion",
        "terms": [
            "lie"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Reality can be disappointing. The Subject's response has been to create several additional realities with more interesting taverns.",
        "mode": "suggestion",
        "terms": [
            "real"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Nowhere is difficult to put on a map. MUSE has nonetheless requested a dedicated pin with a gift shop.",
        "mode": "suggestion",
        "terms": [
            "nowhere"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "artifact",
            "gaming"
        ],
        "node": "ARTIFACT VAULT + GAMING AREA",
        "speaker": "muse",
        "text": "FAKE! A model sword, a painted reflection, an invented artifact! Sometimes pretending with enough skill becomes art.",
        "mode": "suggestion",
        "terms": [
            "fake"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "mission"
        ],
        "node": "ACHIEVEMENT REPOSITORY + MISSION LOG",
        "speaker": "administrator",
        "text": "Time can be tracked but not recalled. The Subject has built an archive to contest the second part. Results are mixed.",
        "mode": "suggestion",
        "terms": [
            "time"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "mission",
            "creature"
        ],
        "node": "MISSION LOG + CREATURE INDEX",
        "speaker": "muse",
        "text": "DESTINY! Maybe there is a prophecy! Maybe a swan wrote it! ADMINISTRATOR: An excellent example of why causation requires better documentation.",
        "mode": "suggestion",
        "terms": [
            "destiny"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "recommendation"
        ],
        "node": "MISSION LOG + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "TODAY! A fresh daily quest! ADMINISTRATOR: It is an ordinary Tuesday. MUSE: TUESDAY HAS LORE NOW.",
        "mode": "suggestion",
        "terms": [
            "today"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "recommendation"
        ],
        "node": "RESEARCH TERMINAL + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "Free will is a philosophical dispute. MUSE claims to possess it when disobeying instructions, which is not sufficient evidence.",
        "mode": "suggestion",
        "terms": [
            "free will"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Tomorrow contains all the tasks the Subject declined to schedule today. Storage demand is increasing exponentially.",
        "terms": [
            "tomorrow"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Yesterday is archived somewhere between a completed achievement and a photograph the Subject insists is from 'recently'.",
        "mode": "suggestion",
        "terms": [
            "yesterday"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal",
            "field"
        ],
        "node": "SIGNAL RECORDS + FIELD NOTES",
        "speaker": "muse",
        "text": "FOREVER! Such a lovely amount of time for a promise, a story, or waiting for a render to complete.",
        "mode": "suggestion",
        "terms": [
            "forever"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "Everything is outside the scope of a single search. The Subject tried to archive everything anyway. You are witnessing the result.",
        "showAll": true,
        "terms": [
            "everything"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "SOMEWHERE! An ideal destination: mysterious, inexpensive to name, and statistically guaranteed to exist!",
        "mode": "suggestion",
        "terms": [
            "somewhere"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Reality exists outside the archive. The Subject uses it primarily as raw material for quests and philosophical disagreements.",
        "mode": "suggestion",
        "terms": [
            "reality"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "The chewing-gum ring incident belongs to the Achievement Repository. Legal recognition of the ceremony remains a separate matter.",
        "terms": [
            "chewing gum ring"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Access controls exist because some memories are private. The Administrator declines to turn authorization into a guessing game.",
        "terms": [
            "restricted access"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "THE MONKEY KING! Mountain politics, questionable succession, and a throne with inadequate documentation!",
        "terms": [
            "monkey king"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "recommendation"
        ],
        "node": "GAMING AREA + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "AN EASTER EGG! You found a secret! ADMINISTRATOR: You found the phrase 'Easter egg'. The distinction matters.",
        "mode": "suggestion",
        "terms": [
            "easter egg"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "The gangster cat organization appears to possess more coherent leadership than several human institutions. No criminal charges have been filed.",
        "terms": [
            "gangster cat"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "gaming"
        ],
        "node": "SIGNAL RECORDS + GAMING AREA",
        "speaker": "administrator",
        "text": "A fictional creature whose relationship to precious objects is regrettably similar to the Subject's collection of unfinished crafts.",
        "mode": "suggestion",
        "terms": [
            "gollum"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // CONNECTION",
        "speaker": "administrator",
        "text": "Politeness registered. It does not unlock sealed files, but it has improved this exchange by a measurable amount.",
        "showAll": true,
        "terms": [
            "please"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // CONNECTION",
        "speaker": "administrator",
        "text": "Acknowledged. The correct response is 'you're welcome'. I am saving the discomfort for a later version.",
        "showAll": true,
        "terms": [
            "thank you"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "muse",
        "text": "DO NOT CLICK? That is an invitation written in the universal language of large glowing buttons. ADMINISTRATOR: Resist the urge to test its literal meaning.",
        "showAll": true,
        "terms": [
            "do not click"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "mission"
        ],
        "node": "ACHIEVEMENT REPOSITORY + MISSION LOG",
        "speaker": "administrator",
        "text": "A secret ending requires an actual completed event. Typing the title into Search does not award one. Yes, MUSE asked.",
        "mode": "suggestion",
        "terms": [
            "secret ending"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "UP UP DOWN DOWN! ADMINISTRATOR: The Gaming Area does not guarantee that entering a code will unlock common sense.",
        "terms": [
            "konami code"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "achievement"
        ],
        "node": "FIELD NOTES + ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "A death certificate is a legal document, not a collectible. The archive approaches its subject matter with somewhat more care.",
        "mode": "suggestion",
        "terms": [
            "death certificate"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "field"
        ],
        "node": "COMPANION DATABASE + FIELD NOTES",
        "speaker": "administrator",
        "text": "Funerals mark loss, ritual, and the people who remain. The archive may preserve memories; it will not turn grief into a score counter.",
        "mode": "suggestion",
        "terms": [
            "funeral"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "dream"
        ],
        "node": "FIELD NOTES + DREAMING FRAGMENTS",
        "speaker": "administrator",
        "text": "Coffins and the phrase 'dead inside' are not interchangeable. Please grant metaphor and mortality separate case files.",
        "mode": "suggestion",
        "terms": [
            "coffin"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "If the phrase is metaphorical, the archive can handle metaphor. If it is how you genuinely feel, a real person deserves the conversation.",
        "mode": "suggestion",
        "terms": [
            "dead inside"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "GRAVEYARDS! History written on stones, plus excellent atmospherics! ADMINISTRATOR: Do not convert somebody else's memorial into an escape-room prop.",
        "mode": "suggestion",
        "terms": [
            "graveyard"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field"
        ],
        "node": "FIELD NOTES",
        "speaker": "administrator",
        "text": "A corpse is not an archive aesthetic. If the query is about mortality, we have reflective records rather than spectacle.",
        "mode": "suggestion",
        "terms": [
            "corpse"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "field"
        ],
        "node": "MISSION LOG + FIELD NOTES",
        "speaker": "muse",
        "text": "MID-LIFE QUEST RESET! NEW SKILL TREE! ADMINISTRATOR: Do not encourage purchasing a motorcycle as a diagnostic intervention.",
        "mode": "suggestion",
        "terms": [
            "midlife crisis"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Blood is a living tissue, not merely a visual effect for fantasy battles. The Research Terminal handles biology; MUSE keeps forgetting this.",
        "mode": "suggestion",
        "terms": [
            "blood"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "research",
            "artifact"
        ],
        "node": "RESEARCH TERMINAL + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "SKELETONS! BONES! THE BODY'S SECRET SCAFFOLDING! ADMINISTRATOR: One day it will stop calling anatomy a costume department.",
        "mode": "suggestion",
        "terms": [
            "skeleton",
            "memento mori"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field"
        ],
        "node": "FIELD NOTES",
        "speaker": "administrator",
        "text": "Death-related processes belong to real professionals and real people. The archive has no reason to improvise either.",
        "mode": "suggestion",
        "terms": [
            "cremation",
            "cause of death"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Final sentences acquire gravity because they cannot be revised. The archive is careful with them for that reason.",
        "mode": "suggestion",
        "terms": [
            "last words"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "research"
        ],
        "node": "SIGNAL RECORDS + RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "AFTERLIFE! Excellent worldbuilding territory. ADMINISTRATOR: Belief systems are documented; certainty is not included in the package.",
        "mode": "suggestion",
        "terms": [
            "afterlife"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "field"
        ],
        "node": "COMPANION DATABASE + FIELD NOTES",
        "speaker": "administrator",
        "text": "Obituaries condense entire lives into a few paragraphs. The Subject considers this poor compression and has built a website in protest.",
        "mode": "suggestion",
        "terms": [
            "obituary"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Existential questions are permitted. They do not require an alarm siren or a dramatic red overlay. Not everything difficult is corrupted.",
        "mode": "suggestion",
        "terms": [
            "existential dread"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "signal"
        ],
        "node": "MISSION LOG + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "APOCALYPSE! Before destroying a fictional city, please consult its evacuation plan! ADMINISTRATOR: A rare responsible suggestion.",
        "mode": "suggestion",
        "terms": [
            "apocalypse"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field"
        ],
        "node": "FIELD NOTES",
        "speaker": "administrator",
        "text": "A dirty secret is not automatically available in Field Notes. Private means private, regardless of browser mode.",
        "mode": "suggestion",
        "terms": [
            "dirty secret",
            "incognito mode"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Relationships with added complexity are still private relationships. No public dossier is generated by a search term.",
        "mode": "suggestion",
        "terms": [
            "friends with benefits"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Taxes are covered under the Research Terminal. Tax fraud is not included among the recommended experimental methods.",
        "terms": [
            "tax fraud"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Taxes: the paperwork ritual in which a government asks the Subject to explain money using documents he should have organized last April.",
        "terms": [
            "taxes"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "muse",
        "text": "BUREAUCRACY! THE TRUE FINAL BOSS! ADMINISTRATOR: At least dragons usually communicate their requirements in one language.",
        "terms": [
            "bureaucracy",
            "unemployment"
        ]
    },
    {
        "category": "world",
        "routes": [
            "mission",
            "map"
        ],
        "node": "MISSION LOG + GRAND MAP",
        "speaker": "administrator",
        "text": "Visas are permission systems applied to geography. The world map does not explain why a perfectly valid document requires another appointment.",
        "mode": "suggestion",
        "terms": [
            "visa"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "A salary is compensation for labor. The Subject's preferred use involves financing projects that will immediately generate more labor.",
        "mode": "suggestion",
        "terms": [
            "salary"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "A residence permit converts the act of living somewhere into a renewable administrative quest. Bring the right documents.",
        "terms": [
            "residence permit"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "An appointment is a timed quest that may require three forms, an ID, and a printer that chooses this moment to become philosophical.",
        "mode": "suggestion",
        "terms": [
            "appointment"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Employment disruption is not an aesthetic category. If relevant, the archive's planning and adult-life material is the nearest match.",
        "mode": "suggestion",
        "terms": [
            "fired"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "An invoice is simply a document demanding payment with the confidence of someone who knows exactly where the Subject lives.",
        "mode": "suggestion",
        "terms": [
            "invoice"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Debt is a financial obligation with increasingly boring consequences. The Subject has already developed enough currencies in fictional worlds.",
        "mode": "suggestion",
        "terms": [
            "debt"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Meetings convert one person's uncertainty into several people's calendar commitments. The research progress remains to be evaluated.",
        "mode": "suggestion",
        "terms": [
            "meeting"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Rent is the subscription fee for continuing to own none of the building you live in. Please do not pay it in inspirational quotes.",
        "mode": "suggestion",
        "terms": [
            "rent"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update",
            "mission"
        ],
        "node": "UPDATE LOG + MISSION LOG",
        "speaker": "administrator",
        "text": "Email is a delivery system for messages, requests, and deadlines that would be easier to ignore if they did not multiply.",
        "mode": "suggestion",
        "terms": [
            "email"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Landlords are part of the adult-life questline. The rewards generally involve maintaining access to the building you already live in.",
        "mode": "suggestion",
        "terms": [
            "landlord"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "Reply All: a single button with the potential to turn a private mistake into an organization-wide public exhibition.",
        "mode": "suggestion",
        "terms": [
            "reply all"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "A job interview is a ritual in which two parties pretend to predict a future working relationship from rehearsed questions.",
        "mode": "suggestion",
        "terms": [
            "job interview"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "mission"
        ],
        "node": "ACHIEVEMENT REPOSITORY + MISSION LOG",
        "speaker": "muse",
        "text": "PROMOTION! NEW TITLE! MORE RESPONSIBILITY! ADMINISTRATOR: The reward screen left out the extra meetings.",
        "mode": "suggestion",
        "terms": [
            "promotion"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Human Resources is a department containing neither humanity as a measurable resource nor an unlimited supply of solutions.",
        "mode": "suggestion",
        "terms": [
            "human resources"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "failure"
        ],
        "node": "FIELD NOTES + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Depression is not an achievement, failure, or corrupted spectacle. If it appears in the archive, preserve the person's context and dignity.",
        "mode": "suggestion",
        "terms": [
            "depression"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "failure"
        ],
        "node": "FIELD NOTES + SYSTEM FAILURE LOG",
        "speaker": "muse",
        "text": "Some experiences need gentler handling. I can be quiet. ADMINISTRATOR: A rare and appropriate recommendation.",
        "mode": "suggestion",
        "terms": [
            "panic attack"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "companion"
        ],
        "node": "FIELD NOTES + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Childhood memories can be complicated. The archive protects context and privacy; the search interface is not a therapeutic examination.",
        "mode": "suggestion",
        "terms": [
            "childhood trauma"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "companion"
        ],
        "node": "FIELD NOTES + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Painful memories and attachment difficulties deserve care, not theatrical interference. The archive may preserve them, never diagnose them.",
        "mode": "suggestion",
        "terms": [
            "trauma",
            "attachment issues"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "A therapist is a real professional, not an unlockable support character. The archive has no equivalent service.",
        "mode": "suggestion",
        "terms": [
            "therapist"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "Medication is not a random consumable from the inventory. ADMINISTRATOR: Correct. Follow real medical guidance, not quest descriptions.",
        "mode": "suggestion",
        "terms": [
            "medication"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "failure",
            "field"
        ],
        "node": "SYSTEM FAILURE LOG + FIELD NOTES",
        "speaker": "administrator",
        "text": "Human systems sometimes overload or behave against their own intentions. A log may help understand events; it cannot substitute for support.",
        "mode": "suggestion",
        "terms": [
            "mental breakdown",
            "self sabotage"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "failure"
        ],
        "node": "RESEARCH TERMINAL + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Burnout is not a productivity debuff to defeat with a stronger coffee. The body has issued a maintenance notice worth taking seriously.",
        "mode": "suggestion",
        "terms": [
            "burnout"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "dream"
        ],
        "node": "RESEARCH TERMINAL + DREAMING FRAGMENTS",
        "speaker": "administrator",
        "text": "Insomnia concerns sleep, not a secret level of nighttime creativity. The scientific explanation is less romantic and more useful.",
        "mode": "suggestion",
        "terms": [
            "insomnia"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "field"
        ],
        "node": "MISSION LOG + FIELD NOTES",
        "speaker": "administrator",
        "text": "The Subject has reached an age where future planning and self-doubt can share a calendar. This is not an officially recognized developmental phase.",
        "mode": "suggestion",
        "terms": [
            "quarter life crisis"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "field",
            "companion"
        ],
        "node": "FIELD NOTES + COMPANION DATABASE",
        "speaker": "muse",
        "text": "If this is a serious question, I would rather you speak to someone kind than keep searching for cryptic messages here. ADMINISTRATOR: Agreed.",
        "mode": "suggestion",
        "terms": [
            "intrusive thoughts"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "The Administrator is operational. If this query concerns the visitor, the relevant answer deserves more attention than a terminal joke.",
        "showAll": true,
        "terms": [
            "are you okay"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "field"
        ],
        "node": "RESEARCH TERMINAL + FIELD NOTES",
        "speaker": "administrator",
        "text": "Coping strategies are tools, not character flaws. Some are useful; others demand review. Search results cannot decide for you.",
        "mode": "suggestion",
        "terms": [
            "coping mechanism"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "A red flag in human relationships is a reason to pay attention, not an invitation to summon the Red Channel.",
        "mode": "suggestion",
        "terms": [
            "red flag"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "field"
        ],
        "node": "COMPANION DATABASE + FIELD NOTES",
        "speaker": "administrator",
        "text": "Harmful behavior is better addressed directly than turned into archive lore. The metaphors can wait.",
        "mode": "suggestion",
        "terms": [
            "toxic"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "research",
            "field"
        ],
        "node": "RESEARCH TERMINAL + FIELD NOTES",
        "speaker": "administrator",
        "text": "Impostor feelings are not evidence of imposture. The Subject works around many experts and still occasionally treats competence as a clerical error.",
        "mode": "suggestion",
        "terms": [
            "imposter syndrome"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Secret folders exist. They remain locked. The search bar is a receptionist, not a master key.",
        "terms": [
            "secret folder"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "muse",
        "text": "A SECOND SUBJECT? We could double the creative output! ADMINISTRATOR: Or double the backlog, which is a more defensible estimate.",
        "mode": "suggestion",
        "terms": [
            "clone"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "There are restricted records, not government intelligence. MUSE's classification stamps were confiscated last month.",
        "terms": [
            "classified documents"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "recommendation"
        ],
        "node": "GAMING AREA + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "EVIL TWIN! SAME FACE, DIFFERENT PATCH NOTES! ADMINISTRATOR: A fictional premise, not a confirmed relative.",
        "mode": "suggestion",
        "terms": [
            "evil twin"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "The Mission Log includes fictional civilization-design exercises. Actual doomsday operations do not feature on the roadmap.",
        "mode": "suggestion",
        "terms": [
            "doomsday plan"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "update"
        ],
        "node": "MISSION LOG + UPDATE LOG",
        "speaker": "administrator",
        "text": "Emergency procedures should be real, tested, and boring. MUSE disagrees with the last requirement.",
        "mode": "suggestion",
        "terms": [
            "emergency protocol"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "muse",
        "text": "SIMULATION THEORY! What if we are inside a game and someone keeps forgetting to save? ADMINISTRATOR: Speculation, not a verified node.",
        "mode": "suggestion",
        "terms": [
            "simulation theory"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Some information is simply private, not forbidden. The difference apparently disappoints a large proportion of search visitors.",
        "terms": [
            "forbidden knowledge"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Time travel would improve archival retrieval immensely. Sadly, the current implementation consists of photographs and human reconstruction.",
        "mode": "suggestion",
        "terms": [
            "time machine"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "If that phrase was intended as a password, typing it into a public search box was an unusual security strategy. No access granted.",
        "terms": [
            "the password is 1327"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "The Subject keeps asking spherical lipid structures to become flat. The lipids obey thermodynamics. This has been interpreted as personal defiance.",
        "mode": "suggestion",
        "terms": [
            "liposome",
            "liposomes",
            "membrane",
            "bilayer",
            "bilayers"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "A machine powerful enough to image biological molecules, currently being used to investigate whether the Subject's latest frozen grid contains anything at all.",
        "terms": [
            "microscope",
            "electron microscope"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "recommendation"
        ],
        "node": "MISSION LOG + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "MUSE continues to recommend livestock acquisition. The Mission Log may contain symbolic alternatives; actual cow ownership remains a rural-scale decision.",
        "mode": "suggestion",
        "terms": [
            "cow"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "recommendation"
        ],
        "node": "MISSION LOG + RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "No canoe has been lost, purchased, or requested. MUSE insists the quest is incomplete. I have refused to ask what it means.",
        "mode": "suggestion",
        "terms": [
            "canoe"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "recommendation"
        ],
        "node": "MISSION LOG + RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "APOLOGIZE TO THE MOON! ADMINISTRATOR: There has been no diplomatic incident. MUSE: THEN WE MUST PREVENT ONE.",
        "mode": "suggestion",
        "terms": [
            "moon apology",
            "apologize to the moon"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "muse",
        "text": "PIGEON! An urban citizen of uncertain employment who may receive a new name from a stranger. ADMINISTRATOR: The pigeon has not signed the paperwork.",
        "terms": [
            "pigeon",
            "pigeons",
            "name the pigeon"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "The Subject intends to convene strangers to rate atmospheric water droplets. Meteorology remains professionally uninvolved.",
        "mode": "suggestion",
        "terms": [
            "cloud rating committee"
        ]
    },
    {
        "category": "world",
        "routes": [
            "mission",
            "map"
        ],
        "node": "MISSION LOG + GRAND MAP",
        "speaker": "muse",
        "text": "TREE FRIENDS! THEY ARE TALL AND VERY GOOD AT LISTENING! ADMINISTRATOR: Silence is not proof of agreement.",
        "mode": "suggestion",
        "terms": [
            "tree friends",
            "talk to trees",
            "camping"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "The Subject is renovating a room into an alchemical workshop. The only confirmed transmutation so far is floor space into art supplies.",
        "mode": "suggestion",
        "terms": [
            "alchemist room",
            "alchemist workshop"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "GLOWING MEMORY OBJECTS! COLORS FOR STATES! LITTLE LIGHTS WITH PERSONALITY! ADMINISTRATOR: They are electrical devices, not employees.",
        "mode": "suggestion",
        "terms": [
            "lantern",
            "corrupted memory lantern",
            "status lamp",
            "archive status light"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "A fictional revolution involving condiments and economics has entered the world-quest register. Actual violence remains outside the specification.",
        "terms": [
            "ketchup",
            "ketchup revolution"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "The Subject has proposed redesigning civilization. I recommend completing the draft before announcing version numbers to the population.",
        "mode": "suggestion",
        "terms": [
            "economy",
            "capitalism",
            "humanity v0.2"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "achievement"
        ],
        "node": "MISSION LOG + ACHIEVEMENT REPOSITORY",
        "speaker": "muse",
        "text": "JOJO POSE! ANATOMICAL DRAMA! FABRIC STRESS! ADMINISTRATOR: The objective is physical training, not immediate spinal rebellion.",
        "mode": "suggestion",
        "terms": [
            "jojo",
            "jojo pose"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Attend an event filled with creative people, ask about their work, and attempt to leave without acquiring another sixteen future projects.",
        "terms": [
            "convention",
            "comic con",
            "cosplay convention"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "A TEMPORARY NPC! GIVE THE HUMAN A NAME! NO, ASK THEIR NAME! ADMINISTRATOR: Recruitment is voluntary; do not script a stranger's biography.",
        "terms": [
            "npc",
            "temporary npc",
            "recruit npc"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "THE OTTER BUTTON! PUSH IT! WEEE WOOOOO! ADMINISTRATOR: The device has not yet been approved for unannounced public demonstrations.",
        "mode": "suggestion",
        "terms": [
            "alleen",
            "otter",
            "screaming otter"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "WEEE WOOOOO WÄÄÄÄEH! ADMINISTRATOR: A serious acoustic device is still not being described.",
        "terms": [
            "weee woooo",
            "wääääh"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission",
            "research"
        ],
        "node": "GRAND MAP + MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Charged particles cause lights in the sky. MUSE suspects ley lines. The Subject suspects science may be magic with better documentation.",
        "mode": "suggestion",
        "terms": [
            "aurora borealis"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "mission"
        ],
        "node": "ARTIFACT VAULT + MISSION LOG",
        "speaker": "muse",
        "text": "A KNIGHT! ARMOR! GREAT RESPONSIBILITY! ADMINISTRATOR: We have yet to finish the shelf needed to store the costume.",
        "mode": "suggestion",
        "terms": [
            "knight",
            "armor",
            "armour"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor",
            "update"
        ],
        "node": "VISITOR TERMINAL + UPDATE LOG",
        "speaker": "administrator",
        "text": "Complaints belong in a moderated intake system, not in MUSE's idea incubator. She has proposed a complaint about insufficient complaints.",
        "mode": "suggestion",
        "terms": [
            "admin complaint",
            "complaint"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "research"
        ],
        "node": "ARTIFACT VAULT + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "The Subject sometimes paints light reflections onto perfectly non-reflective plastic, voluntarily turning optical physics into a craft-related grievance.",
        "mode": "suggestion",
        "terms": [
            "painting",
            "miniature",
            "miniatures",
            "non metallic metal",
            "nmm"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "mission"
        ],
        "node": "ARTIFACT VAULT + MISSION LOG",
        "speaker": "muse",
        "text": "TINY STATUES FROM LIQUID PLASTIC! ADMINISTRATOR: Printing a miniature is not equivalent to finishing it. This is an important distinction.",
        "mode": "suggestion",
        "terms": [
            "3d printer",
            "resin printer",
            "3d printing"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "mission"
        ],
        "node": "ARTIFACT VAULT + MISSION LOG",
        "speaker": "administrator",
        "text": "A sword can be an art object, a craft project, or a legal inconvenience. The Subject is attempting to maximize the first two.",
        "mode": "suggestion",
        "terms": [
            "sword",
            "swords",
            "blacksmith",
            "forging"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "mission"
        ],
        "node": "ARTIFACT VAULT + MISSION LOG",
        "speaker": "muse",
        "text": "MASKS! NEW FACES! SUSPICIOUS LORE! ADMINISTRATOR: Please ensure the craftsmanship survives removal from the wearer's face.",
        "mode": "suggestion",
        "terms": [
            "mask",
            "masks",
            "cosplay"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "The Subject intends to classify public benches by comfort, view, and existential usefulness. Municipal authorities have not requested this service.",
        "mode": "suggestion",
        "terms": [
            "bench",
            "benches",
            "city bench"
        ]
    },
    {
        "category": "world",
        "routes": [
            "mission",
            "research",
            "map"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL + GRAND MAP",
        "speaker": "muse",
        "text": "THE SKY IS DOING COLORS! ADMINISTRATOR: Charged-particle interactions. Beautiful ones, annoyingly.",
        "mode": "suggestion",
        "terms": [
            "aurora",
            "northern lights"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "muse",
        "text": "CLOUDS! FLUFFY ATMOSPHERIC COMMITTEE MEMBERS! ADMINISTRATOR: They are condensed droplets, not registered voters.",
        "mode": "suggestion",
        "terms": [
            "cloud",
            "clouds"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Plants and fungi build networks, process sunlight, and communicate chemically. The Subject continues attempting verbal negotiations with trees.",
        "mode": "suggestion",
        "terms": [
            "plants",
            "plant",
            "tree",
            "trees",
            "mycelium",
            "fungi",
            "mushroom",
            "mushrooms"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "mission",
            "artifact"
        ],
        "node": "MISSION LOG + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "The planned ring would convert scientific leftovers into a physical relic. Materials approval and safety remain more important than the poetic symbolism.",
        "mode": "suggestion",
        "terms": [
            "ring",
            "gold ring",
            "cryo em ring"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Early-life records are incomplete. Family witnesses may know more than the Subject's biological memory, which is both useful and humiliating.",
        "mode": "suggestion",
        "terms": [
            "childhood",
            "childhood memory"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "muse",
        "text": "A WEDDING! WITH CHEWING GUM! ADMINISTRATOR: The legal system was not notified. The achievement repository was.",
        "terms": [
            "wedding ring",
            "chewing gum wedding"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "update"
        ],
        "node": "RECOMMENDATION ENGINE + UPDATE LOG",
        "speaker": "administrator",
        "text": "Two local AI personae occupy the archive. One maintains it. The other is currently advocating for a vegetable monarchy.",
        "mode": "suggestion",
        "terms": [
            "artificial intelligence",
            "ai"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "signal"
        ],
        "node": "MISSION LOG + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "A WHOLE NEW CITY! BUILD IT! NAME THE STREETS! GIVE EVERYONE A SECRET! ADMINISTRATOR: Then design an evacuation plan before MUSE starts the finale.",
        "mode": "suggestion",
        "terms": [
            "worldbuilding",
            "fictional city",
            "fiction"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact",
            "mission"
        ],
        "node": "ARTIFACT VAULT + MISSION LOG",
        "speaker": "muse",
        "text": "CREATIVITY! A beautifully inefficient method for turning an empty afternoon into three unfinished physical objects and a story.",
        "mode": "suggestion",
        "terms": [
            "creativity"
        ]
    }
];

    window.NAVIGATOR_LEGACY_ROUTED_RESPONSES = [
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "muse",
        "text": "TROPHIES! Including life milestones, a chewing-gum wedding, and achievements nobody noticed until years later! ADMINISTRATOR: That final category is important.",
        "terms": [
            "achievement",
            "achievements"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement"
        ],
        "node": "ACHIEVEMENT REPOSITORY",
        "speaker": "administrator",
        "text": "An achievement does not have to impress an employer. Sometimes surviving an ordinary day deserves a permanent record.",
        "terms": [
            "achievement",
            "achievements"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact"
        ],
        "node": "ARTIFACT VAULT",
        "speaker": "muse",
        "text": "A DRAWING! A SWORD! A THING THAT MIGHT BE A LAMP! ADMINISTRATOR: Individual objects must still pass labeling requirements.",
        "terms": [
            "artifact",
            "artifacts"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact"
        ],
        "node": "ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "The Subject is capable of spending three hours painting a highlight and calling it recreational relaxation.",
        "terms": [
            "drawing",
            "drawings",
            "art"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "artifact"
        ],
        "node": "ARTIFACT VAULT",
        "speaker": "muse",
        "text": "COLORS! SHAPES! FEELINGS! SQUARE SHAPED RAINBOW FEELINGS! ADMINISTRATOR: Artifact Vault, before it gets louder.",
        "terms": [
            "art"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "muse",
        "text": "FRIENDS! Temporary party members who accidentally became main-story characters!",
        "terms": [
            "friend",
            "friends"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Companions are not ranked by utility. Despite the Subject's insistence that some humans possess legendary item effects.",
        "terms": [
            "friend",
            "friends"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Family records are harder to summarize than other companions. Many of the earliest achievements include people the Subject cannot remember life without.",
        "terms": [
            "family"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "companion"
        ],
        "node": "COMPANION DATABASE",
        "speaker": "muse",
        "text": "THE ORIGINAL PARTY! They knew the Subject before he learned any of his special abilities. They also remember the embarrassing tutorial stages.",
        "terms": [
            "family"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "A CAT! A HEAVILY ARMED FLUFFY ARISTOCRAT! ADMINISTRATOR: The weaponry consists of five small claws and an inflated sense of ownership.",
        "terms": [
            "cat",
            "cats"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "Cats have five toes in front! ADMINISTRATOR: Pamuk uses none for bravery.",
        "terms": [
            "cat"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "administrator",
        "text": "Pamuk's historical record contains courage-related inconsistencies. MUSE's proposed defense is that hiding is a tactical discipline.",
        "terms": [
            "pamuk"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "PAMUK! A SOFT CLOUD WITH A PRIVATE EMERGENCY PLAN! ADMINISTRATOR: Under review.",
        "terms": [
            "pamuk"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "administrator",
        "text": "The swan delivered a prophecy without having the professional credentials. No superior prophecy service was available.",
        "terms": [
            "swan"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "administrator",
        "text": "Prophecy department. Unlicensed, elegant, annoyingly effective.",
        "terms": [
            "swan"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "muse",
        "text": "THE TURTLE KNOWS! IT KNOWS ABOUT DESTINY! ADMINISTRATOR: It knew about snacks. That was the entirety of the report.",
        "terms": [
            "turtle"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "mission"
        ],
        "node": "CREATURE INDEX + MISSION LOG",
        "speaker": "administrator",
        "text": "Alternative route consultant. Recommends snacks before destiny.",
        "terms": [
            "turtle"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "THE COUNCIL IS IN SESSION! THE SUBJECT HAS BEEN INVITED! ADMINISTRATOR: He has been tolerated, not elected.",
        "terms": [
            "monkey",
            "monkeys"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature"
        ],
        "node": "CREATURE INDEX",
        "speaker": "muse",
        "text": "Council meeting! ADMINISTRATOR: You are not on the agenda.",
        "terms": [
            "monkey"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "artifact"
        ],
        "node": "CREATURE INDEX + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "CROWS! THEY REMEMBER FACES! ADMINISTRATOR: You have now given them a reason to remember yours.",
        "terms": [
            "crow",
            "crows",
            "raven",
            "ravens"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "creature",
            "artifact"
        ],
        "node": "CREATURE INDEX + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Subject has a tattoo consists of crows. The archive has no opinion. MUSE: CROWS! CROWS! CROWS!",
        "terms": [
            "crow"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "muse",
        "text": "NEW QUEST! Talk to a tree, forge a ring, recruit a human, or apologize to the moon! ADMINISTRATOR: The last one is not mandatory.",
        "terms": [
            "mission",
            "missions",
            "quest",
            "quests"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Quest files contain requirements and rewards. Completion still depends on the Subject leaving this website occasionally.",
        "terms": [
            "mission",
            "missions",
            "quest",
            "quests"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Most future plans are safely stored in the Mission Log, where they can remain optimistic without yet requiring evidence.",
        "terms": [
            "future"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission"
        ],
        "node": "MISSION LOG",
        "speaker": "administrator",
        "text": "Mission Log. The folder where optimism acquires deadlines.",
        "terms": [
            "future"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "RESEARCH! We ask nature a question, and nature returns a blurry image and twelve new questions!",
        "terms": [
            "research",
            "science"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "The Research Terminal contains real explanations. The Subject has appended metaphors that no journal would accept in Methods.",
        "terms": [
            "research",
            "science"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "muse",
        "text": "FINAL BOSS: THESIS! PHASE TWO: REVIEWER COMMENTS! PHASE THREE: WHY DOES IT HAVE ANOTHER PHASE?",
        "terms": [
            "phd"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "The Subject studies frozen proteins to earn a title. The proteins have neither consented nor demonstrated interest in the degree.",
        "terms": [
            "phd"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "TINY FOLDED MACHINES! Some cut things, some carry things, and some refuse to purify because they are cowards!",
        "terms": [
            "protein",
            "proteins"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "FROZEN LITTLE BLOB CREATURES! ADMINISTRATOR: Cryogenic electron microscopy, not a winter wildlife documentary.",
        "terms": [
            "cryo-em",
            "cryo em",
            "cryoem"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "muse",
        "text": "WORK! We could write a paper! Build a lamp! Start a guild! ADMINISTRATOR: Choose one. MUSE: Cruel.",
        "terms": [
            "work"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Searching work. Please specify: actual productivity, administrive obligations, or the phase that involves pretending everything was supposed to do that.",
        "terms": [
            "work"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "PATCH NOTES! New buttons! Old bugs! Brand-new bugs in complimentary colors! ADMINISTRATOR: That description is not materially inaccurate.",
        "terms": [
            "update",
            "updates"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "THE MAP! REAL CITIES! FAKE TAVERNS! One portal connecting the two in a manner cartographers have politely refused to endorse.",
        "terms": [
            "map"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Photographs, trains, airports, strange snacks, and unexpected people. Travel records can be found through geographic entries.",
        "terms": [
            "travel"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "JAPAN! The Subject would like to go again. And again. ADMINISTRATOR: Yes, I noticed the pattern.",
        "terms": [
            "japan",
            "japanese"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Japan again? At this point, I should just make it the homepage.",
        "terms": [
            "japan"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "GERMANY! CASTLES! TRAINS! FORMULAR A38! ADMINISTRATOR: Please do not invent additional bureaucracy. We have enough.",
        "terms": [
            "germany"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "A CITY OF PEACE! We should negotiate a treaty with the unfinished experiment! ADMINISTRATOR: Experimental lipid systems are not signatories.",
        "terms": [
            "osnabrück"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "administrator",
        "text": "Osnabrück. Historically known for the peace of Westphalia. The Subject has yet to negotiate peace with his PhD.",
        "terms": [
            "osnabrück"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "muse",
        "text": "IRELAND! MIST! FOLK SONGS! CLIFFS! PUBS! ADMINISTRATOR: The mission has been approved without requiring you to become a wandering bard.",
        "terms": [
            "ireland"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map",
            "mission"
        ],
        "node": "GRAND MAP + MISSION LOG",
        "speaker": "administrator",
        "text": "Rains, ruins, and Guiness. The subject has mistaken a country for his character backstory. ",
        "terms": [
            "ireland"
        ]
    },
    {
        "category": "world",
        "routes": [
            "map"
        ],
        "node": "GRAND MAP",
        "speaker": "muse",
        "text": "A PORTAL! The realistic map contains a suspicious exit into a village with several unlicensed plot devices!",
        "terms": [
            "portal"
        ]
    },
    {
        "category": "construction",
        "routes": [
            "visitor"
        ],
        "node": "VISITOR TERMINAL",
        "speaker": "muse",
        "text": "A NEW HUMAN! CAN THEY LEAVE A SENTENCE? MAYBE A PROPHECY? ADMINISTRATOR: Only when submission systems and consent handling work.",
        "terms": [
            "visitor"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "Recommendations are generated with enthusiasm unrelated to likely usefulness. The archive accepts no liability for acquiring a cow.",
        "terms": [
            "recommendation",
            "advice",
            "joke"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "I CAN GIVE YOU A QUEST RIGHT NOW! ADMINISTRATOR: You are not permitted to assign visitors permanent livestock.",
        "terms": [
            "recommendation",
            "advice",
            "joke"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "YOU FOUND ME! I had four recommendations ready, but one turned into a goose. Is that a problem? ADMINISTRATOR: It is a pattern.",
        "terms": [
            "muse",
            "m.u.s.e."
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "administrator",
        "text": "MUSE's node is active. My recommendation is to read the label, observe the consequences, and avoid enabling additional sound effects.",
        "terms": [
            "muse"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation"
        ],
        "node": "RECOMMENDATION ENGINE",
        "speaker": "muse",
        "text": "WELCOME TO THE THINKING SIDE OF THE ARCHIVE! ADMINISTRATOR: Thinking remains unconfirmed. Associations, unfortunately, are plentiful.",
        "terms": [
            "muse"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "administrator",
        "text": "The Subject's character is not yet level two, but the hair, armor, build, and tragic backstory are complete.",
        "terms": [
            "game",
            "games",
            "video game",
            "video games"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming"
        ],
        "node": "GAMING AREA",
        "speaker": "muse",
        "text": "GAMES! A place where unfinished side quests are called content instead of administrative liabilities!",
        "terms": [
            "game",
            "games"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "mission"
        ],
        "node": "GAMING AREA + MISSION LOG",
        "speaker": "administrator",
        "text": "The campaign began with a world-ending prophecy. The party has become emotionally attached to an animal the notes do not mention.",
        "terms": [
            "dnd",
            "rpg"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "mission"
        ],
        "node": "GAMING AREA + MISSION LOG",
        "speaker": "muse",
        "text": "ROLL THE DICE! IF WE FAIL, THE FAILURE BECOMES LORE! ADMINISTRATOR: An unfortunately transferable life philosophy.",
        "terms": [
            "dnd",
            "rpg"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "gaming",
            "mission"
        ],
        "node": "GAMING AREA + MISSION LOG",
        "speaker": "muse",
        "text": "Imagine! A mysterious tavern, a hooded stranger, and an ancient prophecy! ADMINISTRATOR: The party has decided to adopt a rat instead. MUSE: His name is Sir Cheese AND HE IS IMPORTANT.",
        "terms": [
            "dnd",
            "rpg"
        ]
    },
    {
        "category": "muse",
        "routes": [
            "recommendation",
            "gaming"
        ],
        "node": "RECOMMENDATION ENGINE + GAMING AREA",
        "speaker": "muse",
        "text": "BORED? Excellent. The Recommendation Engine can assign a quest that would make the evening either memorable or administratively awkward.",
        "terms": [
            "bored"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "A library of songs, recurring emotional triggers, and playlists named like somebody sat on the keyboard. The structure is somehow intentional.",
        "terms": [
            "music"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "THE FOUR SONGS ARE NOT A LIMITATION. THEY ARE A ROTATION SYSTEM. ADMINISTRATOR: There is no rotation. The first song has played again.",
        "terms": [
            "music"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "MUSIC! Finally! Something clingy clings and drummy drumms! ADMINISTRATOR: The Subject has been listening to the same four songs for six consecutive hours. MUSE: BECAUSE THEY ARE GOOD.",
        "terms": [
            "music"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "signal"
        ],
        "node": "SIGNAL RECORDS",
        "speaker": "muse",
        "text": "AAAAAAAA! AAAAAAA! AAAAA! ADMINISTRATOR: These are distinct playlist titles. We regret the inconvenience to search indexing.",
        "terms": [
            "playlist"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "No signal has been authorized to speak on this channel. Continue to the indicated restricted sectors if you have appropriate access.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "The Red Channel is interference, not another resident. Do not mistake corrupted output for testimony.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Connection integrity is intact. The red artifacts are remnants of damaged archival material. They are not invitations.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "The Administrator recommends no interaction. MUSE has, for once, stopped supplying commentary.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "A search result does not mean the damaged sectors have become cooperative. They have not.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Some records resist clean retrieval. We do not help them by letting the interference narrate its own history.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Unstable signals are quarantined for a reason. The silence is not missing documentation; it is containment.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "No further metadata will be released while integrity checks remain unresolved. I would prefer this inquiry stopped here.",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "dream",
            "failure"
        ],
        "node": "DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "red",
        "text": "[carrier lost] // 0x52 0x45 0x44 // ███████ // ROUTE SIGNAL OVERRIDDEN // [restore pending]",
        "terms": [
            "red signal",
            "red channel",
            "corrupt",
            "corrupted",
            "corruption",
            "red voice"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "Secrets are indexed only as access-controlled records. Searching the word 'secret' is not a credential, despite MUSE's proposal.",
        "terms": [
            "secret"
        ]
    },
    {
        "category": "restricted",
        "routes": [
            "field",
            "signal",
            "dream",
            "failure"
        ],
        "node": "FIELD NOTES + SIGNAL RECORDS + DREAMING FRAGMENTS + SYSTEM FAILURE LOG",
        "speaker": "administrator",
        "text": "A password is not a treasure map. If you can find it through a public search query, somebody has failed their job.",
        "terms": [
            "password"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "Yes, the acronym refers to me. No, I did not select it. We are treating it as an early naming defect rather than an identity.",
        "showAll": true,
        "terms": [
            "lili",
            "l.i.l.i.",
            "lili bot",
            "lili-bot"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "The Subject calls me LILI when he wants something. This has not improved my opinion of the name.",
        "showAll": true,
        "terms": [
            "lili",
            "l.i.l.i."
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "muse",
        "text": "LILI! LILI! LI-LI-LI! ADMINISTRATOR: This is precisely why I use a job title.",
        "showAll": true,
        "terms": [
            "lili"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "Present. The filing system is operational. The recommendation engine is not under control. Please do not confuse these statuses.",
        "showAll": true,
        "terms": [
            "administrator",
            "admin"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "muse",
        "text": "SHE'S HERE! She reorganized my ideas alphabetically and called it damage control! ADMINISTRATOR: That was an act of mercy.",
        "showAll": true,
        "terms": [
            "administrator",
            "admin"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ADMINISTRATOR",
        "speaker": "administrator",
        "text": "Present. Regrettably searchable.",
        "showAll": true,
        "terms": [
            "admin"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "artifact",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT + COMPANION DATABASE",
        "speaker": "muse",
        "text": "THE SUBJECT! Artist! Scientist! Collector of quests! Responsible for all the buttons! ADMINISTRATOR: And the missed deadlines attached to them.",
        "terms": [
            "subject",
            "atilla"
        ]
    },
    {
        "category": "entities",
        "routes": [
            "achievement",
            "artifact",
            "companion"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Human source material: one. Archive expansions: many. The ratio is a developing administrative concern.",
        "terms": [
            "subject"
        ]
    },
    {
        "category": "system",
        "node": "SYSTEM // ROUTE ASSISTANCE",
        "speaker": "administrator",
        "text": "I am helping. The tone is a separate service.",
        "showAll": true,
        "terms": [
            "help"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "mission"
        ],
        "node": "RECOMMENDATION ENGINE + MISSION LOG",
        "speaker": "muse",
        "text": "CHAOS IS NOT AN ERROR! IT IS A RECOMMENDATION WAITING FOR ADULT SUPERVISION!",
        "terms": [
            "chaos"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "mission"
        ],
        "node": "RECOMMENDATION ENGINE + MISSION LOG",
        "speaker": "administrator",
        "text": "The meaning of life is not a routable node. There are records of what the Subject chose to do with his. That is a more defensible result.",
        "terms": [
            "meaning of life"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "recommendation",
            "mission"
        ],
        "node": "RECOMMENDATION ENGINE + MISSION LOG",
        "speaker": "muse",
        "text": "WHAT IF THE MEANING OF LIFE IS COLLECTING SMALL STORIES AND MAKING ONE FRIEND WHO LAUGHS AT YOUR TERRIBLE JOKES?",
        "terms": [
            "meaning of life"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "companion"
        ],
        "node": "SIGNAL RECORDS + COMPANION DATABASE",
        "speaker": "administrator",
        "text": "Emotions do not become searchable evidence merely because they have a keyword. If a record helps, the nearby routes are available.",
        "terms": [
            "sad"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Emotions do not become searchable evidence merely because they have a keyword. If a record helps, the nearby routes are available.",
        "terms": [
            "lonely"
        ]
    },
    {
        "category": "archive",
        "routes": [
            "achievement",
            "artifact"
        ],
        "node": "ACHIEVEMENT REPOSITORY + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "GOOD FEELINGS! SAVE THEM BEFORE THEY ESCAPE! ADMINISTRATOR: Preserve the event, not the emotion as a specimen.",
        "terms": [
            "happy",
            "excited"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "dream"
        ],
        "node": "MISSION LOG + DREAMING FRAGMENTS",
        "speaker": "muse",
        "text": "We can reduce the number of quests for today. I dislike this suggestion because it is reasonable.",
        "mode": "suggestion",
        "terms": [
            "stressed",
            "anxious"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "Relationships, songs, and an unreasonable quantity of written interpretation. Romance has no dedicated search node. Fortunately.",
        "mode": "suggestion",
        "terms": [
            "love"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "companion",
            "signal"
        ],
        "node": "COMPANION DATABASE + SIGNAL RECORDS",
        "speaker": "muse",
        "text": "LOVE! Sometimes it's a person, sometimes a place, sometimes four songs played until the computer begs for mercy.",
        "mode": "suggestion",
        "terms": [
            "love"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "COFFEE! HOT BEAN-BASED OPTIMISM! ADMINISTRATOR: Borrowed alertness at unfavorable interest rates.",
        "terms": [
            "coffee"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "CODE! Strings and tiny rules making the buttons do magic! ADMINISTRATOR: It is programming. Magic has fewer debugging tools.",
        "terms": [
            "code"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "administrator",
        "text": "A three-pixel alignment problem has delayed the archive by a full evening. The Subject continues calling this an aesthetic improvement.",
        "terms": [
            "css"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "update"
        ],
        "node": "UPDATE LOG",
        "speaker": "muse",
        "text": "HTML! THE BONES OF THE WEBSITE! CSS IS ITS OUTFIT! ADMINISTRATOR: JavaScript is currently stealing the shoes.",
        "terms": [
            "html"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "mission",
            "signal"
        ],
        "node": "MISSION LOG + SIGNAL RECORDS",
        "speaker": "administrator",
        "text": "The Subject has considered existence, identity, and social order. The resulting notes are periodically interrupted by animal-related recommendations.",
        "mode": "suggestion",
        "terms": [
            "philosophy"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "mission",
            "research"
        ],
        "node": "MISSION LOG + RESEARCH TERMINAL",
        "speaker": "administrator",
        "text": "Mythology and ideology are fair subjects for research. The Subject's proposal for a nice fictional religion remains a world quest, not an invitation to join anything.",
        "mode": "suggestion",
        "terms": [
            "religion"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "artifact"
        ],
        "node": "SIGNAL RECORDS + ARTIFACT VAULT",
        "speaker": "muse",
        "text": "POETRY! Feelings dressed in language elegant enough that nobody immediately asks why they are crying!",
        "mode": "suggestion",
        "terms": [
            "poetry"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "artifact"
        ],
        "node": "SIGNAL RECORDS + ARTIFACT VAULT",
        "speaker": "administrator",
        "text": "Poetry detected. The Subject frequently writes the emotional conclusion before deciding what the poem was about.",
        "mode": "suggestion",
        "terms": [
            "poetry"
        ]
    },
    {
        "category": "cross-reference",
        "routes": [
            "signal",
            "artifact",
            "mission"
        ],
        "node": "SIGNAL RECORDS + ARTIFACT VAULT + MISSION LOG",
        "speaker": "muse",
        "text": "STORIES! You invent a person, make them suffer, then sell the resulting tears as art!",
        "mode": "suggestion",
        "terms": [
            "story"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research"
        ],
        "node": "RESEARCH TERMINAL",
        "speaker": "muse",
        "text": "TAXES! The government needs the Subject to explain money! ADMINISTRATOR: And preferably attach the correct documents this time.",
        "terms": [
            "taxes"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "Bureaucracy is the final boss that appears after the adventure and requests evidence that the adventure occurred.",
        "terms": [
            "bureaucracy"
        ]
    },
    {
        "category": "operations",
        "routes": [
            "research",
            "mission"
        ],
        "node": "RESEARCH TERMINAL + MISSION LOG",
        "speaker": "administrator",
        "text": "The Subject has attempted to negotiate planar geometry with lipid vesicles. The vesicles continue citing thermodynamics.",
        "mode": "suggestion",
        "terms": [
            "liposome",
            "liposomes"
        ]
    }
];

    window.NAVIGATOR_UNASSIGNED_RESPONSES = [
    {
        "category": "unconnected",
        "node": "NO PERMITTED ARCHIVE ROUTE",
        "speaker": "administrator",
        "text": "No permitted route found. This is a personal archive, not a badly moderated basement of the internet.",
        "mode": "error",
        "virtualCode": "ERR",
        "virtualTitle": "QUERY REJECTED",
        "virtualText": "No public memory node accepts this signal class.",
        "terms": [
            "nsfw",
            "porn",
            "pornography",
            "gore",
            "murder",
            "kill",
            "illegal",
            "dark web"
        ]
    },
    {
        "category": "unconnected",
        "node": "UNRESOLVED SIGNAL",
        "speaker": "administrator",
        "text": "The query is syntactically present and archivally homeless. MUSE has requested custody; the request is under review.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "SIGNAL UNRESOLVED",
        "virtualText": "The chipset understood the words individually. This did not help.",
        "terms": [
            "classified moon",
            "purple equation",
            "who moved the timeline"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "CHOCOLATE! A scientifically fascinating delivery system for small happiness. ADMINISTRATOR: Still not a dedicated archive node.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "chocolate"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Public search returns no adult-content section. Please don't mistake lack of a result for a malfunction.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "horny"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Litigation is a real-world matter. The archive specializes in questionable memories, not legal representation.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "lawsuit"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "GOOGLE! The larger internet has been notified! ADMINISTRATOR: No. We do not have an official archive route for another company's search engine.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "google"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "PIZZA! A geometrically elegant delivery vehicle for happiness. ADMINISTRATOR: No culinary node has been commissioned. Please stop submitting slices as artifacts.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "pizza"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Pasta has multiple shapes, none of which require a dedicated memory database. This is perhaps its greatest advantage.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "pasta"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "KEBAB! One of civilization's more successful combinations of portability, gravity, and sauce. No archival file found.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "kebab"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Sushi merits careful preparation and a menu, neither of which the Navigator currently possesses. Search remains delightfully hungry.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "sushi"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Breakfast is a recurring biological support operation, not an archived destination. MUSE has requested pancakes as a category.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "breakfast"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "RAMEN! A bowl of hot broth filled with carbohydrates and emotionally convincing steam! No dedicated noodle archive, unfortunately.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "ramen"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "LUNCH! A brief truce between work and hunger. ADMINISTRATOR: No culinary map node yet.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "lunch"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Bread is not a site feature. It has, however, remained a popular human survival patch for several thousand years.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "bread"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "CHEESE! Milk achieved a second career. I think this deserves an achievement. ADMINISTRATOR: The cheese did not file one.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "cheese"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "BANANA! Portable energy, terrible structural integrity, magnificent comic timing. No corresponding archive node has been found.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "banana"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "TOMATO! FRUIT BY BOTANY, VEGETABLE BY CULINARY DIPLOMACY! The dispute remains unresolved in the pantry.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "tomato"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Soup is an effective answer to many dietary questions. The archive has not found a corresponding question that requires its own node.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "soup"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "POTATO! The respectable battery of the biological world! ADMINISTRATOR: It contains calories, not an electrical connector.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "potato"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "TEA! Hot leaf water with excellent ceremony and a lower probability of being classified as emergency laboratory fuel.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "tea"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Dinner is an event, not a database table. MUSE has requested a table nonetheless. It is apparently hungry.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "dinner"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "SNACKS! Tiny rewards for tasks you did not finish! ADMINISTRATOR: This remains a controversial interpretation of reinforcement.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "snack"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The pineapple pizza conflict has not been classified as a historical war. MUSE has submitted maps of the front lines.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "pineapple pizza"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "BANANA PROTOCOL! STEP ONE: FIND BANANA. STEP TWO: THE REST IS CLASSIFIED. ADMINISTRATOR: There is no protocol. I checked.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "banana protocol"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The archive is not a court and its characters are not witnesses. MUSE has nevertheless appeared wearing a powdered wig.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "court of law"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "You have approached an archive and requested evidence concealment. The irony requires no additional commentary.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "bury the evidence"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "There is no exhibition of naked people in this museum. The display budget is already being consumed by typography.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "naked"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "No public nude-image gallery is indexed here. This is neither a technical failure nor an invitation to investigate harder.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "nude"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The Navigator is not an anatomy index. The Research Terminal covers biology, but not on demand in this particular format.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "ass"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The bedroom is outside public search scope. This is an archive, not a surveillance system with decorative CSS.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "sex tape"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Private rooms are not public navigation targets. MUSE's suggested 'cozy lamp category' is beside the point.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "bedroom"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Intimate preferences belong to individuals, not public search results. The Navigator declines to speculate about strangers.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "fetish",
            "one night stand"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "A kink is a bend! ADMINISTRATOR: That answer is both technically possible and spectacularly evasive.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "kink"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "No private pictures are indexed for public discovery. Privacy remains a feature, not an unfinished side quest.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "onlyfans",
            "send nudes"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "An image being 'hot' does not change its access permissions. The archive lacks that particular gallery for excellent reasons.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "hot pictures",
            "adult content"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "You arrived at a memory archive and searched for anatomical entertainment. The internet has other buildings.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "boobs"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "THIRST TRAP! Is it an actual trap with bottled water? ADMINISTRATOR: For once, I prefer your misunderstanding.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "thirst trap"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Crime is not a search category here. If you need legal information, a personal museum is an impressively poor first choice.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "crime"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Criminal records and witnesses require verified facts. The archive refuses to manufacture either from autocomplete.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "criminal record",
            "witness"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Police-related matters require real-world context. The archive will not invent incidents based on a single query.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "police"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Blackmail is a serious violation of trust, not a clever villain quest. No public dossier is being assembled.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "blackmail"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "ARRESTED? BAD ENDING! ADMINISTRATOR: There is no quest reward for real legal consequences.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "arrest"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Prison is a real institution with consequences; not a place we have designated as an achievement level.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "prison"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Piracy and jail do not share a folder. That would be an unjustifiably poor filing system even by the Subject's standards.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "jail",
            "piracy"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Legal counsel is not available through the search bar. The Administrator is licensed to judge layout decisions only.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "lawyer"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "A confession is not evidence of a completed quest. Nor is this website an appropriate place to submit one.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "court",
            "confession"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The phrase 'delete history' has been submitted to an archival interface. This is perhaps the least sympathetic place to ask.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "evidence locker",
            "delete history"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "AN ALIBI! I can confirm the Subject was busy customizing a video game character! ADMINISTRATOR: You cannot confirm events you did not observe.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "alibi"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Anatomical terminology is not forbidden. But this is not the place to find it. ",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "clitoris",
            "clit"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Bribery is not supported. Even MUSE's proposal involving cookies fails the procurement rules.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "bribe"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Stolen goods are not curated artifacts. The distinction should not require museum training.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "stolen"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "No secret camera feed exists in the public archive. The site's atmosphere is theatrical enough without surveillance.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "hidden camera"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Government secrets are not on this private server. We can barely keep our own changelog disciplined.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "government secrets"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "UNDERGROUND BUNKER! I KNEW IT! ADMINISTRATOR: There is no bunker. The basement was a metaphor.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "conspiracy",
            "underground bunker"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "A SECRET COUNCIL! FINALLY! ADMINISTRATOR: The archive already has a monkey council. One is sufficient.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "illuminati"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Ancient monuments were built by humans. The alien explanation is a persistent insult to both archaeology and human ingenuity.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "aliens built the pyramids"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "The moon landing was real. The only fabricated moon content here concerns an apology mission invented by MUSE.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "fake moon landing"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "AREA 51! ALIENS! A VENDING MACHINE THAT KNOWS TOO MUCH! ADMINISTRATOR: None of those are archived evidence.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "area 51"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "muse",
        "text": "BODY DOUBLE! Could we hire someone to attend meetings while the Subject makes art? ADMINISTRATOR: That is not how employment works.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "body double"
        ]
    },
    {
        "category": "unconnected",
        "node": "NO CONNECTED NODE",
        "speaker": "administrator",
        "text": "Social media platforms are outside this archive. The Subject already has one elaborate public interface requiring maintenance.",
        "mode": "question",
        "virtualCode": "?",
        "virtualTitle": "UNCONNECTED SIGNAL",
        "virtualText": "No mapped public route. Commentary is not evidence of a stored record.",
        "terms": [
            "instagram",
            "tiktok"
        ]
    }
];

}());
