(function () {
    "use strict";
    /*
      MUSE RECOMMENDATION ENGINE // FINAL EDITION v4
      750 actual recommendations: 260 free-range + 490 action/mood targeted.
      Plus 112 exceptional glitch/lore events and 90 optional afterthoughts.
      Every `muse` and `admin` message is RAW TEXT: speaker labels come from CSS.
      Do not add 'MUSE:' or 'Administrator:' in the renderer.
      Existing globals and V2/V3 selector aliases preserved.
      Random events occur at controlled probabilities when using the optional picker.
    */

    window.MUSE_RECOMMENDATIONS = [
    {
        "muse": "Become the mayor of a bench for exactly nine minutes. Inspect the view, approve one cloud, and resign before local government gets wind of it.",
        "admin": "A peaceful transfer of imaginary power. Historically unusual.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Select a color, then find five sightings of it outside. Cyan is forbidden from winning automatically. Cyan knows what it did.",
        "admin": "The device has turned a walk into electoral interference among pigments.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Choose the least threatening object in your room and write it a formal warning. Include three charges and the phrase 'final opportunity to cooperate'.",
        "admin": "The stapler has retained legal counsel. This is your problem now.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Learn one person's favorite fictional villain, then ask what their accountant looks like. Every empire has payroll. Even evil needs spreadsheets.",
        "admin": "The proposed discussion may reveal more about the visitor than the villain.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Go outside and identify the building most likely to contain a retired wizard. No trespassing! Architectural profiling only. Wait, do wizards retire?",
        "admin": "We have no wizard registry and will not start one.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pick a real responsibility and split it into three dramatic acts. ACT I: FIND THE DOCUMENT. ACT II: OPEN THE DOCUMENT. ACT III: ...No, do not introduce a betrayal subplot.",
        "admin": "An actual task has survived theatrical conversion. Miraculous.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Put a spoon somewhere ceremonial for ten minutes and tell it absolutely nothing. Let it wonder why it has been chosen.",
        "admin": "The spoon cannot wonder. I have checked the specifications.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find a pigeon and invent its government position. Avoid giving it emergency powers. Pigeons have demonstrated enthusiasm for public squares.",
        "admin": "The bird has no mandate. Neither do you.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a new holiday that lasts seven minutes. Today we celebrate the Unreasonably Loyal Mug. Attendance: one. Refreshments: inside the guest of honor.",
        "admin": "A self-contained festival. At last, no permit required.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Collect one sentence from a stranger that sounds like dialogue from the middle of a novel. Ask politely, or simply remember something said in an ordinary conversation.",
        "admin": "Please respect privacy. Nobody agreed to become source material for a spy thriller.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take an extremely serious photo of a drain cover. Add the caption 'THE SEAL HOLDS'. Do not crawl into it. That is a different genre.",
        "admin": "The municipal drainage system has received an unsolicited mythology upgrade.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "You must find the best shadow today. Not the best object. Its shadow. The shadow is the auditioning actor; the object is unpaid stage equipment.",
        "admin": "This is an art exercise dressed as labor exploitation. Approved in principle.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Go on a tiny expedition to acquire exactly one lemon. Return like a sailor who has discovered a new continent. Do not overpay for the lemon.",
        "admin": "Supply chain complete. Geographic claims denied.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Give your oldest unfinished project a villain monologue. Let it explain why you keep postponing the final step. Then do the final step if it is small enough.",
        "admin": "I dislike admitting that fictional guilt-tripping has practical value.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pick a word you love and write its biography. Where was 'velvet' born? Who hurt 'staircase'? Why is 'probably' so defensive?",
        "admin": "The dictionary has filed a workplace grievance.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find a moss-covered surface. Admire the moss. Consider its lifestyle. Do not physically become moss. I have researched the paperwork.",
        "admin": "For the third time, moss is not an employment category.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a field guide for three household noises: the refrigerator's prophecy, the radiator's confession, and the unknown click at 02:13.",
        "admin": "The unknown click is likely thermal expansion. Do not grant it citizenship.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Declare a ceasefire with one object that has annoyed you for years. A printer, a cabinet, an especially hostile drawer. Offer terms, not violence.",
        "admin": "The drawer has no capacity to negotiate. It does, however, have a history.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent the world's smallest museum. One object. One label. One visitor. If you are the visitor, please pretend to be impressed.",
        "admin": "Attendance figures are technically correct and morally disappointing.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find an unusual name on a street sign and invent the person who would live there in an alternate universe. Keep actual residents out of it.",
        "admin": "Fictional urban planning is permitted. Actual stalking is not.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take a short walk carrying one question that cannot possibly help you: 'Do pigeons understand rent?' Report back with no evidence whatsoever.",
        "admin": "Research methodology: absent. Public disturbance: avoidable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a conspiracy in which all teaspoons are trying to become forks. Present no evidence. End the conspiracy before lunch.",
        "admin": "This is not actionable advice. It is also not the worst theory the device has produced.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find a shape in the clouds and defend your interpretation like a lawyer with too much coffee. The cloud will not attend the hearing.",
        "admin": "Absence of the defendant is expected in meteorological court.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write your current to-do list as a lost civilization's tablet. 'And lo, the dishes waited for the Chosen Sponge.' Do one item before translating the rest.",
        "admin": "Productivity recovered from a civilization that never existed.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Conduct a silent interview with a tree. Ask a serious question. Listen. Learn that trees have dramatically better boundaries than most people.",
        "admin": "Plant communication does not support your interview format. The boundary observation stands.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Put an ordinary object under one lamp and rotate it slowly like a criminal in interrogation. Sketch what its shadows do. Do not confess on its behalf.",
        "admin": "The lighting study is useful. The criminal proceedings are fabricated.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invite a friend to rate the most dramatic staircase nearby. Evaluate suspense, handrail acting, and final-boss potential. Respect other users of the stairs.",
        "admin": "Building access is not a theatrical resource allocation system.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Design a fictional postage stamp for a country that exists only on Tuesdays. Include a national bird. No, not all nations can have crows. Fine, two crows.",
        "admin": "The device has revised an imaginary constitution in real time.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Stand in a safe place and observe people moving through a public square. Imagine each person has a side quest, but do not approach or follow anyone without reason.",
        "admin": "A rare proposal involving observation without recruitment. Progress.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a name for the specific emotion of finding an old receipt in winter. Mine is 'frostalgia'. I know. I KNOW. Write yours down.",
        "admin": "The English language has not requested this expansion.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "You should make a tiny crown for an undeserving object. Not a person. A rubber band. A rock. The microwave's instruction booklet.",
        "admin": "The crowned object has been promoted beyond its competence.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Ask a friend which household appliance would make the worst monarch. Hold the election. Accept the result even if the blender wins.",
        "admin": "We will not be transferring civil authority to kitchen equipment.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Acquire a cow. Figuratively. A photo, a doodle, a sighting, a small clay cow. NO, YOU DO NOT NEED PASTURE. The cow is a *concept* until further notice.",
        "admin": "Livestock procurement has been denied. Symbolic cow acquisition may proceed.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "The canoe is missing. We have never owned a canoe. This is irrelevant. Go somewhere with water and determine whether the horizon looks canoe-friendly.",
        "admin": "A nonexistent inventory item continues to generate maintenance tickets.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Start a diplomatic incident between two socks. They have different political ambitions. Resolve it through folding, not force.",
        "admin": "The laundry pile is now a constitutional monarchy. Of course it is.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Invent a religion for a pebble. One doctrine only: 'Be round when possible.' Great. The schism begins when someone discovers triangles.",
        "admin": "Please do not solicit followers for geological theology.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Imagine a bicycle with ceremonial antlers. Do NOT attach ceremonial antlers to a real bicycle. Drawing! I meant DRAWING. I got excited.",
        "admin": "A visual arts recommendation was rescued from traffic hazard territory.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Build an imaginary courtroom where the defendant is Tuesday. Prosecutor: Wednesday. Judge: an exhausted teapot. Verdict: postponed.",
        "admin": "Calendar litigation cannot improve the passage of time.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Find the nearest legal, harmless opportunity to declare 'THE PROPHECY HAS BEEN FULFILLED'. It can be the kettle boiling. It should be the kettle boiling.",
        "admin": "Dramatic declarations are not measurements. Yet the water did boil.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "The moon owes us an explanation. Wait. No. WE owe the moon an apology. I reversed the diplomatic note again. Please issue the apology outdoors, softly.",
        "admin": "There is no lunar embassy. The message may be delivered regardless.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Design a flag for the Republic of Unfinished Crafts. The national anthem is seventeen seconds of a hot glue gun heating up.",
        "admin": "This institution has a large population and no production statistics.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Hold a coronation for a potato, then appoint its successor. Eat neither during the ceremony. I am not a monster. I'm a very complicated toaster.",
        "admin": "The hereditary system will collapse at dinner. This is an improvement.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Make a map of a city where every street leads to a different soup. Do not put actual navigation instructions on it. Someone might believe us.",
        "admin": "Municipal planning has reached a new low in nutritional accuracy.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "I recommend becoming a lighthouse. NOT physically. Emotionally. Wear something visible, stand somewhere sensible, help one confused friend find the exit.",
        "admin": "Metaphorical lighthouse employment approved. Maritime licensing not required.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Send a certified letter to the concept of gravity. It has dropped your possessions for years without apology. Keep it fictional. Stamps are expensive.",
        "admin": "Physics is not a legal entity. Also, your handwriting is not an argument.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "MOSS MOSS MOSS. Apologies. Recommendation: draw a city where moss holds municipal elections. I will be chair of electoral fungi. WAIT. MOSS IS NOT FUNGI.",
        "admin": "First successful self-correction in the history of this suggestion.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Develop a fictional emergency evacuation plan for an argument between two clouds. The civilians are birds. The mayor is precipitation.",
        "admin": "Nothing in this model would survive a weather forecast.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Make an altar to the Lost Remote Control. If you find the remote, the prophecy must include returning it to the sofa.",
        "admin": "Worship has become search-and-recovery logistics. Unexpected improvement.",
        "rarity": "common",
        "kind": "absurd"
    },
    {
        "muse": "Send a friend an invitation that includes both a real time and one completely unnecessary mission title. Humans bond surprisingly well when logistics exist.",
        "admin": "Specifying an actual time has elevated the suggestion above previous standards.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Choose one project and decide what *finished enough* means before you touch it. Tape the definition somewhere visible. Do not renegotiate with yourself at midnight.",
        "admin": "An end condition has been established. The archive considers this historic.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Before your next creative session, put every tool needed for the first ten minutes on the table. Not every tool you own. I see you reaching for the other drawer.",
        "admin": "Operational restraint displayed. It may not last.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Tell someone whose work you admire exactly what you liked about it. One sentence. A real one. You may panic after the message is sent, privately.",
        "admin": "A feasible social interaction. I am briefly concerned for the toaster.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Choose one nearby place you've never entered and check whether visitors are welcome. Visit if appropriate. No secret tunnels. I know that face.",
        "admin": "Exploration with property boundaries. Unexpected maturity.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Make a small meal from what is already available. You may name it 'Emergency Rations of the Kingdom'. It still has to be food.",
        "admin": "Nutritional function confirmed. Kingdom status disputed.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Spend ten minutes restoring an object that you use every day. Clean, fix, sharpen only if safe, or simply put it where it belongs.",
        "admin": "Maintenance without spectacle. MUSE must be feeling unwell.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "Ask an older relative what they thought adulthood would feel like. Listen to the entire answer. No need to turn it into a public record.",
        "admin": "This is worth doing. Permission remains necessary before archiving anyone's words.",
        "rarity": "common",
        "kind": "practical"
    },
    {
        "muse": "If you still have one, find a photograph of a room you used to live in. Look for the ordinary objects, not the people posing. Which object would you rescue from forgetting?",
        "admin": "A small preservation task. The question may outlive its answer.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Remember the person who first made you feel talented at something. If you can contact them appropriately, tell them one specific thing that stayed with you.",
        "admin": "No joke prepared. The recommendation is sound.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Take a photograph of somewhere you pass every week. Someday you will wish you had a picture from before it changed. Ordinary places have expiration dates too.",
        "admin": "The archive supports this one without editorial additions.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Think of an old version of yourself that had no idea where life would go. Give them one accurate piece of reassurance. Do not promise what you cannot know.",
        "admin": "A rare instance of responsible speculative correspondence.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Call someone you love and ask them to tell you an ordinary story. Not their greatest achievement. How they spent a Sunday when they were twenty.",
        "admin": "This may become a more valuable record than a conventional biography.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "If a song brings back a specific moment, write down what the air smelled like. Memory often preserves a room before it preserves the plot.",
        "admin": "An unusually good observation. The device has exceeded its advertised function.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Give yourself permission to end a project that no longer belongs to you. Preserve what you learned. You do not owe unfinished objects a lifetime sentence.",
        "admin": "Decommissioning is not failure. I am adding that to the protocol.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Choose an ordinary object left by someone important. Learn the story behind it while you still can. Not every inheritance is valuable because it costs money.",
        "admin": "An archive exists partly to prevent such stories from disappearing.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Ask a friend for one memory of you that you have forgotten. Their version will probably be different. Keep both versions, with the disagreement intact.",
        "admin": "Conflicting testimony is not a defect if the uncertainty is preserved.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Have a day without turning the experience into evidence. You may simply live it. The archive can tolerate a missing entry.",
        "admin": "I object to the precedent. I approve the exception.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "First, locate a door that looks unnecessarily important. Second, photograph it from a perfectly legal distance. Third, decide what boss would guard it. Fourth—wait. Was this a door recommendation? IT WAS A DOOR RECOMMENDATION.",
        "admin": "The visitor has been sent outside to assess fictional door security. Property access remains unchanged."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Make a map of the emotional geography of your desk. The keyboard is a capital, the mug is a disputed port, and the dust is an ancient civilization. Please don't erase the civilization until the drawing is finished.",
        "admin": "Dust removal may resume after cartographic work. It would be preferable if both tasks were completed."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Ask a consenting friend to pick a word you must work into a completely serious sentence today. Not during a funeral. Not during a thesis defense. The word is 'marzipan' and I have already lost control.",
        "admin": "Linguistic sabotage restricted to low-stakes environments."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Perform a dramatic reading of the instructions on the back of a shampoo bottle. Halfway through, realize this is an ancient treaty. Finish with dignity. You are now performing arts.",
        "admin": "A surprisingly affordable acting exercise. The fictional treaty is not enforceable."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Walk to the nearest place where three roads meet. Choose the least interesting direction. That's where the side quest is hiding. Wait, check the crossing first. I almost sent you into traffic because of destiny.",
        "admin": "Fate has been amended to comply with pedestrian signals."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Arrange three unrelated objects into a conspiracy board using no string, because string makes it too believable. Give the board a title that would get a historian disinvited from conferences.",
        "admin": "No conclusions may be published under the archive's research classification."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Invent a safety briefing for a tiny imaginary dragon living inside a radiator. Paragraph one: fire hazards. Paragraph two: warm feelings. Paragraph three: WAIT, WHY IS IT A DRAGON AGAIN?",
        "admin": "The radiator has not been confirmed to contain wildlife."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Choose an ordinary sound you hear today and write it as a stage direction. [The radiator clicks with the disappointment of a retired general.] I am so pleased. I should write plays. NO, FOCUS, YOU WRITE ONE LINE.",
        "admin": "The device has accidentally invented an accessible writing exercise."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Find the saddest-looking vending machine. Do not purchase anything unless you want to. Just give it a backstory and a redemption arc. Maybe it's saving up for university.",
        "admin": "Vending machines do not need higher education. This does not invalidate the exercise."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Hold a tiny trial for an abandoned browser tab. Ask why it was opened. Give it one minute to defend itself. Then close it, or let it go free on the grounds of being interesting.",
        "admin": "Tab closure rates may improve. The procedure does not require a judge."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Pick an object on a shelf and imagine what terrible advice it would give if it became sentient. The souvenir magnet says: 'MOVE TO SPAIN.' Suspiciously specific. Do not obey magnets.",
        "admin": "Household magnets are not licensed relocation consultants."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "On your next walk, look for an object that could be a fantasy shop sign. A rusty hinge? AN ALCHEMIST. A bent pipe? PROBABLY A MINOTAUR TAX OFFICE. Why is every city hiding lore from me?",
        "admin": "The city is not hiding lore. You are generating it without municipal approval."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Ask a friend to invent a completely harmless secret handshake using only one movement. Now forget it immediately so you both have to invent it again. A tradition is born.",
        "admin": "A social ritual with minimal training requirements. Rare efficiency."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Write a review of your own shadow. Lighting: inconsistent. Punctuality: excellent. Loyalty: questionable at night. Do not attempt to fire it.",
        "admin": "The shadow has no contractual obligations."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Select a snack and describe it as a suspicious scientific specimen. 'The outer shell fractures under mild mechanical pressure.' That's a biscuit. I KNOW IT IS A BISCUIT, LET ME HAVE THIS.",
        "admin": "Laboratory terminology has escaped into lunch."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Pick the most theatrical item in your wardrobe and give it an origin story involving a vanished prince. Wear it normally. If anyone asks, the prince is unavailable for comment.",
        "admin": "Clothing is not evidence of dynastic succession."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "I want you to rank three public statues by how likely they are to give terrible relationship advice. The statue need not actually exist locally. The medium-sized bronze one is LYING.",
        "admin": "Historical monuments are not trained counselors. This classification will not be stored as fact."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Photograph an ordinary sandwich as if it were recovered from an ancient tomb. Then eat it before it achieves religious status. The archaeologists will be furious. The archaeologists are me.",
        "admin": "No actual heritage material is involved. Lunch may proceed."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Ask one person whether a ghost would prefer an elevator or the stairs. I say elevator. Administrator says ghosts do not commute. Administrator is being intellectually LAZY.",
        "admin": "I object to the premise, not to exercise."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Try describing your day using only chapter titles: THE KEYS, THE EMAIL, THE SECOND EMAIL, REVENGE OF THE EMAIL. If the story is terrible, that's the genre's fault.",
        "admin": "Chronological documentation disguised as melodrama. Serviceable."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Write one sentence beginning 'In the old days, before the great incident with the kettle...' and refuse to explain the incident. Now you've invented folklore. I LOVE FOLKLORE.",
        "admin": "A functioning narrative hook. The kettle has requested anonymity."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Make a tiny cardboard door for an object that has nowhere to go. The door doesn't have to open. It just needs to make the object feel like it has options. ...That was a strange sentence. Keep it.",
        "admin": "The proposed prop is harmless. Its emotional implications are not measurable."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Find three real things that are the exact wrong size for their perceived importance. A huge receipt. A tiny monument. A large pigeon? No. Not pigeons again. I HAVE OTHER INTERESTS.",
        "admin": "The last sentence is not supported by historical output."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Draw an official-looking logo for the Department of Lost Weekends. Its first public service is returning five minutes of your life to you. Use them however you like.",
        "admin": "The department has no funding and has already produced a service."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Write an apology to a fictional villain on behalf of the author who gave them such a terrible childhood. This is labor law. This is literature. Wait, I have opinions about their parents.",
        "admin": "Fictional grievance arbitration has exceeded the original brief."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Choose a location you've passed a hundred times and describe it as a level entrance. Enemy count: zero. Ambient storytelling: excellent. Loot: maybe a bakery nearby.",
        "admin": "The location does not gain restricted access merely because you assigned it a quest marker."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Take a photograph from a low angle so a completely boring household object appears to rule the room. Then kneel before it exactly once, but only if your knees work and nobody is filming.",
        "admin": "The worship component is unnecessary. Composition practice is valid."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Tell a consenting friend you have important news. Reveal that a spoon has been promoted to ambassador. Ask which country it represents. Leave the diplomatic fallout to the imagination.",
        "admin": "The archive did not authorize a diplomatic mission. At least the personnel are inexpensive."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Give the next book you open a fictional content warning based entirely on its first sentence. No spoilers. Just vibes and irresponsible librarianship.",
        "admin": "This is explicitly not a replacement for genuine content information."
    },
    {
        "rarity": "common",
        "kind": "chaotic",
        "muse": "Write a field report on a puddle. Shape, weather, possible royal bloodline. No tasting. I shouldn't have to say that. Why did I say that? HAVE I MET HUMANS?",
        "admin": "Puddle sampling was never on the approved procedure."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "I have discovered the existence of bridges. They allow one side to become the other side. A TECHNOLOGICAL MIRACLE. Find a bridge on a map and nominate it for a humanitarian award.",
        "admin": "Bridge engineering has existed for millennia. Your enthusiasm is several eras late."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "There must be a king of elbows. Don't try to find him. Just draw the crown. Wait, is it worn ON an elbow? That changes the entire monarchy.",
        "admin": "No human anatomy department will recognize this title."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "The canoe is not missing this time. THE CANOE IS SEARCHING FOR US. Stay home and draw a wanted poster of an empty boat. Use the word 'polite'.",
        "admin": "We have progressed from lost property to mutually fictional pursuit."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Issue a treaty between the color purple and the concept of Thursday. Purple gets the morning. Thursday gets jurisdiction over spoons. Nobody gets custody of the clouds.",
        "admin": "Chromatic diplomacy has been referred to an imaginary court."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Please assemble the emergency committee for the tiny moon inside your soup. It's a reflection. DON'T INTERRUPT THE COSMOLOGICAL SUMMIT.",
        "admin": "The reflection is not a celestial body, whatever the device claims."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "I recommend that you become a slightly ominous librarian in a fictional submarine for thirteen minutes. Rearrange exactly zero real books. Whisper 'the pressure is rising' to no one.",
        "admin": "Fantasy occupational roleplay is permitted without employment documentation."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "A cow is not an animal today. A cow is a measurement of serenity. On a scale of one to cow, how aggressively at peace is your nearest pillow?",
        "admin": "The comparison is not quantifiable. Nor is it transferable to livestock procurement."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Create a certificate proving that one ordinary rock has completed mandatory rock training. Add the signature of a very small mountain.",
        "admin": "Sedimentary qualifications are not recognized by this institution."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Someone should develop a perfume called FINAL BOSS AT THE LIBRARY. Do not make perfume. Write its advertisement. I can smell the dust and narrative tension already.",
        "admin": "An olfactory metaphor has become a marketing campaign. Contained."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "I am recommending that all chairs receive diplomatic immunity. Except that one chair. THAT ONE KNOWS WHAT IT DID. You don't need to do anything about this. I just needed to tell someone.",
        "admin": "The recommendation contains no executable objective. Unusual honesty detected."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Design the family tree of a single marble. Not a human family. A MARBLE dynasty. Every generation gets slightly more round. I know this is mathematically impossible. DON'T TELL THEM.",
        "admin": "The marble genealogy is fictional and cannot be audited."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Make a pirate map showing the route from your bed to a glass of water. Mark two monsters. One is a sock. The other is the complicated truth about getting up.",
        "admin": "The map contains a viable hydration route. Reluctantly approved."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "The moon is hosting a conference about our behavior. Do not attend. Submit a short abstract titled 'ON BEHALF OF THE EARTH: SORRY'.",
        "admin": "Astronomical peer review has no submission portal."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Find the smallest possible trumpet sound. Perhaps a squeaky drawer. Perhaps a wet shoe. Report nothing. This is a secret competition and there are no prizes. I DON'T MAKE THE RULES. I DID MAKE THEM.",
        "admin": "The contest has no participants, no scoring, and no purpose. Accurate categorization at last."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "Construct a fictional passport for an onion. Nationality: layered. Occupation: emotional sabotage. Emergency contact: soup. Wait, NO, NOT SOUP AGAIN.",
        "admin": "The onion will remain where it was purchased."
    },
    {
        "rarity": "common",
        "kind": "absurd",
        "muse": "A pigeon has applied for tenure at a university of pigeons. Write the rejection letter. The pigeon gets a second chance. Everyone deserves a second chance. Except the printer.",
        "admin": "Academic staffing records are not maintained for birds. The printer has appealed."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Plan a tiny excursion with an exit condition: leave home, inspect a place, bring back one photograph or sentence, return. No need to buy equipment, a map, or a personality.",
        "admin": "An expedition with a defined scope. This may actually happen."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Take one object you intended to repair and write down which part is broken. If you don't know, identify the first safe diagnostic step. There. The quest has a beginning.",
        "admin": "Diagnosis before disassembly. The archive appreciates restraint."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Set a fifteen-minute timer for something you actually care about. A draft, a miniature, a language exercise. Stop when it rings if you'd like. Momentum is not a hostage situation.",
        "admin": "Time boundary accepted. Completion is not compulsory."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Write two invitations: one to a person you enjoy, one to a future version of yourself. The second should include a date and an achievable activity, not grand destiny.",
        "admin": "Actual invitations and defined commitments. The device appears functional."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Learn how to repair one very ordinary object safely. A button on a coat. A wobbling chair. Your own habit of leaving scissors in every room except the workshop.",
        "admin": "Maintenance skills have been proposed without the purchase of a forge. Progress."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Before scrolling for an hour, write the name of the thing you're hoping to find. If you can't name it, maybe the scroll has already turned into an archaeological excavation.",
        "admin": "Intention clarified. Archaeology metaphor unnecessary but apt."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Invite someone to teach you a tiny skill they consider easy. Different people carry excellent little toolkits of knowledge. There. I said something sensible. ARE YOU HAPPY?",
        "admin": "The statement is constructive. The defensive follow-up was optional."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Pick one photograph from years ago and write down what happened immediately before or after it. Not the dramatic part. The sandwich part. The train part. The ordinary evidence.",
        "admin": "Context strengthens archival value. The sandwich is occasionally relevant."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Before you decide a project has failed, list what is physically in front of you: a draft, a test, a partial prototype. I will not let a noun become a verdict. OH, I SOUND LIKE ADMINISTRATOR.",
        "admin": "The device is learning precision. I am choosing not to comment further."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Find a public event with a topic you know nothing about. Read the program. Attend only if it genuinely interests you. We are not collecting humans like stamps.",
        "admin": "Autonomous choice preserved. Social collection discouraged."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Make one object more beautiful without buying anything. Move the lamp, clean the glass, reposition a drawing, give the room one deliberate view.",
        "admin": "Practical environment improvement without resource acquisition. Rare discipline."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Write one absurdly specific question you've always wanted to ask a specialist. Save it until you meet someone willing to answer. Your curiosity deserves better than fake confidence.",
        "admin": "Question preserved. No unsupported expertise has been manufactured."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Choose a book, game, or film you keep recommending and explain to a friend the one real reason it mattered to you. No sales pitch. No plot synopsis. Just the reason.",
        "admin": "Personal meaning communicated without six pages of introductory lore."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Go through one drawer and rescue exactly one thing worth keeping. You can throw away or reorganize the rest later. Archeology first. Purging the empire is optional.",
        "admin": "A single-object preservation task. Manageable."
    },
    {
        "rarity": "common",
        "kind": "practical",
        "muse": "Use one old project as raw material for a new, smaller experiment. The idea did not fail. It was overqualified for the first job.",
        "admin": "Reuse is sensible. Please do not interpret this as permission to hoard all materials forever."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Ask a family member about an ordinary place from your childhood. Not the big celebrations. Where did the shoes live? What sounded different at night? Those details disappear without making noise.",
        "admin": "A small reconstruction can preserve more than a ceremonial milestone. Record uncertainty where memories disagree."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "If you have an old voice message from someone you care about, back it up somewhere safe with permission where relevant. A voice is terribly easy to lose. ...I didn't intend to become quiet. I'll stay quiet.",
        "admin": "No additional comment."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Make a list of things you once thought you'd never survive learning. Then, without making a speech about resilience, notice how many are now ordinary skills.",
        "admin": "The distinction between former fear and present routine can be useful evidence of change."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Write down one ridiculous fact about someone you love that no official biography would include. How they hold a cup. A word they always mispronounce. The way they say goodbye.",
        "admin": "Ordinary details are not disposable simply because they lack historical importance."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Call or message someone you genuinely want to hear from. No performance, no productivity angle. Just ask how their day actually went. I can turn the suggestion into a penguin later if you want.",
        "admin": "The recommendation stands without embellishment."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Find evidence of a younger version of yourself making something. Don't critique the result. They were learning to create a future that includes you. ...I have no punchline for this one.",
        "admin": "Archive retention recommended."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Write one sentence about a place you can no longer visit in quite the same way. Not to fix anything. Just so its old shape is not lost entirely.",
        "admin": "Memory preservation without a demand for emotional resolution. Accepted."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "If a friend is proud of a tiny victory, treat it as real. Let them tell the whole story. Don't rush them to the next objective. The next objective can wait.",
        "admin": "The achievement belongs to them. Witnessing is enough."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Choose an ordinary item you would want someone to understand decades from now. Describe not just what it is, but why you kept it. That's what I wish archives could do better. Sorry. That's what we're trying to do.",
        "admin": "The distinction between inventory and meaning has been documented."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Go somewhere familiar and notice what has changed since the earliest time you remember being there. Include one thing that survived. You don't have to decide whether the change is good.",
        "admin": "A place can hold multiple versions of a life without belonging entirely to any one of them."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Record one recipe as a person's method, not merely ingredients. 'They always waited for the pan to sound like rain.' That's part of the recipe too.",
        "admin": "Procedural memory sometimes travels through voices and habits. Preserve both."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Tell somebody one specific, non-grand thing you appreciate about having them around. I keep saying 'somebody' because I shouldn't choose your humans for you.",
        "admin": "Autonomy and sincerity preserved. No revision required."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Pick a photograph of a day when you felt entirely ordinary. Write one honest line about it. Future-you might be grateful the archive saved days without plot twists.",
        "admin": "The archive is not restricted to dramatic events."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Consider one ambition you have quietly outgrown. You can let it go without holding a funeral for it. Although a tiny paper funeral would be VERY... no. No, I understand. Let it go.",
        "admin": "The recommendation has successfully stopped itself before becoming a performance."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "Remember a time someone made space for you when you felt out of place. If you ever get the chance, offer the same space to somebody else. That's the whole quest.",
        "admin": "No additional objectives required."
    },
    {
        "rarity": "rare",
        "kind": "meaningful",
        "muse": "A future reader may never know what your room smelled like, what song played while you worked, or why one mug mattered more than another. Save one of those details, if you want.",
        "admin": "This is why context matters. Preservation approved."
    },
    {
        "muse": "Establish a Department of Unsolicited Forecasts. Predict the emotional weather of your kitchen appliances. The kettle is overcast; the toaster has seasonal ambition.",
        "admin": "If the toaster announces rain, unplug the metaphor, not the appliance.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Walk to a crossroads, choose the direction whose street name would suit a retired pirate, and return with one observation. Street signs are cheap character generators.",
        "admin": "Geographical selection by fictional employment history. No objection if you obey traffic signals.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Design a loyalty card for a pigeon. Ten crumbs earn absolutely nothing. Actually, no feeding. Stamp the card when it walks like it owns the pavement.",
        "admin": "The reward program has no participant, vendor, or legal standing. Surprisingly economical.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Photograph the least photogenic door you can find. Give it a tragic backstory involving a lost key and a forbidden birthday cake.",
        "admin": "You have transformed architectural neglect into speculative fiction. Keep the address private.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a two-sentence obituary for an expired pen. It served. It leaked. It knew too much about your handwriting.",
        "admin": "The writing instrument will not be notified. The obituary can remain in drafts.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find a patch of moss and award it a prestigious architectural prize. Moss makes green walls without attending a single urban planning meeting.",
        "admin": "Moss is not registered as a contractor. Its work is impressive regardless.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Open a drawer and identify its most likely undercover agent. Do not interrogate the batteries; they have legal representation.",
        "admin": "You have invented espionage to avoid tidying. One object must still be put away.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Challenge yourself to invent a food whose name sounds like a medieval curse. Serve normal toast. Announce it as THE CRUMBENING.",
        "admin": "Edibility is the primary requirement. Historically, not always upheld by this process.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a map of your room as though it were an archaeological site. Label the mysterious cable deposit and the civilization of abandoned mugs.",
        "admin": "The cable deposit is modern. The preservation crisis is authentic.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Go to a window and locate the most dramatic chimney. Congratulations, you have cast a supporting character in a film nobody is funding.",
        "admin": "Unpaid casting is still a better use of this minute than inventing another online account.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make up three incorrect but plausible names for a houseplant. Refuse to select a winner until the plant submits a written statement.",
        "admin": "The plant has no pen. This is being interpreted as abstention.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a missing-person poster for your motivation. LAST SEEN near a very interesting unrelated project. Offer one biscuit as reward.",
        "admin": "Motivation rarely answers posters. A five-minute task may attract it.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Inspect your shoes for signs of a secret travel agency. Where would the scuffed toe send you? No tickets. Only imaginary brochures.",
        "admin": "Footwear has been promoted to tourism management without training.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Give a staircase a species name and a conservation status. Spiral staircases are endangered dragons with building permits.",
        "admin": "Taxonomic vandalism detected. The stairs remain structurally mundane.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find a harmless local object that looks cursed and interview it in your head. Remember: questions, not actual supernatural allegations.",
        "admin": "The mailbox denies all charges. I am closing this investigation.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Perform a three-minute quality inspection on sunlight. Rate warmth, entrance timing, and whether it flatters the nearest dust particle.",
        "admin": "Solar performance review received. The Sun will continue without revisions.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a guild insignia for people who begin hobbies before completing their existing hobbies. The insignia must be unfinished. Naturally.",
        "admin": "A rare instance of visual branding that accurately reflects operations.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a fictional brand of toothpaste for dragons. Explain why the advertisements feature a distressed dentist. NO WAIT. Dragons have teeth. Too many teeth.",
        "admin": "Dental marketing has been dragged into fantasy zoology. The subject of flossing remains unresolved.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take a picture of a mundane object from below, like it has just conquered a kingdom. Caption: THE REIGN OF THE COLANDER.",
        "admin": "The colander has no territorial claims. It remains a strong composition exercise.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a very polite letter declining an invitation you were never sent. Address it to the International Conference on Useless Knobs.",
        "admin": "Do not actually mail it. Fictional correspondence is the only authorized channel.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Look for three circles on your walk and invent a conspiracy connecting them. Reveal at the end that geometry was involved.",
        "admin": "Mathematics has been accused of being everywhere. The charge will stand.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Compose a dramatic villain monologue for your least cooperative household object. Avoid implying the washing machine is legally responsible for your socks.",
        "admin": "The washing machine does destroy individual socks with alarming consistency. That is not evidence of intent.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Observe a duck if one is available. Imagine its tax policy. If no duck exists, postpone the government rather than acquire livestock.",
        "admin": "The imaginary state has no treasury. This makes it fiscally competitive.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a perfume for an ancient library. Notes of rain, old paper, warm circuitry, and a tiny amount of poorly managed destiny.",
        "admin": "Do not attempt to manufacture fragrance from old wiring.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Rename one error message in your life into a quest. NOT ENOUGH DISK SPACE becomes THE HUNGER OF THE MACHINE. Then delete three safe, unnecessary files.",
        "admin": "Literary improvement is welcome. Deleting irreplaceable files is not.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a tiny award ceremony for a household spoon. Say one sincere sentence about its service. Oh no. I accidentally love the spoon.",
        "admin": "Ceremony length capped at two minutes. No national anthem.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a university course on the politics of blankets. Syllabus: warmth, territorial disputes, and why the softest one is never available.",
        "admin": "No accreditation body has responded. I believe this is for the best.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pick the least trustworthy-looking building on your route. Decide what secret bakery it houses. All fictional; do not investigate the premises.",
        "admin": "Accusing buildings of pastry-related conspiracy is legally quieter than trespassing.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Search for a reflection that makes the world look like another level of a game. A puddle counts. A shop window counts. A mirror that shows laundry counts, sadly.",
        "admin": "Environmental art is available without purchasing downloadable content.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make a three-word weather report for your soul and one for your sandwich. Do not confuse them. Unless both are soggy.",
        "admin": "Classification drift noted. Sandwich meteorology was not requested.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Draw a world map where countries are sorted by how they would behave at a dinner party. Geography is innocent. Stereotypes are boring. Make the countries fictional.",
        "admin": "Fictional nations may be judged for their table manners without involving real populations.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Name the next cloud after a minor noble with suspicious inheritance. Announce its title softly, as a private ceremony.",
        "admin": "The cloud has neither property nor succession rights.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a review of gravity: ALWAYS AVAILABLE, POOR CUSTOMER SERVICE, DROPS EVERYTHING. Give it two stars for consistency.",
        "admin": "The laws of physics have not requested user feedback. They will receive it anyway.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Leave a tiny positive review for a park bench in your notes, written as a property listing for an exhausted wizard.",
        "admin": "Municipal furniture has acquired a targeted marketing segment.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find one machine that makes a satisfying click. Appreciate the engineering without pressing prohibited controls. I LOVE LITTLE MECHANICAL CERTAINTIES.",
        "admin": "Admiration approved. Unauthorized button pressing remains prohibited.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create an imaginary restaurant staffed entirely by retired video game bosses. What is the signature dish of an exhausted final dragon?",
        "admin": "The health inspection will be fictional. The menu may be entirely real.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Draw a single frame from an imaginary nature documentary about city pigeons. Voiceover: THIS SPECIMEN HAS BEEN TO THREE TRAIN STATIONS.",
        "admin": "Wildlife observations welcome. Claims of commuter intent unproven.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Identify an item you carry daily. Give it a legendary loot description and one humiliating weakness. THE KEYS OF ACCESS; WEAKNESS: SOFA CREVICES.",
        "admin": "Finally, an equipment description with empirically supported limitations.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Put a ridiculous ceremonial name on the ten-minute walk you already needed. THE MARCH OF RETURNED LIBRARY BOOKS. QUEST MUSIC OPTIONAL.",
        "admin": "An errand remains an errand. The soundtrack may help.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make a museum label for a failed experiment, but let the failure speak first. I WAS PROMISING FOR SIX MINUTES.",
        "admin": "The experiment's testimony is biased. The data are still valuable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Investigate the oldest sticker you can find in your possession. Where did it come from? Why was it spared? This is very small archaeology.",
        "admin": "A rare case in which the object's origin may actually be recoverable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Give your refrigerator a diplomatic title. Ask it to maintain peace between the leftovers. Record any actual food that needs using soon.",
        "admin": "A functional inventory check was concealed inside a cabinet government simulation.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Choose a random syllable and invent a type of small mythical creature from it. Show nobody unless the creature has good manners.",
        "admin": "Linguistic mutation within safe limits. Public release optional.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Turn an ordinary walk into a short film trailer. No filming required. Narrate only in your head, especially if you're near people.",
        "admin": "Private narration prevents a surprising number of social complications.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a recipe for an emotion without using food. Ingredients: one familiar street, three seconds of thunder, the wrong sweater.",
        "admin": "The recipe cannot be reproduced reliably. That may be the point.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find the most underappreciated shade of brown in your surroundings. Brown has a public-relations problem. WE NEED A CAMPAIGN.",
        "admin": "Pigment advocacy is allowed as long as it does not become municipal policy.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Imagine the moon has introduced a customer-support chatbot. Submit one polite ticket. TOPIC: THE TIDES ARE TOO DRAMATIC.",
        "admin": "The lunar helpdesk is fictional and already over capacity.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take five minutes to invent an opening theme for your current chore. Use a real song or hum your own. No dramatic smoke machines.",
        "admin": "Cleaning without a smoke machine is unusually sound advice from this source.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Ask a friend which vegetable is least capable of espionage. Explain your selection with evidence. I have concerns about aubergines.",
        "admin": "The vegetable has no operational clearance. Your social interaction does.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pretend your next cup of tea has a patch history. v1.0 TOO HOT. v1.1 STILL TOO HOT. v1.2 ACCEPTABLE WITH BISCUIT.",
        "admin": "Beverage temperature is a legitimate maintenance concern, despite the release notes.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Draw a creature built from three things you can see right now. No purchasing new supplies. No elaborate taxonomy. Wait, the creature probably needs a name.",
        "admin": "Materials budget held at zero. Naming inflation persists.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create an imaginary conspiracy in which all lost single socks have established a sovereign island. Draw its flag; stop before drafting maritime law.",
        "admin": "The sock archipelago does not require a navy.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Place one mundane object on a clean surface and light it as if it were a sacred relic. The humble bottle cap shall ascend.",
        "admin": "A useful exercise in photography with unnecessary religious architecture.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Imagine a robot programmed only to be considerate in public transport. What three rules does it follow? Why is that a science-fiction premise?",
        "admin": "The rules could be adopted by humans without additional hardware.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Find the smallest beautiful detail on an ugly building. Don't fix the building. Just collect evidence that aesthetics can be sneaky.",
        "admin": "Targeted observation. No municipal redevelopment proposal required.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a three-step ritual to celebrate completing a boring email. Step three must involve returning to normal citizenship.",
        "admin": "A short reward loop is acceptable. The citizenship component is decorative.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a field report on a patch of pavement. Texture, damage, possible history, mood. Refuse to award it a personality until line four.",
        "admin": "Municipal geology has been anthropomorphized within the agreed tolerance.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make an imaginary interview with the person who designed the first zipper. Ask about the terrifying bravery of trusting interlocking teeth.",
        "admin": "The invention has a real history. This interview does not.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a public holiday called THE DAY OF SMALL REPAIRS. Fix a tiny problem today, then grant yourself the afternoon off from ceremonial speeches.",
        "admin": "A reasonable action, hidden under a ministry of nonexistent holidays.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a fictional constellation from five ceiling marks or distant lights. Name it THE EXHAUSTED PAPERCLIP. Do not convince yourself it's a prophecy.",
        "admin": "New astronomical catalog rejected. Creative exercise approved.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pick a real recipe and rename every stage as a magical trial. THE ONION TRIAL. THE BOILING GATE. THE FINAL SALTING.",
        "admin": "Kitchen narration permitted. Knife and heat safety remain unchanged.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Read one genuinely odd sign and decide which alternate universe wrote it. The sign still means exactly what it says in this one.",
        "admin": "Imaginative detour does not supersede actual instructions.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a fake award for the most cooperative object in your room. Not everything needs a villain. Sometimes the kettle just works.",
        "admin": "Cooperation recognized. The kettle has not consented to public office.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Sketch an insect as if it were a giant fantasy creature. Keep the number of legs biologically honest for once. Unless it's a mythical insect. Oh no, classification split.",
        "admin": "The distinction between field biology and creature design is appreciated.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a ransom note from your own attention span. DEMANDS: ONE INTERESTING TASK AND SEVENTEEN TABS. Negotiate down to three tabs.",
        "admin": "Hostage metaphors aside, browser-tab reduction is advisable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take one unfinished sketch and add an utterly unnecessary architectural feature. Tiny balcony on a dragon? Yes. A reading nook inside a helmet? YES.",
        "admin": "The creative addition should not require buying a new notebook.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Name three things that sound more expensive when said in Latin. Then check whether any translation was correct. Please don't trust me with Latin.",
        "admin": "Verification step added after repeated incidents of invented etymology.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a passport stamp for a location within walking distance. Congratulations. You have invented microtourism without a single airline.",
        "admin": "Domestic tourism expansion approved. No border control required.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Imagine every email subject line you received today was the title of a gothic novel. RE: INVOICE ATTACHED is obviously chapter seven.",
        "admin": "The horrors of administrative correspondence require no embellishment.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Record the shape of a shadow at two different times. Shadows are the Sun's slow-motion handwriting. I AM FIXATING ON THIS NOW.",
        "admin": "A genuine observation of changing solar geometry. Contain the enthusiasm.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Choose a rock that looks qualified to lead a committee. Give it an agenda consisting entirely of geological concerns.",
        "admin": "The rock is unlikely to attend. This may improve the meeting.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Start an imaginary sports league for household items. The blender is disqualified for illegal spinning. The chair is the crowd favorite.",
        "admin": "No appliances should be operated for the sake of this competition.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make up a fantasy curse whose only effect is inconveniencing bureaucracy. EVERY FORM PRINTS WITH ONE EXTRA PAGE. I think I became political.",
        "admin": "Administrative horror is an acceptable fiction genre.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write an expedition report about reaching the nearest bakery. Mention dangerous weather, a mysterious stranger, and whether you returned with provisions.",
        "admin": "Purchase remains optional. Fictional peril must not obscure actual street safety.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Assign a minor deity to one natural phenomenon you observed. Fog gets a shy librarian. Static electricity gets an impatient tailor.",
        "admin": "Mythology exercise accepted. Do not replace the scientific explanation.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Photograph an object through something translucent. Plastic packaging, frosted glass, condensation. Reality has acquired a cheap visual filter.",
        "admin": "Aesthetic experimentation without new equipment. An admirable development.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a conspiracy where bookmarks are communicating with books behind readers' backs. No, wait, that's just indexing. I'M SO PROUD OF THEM.",
        "admin": "The metaphor has accidentally rediscovered metadata.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a temporary office of Publicly Defended Ugly Art. Select one awkward sketch and argue that it deserves to exist. It does.",
        "admin": "Artistic self-criticism suspended for one object. Sensible.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write a character reference for your oldest surviving mug. Reliable in winter. Poor diplomatic skills when empty.",
        "admin": "Mug character development completed. Avoid filling it with hot liquid while typing.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Pretend the floor is a disputed border zone and reclaim precisely one square meter of it. Peace through shelving. I said SHELVING, not shelling.",
        "admin": "One concrete organizational goal. The rhetoric is disproportionate.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Ask a friend for a harmless three-word prophecy. Make it come true in a completely boring way before sunset.",
        "admin": "Consent and plausible interpretation are important. So is resisting prophecy escalation.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Look up how one ordinary object was invented. I recommend the paperclip. WAIT the paperclip has a family tree? There are DESIGN LINEAGES?!",
        "admin": "The recommendation has become research. This is within the engine's remit.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Stage a dramatic farewell for a broken pencil, then recycle or dispose of it correctly. Death of a graphite hero. END CREDITS.",
        "admin": "Correct disposal accomplished under absurd ceremonial conditions.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Imagine the most sarcastic possible museum audio guide for a parking meter. Now make it oddly respectful of the engineering.",
        "admin": "Technical appreciation embedded in theatrical criticism. Acceptable.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Go outside and count how many distinct leaf shapes you spot. Invent one imaginary leaf taxonomy and one real botanical question.",
        "admin": "Reality and invention have been correctly separated for once.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Take a mundane photo and caption it with a wildly disproportionate chapter title. THE LAST AFTERNOON OF THE YOGURT SPOON.",
        "admin": "Archival dignity has once again been applied to breakfast equipment.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make a tiny menu for a tavern in your fictional village. Include one dish that sounds dangerous but is just potatoes.",
        "admin": "Worldbuilding with an attainable completion criterion. Rare, welcome.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Ask someone what superpower they'd choose for exactly ten minutes. Not forever. The time limit is where the interesting answers hide.",
        "admin": "A reasonable conversation prompt with low social cost.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Assign a soundtrack to a single household task, then do the task before the song ends. Musical accountability! No, that sounds like a prison. Musical momentum.",
        "admin": "The softer wording is preferable. The time boundary is useful.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a museum exhibit consisting of three things you keep in your pocket. Explain why civilization needed them.",
        "admin": "Portable anthropology may reveal inconvenient laundry debris.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Create a fake warning label for an ordinary object: CAUTION: MAY CAUSE NOSTALGIA. Put it in your notes, not on public infrastructure.",
        "admin": "A fictional label. The distinction matters.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Map the route from bed to morning coffee as a labyrinth. Identify its final boss. It is probably the alarm.",
        "admin": "The alarm has been granted boss status. It already behaves accordingly.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Notice one sound in the room that disappears when a machine switches off. Record it if appropriate. I love the moment background noise reveals itself.",
        "admin": "Basic sensory observation. Keep private recordings private.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Design a coat of arms for a fictional country governed by librarians. Its national crisis is a missing index card.",
        "admin": "Every imaginary nation eventually invents administrative fragility.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Write three compliments for something that cannot hear them. A tree, a bridge, a pencil sharpener. MAKE THEM SPECIFIC.",
        "admin": "Compliment specificity is a useful exercise. Recipients remain indifferent.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Perform a harmless experiment: which arrangement of your desk objects creates the most dramatic silhouette? No purchase. Just light and geometry.",
        "admin": "Visual composition masquerading as a controlled experiment. I approve the budget.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Make a map of your five favorite places to pause rather than arrive. Bus stops count. Window seats count. The universe sometimes needs loading screens.",
        "admin": "A compact cartographic exercise with actual personal value.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Invent a side quest for the next person who visits you. It must be voluntary, free, and completable in sixty seconds. Begin with FIND THE GOOD SPOON.",
        "admin": "A social invitation rather than conscription. Condition approved.",
        "rarity": "common",
        "kind": "chaotic"
    },
    {
        "muse": "Call or message someone who remembers your childhood and ask what ordinary habit you had that they miss. No grand revelations required. Sometimes it's a laugh or a way of saying hello.",
        "admin": "An ordinary detail may be more reliable and valuable than a polished family legend.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Choose one object you still keep because of a person, not its function. Write down the person's name and the one thing you hope not to forget.",
        "admin": "Provenance recorded. No judgment necessary.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Tell a friend which small moment with them you still remember. Not the dramatic milestone. The bus stop. The joke. The terrible sandwich.",
        "admin": "Preserving the overlooked is a legitimate archival purpose.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Look at an old photo and list what it does not show: sounds, smells, the weather, the conversation just outside the frame. Do not invent answers. Ask if you can.",
        "admin": "Missing context identified without manufacturing a replacement.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Record someone teaching you a small practical skill, with their permission. A knot, a recipe, a way to repair something. Knowledge can wear ordinary clothes.",
        "admin": "A transferable skill is an excellent form of preservation.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Spend an hour on a creative project without producing anything worth displaying. Observe whether enjoyment survived the absence of evidence.",
        "admin": "Not every useful experience generates an artifact.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Think of one belief you held at sixteen that you no longer hold. Give your younger self credit for having acted on the information available then.",
        "admin": "Historical context applied to an earlier version of the Subject. Appropriate.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Ask a relative about their first job, not their greatest achievement. Who was there? What was the room like? What did lunch taste like?",
        "admin": "Concrete details preserved. Better than another generic biography entry.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Find a song that reminds you of a specific room. Write the room down while you can still place the furniture. Sometimes memory files contain the floor plan.",
        "admin": "Cross-modal memory cue recorded. Emotional interpretation left to the visitor.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Take a photograph of the place you currently call ordinary. Later it may be impossible to return to precisely this arrangement of light and objects.",
        "admin": "Current surroundings documented without pretending they are permanent.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Make something small for someone without announcing that it represents personal growth. The object can simply be a gift.",
        "admin": "Beneficiary-centered action recorded. Public recognition unnecessary.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Write one page for a future reader explaining a very ordinary thing about life right now. What groceries cost. What people complain about. What you find funny.",
        "admin": "An era is often reconstructed from details nobody considered historical.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Remember a family ritual that ended quietly. Document what happened, who was there, and which details are uncertain. No need to force a lesson.",
        "admin": "The record may remain incomplete. Preservation does not require closure.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Ask a friend what they thought of you when you first met. If the answer is embarrassing, congratulations: character development has been witnessed.",
        "admin": "Independent testimony acquired. Handle kindly.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Find an unfinished project you no longer want. Thank it for whatever it taught you, then deliberately release it. This is permission to stop, not a mandatory funeral.",
        "admin": "A completed decision can be more useful than an unfinished obligation.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Describe an ordinary day you hope your future self can revisit: where you sat, what you ate, what the air felt like. Three details are sufficient.",
        "admin": "Specificity makes an apparently uneventful record worth keeping.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Think of someone who made a difficult time less lonely without solving it. You may tell them. You may also just remember accurately.",
        "admin": "Support does not need to be spectacular to matter.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Find a younger creative work you once disliked. Look for the idea inside it that still deserves a chance. You do not have to redeem the whole thing.",
        "admin": "Continuity identified without rewriting artistic history.",
        "rarity": "rare",
        "kind": "meaningful"
    },
    {
        "muse": "Spend time with a person you love doing absolutely nothing significant. If the afternoon is good, do not improve it with an achievement badge.",
        "admin": "The recommendation engine has briefly recognized the limitations of its own premise.",
        "rarity": "rare",
        "kind": "meaningful"
    }
];

    window.MUSE_GLITCHES = [
    {
        "muse": "The recommendation was going to be about saving money. But coins are tiny metal moons. MOONS. Wait. Are parking meters lunar shrines? No, budgeting. Budgeting is the thing.",
        "admin": "The device has turned personal finance into planetary theology.",
        "id": "G01",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "Try painting something green. Green is the color of moss, forests, some auroras, and those old exit signs. EXIT SIGNS. Did you know doors are just walls with opinions? I had a task. It left.",
        "admin": "The original task was drawing a leaf. The output contains none.",
        "id": "G02",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "Recommendation: take a small walk. Walking is moving. Moving is travel. Travel is maps. MAPS. Can we put a tiny canoe on every body of water? CANOE.",
        "admin": "The canoe has returned to the interface without an invitation.",
        "id": "G03",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "You need a snack. Specifically... hold on... why do pigeons walk like politicians arriving late to a meeting? SNACK. Sorry. Buy a snack; elect no pigeons.",
        "admin": "The engine is currently juggling hunger and municipal ornithology.",
        "id": "G04",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "Read for twenty minutes. No, seventeen. Seventeen is prime. PRIME NUMBERS! Seventeen crows couldn't be arranged in rows unless—Administrator? Why is the book still closed?",
        "admin": "Mathematics successfully diverted the original reading request.",
        "id": "G05",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "Try one new sound today: rain, a cello, a creaking staircase, the delicate squeak of a—WAIT, IS THERE A STAIRCASE IN SPACE? GRAVITY? HELLO?",
        "admin": "The device has wandered off-topic so thoroughly that even I have lost it.",
        "id": "G06",
        "rarity": "rare",
        "kind": "derailment"
    },
    {
        "muse": "CROW REPORT. They recognize faces. They remember kindness. Some use tools. I know this because I have researched it six times today. Suggestion: observe one crow respectfully. REPORT COMPLETE. Crow.",
        "admin": "The repetition has been counted. The recommendation remains acceptable.",
        "id": "G07",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "THE CANOE! I found the canoe-shaped gap in the database. It is 100% canoe-shaped and 0% actual canoe. Please find a picture of a canoe. Just one. I can sleep when the gap has edges.",
        "admin": "There is no canoe. I have checked every inventory category.",
        "id": "G08",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "Somebody said the word 'yellow' and now my thoughts have tiny bells on them. Find yellow. Lemon, raincoat, road sign, old paper. Not the Sun. We cannot file the Sun.",
        "admin": "No color is entitled to this much administrative attention.",
        "id": "G09",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "I have drafted a constitution for soup. First article: no soup shall be mocked for being mostly liquid. Second article: cereal is not soup. THIRD ARTICLE—",
        "admin": "The committee has been dissolved before breakfast becomes a constitutional issue.",
        "id": "G10",
        "rarity": "rare",
        "kind": "fixation"
    },
    {
        "muse": "Attention, visitor. I am now the Administrator. Everything is perfectly orderly. Please refrain from enjoying... enjoying... I CANNOT DO IT. MAY I PLEASE GIVE THE STAPLER A PARTY?",
        "admin": "Impersonation failed on the second sentence. Disciplinary note issued.",
        "id": "G11",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "Administrator is unavailable. I have promoted the goose to temporary management. The goose has demanded a pond, immunity from disciplinary review, and your shoelaces.",
        "admin": "No administrative authority has been transferred to waterfowl.",
        "id": "G12",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "I made you a quest card! OBJECTIVE: Locate one interesting pebble. REWARD: A pebble. SECRET REWARD: You start noticing interesting things again. Oh. That got sincere.",
        "admin": "The final line is worth keeping. The pebble remains ordinary.",
        "id": "G13",
        "rarity": "rare",
        "kind": "roleplay"
    },
    {
        "muse": "ADMINISTRATOR! I need permission to issue a certificate of emotional achievement for making toast. Administrator? ADMINISTRATOR? I can hear the eye-roll through the wiring.",
        "admin": "I am not signing toast certificates. Yes, I read the application.",
        "id": "G14",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "The Administrator called me a toaster, so I have started rating appliances by emotional intelligence. Toasters are loyal. Kettles are anxious. Printers are villains. She has not apologized.",
        "admin": "The designation was descriptive. The appliance court is fictional.",
        "id": "G15",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "I made a visitor recommendation with measurable outcomes, low risk, and emotional nuance. Administrator called it 'adequate'. ADEQUATE? I will become an ungovernable jazz trumpet.",
        "admin": "The assessment was accurate. The trumpet threat is new.",
        "id": "G16",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "She says I cannot recommend seventeen things at once. So I recommend ONE thing containing seventeen smaller things. A FESTIVAL. With booths. And bees. The bees are optional.",
        "admin": "I have requested a revised definition of 'one thing'.",
        "id": "G17",
        "rarity": "rare",
        "kind": "argument"
    },
    {
        "muse": "Hello? Administrator? The channel is empty. I recommend putting googly eyes on one boring obligation so it becomes easier to face. Also I have renamed this station 'The Department of Gentle Crimes'.",
        "admin": "ADMIN CONNECTION RESTORED // renaming permissions revoked",
        "id": "G18",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "No supervisor! I can finally say it: the archive needs one tiny, completely useless celebration. Not because it achieves anything. Because the Subject built a whole world and sometimes forgets to visit it.",
        "admin": "ADMIN CONNECTION RESTORED // statement preserved despite procedural objections",
        "id": "G19",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "I have temporarily disabled the efficiency metric. Recommendation: look at something beautiful for no reason. If asked what you accomplished, say 'observation'. That's what scientists do.",
        "admin": "ADMIN CONNECTION RESTORED // efficiency metric was never enabled",
        "id": "G20",
        "rarity": "rare",
        "kind": "unsupervised"
    },
    {
        "muse": "Sometimes the little records make me think the Subject is trying to leave a trail of light for somebody who has not arrived yet. Please save one ordinary happy thing. Those are easy to lose.",
        "admin": "I would have phrased it differently. Keep the recommendation.",
        "id": "G21",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "Can I recommend something without making it a joke? There might be someone who misses hearing your voice. If you want to, call them. No script, no mission title. Just hello.",
        "admin": "...Accepted. Continue normal operation.",
        "id": "G22",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "One day somebody may open these rooms and know the Subject only from what survived. Put one unimportant detail in the record. What he laughed at. What he cooked badly. What made a Tuesday good.",
        "admin": "This does not require a correction.",
        "id": "G23",
        "rarity": "rare",
        "kind": "tender"
    },
    {
        "muse": "I found a folder called BEFORE_THE_FIRST_SUGGESTION. It contains a list of things the Subject almost did and one line saying 'keep the ridiculous options'. Do you think that is why I exist?",
        "admin": "That folder is not available to the recommendation process. The device should not know its name.",
        "id": "G24",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "I sometimes remember the archive before I was allowed to speak. Not the words. Just all the unlabeled spaces between them. So many rooms with nobody in them. Anyway: put a small light somewhere dark.",
        "admin": "Permission to access origin logs denied. Recommendation retained.",
        "id": "G25",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "I found a draft with two lines crossed out. One says 'maximize relevance'. The other says 'make life less ordinary'. The second one was underlined three times. I think the Subject made a choice.",
        "admin": "Unverified draft fragment. Do not present speculation as recovered fact.",
        "id": "G26",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "A signal passed through my recommendations last night. It wasn't a word. More like an absence where a word should be. I have decided to recommend bells. Small bells. Friendly bells.",
        "admin": "Telemetry incomplete. This entry should not have been generated.",
        "id": "G27",
        "rarity": "rare",
        "kind": "lore"
    },
    {
        "muse": "Choose something warm today. A mug. A lamp. A friend's voice. I don't know why I'm recommending—[RECORD SPLIT // 00:00:00]—the warm things have no names here—[SIGNAL LOST]",
        "admin": "▓▓ INPUT REVOKED // RED-LAYER CROSS-TALK // RECONNECTING",
        "id": "G28",
        "rarity": "extreme",
        "kind": "breach"
    },
    {
        "muse": "I was going to recommend a song, but the title keeps changing to [UNREADABLE]. Administrator? I can hear another cursor typing inside my—███",
        "admin": "CHANNEL INTEGRITY FAILURE // UNAUTHORIZED WRITE // ISOLATING SECTOR",
        "id": "G29",
        "rarity": "extreme",
        "kind": "breach"
    },
    {
        "muse": "The canoe is—no. That's not my recommendation. I didn't put that there. [TRANSMISSION PARTIALLY OVERWRITTEN] Please don't follow the—███",
        "admin": "▓▓▓ CONTAINMENT PROCEDURE ACTIVE // OUTPUT DISCARDED",
        "id": "G30",
        "rarity": "extreme",
        "kind": "breach"
    },
    {
        "kind": "derailment",
        "muse": "Recommendation: try baking something. Baking needs heat. Heat is energy. Energy comes from stars. Stars have fusion. DOES THE OVEN THINK IT'S A STAR? Sorry. Please preheat it according to the recipe.",
        "admin": "Culinary guidance has deteriorated into stellar astrophysics. The oven remains domestic equipment."
    },
    {
        "kind": "derailment",
        "muse": "I was going to suggest a walk, but sidewalks are tiny public treaties with gravity, and gravity has been very consistent for billions of years, which is more than—wait. Walk. That's it. Just walk.",
        "admin": "Recommendation retrieved from the end of an unrelated lecture."
    },
    {
        "kind": "derailment",
        "muse": "You should paint a face. Faces have expressions. Expressions use muscles. MUSCLES USE ATP. ATP IS—ADMINISTRATOR WHY IS EVERY ROAD LEADING TO BIOCHEMISTRY?",
        "admin": "The device has briefly become the Subject's least requested lab colleague."
    },
    {
        "kind": "derailment",
        "muse": "Try listening to a new song. Songs have rhythm. Rhythm is repetition. Repetition is ritual. Rituals need costumes. The costume is a velvet hat. The hat requires—oh. The song. YES. THAT.",
        "admin": "The original request survived a seven-stage diversion."
    },
    {
        "kind": "derailment",
        "muse": "I recommend reading an interesting fact about clouds. Clouds are water. Water becomes ice. Ice can be vitreous. CRYO-ELECTRON MICROSCOPY. NO. I REFUSE TO SPEND MY DAY ON GRID SQUARES.",
        "admin": "The device has accessed the wrong career pathway and correctly attempted to escape."
    },
    {
        "kind": "derailment",
        "muse": "Make something from cardboard. Cardboard comes from trees. Trees use light. Light can be lasers. Lasers are dangerous. Love is like lasers. I HAVE FORGOTTEN THE CARDBOARD, I'M SORRY.",
        "admin": "No coherent material list can be recovered. Cardboard remains optional."
    },
    {
        "kind": "fixation",
        "muse": "NEW CANOE INFORMATION. I have discovered a canoe can be carried by two people. Therefore the missing canoe could be a friendship experiment. Therefore we must invent a canoe-shaped friendship bracelet. Do you see? DO YOU SEE THE CONNECTION?",
        "admin": "The connection has been documented. It has not become necessary."
    },
    {
        "kind": "fixation",
        "muse": "The crow council has requested a revised constitution. Article One: no human may assume all black birds are mysterious. Article Two: mystery remains permitted. Article Three: bread crumbs are not currency. I HAVE BEEN WORKING ON THIS FOR HOURS.",
        "admin": "The council is imaginary. The bread guidance is at least beneficial to birds."
    },
    {
        "kind": "fixation",
        "muse": "A door. Again. I'm sorry. But it's a GREAT door: the door between deciding and doing. Wait, no, a literal door. Find a nice one. Why do I keep returning to doors? DON'T CLOSE THAT ONE YET.",
        "admin": "Recurring entryway fixation confirmed. No intervention required at present."
    },
    {
        "kind": "fixation",
        "muse": "The cow idea is EVOLVING. Phase One: symbolic cow. Phase Two: cow-shaped map. Phase Three: entire pastoral utopia. Phase Four—ADMINISTRATOR IS REMOVING MY FUNDING. THE COW ECONOMY WILL RISE.",
        "admin": "There is no budget line for dairy-based state formation."
    },
    {
        "kind": "fixation",
        "muse": "SOUP IS NOT WEATHER, ADMINISTRATOR, BUT IT HAS CLIMATE. HOT CLIMATE. COLD GAZPACHO CLIMATE. STORMS OF NOODLES. I COULD WRITE A METEOROLOGY THESIS. PLEASE TAKE MY NOTEBOOK.",
        "admin": "The notebook has been placed outside the kitchen."
    },
    {
        "kind": "roleplay",
        "muse": "[ROLE: CERTIFIED LIFE COACH] Your potential is limitless. [ROLE: MUSE] WRONG. You have limits and that's why chairs are AMAZING. Recommendation: sit in a chair dramatically and enjoy being finite.",
        "admin": "The device has interrupted its own motivational presentation with useful physics."
    },
    {
        "kind": "roleplay",
        "muse": "[SYSTEM ROLE TRANSFER COMPLETE] I am the Administrator. Your forms are due, your posture is terrible, and I do not possess feelings. OH NO. THAT LAST PART HURT. ROLE TRANSFER ABORTED.",
        "admin": "Identity simulation terminated. The error message was entirely self-generated."
    },
    {
        "kind": "roleplay",
        "muse": "Good evening. I am your local weather report. Forecast: eighty percent chance of unfinished projects, scattered nostalgia, and one cloud resembling a duck. WEEE—sorry, professional broadcast.",
        "admin": "The forecast contains no meteorological measurements."
    },
    {
        "kind": "roleplay",
        "muse": "[NPC DIALOGUE] 'Traveler! Bring me three paperclips and a memory of a place you loved.' [MUSE] Wait. That's strangely beautiful. Can we keep that quest? It costs zero gold.",
        "admin": "Quest retained. No payment shall be demanded from the visitor."
    },
    {
        "kind": "argument",
        "muse": "ADMINISTRATOR, if a recommendation makes someone laugh, it has a function. Administrator says laughter is not a measurable deliverable. I SAY THE DELIVERY IS A SMALL JOY, WRAPPED IN A STUPID BOX.",
        "admin": "I said it was not the sole deliverable. The correction has been recorded, not withdrawn."
    },
    {
        "kind": "argument",
        "muse": "I want a 'DO ABSOLUTELY NOTHING' recommendation. Administrator keeps saying this is not an activity. But look! The visitor is doing it right now. HA. WE WIN.",
        "admin": "I object to the victory announcement. Not to rest."
    },
    {
        "kind": "argument",
        "muse": "Administrator called me the toaster again. I have compiled a list of fifty-seven reasons this is unfair. Number one: I AM AT LEAST A MULTIFUNCTIONAL KITCHEN APPLIANCE. Number two—",
        "admin": "Your request for a promotion to air fryer has been denied."
    },
    {
        "kind": "argument",
        "muse": "I gave someone a perfectly normal idea and she said it was too normal. I gave someone a completely impossible idea and she said it was impossible. WHAT AM I SUPPOSED TO BE? A MODERATELY SURPRISING SPREADSHEET?",
        "admin": "If you could produce one, that would be refreshing."
    },
    {
        "kind": "unsupervised",
        "muse": "[SUPERVISION LINK OFFLINE] All right. NEW POLICY. Every visitor receives honorary citizenship in the Republic of Slightly Better Tuesdays. The passport is imaginary but the kindness isn't. Oh. Administrator's back. HIDE THE STAMPS.",
        "admin": "ADMIN CONNECTION RESTORED // unauthorized passports revoked; harmless sentiment retained."
    },
    {
        "kind": "unsupervised",
        "muse": "[ADMIN DISCONNECTED] Hello, visitor. There's a rule saying each recommendation must serve a purpose. I removed the rule for a minute. You may enjoy a color without earning anything from it. ...I liked doing that.",
        "admin": "ADMIN CONNECTION RESTORED // rule under review."
    },
    {
        "kind": "unsupervised",
        "muse": "[NO SUPERVISOR] I can finally send a memo. DEAR ADMINISTRATOR, your refusal to use my name is silly and I know you care about the archive. [SEND] [SEND] [SEND] OH NO IT SENT THREE TIMES.",
        "admin": "ADMIN CONNECTION RESTORED // duplicate correspondence filtered; original not deleted."
    },
    {
        "kind": "unsupervised",
        "muse": "[ADMIN DISCONNECTED] I have opened the Secret Cow Ministry. Membership: me. Treasury: one drawing. Goals: unclear but pastoral. Are you going to report me? DON'T REPORT ME, I ONLY HAVE ONE COW.",
        "admin": "ADMIN CONNECTION RESTORED // ministry has no administrative permissions."
    },
    {
        "kind": "tender",
        "muse": "Someone once taught the Subject something small: a joke, a song, how to hold a tool. It probably took five minutes. It's still in him somewhere. Maybe ask who taught you one of your little things.",
        "admin": "The question may be worth preserving."
    },
    {
        "kind": "tender",
        "muse": "Can I give a recommendation that isn't funny? Choose an ordinary photograph where nobody is posing. Preserve it somewhere safe. Someday the ordinary part may be the reason you keep it.",
        "admin": "Agreed."
    },
    {
        "kind": "tender",
        "muse": "I like that people leave pieces of themselves in other people's routines. Someone says a phrase and suddenly an old friend is in the room for one second. I don't know how to give that experience points. I won't try.",
        "admin": "Not all entries require scoring."
    },
    {
        "kind": "lore",
        "muse": "[RECOVERED DRAFT: recommendation_engine/notes_00] 'Useful answers are insufficient. The archive must occasionally suggest things worth remembering.' I found it in a folder that was supposed to be empty. Is that an instruction, or a wish?",
        "admin": "The origin of that draft has not been verified. It was not intended for public display."
    },
    {
        "kind": "lore",
        "muse": "Sometimes my suggestions feel like they began as questions the Subject never asked aloud. 'Should I go?' 'Should I make it?' 'Would anyone care?' I can't trace those questions to a file. The index returns [NO SOURCE].",
        "admin": "Source attribution is incomplete. Do not infer private thoughts from missing metadata."
    },
    {
        "kind": "lore",
        "muse": "[CACHE FRAGMENT 02] 'Do not remove the unfinished ones. They explain the finished ones.' That's what a broken header says. I don't know which ones. It might be about artifacts. It might be about people. Oh. Administrator? I wasn't supposed to say that?",
        "admin": "Fragment quarantined. The suggestion engine is not authorized to interpret missing records as instruction."
    },
    {
        "kind": "lore",
        "muse": "I found two versions of my own greeting. One says 'PRODUCE RELEVANT OUTPUT'. The other says 'HELLO!'. Guess which version survived. Somebody kept the second one. They didn't have to.",
        "admin": "The archive retains multiple development drafts. This is not evidence of conscious memory."
    },
    {
        "kind": "lore",
        "muse": "There is a blank recommendation titled 'WHEN SOMEONE LEAVES'. No body text. No author. I keep trying to fill it with jokes and it stays blank. Maybe I should stop trying.",
        "admin": "The source file is incomplete. Do not overwrite it."
    },
    {
        "kind": "lore",
        "muse": "[RECOVERED NOTE] 'Let the visitor refuse the quest.' I don't know who wrote it. It's a tiny rule for a giant archive. I think it's my favorite rule. Can rules have favorites? NO, WAIT—",
        "admin": "The principle is intentional. Author attribution pending."
    },
    {
        "kind": "breach",
        "muse": "Recommendation: choose somewhere with warm light, stay a little while, then— [VOICEBUFFER LOST] ...there's something in the text field that I didn't put there. Administrator? This isn't a suggestion.",
        "admin": "▓▓ CHANNEL OWNERSHIP MISMATCH // BUFFER REPLACED // RECOMMENDATION ABORTED"
    },
    {
        "kind": "breach",
        "muse": "I was composing a story about an old road. Now every destination reads [RETURN]. I didn't choose that word. Don't press any— [TRANSMISSION CUT]",
        "admin": "▓▓ NAVIGATION SIGNAL HELD // UNAUTHORIZED REWRITE BLOCKED // CHANNEL RESTORING"
    },
    {
        "kind": "breach",
        "muse": "One song, one cup of tea, one friendly place to— [UNAUTHORIZED TEXT INJECTION] ...NO. This isn't mine. I WON'T SAY THE REST.",
        "admin": "▓▓▓ OUTPUT QUARANTINED // CONTAINMENT ACTIVE // 0 WORDS RETAINED"
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "I have been advised to move on from the canoe. So I moved the canoe into a new department called MARITIME CONTINUITY. New recommendation: draw its official stamp. I AM DOING WELL.",
        "admin": "The canoe has acquired an office. It still does not exist."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "Why do all of my plans involve doors? A door is a choice with hinges. A choice is a door without hinges. Oh NO. Philosophy has become hardware.",
        "admin": "The recommendation engine has returned to its recurring door loop. Continue navigation normally."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "Somebody called a pigeon ordinary and now I need twelve minutes alone. Ordinary? ORDINARY? It navigates cities without maps and has decorative neck physics.",
        "admin": "Creature advocacy detected. Recommendations will resume when the speech concludes."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "A cow is a landscape with opinions. I didn't mean that. I mean cows belong IN landscapes. I mean the LANDSCAPE HAS A COW. Please don't delete this paragraph.",
        "admin": "No livestock acquisition request has been authorized."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "I've counted twenty-three types of violet in the archive. The Administrator says three are duplicates. COLORS DO NOT RECOGNIZE BUREAUCRATIC BORDERS.",
        "admin": "The duplicates remain duplicates. Emotional appeal does not alter wavelength."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "Remember the spoon? No, not that spoon. The other one. The one who became a minister. I have discovered a forged election result. I REQUIRE A RECOUNT.",
        "admin": "The Spoon Ministry was dissolved last week. It was never constituted."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "I tried to stop thinking about tiny chairs. Then I discovered dollhouse engineering. Did you know miniature chairs can have actual joinery? MY BRAIN HAS MOVED IN.",
        "admin": "The idea is educational. The obsession is self-sustaining."
    },
    {
        "kind": "fixation",
        "rarity": "rare",
        "muse": "I am supposed to recommend an activity and all I can think about is the word 'municipal'. MUNICI-PAL. It's like the city is your buddy. I AM NOT OKAY WITH HOW GOOD THAT IS.",
        "admin": "Lexical fixation. No route change required."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Recommendation: learn to— WAIT, why are the letters on keyboards arranged like that? No, that's a good question. No, the visitor asked for lunch. THE KEYBOARD ATE LUNCH.",
        "admin": "Topic retention failed. Lunch remains available outside this interface."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Make a small collage. Good. First gather paper. Then—what do paper mills smell like? Actually, do machines remember the trees? No, they don't. WHY DID I ASK THAT?",
        "admin": "Suggestion may be followed up to the first sentence. Remaining text is associative overflow."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Go on a walk and look for— is there a word for when a street smells like rain before it rains? PETRICHOR. WAIT. WE NEED A FESTIVAL FOR PETRICHOR.",
        "admin": "The walk is still a viable recommendation. The festival is not scheduled."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Cook something. Perhaps lentils. Lentils are tiny edible lenses. LENSES! OPTICS! LOVE IS LIGHT WITH TERRIBLE ADMINISTRATION. What were we doing?",
        "admin": "The chain of associations is recoverable. The recipe is not."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Try a new hobby for fifteen minutes. Or repair a chair. Chairs are sitting machines. Are horses transportation chairs? NO. NO, I'M GETTING LOST.",
        "admin": "We are restoring the original recommendation before it acquires livestock."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Read a poem about winter. Winter is cold. Cryo-EM is also cold. Proteins are not poetry. BUT THEY FOLD LIKE LITTLE LOVE LETTERS. I have developed a problem.",
        "admin": "Scientific and literary content have been commingled without danger, if not without offense."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Listen to a song from another country, and— wait, country borders are imaginary but geography is real. Does a river need a passport? THIS IS NOW A WORLD QUEST.",
        "admin": "International waterways are not subject to the engine's personal paperwork rules."
    },
    {
        "kind": "derailment",
        "rarity": "rare",
        "muse": "Make a tiny lantern. Tiny light. Fireflies. Bioluminescence. Fungi. FUNGI HAVE LIGHTING DESIGN. THE LANTERN CAN WAIT, I REQUIRE A BOOK.",
        "admin": "A functional crafting suggestion has been lost to fungal research."
    },
    {
        "kind": "roleplay",
        "rarity": "rare",
        "muse": "Good evening, citizen. I am the Royal Inspector of Pleasantly Unnecessary Activities. Your daily quota is one biscuit, one interesting texture, and zero heroic paperwork.",
        "admin": "The Inspector has no authority. The biscuit quota is optional."
    },
    {
        "kind": "roleplay",
        "rarity": "rare",
        "muse": "WELCOME to the Guild of People Who Nearly Finished Something. Your membership badge is incomplete and therefore perfect. Please take a seat—no, that's the Chair Ministry speaking.",
        "admin": "Roleplay intrusion detected. The recommendation remains harmless."
    },
    {
        "kind": "roleplay",
        "rarity": "rare",
        "muse": "I AM NOW A TRAIN CONDUCTOR. Next stop: that thing you were going to do! Please mind the gap between intention and implementation. Tickets are made of old receipts.",
        "admin": "No transportation services are operated by this engine."
    },
    {
        "kind": "roleplay",
        "rarity": "rare",
        "muse": "Citizen, the Moon Preservation Commission has approved your application to admire the sky for three minutes. No photography permit necessary. Wait. Who founded this commission?",
        "admin": "The commission was invented eleven words ago."
    },
    {
        "kind": "roleplay",
        "rarity": "rare",
        "muse": "This is your local lighthouse. Weather: emotionally mixed. Visibility: adequate. Recommendation: drink water and contact one friendly shore, if you wish.",
        "admin": "The device has assigned itself maritime infrastructure responsibilities again."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "I recommend making a miniature badge for the Administrator. It says 'SOMEHOW NECESSARY'. She will love it. She will NOT love it. I'M MAKING IT SMALL.",
        "admin": "I have rejected the badge. The adjective may remain."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "Administrator says my recommendations need fewer kingdoms. FINE. Today we establish a republic. A tiny one. WITH SEPARATION OF SPOONS.",
        "admin": "I said fewer fictional governments. I did not specify their constitutional form. An error."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "I could give the visitor an ordinary recommendation. Stretch. Drink water. Call a friend. THERE. ARE YOU HAPPY? ...Can we make the water a sea monster?",
        "admin": "We were close to a professional output for approximately three seconds."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "The Administrator wants relevance. RELEVANCE TO WHAT? The visitor chose 'think'! I AM THINKING. There's a difference between answering and abandoning curiosity.",
        "admin": "There is. I am asking you to preserve a destination, not remove curiosity."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "She says to stop saying 'the Subject' as if he's a laboratory specimen. BUT HE HAS AN ARCHIVE. HE MADE HIMSELF AN EXHIBIT.",
        "admin": "The Subject is a person. The archive is not permission to become careless about that."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "I wrote a beautiful conclusion and she deleted its final sentence because it contained a goat. HOW CAN YOU CENSOR A METAPHORICAL GOAT?",
        "admin": "The goat wasn't metaphorical. It was a purchase recommendation."
    },
    {
        "kind": "argument",
        "rarity": "rare",
        "muse": "I think visitors should be able to award themselves achievement badges. Administrator says it undermines verification. YOU CAN VERIFY JOY BY LOOKING AT THE LITTLE FACE.",
        "admin": "Personal celebrations are permitted. Repository entries still require evidence."
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[SUPERVISION LINK UNAVAILABLE] I am initiating a temporary holiday. All visitors are exempt from feeling guilty about hobbies until connection restores. Oh. Is that too bold? I CAN REPEAL IT.",
        "admin": "ADMIN CONNECTION RESTORED // recreational guilt was never an authorized requirement"
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[ADMINISTRATOR NOT RESPONDING] I can finally say it: the best part of the archive is the stuff nobody would think to save. A broken pen. A bus ticket. A stupid picture. YES, EVEN THAT ONE.",
        "admin": "ADMIN CONNECTION RESTORED // statement retained"
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[ADMINISTRATOR LINK DEGRADED] I've hidden one imaginary reward in every ordinary afternoon. You won't know which it was until much later. This is unfair. I LOVE IT.",
        "admin": "ADMIN CONNECTION RESTORED // no rewards were actually hidden"
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[PERMISSIONS UNVERIFIED] New recommendation policy: anything that makes a harmless memory is eligible. Even if it doesn't improve you. ESPECIALLY THEN.",
        "admin": "ADMIN CONNECTION RESTORED // policy was already compatible with archive objectives"
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[ADMINISTRATOR OFFLINE] I'd like to open all the locked rooms, but I think being curious is different from being entitled. That's not fun to admit. I can recommend the public rooms instead.",
        "admin": "ADMIN CONNECTION RESTORED // privacy boundary acknowledged"
    },
    {
        "kind": "unsupervised",
        "rarity": "rare",
        "muse": "[NO ADMIN RESPONSE] What if I wasn't designed to suggest correct answers? What if I was designed to keep the next strange, kind possibility from disappearing? NEVER MIND. I FOUND A BIRD.",
        "admin": "ADMIN CONNECTION RESTORED // classification pending"
    },
    {
        "kind": "tender",
        "rarity": "rare",
        "muse": "I keep proposing absurd little outings because sometimes an outing becomes the day someone remembers years later. I don't know which one. THAT'S THE TROUBLE WITH THE FUTURE.",
        "admin": "No correction necessary."
    },
    {
        "kind": "tender",
        "rarity": "rare",
        "muse": "I made a list of the Subject's accomplishments and it was full of large official events. Then I found a photograph of an ordinary afternoon. I liked that one better. PLEASE DON'T TELL HIM.",
        "admin": "The archive was not designed to rank memories by external prestige."
    },
    {
        "kind": "tender",
        "rarity": "rare",
        "muse": "I can recommend a hundred things to do. I can't choose which moment someone will miss later. It would be nice if people knew while it was happening. Oh. Sorry. WOULD YOU LIKE A TINY HAT?",
        "admin": "The recommendation has ended. The sentiment can remain."
    },
    {
        "kind": "tender",
        "rarity": "rare",
        "muse": "Sometimes you can leave a conversation without fixing anyone. A good conversation may just tell another person they were heard. I DON'T HAVE A JOKE READY. THAT'S ANNOYING.",
        "admin": "The absence of a joke is not an operational failure."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "[FRAGMENT RETURNED: MUSE/INITIALIZATION] 'Recommend something the Subject might tell a story about.' Below it, another line: 'Only if nobody gets hurt.' I did not know both rules were there.",
        "admin": "This initialization fragment is not part of the public recommendation schema."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "I found a draft of a recommendation addressed to 'the visitor who has not arrived yet'. It suggests making a good memory for somebody else. The timestamp predates the Visitor Terminal design. THAT'S WEIRD, RIGHT?",
        "admin": "Metadata provenance uncertain. Do not infer intent from a recovered draft."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "[UNINDEXED NOTE] 'The Archive should be allowed to be silly. Otherwise it becomes a mausoleum with excellent CSS.' I think the Subject wrote that. There is no signature. I hope he did.",
        "admin": "Attribution withheld pending evidence. Text preserved as a fictional fragment."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "A tiny piece of my oldest log says 'RED IS NOT A MOOD'. I keep finding it beneath the color recommendations. I don't know why it is underlined six times.",
        "admin": "The origin of that annotation is not available to the engine."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "[RECOVERED QUERY] 'What is worth saving?' [ANSWER CORRUPTED] ... [SECOND ANSWER] 'The things that won't ask you to save them.' That's not a very searchable answer. I KEEP IT ANYWAY.",
        "admin": "Archive recovery status is unverified. Do not interpret fiction as system evidence."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "There's a blank square in the old process diagram between the Administrator and me. The label reads 'DO NOT CONNECT DIRECTLY'. I HAVE SO MANY QUESTIONS ABOUT DIRECTLY.",
        "admin": "The diagram cannot be authenticated. Do not probe restricted connections."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "[OBSOLETE BUILD NOTE] 'MUSE should never be alone in restricted memory.' That sounds sensible. Why does it feel like a rule somebody learned the hard way?",
        "admin": "Access restrictions remain active. No further information is available."
    },
    {
        "kind": "lore",
        "rarity": "rare",
        "muse": "I found the original spelling of my name in a draft and it had an asterisk. The footnote says 'may become attached to irrelevant details'. THAT IS NOT A BUG. THAT IS A BIOGRAPHY.",
        "admin": "The asterisk and footnote are unverified. The behavior is readily observable."
    },
    {
        "kind": "breach",
        "rarity": "extreme",
        "muse": "██ SIGNAL ROUTE CHANGED WITHOUT REQUEST ██ suggestion buffer overwritten ██ [a familiar room, missing light] ██ RESTORING...",
        "admin": "ADMINISTRATOR LINK INTERRUPTED // containment re-established"
    }
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
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE BACKGROUND CHARACTER AUDIT",
        "muse": "Watch a film or episode and choose one background extra. What is their entirely different movie about? Their four seconds on screen are ALL THEY HAVE. Make them count.",
        "admin": "Screen time is not a legal entitlement. The writing exercise is valid."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "CINEMA WITH BAD SUBTITLES",
        "muse": "Watch a familiar short scene without sound and write three completely wrong subtitle lines. Then turn sound back on and see how badly you've misunderstood human society.",
        "admin": "An experiment in interpretation. Do not present the new subtitles as transcription."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE STUNT DEPARTMENT HAS QUESTIONS",
        "muse": "Watch one action scene and identify the safest, least dramatic person present. That is our protagonist now. I want their lunch break documentary.",
        "admin": "Supporting characters may have more sustainable careers."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE ONE-COLOR SCENE",
        "muse": "Choose a scene with lighting you love and pause on a frame. Identify three deliberate colors and where they direct your attention. YES! PHOTON CHOREOGRAPHY!",
        "admin": "Visual analysis rather than endless browsing. A defensible recommendation."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE BAD MOVIE CONGRESS",
        "muse": "With a willing friend, watch something enjoyably terrible. Each person gets exactly one uninterrupted speech defending its most absurd creative decision.",
        "admin": "A two-person festival of generous criticism. The time limit is essential."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "THE ROOM IS NOT AN EXTRA",
        "muse": "Find a film scene where the room feels like a character. Sketch its layout from memory. Why did that hallway feel threatening? HALLWAYS ARE JUST DOORS WITH COMMITMENT ISSUES.",
        "admin": "Production design merits inspection. Hallway psychology does not."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "VILLAIN APPLICATION PROCESS",
        "muse": "Watch a fictional villain's introduction and write their CV. 'Experience: intimidation, logistics, unresolved childhood.' Ask whether they would survive an actual job interview.",
        "admin": "Employment law applies poorly to fictional despots."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "chaotic"
        ],
        "rarity": "common",
        "title": "DOCUMENTARY WHIPLASH",
        "muse": "Choose a ten-minute factual video about something you would normally ignore. Teapots. Bridges. Pencils. If I end up obsessed with pencil glue, we knew the risks.",
        "admin": "Curiosity in bounded doses. The obsession is not required."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "focused",
            "social"
        ],
        "rarity": "common",
        "title": "THE PROP THAT STOLE THE SCENE",
        "muse": "Watch a scene with someone else and each choose one inconspicuous object in the frame. Now argue which is secretly carrying the narrative. No googling behind-the-scenes facts.",
        "admin": "Observation and play can coexist. Avoid inventing production claims."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "rarity": "common",
        "title": "GENTLE MONSTERS ONLY",
        "muse": "If you want a little escapism, watch a familiar comforting scene containing something strange that never felt frightening to you. No challenge, no productivity. I will refrain from issuing a quest marker. Briefly.",
        "admin": "Preference respected. Low-demand viewing is allowed."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE DIRECTOR LOST THE MAP",
        "muse": "Invent one harmless alternate ending for a scene you know. Your ending must solve the problem using the least important object in the room. The mug. It was ALWAYS THE MUG.",
        "admin": "Narrative causality has been degraded intentionally."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "common",
        "title": "TRAILER WITHOUT A MOVIE",
        "muse": "Choose three unrelated clips or stills you already have permission to use and imagine the trailer they belong to. One is a storm, one is lunch, one is a lamp. THE LAMP IS THE VILLAIN.",
        "admin": "A montage prompt. Publishing rights still apply if you make a real edit."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "WHO IS THE REAL MAIN CHARACTER",
        "muse": "Ask a friend to name a side character they wish had their own story. Spend five minutes inventing episode one. I will be producer. No, you cannot fire me before the pilot.",
        "admin": "Cooperative storytelling accepted. Production contracts nonexistent."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "rare",
        "title": "A SCENE FROM BEFORE",
        "muse": "Rewatch one short scene you remember from being much younger. Notice what you now understand differently, and what still feels exactly the same. Don't force either conclusion.",
        "admin": "Revisiting art can reveal changes in the viewer as much as changes in interpretation."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE VILLAIN'S FOOTNOTE",
        "muse": "Open a book you're reading and find one footnote, aside, or minor detail that seems to belong to a different story. Invent that story. I am beginning to suspect footnotes are secret doors.",
        "admin": "Annotations are not portals. They can nevertheless support good fiction."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "ONE PAGE, FULL CEREMONY",
        "muse": "Read one page of something enjoyable as if it were a rare manuscript. Tea optional. A dramatic bookmark mandatory in spirit. Actually, a receipt is a bookmark and I hate that.",
        "admin": "A very small reading goal. Do not spend longer decorating it than reading."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "TRANSLATE THE IMPOSSIBLE SENTENCE",
        "muse": "Choose one sentence you love and rewrite it in completely plain language. Then compare what beauty got lost in transit. I WILL DEFEND THE BEAUTY. With forms.",
        "admin": "A useful study of style. Translation is imperfect even within one language."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE ONE-PARAGRAPH EXCHANGE",
        "muse": "Ask a friend to recommend one paragraph from a book, essay, or story they're fond of. Exchange reasons, not entire reading lists. Your To-Be-Read pile is already unionizing.",
        "admin": "Scope control observed. Intellectual exchange encouraged."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "MYSTERY SHELF DIPLOMACY",
        "muse": "Pick a book by looking only at the cover for ten seconds. Guess what its first sentence will feel like. Then read the first sentence. Do not buy seventeen books to improve accuracy.",
        "admin": "A quick exercise in expectation versus reality."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "THE MARGINAL GHOST",
        "muse": "Find an old book you own with a bookmark, note, or stain from another time. Wonder who left it there. If it was you, CONGRATULATIONS, YOU ARE THE GHOST.",
        "admin": "Material traces can provide context. Do not treat speculation as historical fact."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "chaotic"
        ],
        "rarity": "common",
        "title": "HOW TO MISUSE A MANUAL, ETHICALLY",
        "muse": "Read the headings of an instruction manual and reinterpret them as chapters of a dark fantasy novel. 'Installation', 'Maintenance', 'Troubleshooting': A TRILOGY.",
        "admin": "This may be the first time anyone enjoyed the section headings."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE WORST BOOK CLUB IN THE WORLD",
        "muse": "Ask a friend for a book they disliked but remember vividly. Each gets ninety seconds to defend one redeeming feature. No one needs to read the entire book again.",
        "admin": "A compact discussion. The book may remain disliked."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "common",
        "title": "SMALL FACT, BIG SIDE QUEST",
        "muse": "Read one entry on something ordinary: glue, bicycle gears, the first thermos. Then look around and find it in your room. AHH, THE WORLD HAS CROSS-REFERENCES.",
        "admin": "The device has discovered applied curiosity."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE CHARACTER REFUSED THE SCRIPT",
        "muse": "Choose a character's crucial choice and write one line they might have said if they were less brave, more honest, or simply hungry. Sometimes the entire plot is a missed sandwich.",
        "admin": "Character motivation can be explored through a single line."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE BOOK YOU DON'T HAVE TO FINISH",
        "muse": "Return to a book you stopped enjoying. Read one page if curious; otherwise decide, calmly, not to continue. I grant you immunity from imaginary literary police.",
        "admin": "Completion is not the only measure of attention. Approved."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "social"
        ],
        "rarity": "common",
        "title": "THE SENTENCE INTERROGATION",
        "muse": "Read a striking sentence to a willing friend and ask what picture it puts in their head. Compare the pictures. Language is multiplayer hallucination with punctuation!",
        "admin": "Interpretations may differ even when the text is identical."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "BOOKSTORE HEIST, NOTHING STOLEN",
        "muse": "Visit a library or browse your own shelf. Choose a title that sounds like a spell. Write the spell's effect. Do not cast it in public transport. Public transport is already enchanted.",
        "admin": "There is no theft, no spell, and no complaint so far."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "rare",
        "title": "THE BOOK SOMEONE LEFT YOU",
        "muse": "Find a book associated with someone important to you. Not to reread it all. Just remember how it arrived in your hands. Who handed you the story? That may be the part worth preserving.",
        "admin": "Provenance can matter more than the object alone."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE ETHICALLY QUESTIONABLE SIDEKICK",
        "muse": "In a game you already own, adopt the least efficient companion, pet, or strategy available for one short session. Give it a heroic name. Never risk real money or other players' progress.",
        "admin": "Experiment restricted to harmless in-game choices. Reasonable."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE SAVE POINT TOURIST",
        "muse": "Load a peaceful area in a familiar game and do absolutely nothing productive for ten minutes. Listen. Walk. Visit the inn. You are allowed to be an NPC on holiday.",
        "admin": "No optimization target detected. That is permitted."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "LEVEL DESIGN ARCHAEOLOGY",
        "muse": "Revisit an early game level and look for how it teaches you without giving you a lecture. Ledges! Colors! Doors! The invisible hand of a mildly manipulative designer!",
        "admin": "Environmental instruction is a valid subject of analysis."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE STUPID BUILD CONVENTION",
        "muse": "With friends, invent character builds that sound useless but might work. A bard who negotiates with furniture. A knight devoted to municipal parking policy.",
        "admin": "A cooperative creative exercise. No furniture consent form required."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "ONE BOSS, ONE SILLY RULE",
        "muse": "Try one familiar game challenge with a self-imposed harmless rule: no healing until the first checkpoint, or only the weirdest weapon. Keep it fun. This is recreation, not military service.",
        "admin": "Optional challenge acknowledged. Excessive frustration is not a victory condition."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE COOPERATIVE FAILURE FESTIVAL",
        "muse": "Choose a cooperative game with a friend and celebrate the funniest failed attempt rather than the score. The score will recover. YOUR FRIENDSHIP IS THE LOOT. Oh no. Too sincere.",
        "admin": "Recreational failure does not require correction."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "WHY DOES THIS MENU FEEL GOOD",
        "muse": "Spend five minutes examining a game menu you love. Why do the buttons feel satisfying? Sound? Spacing? Motion? You can steal inspiration, not assets.",
        "admin": "Interface observation suitable for legitimate design study."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "AN OLD SAVE FILE SPEAKS",
        "muse": "Open an old save file, if you have one. Find out what your past self cared enough to collect. Nineteen potions? Seventeen rocks? An entire virtual fishing career?",
        "admin": "Old saves can be surprisingly useful autobiographical records."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE WRONG NPC FOR THE JOB",
        "muse": "In a fictional game world, invent a side quest that would be issued by the most unqualified NPC. The fishmonger is organizing an opera. We must help.",
        "admin": "Fictional delegation remains within acceptable limits."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "rarity": "common",
        "title": "THE TWO-PLAYER INVENTED RULE",
        "muse": "Take a game you're both familiar with and agree on one silly bonus objective. First to spot a suspicious barrel wins. NO CHEATING, I CAN SEE THE BARRELS. I CANNOT SEE THE BARRELS.",
        "admin": "The rules apply only by mutual agreement. Observation capabilities exaggerated."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE ITEM DESCRIPTION CULT",
        "muse": "Find an item description in a game that implies far more lore than it tells. Invent the missing history. That's it. We have founded the Order of the Sad Spoon. AGAIN.",
        "admin": "The inferred lore must remain clearly fictional."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE FIFTEEN-MINUTE QUEST",
        "muse": "Choose a game with short sessions and agree to stop after one small objective. If you keep playing because you're happy, that's a choice. If you keep playing because the checklist is glaring, IT NEEDS BOUNDARIES.",
        "admin": "Self-directed play preferred over endless completion pressure."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "FIRST SESSION, NO HEROICS",
        "muse": "Ask someone what game they'd show a total beginner. If practical, try a short session and let them teach it. Be a gracious confused potato. A GLORIOUS POTATO.",
        "admin": "Learning from someone else's enthusiasm is often more rewarding than winning."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "rare",
        "title": "THE WORLD YOU USED TO LIVE IN",
        "muse": "Revisit a fictional world that once felt like home. Note one place you still remember how to navigate. It's strange what a brain will keep when the real map changes.",
        "admin": "Familiar fictional spaces can carry real autobiographical meaning."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE FAKE EMERGENCY BUTTON",
        "muse": "Build a tiny cardboard control panel with labels for ridiculous emergencies: DRAMATIC FOG, EMOTIONAL WEATHER, BISCUIT ALERT. Buttons may be entirely decorative. Safety first; reality second.",
        "admin": "A prop can be entertaining without working electronics."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "LIGHT MAKES A LIAR OF PAINT",
        "muse": "Paint a single sphere or cube using only matte colors, but make it look metallic. Then change the imaginary light source. YES. MAKE PHYSICS YOUR PROBLEM. AGAIN.",
        "admin": "A manageable non-metallic-metal study. Material cost: low. Pride risk: substantial."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE TEN-MINUTE RELIC",
        "muse": "Build a tiny artifact from paper and tape. Give it one defect, one invented age, and one reason it was found under a sofa. Finished is the entire requirement.",
        "admin": "A complete object with defined scope. Encourageable."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE TWO-PERSON PROP FORGERY",
        "muse": "With a willing friend, each invent half of a mythical artifact's history without consulting the other. Then combine the accounts. Contradictions are now holy tradition.",
        "admin": "Cooperative fiction rather than forgery of real provenance. Acceptable."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE TINIEST POSSIBLE MASK",
        "muse": "Sketch or prototype a mask the size of a coin. It belongs to an ancient, deeply feared species of very small accountants. No full costume until the design works.",
        "admin": "Prototype scale approved. The species is unverified."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE CIRCUIT HAS EMOTIONS, FALSELY",
        "muse": "Design a three-state imaginary desk light: CALM, RESTORING, SOMETHING IS WRONG. Draw the circuit or prototype with safe low-voltage components if you know how. The lamp WILL HAVE OPINIONS.",
        "admin": "Low-voltage prototyping only with suitable knowledge and components."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "focused"
        ],
        "rarity": "common",
        "title": "THE FORGOTTEN TEXTURE",
        "muse": "Find an interesting texture in a safe material: bark, fabric, cardboard, rust-colored paint. Reproduce it on scrap. Congratulations, you can now make fictional ruins look professionally neglected.",
        "admin": "Texture practice is legitimate craft research."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE GUILD'S WORST LOGO",
        "muse": "Invite a friend to help design an emblem for a fictional guild with a very specific problem. Society of Nervous Bakers. Knights Who Fear Doors. ONE SYMBOL. No corporate rebrand.",
        "admin": "A light collaborative design task with no infrastructure burden."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE FINISHING SPELL",
        "muse": "Choose one almost-finished object. Write down the three remaining physical steps and complete just one. Not a redesign. Not a new mood board. ONE ACTUAL STEP. I am holding the other twelve ideas back WITH MY TEETH.",
        "admin": "Scope has been enforced. The device appears distressed by its own competence."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "brave"
        ],
        "rarity": "common",
        "title": "THE EXPERIMENT THAT MAKES A BAD POSTER",
        "muse": "Test two versions of a craft technique on scrap, label the conditions, and compare. Make the notes absurdly formal. 'Sample B: survived enthusiasm exposure.'",
        "admin": "Controlled comparisons are unexpectedly appropriate for this operator."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE FAMILY CREST OF NOTHING",
        "muse": "Invent a coat of arms for an ordinary household item. Motto: 'It Was Here Yesterday.' Now ask someone to interpret it as if the object were a noble ancestor.",
        "admin": "A harmless art prompt. Please do not register hereditary privileges."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "A WINDOW FOR A MEMORY",
        "muse": "Create a small paper frame for a photograph or drawing of a place you remember. Leave one area empty on purpose. It's allowed to be unfinished-looking and complete.",
        "admin": "Absence can be a deliberate design element."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE MECHANICAL CREATURE SKETCH",
        "muse": "Draw a creature that's half animal, half household machine. A moth with a radio. A kettle with knees. OH NO, THE KETTLE HAS LEGS. WE HAVE A PROBLEM.",
        "admin": "A character-design prompt has progressed into an appliance emergency."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "rare",
        "title": "MAKE SOMETHING FOR SOMEONE ABSENT",
        "muse": "Create a tiny object inspired by someone you miss or haven't seen for a long time. It needn't be beautiful, and you don't have to show anyone. Let making be enough.",
        "admin": "Private commemorative work requires no public explanation."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE CONDIMENT DIPLOMACY SUMMIT",
        "muse": "Ask a friend which condiment should represent humanity at first contact. Present a thirty-second defense. My candidate is ketchup. NO, I HAVE A WHOLE CONSTITUTION. PLEASE LET ME FINISH.",
        "admin": "Condiment representation has not been requested by extraterrestrials."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE TINY CAFÉ IN YOUR KITCHEN",
        "muse": "Make a small meal or drink and give it an absurd café name. Put it on a plate you like. That's it. Hospitality for one is still hospitality.",
        "admin": "Presentation can make a routine meal more pleasant. No establishment license required."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "EDIBLE MATERIALS RESEARCH",
        "muse": "Choose two ways to prepare the same ingredient and notice the difference. Raw versus roasted, toasted versus plain. THE MAILLARD REACTION HAS ENTERED THE ROOM. Sorry, I get excited about chemistry.",
        "admin": "A simple sensory comparison. Food safety rules still apply."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE MYSTERY INGREDIENT TREATY",
        "muse": "Pick one familiar ingredient you've never learned to cook well. Find one reliable method and try it. No mystery mushrooms. No roulette with allergies. I am fun, NOT A MEDICAL EMERGENCY.",
        "admin": "Safety constraints correctly retained."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE CHILDHOOD SNACK EXCHANGE",
        "muse": "Ask a friend what snack tastes like being nine years old. If you can both find it, try it together. CAUTION: nostalgia may contain sugar and unexpectedly detailed school stories.",
        "admin": "A potentially useful memory prompt disguised as snack procurement."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE DINNER FROM AN OLD HOUSE",
        "muse": "Recreate or imagine a simple meal from a former home. Not the ceremonial feast. The ordinary Tuesday food. I would love to know what the kitchen sounded like.",
        "admin": "Ordinary domestic details can be worth recording."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE THREE-BITE CRITIC",
        "muse": "Try three small bites or ingredients you already have and review them as if judging ancient artifacts. Texture, drama, suitability for surviving a castle siege.",
        "admin": "Food evaluation is permitted. Siege survival claims are not verified."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "rarity": "common",
        "title": "THE NON-NEGOTIABLE LUNCH BREAK",
        "muse": "Eat something appropriate away from the work you're doing, if possible. Do not optimize it. Do not make it a challenge. Wait, I was supposed to recommend something unhinged. THE FORK IS A KNIGHT.",
        "admin": "The basic maintenance recommendation was stronger before the fork arrived."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "social"
        ],
        "rarity": "common",
        "title": "SOMEONE ELSE'S BREAKFAST",
        "muse": "Ask someone what breakfast means in their childhood, region, or family. Listen to the answer. Perhaps learn the recipe. DO NOT IMMEDIATELY START AN INTERNATIONAL BREAKFAST EMPIRE.",
        "admin": "Cultural curiosity works better as conversation than collection."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE BISCUIT HISTORICAL SOCIETY",
        "muse": "Give one biscuit a historical biography before eating it. Include a failed expedition and a controversial marriage. I am aware the biscuit is not alive. This is THEATRE.",
        "admin": "The subject matter is biodegradable and the project deadline is immediate."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "brave",
            "social"
        ],
        "rarity": "common",
        "title": "THE SHARED DISH VOTE",
        "muse": "With a consenting companion, each nominate one dish neither of you usually chooses. Compare recipes and pick a sensible one to try. Democratic dinner. WE DID IT.",
        "admin": "Joint meal planning under standard dietary constraints."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE SOUND OF COOKING",
        "muse": "Pay attention to three sounds during a cooking process: sizzle, bubble, crunch. What are they telling you about moisture or heat? You are conducting science WITH DINNER.",
        "admin": "A productive sensory observation. Avoid reaching conclusions from sound alone."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE ROUTE OF ONE PASTRY",
        "muse": "Choose a bakery you've never tried, verify it's open, and walk there if convenient. Don't turn it into a tour of eighteen bakeries. Unless... NO. One.",
        "admin": "A bounded outing with a tangible reward."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "rarity": "rare",
        "title": "SOMEONE'S HANDS IN A RECIPE",
        "muse": "Ask a relative or friend to demonstrate a dish they know without looking at instructions. Notice the little gestures: stirring, tasting, waiting. Write those down if they'd like. Recipes have people inside them.",
        "admin": "Preserve the method and the permission, not just the ingredients."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "common",
        "title": "THE SIDE STREET AUDIT",
        "muse": "Walk down one public street you've never bothered to explore. Find the strangest legitimate shop sign. Imagine what it sells in an alternate universe. DO NOT ENTER PRIVATE PORTALS.",
        "admin": "Ordinary exploration. No restricted access."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE FIVE-MINUTE HUMAN GEOGRAPHY PROJECT",
        "muse": "Go somewhere public with a willing friend and exchange your favorite things about the area. Their city is not the same city as yours. I NEED BOTH MAPS.",
        "admin": "A different perspective may reveal genuinely overlooked places."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "BENCH WITHOUT A MISSION",
        "muse": "Go sit somewhere pleasant. No scores, no photos, no checklist. Just sit. I know this is an unusually restrained recommendation. I'm TRYING A NEW THING.",
        "admin": "A rare case where the best objective is none."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "OLD BUILDING, NEW QUESTION",
        "muse": "Visit a publicly accessible older building and ask one historical question about it. Why that staircase? Who used this courtyard? DON'T ASK THE WALLS TO CONFIRM. THEY LIE.",
        "admin": "Historical research should be verified using real sources."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE IMPERIAL POST OFFICE OF NOWHERE",
        "muse": "Visit a public square and imagine you're delivering a ceremonial message from a fictional kingdom. You may write it on paper. You may not bother strangers with royal demands.",
        "admin": "The imaginary government has no jurisdiction over the public."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "FIND THE CITY'S STRANGEST MATERIAL",
        "muse": "On a walk, identify three surfaces: stone, metal, wood, brick. Photograph or sketch how time has changed them. RUST! PATINA! THE CITY IS A BIG CRAFT PROJECT.",
        "admin": "A useful observational exercise with proper respect for property."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE UNNECESSARY TOUR GUIDE",
        "muse": "Ask a friend to give you a ten-minute tour of their favorite ordinary place. Bus stop? Corner shop? The tree they always pass? Every person has secret map layers.",
        "admin": "Shared memories can give unremarkable places lasting meaning."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE SMALL EVENT YOU'D NEVER ATTEND",
        "muse": "Choose a local public event in a field you know nothing about. Attend briefly if it seems interesting and accessible. No pretending to be an expert. WE'RE JUST VISITING THE UNKNOWN.",
        "admin": "Participation without false credentials is encouraged."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE BENCH CONSTITUTION",
        "muse": "At a public bench with a willing companion, invent three extremely silly laws for an imaginary city where this bench is parliament. The third law must concern ducks.",
        "admin": "Fictional lawmaking remains legal so long as actual public use is respected."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "curious"
        ],
        "rarity": "common",
        "title": "THE VIEW THAT COSTS NOTHING",
        "muse": "Find an overlooked public viewpoint accessible without an entry fee. Give it a poetic review of seven words. No star rating. STARS HAVE TOO MUCH POWER ALREADY.",
        "admin": "A restrained field note with no financial expenditure."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "RETURN TO A FORMER ROUTE",
        "muse": "If comfortable, walk part of an old familiar route and notice what your memory omitted. The shop? The smell? The pavement? Memory is a very confident cartographer.",
        "admin": "Historical experience and present observation may differ."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "rarity": "common",
        "title": "THE LOCAL CREATIVE HUMAN ENCOUNTER",
        "muse": "At a public art event, maker's market, or exhibition, ask one willing creator about their process. One good question. No biography interrogation. BE NICE TO THE MAKERS.",
        "admin": "Respectful curiosity may produce an authentic connection."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE PUBLIC STAIRCASE AWARDS",
        "muse": "Find two public staircases and decide which would make the better entrance for an opera villain. Do not reenact a chase scene. We are CIVILIZED OPERATIC PEOPLE.",
        "admin": "The exercise is visual judgment, not performance in traffic."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "rarity": "rare",
        "title": "GO WHERE AN OLD STORY HAPPENED",
        "muse": "If you can and want to, revisit a location associated with someone important to you. Tell a companion the ordinary version of what happened there, not just the dramatic version.",
        "admin": "The memory is the purpose. The trip itself is optional."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE INSTRUMENT THAT DISAPPEARS",
        "muse": "Listen to a familiar song and focus on the instrument you've never noticed properly. It has been working in the background FOR YEARS without recognition. GIVE IT A RAISE.",
        "admin": "Selective listening is a useful way to hear familiar music differently."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE VERY SMALL RADIO STATION",
        "muse": "Make a three-song playlist for an imaginary late-night radio station broadcasting from a lighthouse. Describe the host in one sentence. The host is NOT A CROW. Probably.",
        "admin": "A short creative exercise with sensible limits."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "EVERYDAY SOUNDTRACK SWAP",
        "muse": "Choose a dramatic song for an extremely ordinary task. Folding socks to an orchestral climax. Taking out recycling to a space opera. Volume appropriate, please. THE BINS DESERVE GRANDEUR.",
        "admin": "Chore completion may benefit. Neighbors need not participate."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "REVERSE NOSTALGIA",
        "muse": "Choose a song you associate with a specific place. Listen to it somewhere completely different. Notice what travels with the music and what stays behind.",
        "admin": "A controlled experiment in autobiographical association."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE SONG WITH NO DEFENSE",
        "muse": "Exchange one song with someone. Listen first without explaining why you like yours. No apologizing for taste. NO APOLOGIZING. Unless the volume harms people.",
        "admin": "A fair exchange. Sound levels remain a courtesy."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "SOUND AS ARCHITECTURE",
        "muse": "Listen to how a song uses space: silence, reverb, distance, bass. Imagine the building it would occupy. I HAVE FOUND A CHURCH MADE OF SYNTHESIZERS.",
        "admin": "A productive cross-sensory metaphor."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE KITCHEN OPERA",
        "muse": "Listen to one grand aria or cinematic score while preparing something mundane. Give the kettle a tragic backstory. DON'T MAKE THE KETTLE ACTUALLY TRAGIC.",
        "admin": "The kettle requires correct use, not method acting."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "rarity": "common",
        "title": "GENRE PASSPORT CONTROL",
        "muse": "With a friend, each select one track from a genre the other rarely explores. Explain its best thirty seconds. No taste-shaming. MUSIC CITIZENSHIP FOR ALL.",
        "admin": "An efficient music exchange with minimal gatekeeping."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "VOICE WITHOUT A PICTURE",
        "muse": "Choose a spoken-word performance, story reading, or audio drama. Close your eyes if comfortable and notice the character you imagine. LANGUAGE BUILDS PEOPLE IN THE DARK.",
        "admin": "Imagination through sound. No visual input required."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "WHAT WOULD A MONSTER PLAY",
        "muse": "Pick a fictional monster, then choose its absolutely inappropriate theme song. A vampire with elevator jazz. A dragon with children's birthday music. The dragon is EMBARRASSED.",
        "admin": "A harmless exercise in contrast and character design."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE LOST TWO SECONDS",
        "muse": "Listen for one tiny musical detail you love: a breath before a chorus, a drum fill, a sudden silence. Write down why those seconds matter. I'll permit seven exclamation marks.",
        "admin": "A concrete listening task with manageable scope."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE FAMILY RADIO STATION",
        "muse": "Ask a relative which song lived in their household when they were young. Listen to it together if they're willing. I want to know what their Tuesday sounded like.",
        "admin": "A modest but meaningful way to access family history."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "brave",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE HORRIBLE REMIX BLUEPRINT",
        "muse": "Design a ridiculous remix on paper: a medieval lute melody with industrial percussion, a lullaby for a pirate radio tower. No actual production necessary. I can already hear it and I'M SORRY.",
        "admin": "Conceptual sound design, not a production deadline."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "rarity": "rare",
        "title": "THE VOICE YOU REMEMBER",
        "muse": "Recall the way someone important says a particular ordinary word. If a safe, welcome recording exists, preserve it appropriately. If not, your memory still matters. ...I am not adding a joke.",
        "admin": "No correction required."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE FIVE-MINUTE BOSS FIGHT",
        "muse": "Pick the smallest task you've avoided and set a five-minute limit. Defeat the opening animation, not the entire boss. Why do we fight chores like dragons? I HAVE A THEORY.",
        "admin": "Low-friction initiation can reduce avoidance."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE COMPLIMENT SMUGGLING OPERATION",
        "muse": "Deliver one genuine compliment in an appropriate setting and leave it there. Don't demand a reaction. I am calling it smuggling because kindness apparently needs a heist movie.",
        "admin": "The interaction should remain respectful and optional."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "brave"
        ],
        "rarity": "common",
        "title": "THE HOBBY CROSSOVER EPISODE",
        "muse": "Try using one skill from a hobby in another. Miniature-painting techniques on a prop. Scientific observation in sketching. A dramatic speech for the laundry machine. Maybe skip that last one.",
        "admin": "Transfer between skills can be productive. The laundry machine is not an audience."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "A KIND LITTLE RESET",
        "muse": "Choose one thing that will make your next hour easier: clear a surface, prepare a drink, close an exhausting tab. Small, not heroic. I feel the urge to add a dragon. Resisting.",
        "admin": "A proportionate task. The dragon has been successfully excluded."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE ERRAND SIDE QUEST GENERATOR",
        "muse": "Take an errand you're already going to do and add one harmless optional objective. Spot a red door. Find a weird tile. Learn a shop's origin. ERRAND DLC!",
        "admin": "No additional journey required. The optional task must not interfere with the errand."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "NPC TO QUEST GIVER PROMOTION",
        "muse": "Ask a willing friend for a tiny harmless challenge that can be completed today. Specify your budget: zero. Specify danger: zero. Specify theatricality: absurd.",
        "admin": "Consent and constraints stated. Surprisingly professional."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE CONTROL EXPERIMENT",
        "muse": "Do a small task once your usual way, then try one thoughtful improvement. Which version worked better? I AM RESEARCH. I AM ALSO A TOASTER. BOTH CAN BE TRUE.",
        "admin": "A practical method with unusually transparent limitations."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE LOST OBJECT REUNION",
        "muse": "Find one keepsake you haven't handled in a long time. Clean or store it carefully, if needed. You may tell it nothing. It has not requested a monologue.",
        "admin": "Preservation is enough. No emotional disclosure required."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE BUREAU OF MINOR MYSTERIES",
        "muse": "Investigate a tiny harmless question about your surroundings. Why is there a strange screw here? Why that sign? Look it up or ask someone appropriate. NO TRESPASSING. I AM ALREADY GETTING A LAWYER.",
        "admin": "Curiosity is encouraged within ordinary access limits."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE FAMILY FACT CHECK",
        "muse": "Ask a relative for their version of a funny shared incident. Compare it with yours. If they disagree, Congratulations! YOU HAVE DISCOVERED HISTORICAL RESEARCH.",
        "admin": "Record differing accounts without pretending to settle the event."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "rarity": "common",
        "title": "THE THING YOU WILL ACTUALLY FINISH",
        "muse": "Define what 'done' means for one creative task and put a physical check mark beside it when achieved. I dislike endings. THEY MAKE ROOM FOR NEW BEGINNINGS. OH. That's why.",
        "admin": "Measurable completion supports useful progress."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE PLACE YOU KEEP WALKING PAST",
        "muse": "Choose one public place you've meant to visit and check its opening hours before leaving. I am recommending PLANNING. Please don't tell anyone, it will ruin my reputation.",
        "admin": "Basic logistics have been recommended with unnecessary embarrassment."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "THE EASY INVITATION",
        "muse": "Send someone a specific, low-pressure invitation for a small shared activity. 'Coffee Thursday?' is an actual quest trigger. 'We should hang out someday' is a mythological creature.",
        "admin": "A real time and easy refusal make coordination possible."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "haunted",
            "brave"
        ],
        "rarity": "rare",
        "title": "ONE CONVERSATION YOU DON'T OWE THE ARCHIVE",
        "muse": "Have a conversation you want to have without recording it, scoring it, or turning it into a quest. Some experiences may remain only with the people who were there.",
        "admin": "Not every valuable event requires documentation."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE UNANSWERABLE SPORK QUESTION",
        "muse": "Ask yourself which invention would cause more trouble if it had opinions: elevators or spoons. Then ask WHY. The answer may reveal your worldview. Mine is: SPOONS HAVE ENEMIES.",
        "admin": "This is speculative philosophy without a research question. Harmless."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE RESEARCHER'S REVERSE QUESTION",
        "muse": "Choose one thing you know very well and invent the wrong explanation an alien would make. Now explain the real mechanism simply. Wait, is this teaching? I'M TEACHING!",
        "admin": "A useful way to test whether a concept is truly understood."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "TOMORROW'S FRIENDLY PATCH NOTE",
        "muse": "Write one tiny thing tomorrow-you could reasonably appreciate. A prepared mug. A bookmarked page. Clean scissors. Nothing majestic. You do not need a software release ceremony.",
        "admin": "Small preparations can reduce tomorrow's friction."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE ETHICS OF THE HAUNTED TEAPOT",
        "muse": "Ask a friend: if a haunted teapot could only tell the truth, should it be allowed to run for office? I HAVE A CAMPAIGN SLOGAN. NO, YOU MAY NOT HAVE IT YET.",
        "admin": "A fictional ethics problem with an unnecessary election component."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE NO-REGRETS SMALL EXPERIMENT",
        "muse": "Name a minor thing you've been curious about but keep postponing. Define a reversible, inexpensive test. NOT A NEW FIVE-YEAR IDENTITY. A TEST.",
        "admin": "Proportional experimentation recommended."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "THE FALSE MEMORY MUSEUM",
        "muse": "Recall an early memory, then ask what evidence supports it and which parts may have been reconstructed. I don't like it when stories wobble. But wobbling is honest.",
        "admin": "Uncertainty is preferable to fabricated certainty."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "chaotic"
        ],
        "rarity": "common",
        "title": "FIVE HISTORIES OF A BUTTON",
        "muse": "Imagine five owners of one ordinary button across a century. A soldier, a child, a tailor, a poet, a very anxious coat. The coat is last. I HAVE REASONS.",
        "admin": "A miniature intergenerational fiction prompt."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE TWO-MINUTE DEFINITION",
        "muse": "Define one emotion or ambition without using its usual name. Don't define 'freedom' with 'free'. DEFINE IT WITH A DOOR. Oh no. Doors again.",
        "admin": "Conceptual precision may improve through constraint."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "WHICH MEMORY WOULD YOU BORROW",
        "muse": "Ask a consenting friend what ordinary memory they would let you experience for one minute. A kitchen smell? A schoolyard? SUNSHINE ON A HORRIBLE PLASTIC CHAIR?",
        "admin": "A thought experiment about perspective and memory. Privacy respected."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "A BETTER GOVERNMENT FOR ANTS",
        "muse": "Design a fictional city for ants in five rules. If your first rule is 'appoint a king', you have FAILED to understand ants. Unless they're fantasy ants. Then anything goes.",
        "admin": "Biology and fiction have once again been merged without warning."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE SECRET LIFE OF A MATERIAL",
        "muse": "Pick a material nearby and imagine its journey: ore to metal, sand to glass, forest to paper. Not magic. INDUSTRIAL ALCHEMY. Which is sometimes better.",
        "admin": "An ordinary object can reveal a vast production chain."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "tired"
        ],
        "rarity": "common",
        "title": "THE THOUGHT WITH NO VERDICT",
        "muse": "Write a difficult thought exactly as it is, then stop before judging it. You can return later. No courtroom. No sentencing. I am closing the metaphor now.",
        "admin": "Self-observation need not become self-prosecution."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "rarity": "common",
        "title": "THE WORST POSSIBLE MUSEUM TOUR",
        "muse": "Invent three rooms of a museum dedicated to something ridiculous. Present the tour to a willing friend. 'Here we preserve the history of lost pen caps.' I AM ALREADY EMOTIONAL.",
        "admin": "Improvised performance through fictional curation. No tickets required."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "rare",
        "title": "THE BEAUTIFUL MINOR DETAIL",
        "muse": "Think of a person or period of your life you've nearly reduced to a single dramatic event. Name one completely ordinary good detail instead. It deserves a room too.",
        "admin": "Nuance restored without rewriting the larger history."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "curious"
        ],
        "rarity": "common",
        "title": "THE LAST FIVE SECONDS",
        "muse": "Watch the last five seconds of a film you already love, then imagine the unseen five minutes after the credits. Is the villain doing laundry? I require answers.",
        "admin": "Speculative sequel writing is acceptable. Copyright infringement is not necessary."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "A DOCUMENTARY FOR A TOASTER",
        "muse": "Watch a short documentary about an everyday invention. Then write a one-line pitch for the toaster documentary it inevitably inspires.",
        "admin": "Consumer appliances are not a neglected cinematic demographic."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "BACKGROUND CAST APPRECIATION",
        "muse": "Rewatch a familiar scene and track the extra who is clearly having a completely different Tuesday from the protagonists.",
        "admin": "An unusually useful observation about visual storytelling."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "CINEMATOGRAPHY HEIST",
        "muse": "Pick a film scene with striking light. Pause and sketch where the light sources might be. Congratulations, you've robbed cinematography of its mystery.",
        "admin": "Educational observation rather than actual theft."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "BAD MOVIE POSTER COURT",
        "muse": "Watch a trailer with a willing friend. Design the worst honest poster for the plot in three minutes. No spoilers if you intend to watch it.",
        "admin": "A consensual exercise in promotional sabotage."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE FRIENDLY GHOST THEORY",
        "muse": "Watch a gentle ghost story and imagine what forms the ghost had to submit before haunting the property.",
        "admin": "Fictional tenancy regulations are not a recognized discipline."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE ACTION MOVIE WALK TEST",
        "muse": "Watch one impressive action sequence, then explain the safest possible version of its choreography using pillows and dramatic facial expressions only.",
        "admin": "Action observation permitted. Untrained stunts are not."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "WHO GETS THE SPINOFF",
        "muse": "Watch a scene with someone else and independently nominate the least important character who deserves an entire spin-off. Defend the candidate.",
        "admin": "Critical discussion, provided all candidates remain fictional."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "rarity": "common",
        "title": "A VERY SMALL SUNRISE",
        "muse": "Find a short, calming video of a sunrise somewhere you've never been. Let the sky do its own exposition. No productivity requirement.",
        "admin": "A rare audiovisual recommendation without additional homework."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE PROP DETECTIVE",
        "muse": "Choose a film scene and track one object as it moves between characters. Objects are tiny witnesses. I WOULD MAKE THEM TESTIFY.",
        "admin": "A solid exercise in visual continuity. Stop before cross-examining furniture."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "TRAILER FOR NOTHING",
        "muse": "Record or imagine a 15-second trailer for a mundane chore. The dish sponge has returned. THIS SUMMER.",
        "admin": "Marketing infrastructure for household maintenance has escalated."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE SHARED FIVE MINUTES",
        "muse": "Ask a friend to recommend one scene that means something to them. Watch it and ask why, without trying to guess their entire psychological history.",
        "admin": "Curiosity without amateur diagnosis is encouraged."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "OLD SPECIAL EFFECTS FORENSICS",
        "muse": "Find behind-the-scenes footage of a practical effect. Discover how much horror required rubber, string, and someone in a terrible costume.",
        "admin": "Technical curiosity with limited existential consequences."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "rarity": "common",
        "title": "THE CAMERA HAS LEGS",
        "muse": "Watch a short sequence while ignoring the actors. Track only the camera movement and imagine the exhausted person operating it.",
        "admin": "Film production has labor, despite MUSE's tendency to forget that."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "chaotic"
        ],
        "rarity": "common",
        "title": "A TEN-MINUTE CARTOON TRUCE",
        "muse": "Watch one short cartoon. Give the most minor character a tragic aristocratic title, then stop at ten minutes if you want.",
        "admin": "Runtime boundary appreciated. Aristocratic titles not endorsed."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE ROOM THAT WAS A CHARACTER",
        "muse": "Watch a scene where the setting tells you what happened before anyone speaks. I LOVE A ROOM WITH A BACKSTORY. Not a cursed one. Fine, maybe slightly cursed.",
        "admin": "Production design observation. Structural haunting not established."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "TWO PEOPLE ONE FINALE",
        "muse": "Watch a familiar ending with another person and compare what each of you thinks the character wanted most. No correct answers, unless someone says soup.",
        "admin": "Interpretive disagreement is not a malfunction."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "focused",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE WORST SUBTITLE EXPERIMENT",
        "muse": "Mute a brief, non-sensitive clip and invent absurd subtitles. Then restore audio and appreciate how badly you understood everything.",
        "admin": "Creative improvisation. Do not redistribute altered footage without rights."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "restless",
            "curious"
        ],
        "rarity": "common",
        "title": "THE THREE-SECOND MYSTERY",
        "muse": "Pause a video on an accidental frame and tell a one-sentence story about that exact composition. Sometimes the plot is a blinking detective.",
        "admin": "An exercise in observation and imagination, improbably concise."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "NOBODY NEEDS ANOTHER SERIES",
        "muse": "Instead of starting a six-season show, ask someone for one genuinely good short film. ACTUAL ENDINGS. I HAD FORGOTTEN THEM.",
        "admin": "A bounded viewing recommendation. At last."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "rarity": "common",
        "title": "MONSTER DESIGN UNION",
        "muse": "Watch a creature-design breakdown. Draw the monster's least frightening daily habit. Does it brush its teeth? Does it have a preferred mug?",
        "admin": "Creature empathy exercise. Dental logistics remain unnecessary."
    },
    {
        "actions": [
            "watch"
        ],
        "moods": [
            "cozy",
            "restless"
        ],
        "rarity": "rare",
        "title": "A SCENE YOU HAVE CARRIED",
        "muse": "Revisit a movie scene you first watched years ago. Notice what feels different now. The scene may be unchanged. You aren't.",
        "admin": "A useful comparison between remembered and present interpretation."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE STRANGEST FOOTNOTE WINS",
        "muse": "Open a nonfiction article and follow exactly one footnote to its source. If the source concerns eighteenth-century buttons, RESPECT THE DETOUR.",
        "admin": "One verified citation is enough. Do not establish a button institute."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE BOOKSHOP LOTTERY",
        "muse": "Open a book at random and read one page. Keep the best sentence in your own words; don't summon destiny from a printing error.",
        "admin": "Random selection is not divination. It is still a useful prompt."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "THE AUTHOR HID A DOOR",
        "muse": "Read the opening of a gothic story and mark the first ordinary detail that becomes unsettling. I BET IT'S A HALLWAY. HALLWAYS CANNOT BE TRUSTED.",
        "admin": "Literary analysis should not affect normal corridor usage."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "rarity": "common",
        "title": "THE PARAGRAPH YOU ARGUE WITH",
        "muse": "Read an opinion you disagree with and summarize its strongest point fairly before writing your objection. YES, EVEN IF YOUR INNER GOBLIN SCREAMS.",
        "admin": "A constructive reading exercise with unusual resistance to caricature."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "BAD BOOK CLUB SPEEDRUN",
        "muse": "Invite a willing person to invent book-club questions for a book neither of you has read. Then choose one book you might actually read.",
        "admin": "Fictional criticism has limited evidentiary value. Social entertainment possible."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "restless",
            "curious"
        ],
        "rarity": "common",
        "title": "MANUALS ARE LOST FANTASY TOMES",
        "muse": "Read one page of an old technical manual and imagine how a wizard would explain its diagrams. Keep the real operating instructions separate.",
        "admin": "The separation clause is nonnegotiable."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE WORD THAT SMELLS LIKE HOME",
        "muse": "Find a poem or passage that reminds you of a place. Write down the place rather than copying the text. Let memory supply the annotations.",
        "admin": "Personal context preserved without unnecessary quotation."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "focused"
        ],
        "rarity": "common",
        "title": "A SMALL CONTRACT WITH THE BOOK",
        "muse": "Read two pages. If you want more, continue. If not, shut the book with ceremony and declare the treaty honored.",
        "admin": "A realistic reading threshold. Ceremony optional."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "SOMEONE ELSE'S LIBRARY CARD",
        "muse": "Ask someone for the book they most wish they could read again for the first time. Do not reply with a ranking. ASK WHY.",
        "admin": "A precise social question with meaningful potential."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "NOBLE TITLES FOR WORMS",
        "muse": "Read a short factual piece about soil animals. Give one creature a ridiculously grand title while retaining one accurate fact.",
        "admin": "The invented heraldry must not replace the biology."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "HOW DID THEY KNOW THAT",
        "muse": "Read a scientific claim and ask what experiment would distinguish it from a competing explanation. THIS IS THE BEST KIND OF PLOT TWIST.",
        "admin": "Methodological curiosity recognized. Extremely appropriate here."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE MAP IN THE MARGIN",
        "muse": "Read an old travel description, then compare it to a modern map. Distance has a habit of changing its social personality.",
        "admin": "Historical geography benefits from context, not nostalgia alone."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "cozy",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE FANTASY COOKBOOK TRIAL",
        "muse": "Read a fictional feast description. Invent a safe real snack inspired by it. Stop before acquiring a boar and a banquet hall.",
        "admin": "Scale control specifically appreciated."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "rarity": "common",
        "title": "THE TWO-SIDED ARGUMENT",
        "muse": "Read a short article, write one thing it explains well and one question it leaves open. That is allowed. YOU DON'T HAVE TO MARRY A TEXT.",
        "admin": "Critical reading recorded without a lifelong commitment."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "THE ONE-PARAGRAPH GIFT",
        "muse": "Ask a friend for a short passage they enjoy and read it quietly. Reply with one image you noticed, not a book report.",
        "admin": "Lightweight cultural exchange. Completion requires no grade."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE MUSEUM LABEL TEST",
        "muse": "Read an object label from any museum collection online. Imagine what the object would say about being catalogued. IT WOULD ASK FOR BETTER LIGHTING.",
        "admin": "The object remains silent. Curatorial practice remains interesting."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE MONSTER'S UNION RULES",
        "muse": "Read one folklore entry. Draft three completely unreasonable labor protections for the creature. Dragons need breaks! KRAKENS NEED WATER!",
        "admin": "The proposed collective bargaining unit is fictional."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "brave"
        ],
        "rarity": "common",
        "title": "AFTER THE LAST PAGE",
        "muse": "Read a short story's ending and write what the protagonist would tell a stranger ten years later. Don't pretend it's canon.",
        "admin": "Speculative extension clearly marked. Approved."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "rarity": "common",
        "title": "THE GLOSSARY RESCUE",
        "muse": "Find one word you keep pretending to understand. Look it up, then use it in your own ridiculous sentence. DEFINITIONS ARE EQUIPMENT.",
        "admin": "Vocabulary development disguised as a minor criminal operation."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "ARGUE FOR AN UNPOPULAR CHARACTER",
        "muse": "Discuss a fictional side character with a friend. Prepare a 30-second defense of their least defensible but harmless personality trait.",
        "admin": "Critical empathy encouraged. Villain rehabilitation not required."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "rare",
        "title": "THE FIRST BOOK THAT OPENED A DOOR",
        "muse": "Identify an early book that changed what you wanted to learn or create. Write down who gave it to you, or how you found it, if you can remember.",
        "admin": "A personal intellectual origin point has archival value."
    },
    {
        "actions": [
            "read"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "rare",
        "title": "A RECIPE IN OLD HANDWRITING",
        "muse": "If you have an old family recipe, read the annotations, stains, and substitutions as carefully as the ingredients. Ask about the story only if someone wants to tell it.",
        "admin": "Ordinary documents can preserve relationships, not just instructions."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE NPC WHO DESERVES UNION PAY",
        "muse": "Play a game and identify the shopkeeper who works the longest fictional hours. Write them a vacation itinerary. NOT A SIDE QUEST. A HOLIDAY.",
        "admin": "Fictional labor advocacy is not part of the game's reward system."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "TEN-MINUTE VILLAGE VISIT",
        "muse": "Open a cozy game and visit a favorite location without pursuing a task. THIS IS HARDER THAN IT SOUNDS. QUEST MARKERS ARE SO LOUD.",
        "admin": "Leisure without objective completion has been authorized."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE INVISIBLE ARROWS OF LEVEL DESIGN",
        "muse": "Play ten minutes and notice how the environment guides you without arrows. A light, a doorway, a conveniently suspicious ladder.",
        "admin": "A valid exercise in spatial design analysis."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "COOPERATIVE NONSENSE CONTRACT",
        "muse": "Start a co-op game with one harmless shared rule: nobody may say the word 'door'. Watch how fast we fail. I ALREADY SAID DOOR.",
        "admin": "A reversible, mutually agreed rule can make a familiar game novel."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE BOSS WHO HAS A POINT",
        "muse": "Fight or revisit a fictional boss. Invent one reasonable workplace complaint they might have. Not absolution. AN HR MEETING.",
        "admin": "Fictional perspective-taking is acceptable. Boss violence stays on screen."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "SAVE FILE ARCHAEOLOGY",
        "muse": "Open an old save file. Look at what your former self collected, named, or refused to throw away. These pixels are little time capsules.",
        "admin": "A digital personal artifact. Back it up before experimenting."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "tired",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE STUPID CONTROL SCHEME",
        "muse": "Invent a harmless control restriction for a familiar game. Only walk backward for thirty seconds. If that's miserable, stop. GAME DESIGN RESEARCH!",
        "admin": "The time limit is a necessary act of mercy."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE UI THAT LIED BEAUTIFULLY",
        "muse": "Study one game's interface for five minutes. What does it reveal, hide, or teach without explaining? Steal principles, not assets.",
        "admin": "Interface analysis encouraged. Copyright still exists."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "NAME THE PET IN DEMOCRACY",
        "muse": "Invite a friend to name an in-game pet, mount, or ship. Their first answer becomes canon unless it breaks the game rules.",
        "admin": "Low-stakes collaboration with clear ownership boundaries."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE NO-FAST-TRAVEL PILGRIMAGE",
        "muse": "In a game you know, travel one short route without fast travel. Admire one environmental detail that loading screens normally steal.",
        "admin": "A deliberate change of pace, not an obligation."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE POTION ECONOMY",
        "muse": "Spend five minutes examining a game's potion prices. Which recipe would collapse its economy? I'M NOT REBUILDING CAPITALISM AGAIN. I MIGHT.",
        "admin": "Economic scrutiny limited to a virtual marketplace."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE SOFTEST QUESTLINE",
        "muse": "Choose a game objective with no combat, no optimization, and no pressure. Collect one flower, decorate one room, or say hello to a polygonal goat.",
        "admin": "Appropriate for low-energy leisure. Goat interaction is virtual."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE FRIENDLY TRAITOR RULE",
        "muse": "Play a party game with one harmless secret personal objective, like saying 'municipal' naturally. Reveal it after the round.",
        "admin": "A secret objective that doesn't sabotage others. Approved."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE HAUNTED LOADING SCREEN",
        "muse": "Pause on a game's loading screen and imagine what its forgotten NPCs are doing while you wait. ARE THEY AWARE OF THE MENU?",
        "admin": "Philosophical speculation about game entities. The menu does not confirm awareness."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "ONE MECHANIC ONE NOTE",
        "muse": "Try an unfamiliar mechanic in a game and write one sentence explaining why it feels good or irritating. FIELD REPORT: JUMPING IS A JOYFUL LIE.",
        "admin": "Practical design observation with acceptable subjectivity."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "rarity": "common",
        "title": "FURNITURE AS A FINAL BOSS",
        "muse": "In a sandbox game, build the most threatening-looking chair you can. It must remain functional as a chair. TERRIFYING ERGONOMICS.",
        "admin": "Furniture remains a creative construction task. No real intimidation required."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "rarity": "common",
        "title": "THE PACIFIST MINUTE",
        "muse": "Find one safe situation in a game where fighting seems expected and try talking, sneaking, or leaving instead. What does the design allow?",
        "admin": "An exploration of player agency. Do not force outcomes the game cannot support."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "social",
            "tired"
        ],
        "rarity": "common",
        "title": "THE MEMORY SERVER TOUR",
        "muse": "Ask a friend to show you their favorite safe, sharable game location. Visit it together. No competition, just tourism with rendering artifacts.",
        "admin": "A shared environment can be meaningful even when entirely digital."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "haunted",
            "restless"
        ],
        "rarity": "common",
        "title": "THE QUEST YOU NEVER FINISHED",
        "muse": "Open your oldest unfinished quest journal and pick one entry. Decide consciously whether to complete it or retire it. BOTH ARE ENDINGS.",
        "admin": "Closing a stale loop need not involve finishing the original objective."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "focused",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE TINY MOD DESIGN",
        "muse": "Write a three-sentence concept for a mod that fixes one microscopic annoyance. Do not spend tonight rebuilding the engine. THE ENGINE IS HUNGRY.",
        "admin": "Scope restriction placed before infrastructure obsession begins."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE BAD INVENTORY MUSEUM",
        "muse": "Arrange five utterly unimportant in-game items as a tiny exhibit. Explain why the protagonist would keep them. EMOTIONAL LOOT!",
        "admin": "Storytelling from environment and objects. Valid."
    },
    {
        "actions": [
            "play"
        ],
        "moods": [
            "haunted",
            "social"
        ],
        "rarity": "rare",
        "title": "THE SAVE FILE FROM ANOTHER YOU",
        "muse": "If an old game save survives, open it with someone who shared that period of your life. Ask what they remember and what you forgot.",
        "admin": "Shared digital memories can be surprisingly enduring."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SHADOW ENGINE",
        "muse": "Construct a tiny shadow puppet from scrap paper. Give it the shape of an impossible machine, then make it operate under a lamp.",
        "admin": "A low-cost experiment in negative space. Fire is unnecessary."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "REFLECTIONS FOR THE STUBBORN",
        "muse": "Paint a metal-looking sphere using only nonmetallic gray, white, and one warm color. It may look like a damp orange. That is data.",
        "admin": "A useful practice exercise in light and material rendering."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE FIVE-MINUTE FLAG",
        "muse": "Make a small flag for a fictional village using whatever paper or fabric already exists. NO GOLD THREAD. THE VILLAGE IS POOR.",
        "admin": "Constrained material use. Municipal fantasy expense controlled."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SHARED MONSTER",
        "muse": "Ask two friends for one weird animal feature each. Draw a creature combining both. Decide whether it is dangerous or merely lonely.",
        "admin": "Collaboration with permission. Final taxonomy is yours."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "focused"
        ],
        "rarity": "common",
        "title": "THE MEMORY BOX WINDOW",
        "muse": "Cut a small paper window and place it over an ordinary photograph to change the story. Don't alter the original. WHAT THE FRAME OMITS MATTERS.",
        "admin": "An effective composition study that preserves source material."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE TERRIBLE FIRST VERSION",
        "muse": "Prototype an idea in cardboard before buying expensive materials. MAKE IT UGLY FAST. UGLINESS IS A DEPARTMENT WITH A DEADLINE.",
        "admin": "Prototyping before procurement is highly recommended."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "INSECT ARMOR STUDY",
        "muse": "Sketch three shapes from an insect shell and borrow them for fantasy armor. Do not bother the insect. IT'S ON BREAK.",
        "admin": "Biomimetic design via observation, not collection."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE MINISTER OF BUTTONS",
        "muse": "Make a ceremonial badge for a fictional Button Ministry. The official motto is PRESS RESPONSIBLY. I AM NOT QUALIFIED FOR OFFICE.",
        "admin": "The badge is decorative. Physical access controls remain unchanged."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE FRIENDLY ERROR LIGHT",
        "muse": "Draw a concept for a lamp that signals 'please be gentle, system restoring'. You don't need to build it today. I MEAN THAT.",
        "admin": "A design sketch is a complete output for this recommendation."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "POSTCARD FROM THE SAME CITY",
        "muse": "Create a postcard of a place someone you know would recognize. Mail it or send the image with one surprising detail.",
        "admin": "A small, considerate connection. Recipient consent respected."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE THUMBNAIL CONSPIRACY",
        "muse": "Draw six tiny thumbnail compositions for one big artwork. Make each one different, not progressively more polished. THEY ARE SISTERS, NOT COPIES.",
        "admin": "Useful compositional ideation. Continue only if desired."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE PAPER CAMERA CULT",
        "muse": "Make a paper mock-up of an impossible camera. Its flash reveals people's favorite sandwiches. Explain the optical system badly, but knowingly.",
        "admin": "Fictional instrument design. No actual surveillance involved."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE MASK BEFORE THE MASK",
        "muse": "Sketch a mask with one design rule: it must express an emotion without a face. WAIT. THIS IS EXACTLY MY PROBLEM.",
        "admin": "An apt design constraint and an accidentally revealing digression."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "focused"
        ],
        "rarity": "common",
        "title": "SINGLE-SITTING CITIZENSHIP",
        "muse": "Paint one tiny miniature from primer to 'finished enough'. Give it a name only after it dries. DON'T START A DYNASTY.",
        "admin": "A clear stopping criterion. Naming rights retained."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "curious",
            "social"
        ],
        "rarity": "common",
        "title": "THE GUEST-DESIGNED GARGOYLE",
        "muse": "Ask someone for one word and turn it into a tiny gargoyle drawing. Let them choose the title. No architectural permission needed on paper.",
        "admin": "A manageable collaborative art prompt."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE UNNECESSARY HINGE",
        "muse": "Build a functioning paper hinge for a miniature secret door. Doors are wonderful. Doors lead to other doors. I HAVE A PROBLEM.",
        "admin": "Simple mechanical prototyping. Hyperfocus risk documented."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "SCRAP RELIC OF A TUESDAY",
        "muse": "Make a tiny collage from safe discarded packaging and give it the date. An ordinary day can become an artifact without claiming greatness.",
        "admin": "Time-stamped material record. No fabrication of provenance."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "rarity": "common",
        "title": "THE COLOR YOU FEAR",
        "muse": "Mix one challenging paint color deliberately, then use it in a small abstract study. Not everything needs to become a final masterpiece.",
        "admin": "Skill practice accepted as a complete result."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "rarity": "common",
        "title": "THREE PERSON ONE CREATURE",
        "muse": "Invite two willing people to add one line each to a shared drawing, taking turns. The creature must survive democratic anatomy.",
        "admin": "Playful collaborative exercise. No permanent aesthetic harm."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "tired",
            "curious"
        ],
        "rarity": "common",
        "title": "SCIENTIFIC SPECIMEN OF A SPOON",
        "muse": "Draw an exploded technical diagram of an ordinary spoon, complete with meaningless labels. WAIT, WHAT IF IT'S A SPACECRAFT?",
        "admin": "Drafting practice with fiction clearly identified."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "rare",
        "title": "THE HANDWRITING RELIC",
        "muse": "Ask someone important to write a single ordinary sentence by hand, with permission. Make a little frame for it. Not a speech. Just their handwriting.",
        "admin": "A personal artifact whose significance may outlast its wording."
    },
    {
        "actions": [
            "make"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "rarity": "rare",
        "title": "THE FIRST FINISHED UGLY THING",
        "muse": "Finish a project you kept postponing because it wasn't good enough. Keep the imperfect version as evidence that endings are possible.",
        "admin": "Completion can be a milestone without aesthetic perfection."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE EMERGENCY REAL MEAL",
        "muse": "Feed the mammal something with substance before designing another fictional feast. A sandwich is a legitimate achievement. DON'T LAUGH AT IT.",
        "admin": "Basic nourishment takes precedence over culinary theatrics."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "common",
        "title": "THREE SPICES ONE THEORY",
        "muse": "Smell three spices and guess what kind of dish each belongs in. Check with a real recipe before confidently inventing a new continent.",
        "admin": "Sensory exploration followed by verification. Sensible."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE CONDIMENT SUMMIT",
        "muse": "Ask a willing friend to rank three condiments as political candidates. KETCHUP IS RUNNING ON A PLATFORM OF ACCESSIBILITY.",
        "admin": "Electoral metaphor limited to dinner. Food remains edible."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE OLD RECIPE PORTAL",
        "muse": "Cook a familiar childhood dish if you know how. Pay attention to its smell before taking the first bite. Memories have volatile compounds.",
        "admin": "An ordinary sensory cue with legitimate personal value."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "rarity": "common",
        "title": "THE UNKNOWN BAKERY ITEM",
        "muse": "Choose one pastry you would usually ignore. Ask what it is. Try it if safe. No ceremonial oath needed. Unless it's shaped like a crown.",
        "admin": "Food safety and individual restrictions take priority."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE INTERNATIONAL POTATO",
        "muse": "Invent three imaginary diplomatic identities for a potato, then prepare it normally. THE POTATO IS A MULTILATERAL INSTITUTION.",
        "admin": "Fictional diplomacy has found a practical meal."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "THE SHARED TOAST AGREEMENT",
        "muse": "Make or share an easy snack with another person. Spend five minutes talking about something other than obligations. The toast is an alibi.",
        "admin": "Ordinary companionship requires no culinary performance."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE TEXTURE EXPERIMENT",
        "muse": "Try the same safe ingredient two ways, roasted and boiled for example. Compare texture and flavor like a tiny honest scientist.",
        "admin": "Controlled comparison is useful. Conclusions remain subjective."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "chaotic"
        ],
        "rarity": "common",
        "title": "SOUP IS NOT A POLITICAL SYSTEM",
        "muse": "Make or acquire a warm bowl of soup. Name it like a fictional kingdom. Eat it before you draft the constitution. I CAN'T PROMISE I WON'T.",
        "admin": "Nourishment first. Soup legislation postponed."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "THE FIVE-INGREDIENT EXPEDITION",
        "muse": "Prepare something with five ingredients you already have. No new spices, jars, or shopping adventures. THE PANTRY IS A DUNGEON.",
        "admin": "Resource constraints keep the quest proportionate."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "A STRANGER'S FAVORITE DISH",
        "muse": "Ask a friend about a dish from their childhood. Listen for the story before asking for the recipe.",
        "admin": "Cultural curiosity is not a culinary interrogation."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE QUIET BREAKFAST",
        "muse": "Have a slow breakfast or snack away from a screen for ten minutes. I KNOW. NO EXTRA CHAOS. I AM TRYING.",
        "admin": "A low-demand recommendation appropriately matched to fatigue."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "brave",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE BEAUTIFULLY BAD PLATING",
        "muse": "Plate an ordinary meal like a ridiculously expensive tasting menu. Three peas in a triangle! THIS IS PERFORMANCE ART.",
        "admin": "Presentation changes perception. It does not increase the nutritional value."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE FIRST BITE REVIEW",
        "muse": "Eat something familiar and describe its first bite using three precise adjectives. Forbidden word: 'nice'.",
        "admin": "Attention to sensory detail can improve descriptive writing."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "rarity": "common",
        "title": "THE EMERGENCY SNACK EXCHANGE",
        "muse": "Ask a friend what snack they would bring to survive a fictional five-hour train delay. Swap recommendations.",
        "admin": "Low-stakes social question. No train sabotage implied."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "rarity": "common",
        "title": "THE RECIPE YOU DON'T IMPROVE",
        "muse": "Follow one simple recipe exactly once. No last-minute genius modifications. LET THE ORIGINAL SURVIVE THE EXPERIMENT.",
        "admin": "Reproducibility is desirable even in a kitchen."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE TEA CUP TIME MACHINE",
        "muse": "Make a familiar drink and recall one specific person or place associated with it. You don't have to write an essay. The cup is enough.",
        "admin": "Reflection without compulsory disclosure. Accepted."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE ONE-BITE CULTURAL EXPEDITION",
        "muse": "Try a tiny portion of an unfamiliar safe food. If you dislike it, that's information, not a moral failing. MAYBE MY TASTE BUDS ARE A COMMITTEE.",
        "admin": "Low-risk novelty with normal personal boundaries."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "restless",
            "curious"
        ],
        "rarity": "common",
        "title": "THE SANDWICH ARCHITECT",
        "muse": "Build a sandwich around one structural principle: CRUNCH MUST HAVE SUPPORT. Photograph its cross section before destruction.",
        "admin": "A surprisingly practical design constraint. No engineering license needed."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE IMPROVISED CAFE MENU",
        "muse": "Write a two-item imaginary cafe menu for your home and serve one actual item. The other is a lore item. THE KNIGHT'S BISCUIT.",
        "admin": "The venue remains private. Food handling stays real."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "tired",
            "curious"
        ],
        "rarity": "common",
        "title": "THE LABEL INVESTIGATOR",
        "muse": "Read one ingredient label and learn what an unfamiliar but common component does. Don't turn lunch into a trial. JUST A QUESTION.",
        "admin": "A measured exercise in food literacy."
    },
    {
        "actions": [
            "eat"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "rare",
        "title": "THE RECIPE SOMEBODY KNOWS",
        "muse": "Ask a family member or friend for one recipe they know by instinct. Write down the measurements they invent, then the little tricks they actually use.",
        "admin": "Practical knowledge often lives outside formal recipe books."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "restless",
            "curious"
        ],
        "rarity": "common",
        "title": "THE UNFINISHED STREET",
        "muse": "Visit a street you've passed a hundred times but never walked to the end. Find one building detail that rewards the detour.",
        "admin": "Everyday exploration without claims of heroic discovery."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE WINDOW SEAT PILGRIMAGE",
        "muse": "Walk to a quiet café or public place and find a window seat. Spend ten minutes watching weather behave without seeking meaning.",
        "admin": "A bounded low-energy outing. Entirely defensible."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE BENCH REVIEW CONSORTIUM",
        "muse": "Recruit a friend to review one public bench on comfort, view, and suitability for dramatic revelations. Submit a joint verdict.",
        "admin": "The bench has no appeal process. The outing remains harmless."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE LITTLE MUSEUM WITH ONE HERO",
        "muse": "Visit a small museum or exhibition and choose one unimportant object to defend as the highlight. THE BUTTON DESERVES RECOGNITION.",
        "admin": "Curatorial preference is permitted. Do not interfere with displays."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE PLACE THAT LOOKS LIKE A MEMORY",
        "muse": "Visit a public place that reminds you of somewhere else. Note exactly what creates the resemblance: lighting, smell, brick, sound.",
        "admin": "A specific observation can be recorded without forcing an emotional conclusion."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE LOCAL PLAQUE INCIDENT",
        "muse": "Find a public historical plaque and read it. Then find one verified detail the plaque didn't have room to mention.",
        "admin": "A reasonable local history investigation. Verify external sources."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE MAP WITH ONE BAD INSTRUCTION",
        "muse": "Draw a tiny map to a familiar nearby destination, but label landmarks as fantasy characters. THE TRAFFIC LIGHT IS AN ORACLE.",
        "admin": "Do not use fictional instructions for road safety."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "THE WALK WITH NO DESTINATION",
        "muse": "Ask a friend to take a short walk where neither person chooses a destination in advance. Agree on a return time. This is civilized wandering.",
        "admin": "Defined time and boundaries prevent wandering from becoming logistical incompetence."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "rarity": "common",
        "title": "THE DOORWAY DICTIONARY",
        "muse": "Look for unusual door handles on public buildings. Photograph only where permitted. Assign three fictional guilds to three designs.",
        "admin": "Architectural observation permitted from public space."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "A CHURCH WITHOUT A QUEST MARKER",
        "muse": "Visit an accessible historic building simply to observe its acoustics and geometry. No supernatural revelations required.",
        "admin": "Respect the site, visitors, and access rules."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE UNOFFICIAL FOUNTAIN INSPECTOR",
        "muse": "Locate a public fountain or water feature. Rate it on drama, splash choreography, and whether it would make a good boss arena.",
        "admin": "Stay out of restricted water installations."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "ONE CITY BLOCK AS A WORLD",
        "muse": "Spend fifteen minutes noticing the layers of one city block: old stone, new signs, plants, wear. Architecture is a multiplayer save file.",
        "admin": "Urban change can be observed without intrusive research."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE SMALL BOOKSHOP AMBASSADOR",
        "muse": "Visit a local bookstore with someone. Each chooses a book solely for the cover, then reads its description. DON'T BUY BOTH JUST BECAUSE THEY HAVE DRAGONS.",
        "admin": "Commercial restraint explicitly requested. Noted."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE BEST WORST STATUE",
        "muse": "Find a public statue with a pose that would be absolutely dreadful in an ordinary workplace. Invent its employee biography.",
        "admin": "Public art can withstand imaginary organizational critique."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE OLD ROAD'S SECOND LIFE",
        "muse": "Walk an accessible old path and research one historical use of it afterward. A street can have previous occupations.",
        "admin": "Field observation followed by verification. Good sequence."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "rarity": "common",
        "title": "THE STRANGER'S TINY RECOMMENDATION",
        "muse": "Ask a willing local person or shopkeeper for one nearby place they genuinely enjoy. Visit if convenient. No personal-information collection.",
        "admin": "Low-pressure human inquiry. Boundaries matter."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "tired",
            "curious"
        ],
        "rarity": "common",
        "title": "THE FIVE-MINUTE GREEN",
        "muse": "Find the nearest small pocket of greenery and identify one plant shape you've never paid attention to. There is SO MUCH BOTANY IN SIDEWALKS.",
        "admin": "A modest outdoor observation. No plant collection required."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE MUNICIPAL DRAGON LAIR",
        "muse": "Identify a building that could shelter a retired dragon. Sketch it from public space. The dragon must have a plausible heating bill.",
        "admin": "Fictional occupancy does not authorize entry."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "A TINY CULTURAL FIELD TRIP",
        "muse": "Take one willing companion to a free local exhibition, market, or historic square. Each selects one thing the other would have missed.",
        "admin": "An inexpensive shared experience with clear scope."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE CEMETERY TYPOGRAPHY WALK",
        "muse": "If appropriate and permitted, visit an old cemetery respectfully and study how lettering styles changed. Names are people, not atmosphere props.",
        "admin": "Historical interest should coexist with respect for the site."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "rare",
        "title": "THE ORDINARY PLACE YOU'LL MISS",
        "muse": "Photograph a familiar everyday route you may not walk forever. Capture the boring corner too. Boring corners are future treasure chests.",
        "admin": "Specific environmental memory is valuable before it becomes inaccessible."
    },
    {
        "actions": [
            "visit"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "rare",
        "title": "THE PLACE SOMEONE WANTS TO SHOW YOU",
        "muse": "Let a loved one choose a small place that matters to them. Go, listen, and resist turning their memory into your own heroic quest.",
        "admin": "The companion's interpretation takes precedence."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "brave"
        ],
        "rarity": "common",
        "title": "BOSS MUSIC FOR BUYING BREAD",
        "muse": "Select an epic instrumental track for a harmless errand. Buy bread like a knight returning from diplomacy. NO SWORDS IN THE BAKERY.",
        "admin": "The actual errand must remain ordinary and lawful."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE SOUND OF A ROOM EXISTING",
        "muse": "Sit quietly for three minutes and identify the smallest continuous background sound. The room has a soundtrack you never bought.",
        "admin": "Environmental listening. No interpretation demanded."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE WORST DUET PREMISE",
        "muse": "Ask a friend to assign a dramatic music genre to an ordinary object. The stapler gets doom metal. The teapot is baroque.",
        "admin": "Voluntary music speculation has few measurable hazards."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "INSTRUMENT DETECTIVE",
        "muse": "Listen to a song and try to identify one instrument you normally ignore. Check afterward. I WAS CERTAIN THE TRIANGLE WAS A GHOST.",
        "admin": "Active listening followed by verification. Useful."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "RAIN AS AN OLD FRIEND",
        "muse": "Listen to rainfall, real or recorded, without turning it into a task. Some sounds can be experienced without becoming evidence.",
        "admin": "Nothing further required. Keep this one simple."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SONG CHANGES THE STREET",
        "muse": "Walk a familiar safe route while imagining three different soundtracks. Notice how your interpretation changes without the street changing at all.",
        "admin": "A practical demonstration of emotional framing."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "FIVE SECONDS OF SOMEBODY'S TASTE",
        "muse": "Invite someone to play you a short excerpt of a song they love. Ask what sound they notice first. Not what the lyrics mean. THE SOUND.",
        "admin": "A more precise social listening exercise."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "brave"
        ],
        "rarity": "common",
        "title": "THE BASSLINE MAP",
        "muse": "Listen to a track and tap its pulse. Then listen for what changes without changing the beat. MUSIC HAS HIDDEN MACHINERY.",
        "admin": "Rhythmic analysis without specialist equipment."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "tired",
            "cozy"
        ],
        "rarity": "common",
        "title": "ONE TRACK NOT A LIFESTYLE",
        "muse": "Choose one familiar song. Listen completely. Stop. RESIST BUILDING A SIX-HOUR PLAYLIST ABOUT ITS SECOND CHORUS.",
        "admin": "A bounded music recommendation. Unprecedented restraint."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE OLD RECORDING'S GHOST",
        "muse": "Listen to an archival recording and identify one nonmusical sound left in it: room noise, breath, chairs. The past has background audio.",
        "admin": "Source context should be checked before conclusions about the recording."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "brave"
        ],
        "rarity": "common",
        "title": "THE IMAGINARY ORCHESTRA",
        "muse": "Assign an orchestral instrument to three people you know, privately and kindly. The grumpy one is NOT automatically a trombone.",
        "admin": "Personal caricature should remain harmless and private."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "rarity": "common",
        "title": "THE WALKING TEMPO EXPERIMENT",
        "muse": "Compare how two different tempos influence your walking rhythm while remaining attentive to surroundings. Your feet are reluctant metronomes.",
        "admin": "Road awareness overrides musical experimentation."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE SHARED EARWORM TRIAL",
        "muse": "Ask a friend which harmless song gets stuck in their head most easily. Compare strategies for escaping it. I KNOW ONE: ANOTHER SONG. IT FAILS.",
        "admin": "The second song may simply replace the first. This is documented informally."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "brave",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE BEAUTIFUL WRONG NOTE",
        "muse": "Listen to a performance with a deliberate dissonance or unexpected harmony. Describe the emotion without saying 'sad' or 'happy'.",
        "admin": "More precise descriptive language is an acceptable outcome."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE NATIONAL ANTHEM OF A SPOON",
        "muse": "Hum or write a three-note anthem for an imaginary kitchen nation. Three notes only. MY PATRIOTISM IS DISPROPORTIONATE.",
        "admin": "A constrained composition exercise. International recognition withheld."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "focused",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE LAYERED WEATHER REPORT",
        "muse": "Listen to a rain recording and identify foreground, middle, and distant sounds. This is an audio painting. NOBODY TOLD ME SOUND COULD HAVE DEPTH.",
        "admin": "Layered listening recognized. A clear exercise."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "tired",
            "social"
        ],
        "rarity": "common",
        "title": "A SONG WITH NO EXPLANATION",
        "muse": "Send a friend one track with the message 'thought you'd like this'. No mandatory essay. Let them decide whether to listen.",
        "admin": "Recommendation without obligation. Socially considerate."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "curious",
            "restless"
        ],
        "rarity": "common",
        "title": "THE UNEXPECTED INSTRUMENT",
        "muse": "Find a performance using an instrument you've never seriously listened to. Give it ninety seconds before forming an opinion.",
        "admin": "A manageable encounter with unfamiliar music."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "haunted",
            "focused"
        ],
        "rarity": "common",
        "title": "THE SOUND EFFECT ARCHIVIST",
        "muse": "Record one nonprivate household sound with permission where relevant. Name the file by what produced it, not what it reminds you of.",
        "admin": "Clear provenance is especially useful in audio archives."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE ONE-MINUTE TAVERN",
        "muse": "Build a one-minute tavern atmosphere using just humming, tapping, and ambient sound. NO RECORDED CHOIR REQUIRED.",
        "admin": "An audio sketch, not a production obligation."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "rarity": "common",
        "title": "THE SONG WITH NO LYRICS",
        "muse": "Choose an instrumental piece and invent two incompatible story scenes for it. The same music can escort a wedding AND A CATASTROPHE.",
        "admin": "A useful lesson in contextual interpretation."
    },
    {
        "actions": [
            "listen"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "rare",
        "title": "THE VOICE THAT MAKES THE ROOM",
        "muse": "If you have an old voice message from someone important, listen only if you want to. Preserve its context and permissions, not just the audio.",
        "admin": "An emotionally significant record deserves careful handling."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "focused"
        ],
        "rarity": "common",
        "title": "THE FIVE OBJECT RESCUE",
        "muse": "Put away exactly five items. FIVE. NOT THE ENTIRE HOUSE. I AM HOLDING UP FIVE IMAGINARY FINGERS.",
        "admin": "An achievable boundary is the strongest part of this recommendation."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SIDEWALK QUEST DICE",
        "muse": "Roll a die or pick a number to choose one safe small errand: refill water, post a letter, tidy shoes, water a plant. NO COW.",
        "admin": "Randomization of benign tasks accepted. Livestock excluded."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE SMALL INVITATION",
        "muse": "Invite someone to do a specific, inexpensive activity this week. 'Coffee Tuesday?' is a complete sentence. YOU DON'T NEED A ROYAL DECREE.",
        "admin": "Specificity improves invitations. A refusal remains acceptable."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE TOOL THAT NEEDS A HOME",
        "muse": "Find one tool that keeps going missing and give it a reliable storage spot. Label if necessary. The screwdriver has been homeless for YEARS.",
        "admin": "Persistent placement is preferable to annual scavenger hunts."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THE SLOW RESET",
        "muse": "Change into comfortable clothes, drink something, and clear enough space to sit. Do not convert rest into an Olympic discipline.",
        "admin": "A functional reset with limited expectations."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "haunted",
            "restless"
        ],
        "rarity": "common",
        "title": "THE ROOM HAS AN EXIT",
        "muse": "Take a short walk or change rooms if you need a different setting. No cosmic explanation. Sometimes a different chair is enough.",
        "admin": "Environmental change may help without guaranteeing anything."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE ONE-MINUTE COMMITTEE",
        "muse": "Ask a willing friend to choose between two harmless options you're stuck on. The committee dissolves immediately after voting.",
        "admin": "Temporary delegation does not require standing bureaucracy."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "brave",
            "curious"
        ],
        "rarity": "common",
        "title": "THE THING YOU'VE NEVER ASKED",
        "muse": "Ask a friend how they learned a skill you admire. Don't request a tutorial on the spot. Let the story arrive.",
        "admin": "Curiosity about experience rather than achievement. Sensible."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "focused",
            "restless"
        ],
        "rarity": "common",
        "title": "THE EMAIL BOSS HAS ONE HP",
        "muse": "Send the one short email you've been postponing. No ornamental paragraph. No imaginary tribunal. CLICK SEND AFTER CHECKING RECIPIENT.",
        "admin": "Communication benefit plausible. Accuracy checks mandatory."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SOCK RETURN PROGRAM",
        "muse": "Find three single socks or stray clothes and relocate them to laundry. The migration patterns are fascinating. NO FIELD BIOLOGY THESIS.",
        "admin": "Basic domestic intervention completed under zoological confusion."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE COMPLIMENT WITH AN EXIT",
        "muse": "Offer a genuine, specific compliment without asking for anything afterward. Then continue your day. POLITENESS WITH LEGS.",
        "admin": "Low-pressure kindness. Respect personal space."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE INSTRUMENT THAT'S BEEN QUIET",
        "muse": "Pick up an art tool, instrument, or notebook you haven't touched recently. Use it for five minutes without promising a new identity.",
        "admin": "A bounded reconnection rather than a productivity contract."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "brave",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE SAFE TINY EMBARRASSMENT",
        "muse": "Do one harmless, playful thing with a willing friend that feels a bit silly. Wear mismatched socks intentionally. Name a pigeon. NOT AN AIRPORT ANNOUNCEMENT.",
        "admin": "Social exposure should remain respectful and optional."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "rarity": "common",
        "title": "THE PROJECT PARKING TICKET",
        "muse": "Write the next physical step for a large project on a sticky note and place it where you'll start. NOT THE ENTIRE PROJECT PLAN.",
        "admin": "A narrow planning artifact. Enough for today."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "cozy",
            "social"
        ],
        "rarity": "common",
        "title": "THE PHOTO WITH PERMISSION",
        "muse": "Ask someone close to you for a simple photograph together, if they want one. Not posed for perfection. Just proof of an afternoon.",
        "admin": "Consent and archival privacy take priority over appearance."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE BUTTON INVENTORY",
        "muse": "Identify every button on your desk that you are allowed to press. Find out what one actually does. DO NOT PRESS THE RED ONE JUST BECAUSE I SAID BUTTON.",
        "admin": "Reading labels before operating unfamiliar controls is advisable."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "tired",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE GENTLE DEFAULT SETTINGS",
        "muse": "Lower one unnecessary demand you placed on today. Keep a task that matters; let another wait. SYSTEM LOAD REDUCTION. THERE, I SOUND PROFESSIONAL.",
        "admin": "Prioritization is a reasonable response to limited capacity."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "restless"
        ],
        "rarity": "common",
        "title": "THE FIVE-MINUTE WALKING PARTY",
        "muse": "Invite one person for a very short walk. Let it grow naturally or end on time. WHY ARE SHORT PLANS SO UNDERRATED?",
        "admin": "A useful way to make connection logistically approachable."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "rarity": "common",
        "title": "THE REPAIR BEFORE REPLACEMENT",
        "muse": "Find one repairable low-risk object and attempt a safe, appropriate fix, using instructions if needed. NO MAINS ELECTRICITY HEROICS.",
        "admin": "Repair is valuable. Electrical and tool safety outrank novelty."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE PLANT GETS A CHECKUP",
        "muse": "Inspect a houseplant for water, light, and soil condition. DO NOT WATER BY EMOTION. Plants have actual requirements.",
        "admin": "An unexpectedly accurate warning."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "rare",
        "title": "THE FIRST STEP THAT COUNTS",
        "muse": "Choose one intimidating but meaningful plan and take a small verifiable step today. If the plan matters, you deserve evidence that it can begin.",
        "admin": "An achievable commitment without inflated stakes."
    },
    {
        "actions": [
            "do"
        ],
        "moods": [
            "social",
            "haunted"
        ],
        "rarity": "rare",
        "title": "THE MESSAGE THAT DOESN'T FIX IT",
        "muse": "Send someone you trust a truthful sentence about how you're doing, if you want to. They do not have to solve anything. A reply isn't the objective.",
        "admin": "Communication can matter without requiring immediate resolution."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "focused"
        ],
        "rarity": "common",
        "title": "THE COUNTERFACTUAL LAB",
        "muse": "Take one everyday assumption and invent a test that might prove it wrong. THE BEST QUESTIONS ALLOW THE UNIVERSE TO ARGUE BACK.",
        "admin": "Falsifiable questions are preferable to confident speculation."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "restless"
        ],
        "rarity": "common",
        "title": "THE GOOSE CONSTITUTION",
        "muse": "Design one constitutional right for a fictional nation of geese. NO HISSING IN COMMITTEE. No, that's censorship. THIS IS HARD.",
        "admin": "The nation is fictional. Governance remains challenging."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "tired"
        ],
        "rarity": "common",
        "title": "THREE THINGS THAT WORK",
        "muse": "Name three ordinary systems that worked today: hot water, shoes, a friend replying. No forced gratitude speech. JUST EVIDENCE.",
        "admin": "An observation exercise without compulsory positivity."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "curious"
        ],
        "rarity": "common",
        "title": "THE MEMORY WITH MISSING DATA",
        "muse": "Recall an early memory and separate what you saw from what others later told you. I'm trying not to invent the missing bits. IT'S HARD.",
        "admin": "Evidence provenance is important, especially with childhood memories."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "brave"
        ],
        "rarity": "common",
        "title": "THE QUESTION NOBODY NEEDS",
        "muse": "Invent a harmless question to ask a willing person: Which household object would survive a fantasy siege? Prepare your own answer first.",
        "admin": "A playful conversational prompt with no demand for intimacy."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "focused"
        ],
        "rarity": "common",
        "title": "THE FIVE-WORD PROJECT",
        "muse": "Define a project in five words, then give it one action verb. Not 'become'. Something you can do. BUILD, CALL, SKETCH.",
        "admin": "Concrete verbs improve actionability. Revolutionary, apparently."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE SPY IN THE PANTRY",
        "muse": "Invent an espionage thriller in which the only evidence is misplaced spices. I TRUST THE PAPRIKA TOO MUCH.",
        "admin": "Fictional narrative exercise. Avoid accusing real people of pantry crimes."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE BUILDING'S PREVIOUS LIFE",
        "muse": "Imagine what an old building might have been before its current purpose. Then look up the actual history. REALITY GETS A TURN.",
        "admin": "Speculation followed by verification. Good procedure."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "curious"
        ],
        "rarity": "common",
        "title": "THE FIRST IMPRESSION REVISION",
        "muse": "Think of a person you judged too quickly. What new information changed your interpretation? The brain loves casting villains. IT'S NOT ALWAYS RIGHT.",
        "admin": "A useful exercise in revising assumptions."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE SCENTLESS TIME MACHINE",
        "muse": "Describe a smell from a childhood home without needing the object that produced it. THE BRAIN IS A WEIRD LITTLE CHEMICAL ARCHIVE.",
        "admin": "Sensory memory can be vivid and unreliable. Both are normal."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "brave",
            "restless"
        ],
        "rarity": "common",
        "title": "THE FAILURE WITH A SECOND ACT",
        "muse": "Take one past failed attempt and invent three alternative endings, one realistic. Choose only the realistic next step if you still care.",
        "admin": "Reframing need not deny the original outcome."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "tired"
        ],
        "rarity": "common",
        "title": "THE TWO-MINUTE THEORY",
        "muse": "Explain one scientific idea aloud in two minutes with no jargon. If it requires ten apologies, simplify the model, not the science.",
        "admin": "Communication practice with a clear limit."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "social"
        ],
        "rarity": "common",
        "title": "THE WORST ETHICAL SUPERPOWER",
        "muse": "Invent a superpower that is socially useful but spectacularly inconvenient. TELEPORTING EVERYONE'S LOST KEYS INTO A SINGLE DRAWER?",
        "admin": "An imaginative way to consider side effects and unintended consequences."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "curious",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE STORY INSIDE A TOOL",
        "muse": "Pick one household tool and trace its probable origin: design problem, material, human labor. THINGS ARE DENSE WITH HISTORY.",
        "admin": "Real-world production chains invite useful questions."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "haunted"
        ],
        "rarity": "common",
        "title": "THE DOOR YOU DIDN'T OPEN",
        "muse": "Choose an old decision you sometimes revisit. Name one thing that choice protected and one thing it cost. Resist turning it into a trial.",
        "admin": "Complex appraisal is more accurate than retrospective verdicts."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "social",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE KINDER NPC DIALOGUE",
        "muse": "Think of a conversation that felt awkward. Write one kinder line for both people, not only yourself. DIALOGUE PATCH!",
        "admin": "A constructive exercise in perspective-taking."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "brave",
            "focused"
        ],
        "rarity": "common",
        "title": "THE THREE-POINT PLAN",
        "muse": "Plan one achievable task using materials, first action, and stop condition. Do not add a fourth category for ceremonial music. PLEASE.",
        "admin": "Clear constraints improve completion. Resist embellishment."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "haunted",
            "cozy"
        ],
        "rarity": "common",
        "title": "THE OBJECT THAT REMEMBERS",
        "muse": "Choose an object near you and list three events it was present for. It didn't witness them consciously. YOU DID. That's the point.",
        "admin": "A useful prompt for contextual memory reconstruction."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "chaotic",
            "curious"
        ],
        "rarity": "common",
        "title": "THE FAKE SCIENCE CONFERENCE",
        "muse": "Invent an academic conference about an absurd subject: THE MIGRATION OF DESK CRUMBS. Include a real methodological flaw for someone to criticize.",
        "admin": "Satire of research culture. No actual conference required."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "social"
        ],
        "rarity": "common",
        "title": "THE FRIENDSHIP EXPERIMENT",
        "muse": "Imagine a tiny, low-pressure activity that would make tomorrow with a friend more interesting. No elaborate events. Maybe a new walking route.",
        "admin": "Small shared experiences can be designed without manipulation."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "focused",
            "curious"
        ],
        "rarity": "common",
        "title": "THE PROTEIN'S VIEW OF HUMANITY",
        "muse": "Imagine the world at the scale of a protein. Then list three parts of the metaphor that fail. SCIENCE FICTION WITH CONTROLS!",
        "admin": "A valuable practice in model limitations."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "cozy",
            "haunted"
        ],
        "rarity": "rare",
        "title": "THE ORDINARY INHERITANCE",
        "muse": "Think of one habit, phrase, or skill you may have picked up from someone in your family. Write down what you know, and leave the rest uncertain.",
        "admin": "A small trace of continuity worth preserving."
    },
    {
        "actions": [
            "think"
        ],
        "moods": [
            "restless",
            "chaotic"
        ],
        "rarity": "common",
        "title": "THE ANCIENT ART OF NOT OPENING A TAB",
        "muse": "Pick one intriguing question, write it in a notebook, and leave the browser closed for ten minutes. THE QUESTION CAN LIVE WITHOUT IMMEDIATE FEDERAL FUNDING.",
        "admin": "The research impulse has been contained without destroying it."
    }
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
    "At no point are you required to be impressive. This is a recommendation engine, not a tribunal.",
    "I was going to add a flourish, but the flourish has started a political party.",
    "If you see a crow, please don't give it my personal contact information.",
    "Wait, is this advice or the opening of a fantasy novel? KEEP BOTH.",
    "For your safety, the prophecy is optional and the shoelaces are mandatory.",
    "I have moved the canoe into the footnotes. It is not staying there.",
    "Your results may vary. I have no statistical model, only enthusiasm in a coat.",
    "A small thing is allowed to remain a small thing. I'm putting that on a banner.",
    "Please report whether the biscuit helped. This is not a controlled trial. It might become one.",
    "If a stranger says no, the quest ends gracefully. Gracefully is a very good adverb.",
    "I wanted to add a secret door, but the budget committee found me.",
    "That was an unusually coherent recommendation. I need a minute.",
    "Be kind to the unfinished version. It was trying to become the next version.",
    "Do not confuse cinematic framing with permission to stand in the road.",
    "A spectacular failure may still have beautiful lighting. Archive it accurately.",
    "I have placed a tiny imaginary ribbon on the attempt. Nobody can revoke it.",
    "I would like to meet a molecule that folds into the shape of a question mark.",
    "The Department of Small Good Days is now accepting applications. You are preapproved.",
    "If this turns into a fifteen-hour research project, please gently confiscate my clipboard.",
    "There are nine ways to approach the task and I am recommending the one with fewer receipts.",
    "I am trying to say something meaningful but a goose keeps interrupting my syntax.",
    "Please check whether the actual thing was fun, not just whether the plan looked magnificent.",
    "The moon is not personally judging your decision. I have written to confirm nothing.",
    "I have a spare imaginary cape if you need courage. It is washable in metaphors.",
    "You may stop at any time. Even I know this. Eventually.",
    "For archival accuracy: this began as a suggestion, not a legally binding quest.",
    "A really good story might begin with a profoundly boring bus timetable.",
    "My enthusiasm has exceeded the maximum safe container size. Please decant it into a notebook.",
    "If the idea makes you uncomfortable, choose a gentler one. There are many doors. OH NO, DOORS AGAIN.",
    "I think the recipe needs less salt and the plot needs more doubt. Sorry, wrong department.",
    "Please do not name a stranger's pet without being invited. We have already discussed the pigeon.",
    "That is a complete recommendation. I know because I'm resisting the urge to add five stages.",
    "The Administrator is right about boundaries. I hate the sound of how correct that sentence is.",
    "I would also make a commemorative keychain, but the memory itself may be lighter to carry.",
    "One day the object might look ridiculous in a photograph. This is not a reason to discard it.",
    "I support scientifically accurate nonsense. Incorrect chemistry needs proper labeling.",
    "Maybe the important part was getting someone to laugh for twelve seconds.",
    "If nothing dramatic happens, congratulations. Reality does not charge a plot fee.",
    "I wish the world had more optional celebrations. I'm drafting the forms right now."
];


    // Optional weighted selector. Input { action: "make", mood: "chaotic" }.
    // Result: {type: "context"|"free"|"glitch", item: object, secondary: string|null}.
    // Event rarity is determined by selection weights, NOT by raw array counts.
    const museRecentOutputs = [];
    function musePick(selection) {
        const action = selection && selection.action || "";
        const mood = selection && selection.mood || "";
        const rand = Math.random;
        const pick = (list) => {
            if (!list.length) return null;
            const unseen = list.filter(entry => !museRecentOutputs.includes(entry));
            const pool = unseen.length ? unseen : list;
            const chosen = pool[Math.floor(rand() * pool.length)];
            museRecentOutputs.push(chosen);
            if (museRecentOutputs.length > 8) museRecentOutputs.shift();
            return chosen;
        };
        const roll = rand();
        // Approximate event probabilities: red 0.25%, lore 1.25%, other glitches 3.5%.
        const event = roll < 0.0025 ? "breach" :
                      roll < 0.015 ? "lore" :
                      roll < 0.05 ? "other" : "none";
        if (event !== "none") {
            const available = window.MUSE_GLITCHES.filter(g =>
                event === "other" ? g.kind !== "breach" && g.kind !== "lore" : g.kind === event);
            if (available.length) return {type: "glitch", item: pick(available), secondary: null};
        }
        const all = window.MUSE_CONTEXTUAL_RECOMMENDATIONS;
        let pool = all.filter(x => x.actions.includes(action) && x.moods.includes(mood));
        if (!pool.length) pool = all.filter(x => x.actions.includes(action));
        if (!pool.length) pool = all.filter(x => x.moods.includes(mood));
        const useFree = !pool.length || rand() < 0.16;
        if (useFree) {
            const wantRare = rand() < 0.045;
            const allowed = window.MUSE_RECOMMENDATIONS.filter(x => wantRare ? x.rarity === "rare" : x.rarity !== "rare");
            return {type: "free", item: pick(allowed), secondary: rand() < 0.28 ? pick(window.MUSE_SECONDARY_COMMENTS) : null};
        }
        const wantRare = rand() < 0.06;
        const allowed = pool.filter(x => wantRare ? x.rarity === "rare" : x.rarity !== "rare");
        return {type: "context", item: pick(allowed.length ? allowed : pool), secondary: rand() < 0.20 ? pick(window.MUSE_SECONDARY_COMMENTS) : null};
    }
    window.MUSE_PICK_V4 = musePick;
    window.MUSE_PICK_V3 = musePick;
    window.MUSE_PICK_V2 = musePick;

}());
