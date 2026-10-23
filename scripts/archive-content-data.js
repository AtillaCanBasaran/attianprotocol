(function () {
    window.ATTIAN_ARCHIVE_CONTENT = {
        /*
         * Manual content layer for generated archive pages.
         *
         * Add future Artifact Vault entries under `artifacts`.
         * Add future Creature Index entries under `creatures`.
         *
         * Image files are listed below so generated pages do not need to probe
         * dozens of missing filenames before rendering.
         *
         * Add future entries to the relevant list:
         * - artifactItems: "memory5", "drawing2", "mini4"
         * - creatureItems: 7
         *
         * Image filename patterns:
         * - Artifact restored image: /images/artifactvault/memory5.png
         * - Artifact optional source: /images/artifactvault/memory5_original.jpeg
         * - Creature restored image: /images/creatureindex/creature7.png
         * - Creature optional source: /images/creatureindex/creature7_original.jpeg
         *
         * The key must match the image family:
         * - memory5 metadata key: "memory5"
         * - drawing2 metadata key: "drawing2"
         * - mini4 metadata key: "mini4"
         * - creature7 metadata key: 7
         */
        artifactItems: ["drawing1", "memory1", "memory2", "memory3", "memory4", "mini1", "mini2", "mini3", "mini4", "mini5", "memory5", "mini6", "memory6", "memory7", "memory8", "memory9", "mini7"],
        creatureItems: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        artifacts: {
            "mini4": {
                code: "ART-GIFT-0001",
                title: "Pocket Frog for a Frog Person",
                short: "tiny amphibian / colleague gift protocol",
                category: "Gifted Miniatures",
                collection: "Colleague Offerings",
                status: "Gifted",
                type: "Miniature frog",
                timestamp: "Date unindexed",
                integrity: "Small. Green. Correctly reassigned.",
                archive: "A miniature frog made for a colleague who likes frogs. No prophecy, hidden bargain, or amphibian bureaucracy was required. The object found the person most likely to appreciate its extremely compact frogness and was transferred accordingly.",
                note: "Administrator restoration note: Preference identified, object matched, colleague delighted. A suspiciously efficient human interaction.",
                feature: "Featured because sometimes the entire artifact record is simply: a person liked frogs, and the Subject paid attention. Adequate magic detected."
            },
            "mini5": {
                code: "ART-GIFT-0002",
                title: "Emergency Birthday Dragon",
                short: "late discovery / immediate hoard redistribution",
                category: "Gifted Miniatures",
                collection: "Colleague Offerings",
                status: "Gifted",
                type: "Miniature dragon",
                timestamp: "Date unindexed",
                integrity: "Tiny treasure guardian. Mission successful.",
                archive: "A miniature dragon given to another colleague after the Subject learned it was her birthday and that the day had arrived without a gift. The dragon was deployed as emergency treasure, converting an awkward absence into a small act of being noticed.",
                note: "Administrator restoration note: Birthday intelligence arrived late. Response time remained acceptable. The dragon has been credited with social damage control.",
                feature: "Featured because a miniature hoard-beast performed the rarest dragon behavior: giving treasure away."
            },
            "memory5": {
                code: "OBJ-BAR-0002",
                title: "Teddy Neon, Temporary Belonging",
                short: "Dusk Until Dawn mascot / one-night anchor",
                category: "Special Objects",
                collection: "Travel Bars",
                status: "Warm Signal",
                type: "Bar mascot memory",
                timestamp: "2026-05",
                integrity: "Rock-lit. Sweet. Emotionally load-bearing.",
                archive: "The teddy-bear mascot of Dusk Until Dawn in Tokyo. Nothing about the little figure needed to change; only the remembered bar light became warmer and clearer around it. For one night, this soft rock-and-roll sentinel made the room feel less lonely and the Subject feel as though he belonged there.",
                note: "Administrator restoration note: A teddy in a hard hat should not be capable of stabilizing a human nervous system. The evidence remains inconveniently persuasive.",
                feature: "Featured because belonging occasionally arrives as a small worn mascot beneath red bar lights, with no paperwork and excellent timing."
            },
            "mini6": {
                code: "ART-MINI-0004",
                title: "First Illidan",
                short: "first ordered miniature / old game anchor",
                category: "Art",
                collection: "Miniature Paintings",
                status: "Foundational",
                type: "Painted character miniature",
                timestamp: "Date unindexed",
                integrity: "First miniature. Fel energy stable.",
                archive: "The first miniature the Subject ever ordered and painted: Illidan, his favorite character from World of Warcraft, a game bound tightly to an important earlier life. The paint is not merely decoration. It is an attempt to make a formative digital memory occupy physical space.",
                note: "Administrator restoration note: Nostalgia has acquired horns, wings, and two extremely impractical blades. This is still healthier than pretending the past had no influence.",
                feature: "Featured because the first miniature began with a character carrying enough history, rage, and green lighting to justify the entire hobby."
            },
            "memory6": {
                code: "OBJ-FLOWER-0001",
                title: "Flowers Bought for No One",
                short: "first self-bouquet / beauty without recipient",
                category: "Special Objects",
                collection: "Quiet Realizations",
                status: "Self-Gifted",
                type: "Flower memory sketch",
                timestamp: "Date unindexed",
                integrity: "Bright. Delicate. Independently valid.",
                archive: "Possibly the first flowers the Subject bought for himself, chosen simply because their colors were beautiful. The first thought was that they ought to be given to someone. The second, more useful thought was that beauty did not require another person to authorize its purchase or receive it.",
                note: "Administrator restoration note: The flowers were not waiting for a more deserving owner. This conclusion took longer than the transaction and has therefore been archived.",
                feature: "Featured because wanting to give beauty away does not disqualify you from keeping some."
            },
            "memory7": {
                code: "OBJ-RELIC-0001",
                title: "The Holy Chestnut of Sincip",
                short: "squirrel-grade relic / authenticity disputed",
                category: "Special Objects",
                collection: "Quest Relics",
                status: "Probably Sacred",
                type: "Chestnut relic",
                timestamp: "Date unindexed",
                integrity: "Radiant. Replicable. Theologically crunchy.",
                archive: "Sincip once requested that the Subject locate a holy chestnut. This is either the relic itself or a very convincing replica; records disagree and squirrels refuse formal interviews. It has nevertheless been restored with the level of radiance appropriate to woodland scripture.",
                note: "Administrator restoration note: Holiness verification failed because the relevant clergy attempted to bury the evidence for winter.",
                feature: "Featured because every faith deserves one relic small enough to lose beneath a leaf."
            },
            "memory8": {
                code: "SCI-CONTAM-0001",
                title: "Contamination With Style",
                short: "failed agar plate / floral occupation pattern",
                category: "Research Relics",
                collection: "Laboratory Accidents",
                status: "Scientifically Rejected",
                type: "Contaminated agar plate",
                timestamp: "Date unindexed",
                integrity: "Invalid experiment. Excellent composition.",
                archive: "A contaminated agar plate whose branching growth formed a strangely floral pattern. As experimental material it failed. As an accidental little garden of color, frost, and sparks, it displayed considerably more confidence than the intended culture.",
                note: "Administrator restoration note: The result is unusable, beautiful, and therefore attempting to negotiate its grade through aesthetics. Request denied. Image retained.",
                feature: "Featured because contamination also contains multitudes, though none of them were invited into the protocol."
            },
            "memory9": {
                code: "ART-PUMPKIN-0001",
                title: "First Ghost Lantern",
                short: "first carving / one-percent spectral battery",
                category: "Art",
                collection: "First Attempts",
                status: "Successfully Haunted",
                type: "Carved pumpkin",
                timestamp: "Date unindexed",
                integrity: "Ghost intact. Battery critically charming.",
                archive: "The Subject's first pumpkin carving: a small ghost suspended inside a bright circular opening. Other pumpkins were present, but this was his. The archive has dimmed the surrounding competition and retained the hand-cut apparition as the center of the memory.",
                note: "Administrator restoration note: Power reserves indicate one percent. Haunting performance remains well above specification.",
                feature: "Featured because first attempts are allowed to glow unevenly, especially when the ghost is doing its best."
            },
            "mini7": {
                code: "ART-MINI-0005",
                title: "Eeveelution Craft Circle",
                short: "shared miniatures / imperfect elemental assembly",
                category: "Art",
                collection: "Shared Crafting",
                status: "Good Enough, Affectionately",
                type: "Handmade creature miniatures",
                timestamp: "Date unindexed",
                integrity: "Mixed makers. Minor flaws. Maximum charm.",
                archive: "A set of Pokémon miniatures made with a friend. Some were made by the Subject, some by the friend, and none require perfection to justify the time shared around them. The restored scene gives the little elemental assembly a world large enough to inhabit.",
                note: "Administrator restoration note: Comparative authorship has been sealed. Anyone attempting to rank the tiny creatures will be assigned remedial friendship training.",
                feature: "Featured because a craft can be imperfect and still become a complete memory once somebody else made part of it beside you."
            }
        },
        creatures: {
            7: {
                code: "CRTR-KYT-0005",
                title: "GUARD CHIEF OF THE KYOTO NODE",
                subtitle: "LEVEL-GATED MOUNTAIN AUTHORITY",
                rarity: "EPIC / LOCKED QUEST ENCOUNTER",
                tags: ["PRIMATE", "GUARD", "LEVEL-GATE"],
                stats: { Power: 8, Speed: 7, Courage: 9, Wisdom: 8, Charisma: 3, Stealth: 6 },
                latin: "Macaca fuscata custos recusans",
                inn: "Kyoto Monkey Park, Japan",
                size: "Small-medium, with boss-door authority",
                age: "Adult. Senior enough to deny content without explanation.",
                eyes: "Performed a complete level audit in one glance.",
                fur: "Mountain brown with official guard-chief clearance.",
                skillSet: ["Level Audit", "Quest Denial", "Dismissive Turn", "Node Security"],
                skillDetails: {
                    "Level Audit": "Reads the traveler, equipment, confidence, and probable survival time before dialogue begins.",
                    "Quest Denial": "Removes the quest marker while leaving just enough mystery to make rejection personally motivating.",
                    "Dismissive Turn": "Ends negotiations by looking elsewhere. No appeal interface is provided.",
                    "Node Security": "Prevents underleveled humans from entering monkey affairs above their current narrative clearance."
                },
                professions: ["Guard Chief", "Quest Gatekeeper", "Monkey Kingdom Security"],
                abstract: "A Kyoto guard chief who inspected the Subject, found his level inadequate, and removed the quest before it could technically exist.",
                questType: "LEVEL-GATED QUEST",
                questStatus: "UNAVAILABLE",
                questName: "Return When Stronger",
                questBehavior: "Acquire additional levels, improve monkey-faction reputation, and approach the Kyoto Node again without radiating tutorial-area vulnerability.",
                questReward: "Unknown. Quest rewards remain classified above current clearance.",
                story: "After surviving the Monkey Council and its anti-human recruitment policy, the traveler approached a second official: the Guard Chief of the Kyoto Node. The encounter appeared promising. There was posture. There was eye contact. There was the unmistakable shape of a quest marker. Then the Chief completed a silent inspection and rejected him. No objective appeared. No dialogue branch opened. The traveler had reached the correct NPC with the incorrect amount of character development.",
                comment: "Administrator note: The archive confirms that 'quest unavailable' is not a quest. The Subject has nevertheless recorded it as progress, which explains several parts of his life."
            },
            8: {
                code: "CRTR-KYT-0006",
                title: "THE FEATHERED INTERNAL AFFAIRS AGENT",
                subtitle: "RIVAL-CLAN OBSERVER ABOVE THE MONKEY KINGDOM",
                rarity: "EPIC / ESPIONAGE QUEST ENCOUNTER",
                tags: ["FLYING", "NINJA", "RIVAL-CLAN"],
                stats: { Power: 4, Speed: 9, Courage: 8, Wisdom: 8, Charisma: 5, Stealth: 10 },
                latin: "Passeriformes shinobi investigator",
                inn: "Canopy above Kyoto Monkey Territory",
                size: "Small enough to be ignored; exactly as planned",
                age: "Classified by rival-clan intelligence protocol.",
                eyes: "Constantly collecting testimony nobody remembers giving.",
                fur: "Black operational feathers, travel wrappings, and no visible credentials.",
                skillSet: ["Canopy Surveillance", "Silent Deposition", "Clan Disguise", "Evidence Cache"],
                skillDetails: {
                    "Canopy Surveillance": "Observes the entire monkey court from a branch outside normal primate suspicion range.",
                    "Silent Deposition": "Extracts useful information through one stare and a strategically timed head tilt.",
                    "Clan Disguise": "Looks sufficiently like an ordinary bird until the intelligence pouch becomes somebody else's problem.",
                    "Evidence Cache": "Stores internal findings in locations no committee, guard, or tourist camera can retrieve."
                },
                professions: ["Ninja Observer", "Rival-Clan Spy", "Internal Investigator"],
                abstract: "A ninja bird embedded above the Monkey Kingdom on behalf of a rival clan, seeking an unaffiliated human for deniable internal investigations.",
                questType: "COVERT FACTION QUEST",
                questStatus: "ACTIVE / DENIABLE",
                questName: "Internal Investigations",
                questBehavior: "Observe the Monkey Kingdom, document suspicious council activity, and report without being converted into a banana-related diplomatic incident.",
                questReward: "Rival-clan trust, Stealth +2, and one sealed intelligence feather.",
                story: "The Monkey Kingdom was not unobserved. High in the branches, beyond the Council's speeches and the Guard Chief's level requirements, waited a bird dressed for work no bird would admit performing. It belonged to a rival clan. Its assignment was not invasion, exactly. It preferred the phrase internal investigations. The Subject, already rejected by local security and therefore usefully unaffiliated, received a quiet request to observe the kingdom from within. The bird vanished before procurement forms could be issued.",
                comment: "Administrator note: A bird has outsourced espionage to a tourist with a camera. Operational standards across Kyoto continue to deteriorate."
            },
            9: {
                code: "CRTR-TKY-0004",
                title: "THE POST-COSPLAY COOLBIRDS",
                subtitle: "RETIRED SCENE VETERANS WITH CRAFTING CREDITS",
                rarity: "RARE / SOCIAL CRAFTING ENCOUNTER",
                tags: ["FLYING", "HIPSTER", "CRAFTING"],
                stats: { Power: 2, Speed: 7, Courage: 7, Wisdom: 8, Charisma: 9, Stealth: 6 },
                latin: "Passer urbanus antefrigus",
                inn: "Tokyo, Japan",
                size: "Two very small birds with disproportionate scene history",
                age: "Old enough to have done it before it was cool; young enough to mention this.",
                eyes: "Curious, friendly, and evaluating whether the Subject understands textiles.",
                fur: "Feathers accessorized with retired-cosplayer precision.",
                skillSet: ["Pre-Trend Credibility", "Wigcraft Transfer", "Mountain Discourse", "Cool Exit"],
                skillDetails: {
                    "Pre-Trend Credibility": "Establishes that any discussed interest was explored several seasons before public discovery.",
                    "Wigcraft Transfer": "Shares practical construction knowledge disguised as casual conversation.",
                    "Mountain Discourse": "Maintains a surprisingly thoughtful exchange about mountains, humans, and anime.",
                    "Cool Exit": "Leaves for the next obscure interest before the current one acquires a queue."
                },
                professions: ["Retired Cosplayers", "Trend Archaeologists", "Crafting Mentors"],
                abstract: "Two tiny Tokyo birds who left cosplay behind, remained extremely cool, and transferred wig-making skill points during an unexpectedly broad conversation.",
                questType: "SOCIAL CRAFTING EVENT",
                questStatus: "COMPLETED",
                questName: "We Were Doing It Before It Was Cool",
                questBehavior: "Discuss mountains, humans, anime, retired costumes, and whatever these two investigate next. Listen carefully when construction techniques appear.",
                questReward: "Crafting unlocked: Cool Wig Construction.",
                story: "Far from the Kyoto Monkey Kingdom and its faction politics, two little birds in Tokyo agreed to a conversation. They discussed mountains. They discussed humans. They discussed anime with the calm authority of former cosplayers who had already left that life behind. They were not bitter. They were simply ahead again, investigating whatever came after cool. Somewhere between stories, they shared enough technique for the Subject to feel a new crafting branch click open: wigs, apparently. Useful knowledge arrives through strange instructors.",
                comment: "Administrator note: The birds insist they retired before cosplay became complicated. This is historically unverifiable and aesthetically consistent."
            },
            10: {
                code: "CRTR-HME-0002",
                title: "DON CANINO, THE NEIGHBORHOOD CASANOVA",
                subtitle: "BELOVED PATRIARCH OF EXTREMELY DISTRIBUTED LINEAGE",
                rarity: "LEGENDARY / PASSIVE NEIGHBORHOOD ENCOUNTER",
                tags: ["CANINE", "CHARMER", "PATRIARCH"],
                stats: { Power: 6, Speed: 9, Courage: 8, Wisdom: 4, Charisma: 10, Stealth: 3 },
                latin: "Canis familiaris casanova magnifico",
                inn: "The old neighborhood",
                size: "Medium, though romantic ambition ignored scale entirely",
                age: "Old gentleman. Chronological restraint never installed.",
                eyes: "Warm, charming, and already tracking the next impossible romance.",
                fur: "Black with a white chest and the permanent polish of self-confidence.",
                skillSet: ["Universal Courtship", "Fence-Line Serenade", "Patriarchal Rumor", "Lovely Manners"],
                skillDetails: {
                    "Universal Courtship": "Treats every female dog as a plausible romantic destiny regardless of size, distance, or common sense.",
                    "Fence-Line Serenade": "Converts an ordinary neighborhood boundary into an operatic departure scene.",
                    "Patriarchal Rumor": "Causes several suspiciously familiar puppies to appear across the local map.",
                    "Lovely Manners": "Remains gentle and beloved even while preparing another unauthorized romantic campaign."
                },
                professions: ["Neighborhood Don", "Serial Romantic", "Beloved Family Dog"],
                abstract: "A lovely, well-mannered old dog with Italian-grandfather charisma, relentless romantic initiative, and probable paternal responsibility for half the neighborhood strays.",
                questType: "PASSIVE LEGACY QUEST",
                questStatus: "PERMANENTLY WANDERING",
                questName: "One More Romantic Patrol",
                questBehavior: "Leave home with confidence, pursue an entirely unsuitable romance, return as though no scandal occurred, and remain impossible not to love.",
                questReward: "Neighborhood lineage expanded. Reputation unchanged due to overwhelming charm.",
                story: "He was a lovely dog and a gentleman in every setting except one: the existence of female dogs. Size did not matter. Distance did not matter. Gates, schedules, and household expectations were merely dramatic obstacles placed before a great romantic lead. He ran often and courted widely, carrying the calm confidence of an old Italian playboy who knew every street and suspected every balcony concealed destiny. By neighborhood estimate, he may have fathered most of the local stray population. He was still loved. Some charisma values cannot be balanced.",
                comment: "Administrator note: Paternity records are incomplete, alibis are worse, and the Subject remains affectionate. Case closed by popular demand."
            },
            11: {
                code: "CRTR-HME-0003",
                title: "MADAM KAREN OF THE DUST ROAD",
                subtitle: "DIRTY, COMBATIVE, AND LOYAL ON HER OWN TERMS",
                rarity: "EPIC / HOSTILE-FRIENDLY NEIGHBORHOOD ENCOUNTER",
                tags: ["CANINE", "KAREN", "BRAWLER"],
                stats: { Power: 8, Speed: 7, Courage: 10, Wisdom: 5, Charisma: 4, Stealth: 2 },
                latin: "Canis familiaris querella veterana",
                inn: "The old neighborhood",
                size: "Medium and permanently prepared to escalate",
                age: "Old lady. Seniority cited in every complaint.",
                eyes: "One look requests the manager; the other has already started the fight.",
                fur: "White, black, and usually carrying unauthorized quantities of street dust.",
                skillSet: ["Manager Summons", "Preemptive Argument", "Street-Dust Armor", "Selective Affection"],
                skillDetails: {
                    "Manager Summons": "Demands escalation even when no organization, employee, or grievance procedure exists.",
                    "Preemptive Argument": "Begins the fight early to prevent other stray dogs from misunderstanding the relationship.",
                    "Street-Dust Armor": "Adds one protective layer for every day grooming is successfully avoided.",
                    "Selective Affection": "Drops the hostility only for the people she decided were hers. This decision is final."
                },
                professions: ["Neighborhood Complaint Officer", "Stray-Dog Brawler", "Selective Companion"],
                abstract: "A spectacularly dirty old lady who sought fights with other strays, objected to nearly everything, and reserved a real, stubborn tenderness for the people she trusted.",
                questType: "NEIGHBORHOOD DISPUTE",
                questStatus: "ALWAYS ESCALATING",
                questName: "I Would Like to Bark at the Manager",
                questBehavior: "Inspect the street, identify an unacceptable dog, begin proceedings immediately, then return to the trusted humans for affection without acknowledging inconsistency.",
                questReward: "Local authority +3, cleanliness unchanged, loyalty confirmed.",
                story: "She was dirty beyond reasonable explanation, mean with professional consistency, and willing to start conflict with nearly any stray dog that crossed her route. The neighborhood was not territory so much as an endless list of complaints requiring personal enforcement. Yet with the Subject and his family, she was lovely. Not transformed, exactly. She simply made an exception, as old Karens and ancient queens sometimes do, and defended that exception with the same stubborn force she applied to everything else.",
                comment: "Administrator note: Temperament classification returned 'hostile,' 'loving,' and 'please hold for management.' All three are accurate."
            },
            12: {
                code: "CRTR-DTE-0001",
                title: "THE ANNIVERSARY GENTLEMAN",
                subtitle: "FORMAL DINING ADVISOR AND DATE-QUEST OFFICER",
                rarity: "RARE / ANNIVERSARY QUEST ENCOUNTER",
                tags: ["CANINE", "GENTLEMAN", "QUEST-GIVER"],
                stats: { Power: 4, Speed: 3, Courage: 8, Wisdom: 9, Charisma: 10, Stealth: 7 },
                latin: "Canis familiaris urbanitas perfecta",
                inn: "Restaurant anniversary encounter",
                size: "Medium-large, seated with exemplary table discipline",
                age: "Adult. Old enough to understand reservations and emotional stakes.",
                eyes: "Patient, observant, and quietly evaluating the date plan.",
                fur: "Black formal coat with naturally distinguished features.",
                skillSet: ["Perfect Table Manners", "Anniversary Counsel", "Artifact Appraisal", "Gentleman Enforcement"],
                skillDetails: {
                    "Perfect Table Manners": "Sits beside his owners without disrupting service, proving civilization remains technically possible.",
                    "Anniversary Counsel": "Detects insufficient romantic preparation and issues corrective objectives before dessert.",
                    "Artifact Appraisal": "Identifies which regional objects can become an emotionally credible gift.",
                    "Gentleman Enforcement": "Keeps nearby humans in line through posture, patience, and devastatingly polite eye contact."
                },
                professions: ["Restaurant Gentleman", "Date Advisor", "Artifact Quest Giver"],
                abstract: "A restaurant dog seated beside his owners like a proper gentleman, who issued the Subject's first anniversary objectives and attempted to keep the date on a successful route.",
                questType: "ANNIVERSARY MAIN QUEST",
                questStatus: "HISTORICAL / COMPLETED",
                questName: "Artifacts for the Fifth Anniversary",
                questBehavior: "Search the surrounding region for meaningful artifacts, assemble a thoughtful gift, and do not waste the opportunity placed in front of you.",
                questReward: "Date-success probability increased; Gentleman approval conditionally granted.",
                story: "On the Subject's fifth anniversary with his former partner, a dog sat beside his owners in a restaurant with more composure than most human guests. He was a very good boy, but also clearly a gentleman with standards. Seeing a date in need of structure, he issued the first objectives: explore the region, collect suitable artifacts, and give the girlfriend something thoughtful. The memory outlasted the relationship. The advice remains sound, which is inconvenient but not grounds for deletion.",
                comment: "Administrator note: The dog behaved impeccably, identified the mission, and kept his party organized. He was the most qualified person at the restaurant."
            },
            13: {
                code: "CRTR-MUS-0001",
                title: "COLIN, THE CONVERSATIONAL REMAINS",
                subtitle: "FRIENDLY MUSEUM BANDITO WITH NO OFF SWITCH",
                rarity: "RARE / SOCIAL ENDURANCE ENCOUNTER",
                tags: ["UNDEAD", "BANDITO", "TALKATIVE"],
                stats: { Power: 3, Speed: 1, Courage: 10, Wisdom: 8, Charisma: 9, Stealth: 0 },
                latin: "Homo musealis loquax colinus",
                inn: "Museum collection",
                size: "Adult human skeleton, conversational radius excessive",
                age: "Old enough to have lost all tissue and none of the anecdotes.",
                eyes: "Absent. Eye contact somehow maintained anyway.",
                fur: "None. Mustache remains metaphysically present.",
                skillSet: ["How Are You, Really", "Bandito Mustache", "Infinite Anecdote", "Friendly Persistence"],
                skillDetails: {
                    "How Are You, Really": "Asks with enough sincerity to bypass standard small-talk defenses.",
                    "Bandito Mustache": "Produces a magnificent curled mustache despite severe anatomical limitations.",
                    "Infinite Anecdote": "Extends one friendly exchange until closing time, heat death, or successful escape.",
                    "Friendly Persistence": "Remains likable several minutes beyond the listener's conversational capacity."
                },
                professions: ["Museum Skeleton", "Conversationalist", "Afterlife Bandito"],
                abstract: "Colin is a friendly museum skeleton with a magnificent bandito mustache, rare concern for how others are doing, and far more dialogue than any encounter requires.",
                questType: "SOCIAL ENDURANCE QUEST",
                questStatus: "REPEATING",
                questName: "One More Story, My Friend",
                questBehavior: "Answer honestly, appreciate the mustache, remain for several excellent anecdotes, then locate a polite exit before the next conversational expansion pack begins.",
                questReward: "Mood improved, patience tested, Colin still liked.",
                story: "This is Colin. Colin is a skeleton from a museum. Colin is friendly. He asked how the Subject was doing, which is a rarer talent than the archive prefers to admit. He wore, at least in memory, a magnificent el-bandito mustache and reclined with the warmth of a host who had been waiting several centuries for company. Colin talked. Colin continued talking. Eventually Colin became slightly annoying. This did not make him less kind. It only made departure logistics more complex. The Subject likes Colin.",
                comment: "Administrator note: Colin has no lungs and still dominates the conversation. This is technically impressive and operationally exhausting."
            },
            14: {
                code: "CRTR-XEN-0001",
                title: "THE LITTLE COSMIC ENVOY",
                subtitle: "EIGHT-LEGGED CULTURAL EXCHANGE SPECIALIST",
                rarity: "MYTHIC / FIRST-CONTACT ENCOUNTER",
                tags: ["ARACHNID", "COSMIC", "DIPLOMAT"],
                stats: { Power: 2, Speed: 7, Courage: 10, Wisdom: 8, Charisma: 9, Stealth: 9 },
                latin: "Araneae cosmica amicus",
                inn: "Earth, temporary landing site",
                size: "Tiny by terrestrial standards; appropriately sized for its spacecraft",
                age: "Measured in an untranslated orbital calendar.",
                eyes: "Numerous, curious, and delighted by domestic textiles.",
                fur: "Fine extraterrestrial fuzz carrying trace stardust.",
                skillSet: ["World-Hopping", "Eightfold Handshake", "Stardust Navigation", "Cultural Mirroring"],
                skillDetails: {
                    "World-Hopping": "Travels between inhabited worlds in a vessel small enough to be mistaken for household clutter.",
                    "Eightfold Handshake": "Establishes diplomatic contact with unnecessary but charming procedural thoroughness.",
                    "Stardust Navigation": "Uses luminous particulate trails to locate safe landing zones and interesting people.",
                    "Cultural Mirroring": "Discovers that distant civilizations enjoy many of the same comforts, curiosities, and social mistakes."
                },
                professions: ["Space Traveler", "Cultural Envoy", "Tiny First-Contact Delegate"],
                abstract: "A cute spider from space who paused its travels on Earth, exchanged introductions with the Subject, and discovered that their cultures share more than either expected.",
                questType: "CULTURAL EXCHANGE QUEST",
                questStatus: "COMPLETED / CHANNEL OPEN",
                questName: "Eight Legs Between Worlds",
                questBehavior: "Show the visitor how humans live, learn the customs carried aboard its tiny ship, and establish peaceful contact without involving a shoe.",
                questReward: "Interworld connection established; alien culture primer received; Arachnophobia temporarily suspended.",
                story: "A small spider arrived from space in a small spider-sized ship, carrying maps, stardust, and the caution appropriate to a traveler landing among giants. The Subject showed it around: how humans live, what they keep, what they eat, what they fear, and which corners of a home are diplomatically complicated for arachnids. In return, the envoy offered an introduction to its own culture. Many things were different. Many things were unexpectedly familiar. The quest was not conquest or rescue. It was simply the ancient work of meeting someone strange and discovering that strange does not mean distant.",
                comment: "Administrator note: First contact succeeded because neither party screamed. For humanity, this qualifies as exceptional diplomatic performance."
            }
        }
    };
}());
