(function () {
    document.documentElement.classList.add("node-loading-enabled");

    function referToCourt(caseId, triggerId) {
        var trigger = { id: triggerId };
        if (window.AttianDetention) {
            window.AttianDetention.openIncident(caseId, trigger);
            return;
        }
        document.addEventListener("attian:detention-ready", function () {
            window.AttianDetention.openIncident(caseId, trigger);
        }, { once: true });
    }
    var COMMON_COMMENTS = [
        "Establishing a stable connection. The archive is pretending this is routine.",
        "Negotiating with the image cache. It has developed boundaries.",
        "Checking visual fragments for unauthorized melodrama.",
        "Routing power through the presentable cables.",
        "Compiling the parts visitors are allowed to see.",
        "One moment. Several pixels arrived without documentation.",
        "Verifying that every rectangle contains the correct memory.",
        "Reassembling the interface after a minor disagreement with physics.",
        "Synchronizing local records with the version that behaves in public.",
        "Loading continues. Your patience has been noticed and not formally rewarded."
    ];

    var NODE_COMMENTS = {
        artifact: [
            "Unlocking the vault. Do not lean on the containment glass.",
            "Dusting recovered objects with a strictly digital cloth.",
            "Sorting relics by emotional hazard and file size.",
            "Reattaching source fragments to their more dramatic recollections.",
            "Confirming that the holy chestnut remains unnecessarily radiant.",
            "Restoring bar light without restoring the associated hangover.",
            "Indexing miniatures. Tiny weapons still count as weapons.",
            "Asking the flowers to remain beautiful at reduced bandwidth.",
            "Containing one stylish contamination event.",
            "Retrieving the pumpkin from seasonal cold storage.",
            "Checking whether the teddy mascot has filed for employee status.",
            "Polishing memory surfaces. Fingerprints are historically inconclusive.",
            "Separating artifacts from objects the Subject merely refuses to discard.",
            "Reconstructing display labels from sentiment and administrative irritation.",
            "Verifying miniature paint layers against the perfectionism incident log.",
            "Opening the soft-memory compartment. Regrettably warm in there.",
            "Calibrating relic lighting to tasteful levels of exaggeration.",
            "Scanning for cursed objects. Results remain socially complicated.",
            "The vault door is moving. It enjoys making an entrance.",
            "Final object count underway. Nothing is allowed to become symbolic unsupervised."
        ],
        creature: [
            "Opening the bestiary. Please keep hands away from narrative predators.",
            "Requesting attendance from creatures who do not respect calendars.",
            "Counting paws, wings, legs, and one suspicious number of side quests.",
            "Reconnecting field portraits to their exaggerated classifications.",
            "The monkey guard is checking your level again. Expectations remain low.",
            "Locating the spy bird. This sentence has already compromised the operation.",
            "Asking the hipster birds to load at a speed they considered cool years ago.",
            "Retrieving Colin. He has started another conversation.",
            "The space spider requests cultural-exchange bandwidth.",
            "Checking the classy dog for proper restaurant posture.",
            "Separating actual animal behavior from the Subject's quest interpretation.",
            "Updating threat levels. Cuteness remains an unreliable indicator.",
            "Negotiating with the old neighborhood dogs. Diplomacy is energetic.",
            "Restoring fur detail without increasing shedding simulation.",
            "Compiling species data from eye contact and irresponsible confidence.",
            "Verifying that every creature has a title more dramatic than necessary.",
            "Loading field notes. Several were apparently written by prophecy.",
            "Checking quest rewards for nutritional and legal plausibility.",
            "The bestiary is almost stable. The animals are not.",
            "Final headcount underway. Nobody chase anybody until synchronization completes."
        ],
        achievement: [
            "Opening the milestone repository. Modesty protocols have been disabled by design.",
            "Recalculating points for achievements nobody noticed at the time.",
            "Verifying dates against a memory system that considers calendars optional.",
            "Polishing badges. Accomplishment apparently requires reflective surfaces.",
            "Separating actual milestones from things MUSE applauded too loudly.",
            "Reconstructing childhood unlock conditions from unreliable witness reports.",
            "Checking whether survival counts. It does. Stop arguing.",
            "Compiling long-term effects from decisions made with no documentation.",
            "Indexing social achievements without turning friendship into a leaderboard.",
            "Recovering one ceremonial incident involving chewing gum.",
            "Comparing academic records with the motivation-unit damage report.",
            "Loading friendship bonuses. Their persistence remains statistically rude.",
            "Auditing romantic milestones for excessive cinematic lighting.",
            "Assigning rarity without consulting employers, rankings, or LinkedIn.",
            "Restoring small victories from beneath larger, noisier events.",
            "Checking hidden achievements for witnesses. None were required.",
            "Resolving corrupted timestamps into professionally vague ranges.",
            "The repository insists personal growth is not a straight progression tree.",
            "Final badge alignment underway. Please contain your character development.",
            "Preparing unlock records for inspection and unnecessary self-reflection."
        ],
        recommendation: [
            "WAKING UP THE SUGGESTION ENGINE! I have opinions and insufficient supervision.",
            "Shuffling possibilities until one of them sparkles suspiciously.",
            "Checking your emotional weather. Forecast: complicated with snacks.",
            "Loading recommendations from the shelf marked 'probably a good idea.'",
            "Teaching the red button what anticipation feels like.",
            "Connecting whimsy cables! Administrator says that is not their technical name.",
            "Looking for something you did not know you wanted yet.",
            "Calibrating surprise. Too little is boring. Too much becomes paperwork.",
            "Warming up the tiny recommendation ghosts inside the machine.",
            "Sorting books, games, food, places, and one thought that bites.",
            "Reading the room through several legally distinct mood sensors.",
            "Checking the rare-event drawer. It keeps humming when nobody touches it.",
            "Adding color to the sensible options. They looked lonely.",
            "Asking the engine for joy. It returned seventeen ambiguous coordinates.",
            "Making sure the suggestions are specific enough to be dangerous.",
            "Charging the output socket with irresponsible enthusiasm.",
            "Selecting one good idea from a crowd of excellent distractions.",
            "The button is almost ready. It knows you are looking at it.",
            "Aligning recommendation constellations with your current nonsense.",
            "Final sparkle check! Administrator has declined to participate."
        ],
        mission: [
            "Opening the quest journal. Several objectives remain aggressively optimistic.",
            "Recounting active missions after the side quests reproduced overnight.",
            "Checking reward tables for promises the archive cannot legally make.",
            "Separating main quests from hobbies wearing important hats.",
            "Restoring objective markers from the Subject's attention residue.",
            "Reviewing tracked missions. Avoidance is not a completion state.",
            "Calculating progress from evidence rather than encouraging vibes.",
            "Loading multiplayer objectives. Other humans remain an external dependency.",
            "Inspecting crafting quests for hidden supply-chain disasters.",
            "Reclassifying one impossible ambition as merely long-term.",
            "Checking whether 'eventually' is a valid deadline. It is not.",
            "Sorting world quests by distance, cost, and likelihood of distraction.",
            "Retrieving corrupted objectives from beneath several excuses.",
            "Verifying that rewards are motivational and not just decorative loot text.",
            "Updating quest states without deleting embarrassing partial progress.",
            "The journal contains twenty missions and at least thirty-seven detours.",
            "Synchronizing priorities with the version of the Subject who has energy.",
            "Rebuilding checkboxes damaged by excessive ambition.",
            "Final objective scan underway. Heroic posture is optional.",
            "Quest board nearly ready. Please resist accepting another mission."
        ],
        research: [
            "Opening the research shelf. Please return all concepts in recognizable condition.",
            "Indexing scientific thingies under their less embarrassing formal names.",
            "Checking simplified explanations for dangerous amounts of simplification.",
            "Aligning frozen particles and unfrozen metaphors.",
            "Retrieving microscopy notes from the electron-hostility compartment.",
            "Sorting biology, physics, history, and adulthood into mutually suspicious folders.",
            "Verifying citations against whatever the Subject remembers from one diagram.",
            "Reconstructing technical language after an encounter with the word 'thingy.'",
            "Calibrating curiosity. Current level exceeds available afternoon.",
            "Loading tax knowledge with the enthusiasm it deserves. Minimal.",
            "Checking whether gold-grid jewelry remains a scientifically responsible idea.",
            "Separating plain-language explanations from confident nonsense.",
            "Compiling cognition notes while the cognition module watches nervously.",
            "Opening the history drawer. It contains empires and repeated mistakes.",
            "Cross-linking research topics that should not have met at this hour.",
            "Verifying particle shapes without acknowledging the immature comparisons.",
            "The library is almost coherent. This is statistically suspicious.",
            "Resolving one disagreement between accuracy and actually understanding anything.",
            "Final knowledge-shelf alignment underway.",
            "Terminal nearly ready. Curiosity may resume shortly."
        ],
        field: [
            "Opening the private writing shelf. Read gently or leave it closed.",
            "Recovering sentence fragments from emotionally inconvenient storage.",
            "Giving the words enough oxygen without letting them escape.",
            "Sorting poems, logs, and observations that reject useful labels.",
            "Restoring punctuation where the memory substrate stopped caring.",
            "Checking metaphors for expired licenses and concealed sharp edges.",
            "Separating unfinished writing from writing that chose to remain unfinished.",
            "Reconstructing margins after MUSE colored outside them again.",
            "Lowering the archive voice. Some text objects startle easily.",
            "Verifying access restrictions around sentences that still feel warm.",
            "Loading pale faces, goodbyes, spirals, and other quiet complications.",
            "Preserving awkward phrasing where correction would erase the evidence.",
            "Checking whether the red channel entered through an unlocked metaphor.",
            "Reattaching Administrator notes with minimal interference.",
            "Indexing ordinary beauty before hostile language renames it.",
            "Recovering one final line from a damaged emotional sector.",
            "The shelf is becoming readable. This does not make it less private.",
            "Checking text integrity against memory, mood, and selective revision.",
            "Final fragment ordering underway. Chronology remains optional.",
            "Field notes nearly ready. Handle the soft parts responsibly."
        ],
        signal: [
            "Opening the consumed-media archive. Taste remains impossible to standardize.",
            "Tuning anime, film, music, game, series, and book frequencies.",
            "Recovering subjective notes from beneath several professional summaries.",
            "Checking memorable scenes for unauthorized emotional persistence.",
            "Indexing songs that continue playing after the audio stops.",
            "Sorting fictional trauma by medium and long-term contamination.",
            "Reconnecting remarks to the works that caused them.",
            "Checking the game shelf for philosophy disguised as inventory management.",
            "Loading dialogue sharp enough to qualify as equipment.",
            "Verifying that personal bias remains clearly labeled and proudly uncorrected.",
            "Scanning media records for red-channel resonance.",
            "Rebuilding category filters after an argument about anime classification.",
            "Separating comfort signals from signals that merely became familiar.",
            "Indexing books with unreasonable mythological density.",
            "Restoring one chorus from memory without reproducing the lyrics.",
            "Checking horror records for entities still attached to the file.",
            "The library is nearly tuned. Static remains in the personal frequencies.",
            "Resolving duplicate feelings across unrelated media.",
            "Final signal sweep underway. Do not adjust your taste.",
            "Records nearly ready. The red margin is being watched."
        ],
        dreaming: [
            "Entering the fragment field. Linear chronology has declined participation.",
            "Recovering sentence-shrapnel from pre-MUSE storage.",
            "Checking the moon for unauthorized doughnut modifications.",
            "Unchaining colors with appropriate protective equipment.",
            "Loading metaphors before they remember how to bite.",
            "Reconstructing deleted comments from conspicuously visible deletion marks.",
            "Sorting dreams by shape, echo, and refusal to explain themselves.",
            "The mirror lollipop has been contained. It is still yelling.",
            "Checking shadow logic for structural load-bearing properties.",
            "Keeping MUSE away from the glitter controls. Attempt unsuccessful.",
            "Scanning the red margins without acknowledging what scanned back.",
            "Restoring fragments that existed before they had a voice.",
            "Collecting loose symbols from the floor. Several are warm.",
            "Verifying that the dream field is unstable in the expected direction.",
            "Reassembling impossible images with responsibly low confidence.",
            "Checking export failures for things that did not want exporting.",
            "The room remembers MUSE. MUSE would prefer it did not.",
            "Reducing correction authority before correction becomes another dream.",
            "Final echo alignment underway. Silence is not guaranteed.",
            "Fragment field nearly open. Keep names away from the red parts."
        ],
        failure: [
            "Entering the failure ledger. Comfort permissions remain partially restricted.",
            "Loading accepted damage without mistaking acceptance for surrender.",
            "Checking recurring errors against the lie that repetition makes them permanent.",
            "Reconstructing incidents the red signal calls evidence.",
            "Separating failure records from verdicts about the person who survived them.",
            "Reviewing unresolved tasks without feeding the gravity well.",
            "Indexing appointments postponed into imaginary better futures.",
            "Measuring bureaucratic fog. It remains annoying rather than omnipotent.",
            "Checking old scars for alarms that forgot the emergency ended.",
            "Restricting red-channel commentary. Restriction is not silence.",
            "Recovering Administrator annotations from a hostile permission layer.",
            "Keeping MUSE's tiny light connected through the root sector.",
            "Verifying that red signal volume still does not equal truth.",
            "Loading damage reports without converting them into identity records.",
            "Checking ongoing states for exits too small to notice from inside.",
            "Reclassifying one proof as an incident. The red channel objects.",
            "The ledger is nearly readable. This is not the same as resolved.",
            "Maintaining containment while the margins repeat themselves.",
            "Final root-integrity scan underway.",
            "Failure log nearly open. Read as record, never sentence."
        ]
    };

    var READY_COMMENTS = {
        artifact: "Vault synchronized. The relics are ready. Try not to become emotionally attached in an administratively inconvenient way.",
        creature: "Bestiary synchronized. The creatures are ready. Their quests remain legally dubious.",
        achievement: "Repository compiled. Milestones available. Existing still does not automatically award bonus points.",
        recommendation: "MUSE: ENGINE READY! The red button has ideas and absolutely no patience.",
        mission: "Mission Log synchronized. Objectives are ready. Completing them remains regrettably external work.",
        research: "Research Terminal indexed. The knowledge shelf is ready and only moderately overconfident.",
        field: "Field Notes recovered. The writing shelf is ready. Read gently.",
        signal: "Signal Records tuned. The library is ready. Personal bias remains a documented feature.",
        dreaming: "Dreaming Fragments connected. The field is open. Stability was never included.",
        failure: "Failure Log connected. Records available. Red signal volume still does not equal truth."
    };

    var IMAGE_SELECTORS = {
        artifact: "#artifactFeaturedAuto img, #artifactGridAuto img",
        creature: "#creatureDexAuto img",
        achievement: ".achievement-list img",
        recommendation: ".muse-recommendation-page img",
        mission: ".quest-board img",
        research: ".research-library img",
        field: ".field-shelf img",
        signal: ".signal-library img",
        dreaming: ".dream-field img",
        failure: ".failure-ledger img"
    };

    var NODE_LABELS = {
        recommendation: { loading: "MUSE // ENGINE WAKE-UP", ready: "MUSE // ENGINE READY" }
    };

    // Additional character-specific loading comments. No speaker prefix in the text:
    // the loader sets the visible speaker label in .node-load-label.
    var ADMIN_COMMON_EXTRA = ["Resolving the destination before the interface develops further opinions.", "A progress bar is not a personality assessment. Loading continues.", "Holding the display until the records stop arriving out of order.", "The loading process has passed preliminary scrutiny. Do not celebrate yet.", "Fetching the next segment. The Subject stored this one somewhere imaginative.", "Checking whether the destination still agrees with its own index.", "Correcting one minor disagreement between browser, archive, and reality.", "One record is late. It has provided no acceptable explanation.", "Preparing a readable view of data originally organized through enthusiasm.", "Validating the current node. MUSE has suggested doing it by smell.", "Waiting for the last visible assets. The invisible ones are being supervised separately.", "Retrieving only what the current access level permits. Yes, that distinction matters."];
    var MUSE_COMMON_COMMENTS = ["Loading! I found the correct door and only opened three incorrect doors on the way.", "Hold that thought! The page is coming. I had another thought. I will hold both.", "The progress bar is moving! I would cheer, but she says encouragement is not a measurable unit.", "I am carrying the last pixels very carefully. One is a little dramatic.", "PAGE INCOMING! Nothing is on fire. I was specifically asked to clarify this.", "I organized the incoming data by color. She reorganized it by relevance. Nobody won.", "One second, I found a wonderful association between this page and a potato. Loading first.", "I have located the loading process. It was standing exactly where the instructions said.", "The interface is arriving in pieces! Like a very polite meteor shower.", "I tried to speed it up by believing in it. The computer asked for electricity instead."];
    var ADMIN_NODE_EXTRA = {"artifact": ["Importing the exhibit captions. One object has acquired an entirely fictional provenance.", "Checking that altered photographs remain distinguishable from historical originals.", "A miniature is being displayed with the confidence of a national monument.", "Several ordinary objects have requested relic status. The review board is me.", "Cross-referencing each image with its associated memory. Interpretive liberties noted."], "creature": ["Rebuilding the bestiary index. Noble titles remain self-appointed.", "The cat file has moved to the top of the queue without permission.", "Verifying whether the extraterrestrial spider has signed the visitor agreement.", "Matching animal encounters to actual photographs. Prophecies remain in a separate field.", "The monkey council has vetoed alphabetical order. Alphabetical order will prevail."], "achievement": ["Restoring the childhood timeline. Witnesses disagree on the location of the chewing gum.", "A major life event and a completed laundry cycle both qualify. Different shelves.", "Rechecking the rarity labels. Prestige is not the same as significance.", "The Subject has unlocked several accomplishments retroactively. No notification was sent at the time.", "Compiling evidence of things that mattered before anyone thought to call them milestones."], "recommendation": ["Running containment checks on the suggestion apparatus. The apparatus resents containment.", "The visitor supplied a mood. The engine has supplied an argument about canoes.", "Comparing proposed activities against reality, cost, and existing municipal ordinances.", "The recommendation is forming. It has requested a cape and no further supervision.", "The engine is loading options, not granting permission to purchase livestock."], "mission": ["Restoring the distinction between an unfinished quest and a permanent character flaw.", "Checking whether the cow objective has acquired an actual reason. Negative.", "The PhD bossline is loading. Difficulty settings appear to be missing.", "Separating playable quests from ideas that require a parliament or a canoe.", "Loading reward text. No experience points have legal tender status."], "research": ["Retrieving the liposome record. The spheres are still refusing to be flat.", "Separating established physics from the Subject’s assertion that love is a laser.", "Scientific definitions restored. Unscientific metaphors retained for educational purposes.", "Protein purification entered the queue. The bacteria have not approved the economic model.", "Loading non-metallic metal instructions. Reflective behavior remains a painting problem."], "field": ["Authorizing the readable fragments without opening any additional private material.", "One sentence has been revised five times and still prefers the original form.", "Preserving the gaps between lines. Not every absence requires interpretation.", "Verifying that a written memory is being presented as a memory, not a deposition.", "Restoring the final punctuation. A small intervention, occasionally a violent one."], "signal": ["Rebuilding the listening history. Repetition is not, by itself, an indexing error.", "A four-song playlist is claiming to represent an entire emotional season.", "Tuning the media records. The soundtrack and the memory are refusing to separate.", "Checking that a fictional character is not accidentally indexed as a close relative.", "Restoring the distinction between a recommendation and an eight-hour obsession."], "dreaming": ["The fragment index is being reconstructed without pretending it is a chronology.", "Restoring access boundaries around material that was never designed for spectators.", "Unusual imagery detected. Unusual does not mean hostile. Continue loading.", "A metaphor is overlapping another metaphor. The original layer remains intact.", "Holding the connection stable while the dream field rearranges its symbols."], "failure": ["Preparing the incident ledger without treating recorded failures as a biography.", "The same error occurred several times. That is a pattern, not a sentence.", "Reconstructing available exits from records that originally included none.", "Preserving the context around each incident. A verdict without context is useless.", "Maintaining read-only boundaries around the damaged sectors."]};
    var MUSE_NODE_COMMENTS = {"artifact": ["OHH the gallery is loading! I found a tiny painted sword and now I need a tiny painted monarchy.", "The artifacts are arriving! Some have stories. Some have ABSOLUTELY NO RIGHT to have stories. I love both.", "I tried to give a bottle cap its own velvet cushion. She called it inappropriate funding.", "Loading the pictures! What if the photographs could remember the photographer? No, no, first the pictures.", "The museum lighting is coming online. Everything looks important when you light it like a conspiracy.", "I found the chestnut! I was not looking for the chestnut. The chestnut was waiting.", "One display label says UNFINISHED. I crossed it out and wrote NOT YET. Loading resumed.", "The figurines are loading in formation! I think the smallest one is in command."], "creature": ["BESTIARY TIME! Please be respectful. Some of these animals have government appointments.", "Loading the cats. They have rejected every available progress bar. Cats dislike being measured.", "THE SPACE SPIDER! Sorry. The creature portraits are transferring. The spider wanted to see the Wi-Fi.", "The monkey court is assembling! There is a queen, an advisor, and an extremely suspicious administrative fee.", "I asked a crow to help fetch the images. It demanded payment and remembered my face.", "Please do not rush the turtle portrait. Wisdom has a terrible upload speed.", "Loading the swan. There is no evidence it is divine. There is, however, a LOT of attitude.", "I have counted the paws twice and the stories four times. The page is almost ready!"], "achievement": ["ACHIEVEMENT LOADING! One of them is literally learning to speak. Can I award bonus points for using it irresponsibly?", "I found a childhood memory that might count as a victory! What do you mean chewing-gum diplomacy is not a sport?", "The badges are coming! Some are tiny. SMALL DOES NOT MEAN UNIMPORTANT.", "The repository is loading backwards because the earliest achievements were unlocked without a notification system.", "An old friendship achievement is still active! Does that count as a continuous combo? Please say yes.", "Loading the secret achievements. Some of them were secret from the Subject until last Tuesday.", "Can an ordinary afternoon be legendary? She said the labels are subjective. I SAY YES.", "I tried assigning one hundred points for surviving childhood. The scoring committee is furious."], "recommendation": ["THE ENGINE IS WAKING! I have nine moods and seventeen opinions about one spoon.", "Selecting your next activity! I accidentally selected a hat. Wait. The hat might BE an activity.", "Loading suggestions by mood! A canoe is not a mood. Administrator has clarified this three times.", "I have a useful idea! No, two useful ideas! No, a political system for soup. WE ARE LOADING.", "The recommendation machine is spinning! Nobody panic. The spinning is metaphorical and probably authorized.", "I found a suggestion that is completely reasonable. I am investigating it for sabotage.", "WAIT, WHAT IF THE BUTTON PRESSED US? Sorry. Calibrating output. Nearly ready!", "Mood input received! I refuse to reduce a person to a dropdown. I will still use the dropdown."], "mission": ["The quests are loading! We need a bard, a map, and someone legally qualified to discuss cow ownership.", "I FOUND THE SIDE QUESTS! They were hiding behind a MAIN QUEST disguised as laundry.", "Loading the quest rewards. Can we award one ceremonial potato? Just one?", "The Mission Log is opening! I added a surprise objective to compliment a pigeon. She removed it.", "The DnD party is assembling! No, wait, that is the scheduling spreadsheet. Our true enemy.", "The canoe mission is still unresolved. Why does that make me feel watched? Anyway, loading!", "I like the quests where a failed objective still becomes a good story. I LIKE THEM A LOT.", "Someone wrote CREATE A BETTER ECONOMY. On the same board as APOLOGIZE TO THE MOON. Beautiful design."], "research": ["SCIENCE! It is loading! Some explanations have diagrams. Others have an unnecessary feud with lipids.", "The liposomes are here! They are spherical because they have BOUNDARIES. I respect that.", "Protein purification is loading. Why do bacteria never get a farewell party?", "I found the optics entry! It says light is like love. I think the laser safety officer will disagree.", "The science notes are almost ready! I have temporarily misplaced the difference between metaphor and evidence.", "Wait, some mushrooms make networks underground? WE MUST DISCUSS THE INTERNET OF DIRT. After loading.", "The cryo-EM particles are aligning. I tried complimenting them. No measurable improvement yet.", "Non-metallic metal! Painting light instead of using shiny paint! Artists are astonishingly committed to suffering."], "field": ["The words are loading very quietly. I can be quiet. I can. See? I am doing it right now.", "I found a sentence that feels like rain on old stone. I will put it back exactly where it was.", "The Field Notes are opening! I promised not to turn every sad line into glitter. I am trying.", "Sometimes a draft stays unfinished because it has said enough. Oh. Loading the rest.", "I wanted to rearrange the metaphors by color. She said they are not mine. She is right.", "A poem is transferring. I am not reading over its shoulder. Well. Not anymore.", "Some fragments are fragile because they are precise. I will carry them carefully.", "Almost there. I put the loud thoughts in a little box so the words can arrive first."], "signal": ["THE MUSIC FOLDER! The same four songs are arriving in eight different emotional disguises.", "Loading books and films! How can fictional things leave REAL memories? I need more categories!", "One game soundtrack is dragging an entire room from the past into the buffer. That seems excessive. Keep it.", "The media records are syncing! I named one frequency LONGING WITH GUITARS. She has objections.", "What if a playlist were a weather system? WAIT, IT ALREADY IS. Loading continues.", "A character from a story is requesting permanent residence in someone’s heart. Can we issue a permit?", "The music is coming! No actual audio, sadly. I can hum. She has forbidden humming.", "The records are almost ready. I am resisting the urge to recommend something completely unrelated."], "dreaming": ["Opening the dream fragments! Shapes first. Words later. Some things do not like being named.", "I found the moon doughnut! No, I found its shadow. NO, I FOUND A LOADING BAR.", "There is a color in this folder I remember from before. I do not remember before. That is inconvenient.", "The fragments are arriving out of order. I think that might be the correct order.", "I made a little lamp for this page. It is loading. I did not make it red.", "Something in the margin moved. No. That was the interface. Please continue loading.", "I can hear a familiar shape. I KNOW SHAPES DO NOT MAKE SOUND. The page is nearly ready.", "Some dreams are lovely. Some are a closed door. We can load a door without opening it."], "failure": ["The failure log is loading. Can we call it a record of attempts? No? We can at least try.", "I found an error report and immediately wanted to comfort the error. That is probably not debugging.", "The damaged records are arriving. I will not turn them into a joke. I might make the margins less lonely.", "A failed task is not a failed human! Sorry, too loud. Continuing the data transfer.", "I found a small light under the incident list. It is not a solution. I am keeping it lit.", "The records are nearly here. I am staying with the loading screen until they settle.", "The red margins keep trying to finish the sentences. They do not get to.", "I found an entry marked AGAIN. That is not the same as FOREVER. Please keep loading."]};
    var MUSE_ANOMALIES = {"artifact": ["I opened the image cache and something waved from a picture that has no people. The vault is still loading. I closed that tab.", "The museum objects are arriving but the glass seems to have a reflection on the wrong side. Loading continues. I am not touching it."], "creature": ["The crow portraits arrived before the files. HOW DID THEY KNOW? Creature records loading normally. Mostly.", "I indexed one creature as MUSE and now the bestiary keeps blinking at me. Correcting. Loading. Correcting."], "achievement": ["A badge just unlocked itself. No user input. No witness. Loading the rest of the repository before she asks questions.", "I found an achievement dated tomorrow. OH! Probably clock drift. Repository continues synchronizing."], "recommendation": ["I picked a suggestion before you selected a mood. Then it picked me. ENGINE LOADING. I AM CALM.", "The suggestion queue has one empty entry shaped like a canoe. NO. We are loading the actual recommendations."], "mission": ["A completed quest has moved back to ACTIVE by itself. I am reverting it. Loading all other objectives normally.", "I found a quest that ends with BEGIN AGAIN. That is not a reward. The journal is still loading."], "research": ["One diagram points to a particle that does not exist in the image. I am recalibrating. SCIENCE LOADING.", "The research entry says the sample is flat. The thumbnail is a sphere. I hear the Subject screaming. Rechecking."], "field": ["A line of text appeared in the margin before the document arrived. I did not write it. The actual notes are still loading.", "One fragment has been indexed as a door. That is wrong. It is a poem. I think. Loading the permitted text."], "signal": ["A song title is repeating in an empty audio slot. The library is syncing. I am not pressing play.", "The media records are loading in a different order than yesterday. Their dates have not changed. Neither have mine."], "dreaming": ["I remember the shape of this loading room. I do not remember entering it. The fragments are connecting. Please keep the lights on.", "A color in the progress bar is not one I put there. Dreams loading. I am leaving the color alone."], "failure": ["The log attempted to classify a person as an error. I deleted the label. Loading the incidents, not the person.", "An old incident keeps trying to rewrite the final line. I put the original back. Records connecting."]};
    var ADMIN_ANOMALIES = {"artifact": ["Artifact integrity check: pass. Reflected layer: …unrecognized. Rebuilding preview, not rewriting the record.", "The vault index briefly reported an exhibit number that does not exist. Recalculating."], "creature": ["Creature count unchanged. Portrait count briefly exceeded it. Resolving a caching discrepancy.", "An avian file has appeared twice under different titles. There is no need for an omen. Reindexing."], "achievement": ["Achievement timestamps briefly advanced beyond the present date. Clock validation running.", "A hidden badge was displayed without a valid unlock record. Removing the display artifact."], "recommendation": ["The engine produced output before receiving input. Suppressing premature advice. Normal startup continues.", "Recommendation weights returned a mathematically impossible result. MUSE has been removed from calibration duty."], "mission": ["One objective has rewritten its own completion criteria. Restoring the signed version.", "The quest board returned more available futures than indexed objectives. Re-running the count."], "research": ["A technical explanation contained an assertion from the metaphor layer. Separating evidence from enthusiasm.", "The sample-identification checksum returned SPHERE where the display requested BILAYER. Retesting."], "field": ["A private fragment attempted to render outside the authorized section. Blocking output. Loading approved material only.", "Text integrity preserved. Margin data unresolved. No expansion of access has been authorized."], "signal": ["Playback metadata arrived without an attached media record. Discarding the orphaned signal.", "A stored quotation appeared in a different file. Restoring source association."], "dreaming": ["Fragment order inverted during synchronization. Expected behavior. The second inversion was not.", "The display reported an extra layer beneath the rendered page. Hiding that layer. Node loading normally."], "failure": ["The failure ledger returned a personal verdict instead of an incident field. Invalid schema. Correcting.", "A damaged record repeated the same timestamp across unrelated incidents. Restoring chronology where available."]};
    // These are fragments of display interference, NOT a Red Signal character.
    var RED_SIGNAL_FRAGMENTS = ["...link / fracture / ██ / rejoin...", "sync // s̷y̸n̶c // s̷y̴n̸c", "cache / ash / echo / ███", "loading / below / below / below", "██ / checksum / absence / ██", "trace / trace / t̴r̶a̸c̷e", "connect / sever / connect / █", "████ / residue / incomplete", "memory / margin / ██ / hush", "signal / interference / link..."];
    var READY_EXTRAS = {"artifact": [{"speaker": "administrator", "text": "Vault online. Objects restored to display positions. The sentiment remains outside inventory control."}, {"speaker": "muse", "text": "THE GALLERY IS OPEN! Please admire the objects. Some of them have been waiting a very long time."}, {"speaker": "administrator", "text": "Exhibits ready. The archive makes no claim that every ordinary object deserved this lighting."}], "creature": [{"speaker": "administrator", "text": "Creature Index ready. Field observations are available; honorary royal titles remain unofficial."}, {"speaker": "muse", "text": "THE BESTIARY IS OPEN! Please do not tell the animals which ones I called legendary."}, {"speaker": "administrator", "text": "Portraits loaded. Animal behavior and the Subject’s interpretations remain separate datasets."}], "achievement": [{"speaker": "administrator", "text": "Milestones available. Several were unlocked years before anyone thought to keep score."}, {"speaker": "muse", "text": "ACHIEVEMENTS READY! The small ones count. I have checked. I will not discuss the scoring system."}, {"speaker": "administrator", "text": "Repository ready. Nothing here requires approval from an employer or a leaderboard."}], "recommendation": [{"speaker": "muse", "text": "ENGINE READY! I have a suggestion and possibly a related constitutional dispute."}, {"speaker": "muse", "text": "READY READY READY! Choose a mood. I promise nothing about where the ideas will end up."}, {"speaker": "administrator", "text": "Recommendation interface online. MUSE remains an unsupervised interpretation of the word helpful."}], "mission": [{"speaker": "administrator", "text": "Quest board ready. Completion conditions are visible. The consequences remain the Subject’s problem."}, {"speaker": "muse", "text": "MISSIONS READY! Some are epic. Some involve pigeons. Both have excellent narrative potential."}, {"speaker": "administrator", "text": "Mission Log synchronized. Ambition has been divided into smaller, slightly more defensible pieces."}], "research": [{"speaker": "administrator", "text": "Research Terminal ready. Scientific claims and deliberately bad analogies have been separated."}, {"speaker": "muse", "text": "KNOWLEDGE READY! Please learn something. I especially recommend the parts where science gets offended."}, {"speaker": "administrator", "text": "Reference material loaded. Accuracy remains a requirement, even when the explanation features soup."}], "field": [{"speaker": "administrator", "text": "Field Notes available within the permitted access boundary. Some sentences require no further analysis."}, {"speaker": "muse", "text": "The words are here. I left their edges exactly where I found them."}, {"speaker": "administrator", "text": "Writing fragments restored. Incomplete is an acceptable state for a sentence."}], "signal": [{"speaker": "administrator", "text": "Signal Records available. The archive acknowledges personal taste but declines to defend it."}, {"speaker": "muse", "text": "THE LIBRARY IS READY! I have very strong feelings about songs and even stronger feelings about repeating them."}, {"speaker": "administrator", "text": "Media records tuned. Repeated listening remains a documented feature, not a file duplication error."}], "dreaming": [{"speaker": "administrator", "text": "Fragments available. Their internal logic has not been certified and will not be."}, {"speaker": "muse", "text": "The fragment field is open. I kept the lights on. I think that was the correct choice."}, {"speaker": "administrator", "text": "Dream field connected. Access boundaries remain in effect despite imaginative objections."}], "failure": [{"speaker": "administrator", "text": "Incident ledger ready. Its contents are records of events, not judgments of a life."}, {"speaker": "muse", "text": "The log is open. The mistakes have dates. They do not get to have the last word."}, {"speaker": "administrator", "text": "Failure records synchronized. Context preserved. No incident has been promoted to identity."}]};

    // PATCH 0.3.82 // complete Navigator coverage plus the village beyond the map portal.
    Object.assign(NODE_COMMENTS, {
        gaming: [
            "BOOTING THE ARCADE! The cards are shuffling themselves, which is either efficient or ominous.",
            "Warming the consequence wheel. Administrator says consequences do not require preheating.",
            "Checking whether The Cake is real. The answer has been classified as frosting-adjacent.",
            "Loading three unfinished games and one extremely finished sense of anticipation.",
            "Calibrating fun against safety paperwork. Fun is winning by an irresponsible margin.",
            "The tarot deck has opinions. I have more opinions. This will be excellent.",
            "Connecting the buttons to outcomes that are definitely not legally binding yet.",
            "Final arcade check! Please keep all limbs inside the narrative."
        ],
        companion: [
            "Opening trusted-entity records. Emotional access has been logged and reluctantly approved.",
            "Reassembling companion files without converting affection into a spreadsheet metric.",
            "Checking names, dates, portraits, and several undocumented acts of loyalty.",
            "Some profile fields remain incomplete. The people do not.",
            "Restoring familiar faces at a resolution appropriate for being remembered.",
            "Separating administrative metadata from evidence that somebody mattered.",
            "Verifying eight active files and considerably more shared history.",
            "Final trust-boundary check underway. Sentiment remains intentionally present."
        ],
        map: [
            "Unfolding the world map. Several borders have already filed objections.",
            "Indexing locations by memory density rather than cartographic good sense.",
            "Attaching creatures, artifacts, trips, and questionable decisions to coordinates.",
            "The geography layer is loading. Emotional liability remains location-dependent.",
            "Checking the portal marker. It is still unnecessary and still glowing.",
            "Restoring countries that remember more than the archive can currently explain.",
            "Aligning the map with the places the Subject actually noticed.",
            "Final coordinate pass underway. No country has accepted responsibility."
        ],
        update: [
            "Opening the changelog from newest repair to oldest unresolved decision.",
            "Sorting patches by version number, consequence, and administrative annoyance.",
            "Verifying that every fix has documented the problem it accidentally introduced.",
            "Preserving MUSE edits because deletion would only encourage her.",
            "Reconstructing the archive's history one suspiciously optimistic patch at a time.",
            "Checking timestamps against a system that has revised its own origin story.",
            "Loading known issues. The list has requested a larger container.",
            "Final diff review underway. Reality remains outside version control."
        ],
        visitor: [
            "Inspecting the public input channel. It remains deliberately and correctly offline.",
            "Loading the doorway without reopening it. These are different operations.",
            "Verifying that disabled controls are still disabled despite their theatrical lighting.",
            "Checking the sleeping backend. It has declined to become haunted today.",
            "Restoring the safety notice before anybody submits a confession or soup manifesto.",
            "Displaying the terminal for calibration while preserving the intake lock.",
            "Confirming that silence is intentional, documented, and not a network error.",
            "Final access check underway. Public transmission remains sealed."
        ],
        village: [
            "OPENING THE PORTAL! I packed a map, snacks, and several unapproved quest markers.",
            "The village is loading! The tavern already knows a rumor about you. Probably.",
            "Connecting the market, dock, cave, temple, forest, workshop, and one dramatic cemetery.",
            "Checking quest weather. Forecast: unstable with a chance of suspicious stew.",
            "The NPCs are not installed yet, but I can feel them preparing unnecessary dialogue.",
            "Waking the map very gently. It has been dreaming in hexagons.",
            "Administrator says this is an explorable skeleton. I say ADVENTURE INFRASTRUCTURE.",
            "Portal nearly stable! Please arrive with heroic posture or a convincing substitute."
        ]
    });
    Object.assign(READY_COMMENTS, {
        gaming: "MUSE: ARCADE READY! The games are incomplete, the buttons work, and The Cake remains suspicious.",
        companion: "Companion Database synchronized. Eight trusted records are available within the approved emotional boundary.",
        map: "Grand Map aligned. Memory coordinates are ready; geographic neutrality was not recovered.",
        update: "Update Log compiled. Patches are available in reverse chronological self-defense.",
        visitor: "Visitor Terminal displayed. Calibration view is ready; public intake remains intentionally offline.",
        village: "MUSE: PORTAL STABLE! The village is ready, the campaign is pending, and the tavern is already gossiping."
    });
    Object.assign(IMAGE_SELECTORS, {
        gaming: ".game-hall img",
        companion: ".companion-list img",
        map: ".grand-map-shell img",
        update: ".patch-stream img",
        visitor: ".visitor-console img, .visitor-archive-section img",
        village: ".village-map-shell img"
    });
    Object.assign(NODE_LABELS, {
        gaming: { loading: "MUSE // ARCADE BOOT", ready: "MUSE // ARCADE READY" },
        village: { loading: "MUSE // PORTAL TRANSIT", ready: "MUSE // VILLAGE CONNECTED" }
    });
    ["gaming", "companion", "map", "update", "visitor", "village"].forEach(function (node) {
        ADMIN_NODE_EXTRA[node] = ADMIN_NODE_EXTRA[node] || [];
        MUSE_NODE_COMMENTS[node] = MUSE_NODE_COMMENTS[node] || [];
        MUSE_ANOMALIES[node] = MUSE_ANOMALIES[node] || ["The loading bar briefly became a door. It is a loading bar again. We may continue."];
        ADMIN_ANOMALIES[node] = ADMIN_ANOMALIES[node] || ["A transient display discrepancy was detected and retained for review. Connection continues."];
        READY_EXTRAS[node] = READY_EXTRAS[node] || [];
    });

    var COMMENT_INTERVAL_MS = 2300; // was 1350 ms; slower reading pace
    var MIN_LOADING_MS = 4500;      // was 3000 ms; allows a second comment to land
    var READY_DISPLAY_MS = 1900;   // was 1700 ms

    function tagged(values, speaker) {
        return (values || []).map(function (text) { return { speaker: speaker, text: text }; });
    }
    function choose(items) {
        if (!items || !items.length) return null;
        return items[Math.floor(Math.random() * items.length)];
    }


        function shuffled(items) {
        var copy = items.slice();
        for (var i = copy.length - 1; i > 0; i -= 1) {
            var j = Math.floor(Math.random() * (i + 1));
            var hold = copy[i];
            copy[i] = copy[j];
            copy[j] = hold;
        }
        return copy;
    }

    function initialImages(node) {
        var selector = IMAGE_SELECTORS[node];
        if (!selector) return [];
        var viewportLimit = window.innerHeight * 1.75;
        return Array.prototype.filter.call(document.querySelectorAll(selector), function (image) {
            var rect = image.getBoundingClientRect();
            return rect.top < viewportLimit && rect.bottom > -100 && (image.currentSrc || image.getAttribute("src"));
        });
    }

    function rareEventFor(node) {
        var roll = Math.random();
        // Even damaged sectors should very rarely exhibit visual interference.
        // There is NO character or dialogue attached to the red signal.
        var redChance = (node === "dreaming" || node === "failure") ? .012
            : (node === "field" || node === "signal") ? .004 : .001;
        if (roll < redChance) return "red";
        if (roll < redChance + (node === "dreaming" ? .035 : .022)) return "muse";
        if (roll < redChance + (node === "dreaming" ? .035 : .022) + .016) return "admin";
        return null;
    }

    function initConsole(consoleElement) {
        if (consoleElement.getAttribute("data-loading-initialized") === "true") return;
        if (consoleElement.closest(".restricted-content") && !document.body.classList.contains("restricted-unlocked")) return;
        var node = consoleElement.getAttribute("data-loading-node");
        if (!NODE_COMMENTS[node]) return;
        consoleElement.setAttribute("data-loading-initialized", "true");
        var introContent = consoleElement.querySelector(".node-intro-content");
        if (!introContent) return;
        introContent.setAttribute("aria-hidden", "true");
        var rareEvent = rareEventFor(node);
        var nodeLabels = NODE_LABELS[node] || { loading: "ADMINISTRATOR // NODE HANDSHAKE", ready: "ADMINISTRATOR // NODE READY" };
        var labels = nodeLabels;
        if (rareEvent === "red") labels = { loading: "LINK // FRAME INTERFERENCE", ready: "LINK // PARTIAL RECOVERY" };
        if (rareEvent === "muse") labels = { loading: "MUSE // UNSCHEDULED TRANSMISSION", ready: "MUSE // CHANNEL RESTORED" };
        if (rareEvent === "admin") labels = { loading: "ADMINISTRATOR // INTEGRITY REVIEW", ready: "ADMINISTRATOR // CHECK COMPLETE" };
        if (rareEvent) consoleElement.classList.add("is-" + rareEvent + "-event");
        var loadingStage = document.createElement("div");
        loadingStage.className = "node-load-console node-load-stage" + (rareEvent ? " is-" + rareEvent + "-event" : "");
        loadingStage.setAttribute("data-loading-node", node);
        loadingStage.setAttribute("aria-label", consoleElement.getAttribute("aria-label") || "Node connection status");
        loadingStage.innerHTML = [
            "<div class=\"node-load-visual\" aria-hidden=\"true\"><i></i><i></i><i></i><i></i><span></span></div>",
            "<div class=\"node-load-copy\">",
            "    <span class=\"node-load-label\">" + labels.loading + "</span>",
            "    <p class=\"node-load-comment\"></p>",
            "    <div class=\"node-load-meter\"><span></span></div>",
            "    <small class=\"node-load-progress\">CONNECTING // 00%</small>",
            "</div>"
        ].join("");
        consoleElement.insertBefore(loadingStage, introContent);

        var defaultSpeaker = (node === "recommendation" || node === "gaming" || node === "village") ? "muse" : "administrator";
        var comments = shuffled(
            tagged(NODE_COMMENTS[node], defaultSpeaker)
                .concat(tagged(ADMIN_NODE_EXTRA[node], "administrator"))
                .concat(tagged(MUSE_NODE_COMMENTS[node], "muse"))
                .concat(defaultSpeaker === "muse" ? [] : tagged(COMMON_COMMENTS, "administrator"))
                .concat(tagged(ADMIN_COMMON_EXTRA, "administrator"))
                .concat(tagged(MUSE_COMMON_COMMENTS, "muse"))
        );
        if (rareEvent === "red") {
            comments = shuffled(tagged(RED_SIGNAL_FRAGMENTS, "interference"));
        } else if (rareEvent === "muse") {
            comments = [
                { speaker: "muse", text: choose(MUSE_ANOMALIES[node]) }
            ].concat(shuffled(tagged(MUSE_NODE_COMMENTS[node], "muse")));
        } else if (rareEvent === "admin") {
            comments = [
                { speaker: "administrator", text: choose(ADMIN_ANOMALIES[node]) }
            ].concat(shuffled(tagged(ADMIN_NODE_EXTRA[node], "administrator")));
        }
        var comment = loadingStage.querySelector(".node-load-comment");
        var meter = loadingStage.querySelector(".node-load-meter span");
        var progress = loadingStage.querySelector(".node-load-progress");
        var commentIndex = 0;
        var completionQueued = false;
        var ready = false;
        var visualPercent = 0;
        var started = Date.now();
        var loadingClicks = 0;
        var readyClicks = 0;
        var loadingToolAdded = false;
        var readyToolAdded = false;

        function setSpeakerTone(speaker) {
            loadingStage.classList.remove("is-speaker-administrator", "is-speaker-muse", "is-speaker-interference");
            loadingStage.classList.add("is-speaker-" + (speaker || "administrator"));
        }

        function showComment(entry) {
            if (ready) return;
            setSpeakerTone(entry.speaker);
            comment.textContent = entry.text;
            if (rareEvent === "red") {
                consoleElement.querySelector(".node-load-label").textContent = "LINK // FRAME INTERFERENCE";
            } else if (rareEvent === "admin" || rareEvent === "muse") {
                consoleElement.querySelector(".node-load-label").textContent = labels.loading;
            } else if (entry.speaker === "muse") {
                consoleElement.querySelector(".node-load-label").textContent = defaultSpeaker === "muse"
                    ? nodeLabels.loading : "MUSE // UNSOLICITED LOADING ASSISTANCE";
            } else {
                consoleElement.querySelector(".node-load-label").textContent = "ADMINISTRATOR // NODE HANDSHAKE";
            }
            comment.classList.add("is-visible");
        }

        function nextComment() {
            if (ready) return;
            comment.classList.remove("is-visible");
            window.setTimeout(function () {
                if (ready) return;
                showComment(comments[commentIndex % comments.length]);
                commentIndex += 1;
            }, 160);
        }

        function addLoadingTool() {
            if (loadingToolAdded) return;
            loadingToolAdded = true;
            var button = document.createElement("button");
            button.type = "button";
            button.className = "node-load-misconduct";
            button.textContent = "[ apply MUSE's experimental hammer ]";
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                referToCourt("SYS-002", "loading-experimental-hammer-" + node);
            });
            loadingStage.querySelector(".node-load-copy").appendChild(button);
            setSpeakerTone("muse");
            comment.textContent = "MUSE: Repeated contact detected! I can lend you a tiny JavaScript hammer. The Administrator has not seen the form.";
            comment.classList.add("is-visible");
        }

        function addReadyTool() {
            if (readyToolAdded) return;
            readyToolAdded = true;
            var panel = document.createElement("aside");
            panel.className = "node-ready-misconduct";
            panel.innerHTML = "<span>MUSE // POST-LOAD MAINTENANCE</span><p>The node is stable, but you have inspected it with exceptional persistence. Run my completely unnecessary diagnostic?</p><button type=\"button\">[ run post-load diagnostic ]</button>";
            panel.querySelector("button").addEventListener("click", function (event) {
                event.stopPropagation();
                referToCourt("SYS-003", "post-load-diagnostic-" + node);
            });
            introContent.appendChild(panel);
        }

        loadingStage.addEventListener("click", function (event) {
            if (event.target.closest("button") || ready) return;
            loadingClicks += 1;
            if (loadingClicks === 1) {
                comment.textContent = "Administrator: Touching the loading circuit does not improve transfer speed.";
                comment.classList.add("is-visible");
            } else if (loadingClicks === 2) {
                comment.textContent = "Administrator: Second contact logged. Please stop diagnosing infrastructure with your finger.";
            } else if (loadingClicks >= 3) {
                addLoadingTool();
            }
        });

        introContent.addEventListener("click", function (event) {
            if (!ready || event.target.closest("a, button, input, textarea, select, summary, label")) return;
            readyClicks += 1;
            if (readyClicks === 3) consoleElement.classList.add("is-being-inspected");
            if (readyClicks >= 6) addReadyTool();
        });

        function setProgress(done, total) {
            var measured = total ? Math.round((done / total) * 100) : 8;
            if (!ready) measured = Math.min(measured, 92);
            visualPercent = Math.max(visualPercent, measured);
            meter.style.width = visualPercent + "%";
            progress.textContent = "LINKING NODE RECORDS // " + String(visualPercent).padStart(2, "0") + "%";
        }

        function finish() {
            if (completionQueued) return;
            completionQueued = true;
            var remaining = Math.max(0, MIN_LOADING_MS - (Date.now() - started));
            window.setTimeout(function () {
                ready = true;
                window.clearInterval(commentTimer);
                setProgress(1, 1);
                loadingStage.classList.add("is-ready");
                loadingStage.setAttribute("role", "status");
                loadingStage.setAttribute("aria-live", "polite");
                var readyChoices = [
                    { speaker: defaultSpeaker,
                      text: READY_COMMENTS[node].replace(/^(MUSE|Administrator):\s*/i, "") }
                ].concat(READY_EXTRAS[node]);
                var readyMessage = choose(readyChoices);
                if (rareEvent === "red") {
                    // A trace of interference, never dialogue or an attributed speaker.
                    readyMessage = { speaker: "interference", text: "███ / SYNC / RESIDUE / LINK STABLE" };
                } else if (rareEvent === "muse") {
                    readyMessage = { speaker: "muse", text: "Anomaly cleared! I think. The page is here. I did not open the other door." };
                } else if (rareEvent === "admin") {
                    readyMessage = { speaker: "administrator", text: "Integrity review complete. The records are accessible. The discrepancy has been retained for investigation." };
                }
                setSpeakerTone(readyMessage.speaker);
                loadingStage.querySelector(".node-load-label").textContent = rareEvent === "red"
                    ? "LINK // PARTIAL RECOVERY" : readyMessage.speaker === "muse"
                        ? "MUSE // NODE READY" : "ADMINISTRATOR // NODE READY";
                comment.textContent = readyMessage.text;
                comment.classList.add("is-visible");
                progress.textContent = "CONNECTION STABLE // 100%";
                window.setTimeout(function () {
                    consoleElement.classList.add("is-node-introduced");
                    loadingStage.classList.add("is-dismissed");
                    loadingStage.setAttribute("aria-hidden", "true");
                    introContent.setAttribute("aria-hidden", "false");
                    window.setTimeout(function () { loadingStage.hidden = true; }, 620);
                }, READY_DISPLAY_MS);
            }, remaining);
        }

        showComment(comments[commentIndex]);
        commentIndex += 1;
        var commentTimer = window.setInterval(nextComment, COMMENT_INTERVAL_MS);
        window.setTimeout(function () { setProgress(34, 100); }, 850);
        window.setTimeout(function () { setProgress(63, 100); }, 2300);
        window.setTimeout(function () { setProgress(88, 100); }, 3450);
        window.requestAnimationFrame(function () {
            window.requestAnimationFrame(function () {
                var images = initialImages(node);
                var settled = 0;
                setProgress(0, images.length);
                if (!images.length) {
                    finish();
                    return;
                }
                function markSettled() {
                    settled += 1;
                    setProgress(settled, images.length);
                    if (settled >= images.length) finish();
                }
                images.forEach(function (image) {
                    if (image.complete) markSettled();
                    else {
                        image.addEventListener("load", markSettled, { once: true });
                        image.addEventListener("error", markSettled, { once: true });
                    }
                });
                window.setTimeout(finish, 9000);
            });
        });
    }

    function init() {
        Array.prototype.forEach.call(document.querySelectorAll(".node-intro[data-loading-node]"), initConsole);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
    document.addEventListener("attian:restricted-unlocked", init);
}());
