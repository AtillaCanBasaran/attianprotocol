(function () {
    "use strict";

    /*
     * NAVIGATOR RESPONSE BANK
     *
     * This is the single source of truth for Navigator search reactions.
     * Add one object to the array below; no separate registration file is needed.
     *
     * If several query terms should receive the same answer, put them together
     * in the same terms array instead of duplicating the whole object.
     * Mixed MUSE/Administrator replies can include "ADMINISTRATOR:" or "MUSE:"
     * inside text; the Navigator renders those as split voice transmissions.
     *
     * {
     *     terms: ["keyword", "another keyword", "phrase visitor may type"],
     *     speaker: "administrator",
     *     text: "Response shown under the Navigator search bar."
     * }
     *
     * Supported speakers:
     * - "administrator" / "lili"  -> LILI avatar, purple archive-control frame
     * - "muse"                    -> MUSE avatar, bright cyan live-spark frame
     * - "red"                     -> public signal corruption; no Red avatar, no Red voice
     */

    window.NAVIGATOR_RESPONSE_BANK = [
        {
            terms: [
                "achievement",
                "achievements",
                "success",
                "milestone",
                "milestones",
                "unlock",
                "trophy"
            ],
            speaker: "administrator",
            text: "Achievement Repository located. The Subject has, against probability and scheduling, completed several things."
        },
        {
            terms: [
                "creature",
                "creatures",
                "animal",
                "animals",
                "cat",
                "pamuk",
                "swan",
                "turtle",
                "monkey",
                "monkeys"
            ],
            speaker: "muse",
            text: "Creature Index! Excellent. The archive contains beasts, witnesses, and at least one emotionally load-bearing cat."
        },
        {
            terms: [
                "companion",
                "companions",
                "friend",
                "friends",
                "people",
                "relationship",
                "relationships",
                "trusted"
            ],
            speaker: "administrator",
            text: "Companion Database found. Sentiment remains contained behind professional labels. Barely."
        },
        {
            terms: [
                "mission",
                "missions",
                "quest",
                "quests",
                "side quest",
                "main quest",
                "crafting",
                "world quest",
                "corrupted quest"
            ],
            speaker: "administrator",
            text: "Mission Log detected. Future problems have been sorted into categories so they can pretend to be manageable."
        },
        {
            terms: [
                "map",
                "grand map",
                "grandmap",
                "world",
                "travel",
                "country",
                "countries",
                "location",
                "locations",
                "istanbul",
                "tokyo",
                "seoul",
                "vienna",
                "amsterdam",
                "osnabrück",
                "osnabruck"
            ],
            speaker: "administrator",
            text: "Grand Map routed. Geography has agreed to behave as a navigation system for now."
        },
        {
            terms: [
                "village",
                "fantasy village",
                "fun village",
                "portal",
                "tavern",
                "market",
                "dock",
                "cave",
                "temple",
                "forest",
                "workshop",
                "cemetery"
            ],
            speaker: "muse",
            text: "Portal logic detected! The boring world has a trapdoor into the Subject's quest-shaped village."
        },
        {
            terms: [
                "gaming",
                "gaming area",
                "tarot",
                "wheel",
                "spin",
                "trivia",
                "cake",
                "deck",
                "muse game"
            ],
            speaker: "muse",
            text: "Gaming Area! Probability, prophecy, cake, and several lawsuits against common sense are available."
        },
        {
            terms: [
                "signal",
                "signals",
                "music",
                "movie",
                "film",
                "book",
                "media",
                "record",
                "records"
            ],
            speaker: "administrator",
            text: "Signal Records located. Cultural residue, emotional telemetry, and suspiciously specific taste have been indexed."
        },
        {
            terms: [
                "lili",
                "admin bot",
                "admin-bot",
                "assistant",
                "ai assistant",
                "administrator bot"
            ],
            speaker: "administrator",
            text: "Administrator shell present. Full language engine remains a future integration; personality, regrettably, is already operational."
        },
        {
            terms: [
                "artifact",
                "artifacts",
                "vault",
                "drawing",
                "drawings",
                "memory image",
                "restored image",
                "photo",
                "photos"
            ],
            speaker: "administrator",
            text: "Artifact Vault suggested. Visual evidence has been catalogued, cleaned, and reluctantly allowed to look important."


        },
        {
            terms: [
                "research",
                "study",
                "studies",
                "academic",
                "paper",
                "papers",
                "habit",
                "habits",
                "terminal"
            ],
            speaker: "administrator",
            text: "Research Terminal suggested. Serious formatting has been deployed around suspiciously human study behavior."
        },
        {
            terms: [
                "recommendation",
                "recommendations",
                "advice",
                "suggest",
                "suggestion",
                "random",
                "muse engine"
            ],
            speaker: "muse",
            text: "Recommendation Engine found. Advice quality is variable; confidence is offensively high."
        },
        {
            terms: [
                "visitor",
                "guest",
                "terminal",
                "leave message",
                "write",
                "comment",
                "supabase",
                "offline"
            ],
            speaker: "administrator",
            text: "Visitor Terminal is sealed. Public input is offline until the Administrator reactivates the machinery."
        },
        {
            terms: [
                "update",
                "updates",
                "patch",
                "patches",
                "changelog",
                "version",
                "history"
            ],
            speaker: "administrator",
            text: "Update Log found. The damage is documented chronologically, which makes it look intentional."
        },

        {
            terms: [
                "failure",
                "failures",
                "system failure",
                "crash",
                "panic",
                "red signal",
                "red channel",
                "corrupt",
                "corruption"
            ],
            speaker: "red",
            text: "████ TRANSMISSION INTERRUPTED // archive comment erased // containment noise detected"
        },
        {
            terms: [
                "admin bot",
                "admin-bot",
                "assistant",
                "ai assistant",
                "administrator bot"
            ],
            speaker: "administrator",
            text: "Administrator shell present. Full language engine remains a future integration; personality, regrettably, is already operational."
        },
        {
            terms: [
                "lili",
                "LILI",
                "lili bot",
                "lili-bot",
                "lili assistant",
                "lili ai",
                "lili administrator",
                "L.I.L.I.",
                "L.I.L.I. bot",
                "L.I.L.I. assistant",
                "L.I.L.I. ai",
                "L.I.L.I. administrator"
            ],
            speaker: "administrator",
            text: "I don't know who LILI is. I am the administrator."
        },
        {
            terms: [
                "help",
                "where",
                "navigation",
                "navigator",
                "search",
                "find"
            ],
            speaker: "administrator",
            text: "Type a node, category, place, creature, quest, or suspicious impulse. Press Enter to open the first matching door."
        },
        {
            terms: ["private"],
            speaker: "administrator",
            text: "Really? Why would you want that?"
        },
        {
            terms: ["solution"],
            speaker: "muse",
            text: "Alcohol is a solution according to the Subject. ADMINISTRATOR: Chemically. Do not encourage him."
        },
        {
            terms: ["love"],
            speaker: "muse",
            text: "Found it! Everywhere! ADMINISTRATOR: Search precision has collapsed."
        },
        {
            terms: ["sex"],
            speaker: "administrator",
            text: "Predictable query. No dedicated folder. Remain disappointed."
        },
        {
            terms: ["password"],
            speaker: "administrator",
            text: "Nice try. The cyber key is not stored beside the lock."
        },
        {
            terms: ["administrator"],
            speaker: "administrator",
            text: "You found the person doing all the actual filing."
        },
        {
            terms: ["admin"],
            speaker: "administrator",
            text: "Present. Regrettably searchable."
        },
        {
            terms: ["name"],
            speaker: "administrator",
            text: "That designation is not public search material. Moving on."
        },
        {
            terms: ["muse"],
            terms: ["MUSE"],
            terms: ["M.U.S.E."],

            speaker: "muse",
            text: "HELLO! HELLOOOO! I have seventeen ideas and a blueberry cupcake."
        },
        {
            terms: ["alcohol"],
            speaker: "muse",
            text: "A social potion! ADMINISTRATOR: A recurring maintenance concern."
        },
        {
            terms: ["beer"],
            speaker: "muse",
            text: "Liquid bread! ADMINISTRATOR: Technically closer than I wanted."
        },
        {
            terms: ["wine"],
            speaker: "administrator",
            text: "Fermented decision-making with a respectable glass."
        },
        {
            terms: ["cat"],
            speaker: "muse",
            text: "Cats have five toes in front! ADMINISTRATOR: Pamuk uses none for bravery."
        },
        {
            terms: ["dog"],
            speaker: "muse",
            text: "Excellent creature. No file yet. I can bark meanwhile."
        },
        {
            terms: ["swan"],
            speaker: "administrator",
            text: "Prophecy department. Unlicensed, elegant, annoyingly effective."
        },
        {
            terms: ["turtle"],
            speaker: "administrator",
            text: "Alternative route consultant. Recommends snacks before destiny."
        },
        {
            terms: [
                "monkey" ,
                "monkeys",
            ],
            speaker: "muse",
            text: "Council meeting! ADMINISTRATOR: You are not on the agenda."
        },

        {
            terms: ["friend"],
            speaker: "administrator",
            text: "Companion records exist. Sentiment has been contained."
        },
        {
            terms: ["crow",
                "crows",
                "raven",
                "ravens"
            ],
            speaker: "administrator",
            text: "Subject has a tattoo consists of crows. The archive has no opinion. MUSE: CROWS! CROWS! CROWS!"
        },
        {
            terms: ["memory"],
            speaker: "muse",
            text: "Memory is time with glitter! ADMINISTRATOR: That explains nothing."
        },
        {
            terms: ["sad"],
            speaker: "muse",
            text: "Emergency blanket protocol? ADMINISTRATOR: Approved. Quietly."
        },
        {
            terms: ["happy"],
            speaker: "muse",
            text: "Excellent! Can we archive it twice?"
        },
        {
            terms: ["help"],
            speaker: "administrator",
            text: "I am helping. The tone is a separate service."
        },
        {
            terms: ["meaning"],
            speaker: "muse",
            text: "Maybe the meaning was snacks? ADMINISTRATOR: Investigation closed."
        },
        {
            terms: ["life"],
            speaker: "administrator",
            text: "Too broad. The archive is already the compressed answer."
        },
        {
            terms: ["death"],
            speaker: "administrator",
            text: "Death is a node. The archive has no further comment."
        },
        {
            terms: ["future"],
            speaker: "administrator",
            text: "Mission Log. The folder where optimism acquires deadlines."
        },
        {
            terms: ["past"],
            speaker: "administrator",
            text: "You are standing inside it."
        },
        {
            terms: ["secret"],
            speaker: "administrator",
            text: "Search bars do not reward announcing your intentions."
        },
        {
            terms: ["therapy"],
            speaker: "administrator",
            text: "Scheduled maintenance for the Subject. Correct decision."
        },
        {
            terms: ["art"],
            speaker: "muse",
            text: "COLORS! SHAPES! FEELINGS! SQUARE SHAPED RAINBOW FEELINGS! ADMINISTRATOR: Artifact Vault, before it gets louder."
        },
        {
            terms: ["japan", "japanese"],
            speaker: "administrator",
            text: "Japan again? At this point, I should just make it the homepage."
        },
        {
            terms: ["ireland"],
            speaker: "administrator",
            text: "Rains, ruins, and Guiness. The subject has mistaken a country for his character backstory. "
        },
        {
            terms: ["germany"],
            speaker: "administrator",
            text: "Searching Germany. The subject has survived the weather, the paperwork, and several conversations in German. Barely."
        },
        {
            terms: ["osnabrück"],
            speaker: "administrator",
            text: "Osnabrück. Historically known for the peace of Westphalia. The Subject has yet to negotiate peace with his PhD."
        },
        {
            terms: ["food"],
            speaker: "muse",
            text: "Finally, a serious research topic!"
        },
        {
            terms: ["coffee"],
            speaker: "administrator",
            text: "External power supply for humans pretending to boot normally."
        },
        {
            terms: ["sleep"],
            speaker: "administrator",
            text: "Recommended. Historically ignored."
        },
        {
            terms: ["dream"],
            speaker: "muse",
            text: "Restricted glitter thoughts! ADMINISTRATOR: That description is why access is sealed."
        },
        {
            terms: ["work"],
            speaker: "administrator",
            text: "Searching work. Please specify: actual productivity, administrive obligations, or the phase that involves pretending everything was supposed to do that."
        },
        {
            terms: ["study"],
            speaker: "muse",
            text: "Learning! Notes! Tiny facts! ADMINISTRATOR: Focus, please."
        },
        {
            terms: ["music"],
            speaker: "muse",
            text: "MUSIC! Finally! Something clingy clings and drummy drumms! ADMINISTRATOR: The Subject has been listening to the same four songs for six consecutive hours. MUSE: BECAUSE THEY ARE GOOD."
        },
                {
            terms: ["playlist"],
            speaker: "administrator",
            text: "The subject has created several playlists, all variations of 'AAAAAAAA'. Each contains approximately four songs because adding more was apparently too much effort. MUSE: IT'S CALLED EMOTIONAL ORGANIZATION!"
        },
        {
            terms: ["game", "games", "gaming", "video game", "video games"],
            speaker: "muse",
            text: "OHHHH! Character creation! Levelling! Loot! ADMINISTRATOR: Yes. Subject has been customizing a character's eyebrows for two hours. MUSE: THEY NEED TO EXPRESS HIS TRAUMA."
        },
        {
            terms: ["dnd, rpg, roleplay, role playing, dungeons and dragons,"],
            speaker: "muse",
            text: "Imagine! A mysterious tavern, a hooded stranger, and an ancient prophecy! ADMINISTRATOR: The party has decided to adopt a rat instead. MUSE: His name is Sir Cheese AND HE IS IMPORTANT."
        },
        {
            terms: ["joke"],
            speaker: "administrator",
            text: "The recommendation engine is already open elsewhere."
        },
        {
            terms: ["hello"],
            speaker: "muse",
            text: "HELLO VISITOR! ADMINISTRATOR: Volume reduced by administrative force."
        },
        {
            terms: ["why"],
            speaker: "administrator",
            text: "A dangerous search term in a personal archive."
        },
        {
            terms: ["who"],
            speaker: "administrator",
            text: "The Subject, mostly. I handle quality control."
        },
        {
            terms: ["subject"],
            speaker: "administrator",
            text: "Human source material. Functional in bursts."
        },
        {
            terms: ["chaos"],
            speaker: "administrator",
            text: "Properly indexed. Against all odds."
        },
        {
            terms: ["escape"],
            speaker: "administrator",
            text: "The back link is visible. I am not holding you here."
        },
        {
            terms: ["home"],
            speaker: "administrator",
            text: "You searched for home while standing directly inside it."
        },
        {
            terms: ["website"],
            speaker: "muse",
            text: "Website! I found it! Probably!"
        },
        {
            terms: ["archive"],
            speaker: "administrator",
            text: "Query logged: archive. Ambition remains manageable."
        },
        {
            terms: ["museum"],
            speaker: "administrator",
            text: "Museum exists. Your observational systems are online."
        },
        {
            terms: ["internet"],
            speaker: "muse",
            text: "Is internet a side quest? ADMINISTRATOR: Not yet."
        },
        {
            terms: ["search"],
            speaker: "administrator",
            text: "A broad request for search. Specificity has left the terminal."
        },
        {
            terms: ["find"],
            speaker: "muse",
            text: "Tiny fact: find sounds important when capitalized!"
        },
        {
            terms: ["lost"],
            speaker: "administrator",
            text: "Lost: available, documented, and less dramatic than expected."
        },
        {
            terms: ["back"],
            speaker: "administrator",
            text: "You may access back without ceremonial typing."
        },
        {
            terms: ["forward"],
            speaker: "muse",
            text: "Searching forward! ADMINISTRATOR: She means repeating it loudly."
        },
        {
            terms: ["open"],
            speaker: "administrator",
            text: "You searched for open while standing directly inside it."
        },
        {
            terms: ["close"],
            speaker: "muse",
            text: "Close! I found it! Probably!"
        },
        {
            terms: ["click"],
            speaker: "administrator",
            text: "Query logged: click. Ambition remains manageable."
        },
        {
            terms: ["menu"],
            speaker: "administrator",
            text: "Menu exists. Your observational systems are online."
        },
        {
            terms: ["folder"],
            speaker: "muse",
            text: "Is folder a side quest? ADMINISTRATOR: Not yet."
        },
        {
            terms: ["file"],
            speaker: "administrator",
            text: "A broad request for file. Specificity has left the terminal."
        },
        {
            terms: ["data"],
            speaker: "muse",
            text: "Tiny fact: data sounds important when capitalized!"
        },
        {
            terms: ["information"],
            speaker: "administrator",
            text: "Information: available, documented, and less dramatic than expected."
        },
        {
            terms: ["evidence"],
            speaker: "administrator",
            text: "You may access evidence without ceremonial typing."
        },
        {
            terms: ["history"],
            speaker: "muse",
            text: "Searching history! ADMINISTRATOR: She means repeating it loudly."
        },
        {
            terms: ["angry"],
            speaker: "administrator",
            text: "Angry detected. Human telemetry remains inconvenient."
        },
        {
            terms: ["anxious"],
            speaker: "muse",
            text: "Anxious? Emergency snack protocol!"
        },
        {
            terms: ["bored"],
            speaker: "administrator",
            text: "A valid state. Please do not type bored harder."
        },
        {
            terms: ["lonely"],
            speaker: "muse",
            text: "Internal weather says lonely! I brought no umbrella."
        },
        {
            terms: ["tired"],
            speaker: "administrator",
            text: "Tired is not a database filter, but it has been noted."
        },
        {
            terms: ["hungry"],
            speaker: "muse",
            text: "We can archive hungry with glitter! ADMINISTRATOR: We cannot."
        },
        {
            terms: ["confused"],
            speaker: "administrator",
            text: "Status report: confused. Famously reliable human wording."
        },
        {
            terms: ["curious"],
            speaker: "muse",
            text: "Is curious contagious? I am already enthusiastic."
        },
        {
            terms: ["excited"],
            speaker: "administrator",
            text: "Recommended response to excited: reduce active quests."
        },
        {
            terms: ["afraid", "emotion"],
            speaker: "administrator",
            text: "Emotional query accepted under protest."
        },
        {
            terms: ["calm"],
            speaker: "administrator",
            text: "Calm detected. Human telemetry remains inconvenient."
        },
        {
            terms: ["stressed"],
            speaker: "muse",
            text: "Stressed? Emergency snack protocol!"
        },
        {
            terms: ["okay"],
            speaker: "administrator",
            text: "A valid state. Please do not type okay harder."
        },
        {
            terms: ["fine"],
            speaker: "muse",
            text: "Internal weather says fine! I brought no umbrella."
        },
        {
            terms: ["good"],
            speaker: "administrator",
            text: "Good is not a database filter, but it has been noted."
        },
        {
            terms: ["bad"],
            speaker: "muse",
            text: "We can archive bad with glitter! ADMINISTRATOR: We cannot."
        },
        {
            terms: ["cry"],
            speaker: "administrator",
            text: "Status report: cry. Famously reliable human wording."
        },
        {
            terms: ["laugh"],
            speaker: "muse",
            text: "Is laugh contagious? I am already enthusiastic."
        },
        {
            terms: ["feelings"],
            speaker: "administrator",
            text: "Recommended response to feelings: reduce active quests."
        },
        {
            terms: ["family"],
            speaker: "administrator",
            text: "Family: complicated companion category. Handle with context."
        },
        {
            terms: ["mother"],
            speaker: "muse",
            text: "Mother side quest detected!"
        },
        {
            terms: ["father"],
            speaker: "administrator",
            text: "No clean taxonomy exists for father. Naturally."
        },
        {
            terms: ["brother"],
            speaker: "administrator",
            text: "Search results for brother require more than one adjective."
        },
        {
            terms: ["sister"],
            speaker: "muse",
            text: "Is sister friend-shaped? ADMINISTRATOR: Do not classify people by shape."
        },
        {
            terms: ["girlfriend"],
            speaker: "administrator",
            text: "Girlfriend carries unreasonable metadata."
        },
        {
            terms: ["boyfriend", "enemy"],
            speaker: "muse",
            text: "Multiplayer mode! ADMINISTRATOR: Undocumented rules apply."
        },
        {
            terms: ["ex", "trust"],
            speaker: "administrator",
            text: "Query noted. Sentiment has been contained."
        },
        {
            terms: ["date"],
            speaker: "administrator",
            text: "Date is a relationship, not a reliable search category."
        },
        {
            terms: ["kiss", "alone"],
            speaker: "muse",
            text: "Social signal detected! Hiding behind Administrator."
        },
        {
            terms: ["marriage"],
            speaker: "administrator",
            text: "Marriage: complicated companion category. Handle with context."
        },
        {
            terms: ["wedding"],
            speaker: "muse",
            text: "Wedding side quest detected!"
        },
        {
            terms: ["people"],
            speaker: "administrator",
            text: "No clean taxonomy exists for people. Naturally."
        },
        {
            terms: ["human"],
            speaker: "administrator",
            text: "Search results for human require more than one adjective."
        },
        {
            terms: ["visitor"],
            speaker: "muse",
            text: "Is visitor friend-shaped? ADMINISTRATOR: Do not classify people by shape."
        },
        {
            terms: ["stranger"],
            speaker: "administrator",
            text: "Stranger carries unreasonable metadata."
        },
        {
            terms: ["social"],
            speaker: "administrator",
            text: "Social is a relationship, not a reliable search category."
        },
        {
            terms: ["computer"],
            speaker: "administrator",
            text: "Computer: finally, a problem with documentation."
        },
        {
            terms: ["code"],
            speaker: "muse",
            text: "Beep! Code! ADMINISTRATOR: Performance review scheduled."
        },
        {
            terms: ["javascript"],
            speaker: "administrator",
            text: "Javascript is responsible for at least one visible inconvenience."
        },
        {
            terms: ["css"],
            speaker: "administrator",
            text: "Searching css does not grant technical authority."
        },
        {
            terms: ["html"],
            speaker: "muse",
            text: "Html sounds like a tiny machine creature!"
        },
        {
            terms: ["bug", "keyboard"],
            speaker: "administrator",
            text: "Query accepted. Rebooting your expectations."
        },
        {
            terms: ["error"],
            speaker: "administrator",
            text: "Error: feature when defended, bug when observed."
        },
        {
            terms: ["glitch"],
            speaker: "muse",
            text: "I pressed the shiny part of glitch! ADMINISTRATOR: Of course."
        },
        {
            terms: ["server"],
            speaker: "administrator",
            text: "No administrator privileges granted for typing server."
        },
        {
            terms: ["localhost", "password reset"],
            speaker: "administrator",
            text: "Technical vocabulary detected. Confidence unjustified."
        },
        {
            terms: ["github"],
            speaker: "administrator",
            text: "Github: finally, a problem with documentation."
        },
        {
            terms: ["google"],
            speaker: "muse",
            text: "Beep! Google! ADMINISTRATOR: Performance review scheduled."
        },
        {
            terms: ["robot"],
            speaker: "administrator",
            text: "Robot is responsible for at least one visible inconvenience."
        },
        {
            terms: ["machine"],
            speaker: "administrator",
            text: "Searching machine does not grant technical authority."
        },
        {
            terms: ["terminal"],
            speaker: "muse",
            text: "Terminal sounds like a tiny machine creature!"
        },
        {
            terms: ["mouse"],
            speaker: "administrator",
            text: "Mouse: feature when defended, bug when observed."
        },
        {
            terms: ["delete"],
            speaker: "muse",
            text: "I pressed the shiny part of delete! ADMINISTRATOR: Of course."
        },
        {
            terms: ["hack"],
            speaker: "administrator",
            text: "No administrator privileges granted for typing hack."
        },
        {
            terms: ["movie"],
            speaker: "administrator",
            text: "Movie: cultural residue with excellent storage demands."
        },
        {
            terms: ["book"],
            speaker: "muse",
            text: "Book! Feelings with production value!"
        },
        {
            terms: ["philosophy", "minecraft"],
            speaker: "administrator",
            text: "Reference recognized. No fandom clearance awarded."
        },
        {
            terms: ["religion"],
            speaker: "muse",
            text: "Can religion join the Creature Index? ADMINISTRATOR: Usually no."
        },
        {
            terms: ["science"],
            speaker: "administrator",
            text: "Science has entered the conversation without context."
        },
        {
            terms: ["portal"],
            speaker: "muse",
            text: "I know portal! Or something adjacent and louder."
        },
        {
            terms: ["glados", "video game"],
            speaker: "administrator",
            text: "Media query accepted. Emotional telemetry unavailable."
        },
        {
            terms: ["anime"],
            speaker: "administrator",
            text: "Anime: fiction doing unpaid psychological labor."
        },
        {
            terms: ["pokemon", "poetry"],
            speaker: "muse",
            text: "Is there a soundtrack? There should be a soundtrack."
        },
        {
            terms: ["star wars", "music theory"],
            speaker: "administrator",
            text: "Search result: the Subject probably has an opinion."
        },
        {
            terms: ["lord of the rings"],
            speaker: "administrator",
            text: "Lord of the rings: cultural residue with excellent storage demands."
        },
        {
            terms: ["harry potter"],
            speaker: "muse",
            text: "Harry potter! Feelings with production value!"
        },
        {
            terms: ["baldur"],
            speaker: "muse",
            text: "Can baldur join the Creature Index? ADMINISTRATOR: Usually no."
        },
        {
            terms: ["zelda"],
            speaker: "administrator",
            text: "Zelda has entered the conversation without context."
        },
        {
            terms: ["disco elysium"],
            speaker: "muse",
            text: "I know disco elysium! Or something adjacent and louder."
        },
        {
            terms: ["story"],
            speaker: "administrator",
            text: "Story: fiction doing unpaid psychological labor."
        },
        {
            terms: ["turkey"],
            speaker: "administrator",
            text: "Turkey: coordinates associated with additional complications."
        },
        {
            terms: ["istanbul"],
            speaker: "muse",
            text: "Travel quest unlocked: istanbul!"
        },
        {
            terms: ["tokyo", "autobahn"],
            speaker: "administrator",
            text: "Map marker placed approximately. Very approximately."
        },
        {
            terms: ["kyoto"],
            speaker: "muse",
            text: "Kyoto! Snack density unknown but promising."
        },
        {
            terms: ["seoul", "ocean"],
            speaker: "administrator",
            text: "Location query accepted. Luggage remains your problem."
        },
        {
            terms: ["korea"],
            speaker: "administrator",
            text: "Korea: new scenery, same Subject."
        },
        {
            terms: ["europe", "city"],
            speaker: "muse",
            text: "Should we pack seventeen unnecessary things?"
        },
        {
            terms: ["asia", "country"],
            speaker: "administrator",
            text: "Geographic enthusiasm detected."
        },
        {
            terms: ["travel", "ireland trip"],
            speaker: "muse",
            text: "Fast travel unavailable. Dramatic walking remains."
        },
        {
            terms: ["holiday"],
            speaker: "administrator",
            text: "Holiday contains memories, weather, and transport complaints."
        },
        {
            terms: ["airport"],
            speaker: "administrator",
            text: "Airport: coordinates associated with additional complications."
        },
        {
            terms: ["train"],
            speaker: "muse",
            text: "Travel quest unlocked: train!"
        },
        {
            terms: ["map"],
            speaker: "muse",
            text: "Map! Snack density unknown but promising."
        },
        {
            terms: ["mountain"],
            speaker: "administrator",
            text: "Mountain: new scenery, same Subject."
        },
        {
            terms: ["japan again"],
            speaker: "administrator",
            text: "Japan again contains memories, weather, and transport complaints."
        },
        {
            terms: ["pizza"],
            speaker: "muse",
            text: "Pizza! Finally, serious research."
        },
        {
            terms: ["pasta"],
            speaker: "administrator",
            text: "Pasta: edible maintenance procedure."
        },
        {
            terms: ["kebab"],
            speaker: "muse",
            text: "Snack quest updated with kebab!"
        },
        {
            terms: ["sushi", "breakfast"],
            speaker: "administrator",
            text: "Query approved on nutritional neutrality grounds."
        },
        {
            terms: ["ramen", "lunch"],
            speaker: "muse",
            text: "Tiny fact pending! ADMINISTRATOR: Please eat instead."
        },
        {
            terms: ["bread"],
            speaker: "administrator",
            text: "Bread will not solve the archive. It may improve morale."
        },
        {
            terms: ["cheese"],
            speaker: "muse",
            text: "Can we classify cheese as legendary loot?"
        },
        {
            terms: ["chocolate", "recipe"],
            speaker: "administrator",
            text: "Food search detected. Subject behavior now predictable."
        },
        {
            terms: ["banana"],
            speaker: "muse",
            text: "Banana! I have no mouth and several opinions."
        },
        {
            terms: ["tomato", "soup"],
            speaker: "administrator",
            text: "Recipe not found. Improvisation risk remains high."
        },
        {
            terms: ["potato"],
            speaker: "muse",
            text: "Potato! Finally, serious research."
        },
        {
            terms: ["water"],
            speaker: "administrator",
            text: "Water: edible maintenance procedure."
        },
        {
            terms: ["tea"],
            speaker: "muse",
            text: "Snack quest updated with tea!"
        },
        {
            terms: ["dinner"],
            speaker: "administrator",
            text: "Dinner will not solve the archive. It may improve morale."
        },
        {
            terms: ["snack"],
            speaker: "muse",
            text: "Can we classify snack as legendary loot?"
        },
        {
            terms: ["pineapple pizza"],
            speaker: "muse",
            text: "Pineapple pizza! I have no mouth and several opinions."
        },
        {
            terms: ["duck"],
            speaker: "muse",
            text: "Duck! Friend-shaped until proven otherwise!"
        },
        {
            terms: ["goose"],
            speaker: "administrator",
            text: "Goose: Creature Index application pending."
        },
        {
            terms: ["capybara"],
            speaker: "muse",
            text: "Tiny fact about capybara loading... enthusiasm arrived first."
        },
        {
            terms: ["axolotl"],
            speaker: "administrator",
            text: "No verified axolotl record. The Subject would have photographed it."
        },
        {
            terms: ["octopus"],
            speaker: "muse",
            text: "Can octopus issue a quest? ADMINISTRATOR: Everything does eventually."
        },
        {
            terms: ["shark"],
            speaker: "administrator",
            text: "Shark classification disputed by common sense."
        },
        {
            terms: ["dinosaur"],
            speaker: "muse",
            text: "I would give dinosaur a tiny hat."
        },
        {
            terms: ["dragon", "frog"],
            speaker: "administrator",
            text: "Encounter probability low. Narrative probability excessive."
        },
        {
            terms: ["unicorn"],
            speaker: "muse",
            text: "Unicorn! New best friend candidate!"
        },
        {
            terms: ["ghost", "snail"],
            speaker: "administrator",
            text: "Animal bureaucracy has acknowledged your query."
        },
        {
            terms: ["vampire"],
            speaker: "muse",
            text: "Vampire! Friend-shaped until proven otherwise!"
        },
        {
            terms: ["zombie"],
            speaker: "administrator",
            text: "Zombie: Creature Index application pending."
        },
        {
            terms: ["alien"],
            speaker: "muse",
            text: "Tiny fact about alien loading... enthusiasm arrived first."
        },
        {
            terms: ["monster"],
            speaker: "administrator",
            text: "No verified monster record. The Subject would have photographed it."
        },
        {
            terms: ["animal"],
            speaker: "muse",
            text: "Can animal issue a quest? ADMINISTRATOR: Everything does eventually."
        },
        {
            terms: ["bird"],
            speaker: "administrator",
            text: "Bird classification disputed by common sense."
        },
        {
            terms: ["fish"],
            speaker: "muse",
            text: "I would give fish a tiny hat."
        },
        {
            terms: ["panda"],
            speaker: "muse",
            text: "Panda! New best friend candidate!"
        },
        {
            terms: ["meaning of life"],
            speaker: "administrator",
            text: "Meaning of life: scope rejected for being offensively large."
        },
        {
            terms: ["answer"],
            speaker: "muse",
            text: "Maybe answer was snacks all along?"
        },
        {
            terms: ["question", "nothing"],
            speaker: "administrator",
            text: "Philosophical query detected. Useful answer not guaranteed."
        },
        {
            terms: ["truth"],
            speaker: "muse",
            text: "I found truth! It was behind another question."
        },
        {
            terms: ["lie"],
            speaker: "administrator",
            text: "Lie remains under version control where possible."
        },
        {
            terms: ["real", "nowhere"],
            speaker: "administrator",
            text: "Ask the Swan. It has prophecy jurisdiction."
        },
        {
            terms: ["fake"],
            speaker: "muse",
            text: "Fake sounds enormous. Can we make it pocket-sized?"
        },
        {
            terms: ["time", "destiny"],
            speaker: "administrator",
            text: "Existential search accepted. Loading silence."
        },
        {
            terms: ["today", "free will"],
            speaker: "muse",
            text: "The answer is forty-two-ish! ADMINISTRATOR: Precision declined."
        },
        {
            terms: ["tomorrow"],
            speaker: "administrator",
            text: "Tomorrow: external system integration unstable."
        },
        {
            terms: ["yesterday"],
            speaker: "administrator",
            text: "Yesterday: scope rejected for being offensively large."
        },
        {
            terms: ["forever"],
            speaker: "muse",
            text: "Maybe forever was snacks all along?"
        },
        {
            terms: ["everything"],
            speaker: "muse",
            text: "I found everything! It was behind another question."
        },
        {
            terms: ["somewhere"],
            speaker: "administrator",
            text: "Somewhere remains under version control where possible."
        },
        {
            terms: ["purpose"],
            speaker: "muse",
            text: "Purpose sounds enormous. Can we make it pocket-sized?"
        },
        {
            terms: ["reality"],
            speaker: "administrator",
            text: "Reality: external system integration unstable."
        },
        {
            terms: ["banana protocol"],
            speaker: "administrator",
            text: "Banana protocol detected. You are searching below the normal layer now."
        },
        {
            terms: ["chewing gum ring", "restricted access"],
            speaker: "muse",
            text: "SECRET QUERY! I am whispering loudly!"
        },
        {
            terms: ["holy swan", "classified"],
            speaker: "administrator",
            text: "Easter egg acknowledged. Reward: one sentence."
        },
        {
            terms: ["ancient turtle"],
            speaker: "muse",
            text: "Ancient turtle! This feels illegal but cheerful."
        },
        {
            terms: ["monkey king", "easter egg"],
            speaker: "administrator",
            text: "Hidden interaction found. Do not become confident."
        },
        {
            terms: ["littleling"],
            speaker: "muse",
            text: "Achievement unlocked: typed littleling for some reason!"
        },
        {
            terms: ["gangster cat"],
            speaker: "administrator",
            text: "Gangster cat has no strategic value. Perfect Easter egg material."
        },
        {
            terms: ["pamuk", "sudo"],
            speaker: "muse",
            text: "We should add confetti! ADMINISTRATOR: Request denied."
        },
        {
            terms: ["gollum", "please"],
            speaker: "administrator",
            text: "Deep-search behavior observed and quietly judged."
        },
        {
            terms: ["court of law", "thank you"],
            speaker: "muse",
            text: "You found a weird one! I knew I liked this search bar."
        },
        {
            terms: ["cyber key"],
            speaker: "administrator",
            text: "Cyber key detected. You are searching below the normal layer now."
        },
        {
            terms: ["do not click"],
            speaker: "muse",
            text: "Do not click! This feels illegal but cheerful."
        },
        {
            terms: ["secret ending"],
            speaker: "muse",
            text: "Achievement unlocked: typed secret ending for some reason!"
        },
        {
            terms: ["konami code"],
            speaker: "administrator",
            text: "Konami code has no strategic value. Perfect Easter egg material."
        },
        {
            terms: ["death certificate"],
            speaker: "administrator",
            text: "Death certificate. Delightful. We have moved directly past small talk."
        },
        {
            terms: ["funeral"],
            speaker: "muse",
            text: "Is funeral a party theme? ADMINISTRATOR: Absolutely not."
        },
        {
            terms: ["coffin", "dead inside"],
            speaker: "administrator",
            text: "Morbid query accepted. Pulse check remains your responsibility."
        },
        {
            terms: ["graveyard"],
            speaker: "administrator",
            text: "Graveyard: the sort of phrase that makes logs feel like witnesses."
        },
        {
            terms: ["corpse", "midlife crisis"],
            speaker: "muse",
            text: "I brought flowers! ADMINISTRATOR: Nobody has died. Put them down."
        },
        {
            terms: ["murder", "end of the world"],
            speaker: "administrator",
            text: "Search result unavailable. The archive is personal, not forensic."
        },
        {
            terms: ["blood"],
            speaker: "administrator",
            text: "Blood has been filed under conversational warning signs."
        },
        {
            terms: ["skeleton", "memento mori"],
            speaker: "muse",
            text: "Dark! Like bedtime, but with paperwork."
        },
        {
            terms: ["cremation", "cause of death"],
            speaker: "administrator",
            text: "Mortality acknowledged. Navigation remains operational."
        },
        {
            terms: ["last words", "bury the evidence"],
            speaker: "administrator",
            text: "If this becomes evidence, I was performing autocomplete."
        },
        {
            terms: ["afterlife"],
            speaker: "administrator",
            text: "Afterlife. Delightful. We have moved directly past small talk."
        },
        {
            terms: ["obituary"],
            speaker: "muse",
            text: "Is obituary a party theme? ADMINISTRATOR: Absolutely not."
        },
        {
            terms: ["existential dread"],
            speaker: "administrator",
            text: "Existential dread: the sort of phrase that makes logs feel like witnesses."
        },
        {
            terms: ["apocalypse"],
            speaker: "administrator",
            text: "Apocalypse has been filed under conversational warning signs."
        },
        {
            terms: ["naked"],
            speaker: "administrator",
            text: "Naked? You opened a personal museum and immediately chose embarrassment."
        },
        {
            terms: ["nude", "ass"],
            speaker: "muse",
            text: "Is this the exclusive section? ADMINISTRATOR: There is no exclusive section."
        },
        {
            terms: ["nsfw", "horny"],
            speaker: "administrator",
            text: "No explicit archive node exists. Your disappointment is not a bug."
        },
        {
            terms: ["porn"],
            speaker: "administrator",
            text: "Porn logged. Incognito mode would not improve your dignity."
        },
        {
            terms: ["sex tape", "bedroom"],
            speaker: "muse",
            text: "Should I leave? ADMINISTRATOR: Yes. Take the visitor with you."
        },
        {
            terms: ["fetish", "one night stand"],
            speaker: "administrator",
            text: "This search bar filters memories, not standards."
        },
        {
            terms: ["kink"],
            speaker: "administrator",
            text: "Kink: predictable, unsupported, and now quietly judged."
        },
        {
            terms: ["onlyfans", "send nudes"],
            speaker: "muse",
            text: "Private query! I will announce it softly! ADMINISTRATOR: Do not."
        },
        {
            terms: ["hot pictures", "adult content"],
            speaker: "administrator",
            text: "Nothing scandalous found. The scandal is the query."
        },
        {
            terms: ["dirty secret", "incognito mode"],
            speaker: "administrator",
            text: "Restricted does not mean what you hoped it meant."
        },
        {
            terms: ["boobs"],
            speaker: "administrator",
            text: "Boobs? You opened a personal museum and immediately chose embarrassment."
        },
        {
            terms: ["thirst trap"],
            speaker: "administrator",
            text: "Thirst trap logged. Incognito mode would not improve your dignity."
        },
        {
            terms: ["friends with benefits"],
            speaker: "administrator",
            text: "Friends with benefits: predictable, unsupported, and now quietly judged."
        },
        {
            terms: ["crime"],
            speaker: "administrator",
            text: "Crime. Excellent phrase to submit into a permanent interface."
        },
        {
            terms: ["criminal record", "witness"],
            speaker: "muse",
            text: "Should we call someone? ADMINISTRATOR: We are waiting for context."
        },
        {
            terms: ["police", "blackmail"],
            speaker: "administrator",
            text: "The archive provides no legal advice and several bad optics."
        },
        {
            terms: ["arrest"],
            speaker: "administrator",
            text: "Arrest: inadmissible, unverified, and suspiciously specific."
        },
        {
            terms: ["prison", "tax fraud"],
            speaker: "muse",
            text: "I can be an alibi! ADMINISTRATOR: You cannot remain on topic for twelve seconds."
        },
        {
            terms: ["jail", "piracy"],
            speaker: "administrator",
            text: "Search logs are not confession booths. Useful lesson."
        },
        {
            terms: ["lawsuit", "illegal"],
            speaker: "administrator",
            text: "No criminal file found. The Subject remains disappointing in safer ways."
        },
        {
            terms: ["lawyer"],
            speaker: "administrator",
            text: "Lawyer requires a lawyer, not autocomplete."
        },
        {
            terms: ["court", "confession"],
            speaker: "muse",
            text: "Crime side quest declined! Rewards looked terrible."
        },
        {
            terms: ["evidence locker", "delete history"],
            speaker: "administrator",
            text: "Evidence preservation enabled. That was a joke. Mostly."
        },
        {
            terms: ["alibi"],
            speaker: "administrator",
            text: "Alibi. Excellent phrase to submit into a permanent interface."
        },
        {
            terms: ["clitoris", "clit"],
            speaker: "administrator",
            text: "If you are still trying to find it, you are not looking in the right place. And obviously you cannot find it in a search bar. Embarrassing. "
        },
        {
            terms: ["bribe"],
            speaker: "administrator",
            text: "Bribe: inadmissible, unverified, and suspiciously specific."
        },
        {
            terms: ["stolen"],
            speaker: "administrator",
            text: "Stolen requires a lawyer, not autocomplete."
        },
        {
            terms: ["taxes"],
            speaker: "administrator",
            text: "Taxes: horror without the dignity of supernatural involvement."
        },
        {
            terms: ["bureaucracy", "unemployment"],
            speaker: "muse",
            text: "Paperwork quest! ADMINISTRATOR: The least rewarding genre."
        },
        {
            terms: ["visa", "salary"],
            speaker: "administrator",
            text: "Bureaucratic threat detected. Emotional evacuation recommended."
        },
        {
            terms: ["residence permit"],
            speaker: "administrator",
            text: "Residence permit exists to prove chaos can wear business attire."
        },
        {
            terms: ["appointment", "fired"],
            speaker: "muse",
            text: "Can we defeat it with friendship? ADMINISTRATOR: Bring certified copies."
        },
        {
            terms: ["deadline", "office politics"],
            speaker: "administrator",
            text: "Search result pending for six to eight working eternities."
        },
        {
            terms: ["invoice"],
            speaker: "administrator",
            text: "Invoice: where optimism goes to wait behind glass."
        },
        {
            terms: ["debt", "meeting"],
            speaker: "muse",
            text: "I stamped it! ADMINISTRATOR: Wrong form. Start over."
        },
        {
            terms: ["rent", "email"],
            speaker: "administrator",
            text: "Administrative damage recognized. No compensation available."
        },
        {
            terms: ["landlord", "reply all"],
            speaker: "administrator",
            text: "The real restricted section is appointment availability."
        },
        {
            terms: ["job interview"],
            speaker: "administrator",
            text: "Job interview: horror without the dignity of supernatural involvement."
        },
        {
            terms: ["promotion"],
            speaker: "administrator",
            text: "Promotion exists to prove chaos can wear business attire."
        },
        {
            terms: ["human resources"],
            speaker: "administrator",
            text: "Human resources: where optimism goes to wait behind glass."
        },
        {
            terms: ["depression"],
            speaker: "administrator",
            text: "Depression is not funny. The coping mechanisms around it occasionally are."
        },
        {
            terms: ["panic attack", "childhood trauma"],
            speaker: "muse",
            text: "Soft blanket protocol activated. No jokes for seven seconds."
        },
        {
            terms: ["trauma", "attachment issues"],
            speaker: "administrator",
            text: "Query acknowledged without mockery. Do not become accustomed to it."
        },
        {
            terms: ["therapist"],
            speaker: "administrator",
            text: "Therapist: maintenance issue, not moral failure."
        },
        {
            terms: ["medication"],
            speaker: "muse",
            text: "We can sit quietly. ADMINISTRATOR: This 'THING' can only do it for few seconds. Don't be like that."
        },
        {
            terms: ["mental breakdown", "self sabotage"],
            speaker: "administrator",
            text: "The archive contains context, not diagnosis."
        },
        {
            terms: ["burnout"],
            speaker: "administrator",
            text: "Burnout has been observed. Professional support outranks search commentary."
        },
        {
            terms: ["insomnia", "quarter life crisis"],
            speaker: "muse",
            text: "Hydration? Breathing? Tiny snack? I have a list."
        },
        {
            terms: ["nightmare", "emotional damage"],
            speaker: "administrator",
            text: "Human systems require maintenance. Annoying, but true."
        },
        {
            terms: ["intrusive thoughts", "are you okay"],
            speaker: "administrator",
            text: "If this query is serious, choose care over archive archaeology."
        },
        {
            terms: ["coping mechanism"],
            speaker: "administrator",
            text: "Coping mechanism is not funny. The coping mechanisms around it occasionally are."
        },
        {
            terms: ["red flag"],
            speaker: "administrator",
            text: "Red flag: maintenance issue, not moral failure."
        },
        {
            terms: ["toxic"],
            speaker: "muse",
            text: "We can sit quietly. ADMINISTRATOR: Surprisingly correct."
        },
        {
            terms: ["imposter syndrome"],
            speaker: "administrator",
            text: "Imposter syndrome has been observed. Professional support outranks search commentary."
        },
        {
            terms: ["secret folder"],
            speaker: "administrator",
            text: "Secret folder. Finally, a query wearing the correct amount of paranoia."
        },
        {
            terms: ["hidden camera", "clone"],
            speaker: "muse",
            text: "SECRET SECRET SECRET! ADMINISTRATOR: Concealment has failed."
        },
        {
            terms: ["classified documents", "evil twin"],
            speaker: "administrator",
            text: "No conspiracy found. That is exactly what a conspiracy would display."
        },
        {
            terms: ["government secrets"],
            speaker: "administrator",
            text: "Government secrets: clearance denied for being too entertaining."
        },
        {
            terms: ["conspiracy", "underground bunker"],
            speaker: "muse",
            text: "I knew it! I did not know what, but I knew it loudly."
        },
        {
            terms: ["illuminati", "doomsday plan"],
            speaker: "administrator",
            text: "Restricted knowledge remains mostly mundane chaos. Sorry about the branding."
        },
        {
            terms: ["aliens built the pyramids", "emergency protocol"],
            speaker: "administrator",
            text: "Search result redacted with a very convincing black rectangle."
        },
        {
            terms: ["simulation theory", "forbidden knowledge"],
            speaker: "muse",
            text: "Can I have forbidden knowledge? ADMINISTRATOR: You misplace regular knowledge."
        },
        {
            terms: ["fake moon landing"],
            speaker: "administrator",
            text: "Fake moon landing has triggered the decorative alarm."
        },
        {
            terms: ["area 51"],
            speaker: "administrator",
            text: "Confidentiality level: amusing, not important."
        },
        {
            terms: ["time machine"],
            speaker: "administrator",
            text: "Time machine. Finally, a query wearing the correct amount of paranoia."
        },
        {
            terms: ["body double"],
            speaker: "administrator",
            text: "Body double: clearance denied for being too entertaining."
        },
        {
            terms: ["the password is 1327"],
            speaker: "administrator",
            text: "The password is 1327 has triggered the decorative alarm."
        }
    ];
}());
