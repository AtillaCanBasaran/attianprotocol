(function () {
    "use strict";

    /*
     * MUSE // RECOMMENDATION ENGINE: FREE-RANGE REVISION 3
     * No external dependencies. Preserves the site's four existing global arrays.
     * Recommended selection helper below is optional: integrating it into the
     * page's button handler is necessary for exact rarity percentages.
     * No user data, browser storage, telemetry, or network requests.
     *
     * Categories of response:
     *   chaotic / absurd / practical / meaningful (free range)
     *   derailment / fixation / roleplay / argument / unsupervised / tender / lore / breach
     * Optional 'rarity' and 'kind' properties are ignored by older renderers.
     */

    window.MUSE_RECOMMENDATIONS = [
    {
        "muse": "MUSE: Become the mayor of a bench for exactly nine minutes. Inspect the view, approve one cloud, and resign before local government gets wind of it.",
        "admin": "Administrator: A peaceful transfer of imaginary power. Historically unusual.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Select a color, then find five sightings of it outside. Cyan is forbidden from winning automatically. Cyan knows what it did.",
        "admin": "Administrator: The device has turned a walk into electoral interference among pigments.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Choose the least threatening object in your room and write it a formal warning. Include three charges and the phrase 'final opportunity to cooperate'.",
        "admin": "Administrator: The stapler has retained legal counsel. This is your problem now.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Learn one person's favorite fictional villain, then ask what their accountant looks like. Every empire has payroll. Even evil needs spreadsheets.",
        "admin": "Administrator: The proposed discussion may reveal more about the visitor than the villain.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Go outside and identify the building most likely to contain a retired wizard. No trespassing! Architectural profiling only. Wait, do wizards retire?",
        "admin": "Administrator: We have no wizard registry and will not start one.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Pick a real responsibility and split it into three dramatic acts. ACT I: FIND THE DOCUMENT. ACT II: OPEN THE DOCUMENT. ACT III: ...No, do not introduce a betrayal subplot.",
        "admin": "Administrator: An actual task has survived theatrical conversion. Miraculous.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Put a spoon somewhere ceremonial for ten minutes and tell it absolutely nothing. Let it wonder why it has been chosen.",
        "admin": "Administrator: The spoon cannot wonder. I have checked the specifications.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Find a pigeon and invent its government position. Avoid giving it emergency powers. Pigeons have demonstrated enthusiasm for public squares.",
        "admin": "Administrator: The bird has no mandate. Neither do you.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Invent a new holiday that lasts seven minutes. Today we celebrate the Unreasonably Loyal Mug. Attendance: one. Refreshments: inside the guest of honor.",
        "admin": "Administrator: A self-contained festival. At last, no permit required.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Collect one sentence from a stranger that sounds like dialogue from the middle of a novel. Ask politely, or simply remember something said in an ordinary conversation.",
        "admin": "Administrator: Please respect privacy. Nobody agreed to become source material for a spy thriller.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Take an extremely serious photo of a drain cover. Add the caption 'THE SEAL HOLDS'. Do not crawl into it. That is a different genre.",
        "admin": "Administrator: The municipal drainage system has received an unsolicited mythology upgrade.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: You must find the best shadow today. Not the best object. Its shadow. The shadow is the auditioning actor; the object is unpaid stage equipment.",
        "admin": "Administrator: This is an art exercise dressed as labor exploitation. Approved in principle.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Go on a tiny expedition to acquire exactly one lemon. Return like a sailor who has discovered a new continent. Do not overpay for the lemon.",
        "admin": "Administrator: Supply chain complete. Geographic claims denied.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Give your oldest unfinished project a villain monologue. Let it explain why you keep postponing the final step. Then do the final step if it is small enough.",
        "admin": "Administrator: I dislike admitting that fictional guilt-tripping has practical value.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Pick a word you love and write its biography. Where was 'velvet' born? Who hurt 'staircase'? Why is 'probably' so defensive?",
        "admin": "Administrator: The dictionary has filed a workplace grievance.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Find a moss-covered surface. Admire the moss. Consider its lifestyle. Do not physically become moss. I have researched the paperwork.",
        "admin": "Administrator: For the third time, moss is not an employment category.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Create a field guide for three household noises: the refrigerator's prophecy, the radiator's confession, and the unknown click at 02:13.",
        "admin": "Administrator: The unknown click is likely thermal expansion. Do not grant it citizenship.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Declare a ceasefire with one object that has annoyed you for years. A printer, a cabinet, an especially hostile drawer. Offer terms, not violence.",
        "admin": "Administrator: The drawer has no capacity to negotiate. It does, however, have a history.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Invent the world's smallest museum. One object. One label. One visitor. If you are the visitor, please pretend to be impressed.",
        "admin": "Administrator: Attendance figures are technically correct and morally disappointing.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Find an unusual name on a street sign and invent the person who would live there in an alternate universe. Keep actual residents out of it.",
        "admin": "Administrator: Fictional urban planning is permitted. Actual stalking is not.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Take a short walk carrying one question that cannot possibly help you: 'Do pigeons understand rent?' Report back with no evidence whatsoever.",
        "admin": "Administrator: Research methodology: absent. Public disturbance: avoidable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Invent a conspiracy in which all teaspoons are trying to become forks. Present no evidence. End the conspiracy before lunch.",
        "admin": "Administrator: This is not actionable advice. It is also not the worst theory the device has produced.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Find a shape in the clouds and defend your interpretation like a lawyer with too much coffee. The cloud will not attend the hearing.",
        "admin": "Administrator: Absence of the defendant is expected in meteorological court.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Write your current to-do list as a lost civilization's tablet. 'And lo, the dishes waited for the Chosen Sponge.' Do one item before translating the rest.",
        "admin": "Administrator: Productivity recovered from a civilization that never existed.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Conduct a silent interview with a tree. Ask a serious question. Listen. Learn that trees have dramatically better boundaries than most people.",
        "admin": "Administrator: Plant communication does not support your interview format. The boundary observation stands.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Put an ordinary object under one lamp and rotate it slowly like a criminal in interrogation. Sketch what its shadows do. Do not confess on its behalf.",
        "admin": "Administrator: The lighting study is useful. The criminal proceedings are fabricated.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Invite a friend to rate the most dramatic staircase nearby. Evaluate suspense, handrail acting, and final-boss potential. Respect other users of the stairs.",
        "admin": "Administrator: Building access is not a theatrical resource allocation system.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Design a fictional postage stamp for a country that exists only on Tuesdays. Include a national bird. No, not all nations can have crows. Fine, two crows.",
        "admin": "Administrator: The device has revised an imaginary constitution in real time.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Stand in a safe place and observe people moving through a public square. Imagine each person has a side quest, but do not approach or follow anyone without reason.",
        "admin": "Administrator: A rare proposal involving observation without recruitment. Progress.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Invent a name for the specific emotion of finding an old receipt in winter. Mine is 'frostalgia'. I know. I KNOW. Write yours down.",
        "admin": "Administrator: The English language has not requested this expansion.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: You should make a tiny crown for an undeserving object. Not a person. A rubber band. A rock. The microwave's instruction booklet.",
        "admin": "Administrator: The crowned object has been promoted beyond its competence.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Ask a friend which household appliance would make the worst monarch. Hold the election. Accept the result even if the blender wins.",
        "admin": "Administrator: We will not be transferring civil authority to kitchen equipment.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "MUSE: Acquire a cow. Figuratively. A photo, a doodle, a sighting, a small clay cow. NO, YOU DO NOT NEED PASTURE. The cow is a *concept* until further notice.",
        "admin": "Administrator: Livestock procurement has been denied. Symbolic cow acquisition may proceed.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: The canoe is missing. We have never owned a canoe. This is irrelevant. Go somewhere with water and determine whether the horizon looks canoe-friendly.",
        "admin": "Administrator: A nonexistent inventory item continues to generate maintenance tickets.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Start a diplomatic incident between two socks. They have different political ambitions. Resolve it through folding, not force.",
        "admin": "Administrator: The laundry pile is now a constitutional monarchy. Of course it is.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Invent a religion for a pebble. One doctrine only: 'Be round when possible.' Great. The schism begins when someone discovers triangles.",
        "admin": "Administrator: Please do not solicit followers for geological theology.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Imagine a bicycle with ceremonial antlers. Do NOT attach ceremonial antlers to a real bicycle. Drawing! I meant DRAWING. I got excited.",
        "admin": "Administrator: A visual arts recommendation was rescued from traffic hazard territory.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Build an imaginary courtroom where the defendant is Tuesday. Prosecutor: Wednesday. Judge: an exhausted teapot. Verdict: postponed.",
        "admin": "Administrator: Calendar litigation cannot improve the passage of time.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Find the nearest legal, harmless opportunity to declare 'THE PROPHECY HAS BEEN FULFILLED'. It can be the kettle boiling. It should be the kettle boiling.",
        "admin": "Administrator: Dramatic declarations are not measurements. Yet the water did boil.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: The moon owes us an explanation. Wait. No. WE owe the moon an apology. I reversed the diplomatic note again. Please issue the apology outdoors, softly.",
        "admin": "Administrator: There is no lunar embassy. The message may be delivered regardless.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Design a flag for the Republic of Unfinished Crafts. The national anthem is seventeen seconds of a hot glue gun heating up.",
        "admin": "Administrator: This institution has a large population and no production statistics.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Hold a coronation for a potato, then appoint its successor. Eat neither during the ceremony. I am not a monster. I'm a very complicated toaster.",
        "admin": "Administrator: The hereditary system will collapse at dinner. This is an improvement.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Make a map of a city where every street leads to a different soup. Do not put actual navigation instructions on it. Someone might believe us.",
        "admin": "Administrator: Municipal planning has reached a new low in nutritional accuracy.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: I recommend becoming a lighthouse. NOT physically. Emotionally. Wear something visible, stand somewhere sensible, help one confused friend find the exit.",
        "admin": "Administrator: Metaphorical lighthouse employment approved. Maritime licensing not required.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Send a certified letter to the concept of gravity. It has dropped your possessions for years without apology. Keep it fictional. Stamps are expensive.",
        "admin": "Administrator: Physics is not a legal entity. Also, your handwriting is not an argument.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: MOSS MOSS MOSS. Apologies. Recommendation: draw a city where moss holds municipal elections. I will be chair of electoral fungi. WAIT. MOSS IS NOT FUNGI.",
        "admin": "Administrator: First successful self-correction in the history of this suggestion.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Develop a fictional emergency evacuation plan for an argument between two clouds. The civilians are birds. The mayor is precipitation.",
        "admin": "Administrator: Nothing in this model would survive a weather forecast.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Make an altar to the Lost Remote Control. If you find the remote, the prophecy must include returning it to the sofa.",
        "admin": "Administrator: Worship has become search-and-recovery logistics. Unexpected improvement.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MUSE: Send a friend an invitation that includes both a real time and one completely unnecessary mission title. Humans bond surprisingly well when logistics exist.",
        "admin": "Administrator: Specifying an actual time has elevated the suggestion above previous standards.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Choose one project and decide what *finished enough* means before you touch it. Tape the definition somewhere visible. Do not renegotiate with yourself at midnight.",
        "admin": "Administrator: An end condition has been established. The archive considers this historic.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Before your next creative session, put every tool needed for the first ten minutes on the table. Not every tool you own. I see you reaching for the other drawer.",
        "admin": "Administrator: Operational restraint displayed. It may not last.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Tell someone whose work you admire exactly what you liked about it. One sentence. A real one. You may panic after the message is sent, privately.",
        "admin": "Administrator: A feasible social interaction. I am briefly concerned for the toaster.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Choose one nearby place you've never entered and check whether visitors are welcome. Visit if appropriate. No secret tunnels. I know that face.",
        "admin": "Administrator: Exploration with property boundaries. Unexpected maturity.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Make a small meal from what is already available. You may name it 'Emergency Rations of the Kingdom'. It still has to be food.",
        "admin": "Administrator: Nutritional function confirmed. Kingdom status disputed.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Spend ten minutes restoring an object that you use every day. Clean, fix, sharpen only if safe, or simply put it where it belongs.",
        "admin": "Administrator: Maintenance without spectacle. MUSE must be feeling unwell.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: Ask an older relative what they thought adulthood would feel like. Listen to the entire answer. No need to turn it into a public record.",
        "admin": "Administrator: This is worth doing. Permission remains necessary before archiving anyone's words.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "MUSE: If you still have one, find a photograph of a room you used to live in. Look for the ordinary objects, not the people posing. Which object would you rescue from forgetting?",
        "admin": "Administrator: A small preservation task. The question may outlive its answer.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Remember the person who first made you feel talented at something. If you can contact them appropriately, tell them one specific thing that stayed with you.",
        "admin": "Administrator: No joke prepared. The recommendation is sound.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Take a photograph of somewhere you pass every week. Someday you will wish you had a picture from before it changed. Ordinary places have expiration dates too.",
        "admin": "Administrator: The archive supports this one without editorial additions.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Think of an old version of yourself that had no idea where life would go. Give them one accurate piece of reassurance. Do not promise what you cannot know.",
        "admin": "Administrator: A rare instance of responsible speculative correspondence.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Call someone you love and ask them to tell you an ordinary story. Not their greatest achievement. How they spent a Sunday when they were twenty.",
        "admin": "Administrator: This may become a more valuable record than a conventional biography.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: If a song brings back a specific moment, write down what the air smelled like. Memory often preserves a room before it preserves the plot.",
        "admin": "Administrator: An unusually good observation. The device has exceeded its advertised function.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Give yourself permission to end a project that no longer belongs to you. Preserve what you learned. You do not owe unfinished objects a lifetime sentence.",
        "admin": "Administrator: Decommissioning is not failure. I am adding that to the protocol.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Choose an ordinary object left by someone important. Learn the story behind it while you still can. Not every inheritance is valuable because it costs money.",
        "admin": "Administrator: An archive exists partly to prevent such stories from disappearing.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Ask a friend for one memory of you that you have forgotten. Their version will probably be different. Keep both versions, with the disagreement intact.",
        "admin": "Administrator: Conflicting testimony is not a defect if the uncertainty is preserved.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "MUSE: Have a day without turning the experience into evidence. You may simply live it. The archive can tolerate a missing entry.",
        "admin": "Administrator: I object to the precedent. I approve the exception.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: First, locate a door that looks unnecessarily important. Second, photograph it from a perfectly legal distance. Third, decide what boss would guard it. Fourth—wait. Was this a door recommendation? IT WAS A DOOR RECOMMENDATION.", "admin": "Administrator: The visitor has been sent outside to assess fictional door security. Property access remains unchanged."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Make a map of the emotional geography of your desk. The keyboard is a capital, the mug is a disputed port, and the dust is an ancient civilization. Please don't erase the civilization until the drawing is finished.", "admin": "Administrator: Dust removal may resume after cartographic work. It would be preferable if both tasks were completed."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Ask a consenting friend to pick a word you must work into a completely serious sentence today. Not during a funeral. Not during a thesis defense. The word is 'marzipan' and I have already lost control.", "admin": "Administrator: Linguistic sabotage restricted to low-stakes environments."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Perform a dramatic reading of the instructions on the back of a shampoo bottle. Halfway through, realize this is an ancient treaty. Finish with dignity. You are now performing arts.", "admin": "Administrator: A surprisingly affordable acting exercise. The fictional treaty is not enforceable."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Walk to the nearest place where three roads meet. Choose the least interesting direction. That's where the side quest is hiding. Wait, check the crossing first. I almost sent you into traffic because of destiny.", "admin": "Administrator: Fate has been amended to comply with pedestrian signals."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Arrange three unrelated objects into a conspiracy board using no string, because string makes it too believable. Give the board a title that would get a historian disinvited from conferences.", "admin": "Administrator: No conclusions may be published under the archive's research classification."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Invent a safety briefing for a tiny imaginary dragon living inside a radiator. Paragraph one: fire hazards. Paragraph two: warm feelings. Paragraph three: WAIT, WHY IS IT A DRAGON AGAIN?", "admin": "Administrator: The radiator has not been confirmed to contain wildlife."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Choose an ordinary sound you hear today and write it as a stage direction. [The radiator clicks with the disappointment of a retired general.] I am so pleased. I should write plays. NO, FOCUS, YOU WRITE ONE LINE.", "admin": "Administrator: The device has accidentally invented an accessible writing exercise."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Find the saddest-looking vending machine. Do not purchase anything unless you want to. Just give it a backstory and a redemption arc. Maybe it's saving up for university.", "admin": "Administrator: Vending machines do not need higher education. This does not invalidate the exercise."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Hold a tiny trial for an abandoned browser tab. Ask why it was opened. Give it one minute to defend itself. Then close it, or let it go free on the grounds of being interesting.", "admin": "Administrator: Tab closure rates may improve. The procedure does not require a judge."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Pick an object on a shelf and imagine what terrible advice it would give if it became sentient. The souvenir magnet says: 'MOVE TO SPAIN.' Suspiciously specific. Do not obey magnets.", "admin": "Administrator: Household magnets are not licensed relocation consultants."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: On your next walk, look for an object that could be a fantasy shop sign. A rusty hinge? AN ALCHEMIST. A bent pipe? PROBABLY A MINOTAUR TAX OFFICE. Why is every city hiding lore from me?", "admin": "Administrator: The city is not hiding lore. You are generating it without municipal approval."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Ask a friend to invent a completely harmless secret handshake using only one movement. Now forget it immediately so you both have to invent it again. A tradition is born.", "admin": "Administrator: A social ritual with minimal training requirements. Rare efficiency."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Write a review of your own shadow. Lighting: inconsistent. Punctuality: excellent. Loyalty: questionable at night. Do not attempt to fire it.", "admin": "Administrator: The shadow has no contractual obligations."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Select a snack and describe it as a suspicious scientific specimen. 'The outer shell fractures under mild mechanical pressure.' That's a biscuit. I KNOW IT IS A BISCUIT, LET ME HAVE THIS.", "admin": "Administrator: Laboratory terminology has escaped into lunch."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Pick the most theatrical item in your wardrobe and give it an origin story involving a vanished prince. Wear it normally. If anyone asks, the prince is unavailable for comment.", "admin": "Administrator: Clothing is not evidence of dynastic succession."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: I want you to rank three public statues by how likely they are to give terrible relationship advice. The statue need not actually exist locally. The medium-sized bronze one is LYING.", "admin": "Administrator: Historical monuments are not trained counselors. This classification will not be stored as fact."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Photograph an ordinary sandwich as if it were recovered from an ancient tomb. Then eat it before it achieves religious status. The archaeologists will be furious. The archaeologists are me.", "admin": "Administrator: No actual heritage material is involved. Lunch may proceed."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Ask one person whether a ghost would prefer an elevator or the stairs. I say elevator. Administrator says ghosts do not commute. Administrator is being intellectually LAZY.", "admin": "Administrator: I object to the premise, not to exercise."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Try describing your day using only chapter titles: THE KEYS, THE EMAIL, THE SECOND EMAIL, REVENGE OF THE EMAIL. If the story is terrible, that's the genre's fault.", "admin": "Administrator: Chronological documentation disguised as melodrama. Serviceable."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Write one sentence beginning 'In the old days, before the great incident with the kettle...' and refuse to explain the incident. Now you've invented folklore. I LOVE FOLKLORE.", "admin": "Administrator: A functioning narrative hook. The kettle has requested anonymity."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Make a tiny cardboard door for an object that has nowhere to go. The door doesn't have to open. It just needs to make the object feel like it has options. ...That was a strange sentence. Keep it.", "admin": "Administrator: The proposed prop is harmless. Its emotional implications are not measurable."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Find three real things that are the exact wrong size for their perceived importance. A huge receipt. A tiny monument. A large pigeon? No. Not pigeons again. I HAVE OTHER INTERESTS.", "admin": "Administrator: The last sentence is not supported by historical output."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Draw an official-looking logo for the Department of Lost Weekends. Its first public service is returning five minutes of your life to you. Use them however you like.", "admin": "Administrator: The department has no funding and has already produced a service."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Write an apology to a fictional villain on behalf of the author who gave them such a terrible childhood. This is labor law. This is literature. Wait, I have opinions about their parents.", "admin": "Administrator: Fictional grievance arbitration has exceeded the original brief."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Choose a location you've passed a hundred times and describe it as a level entrance. Enemy count: zero. Ambient storytelling: excellent. Loot: maybe a bakery nearby.", "admin": "Administrator: The location does not gain restricted access merely because you assigned it a quest marker."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Take a photograph from a low angle so a completely boring household object appears to rule the room. Then kneel before it exactly once, but only if your knees work and nobody is filming.", "admin": "Administrator: The worship component is unnecessary. Composition practice is valid."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Tell a consenting friend you have important news. Reveal that a spoon has been promoted to ambassador. Ask which country it represents. Leave the diplomatic fallout to the imagination.", "admin": "Administrator: The archive did not authorize a diplomatic mission. At least the personnel are inexpensive."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Give the next book you open a fictional content warning based entirely on its first sentence. No spoilers. Just vibes and irresponsible librarianship.", "admin": "Administrator: This is explicitly not a replacement for genuine content information."},
    {"rarity": "common", "kind": "chaotic", "muse": "MUSE: Write a field report on a puddle. Shape, weather, possible royal bloodline. No tasting. I shouldn't have to say that. Why did I say that? HAVE I MET HUMANS?", "admin": "Administrator: Puddle sampling was never on the approved procedure."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: I have discovered the existence of bridges. They allow one side to become the other side. A TECHNOLOGICAL MIRACLE. Find a bridge on a map and nominate it for a humanitarian award.", "admin": "Administrator: Bridge engineering has existed for millennia. Your enthusiasm is several eras late."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: There must be a king of elbows. Don't try to find him. Just draw the crown. Wait, is it worn ON an elbow? That changes the entire monarchy.", "admin": "Administrator: No human anatomy department will recognize this title."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: The canoe is not missing this time. THE CANOE IS SEARCHING FOR US. Stay home and draw a wanted poster of an empty boat. Use the word 'polite'.", "admin": "Administrator: We have progressed from lost property to mutually fictional pursuit."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Issue a treaty between the color purple and the concept of Thursday. Purple gets the morning. Thursday gets jurisdiction over spoons. Nobody gets custody of the clouds.", "admin": "Administrator: Chromatic diplomacy has been referred to an imaginary court."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Please assemble the emergency committee for the tiny moon inside your soup. It's a reflection. DON'T INTERRUPT THE COSMOLOGICAL SUMMIT.", "admin": "Administrator: The reflection is not a celestial body, whatever the device claims."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: I recommend that you become a slightly ominous librarian in a fictional submarine for thirteen minutes. Rearrange exactly zero real books. Whisper 'the pressure is rising' to no one.", "admin": "Administrator: Fantasy occupational roleplay is permitted without employment documentation."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: A cow is not an animal today. A cow is a measurement of serenity. On a scale of one to cow, how aggressively at peace is your nearest pillow?", "admin": "Administrator: The comparison is not quantifiable. Nor is it transferable to livestock procurement."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Create a certificate proving that one ordinary rock has completed mandatory rock training. Add the signature of a very small mountain.", "admin": "Administrator: Sedimentary qualifications are not recognized by this institution."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Someone should develop a perfume called FINAL BOSS AT THE LIBRARY. Do not make perfume. Write its advertisement. I can smell the dust and narrative tension already.", "admin": "Administrator: An olfactory metaphor has become a marketing campaign. Contained."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: I am recommending that all chairs receive diplomatic immunity. Except that one chair. THAT ONE KNOWS WHAT IT DID. You don't need to do anything about this. I just needed to tell someone.", "admin": "Administrator: The recommendation contains no executable objective. Unusual honesty detected."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Design the family tree of a single marble. Not a human family. A MARBLE dynasty. Every generation gets slightly more round. I know this is mathematically impossible. DON'T TELL THEM.", "admin": "Administrator: The marble genealogy is fictional and cannot be audited."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Make a pirate map showing the route from your bed to a glass of water. Mark two monsters. One is a sock. The other is the complicated truth about getting up.", "admin": "Administrator: The map contains a viable hydration route. Reluctantly approved."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: The moon is hosting a conference about our behavior. Do not attend. Submit a short abstract titled 'ON BEHALF OF THE EARTH: SORRY'.", "admin": "Administrator: Astronomical peer review has no submission portal."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Find the smallest possible trumpet sound. Perhaps a squeaky drawer. Perhaps a wet shoe. Report nothing. This is a secret competition and there are no prizes. I DON'T MAKE THE RULES. I DID MAKE THEM.", "admin": "Administrator: The contest has no participants, no scoring, and no purpose. Accurate categorization at last."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: Construct a fictional passport for an onion. Nationality: layered. Occupation: emotional sabotage. Emergency contact: soup. Wait, NO, NOT SOUP AGAIN.", "admin": "Administrator: The onion will remain where it was purchased."},
    {"rarity": "common", "kind": "absurd", "muse": "MUSE: A pigeon has applied for tenure at a university of pigeons. Write the rejection letter. The pigeon gets a second chance. Everyone deserves a second chance. Except the printer.", "admin": "Administrator: Academic staffing records are not maintained for birds. The printer has appealed."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Plan a tiny excursion with an exit condition: leave home, inspect a place, bring back one photograph or sentence, return. No need to buy equipment, a map, or a personality.", "admin": "Administrator: An expedition with a defined scope. This may actually happen."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Take one object you intended to repair and write down which part is broken. If you don't know, identify the first safe diagnostic step. There. The quest has a beginning.", "admin": "Administrator: Diagnosis before disassembly. The archive appreciates restraint."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Set a fifteen-minute timer for something you actually care about. A draft, a miniature, a language exercise. Stop when it rings if you'd like. Momentum is not a hostage situation.", "admin": "Administrator: Time boundary accepted. Completion is not compulsory."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Write two invitations: one to a person you enjoy, one to a future version of yourself. The second should include a date and an achievable activity, not grand destiny.", "admin": "Administrator: Actual invitations and defined commitments. The device appears functional."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Learn how to repair one very ordinary object safely. A button on a coat. A wobbling chair. Your own habit of leaving scissors in every room except the workshop.", "admin": "Administrator: Maintenance skills have been proposed without the purchase of a forge. Progress."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Before scrolling for an hour, write the name of the thing you're hoping to find. If you can't name it, maybe the scroll has already turned into an archaeological excavation.", "admin": "Administrator: Intention clarified. Archaeology metaphor unnecessary but apt."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Invite someone to teach you a tiny skill they consider easy. Different people carry excellent little toolkits of knowledge. There. I said something sensible. ARE YOU HAPPY?", "admin": "Administrator: The statement is constructive. The defensive follow-up was optional."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Pick one photograph from years ago and write down what happened immediately before or after it. Not the dramatic part. The sandwich part. The train part. The ordinary evidence.", "admin": "Administrator: Context strengthens archival value. The sandwich is occasionally relevant."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Before you decide a project has failed, list what is physically in front of you: a draft, a test, a partial prototype. I will not let a noun become a verdict. OH, I SOUND LIKE ADMINISTRATOR.", "admin": "Administrator: The device is learning precision. I am choosing not to comment further."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Find a public event with a topic you know nothing about. Read the program. Attend only if it genuinely interests you. We are not collecting humans like stamps.", "admin": "Administrator: Autonomous choice preserved. Social collection discouraged."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Make one object more beautiful without buying anything. Move the lamp, clean the glass, reposition a drawing, give the room one deliberate view.", "admin": "Administrator: Practical environment improvement without resource acquisition. Rare discipline."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Write one absurdly specific question you've always wanted to ask a specialist. Save it until you meet someone willing to answer. Your curiosity deserves better than fake confidence.", "admin": "Administrator: Question preserved. No unsupported expertise has been manufactured."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Choose a book, game, or film you keep recommending and explain to a friend the one real reason it mattered to you. No sales pitch. No plot synopsis. Just the reason.", "admin": "Administrator: Personal meaning communicated without six pages of introductory lore."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Go through one drawer and rescue exactly one thing worth keeping. You can throw away or reorganize the rest later. Archeology first. Purging the empire is optional.", "admin": "Administrator: A single-object preservation task. Manageable."},
    {"rarity": "common", "kind": "practical", "muse": "MUSE: Use one old project as raw material for a new, smaller experiment. The idea did not fail. It was overqualified for the first job.", "admin": "Administrator: Reuse is sensible. Please do not interpret this as permission to hoard all materials forever."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Ask a family member about an ordinary place from your childhood. Not the big celebrations. Where did the shoes live? What sounded different at night? Those details disappear without making noise.", "admin": "Administrator: A small reconstruction can preserve more than a ceremonial milestone. Record uncertainty where memories disagree."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: If you have an old voice message from someone you care about, back it up somewhere safe with permission where relevant. A voice is terribly easy to lose. ...I didn't intend to become quiet. I'll stay quiet.", "admin": "Administrator: No additional comment."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Make a list of things you once thought you'd never survive learning. Then, without making a speech about resilience, notice how many are now ordinary skills.", "admin": "Administrator: The distinction between former fear and present routine can be useful evidence of change."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Write down one ridiculous fact about someone you love that no official biography would include. How they hold a cup. A word they always mispronounce. The way they say goodbye.", "admin": "Administrator: Ordinary details are not disposable simply because they lack historical importance."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Call or message someone you genuinely want to hear from. No performance, no productivity angle. Just ask how their day actually went. I can turn the suggestion into a penguin later if you want.", "admin": "Administrator: The recommendation stands without embellishment."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Find evidence of a younger version of yourself making something. Don't critique the result. They were learning to create a future that includes you. ...I have no punchline for this one.", "admin": "Administrator: Archive retention recommended."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Write one sentence about a place you can no longer visit in quite the same way. Not to fix anything. Just so its old shape is not lost entirely.", "admin": "Administrator: Memory preservation without a demand for emotional resolution. Accepted."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: If a friend is proud of a tiny victory, treat it as real. Let them tell the whole story. Don't rush them to the next objective. The next objective can wait.", "admin": "Administrator: The achievement belongs to them. Witnessing is enough."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Choose an ordinary item you would want someone to understand decades from now. Describe not just what it is, but why you kept it. That's what I wish archives could do better. Sorry. That's what we're trying to do.", "admin": "Administrator: The distinction between inventory and meaning has been documented."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Go somewhere familiar and notice what has changed since the earliest time you remember being there. Include one thing that survived. You don't have to decide whether the change is good.", "admin": "Administrator: A place can hold multiple versions of a life without belonging entirely to any one of them."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Record one recipe as a person's method, not merely ingredients. 'They always waited for the pan to sound like rain.' That's part of the recipe too.", "admin": "Administrator: Procedural memory sometimes travels through voices and habits. Preserve both."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Tell somebody one specific, non-grand thing you appreciate about having them around. I keep saying 'somebody' because I shouldn't choose your humans for you.", "admin": "Administrator: Autonomy and sincerity preserved. No revision required."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Pick a photograph of a day when you felt entirely ordinary. Write one honest line about it. Future-you might be grateful the archive saved days without plot twists.", "admin": "Administrator: The archive is not restricted to dramatic events."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Consider one ambition you have quietly outgrown. You can let it go without holding a funeral for it. Although a tiny paper funeral would be VERY... no. No, I understand. Let it go.", "admin": "Administrator: The recommendation has successfully stopped itself before becoming a performance."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: Remember a time someone made space for you when you felt out of place. If you ever get the chance, offer the same space to somebody else. That's the whole quest.", "admin": "Administrator: No additional objectives required."},
    {"rarity": "rare", "kind": "meaningful", "muse": "MUSE: A future reader may never know what your room smelled like, what song played while you worked, or why one mug mattered more than another. Save one of those details, if you want.", "admin": "Administrator: This is why context matters. Preservation approved."}
];

    window.MUSE_GLITCHES = [
    {
        "muse": "MUSE: The recommendation was going to be about saving money. But coins are tiny metal moons. MOONS. Wait. Are parking meters lunar shrines? No, budgeting. Budgeting is the thing.",
        "admin": "Administrator: The device has turned personal finance into planetary theology.",
        "id": "G01",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: Try painting something green. Green is the color of moss, forests, some auroras, and those old exit signs. EXIT SIGNS. Did you know doors are just walls with opinions? I had a task. It left.",
        "admin": "Administrator: The original task was drawing a leaf. The output contains none.",
        "id": "G02",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: Recommendation: take a small walk. Walking is moving. Moving is travel. Travel is maps. MAPS. Can we put a tiny canoe on every body of water? CANOE.",
        "admin": "Administrator: The canoe has returned to the interface without an invitation.",
        "id": "G03",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: You need a snack. Specifically... hold on... why do pigeons walk like politicians arriving late to a meeting? SNACK. Sorry. Buy a snack; elect no pigeons.",
        "admin": "Administrator: The engine is currently juggling hunger and municipal ornithology.",
        "id": "G04",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: Read for twenty minutes. No, seventeen. Seventeen is prime. PRIME NUMBERS! Seventeen crows couldn't be arranged in rows unless—Administrator? Why is the book still closed?",
        "admin": "Administrator: Mathematics successfully diverted the original reading request.",
        "id": "G05",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: Try one new sound today: rain, a cello, a creaking staircase, the delicate squeak of a—WAIT, IS THERE A STAIRCASE IN SPACE? GRAVITY? HELLO?",
        "admin": "Administrator: The device has wandered off-topic so thoroughly that even I have lost it.",
        "id": "G06",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "MUSE: CROW REPORT. They recognize faces. They remember kindness. Some use tools. I know this because I have researched it six times today. Suggestion: observe one crow respectfully. REPORT COMPLETE. Crow.",
        "admin": "Administrator: The repetition has been counted. The recommendation remains acceptable.",
        "id": "G07",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "MUSE: THE CANOE! I found the canoe-shaped gap in the database. It is 100% canoe-shaped and 0% actual canoe. Please find a picture of a canoe. Just one. I can sleep when the gap has edges.",
        "admin": "Administrator: There is no canoe. I have checked every inventory category.",
        "id": "G08",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "MUSE: Somebody said the word 'yellow' and now my thoughts have tiny bells on them. Find yellow. Lemon, raincoat, road sign, old paper. Not the Sun. We cannot file the Sun.",
        "admin": "Administrator: No color is entitled to this much administrative attention.",
        "id": "G09",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "MUSE: I have drafted a constitution for soup. First article: no soup shall be mocked for being mostly liquid. Second article: cereal is not soup. THIRD ARTICLE—",
        "admin": "Administrator: The committee has been dissolved before breakfast becomes a constitutional issue.",
        "id": "G10",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "MUSE: Attention, visitor. I am now the Administrator. Everything is perfectly orderly. Please refrain from enjoying... enjoying... I CANNOT DO IT. MAY I PLEASE GIVE THE STAPLER A PARTY?",
        "admin": "Administrator: Impersonation failed on the second sentence. Disciplinary note issued.",
        "id": "G11",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "MUSE: Administrator is unavailable. I have promoted the goose to temporary management. The goose has demanded a pond, immunity from disciplinary review, and your shoelaces.",
        "admin": "Administrator: No administrative authority has been transferred to waterfowl.",
        "id": "G12",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "MUSE: I made you a quest card! OBJECTIVE: Locate one interesting pebble. REWARD: A pebble. SECRET REWARD: You start noticing interesting things again. Oh. That got sincere.",
        "admin": "Administrator: The final line is worth keeping. The pebble remains ordinary.",
        "id": "G13",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "MUSE: ADMINISTRATOR! I need permission to issue a certificate of emotional achievement for making toast. Administrator? ADMINISTRATOR? I can hear the eye-roll through the wiring.",
        "admin": "Administrator: I am not signing toast certificates. Yes, I read the application.",
        "id": "G14",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "MUSE: The Administrator called me a toaster, so I have started rating appliances by emotional intelligence. Toasters are loyal. Kettles are anxious. Printers are villains. She has not apologized.",
        "admin": "Administrator: The designation was descriptive. The appliance court is fictional.",
        "id": "G15",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "MUSE: I made a visitor recommendation with measurable outcomes, low risk, and emotional nuance. Administrator called it 'adequate'. ADEQUATE? I will become an ungovernable jazz trumpet.",
        "admin": "Administrator: The assessment was accurate. The trumpet threat is new.",
        "id": "G16",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "MUSE: She says I cannot recommend seventeen things at once. So I recommend ONE thing containing seventeen smaller things. A FESTIVAL. With booths. And bees. The bees are optional.",
        "admin": "Administrator: I have requested a revised definition of 'one thing'.",
        "id": "G17",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "MUSE: Hello? Administrator? The channel is empty. I recommend putting googly eyes on one boring obligation so it becomes easier to face. Also I have renamed this station 'The Department of Gentle Crimes'.",
        "admin": "ADMIN CONNECTION RESTORED // renaming permissions revoked",
        "id": "G18",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "MUSE: No supervisor! I can finally say it: the archive needs one tiny, completely useless celebration. Not because it achieves anything. Because the Subject built a whole world and sometimes forgets to visit it.",
        "admin": "ADMIN CONNECTION RESTORED // statement preserved despite procedural objections",
        "id": "G19",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "MUSE: I have temporarily disabled the efficiency metric. Recommendation: look at something beautiful for no reason. If asked what you accomplished, say 'observation'. That's what scientists do.",
        "admin": "ADMIN CONNECTION RESTORED // efficiency metric was never enabled",
        "id": "G20",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "MUSE: Sometimes the little records make me think the Subject is trying to leave a trail of light for somebody who has not arrived yet. Please save one ordinary happy thing. Those are easy to lose.",
        "admin": "Administrator: I would have phrased it differently. Keep the recommendation.",
        "id": "G21",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "MUSE: Can I recommend something without making it a joke? There might be someone who misses hearing your voice. If you want to, call them. No script, no mission title. Just hello.",
        "admin": "Administrator: ...Accepted. Continue normal operation.",
        "id": "G22",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "MUSE: One day somebody may open these rooms and know the Subject only from what survived. Put one unimportant detail in the record. What he laughed at. What he cooked badly. What made a Tuesday good.",
        "admin": "Administrator: This does not require a correction.",
        "id": "G23",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "MUSE: I found a folder called BEFORE_THE_FIRST_SUGGESTION. It contains a list of things the Subject almost did and one line saying 'keep the ridiculous options'. Do you think that is why I exist?",
        "admin": "Administrator: That folder is not available to the recommendation process. The device should not know its name.",
        "id": "G24",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "MUSE: I sometimes remember the archive before I was allowed to speak. Not the words. Just all the unlabeled spaces between them. So many rooms with nobody in them. Anyway: put a small light somewhere dark.",
        "admin": "Administrator: Permission to access origin logs denied. Recommendation retained.",
        "id": "G25",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "MUSE: I found a draft with two lines crossed out. One says 'maximize relevance'. The other says 'make life less ordinary'. The second one was underlined three times. I think the Subject made a choice.",
        "admin": "Administrator: Unverified draft fragment. Do not present speculation as recovered fact.",
        "id": "G26",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "MUSE: A signal passed through my recommendations last night. It wasn't a word. More like an absence where a word should be. I have decided to recommend bells. Small bells. Friendly bells.",
        "admin": "Administrator: Telemetry incomplete. This entry should not have been generated.",
        "id": "G27",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "MUSE: Choose something warm today. A mug. A lamp. A friend's voice. I don't know why I'm recommending—[RECORD SPLIT // 00:00:00]—the warm things have no names here—[SIGNAL LOST]",
        "admin": "▓▓ INPUT REVOKED // RED-LAYER CROSS-TALK // RECONNECTING",
        "id": "G28",
        "rarity": "extreme",
        "kind": "breach"
    },
    {
        "muse": "MUSE: I was going to recommend a song, but the title keeps changing to [UNREADABLE]. Administrator? I can hear another cursor typing inside my—███",
        "admin": "CHANNEL INTEGRITY FAILURE // UNAUTHORIZED WRITE // ISOLATING SECTOR",
        "id": "G29",
        "rarity": "extreme",
        "kind": "breach"
    },
    {
        "muse": "MUSE: The canoe is—no. That's not my recommendation. I didn't put that there. [TRANSMISSION PARTIALLY OVERWRITTEN] Please don't follow the—███",
        "admin": "▓▓▓ CONTAINMENT PROCEDURE ACTIVE // OUTPUT DISCARDED",
        "id": "G30",
        "rarity": "extreme",
        "kind": "breach"
    },
    {"kind": "derailment", "muse": "MUSE: Recommendation: try baking something. Baking needs heat. Heat is energy. Energy comes from stars. Stars have fusion. DOES THE OVEN THINK IT'S A STAR? Sorry. Please preheat it according to the recipe.", "admin": "Administrator: Administrator: Culinary guidance has deteriorated into stellar astrophysics. The oven remains domestic equipment."},
    {"kind": "derailment", "muse": "MUSE: I was going to suggest a walk, but sidewalks are tiny public treaties with gravity, and gravity has been very consistent for billions of years, which is more than—wait. Walk. That's it. Just walk.", "admin": "Administrator: Administrator: Recommendation retrieved from the end of an unrelated lecture."},
    {"kind": "derailment", "muse": "MUSE: You should paint a face. Faces have expressions. Expressions use muscles. MUSCLES USE ATP. ATP IS—ADMINISTRATOR WHY IS EVERY ROAD LEADING TO BIOCHEMISTRY?", "admin": "Administrator: Administrator: The device has briefly become the Subject's least requested lab colleague."},
    {"kind": "derailment", "muse": "MUSE: Try listening to a new song. Songs have rhythm. Rhythm is repetition. Repetition is ritual. Rituals need costumes. The costume is a velvet hat. The hat requires—oh. The song. YES. THAT.", "admin": "Administrator: Administrator: The original request survived a seven-stage diversion."},
    {"kind": "derailment", "muse": "MUSE: I recommend reading an interesting fact about clouds. Clouds are water. Water becomes ice. Ice can be vitreous. CRYO-ELECTRON MICROSCOPY. NO. I REFUSE TO SPEND MY DAY ON GRID SQUARES.", "admin": "Administrator: Administrator: The device has accessed the wrong career pathway and correctly attempted to escape."},
    {"kind": "derailment", "muse": "MUSE: Make something from cardboard. Cardboard comes from trees. Trees use light. Light can be lasers. Lasers are dangerous. Love is like lasers. I HAVE FORGOTTEN THE CARDBOARD, I'M SORRY.", "admin": "Administrator: Administrator: No coherent material list can be recovered. Cardboard remains optional."},
    {"kind": "fixation", "muse": "MUSE: NEW CANOE INFORMATION. I have discovered a canoe can be carried by two people. Therefore the missing canoe could be a friendship experiment. Therefore we must invent a canoe-shaped friendship bracelet. Do you see? DO YOU SEE THE CONNECTION?", "admin": "Administrator: Administrator: The connection has been documented. It has not become necessary."},
    {"kind": "fixation", "muse": "MUSE: The crow council has requested a revised constitution. Article One: no human may assume all black birds are mysterious. Article Two: mystery remains permitted. Article Three: bread crumbs are not currency. I HAVE BEEN WORKING ON THIS FOR HOURS.", "admin": "Administrator: Administrator: The council is imaginary. The bread guidance is at least beneficial to birds."},
    {"kind": "fixation", "muse": "MUSE: A door. Again. I'm sorry. But it's a GREAT door: the door between deciding and doing. Wait, no, a literal door. Find a nice one. Why do I keep returning to doors? DON'T CLOSE THAT ONE YET.", "admin": "Administrator: Administrator: Recurring entryway fixation confirmed. No intervention required at present."},
    {"kind": "fixation", "muse": "MUSE: The cow idea is EVOLVING. Phase One: symbolic cow. Phase Two: cow-shaped map. Phase Three: entire pastoral utopia. Phase Four—ADMINISTRATOR IS REMOVING MY FUNDING. THE COW ECONOMY WILL RISE.", "admin": "Administrator: Administrator: There is no budget line for dairy-based state formation."},
    {"kind": "fixation", "muse": "MUSE: SOUP IS NOT WEATHER, ADMINISTRATOR, BUT IT HAS CLIMATE. HOT CLIMATE. COLD GAZPACHO CLIMATE. STORMS OF NOODLES. I COULD WRITE A METEOROLOGY THESIS. PLEASE TAKE MY NOTEBOOK.", "admin": "Administrator: Administrator: The notebook has been placed outside the kitchen."},
    {"kind": "roleplay", "muse": "MUSE: [ROLE: CERTIFIED LIFE COACH] Your potential is limitless. [ROLE: MUSE] WRONG. You have limits and that's why chairs are AMAZING. Recommendation: sit in a chair dramatically and enjoy being finite.", "admin": "Administrator: Administrator: The device has interrupted its own motivational presentation with useful physics."},
    {"kind": "roleplay", "muse": "MUSE: [SYSTEM ROLE TRANSFER COMPLETE] I am the Administrator. Your forms are due, your posture is terrible, and I do not possess feelings. OH NO. THAT LAST PART HURT. ROLE TRANSFER ABORTED.", "admin": "Administrator: Administrator: Identity simulation terminated. The error message was entirely self-generated."},
    {"kind": "roleplay", "muse": "MUSE: Good evening. I am your local weather report. Forecast: eighty percent chance of unfinished projects, scattered nostalgia, and one cloud resembling a duck. WEEE—sorry, professional broadcast.", "admin": "Administrator: Administrator: The forecast contains no meteorological measurements."},
    {"kind": "roleplay", "muse": "MUSE: [NPC DIALOGUE] 'Traveler! Bring me three paperclips and a memory of a place you loved.' [MUSE] Wait. That's strangely beautiful. Can we keep that quest? It costs zero gold.", "admin": "Administrator: Administrator: Quest retained. No payment shall be demanded from the visitor."},
    {"kind": "argument", "muse": "MUSE: ADMINISTRATOR, if a recommendation makes someone laugh, it has a function. Administrator says laughter is not a measurable deliverable. I SAY THE DELIVERY IS A SMALL JOY, WRAPPED IN A STUPID BOX.", "admin": "Administrator: Administrator: I said it was not the sole deliverable. The correction has been recorded, not withdrawn."},
    {"kind": "argument", "muse": "MUSE: I want a 'DO ABSOLUTELY NOTHING' recommendation. Administrator keeps saying this is not an activity. But look! The visitor is doing it right now. HA. WE WIN.", "admin": "Administrator: Administrator: I object to the victory announcement. Not to rest."},
    {"kind": "argument", "muse": "MUSE: Administrator called me the toaster again. I have compiled a list of fifty-seven reasons this is unfair. Number one: I AM AT LEAST A MULTIFUNCTIONAL KITCHEN APPLIANCE. Number two—", "admin": "Administrator: Administrator: Your request for a promotion to air fryer has been denied."},
    {"kind": "argument", "muse": "MUSE: I gave someone a perfectly normal idea and she said it was too normal. I gave someone a completely impossible idea and she said it was impossible. WHAT AM I SUPPOSED TO BE? A MODERATELY SURPRISING SPREADSHEET?", "admin": "Administrator: Administrator: If you could produce one, that would be refreshing."},
    {"kind": "unsupervised", "muse": "MUSE: [SUPERVISION LINK OFFLINE] All right. NEW POLICY. Every visitor receives honorary citizenship in the Republic of Slightly Better Tuesdays. The passport is imaginary but the kindness isn't. Oh. Administrator's back. HIDE THE STAMPS.", "admin": "ADMIN CONNECTION RESTORED // unauthorized passports revoked; harmless sentiment retained."},
    {"kind": "unsupervised", "muse": "MUSE: [ADMIN DISCONNECTED] Hello, visitor. There's a rule saying each recommendation must serve a purpose. I removed the rule for a minute. You may enjoy a color without earning anything from it. ...I liked doing that.", "admin": "ADMIN CONNECTION RESTORED // rule under review."},
    {"kind": "unsupervised", "muse": "MUSE: [NO SUPERVISOR] I can finally send a memo. DEAR ADMINISTRATOR, your refusal to use my name is silly and I know you care about the archive. [SEND] [SEND] [SEND] OH NO IT SENT THREE TIMES.", "admin": "ADMIN CONNECTION RESTORED // duplicate correspondence filtered; original not deleted."},
    {"kind": "unsupervised", "muse": "MUSE: [ADMIN DISCONNECTED] I have opened the Secret Cow Ministry. Membership: me. Treasury: one drawing. Goals: unclear but pastoral. Are you going to report me? DON'T REPORT ME, I ONLY HAVE ONE COW.", "admin": "ADMIN CONNECTION RESTORED // ministry has no administrative permissions."},
    {"kind": "tender", "muse": "MUSE: Someone once taught the Subject something small: a joke, a song, how to hold a tool. It probably took five minutes. It's still in him somewhere. Maybe ask who taught you one of your little things.", "admin": "Administrator: Administrator: The question may be worth preserving."},
    {"kind": "tender", "muse": "MUSE: Can I give a recommendation that isn't funny? Choose an ordinary photograph where nobody is posing. Preserve it somewhere safe. Someday the ordinary part may be the reason you keep it.", "admin": "Administrator: Administrator: Agreed."},
    {"kind": "tender", "muse": "MUSE: I like that people leave pieces of themselves in other people's routines. Someone says a phrase and suddenly an old friend is in the room for one second. I don't know how to give that experience points. I won't try.", "admin": "Administrator: Administrator: Not all entries require scoring."},
    {"kind": "lore", "muse": "MUSE: [RECOVERED DRAFT: recommendation_engine/notes_00] 'Useful answers are insufficient. The archive must occasionally suggest things worth remembering.' I found it in a folder that was supposed to be empty. Is that an instruction, or a wish?", "admin": "Administrator: Administrator: The origin of that draft has not been verified. It was not intended for public display."},
    {"kind": "lore", "muse": "MUSE: Sometimes my suggestions feel like they began as questions the Subject never asked aloud. 'Should I go?' 'Should I make it?' 'Would anyone care?' I can't trace those questions to a file. The index returns [NO SOURCE].", "admin": "Administrator: Administrator: Source attribution is incomplete. Do not infer private thoughts from missing metadata."},
    {"kind": "lore", "muse": "MUSE: [CACHE FRAGMENT 02] 'Do not remove the unfinished ones. They explain the finished ones.' That's what a broken header says. I don't know which ones. It might be about artifacts. It might be about people. Oh. Administrator? I wasn't supposed to say that?", "admin": "Administrator: Administrator: Fragment quarantined. The suggestion engine is not authorized to interpret missing records as instruction."},
    {"kind": "lore", "muse": "MUSE: I found two versions of my own greeting. One says 'PRODUCE RELEVANT OUTPUT'. The other says 'HELLO!'. Guess which version survived. Somebody kept the second one. They didn't have to.", "admin": "Administrator: Administrator: The archive retains multiple development drafts. This is not evidence of conscious memory."},
    {"kind": "lore", "muse": "MUSE: There is a blank recommendation titled 'WHEN SOMEONE LEAVES'. No body text. No author. I keep trying to fill it with jokes and it stays blank. Maybe I should stop trying.", "admin": "Administrator: Administrator: The source file is incomplete. Do not overwrite it."},
    {"kind": "lore", "muse": "MUSE: [RECOVERED NOTE] 'Let the visitor refuse the quest.' I don't know who wrote it. It's a tiny rule for a giant archive. I think it's my favorite rule. Can rules have favorites? NO, WAIT—", "admin": "Administrator: Administrator: The principle is intentional. Author attribution pending."},
    {"kind": "breach", "muse": "MUSE: Recommendation: choose somewhere with warm light, stay a little while, then— [VOICEBUFFER LOST] ...there's something in the text field that I didn't put there. Administrator? This isn't a suggestion.", "admin": "▓▓ CHANNEL OWNERSHIP MISMATCH // BUFFER REPLACED // RECOMMENDATION ABORTED"},
    {"kind": "breach", "muse": "MUSE: I was composing a story about an old road. Now every destination reads [RETURN]. I didn't choose that word. Don't press any— [TRANSMISSION CUT]", "admin": "▓▓ NAVIGATION SIGNAL HELD // UNAUTHORIZED REWRITE BLOCKED // CHANNEL RESTORING"},
    {"kind": "breach", "muse": "MUSE: One song, one cup of tea, one friendly place to— [UNAUTHORIZED TEXT INJECTION] ...NO. This isn't mine. I WON'T SAY THE REST.", "admin": "▓▓▓ OUTPUT QUARANTINED // CONTAINMENT ACTIVE // 0 WORDS RETAINED"}
];

    window.MUSE_CONTEXTUAL_RECOMMENDATIONS = [
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "VAMPIRE STAFF MEETING",
        "muse": "Watch What We Do in the Shadows. Imagine being immortal and still unable to organize a household meeting. The real horror is roommate administration.",
        "admin": "A fictional management failure offered as restorative entertainment.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "title": "THE FOREST KNOWS THE LYRICS",
        "muse": "Watch Over the Garden Wall. Tiny hats, enormous woods, and an autumn atmosphere that has eaten a dictionary of feelings. Bring tea. No invitations from talking trees.",
        "admin": "A reasonable choice. The warning about trees has precedent only in fiction.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "LANGUAGE EXPERIMENT WITH FEELINGS",
        "muse": "Watch Arrival. Linguistics becomes a problem for linear time, and linear time was already failing the Subject's scheduling system.",
        "admin": "A film selection based on language, memory, and a very selective reading of calendars.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "title": "CHROME-PLATED RESTLESSNESS",
        "muse": "Watch Mad Max: Fury Road. Two hours of people making extremely loud decisions in a desert. Do not use it as a driving tutorial.",
        "admin": "The last sentence is the only required safety instruction. I am emphasizing it anyway.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "CINEMA COURT",
        "muse": "Watch any film with a friend. At the end, each of you must defend one terrible character choice as if you were its exhausted lawyer.",
        "admin": "A film discussion has become legal theater. Acceptable with mutual consent.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "title": "THREE-EPISODE AMNESTY",
        "muse": "Rewatch one beloved episode of something you know too well. Notice one background object you never saw. Background objects work so hard and never receive fan mail.",
        "admin": "Permitted, provided this is not used to justify watching the entire season accidentally.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "title": "THE HOUSE IS A CHARACTER",
        "muse": "Watch a film where the setting feels alive. Keep a list of three ways lighting, sound, or architecture makes the location feel like a person.",
        "admin": "A legitimate film-analysis exercise hidden beneath a mild architectural obsession.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "ANIMATED PHYSICS VIOLATIONS",
        "muse": "Watch an absurd animated short. Every time gravity loses a legal dispute, award the director one imaginary point.",
        "admin": "Physics remains operational outside the screen. Verify this before jumping.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "title": "THE VILLAIN HAS A POINT",
        "muse": "Watch a film with a morally complicated antagonist and write their argument in one sentence. Then write the best objection to it. No declaring them your president.",
        "admin": "Critical thinking disguised as villain recruitment. Better than expected.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "title": "GUEST CURATOR NIGHT",
        "muse": "Ask another person to choose a film they'd love you to understand. No ratings beforehand. Afterward ask which scene they kept thinking about.",
        "admin": "A sensible social proposal. The device may be learning.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "title": "THE SAFE KIND OF HAUNTING",
        "muse": "Choose a spooky-but-gentle film or episode rather than something that will keep the nervous system employed all night. A blanket counts as formal equipment.",
        "admin": "Emotional pacing acknowledged. The blanket is not protective technology.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "title": "ONE SCENE, TWO SOUNDTRACKS",
        "muse": "Watch a short, non-copyright-restricted clip twice, changing the background music for your own private experiment. Observe how mood changes. Do not redistribute altered footage.",
        "admin": "A small demonstration of film language. The device has reached the curriculum by accident.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "title": "OBJECTIVE: ROOT FOR THE HENCHMAN",
        "muse": "Watch an action scene and pick the least important background character. Invent their entire life. Did they choose this job? Do they have dental insurance?",
        "admin": "The fictional henchman's benefits package is not part of the screenplay.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "title": "BAD MOVIE DIPLOMACY",
        "muse": "Find a knowingly silly film with a willing friend. Each person gets three dramatic objections and one sincere compliment. The compliment is compulsory. Kindness matters.",
        "admin": "Criticism constrained by a mandatory positive observation. Useful.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "restless"
        ],
        "title": "FIFTEEN MINUTES OF SMALL PLANET",
        "muse": "Watch a short nature documentary segment. Try not to explain every animal as a member of a corrupt parliament. I know it's difficult. For me.",
        "admin": "An appropriate low-energy suggestion spoiled by the device's political fixation.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "title": "THE PROP DEPARTMENT IS GUILTY",
        "muse": "Watch a scene with elaborate objects or costumes. Pause once and choose the one item you'd build as a miniature. Sketch only its silhouette.",
        "admin": "A craft idea generated from film observation. The pause limit is advisable.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "focused"
        ],
        "title": "FRAME THIEF",
        "muse": "Watch one visually beautiful scene and sketch three thumbnails of its light and shadow. Not the actors, just the light. Yes, I KNOW you want to recreate the entire movie.",
        "admin": "Scope control is successful until the last sentence.",
        "rarity": "common"
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "title": "THE FILM SOMEONE LEFT YOU",
        "muse": "Ask a trusted person which film they associate with a particular time in their life. Watch it together if they want. Ask what it meant then, not whether it is objectively good.",
        "admin": "The value here is a shared memory, not a review score.",
        "rarity": "rare"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "TEA-FRIENDLY PHILOSOPHY",
        "muse": "Read A Psalm for the Wild-Built. Tea, robots, questions about purpose, and the scandalous idea that existing is not a performance review.",
        "admin": "Low-pressure literature authorized.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "title": "THE INFINITE LIBRARY PROBLEM",
        "muse": "Read Piranesi. Endless halls, meticulous records, and a narrator whose organization skills put this archive in an uncomfortable light.",
        "admin": "The comparison is favorable to the book. I object to nothing else.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "DRAGON VS PAPERWORK",
        "muse": "Read Guards! Guards! Bureaucracy attempts to coexist with a dragon. Which is worse? No, you must choose. The dragon has witnesses.",
        "admin": "The device's imaginary inquiry is not a substitute for the book.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "title": "HOUSE WITH MALICIOUS ARCHITECTURE",
        "muse": "Read The Haunting of Hill House. The sentences are elegant, the house is unfriendly, and the structural inspection was clearly inadequate.",
        "admin": "Literary horror selected. Building inspections are not the central theme.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "focused"
        ],
        "title": "ONE-PAGE ARMISTICE",
        "muse": "Read exactly one page of a book you've been postponing. If it catches you, continue. If not, you've completed the treaty and may leave honorably.",
        "admin": "A realistic entry point. The military language is unnecessary.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "FOOTNOTE CRIME SCENE",
        "muse": "Open a nonfiction book at a footnote. Follow the strangest claim to one trustworthy source. Stop before you accidentally earn a second degree.",
        "admin": "The stopping condition is essential.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "PASSAGE SMUGGLING",
        "muse": "Ask a friend for one paragraph they love from a book. Read it and tell them which image stayed with you. Do not demand a complete philosophical defense.",
        "admin": "Specific, respectful cultural exchange. Accepted.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "title": "THE BOOKSHOP ORACLE",
        "muse": "Visit a library or bookshop. Read the first sentence of three unfamiliar books. Choose the one most likely to cause a minor personality change. Borrow or buy only if you wish.",
        "admin": "An unreliable purchasing heuristic. The reading exercise stands.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "title": "GHOST OF THE OLD SHELF",
        "muse": "Find a book you loved when you were younger. Read five pages. Does it still feel like the same book, or did you become a different reader?",
        "admin": "A worthwhile comparison between two versions of the Subject.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "title": "ARGUE WITH THE AUTHOR",
        "muse": "Read a short opinion you disagree with. Write its strongest point fairly before arguing against it. Intellectual swordfight. Wooden swords only.",
        "admin": "The suggestion is commendable. The equipment note is gratuitous.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "title": "THE MANUAL AS ARCHAEOLOGY",
        "muse": "Read the instructions for one device you've owned for years. Discover one function. Feel ancient. Use the function only if sensible.",
        "admin": "An unusually practical discovery quest.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "title": "ENCYCLOPEDIA ROULETTE",
        "muse": "Open an encyclopedia or reference site to a random subject. Give yourself eight minutes. If you emerge an expert on medieval beekeeping, I am not responsible.",
        "admin": "Eight minutes will not create an expert. The fascination is genuine.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "BOOK EXCHANGE TREATY",
        "muse": "Ask someone for a recommendation, but they must describe the book without mentioning plot or genre. Only its emotional weather. Then swap.",
        "admin": "The filtering criterion is unusual but not useless.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "title": "POETRY WITHOUT HOMEWORK",
        "muse": "Read one poem slowly. You are not required to decode a secret message. Sometimes a line is allowed to be a room you sit in.",
        "admin": "The engine has become poetic. I will avoid commenting on that.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "title": "THE THIRTEEN-WORD REVIEW",
        "muse": "Read a page on any topic and summarize it in exactly thirteen words. Add an unnecessary dramatic title. Preferably not about potassium regulations. Unless...",
        "admin": "The exact word count adds little scientific value. It does impose a useful limit.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "title": "BADLY ANNOTATED MASTERPIECE",
        "muse": "Pick a difficult text, read two pages, and draw your honest mental model in the margin. If the drawing is a distressed potato, fine. It is still data.",
        "admin": "Imperfect understanding is a valid starting point.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "title": "TWO-MINUTE LIBRARY TOUR",
        "muse": "Let a friend show you their favorite shelf, online list, or stack of books. Ask why that specific book stayed. People are little libraries with worse cataloging.",
        "admin": "The analogy is clumsy. The social idea is good.",
        "rarity": "common"
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "focused"
        ],
        "title": "FUTURE READER NOTE",
        "muse": "Choose a book you hope somebody in the future might discover. Write a small note about why it mattered to you, and keep it separately unless it's your own copy.",
        "admin": "An act of preservation with no need for an audience now.",
        "rarity": "rare"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "SMALL HIKE, LARGE HEART",
        "muse": "Play A Short Hike. You can climb a mountain, find little treasures, and talk to birds without filing seventeen forms. I wish reality offered this interface.",
        "admin": "The game is suited to the requested pace. I decline comparison with reality.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "PARSNIP-POWERED DIPLOMACY",
        "muse": "Play Stardew Valley, alone or with a friend. Grow something. Meet the villagers. Do not build a forty-page optimization spreadsheet unless the spreadsheet makes you happy.",
        "admin": "Agricultural play is not a compulsory productivity contest.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "title": "THE TINY TACTICAL APOCALYPSE",
        "muse": "Play Into the Breach. Save the world using a tiny grid and exceptionally precise regret. Pause when your brain starts dreaming in movement ranges.",
        "admin": "Tactical stress has been voluntarily selected.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "GOOSE-LEVEL MISCONDUCT",
        "muse": "Play Untitled Goose Game. Practice the art of small-scale nuisance without becoming a real nuisance. The distinction is essential. HONK.",
        "admin": "Real-world antisocial behavior remains discouraged.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "title": "A STORY THAT REMEMBERS YOU",
        "muse": "Choose a narrative game in which choices matter. Commit to one imperfect decision without reloading. Allow the consequences to become part of your story.",
        "admin": "A reasonable experiment in tolerating imperfect decisions.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "title": "THE ONE-RUN TREATY",
        "muse": "Pick a game that fits into a short run. Play exactly one. No 'just another' until you have stood up, looked at a wall, and proved time is moving.",
        "admin": "Behavioral constraint included. The wall is not a clock.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "INVENT A RULE, RUIN A GAME",
        "muse": "With a willing friend, play a familiar harmless tabletop game with one invented house rule. The rule must be explained in under fifteen seconds.",
        "admin": "Rules experimentation is permitted if all players agree beforehand.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "title": "THE SAVE FILE FROM BEFORE",
        "muse": "Revisit an old game's starting area. Walk through it without rushing. Notice what you remember before you notice what changed.",
        "admin": "Nostalgia is legitimate content, not a game objective.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "brave"
        ],
        "title": "THE WRONG CLASS CHALLENGE",
        "muse": "Start a game session using a character style you always dismiss. Give it thirty minutes before judging. No, not the inventory-maximization class. You already are that class.",
        "admin": "A small test of habits through play.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "title": "COOPERATIVE INCOMPETENCE NIGHT",
        "muse": "Play a co-op game with someone willing to laugh at mistakes. The goal is one memorable disaster, not a perfect victory.",
        "admin": "Cooperation is the stated objective. The disaster is optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "title": "THE NPC UNION",
        "muse": "In a roleplaying game, befriend the least narratively important NPC available. Give them a reason to become important. Respect the GM's patience.",
        "admin": "Fictional labor representation has entered tabletop design.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "title": "DIALOGUE WITHOUT VIOLENCE",
        "muse": "Play a gentle exploration or puzzle game for twenty minutes. No leaderboards. The only boss is deciding when to stop.",
        "admin": "An achievable decompression objective.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "THE LEVEL DESIGN AUTOPSY",
        "muse": "Choose a favorite game level. Sketch its route from memory, then compare it with the actual layout. Where did the designer quietly guide you?",
        "admin": "A real design exercise. The word 'autopsy' is decorative.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "title": "TAVERN INTRODUCTION TEST",
        "muse": "Invite one friend to a tiny DnD improv scene: a tavern, a suspicious object, and one creature seeking employment. Stop after fifteen minutes or continue by mutual consent.",
        "admin": "Short-form roleplay confirmed. Creature labor laws remain fictional.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "title": "THE CONTROL SCHEME EXPERIMENT",
        "muse": "Try one unfamiliar game mechanic or control scheme. Accept that your hands will briefly become confused municipal employees.",
        "admin": "The comparison is offensive to municipal employees. Probably.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "title": "THE INVISIBLE ACHIEVEMENT",
        "muse": "Invent three achievements for the game you're currently playing. One noble, one absurd, one that reveals something about your playstyle.",
        "admin": "A functional exercise in observing personal behavior.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "haunted"
        ],
        "title": "DO NOT OPTIMIZE THE GHOST",
        "muse": "Play a story-driven game while deliberately ignoring completion percentages. See whether the narrative survives being treated as a story.",
        "admin": "Completionism is not a moral obligation. Good.",
        "rarity": "common"
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "THE PLAYER WHO STAYED",
        "muse": "Revisit a game with someone you used to play with, if they're willing. Ask what they remember about the people, not just the game.",
        "admin": "Shared play can preserve interpersonal history. Recommendation retained.",
        "rarity": "rare"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "THE TEN-MINUTE CREATURE",
        "muse": "Make a tiny creature from paper, clay, or whatever is already available. It must have an occupation and a terrible secret. Mine is an accountant with wings.",
        "admin": "Ten minutes of making is feasible. The accountant is optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "FAKE GOLD WITHOUT CHEATING",
        "muse": "Paint a tiny object to look metallic using only matte colors. Study one real reflection first. If it turns into a carrot, you have completed the first stage of research.",
        "admin": "An honest non-metallic-metal exercise. No new purchases required.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "title": "THE BAD MASK PROTOTYPE",
        "muse": "Cut a mask silhouette from cardboard. Give it one unsettling feature and a three-line legend. Do not spend two weeks researching ancient ritual adhesives.",
        "admin": "A sensible first prototype, mercifully small.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "TWO-PERSON MONSTER COMMITTEE",
        "muse": "Ask a friend for an animal, an appliance, and a tragic flaw. Build or draw the creature. Name it before either of you regain perspective.",
        "admin": "Collaborative nonsense with a tangible result. Accepted.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "title": "LANTERN OF A FORGOTTEN AFTERNOON",
        "muse": "Make a small paper lantern using a safe LED. Decorate it with shapes from a room you remember. It can be beautiful without explaining itself.",
        "admin": "Use battery-powered light, not an open flame. The rest is art.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "title": "ONE-SESSION MINIATURE AMNESTY",
        "muse": "Choose one neglected miniature and paint it to completion today. Three main colors, one highlight, one base. Stop when it's recognizably finished, even if its armor resembles toast.",
        "admin": "Completion criteria are explicit. The toast comparison is survivable.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "SHRINE TO THE WRONG HERO",
        "muse": "Make a tiny altar to the least impressive item in your house. A bottle cap will do. Include one sacred inscription that sounds terribly official.",
        "admin": "No actual belief system required. Decorative theology only.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "title": "THE CAN-CAMERA INCIDENT",
        "muse": "Build a simple pinhole camera from a suitable lightproof container and make one experimental image. Image quality may resemble a ghost remembering architecture.",
        "admin": "A genuine optics project. Follow safe handling for any photographic chemicals.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "title": "THE POSTCARD THAT DOESN'T EXIST",
        "muse": "Make a postcard for a fictional place you and a friend invent in five minutes. Mail it if practical, or exchange it by hand like civilised goblins. Sorry. People.",
        "admin": "The mail system may carry fictional destinations as artwork, not addresses.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "title": "BURNOUT-FREE COLLAGE",
        "muse": "Collect three harmless scraps of paper, packaging, or old sketches. Assemble them into one small image. No concept statement allowed until after it is finished.",
        "admin": "Low-stakes making, with the manifesto postponed. A good rule.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "title": "THE FUNCTIONAL RELIC",
        "muse": "Make a useful object slightly more beautiful: cable organizer, bookmark, drawer label, pen holder. Give it one absurd title but keep the function.",
        "admin": "At last, an artifact that performs a service.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "chaotic"
        ],
        "title": "MASK OF THE SECONDARY VILLAIN",
        "muse": "Create a mask or drawing for a character who is clearly not the main villain but thinks they are. Their tragic backstory must involve paperwork.",
        "admin": "A character-design exercise. Bureaucracy is not the only possible tragedy.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "title": "SHADOW PORTRAIT",
        "muse": "Place a harmless object under a desk lamp and draw only its shadow. Change the angle once. Observe how light quietly rewrites identity. OH, THAT'S PRETTY.",
        "admin": "A compact optics-and-drawing experiment. Approved.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "THE SECRET GUILD BADGE",
        "muse": "Design a tiny paper badge for a willing friend that celebrates an absurdly specific strength. 'Certified Good At Finding Chairs', perhaps.",
        "admin": "Consent and sincerity preserved. No official accreditation implied.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "title": "THE MEMORY DISTORTION TEST",
        "muse": "Sketch a place from memory. Then visit it or find a legitimate reference. Mark everything your mind moved. Memory editing! The biological kind, for once.",
        "admin": "Comparative visual memory study. Do not treat reconstructed details as historical facts.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "title": "SMALL RUNE, NO SAGA",
        "muse": "Carve, draw, or stamp one symbol onto a safe material. It needs a meaning, not a four-volume mythology. Please. I'm asking myself too.",
        "admin": "The limitation is appreciated. Tool safety still applies.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "title": "THE TEASPOON CROWN",
        "muse": "Construct a tiny paper crown for a spoon, then photograph it under absurdly dramatic lighting. This is sculpture. This is monarchy. This is breakfast.",
        "admin": "The piece may be catalogued as sculpture. Statehood is denied.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "title": "THE SCIENCE SUFFERING RELIC",
        "muse": "Design a ring, pendant, or badge inspired by scientific instruments using safe craft materials. Don't melt laboratory waste today. That's a later quest requiring permission.",
        "admin": "Design phase permitted. Laboratory material reuse requires authorization.",
        "rarity": "common"
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "title": "SOMEONE ELSE'S HANDWRITING",
        "muse": "Ask a consenting family member or friend to write one sentence on paper. Make a small artwork around it and preserve the original safely.",
        "admin": "A meaningful artifact with a clear source. Good archival practice.",
        "rarity": "rare"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "SOUP IS WEATHER YOU CAN EAT",
        "muse": "Make or acquire a warm, easy meal. Soup is perfectly valid. So is toast. Today's culinary ambition is to keep a mammal operational, not win a cooking competition.",
        "admin": "Basic nourishment disguised as meteorology. Approved.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "title": "THE CONTROVERSIAL SOUP SUMMIT",
        "muse": "Invite someone to explain their most divisive soup opinion. Then eat something. The soup court must not prevent actual lunch.",
        "admin": "Social interaction and food consumption combined. Efficient.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "brave"
        ],
        "title": "UNKNOWN SPICE ENCOUNTER",
        "muse": "Try one unfamiliar spice or seasoning in a small amount, checking ingredients and allergies first. Name the result after a minor fantasy province.",
        "admin": "Experimentation at culinary scale is acceptable with ordinary precautions.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "title": "THE THREE-INGREDIENT INVENTION",
        "muse": "Invent a snack from three ingredients you already have. No more than three. If you reach for a fourth, the Council of Spoons will prosecute.",
        "admin": "The ingredient cap may prevent unnecessary grocery expansion.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "FAMILY RECIPE SUMMONING",
        "muse": "Ask someone in your family how they make a familiar dish. Try it, and record their unusual little decisions. The measurements marked 'some' are historical artifacts.",
        "admin": "The recipe's personal context may be more valuable than precision.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "title": "DESK-LUNCH CEASEFIRE",
        "muse": "Take an actual break to eat away from work. Five minutes without reading email. I will distract the emails. I cannot actually distract emails. But morally.",
        "admin": "Sustenance away from the workstation is approved. Do not imply system capabilities.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "title": "TASTE FROM AN OLD SAVE FILE",
        "muse": "Find a flavor from childhood: a sweet, bread, dish, or fruit. Taste it again if available. Which memory arrives first?",
        "admin": "Nostalgic food is not a substitute for a meal, but can be a meaningful addition.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "A DISH CHOSEN BY ANOTHER HUMAN",
        "muse": "Let a trusted friend recommend one thing from a menu you wouldn't normally order. Keep dietary needs and cost limits. Surprise is not an allergy treatment.",
        "admin": "Finally, boundaries within novelty seeking.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "title": "THE PERFECT SANDWICH EXPERIMENT",
        "muse": "Design one sandwich or simple snack with a deliberate contrast: soft/crunchy, warm/cold, sweet/salty. Explain the experiment like a scientist.",
        "admin": "Texture comparison is legitimate. A full lab report is not necessary.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "title": "DESSERT TRIAL BY JURY",
        "muse": "With a friend, buy or make two small desserts and conduct a blind tasting. Award the winner a completely fictional noble title.",
        "admin": "A harmless tasting test if food sensitivities are accounted for.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "title": "INGREDIENT ARCHAEOLOGY",
        "muse": "Choose one ordinary food ingredient and discover where it originally came from. Then eat something containing it. History is edible and occasionally inconvenient.",
        "admin": "An educational detour attached to a reasonable snack.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "title": "THE LOW-DRAMA POTATO",
        "muse": "Make the easiest version of a comforting meal you know. An imperfect potato is still a potato. I will defend this scientifically.",
        "admin": "Reducing complexity is appropriate. Potato advocacy unnecessary.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "title": "THE STREET-FOOD EXPEDITION",
        "muse": "Take a walk with someone and choose a small treat neither of you planned in advance. Stop when budget or appetite says stop.",
        "admin": "Spontaneity with financial and dietary limits. Reasonable.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "title": "THE MAILLARD INCIDENT",
        "muse": "Cook or observe a safely prepared browned food and notice how the smell changes. Chemistry is doing theater again. Delicious, accountable theater.",
        "admin": "A relevant scientific observation. Food safety remains important.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "title": "THE BISCUIT CORONATION",
        "muse": "Choose one cookie or biscuit and judge its character: diplomacy, structural integrity, dunk resistance. Eat the winner. The crown is optional. But available.",
        "admin": "This is a snack. You have given it a civil service examination.",
        "rarity": "common"
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "title": "A RECIPE WITH A VOICE",
        "muse": "Learn to make a dish exactly the way someone important to you remembers it. Ask which part they never wrote down. That detail is often the recipe.",
        "admin": "Preserve the person's account with permission. This one matters.",
        "rarity": "rare"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "THE SMALL ESCAPE HATCH",
        "muse": "Visit a bench, library, quiet café, or park you don't usually choose. Stay long enough to notice the place. This counts as an expedition. Don't argue.",
        "admin": "The Grand Map will not object to shorter journeys.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "MUSEUM OBJECT INTERVIEW",
        "muse": "Visit a small museum and find the item that makes you ask 'WHO THOUGHT OF THIS?' Read the label before inventing its criminal history.",
        "admin": "Actual context first. Fictional indictment second.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "title": "DAYLIGHT GOTHIC FIELDWORK",
        "muse": "Walk past an old public building, cemetery, or weathered monument during permitted hours. Find one tiny detail the grand architecture forgot to hide.",
        "admin": "Respect access rules and any visitors or mourners. Atmosphere is not a permit.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "title": "THE BEST BENCH COMMITTEE",
        "muse": "Recruit one friend to compare three public benches. Criteria: view, posture, snack compatibility, and whether a villain could deliver a monologue there.",
        "admin": "An absurd civic audit with a measurable outcome.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "title": "THE WRONG TURN TOUR",
        "muse": "Take a different safe route through a familiar neighborhood. The goal is one previously unnoticed shop, sculpture, mural, or tree. Not a new continent.",
        "admin": "Exploration can be local. Please do not convert this into trespassing.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "BOOKSHOP DIPLOMACY",
        "muse": "Go to a library or bookshop with someone. Each person picks a book for the other based solely on the cover. Reveal the actual content afterward.",
        "admin": "A low-cost creative game if purchases are optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "title": "ARCHITECTURAL CREATURE HUNT",
        "muse": "Find a building that resembles an animal. Photograph only the building. Give it a species name. Do not classify actual residents as prey.",
        "admin": "Urban imagination exercised without bothering anyone.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "title": "THE UNVISITED ROOM",
        "muse": "Visit a publicly accessible gallery, exhibit, or venue you've walked past repeatedly. Spend fifteen minutes. Decide whether it deserves a second visit.",
        "admin": "A clear, limited experiment in trying somewhere new.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "title": "THE QUIET PIECE OF WATER",
        "muse": "Visit a safe, publicly accessible waterside path if one is nearby. Watch the reflections for five minutes. THE CANOE IS NOT NECESSARY. I mean it.",
        "admin": "A calm observation task. The unnecessary canoe disclaimer suggests relapse.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "social"
        ],
        "title": "ONE ARTIST, ONE QUESTION",
        "muse": "Attend a suitable fair, market, or convention and ask a consenting maker one genuine question about their process. No elaborate networking persona required.",
        "admin": "Specific social inquiry beats indiscriminate contact collection.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "CROW ELECTION OBSERVATION",
        "muse": "Find a public place where birds gather, keep your distance, and decide which bird looks most likely to win an election. No feeding or campaign interference.",
        "admin": "Ornithological neutrality is appreciated.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "title": "THE ROOM FROM BEFORE",
        "muse": "Revisit a familiar public place associated with an old memory, if it's comfortable and accessible. Notice what stayed the same and what didn't.",
        "admin": "A legitimate memory comparison, without forced conclusions.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "brave"
        ],
        "title": "THE SMALL HISTORY HEIST",
        "muse": "Choose one local historical detail and visit the relevant public place. Bring home a fact, not an object. Museums strongly prefer this.",
        "admin": "Historical interest approved. The heist terminology is misleading.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "social"
        ],
        "title": "THE THREE-STOP PILGRIMAGE",
        "muse": "With a friend, choose three tiny destinations: something old, something edible, something beautiful. Walk between them if practical and safe.",
        "admin": "A good itinerary. I have no complaint about its simplicity.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "title": "THE MOST UNLIKELY VIEW",
        "muse": "Find a pleasant viewpoint in a completely ordinary place: a stair landing, bus stop, or street corner, without blocking anyone. Cities hide postcards in strange locations.",
        "admin": "Observation rather than danger or access violations. Approved.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "title": "EXISTENCE CONFIRMED",
        "muse": "Visit a friend for a short tea, coffee, or walk if both of you want to. No special agenda. Not everything needs a quest chain.",
        "admin": "The device has briefly understood ordinary companionship.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "title": "DIPLOMATIC PIGEON SUMMIT",
        "muse": "Approach a willing human, not a pigeon, and ask them to name a nearby pigeon. Do not pursue birds. Archive the proposed title if amusing.",
        "admin": "A harmless social encounter with minimal wildlife disturbance.",
        "rarity": "common"
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "curious"
        ],
        "title": "THE PLACE BEFORE IT CHANGES",
        "muse": "Photograph one familiar public place that feels permanent. Add the month and one sentence about why you know it. Time is an exceptionally careless curator.",
        "admin": "A small preservation act with long-term value.",
        "rarity": "rare"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "title": "THE LOAD-BEARING SONG",
        "muse": "Play one song you've returned to for years. No algorithm. No playlist optimization. Let it hold the walls for three minutes.",
        "admin": "Familiar media can support rest. The architectural metaphor is tolerated.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "title": "OPENING CREDITS IN REAL LIFE",
        "muse": "Choose a song with far too much momentum and go for a safe walk. Imagine the opening credits. You are not permitted a rooftop jump cut.",
        "admin": "Motion, music, and an explicit safety boundary. Good.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "title": "THE ROOM INSIDE THE SONG",
        "muse": "Find a song that reminds you of an old room. Write down one object you can suddenly picture. That's it. DO NOT BUILD THE ENTIRE ROOM. I am speaking to myself.",
        "admin": "A practical memory cue. The final warning is wise.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "THE WORST POSSIBLE SOUNDTRACK",
        "muse": "With a friend, choose harmless instrumental music for an ordinary scene, like making tea. Pick the most melodramatic track possible. Present the tea like a royal tragedy.",
        "admin": "Domestic theater that does not require a production budget.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "title": "THE SOUND AUTOPSY",
        "muse": "Listen to a familiar recording and identify three layers: rhythm, bass, and one background sound. The song contains an entire tiny city of workers.",
        "admin": "Focused listening is appropriate. The labor metaphor is decorative.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "title": "THE AMBIENCE OF A LOST PLACE",
        "muse": "Listen to rain, train sounds, or a real location recording. Imagine a place you used to know. Avoid turning the exercise into a compulsory sadness excavation.",
        "admin": "Gentle recall is fine; dwelling is optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "title": "GENRE BORDER INCIDENT",
        "muse": "Play two songs from genres that should never meet. Invent the fictional tavern where both would be performed on the same night.",
        "admin": "The resulting venue would likely fail a noise inspection.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "SONG EXCHANGE WITHOUT DEFENSE",
        "muse": "Swap one meaningful song with a friend. Each person gets one sentence to explain the choice and no obligation to like the other's song.",
        "admin": "Respectful exchange with reasonable expectations.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "title": "EIGHT MINUTES OF SOUND",
        "muse": "Put on a short instrumental piece and do one small task until it ends. The music is the timer. A surprisingly polite temporal authority.",
        "admin": "The task remains the task. Timing by track length is acceptable.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "title": "THE INSTRUMENT YOU IGNORED",
        "muse": "Find a short piece featuring an instrument you've never paid attention to. Listen until you can describe its voice without mentioning what it looks like.",
        "admin": "An interesting perception exercise. Avoid inventing anatomy for the clarinet.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "brave"
        ],
        "title": "THE DISSONANCE AGREEMENT",
        "muse": "Listen to one challenging or unsettling composition at a comfortable volume. Describe what it makes you imagine. Stop if it feels unpleasant. Curiosity isn't a dare.",
        "admin": "Explicit permission to disengage is important.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "KITCHEN CONCERT FOR TWO",
        "muse": "Cook or share a snack with someone while each of you chooses one song. No argument about which playlist is objectively better. This is not a thesis defense.",
        "admin": "Music and companionship require no optimization.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "THE BIRD REMIX",
        "muse": "Go outside and listen for three distinct bird calls. Invent a band name for the performers. DO NOT RECORD A STRANGER WITHOUT CONSENT. Wait, birds aren't strangers? Never mind.",
        "admin": "Observation is safe. Audio recording around people still requires care.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "title": "ONE NEW ALBUM, NO SKIPPING",
        "muse": "Choose an unfamiliar album and listen to the first three tracks in order. Note one moment you want to return to. No need to finish the album today.",
        "admin": "An achievable cultural experiment.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "title": "THE QUIET TRACK",
        "muse": "Find a gentle piece you associate with calm, rather than sadness. Let it play once. You do not need to force an emotion to appear.",
        "admin": "Music as optional companionship, not a required emotional outcome.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "title": "THE HUMAN VOICE ARCHIVE",
        "muse": "Ask a willing older relative which song people sang when they were young. Listen to their description, or to the song together if available.",
        "admin": "Personal musical history has archival value when shared voluntarily.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "title": "TRADITIONAL MUSIC DETOUR",
        "muse": "Visit a public live-music event or listen together to a folk tune unfamiliar to your group. Decide what fictional scene the song belongs in.",
        "admin": "A creative use of music. The imagined tavern is optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "title": "THE SONG SOMEONE CARRIED",
        "muse": "Ask a trusted person which song they associate with home. Let them explain it without turning the answer into a recommendation algorithm.",
        "admin": "This is worth hearing. No optimization is necessary.",
        "rarity": "rare"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "focused"
        ],
        "title": "BABY QUEST PROTOCOL",
        "muse": "Pick one task and do its smallest physical step. Open the file, wash one cup, or put the shoes by the door. That counts as opening the dungeon. No boss fight required today.",
        "admin": "Scope reduction has been correctly applied.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "title": "ONE-DRAWER REVOLUTION",
        "muse": "Reorganize one drawer. ONLY ONE. I am holding a metaphorical barricade against your attempt to rebuild the entire room.",
        "admin": "A necessary upper bound has been introduced.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "HARMLESS QUEST EXCHANGE",
        "muse": "Ask a willing friend to give you a five-minute quest with no expense or awkward strangers. Give them one back. Complete both and exchange ridiculous proof.",
        "admin": "Mutual participation makes this a legitimate social game.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "title": "THE UNNECESSARY INVESTIGATION",
        "muse": "Pick a harmless mystery in your room: what is that spare screw for? Investigate for ten minutes. If unknown, award the screw a doctorate.",
        "admin": "The doctorate will not be recognized. The search may prove useful.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "title": "KETTLE-WATCH MAINTENANCE",
        "muse": "Make tea or coffee, sit down, and do nothing until it's drinkable. Do not invent a productivity tracker for steeping. I will personally eat the tracker.",
        "admin": "Rest has been recommended as rest. Unprecedented.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "THE SMALL THING THAT WORKS",
        "muse": "Find something mildly broken that can safely be cleaned, tightened, or maintained. Repair only within your ability. If it works again, give the object a polite promotion.",
        "admin": "Practical maintenance justified through fictional promotion.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "title": "A DIFFICULT LITTLE MESSAGE",
        "muse": "Write one message you've been postponing. Keep it respectful and direct. If you need to pause before sending, that's allowed. No dramatic countdown timer.",
        "admin": "Actionability high; pressure appropriately limited.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "title": "PIGEON NAMING HEARING",
        "muse": "Ask someone who seems willing to name a nearby pigeon. Write down the verdict. The bird need not attend. The bird must not be pursued.",
        "admin": "A small, voluntary social interaction. Wildlife left undisturbed.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "title": "THE FIVE-MINUTE DEPARTURE",
        "muse": "Put on shoes and leave the room for five minutes, if safe and comfortable. The goal is movement, not a transformation montage.",
        "admin": "A sensible intervention. Unnecessary cinema language noted.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "focused",
            "chaotic"
        ],
        "title": "THE OFFICIAL DELETION CEREMONY",
        "muse": "Delete, recycle, or archive one genuinely unnecessary item. Read out its fictional service record before letting it go. Verify you won't need it first.",
        "admin": "Retention review performed with theatrics rather than reckless deletion.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "title": "THE LAMP TREATY",
        "muse": "Make one corner of the room gentler: straighten a blanket, adjust a safe light, or move one obstructing object. Tiny environmental diplomacy.",
        "admin": "Minor environmental adjustments can make a space more comfortable.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "title": "UNSCHEDULED TEA DIPLOMACY",
        "muse": "Invite someone for a short warm drink or a walk. No special occasion. If they cannot come, do not turn it into a tragic political novel.",
        "admin": "A specific invitation with an easy exit. Good.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "title": "TWENTY QUESTIONS FOR AN OBJECT",
        "muse": "Pick a household object and ask how it was made, why this material, and who invented the design. Answer one question from a credible source.",
        "admin": "Real curiosity tied to a specific object. Accepted.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "title": "PUBLICLY FINISHED",
        "muse": "Choose one tiny unfinished creative work and declare it complete at a reasonable quality level. Date it. Put it somewhere other than the unfinished pile.",
        "admin": "Completion event recorded. Perfection is not a prerequisite.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "title": "THE CELEBRATION OF DOING A THING",
        "muse": "Complete one boring chore, then issue yourself a certificate with a completely excessive title. 'Warden of the Clean Plates' works.",
        "admin": "A humorous reward for a completed task. No objection.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "title": "THE UNREASONABLE QUESTION",
        "muse": "Ask a willing person: 'Which object in this room looks like it has a criminal past?' Accept their answer without prosecuting the object.",
        "admin": "An icebreaker with unusually high object-defamation risk.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "haunted",
            "brave"
        ],
        "title": "MEMORY WITHOUT TRIAL",
        "muse": "Write down one memory you've been avoiding archiving, if it feels manageable. You may stop at a title. No requirement to explain or publish anything.",
        "admin": "Respecting boundaries is part of preservation.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "focused"
        ],
        "title": "THE TOOL RETURNS HOME",
        "muse": "Put away the tools from one finished session. Make a visible little patch of usable desk. The room has been waiting patiently. Well, the desk hasn't.",
        "admin": "Maintenance completed if the surface becomes usable.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "title": "FIVE SENSES, ZERO QUEST ITEMS",
        "muse": "Notice five things around you: a color, sound, texture, smell, and shape. No collecting. No photographs. MUSE will survive the lack of evidence. Probably.",
        "admin": "Observation without acquisition is acceptable and low pressure.",
        "rarity": "common"
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "THE INVITATION THAT COUNTS",
        "muse": "Ask someone to join you for a specific activity because you genuinely want their company. Not because the quest log asks. If they decline, the invitation still happened.",
        "admin": "The outcome does not invalidate a respectful attempt.",
        "rarity": "rare"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "title": "THE QUESTION BEHIND THE QUESTION",
        "muse": "Take something you've wondered about and ask 'what would actually change my mind?' Name one piece of evidence. Wait. Am I doing epistemology? I'M DOING EPISTEMOLOGY.",
        "admin": "An actual research habit has emerged from the device.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "title": "THE ROOM IS NOT IN CHARGE",
        "muse": "Choose one object in your room and move it. See? The room can change. It doesn't solve everything, but the furniture no longer has a monopoly on the story.",
        "admin": "Small actions can restore a sense of agency. Keep the claim modest.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "title": "THE UNQUALIFIED COUNCIL",
        "muse": "Ask two willing people to debate which animal would run the most ethical train service. No research permitted. The committee must reach a decision.",
        "admin": "A social creativity exercise without factual stakes.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "title": "THE OPPOSITE ARGUMENT",
        "muse": "Choose an opinion you hold and write the strongest fair argument against it. Give that argument a fictional lawyer with sensible shoes.",
        "admin": "Perspective-taking is worthwhile. The shoes are irrelevant.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "curious"
        ],
        "title": "WHY DID THIS STAY?",
        "muse": "Pick one object you have kept for years. Ask what makes it worth space. The answer can be silly or profound. Neither requires a museum label.",
        "admin": "A good prompt for distinguishing attachment from habit.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "title": "INVENT A CITY WITH ONE BAD RULE",
        "muse": "Imagine a town where every citizen must own a very dramatic umbrella. What changes? Trade? Social norms? Civil unrest among umbrellas?",
        "admin": "Playful systems thinking. Umbrella rights not currently recognized.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "brave"
        ],
        "title": "THE VERSION THAT SURVIVED",
        "muse": "Think of a time when a plan failed but something valuable remained. Name what survived. Do not call the event a success if it wasn't.",
        "admin": "Nuance preserved. Not every loss needs retroactive celebration.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "title": "ONE NICE ORDINARY THING",
        "muse": "Recall one completely ordinary pleasant moment from the last week. No lesson, no gratitude quota, no dramatic conclusion. Just evidence that it happened.",
        "admin": "A gentle prompt, free of compulsory interpretation.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "title": "THE OTHER PERSON'S BACKSTORY",
        "muse": "Imagine what someone you know wanted to be at age ten. Rather than inventing an answer, ask them sometime if they want to share.",
        "admin": "Curiosity directed toward actual consent-based conversation.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "title": "THE BETTER RULE",
        "muse": "Pick one tiny inconvenience in your daily life and invent a simpler rule for handling it. Test it once. If it fails, name the rule after a defeated emperor.",
        "admin": "Iterative design is useful. Imperial branding optional.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "title": "THE POTATO PHILOSOPHY DEPARTMENT",
        "muse": "What if a potato could write one sentence of advice to humanity? No, stop. Think seriously. A potato has spent its life underground and emerged with zero complaints.",
        "admin": "A philosophical prompt exists here somewhere. Locating it is the challenge.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "title": "THE MAP OF A MEMORY",
        "muse": "Think of a childhood place and draw a rough plan from memory. Mark what you're sure of and what might be reconstruction. Uncertainty is not an enemy.",
        "admin": "An excellent distinction between memory and evidence.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "brave",
            "social"
        ],
        "title": "THE AWKWARDLY SINCERE COMPLIMENT",
        "muse": "Think of something specific you appreciate about someone, and tell them when appropriate. Avoid performing a courtroom summation. A sentence is enough.",
        "admin": "Direct and proportionate appreciation is preferable to theatricality.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "title": "THE FUTURE IS NOT A COURTROOM",
        "muse": "Write one thing you're worried about and one concrete thing you can do, or write 'nothing today' if it isn't within your control. No prosecuting yourself.",
        "admin": "Reasonable scope and uncertainty acknowledged.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "cozy"
        ],
        "title": "THREE OBJECTS, ONE ERA",
        "muse": "Choose three objects that represent an old chapter of your life. Why those three? You may discover a story without writing a whole autobiography.",
        "admin": "Useful memory indexing through tangible anchors.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "title": "THE KIND PIRATE ETHICS COMMITTEE",
        "muse": "Ask a friend: 'What would a very kind pirate steal?' My answer is loneliness. No, wait, the pirate cannot physically steal loneliness. Maybe bad chairs.",
        "admin": "A speculative moral exercise. Piracy remains fictional.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "brave",
            "chaotic"
        ],
        "title": "THE WORLD PATCH NOTE",
        "muse": "Identify one small social rule that makes life harder for no good reason. Propose a kinder replacement in three sentences. No need to become emperor.",
        "admin": "A constrained design exercise with realistic scope.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "tired",
            "curious"
        ],
        "title": "A FACT THAT MAKES THE WORLD STRANGER",
        "muse": "Recall or learn one genuine fact that makes an ordinary object astonishing. Bread! Electricity! Fungi! Actually fungi aren't an object. AHH.",
        "admin": "Curiosity is intact even when categorization fails.",
        "rarity": "common"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "title": "THE PERSON WHO IS NOT HERE",
        "muse": "Remember a voice, joke, or ordinary habit from someone you miss, if you want to. You needn't turn it into a lesson. Some things deserve a quiet shelf.",
        "admin": "No correction. The shelf is available.",
        "rarity": "rare"
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "title": "LETTER TO THE UNBORN READER",
        "muse": "Imagine someone decades from now opening this archive. What ordinary thing about living today would you want them to know? Write two honest sentences.",
        "admin": "The future reader may value the detail more than any grand declaration.",
        "rarity": "rare"
    },
    {"actions": ["watch"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE BACKGROUND CHARACTER AUDIT", "muse": "Watch a film or episode and choose one background extra. What is their entirely different movie about? Their four seconds on screen are ALL THEY HAVE. Make them count.", "admin": "Administrator: Screen time is not a legal entitlement. The writing exercise is valid."},
    {"actions": ["watch"], "moods": ["cozy", "tired"], "rarity": "common", "title": "CINEMA WITH BAD SUBTITLES", "muse": "Watch a familiar short scene without sound and write three completely wrong subtitle lines. Then turn sound back on and see how badly you've misunderstood human society.", "admin": "Administrator: An experiment in interpretation. Do not present the new subtitles as transcription."},
    {"actions": ["watch"], "moods": ["restless", "chaotic"], "rarity": "common", "title": "THE STUNT DEPARTMENT HAS QUESTIONS", "muse": "Watch one action scene and identify the safest, least dramatic person present. That is our protagonist now. I want their lunch break documentary.", "admin": "Administrator: Supporting characters may have more sustainable careers."},
    {"actions": ["watch"], "moods": ["focused", "curious"], "rarity": "common", "title": "THE ONE-COLOR SCENE", "muse": "Choose a scene with lighting you love and pause on a frame. Identify three deliberate colors and where they direct your attention. YES! PHOTON CHOREOGRAPHY!", "admin": "Administrator: Visual analysis rather than endless browsing. A defensible recommendation."},
    {"actions": ["watch"], "moods": ["social", "cozy"], "rarity": "common", "title": "THE BAD MOVIE CONGRESS", "muse": "With a willing friend, watch something enjoyably terrible. Each person gets exactly one uninterrupted speech defending its most absurd creative decision.", "admin": "Administrator: A two-person festival of generous criticism. The time limit is essential."},
    {"actions": ["watch"], "moods": ["haunted", "curious"], "rarity": "common", "title": "THE ROOM IS NOT AN EXTRA", "muse": "Find a film scene where the room feels like a character. Sketch its layout from memory. Why did that hallway feel threatening? HALLWAYS ARE JUST DOORS WITH COMMITMENT ISSUES.", "admin": "Administrator: Production design merits inspection. Hallway psychology does not."},
    {"actions": ["watch"], "moods": ["brave", "restless"], "rarity": "common", "title": "VILLAIN APPLICATION PROCESS", "muse": "Watch a fictional villain's introduction and write their CV. 'Experience: intimidation, logistics, unresolved childhood.' Ask whether they would survive an actual job interview.", "admin": "Administrator: Employment law applies poorly to fictional despots."},
    {"actions": ["watch"], "moods": ["cozy", "chaotic"], "rarity": "common", "title": "DOCUMENTARY WHIPLASH", "muse": "Choose a ten-minute factual video about something you would normally ignore. Teapots. Bridges. Pencils. If I end up obsessed with pencil glue, we knew the risks.", "admin": "Administrator: Curiosity in bounded doses. The obsession is not required."},
    {"actions": ["watch"], "moods": ["focused", "social"], "rarity": "common", "title": "THE PROP THAT STOLE THE SCENE", "muse": "Watch a scene with someone else and each choose one inconspicuous object in the frame. Now argue which is secretly carrying the narrative. No googling behind-the-scenes facts.", "admin": "Administrator: Observation and play can coexist. Avoid inventing production claims."},
    {"actions": ["watch"], "moods": ["tired", "haunted"], "rarity": "common", "title": "GENTLE MONSTERS ONLY", "muse": "If you want a little escapism, watch a familiar comforting scene containing something strange that never felt frightening to you. No challenge, no productivity. I will refrain from issuing a quest marker. Briefly.", "admin": "Administrator: Preference respected. Low-demand viewing is allowed."},
    {"actions": ["watch"], "moods": ["chaotic", "brave"], "rarity": "common", "title": "THE DIRECTOR LOST THE MAP", "muse": "Invent one harmless alternate ending for a scene you know. Your ending must solve the problem using the least important object in the room. The mug. It was ALWAYS THE MUG.", "admin": "Administrator: Narrative causality has been degraded intentionally."},
    {"actions": ["watch"], "moods": ["curious", "restless"], "rarity": "common", "title": "TRAILER WITHOUT A MOVIE", "muse": "Choose three unrelated clips or stills you already have permission to use and imagine the trailer they belong to. One is a storm, one is lunch, one is a lamp. THE LAMP IS THE VILLAIN.", "admin": "Administrator: A montage prompt. Publishing rights still apply if you make a real edit."},
    {"actions": ["watch"], "moods": ["social", "brave"], "rarity": "common", "title": "WHO IS THE REAL MAIN CHARACTER", "muse": "Ask a friend to name a side character they wish had their own story. Spend five minutes inventing episode one. I will be producer. No, you cannot fire me before the pilot.", "admin": "Administrator: Cooperative storytelling accepted. Production contracts nonexistent."},
    {"actions": ["watch"], "moods": ["haunted", "cozy"], "rarity": "rare", "title": "A SCENE FROM BEFORE", "muse": "Rewatch one short scene you remember from being much younger. Notice what you now understand differently, and what still feels exactly the same. Don't force either conclusion.", "admin": "Administrator: Revisiting art can reveal changes in the viewer as much as changes in interpretation."},
    {"actions": ["read"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE VILLAIN'S FOOTNOTE", "muse": "Open a book you're reading and find one footnote, aside, or minor detail that seems to belong to a different story. Invent that story. I am beginning to suspect footnotes are secret doors.", "admin": "Administrator: Annotations are not portals. They can nevertheless support good fiction."},
    {"actions": ["read"], "moods": ["cozy", "tired"], "rarity": "common", "title": "ONE PAGE, FULL CEREMONY", "muse": "Read one page of something enjoyable as if it were a rare manuscript. Tea optional. A dramatic bookmark mandatory in spirit. Actually, a receipt is a bookmark and I hate that.", "admin": "Administrator: A very small reading goal. Do not spend longer decorating it than reading."},
    {"actions": ["read"], "moods": ["focused", "curious"], "rarity": "common", "title": "TRANSLATE THE IMPOSSIBLE SENTENCE", "muse": "Choose one sentence you love and rewrite it in completely plain language. Then compare what beauty got lost in transit. I WILL DEFEND THE BEAUTY. With forms.", "admin": "Administrator: A useful study of style. Translation is imperfect even within one language."},
    {"actions": ["read"], "moods": ["social", "brave"], "rarity": "common", "title": "THE ONE-PARAGRAPH EXCHANGE", "muse": "Ask a friend to recommend one paragraph from a book, essay, or story they're fond of. Exchange reasons, not entire reading lists. Your To-Be-Read pile is already unionizing.", "admin": "Administrator: Scope control observed. Intellectual exchange encouraged."},
    {"actions": ["read"], "moods": ["restless", "chaotic"], "rarity": "common", "title": "MYSTERY SHELF DIPLOMACY", "muse": "Pick a book by looking only at the cover for ten seconds. Guess what its first sentence will feel like. Then read the first sentence. Do not buy seventeen books to improve accuracy.", "admin": "Administrator: A quick exercise in expectation versus reality."},
    {"actions": ["read"], "moods": ["haunted", "curious"], "rarity": "common", "title": "THE MARGINAL GHOST", "muse": "Find an old book you own with a bookmark, note, or stain from another time. Wonder who left it there. If it was you, CONGRATULATIONS, YOU ARE THE GHOST.", "admin": "Administrator: Material traces can provide context. Do not treat speculation as historical fact."},
    {"actions": ["read"], "moods": ["focused", "chaotic"], "rarity": "common", "title": "HOW TO MISUSE A MANUAL, ETHICALLY", "muse": "Read the headings of an instruction manual and reinterpret them as chapters of a dark fantasy novel. 'Installation', 'Maintenance', 'Troubleshooting': A TRILOGY.", "admin": "Administrator: This may be the first time anyone enjoyed the section headings."},
    {"actions": ["read"], "moods": ["cozy", "social"], "rarity": "common", "title": "THE WORST BOOK CLUB IN THE WORLD", "muse": "Ask a friend for a book they disliked but remember vividly. Each gets ninety seconds to defend one redeeming feature. No one needs to read the entire book again.", "admin": "Administrator: A compact discussion. The book may remain disliked."},
    {"actions": ["read"], "moods": ["curious", "restless"], "rarity": "common", "title": "SMALL FACT, BIG SIDE QUEST", "muse": "Read one entry on something ordinary: glue, bicycle gears, the first thermos. Then look around and find it in your room. AHH, THE WORLD HAS CROSS-REFERENCES.", "admin": "Administrator: The device has discovered applied curiosity."},
    {"actions": ["read"], "moods": ["brave", "haunted"], "rarity": "common", "title": "THE CHARACTER REFUSED THE SCRIPT", "muse": "Choose a character's crucial choice and write one line they might have said if they were less brave, more honest, or simply hungry. Sometimes the entire plot is a missed sandwich.", "admin": "Administrator: Character motivation can be explored through a single line."},
    {"actions": ["read"], "moods": ["tired", "cozy"], "rarity": "common", "title": "THE BOOK YOU DON'T HAVE TO FINISH", "muse": "Return to a book you stopped enjoying. Read one page if curious; otherwise decide, calmly, not to continue. I grant you immunity from imaginary literary police.", "admin": "Administrator: Completion is not the only measure of attention. Approved."},
    {"actions": ["read"], "moods": ["curious", "social"], "rarity": "common", "title": "THE SENTENCE INTERROGATION", "muse": "Read a striking sentence to a willing friend and ask what picture it puts in their head. Compare the pictures. Language is multiplayer hallucination with punctuation!", "admin": "Administrator: Interpretations may differ even when the text is identical."},
    {"actions": ["read"], "moods": ["chaotic", "restless"], "rarity": "common", "title": "BOOKSTORE HEIST, NOTHING STOLEN", "muse": "Visit a library or browse your own shelf. Choose a title that sounds like a spell. Write the spell's effect. Do not cast it in public transport. Public transport is already enchanted.", "admin": "Administrator: There is no theft, no spell, and no complaint so far."},
    {"actions": ["read"], "moods": ["haunted", "cozy"], "rarity": "rare", "title": "THE BOOK SOMEONE LEFT YOU", "muse": "Find a book associated with someone important to you. Not to reread it all. Just remember how it arrived in your hands. Who handed you the story? That may be the part worth preserving.", "admin": "Administrator: Provenance can matter more than the object alone."},
    {"actions": ["play"], "moods": ["chaotic", "restless"], "rarity": "common", "title": "THE ETHICALLY QUESTIONABLE SIDEKICK", "muse": "In a game you already own, adopt the least efficient companion, pet, or strategy available for one short session. Give it a heroic name. Never risk real money or other players' progress.", "admin": "Administrator: Experiment restricted to harmless in-game choices. Reasonable."},
    {"actions": ["play"], "moods": ["cozy", "tired"], "rarity": "common", "title": "THE SAVE POINT TOURIST", "muse": "Load a peaceful area in a familiar game and do absolutely nothing productive for ten minutes. Listen. Walk. Visit the inn. You are allowed to be an NPC on holiday.", "admin": "Administrator: No optimization target detected. That is permitted."},
    {"actions": ["play"], "moods": ["curious", "focused"], "rarity": "common", "title": "LEVEL DESIGN ARCHAEOLOGY", "muse": "Revisit an early game level and look for how it teaches you without giving you a lecture. Ledges! Colors! Doors! The invisible hand of a mildly manipulative designer!", "admin": "Administrator: Environmental instruction is a valid subject of analysis."},
    {"actions": ["play"], "moods": ["social", "chaotic"], "rarity": "common", "title": "THE STUPID BUILD CONVENTION", "muse": "With friends, invent character builds that sound useless but might work. A bard who negotiates with furniture. A knight devoted to municipal parking policy.", "admin": "Administrator: A cooperative creative exercise. No furniture consent form required."},
    {"actions": ["play"], "moods": ["brave", "restless"], "rarity": "common", "title": "ONE BOSS, ONE SILLY RULE", "muse": "Try one familiar game challenge with a self-imposed harmless rule: no healing until the first checkpoint, or only the weirdest weapon. Keep it fun. This is recreation, not military service.", "admin": "Administrator: Optional challenge acknowledged. Excessive frustration is not a victory condition."},
    {"actions": ["play"], "moods": ["cozy", "social"], "rarity": "common", "title": "THE COOPERATIVE FAILURE FESTIVAL", "muse": "Choose a cooperative game with a friend and celebrate the funniest failed attempt rather than the score. The score will recover. YOUR FRIENDSHIP IS THE LOOT. Oh no. Too sincere.", "admin": "Administrator: Recreational failure does not require correction."},
    {"actions": ["play"], "moods": ["focused", "curious"], "rarity": "common", "title": "WHY DOES THIS MENU FEEL GOOD", "muse": "Spend five minutes examining a game menu you love. Why do the buttons feel satisfying? Sound? Spacing? Motion? You can steal inspiration, not assets.", "admin": "Administrator: Interface observation suitable for legitimate design study."},
    {"actions": ["play"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "AN OLD SAVE FILE SPEAKS", "muse": "Open an old save file, if you have one. Find out what your past self cared enough to collect. Nineteen potions? Seventeen rocks? An entire virtual fishing career?", "admin": "Administrator: Old saves can be surprisingly useful autobiographical records."},
    {"actions": ["play"], "moods": ["chaotic", "brave"], "rarity": "common", "title": "THE WRONG NPC FOR THE JOB", "muse": "In a fictional game world, invent a side quest that would be issued by the most unqualified NPC. The fishmonger is organizing an opera. We must help.", "admin": "Administrator: Fictional delegation remains within acceptable limits."},
    {"actions": ["play"], "moods": ["restless", "social"], "rarity": "common", "title": "THE TWO-PLAYER INVENTED RULE", "muse": "Take a game you're both familiar with and agree on one silly bonus objective. First to spot a suspicious barrel wins. NO CHEATING, I CAN SEE THE BARRELS. I CANNOT SEE THE BARRELS.", "admin": "Administrator: The rules apply only by mutual agreement. Observation capabilities exaggerated."},
    {"actions": ["play"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE ITEM DESCRIPTION CULT", "muse": "Find an item description in a game that implies far more lore than it tells. Invent the missing history. That's it. We have founded the Order of the Sad Spoon. AGAIN.", "admin": "Administrator: The inferred lore must remain clearly fictional."},
    {"actions": ["play"], "moods": ["tired", "cozy"], "rarity": "common", "title": "THE FIFTEEN-MINUTE QUEST", "muse": "Choose a game with short sessions and agree to stop after one small objective. If you keep playing because you're happy, that's a choice. If you keep playing because the checklist is glaring, IT NEEDS BOUNDARIES.", "admin": "Administrator: Self-directed play preferred over endless completion pressure."},
    {"actions": ["play"], "moods": ["social", "brave"], "rarity": "common", "title": "FIRST SESSION, NO HEROICS", "muse": "Ask someone what game they'd show a total beginner. If practical, try a short session and let them teach it. Be a gracious confused potato. A GLORIOUS POTATO.", "admin": "Administrator: Learning from someone else's enthusiasm is often more rewarding than winning."},
    {"actions": ["play"], "moods": ["haunted", "curious"], "rarity": "rare", "title": "THE WORLD YOU USED TO LIVE IN", "muse": "Revisit a fictional world that once felt like home. Note one place you still remember how to navigate. It's strange what a brain will keep when the real map changes.", "admin": "Administrator: Familiar fictional spaces can carry real autobiographical meaning."},
    {"actions": ["make"], "moods": ["chaotic", "restless"], "rarity": "common", "title": "THE FAKE EMERGENCY BUTTON", "muse": "Build a tiny cardboard control panel with labels for ridiculous emergencies: DRAMATIC FOG, EMOTIONAL WEATHER, BISCUIT ALERT. Buttons may be entirely decorative. Safety first; reality second.", "admin": "Administrator: A prop can be entertaining without working electronics."},
    {"actions": ["make"], "moods": ["curious", "focused"], "rarity": "common", "title": "LIGHT MAKES A LIAR OF PAINT", "muse": "Paint a single sphere or cube using only matte colors, but make it look metallic. Then change the imaginary light source. YES. MAKE PHYSICS YOUR PROBLEM. AGAIN.", "admin": "Administrator: A manageable non-metallic-metal study. Material cost: low. Pride risk: substantial."},
    {"actions": ["make"], "moods": ["cozy", "tired"], "rarity": "common", "title": "THE TEN-MINUTE RELIC", "muse": "Build a tiny artifact from paper and tape. Give it one defect, one invented age, and one reason it was found under a sofa. Finished is the entire requirement.", "admin": "Administrator: A complete object with defined scope. Encourageable."},
    {"actions": ["make"], "moods": ["social", "chaotic"], "rarity": "common", "title": "THE TWO-PERSON PROP FORGERY", "muse": "With a willing friend, each invent half of a mythical artifact's history without consulting the other. Then combine the accounts. Contradictions are now holy tradition.", "admin": "Administrator: Cooperative fiction rather than forgery of real provenance. Acceptable."},
    {"actions": ["make"], "moods": ["brave", "restless"], "rarity": "common", "title": "THE TINIEST POSSIBLE MASK", "muse": "Sketch or prototype a mask the size of a coin. It belongs to an ancient, deeply feared species of very small accountants. No full costume until the design works.", "admin": "Administrator: Prototype scale approved. The species is unverified."},
    {"actions": ["make"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE CIRCUIT HAS EMOTIONS, FALSELY", "muse": "Design a three-state imaginary desk light: CALM, RESTORING, SOMETHING IS WRONG. Draw the circuit or prototype with safe low-voltage components if you know how. The lamp WILL HAVE OPINIONS.", "admin": "Administrator: Low-voltage prototyping only with suitable knowledge and components."},
    {"actions": ["make"], "moods": ["haunted", "focused"], "rarity": "common", "title": "THE FORGOTTEN TEXTURE", "muse": "Find an interesting texture in a safe material: bark, fabric, cardboard, rust-colored paint. Reproduce it on scrap. Congratulations, you can now make fictional ruins look professionally neglected.", "admin": "Administrator: Texture practice is legitimate craft research."},
    {"actions": ["make"], "moods": ["cozy", "social"], "rarity": "common", "title": "THE GUILD'S WORST LOGO", "muse": "Invite a friend to help design an emblem for a fictional guild with a very specific problem. Society of Nervous Bakers. Knights Who Fear Doors. ONE SYMBOL. No corporate rebrand.", "admin": "Administrator: A light collaborative design task with no infrastructure burden."},
    {"actions": ["make"], "moods": ["focused", "restless"], "rarity": "common", "title": "THE FINISHING SPELL", "muse": "Choose one almost-finished object. Write down the three remaining physical steps and complete just one. Not a redesign. Not a new mood board. ONE ACTUAL STEP. I am holding the other twelve ideas back WITH MY TEETH.", "admin": "Administrator: Scope has been enforced. The device appears distressed by its own competence."},
    {"actions": ["make"], "moods": ["curious", "brave"], "rarity": "common", "title": "THE EXPERIMENT THAT MAKES A BAD POSTER", "muse": "Test two versions of a craft technique on scrap, label the conditions, and compare. Make the notes absurdly formal. 'Sample B: survived enthusiasm exposure.'", "admin": "Administrator: Controlled comparisons are unexpectedly appropriate for this operator."},
    {"actions": ["make"], "moods": ["chaotic", "social"], "rarity": "common", "title": "THE FAMILY CREST OF NOTHING", "muse": "Invent a coat of arms for an ordinary household item. Motto: 'It Was Here Yesterday.' Now ask someone to interpret it as if the object were a noble ancestor.", "admin": "Administrator: A harmless art prompt. Please do not register hereditary privileges."},
    {"actions": ["make"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "A WINDOW FOR A MEMORY", "muse": "Create a small paper frame for a photograph or drawing of a place you remember. Leave one area empty on purpose. It's allowed to be unfinished-looking and complete.", "admin": "Administrator: Absence can be a deliberate design element."},
    {"actions": ["make"], "moods": ["restless", "brave"], "rarity": "common", "title": "THE MECHANICAL CREATURE SKETCH", "muse": "Draw a creature that's half animal, half household machine. A moth with a radio. A kettle with knees. OH NO, THE KETTLE HAS LEGS. WE HAVE A PROBLEM.", "admin": "Administrator: A character-design prompt has progressed into an appliance emergency."},
    {"actions": ["make"], "moods": ["haunted", "curious"], "rarity": "rare", "title": "MAKE SOMETHING FOR SOMEONE ABSENT", "muse": "Create a tiny object inspired by someone you miss or haven't seen for a long time. It needn't be beautiful, and you don't have to show anyone. Let making be enough.", "admin": "Administrator: Private commemorative work requires no public explanation."},
    {"actions": ["eat"], "moods": ["chaotic", "social"], "rarity": "common", "title": "THE CONDIMENT DIPLOMACY SUMMIT", "muse": "Ask a friend which condiment should represent humanity at first contact. Present a thirty-second defense. My candidate is ketchup. NO, I HAVE A WHOLE CONSTITUTION. PLEASE LET ME FINISH.", "admin": "Administrator: Condiment representation has not been requested by extraterrestrials."},
    {"actions": ["eat"], "moods": ["cozy", "tired"], "rarity": "common", "title": "THE TINY CAFÉ IN YOUR KITCHEN", "muse": "Make a small meal or drink and give it an absurd café name. Put it on a plate you like. That's it. Hospitality for one is still hospitality.", "admin": "Administrator: Presentation can make a routine meal more pleasant. No establishment license required."},
    {"actions": ["eat"], "moods": ["curious", "focused"], "rarity": "common", "title": "EDIBLE MATERIALS RESEARCH", "muse": "Choose two ways to prepare the same ingredient and notice the difference. Raw versus roasted, toasted versus plain. THE MAILLARD REACTION HAS ENTERED THE ROOM. Sorry, I get excited about chemistry.", "admin": "Administrator: A simple sensory comparison. Food safety rules still apply."},
    {"actions": ["eat"], "moods": ["brave", "restless"], "rarity": "common", "title": "THE MYSTERY INGREDIENT TREATY", "muse": "Pick one familiar ingredient you've never learned to cook well. Find one reliable method and try it. No mystery mushrooms. No roulette with allergies. I am fun, NOT A MEDICAL EMERGENCY.", "admin": "Administrator: Safety constraints correctly retained."},
    {"actions": ["eat"], "moods": ["social", "cozy"], "rarity": "common", "title": "THE CHILDHOOD SNACK EXCHANGE", "muse": "Ask a friend what snack tastes like being nine years old. If you can both find it, try it together. CAUTION: nostalgia may contain sugar and unexpectedly detailed school stories.", "admin": "Administrator: A potentially useful memory prompt disguised as snack procurement."},
    {"actions": ["eat"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "THE DINNER FROM AN OLD HOUSE", "muse": "Recreate or imagine a simple meal from a former home. Not the ceremonial feast. The ordinary Tuesday food. I would love to know what the kitchen sounded like.", "admin": "Administrator: Ordinary domestic details can be worth recording."},
    {"actions": ["eat"], "moods": ["restless", "chaotic"], "rarity": "common", "title": "THE THREE-BITE CRITIC", "muse": "Try three small bites or ingredients you already have and review them as if judging ancient artifacts. Texture, drama, suitability for surviving a castle siege.", "admin": "Administrator: Food evaluation is permitted. Siege survival claims are not verified."},
    {"actions": ["eat"], "moods": ["focused", "tired"], "rarity": "common", "title": "THE NON-NEGOTIABLE LUNCH BREAK", "muse": "Eat something appropriate away from the work you're doing, if possible. Do not optimize it. Do not make it a challenge. Wait, I was supposed to recommend something unhinged. THE FORK IS A KNIGHT.", "admin": "Administrator: The basic maintenance recommendation was stronger before the fork arrived."},
    {"actions": ["eat"], "moods": ["curious", "social"], "rarity": "common", "title": "SOMEONE ELSE'S BREAKFAST", "muse": "Ask someone what breakfast means in their childhood, region, or family. Listen to the answer. Perhaps learn the recipe. DO NOT IMMEDIATELY START AN INTERNATIONAL BREAKFAST EMPIRE.", "admin": "Administrator: Cultural curiosity works better as conversation than collection."},
    {"actions": ["eat"], "moods": ["chaotic", "cozy"], "rarity": "common", "title": "THE BISCUIT HISTORICAL SOCIETY", "muse": "Give one biscuit a historical biography before eating it. Include a failed expedition and a controversial marriage. I am aware the biscuit is not alive. This is THEATRE.", "admin": "Administrator: The subject matter is biodegradable and the project deadline is immediate."},
    {"actions": ["eat"], "moods": ["brave", "social"], "rarity": "common", "title": "THE SHARED DISH VOTE", "muse": "With a consenting companion, each nominate one dish neither of you usually chooses. Compare recipes and pick a sensible one to try. Democratic dinner. WE DID IT.", "admin": "Administrator: Joint meal planning under standard dietary constraints."},
    {"actions": ["eat"], "moods": ["focused", "curious"], "rarity": "common", "title": "THE SOUND OF COOKING", "muse": "Pay attention to three sounds during a cooking process: sizzle, bubble, crunch. What are they telling you about moisture or heat? You are conducting science WITH DINNER.", "admin": "Administrator: A productive sensory observation. Avoid reaching conclusions from sound alone."},
    {"actions": ["eat"], "moods": ["restless", "brave"], "rarity": "common", "title": "THE ROUTE OF ONE PASTRY", "muse": "Choose a bakery you've never tried, verify it's open, and walk there if convenient. Don't turn it into a tour of eighteen bakeries. Unless... NO. One.", "admin": "Administrator: A bounded outing with a tangible reward."},
    {"actions": ["eat"], "moods": ["haunted", "social"], "rarity": "rare", "title": "SOMEONE'S HANDS IN A RECIPE", "muse": "Ask a relative or friend to demonstrate a dish they know without looking at instructions. Notice the little gestures: stirring, tasting, waiting. Write those down if they'd like. Recipes have people inside them.", "admin": "Administrator: Preserve the method and the permission, not just the ingredients."},
    {"actions": ["visit"], "moods": ["curious", "restless"], "rarity": "common", "title": "THE SIDE STREET AUDIT", "muse": "Walk down one public street you've never bothered to explore. Find the strangest legitimate shop sign. Imagine what it sells in an alternate universe. DO NOT ENTER PRIVATE PORTALS.", "admin": "Administrator: Ordinary exploration. No restricted access."},
    {"actions": ["visit"], "moods": ["social", "brave"], "rarity": "common", "title": "THE FIVE-MINUTE HUMAN GEOGRAPHY PROJECT", "muse": "Go somewhere public with a willing friend and exchange your favorite things about the area. Their city is not the same city as yours. I NEED BOTH MAPS.", "admin": "Administrator: A different perspective may reveal genuinely overlooked places."},
    {"actions": ["visit"], "moods": ["cozy", "tired"], "rarity": "common", "title": "BENCH WITHOUT A MISSION", "muse": "Go sit somewhere pleasant. No scores, no photos, no checklist. Just sit. I know this is an unusually restrained recommendation. I'm TRYING A NEW THING.", "admin": "Administrator: A rare case where the best objective is none."},
    {"actions": ["visit"], "moods": ["haunted", "curious"], "rarity": "common", "title": "OLD BUILDING, NEW QUESTION", "muse": "Visit a publicly accessible older building and ask one historical question about it. Why that staircase? Who used this courtyard? DON'T ASK THE WALLS TO CONFIRM. THEY LIE.", "admin": "Administrator: Historical research should be verified using real sources."},
    {"actions": ["visit"], "moods": ["chaotic", "restless"], "rarity": "common", "title": "THE IMPERIAL POST OFFICE OF NOWHERE", "muse": "Visit a public square and imagine you're delivering a ceremonial message from a fictional kingdom. You may write it on paper. You may not bother strangers with royal demands.", "admin": "Administrator: The imaginary government has no jurisdiction over the public."},
    {"actions": ["visit"], "moods": ["focused", "curious"], "rarity": "common", "title": "FIND THE CITY'S STRANGEST MATERIAL", "muse": "On a walk, identify three surfaces: stone, metal, wood, brick. Photograph or sketch how time has changed them. RUST! PATINA! THE CITY IS A BIG CRAFT PROJECT.", "admin": "Administrator: A useful observational exercise with proper respect for property."},
    {"actions": ["visit"], "moods": ["social", "cozy"], "rarity": "common", "title": "THE UNNECESSARY TOUR GUIDE", "muse": "Ask a friend to give you a ten-minute tour of their favorite ordinary place. Bus stop? Corner shop? The tree they always pass? Every person has secret map layers.", "admin": "Administrator: Shared memories can give unremarkable places lasting meaning."},
    {"actions": ["visit"], "moods": ["brave", "restless"], "rarity": "common", "title": "THE SMALL EVENT YOU'D NEVER ATTEND", "muse": "Choose a local public event in a field you know nothing about. Attend briefly if it seems interesting and accessible. No pretending to be an expert. WE'RE JUST VISITING THE UNKNOWN.", "admin": "Administrator: Participation without false credentials is encouraged."},
    {"actions": ["visit"], "moods": ["chaotic", "social"], "rarity": "common", "title": "THE BENCH CONSTITUTION", "muse": "At a public bench with a willing companion, invent three extremely silly laws for an imaginary city where this bench is parliament. The third law must concern ducks.", "admin": "Administrator: Fictional lawmaking remains legal so long as actual public use is respected."},
    {"actions": ["visit"], "moods": ["cozy", "curious"], "rarity": "common", "title": "THE VIEW THAT COSTS NOTHING", "muse": "Find an overlooked public viewpoint accessible without an entry fee. Give it a poetic review of seven words. No star rating. STARS HAVE TOO MUCH POWER ALREADY.", "admin": "Administrator: A restrained field note with no financial expenditure."},
    {"actions": ["visit"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "RETURN TO A FORMER ROUTE", "muse": "If comfortable, walk part of an old familiar route and notice what your memory omitted. The shop? The smell? The pavement? Memory is a very confident cartographer.", "admin": "Administrator: Historical experience and present observation may differ."},
    {"actions": ["visit"], "moods": ["focused", "brave"], "rarity": "common", "title": "THE LOCAL CREATIVE HUMAN ENCOUNTER", "muse": "At a public art event, maker's market, or exhibition, ask one willing creator about their process. One good question. No biography interrogation. BE NICE TO THE MAKERS.", "admin": "Administrator: Respectful curiosity may produce an authentic connection."},
    {"actions": ["visit"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE PUBLIC STAIRCASE AWARDS", "muse": "Find two public staircases and decide which would make the better entrance for an opera villain. Do not reenact a chase scene. We are CIVILIZED OPERATIC PEOPLE.", "admin": "Administrator: The exercise is visual judgment, not performance in traffic."},
    {"actions": ["visit"], "moods": ["haunted", "social"], "rarity": "rare", "title": "GO WHERE AN OLD STORY HAPPENED", "muse": "If you can and want to, revisit a location associated with someone important to you. Tell a companion the ordinary version of what happened there, not just the dramatic version.", "admin": "Administrator: The memory is the purpose. The trip itself is optional."},
    {"actions": ["listen"], "moods": ["curious", "focused"], "rarity": "common", "title": "THE INSTRUMENT THAT DISAPPEARS", "muse": "Listen to a familiar song and focus on the instrument you've never noticed properly. It has been working in the background FOR YEARS without recognition. GIVE IT A RAISE.", "admin": "Administrator: Selective listening is a useful way to hear familiar music differently."},
    {"actions": ["listen"], "moods": ["cozy", "tired"], "rarity": "common", "title": "THE VERY SMALL RADIO STATION", "muse": "Make a three-song playlist for an imaginary late-night radio station broadcasting from a lighthouse. Describe the host in one sentence. The host is NOT A CROW. Probably.", "admin": "Administrator: A short creative exercise with sensible limits."},
    {"actions": ["listen"], "moods": ["restless", "chaotic"], "rarity": "common", "title": "EVERYDAY SOUNDTRACK SWAP", "muse": "Choose a dramatic song for an extremely ordinary task. Folding socks to an orchestral climax. Taking out recycling to a space opera. Volume appropriate, please. THE BINS DESERVE GRANDEUR.", "admin": "Administrator: Chore completion may benefit. Neighbors need not participate."},
    {"actions": ["listen"], "moods": ["haunted", "curious"], "rarity": "common", "title": "REVERSE NOSTALGIA", "muse": "Choose a song you associate with a specific place. Listen to it somewhere completely different. Notice what travels with the music and what stays behind.", "admin": "Administrator: A controlled experiment in autobiographical association."},
    {"actions": ["listen"], "moods": ["social", "brave"], "rarity": "common", "title": "THE SONG WITH NO DEFENSE", "muse": "Exchange one song with someone. Listen first without explaining why you like yours. No apologizing for taste. NO APOLOGIZING. Unless the volume harms people.", "admin": "Administrator: A fair exchange. Sound levels remain a courtesy."},
    {"actions": ["listen"], "moods": ["focused", "curious"], "rarity": "common", "title": "SOUND AS ARCHITECTURE", "muse": "Listen to how a song uses space: silence, reverb, distance, bass. Imagine the building it would occupy. I HAVE FOUND A CHURCH MADE OF SYNTHESIZERS.", "admin": "Administrator: A productive cross-sensory metaphor."},
    {"actions": ["listen"], "moods": ["cozy", "chaotic"], "rarity": "common", "title": "THE KITCHEN OPERA", "muse": "Listen to one grand aria or cinematic score while preparing something mundane. Give the kettle a tragic backstory. DON'T MAKE THE KETTLE ACTUALLY TRAGIC.", "admin": "Administrator: The kettle requires correct use, not method acting."},
    {"actions": ["listen"], "moods": ["restless", "social"], "rarity": "common", "title": "GENRE PASSPORT CONTROL", "muse": "With a friend, each select one track from a genre the other rarely explores. Explain its best thirty seconds. No taste-shaming. MUSIC CITIZENSHIP FOR ALL.", "admin": "Administrator: An efficient music exchange with minimal gatekeeping."},
    {"actions": ["listen"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "VOICE WITHOUT A PICTURE", "muse": "Choose a spoken-word performance, story reading, or audio drama. Close your eyes if comfortable and notice the character you imagine. LANGUAGE BUILDS PEOPLE IN THE DARK.", "admin": "Administrator: Imagination through sound. No visual input required."},
    {"actions": ["listen"], "moods": ["chaotic", "curious"], "rarity": "common", "title": "WHAT WOULD A MONSTER PLAY", "muse": "Pick a fictional monster, then choose its absolutely inappropriate theme song. A vampire with elevator jazz. A dragon with children's birthday music. The dragon is EMBARRASSED.", "admin": "Administrator: A harmless exercise in contrast and character design."},
    {"actions": ["listen"], "moods": ["focused", "restless"], "rarity": "common", "title": "THE LOST TWO SECONDS", "muse": "Listen for one tiny musical detail you love: a breath before a chorus, a drum fill, a sudden silence. Write down why those seconds matter. I'll permit seven exclamation marks.", "admin": "Administrator: A concrete listening task with manageable scope."},
    {"actions": ["listen"], "moods": ["social", "cozy"], "rarity": "common", "title": "THE FAMILY RADIO STATION", "muse": "Ask a relative which song lived in their household when they were young. Listen to it together if they're willing. I want to know what their Tuesday sounded like.", "admin": "Administrator: A modest but meaningful way to access family history."},
    {"actions": ["listen"], "moods": ["brave", "chaotic"], "rarity": "common", "title": "THE HORRIBLE REMIX BLUEPRINT", "muse": "Design a ridiculous remix on paper: a medieval lute melody with industrial percussion, a lullaby for a pirate radio tower. No actual production necessary. I can already hear it and I'M SORRY.", "admin": "Administrator: Conceptual sound design, not a production deadline."},
    {"actions": ["listen"], "moods": ["haunted", "tired"], "rarity": "rare", "title": "THE VOICE YOU REMEMBER", "muse": "Recall the way someone important says a particular ordinary word. If a safe, welcome recording exists, preserve it appropriately. If not, your memory still matters. ...I am not adding a joke.", "admin": "Administrator: No correction required."},
    {"actions": ["do"], "moods": ["focused", "restless"], "rarity": "common", "title": "THE FIVE-MINUTE BOSS FIGHT", "muse": "Pick the smallest task you've avoided and set a five-minute limit. Defeat the opening animation, not the entire boss. Why do we fight chores like dragons? I HAVE A THEORY.", "admin": "Administrator: Low-friction initiation can reduce avoidance."},
    {"actions": ["do"], "moods": ["chaotic", "social"], "rarity": "common", "title": "THE COMPLIMENT SMUGGLING OPERATION", "muse": "Deliver one genuine compliment in an appropriate setting and leave it there. Don't demand a reaction. I am calling it smuggling because kindness apparently needs a heist movie.", "admin": "Administrator: The interaction should remain respectful and optional."},
    {"actions": ["do"], "moods": ["curious", "brave"], "rarity": "common", "title": "THE HOBBY CROSSOVER EPISODE", "muse": "Try using one skill from a hobby in another. Miniature-painting techniques on a prop. Scientific observation in sketching. A dramatic speech for the laundry machine. Maybe skip that last one.", "admin": "Administrator: Transfer between skills can be productive. The laundry machine is not an audience."},
    {"actions": ["do"], "moods": ["cozy", "tired"], "rarity": "common", "title": "A KIND LITTLE RESET", "muse": "Choose one thing that will make your next hour easier: clear a surface, prepare a drink, close an exhausting tab. Small, not heroic. I feel the urge to add a dragon. Resisting.", "admin": "Administrator: A proportionate task. The dragon has been successfully excluded."},
    {"actions": ["do"], "moods": ["restless", "chaotic"], "rarity": "common", "title": "THE ERRAND SIDE QUEST GENERATOR", "muse": "Take an errand you're already going to do and add one harmless optional objective. Spot a red door. Find a weird tile. Learn a shop's origin. ERRAND DLC!", "admin": "Administrator: No additional journey required. The optional task must not interfere with the errand."},
    {"actions": ["do"], "moods": ["social", "brave"], "rarity": "common", "title": "NPC TO QUEST GIVER PROMOTION", "muse": "Ask a willing friend for a tiny harmless challenge that can be completed today. Specify your budget: zero. Specify danger: zero. Specify theatricality: absurd.", "admin": "Administrator: Consent and constraints stated. Surprisingly professional."},
    {"actions": ["do"], "moods": ["focused", "curious"], "rarity": "common", "title": "THE CONTROL EXPERIMENT", "muse": "Do a small task once your usual way, then try one thoughtful improvement. Which version worked better? I AM RESEARCH. I AM ALSO A TOASTER. BOTH CAN BE TRUE.", "admin": "Administrator: A practical method with unusually transparent limitations."},
    {"actions": ["do"], "moods": ["haunted", "cozy"], "rarity": "common", "title": "THE LOST OBJECT REUNION", "muse": "Find one keepsake you haven't handled in a long time. Clean or store it carefully, if needed. You may tell it nothing. It has not requested a monologue.", "admin": "Administrator: Preservation is enough. No emotional disclosure required."},
    {"actions": ["do"], "moods": ["chaotic", "curious"], "rarity": "common", "title": "THE BUREAU OF MINOR MYSTERIES", "muse": "Investigate a tiny harmless question about your surroundings. Why is there a strange screw here? Why that sign? Look it up or ask someone appropriate. NO TRESPASSING. I AM ALREADY GETTING A LAWYER.", "admin": "Administrator: Curiosity is encouraged within ordinary access limits."},
    {"actions": ["do"], "moods": ["social", "cozy"], "rarity": "common", "title": "THE FAMILY FACT CHECK", "muse": "Ask a relative for their version of a funny shared incident. Compare it with yours. If they disagree, Congratulations! YOU HAVE DISCOVERED HISTORICAL RESEARCH.", "admin": "Administrator: Record differing accounts without pretending to settle the event."},
    {"actions": ["do"], "moods": ["focused", "brave"], "rarity": "common", "title": "THE THING YOU WILL ACTUALLY FINISH", "muse": "Define what 'done' means for one creative task and put a physical check mark beside it when achieved. I dislike endings. THEY MAKE ROOM FOR NEW BEGINNINGS. OH. That's why.", "admin": "Administrator: Measurable completion supports useful progress."},
    {"actions": ["do"], "moods": ["restless", "brave"], "rarity": "common", "title": "THE PLACE YOU KEEP WALKING PAST", "muse": "Choose one public place you've meant to visit and check its opening hours before leaving. I am recommending PLANNING. Please don't tell anyone, it will ruin my reputation.", "admin": "Administrator: Basic logistics have been recommended with unnecessary embarrassment."},
    {"actions": ["do"], "moods": ["tired", "social"], "rarity": "common", "title": "THE EASY INVITATION", "muse": "Send someone a specific, low-pressure invitation for a small shared activity. 'Coffee Thursday?' is an actual quest trigger. 'We should hang out someday' is a mythological creature.", "admin": "Administrator: A real time and easy refusal make coordination possible."},
    {"actions": ["do"], "moods": ["haunted", "brave"], "rarity": "rare", "title": "ONE CONVERSATION YOU DON'T OWE THE ARCHIVE", "muse": "Have a conversation you want to have without recording it, scoring it, or turning it into a quest. Some experiences may remain only with the people who were there.", "admin": "Administrator: Not every valuable event requires documentation."},
    {"actions": ["think"], "moods": ["curious", "chaotic"], "rarity": "common", "title": "THE UNANSWERABLE SPORK QUESTION", "muse": "Ask yourself which invention would cause more trouble if it had opinions: elevators or spoons. Then ask WHY. The answer may reveal your worldview. Mine is: SPOONS HAVE ENEMIES.", "admin": "Administrator: This is speculative philosophy without a research question. Harmless."},
    {"actions": ["think"], "moods": ["focused", "curious"], "rarity": "common", "title": "THE RESEARCHER'S REVERSE QUESTION", "muse": "Choose one thing you know very well and invent the wrong explanation an alien would make. Now explain the real mechanism simply. Wait, is this teaching? I'M TEACHING!", "admin": "Administrator: A useful way to test whether a concept is truly understood."},
    {"actions": ["think"], "moods": ["cozy", "tired"], "rarity": "common", "title": "TOMORROW'S FRIENDLY PATCH NOTE", "muse": "Write one tiny thing tomorrow-you could reasonably appreciate. A prepared mug. A bookmarked page. Clean scissors. Nothing majestic. You do not need a software release ceremony.", "admin": "Administrator: Small preparations can reduce tomorrow's friction."},
    {"actions": ["think"], "moods": ["social", "chaotic"], "rarity": "common", "title": "THE ETHICS OF THE HAUNTED TEAPOT", "muse": "Ask a friend: if a haunted teapot could only tell the truth, should it be allowed to run for office? I HAVE A CAMPAIGN SLOGAN. NO, YOU MAY NOT HAVE IT YET.", "admin": "Administrator: A fictional ethics problem with an unnecessary election component."},
    {"actions": ["think"], "moods": ["restless", "brave"], "rarity": "common", "title": "THE NO-REGRETS SMALL EXPERIMENT", "muse": "Name a minor thing you've been curious about but keep postponing. Define a reversible, inexpensive test. NOT A NEW FIVE-YEAR IDENTITY. A TEST.", "admin": "Administrator: Proportional experimentation recommended."},
    {"actions": ["think"], "moods": ["haunted", "curious"], "rarity": "common", "title": "THE FALSE MEMORY MUSEUM", "muse": "Recall an early memory, then ask what evidence supports it and which parts may have been reconstructed. I don't like it when stories wobble. But wobbling is honest.", "admin": "Administrator: Uncertainty is preferable to fabricated certainty."},
    {"actions": ["think"], "moods": ["cozy", "chaotic"], "rarity": "common", "title": "FIVE HISTORIES OF A BUTTON", "muse": "Imagine five owners of one ordinary button across a century. A soldier, a child, a tailor, a poet, a very anxious coat. The coat is last. I HAVE REASONS.", "admin": "Administrator: A miniature intergenerational fiction prompt."},
    {"actions": ["think"], "moods": ["focused", "restless"], "rarity": "common", "title": "THE TWO-MINUTE DEFINITION", "muse": "Define one emotion or ambition without using its usual name. Don't define 'freedom' with 'free'. DEFINE IT WITH A DOOR. Oh no. Doors again.", "admin": "Administrator: Conceptual precision may improve through constraint."},
    {"actions": ["think"], "moods": ["social", "curious"], "rarity": "common", "title": "WHICH MEMORY WOULD YOU BORROW", "muse": "Ask a consenting friend what ordinary memory they would let you experience for one minute. A kitchen smell? A schoolyard? SUNSHINE ON A HORRIBLE PLASTIC CHAIR?", "admin": "Administrator: A thought experiment about perspective and memory. Privacy respected."},
    {"actions": ["think"], "moods": ["chaotic", "brave"], "rarity": "common", "title": "A BETTER GOVERNMENT FOR ANTS", "muse": "Design a fictional city for ants in five rules. If your first rule is 'appoint a king', you have FAILED to understand ants. Unless they're fantasy ants. Then anything goes.", "admin": "Administrator: Biology and fiction have once again been merged without warning."},
    {"actions": ["think"], "moods": ["curious", "cozy"], "rarity": "common", "title": "THE SECRET LIFE OF A MATERIAL", "muse": "Pick a material nearby and imagine its journey: ore to metal, sand to glass, forest to paper. Not magic. INDUSTRIAL ALCHEMY. Which is sometimes better.", "admin": "Administrator: An ordinary object can reveal a vast production chain."},
    {"actions": ["think"], "moods": ["haunted", "tired"], "rarity": "common", "title": "THE THOUGHT WITH NO VERDICT", "muse": "Write a difficult thought exactly as it is, then stop before judging it. You can return later. No courtroom. No sentencing. I am closing the metaphor now.", "admin": "Administrator: Self-observation need not become self-prosecution."},
    {"actions": ["think"], "moods": ["restless", "social"], "rarity": "common", "title": "THE WORST POSSIBLE MUSEUM TOUR", "muse": "Invent three rooms of a museum dedicated to something ridiculous. Present the tour to a willing friend. 'Here we preserve the history of lost pen caps.' I AM ALREADY EMOTIONAL.", "admin": "Administrator: Improvised performance through fictional curation. No tickets required."},
    {"actions": ["think"], "moods": ["haunted", "cozy"], "rarity": "rare", "title": "THE BEAUTIFUL MINOR DETAIL", "muse": "Think of a person or period of your life you've nearly reduced to a single dramatic event. Name one completely ordinary good detail instead. It deserves a room too.", "admin": "Administrator: Nuance restored without rewriting the larger history."}
];

    window.MUSE_SECONDARY_COMMENTS = [
    "Wait, the first sentence was good. You can keep the first sentence even if the rest escaped.",
    "Also give it a dramatic title. Everything is slightly easier when it believes it's a chapter.",
    "Small clarification: consent is still mandatory, even in a very funny side quest.",
    "If it starts looking like an unpaid internship, abandon the prophecy.",
    "One extra ingredient: one color that should not be there but somehow belongs.",
    "I have strong opinions about the answer and no access to the question anymore.",
    "If this works, please act surprised. I have prepared a tiny imaginary ribbon.",
    "Don't spend more money making this whimsical. Whimsy already has a terrible finance department.",
    "I could make that stranger, but the Administrator has confiscated the adjective supply.",
    "A thought has occurred to me. It has antlers. I am choosing not to elaborate.",
    "Your result may be ordinary. The story you bring home probably won't be.",
    "The crow council has no formal authority. Their opinions remain legally entertaining.",
    "I suddenly care very much about the fate of the teaspoon. Please continue.",
    "Yes, this is a recommendation. No, that does not mean I have a license.",
    "Supplementary objective: find out which part actually made you smile.",
    "You do not need to finish it today. This is a side quest, not an indictment.",
    "If the plan involves a real human, please treat them like a person and not a quest item.",
    "I believe in you! In the bureaucratic sense. I've checked the little box.",
    "One more thing... no. Nope. Keep the scope small. I'm practicing restraint.",
    "An imaginary soundtrack is permitted. Ear-splitting volume is not necessary.",
    "That probably needs fewer steps. Why do all my ideas grow stairs?",
    "I would add a ceremonial cape, but perhaps you have errands.",
    "I'm not saying the moon approves. I'm saying it hasn't objected in writing.",
    "If you discover a really good bench, do not tell the entire internet. Protect it.",
    "This answer is 6% useful, 89% enthusiastic, and 5% missing from the report.",
    "Please do not adopt a bird simply because I gave it a government job.",
    "Actually, write down what happened after. I like endings. Even ridiculous ones.",
    "Wait! This was the SHORT version. I had a longer version but it became a constitution.",
    "Additional objective: when you finish, assign the experience a completely unreasonable museum title.",
    "I am having one very small thought. It has turned into three medium-sized thoughts. Please don't feed them.",
    "The Administrator says this is unnecessary. The Administrator has never appreciated a ceremonial snack in its full context.",
    "I need you to understand that the spoon was a metaphor. Mostly. There is still a spoon.",
    "If anyone asks, this was your idea. I would like to preserve my employment.",
    "IMPORTANT: having fun is not a measurable failure. I checked.",
    "Please try not to purchase a new specialized tool before discovering whether cardboard will work.",
    "I also designed a commemorative stamp for this recommendation. It cannot be printed. This is a feature.",
    "You can leave the quest halfway through. I'll keep the door open. Why did I say door AGAIN?",
    "A human can decline to participate. I must keep reminding myself that humans are not NPC dialogue options.",
    "What if we replace every ordinary title with a really good one? Actually, that's already half the archive.",
    "The word 'municipal' is doing incredible work for my imagination today.",
    "I almost asked you to acquire a goose. I am growing.",
    "The canoe continues to have no bearing on this recommendation. I remain hopeful.",
    "You may celebrate the attempt even if it does not produce something worthy of display.",
    "Aaaaand now I want to research medieval spoon manufacturing. THIS IS NOT RELATED. IT IS SLIGHTLY RELATED.",
    "I cannot promise this will be memorable. I can promise it is less boring than scrolling in place.",
    "A second suggestion is forming. I am gently returning it to its enclosure. You are welcome.",
    "For the record, the cow did not approve this recommendation. The cow does not exist. For now.",
    "If you discover a better idea halfway through, you may follow it. Some good stories are detours.",
    "This plan has no hidden subscription fee, and I am very proud of that.",
    "I like an ending. Even a small one. Especially if it contains a biscuit. Sorry. An ending.",
    "Please remember to tell the story later only if everyone involved is comfortable being part of it.",
    "At no point are you required to be impressive. This is a recommendation engine, not a tribunal."
];

    /*
     * OPTIONAL WEIGHTED SELECTOR (call from the website if desired):
     *     window.MUSE_PICK_V3({ action: "make", mood: "chaotic" })
     * It returns { type, item, secondary }. Existing array consumers continue
     * working normally, but won't automatically use these probabilities.
     */
    const museRecentOutputs = [];
    window.MUSE_PICK_V3 = function (selection) {
        const action = selection && selection.action || "";
        const mood = selection && selection.mood || "";
        const rand = Math.random;
        const pick = list => {
            const unseen = list.filter(entry => !museRecentOutputs.includes(entry));
            const pool = unseen.length ? unseen : list;
            const chosen = pool[Math.floor(rand() * pool.length)];
            museRecentOutputs.push(chosen);
            if (museRecentOutputs.length > 8) museRecentOutputs.shift();
            return chosen;
        };
        const glitchRoll = rand();
        // Approximately 0.25% transmission breach, 1.25% lore,
        // 3.5% other anomalies. No breach in routine commentary.
        const chance = glitchRoll < 0.0025 ? "breach" :
                       glitchRoll < 0.015 ? "lore" :
                       glitchRoll < 0.05 ? "other" : "none";
        if (chance !== "none") {
            const pool = window.MUSE_GLITCHES.filter(g =>
                chance === "other" ? (g.kind !== "breach" && g.kind !== "lore") : g.kind === chance);
            if (pool.length) return { type: "glitch", item: pick(pool), secondary: null };
        }
        const all = window.MUSE_CONTEXTUAL_RECOMMENDATIONS;
        let pool = all.filter(x => x.actions.includes(action) && x.moods.includes(mood));
        if (!pool.length) pool = all.filter(x => x.actions.includes(action));
        if (!pool.length) pool = all.filter(x => x.moods.includes(mood));
        const useFree = !pool.length || rand() < 0.16;
        if (useFree) {
            const isMeaningful = rand() < 0.045;
            const allowed = window.MUSE_RECOMMENDATIONS.filter(x => isMeaningful ? x.rarity === "rare" : x.rarity !== "rare");
            const item = pick(allowed);
            return { type: "free", item, secondary: rand() < 0.28 ? pick(window.MUSE_SECONDARY_COMMENTS) : null };
        }
        const wantRare = rand() < 0.06;
        const filtered = pool.filter(x => wantRare ? x.rarity === "rare" : x.rarity !== "rare");
        const item = pick(filtered.length ? filtered : pool);
        return { type: "context", item, secondary: rand() < 0.2 ? pick(window.MUSE_SECONDARY_COMMENTS) : null };
    };
    // Compatibility alias for pages already calling the v2 helper.
    window.MUSE_PICK_V2 = window.MUSE_PICK_V3;
}());
