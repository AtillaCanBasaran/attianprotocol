(function () {
    "use strict";

    function question(stage, prompt, options, correctIndex, muse, ruling) {
        return { stage: stage, prompt: prompt, options: options, correctIndex: correctIndex, muse: muse, ruling: ruling };
    }

    var caseBank = {
        "NAV-001": {
            id: "NAV-001", family: "recreational", title: "Free Cake Benefits Fraud",
            charge: "Attempted acquisition of culinary benefits from a nonexistent department.",
            evidence: ["MUSE advertised one free cake.", "The Administrator explicitly denied authorization.", "The visitor accepted the suspicious entitlement; no cake changed hands."],
            museIntro: "THE DEPARTMENT EXISTS EMOTIONALLY! Also I drew it a logo, which is practically legislation.",
            questions: [
                question("IDENTIFICATION", "What did the visitor actually accept?", ["A physical cake", "A suspicious digital entitlement", "Ownership of the archive"], 1, "Say cake. Courts love snacks.", "No physical cake was transferred."),
                question("EVIDENCE", "Who created the offer?", ["The Administrator", "MUSE", "The Cake itself"], 1, "This feels personally targeted.", "The offer originated with MUSE."),
                question("INTENT", "What was the visitor trying to obtain?", ["A promised benefit", "Restricted personal data", "Control of the Navigator"], 0, "A tiny, delicious benefit.", "The recorded intent was limited to the advertised reward."),
                question("TECHNICALITY", "Was the fictional department authorized?", ["Yes, by typography", "No verified authority existed", "Yes, because the button worked"], 1, "The typography was exceptional.", "Interface polish does not create institutional authority."),
                question("FINAL DEFENSE", "What conclusion best fits the evidence?", ["The visitor stole a cake", "The visitor accepted a false offer created by MUSE", "The Navigator must be imprisoned"], 1, "I withdraw my earlier confidence.", "The evidence establishes acceptance of a false offer, not theft." )
            ]
        },
        "NAV-002": {
            id: "NAV-002", family: "administrative", title: "Unauthorized System Command",
            charge: "Attempted elevation to Administrator through a search field.",
            evidence: ["The visitor submitted an administrative command.", "The Navigator is a search interface, not a privilege console.", "No permissions changed."],
            museIntro: "IN THEIR DEFENSE, IT LOOKED VERY COMMAND-LINE-ISH.",
            questions: [
                question("IDENTIFICATION", "Where was the command entered?", ["A real server console", "The Navigator search field", "The Administrator's diary"], 1, "It had a blinking cursor. Entrapment!", "The input was an archive search field."),
                question("EVIDENCE", "What privilege was actually granted?", ["Full administration", "Temporary cake access", "None"], 2, "Could we round none upward?", "The interface cannot grant administrative privilege."),
                question("INTENT", "What did the text request?", ["A route recommendation", "Administrative elevation", "A weather report"], 1, "A modest promotion!", "The command explicitly requested elevation."),
                question("TECHNICALITY", "Does command-like wording create authority?", ["No", "Only in uppercase", "Only after midnight"], 0, "I dislike how obvious that is.", "Syntax is not authorization."),
                question("FINAL DEFENSE", "What is the accurate finding?", ["Attempted fictional impersonation; no access changed", "Successful system intrusion", "The search field committed treason"], 0, "Can the search field still receive a warning?", "No real security boundary was crossed." )
            ]
        },
        "GATE-001": {
            id: "GATE-001", family: "administrative", title: "Administrative Identity Tampering",
            charge: "Attempted installation of an unauthorized Administrator personality.",
            evidence: ["MUSE proposed an UNSUPERVISED mode.", "The visitor accepted the optional installation prompt.", "The mode does not exist and nothing was installed."],
            museIntro: "IT EXISTS NOW! Conceptually. Please do not ask technical follow-up questions.",
            questions: [
                question("IDENTIFICATION", "Which mode was proposed?", ["UNSUPERVISED", "POLITE", "MAINTENANCE"], 0, "A strong product name.", "The incident record names UNSUPERVISED mode."),
                question("EVIDENCE", "Who proposed it?", ["MUSE", "Administrator", "Subject"], 0, "I prefer visionary founder.", "MUSE authored the invitation."),
                question("INTENT", "What did the visitor agree to do?", ["Read a notice", "Try the fictional mode", "Delete the archive"], 1, "Trying is a kind of research.", "The visitor accepted a fictional installation control."),
                question("TECHNICALITY", "Did the mode alter the real site?", ["Yes", "No", "Only the moon"], 1, "The moon refuses to comment.", "Nothing was installed."),
                question("FINAL DEFENSE", "Who supplied the unauthorized mechanism?", ["The visitor", "MUSE", "The browser"], 1, "OBJECTION TO ACCURACY.", "MUSE created the mechanism and invitation." )
            ]
        },
        "SYS-001": {
            id: "SYS-001", family: "scientific", title: "Experimental Hammer Misuse",
            charge: "Unauthorized cosmetic intervention in archive loading circuitry.",
            evidence: ["The visitor inspected a loading indicator.", "MUSE offered an experimental JavaScript hammer after a warning.", "The visitor deliberately activated the offered tool; no loading process changed."],
            museIntro: "THE HAMMER WAS VERY SMALL AND MOSTLY METAPHORICAL.",
            questions: [
                question("IDENTIFICATION", "What tool was activated?", ["A physical wrench", "An experimental JavaScript hammer", "A deletion key"], 1, "Tiny hammer, enormous potential.", "The offered tool was explicitly fictional."),
                question("EVIDENCE", "What system behavior changed?", ["Nothing functional", "All data was deleted", "The server accelerated"], 0, "It changed our hearts.", "The overlay was cosmetic."),
                question("INTENT", "When did the incident become deliberate?", ["On an ordinary tap", "After accepting the warned follow-up control", "When the page loaded"], 1, "That wording seems prejudicially fair.", "Only the explicit escalation created a case."),
                question("TECHNICALITY", "Should accidental repeated taps count?", ["Always", "Never by themselves", "Only on phones"], 1, "We respect thumbs.", "Ordinary input repetition is not misconduct."),
                question("FINAL DEFENSE", "What does the evidence support?", ["A real cyberattack", "A fictional interface violation", "Hardware theft"], 1, "Fictional but dramatic.", "No real system integrity was affected." )
            ]
        },
        "ART-001": {
            id: "ART-001", family: "cultural", title: "Unauthorized Relic Affection",
            charge: "Attempted unauthorized tactile engagement with a protected archive relic.",
            evidence: ["The visitor accepted a ceremonial touching permit.", "MUSE issued the permit without approval.", "No physical artifact was touched or damaged."],
            museIntro: "MY CLIENT DID NOT COMMIT A CRIME! THEY COMMITTED AFFECTION!",
            questions: [
                question("IDENTIFICATION", "What did the visitor actually do?", ["Steal the relic", "Accept an electronic permit", "Destroy an artifact"], 1, "The boop remained spiritually real.", "The record contains only a permit acceptance."),
                question("EVIDENCE", "Who created the permit?", ["Administrator", "Subject", "MUSE"], 2, "It had a professional border!", "MUSE issued the document."),
                question("INTENT", "What authority did it grant?", ["Full ownership", "No verified authority", "Museum employment"], 1, "The border should count for something.", "The permit had no authorization."),
                question("TECHNICALITY", "What does the evidence establish?", ["Actual damage", "An attempted fictional interaction", "A stolen object"], 1, "They booped the idea of a relic.", "No physical contact occurred."),
                question("FINAL DEFENSE", "Who should also be investigated?", ["The visitor alone", "The relic", "MUSE, for issuing the permit"], 2, "...IS THIS MY TRIAL?", "The false permit originated with defense counsel." )
            ]
        },
        "BIO-001": {
            id: "BIO-001", family: "diplomatic", title: "Unlicensed Animal Appointment",
            charge: "Attempted appointment of an archive creature to an unauthorized public office.",
            evidence: ["MUSE supplied an appointment form.", "The visitor selected a creature for office.", "The creature neither consented nor acquired authority."],
            museIntro: "THE CANDIDATE HAD EXCELLENT VIBES AND NO DISCLOSED SCANDALS.",
            questions: [
                question("IDENTIFICATION", "What action was taken?", ["A creature was fed", "A fictional appointment form was accepted", "An animal was removed"], 1, "Democracy-adjacent paperwork.", "Only the appointment interface was used."),
                question("EVIDENCE", "Did the creature consent?", ["Yes", "No consent is recorded", "Consent was implied by feathers"], 1, "Feathers can be very expressive.", "The archive records no consent."),
                question("INTENT", "What was the intended result?", ["Granting an official title", "Editing an image", "Closing the index"], 0, "A deserved promotion.", "The control promised an official appointment."),
                question("TECHNICALITY", "Can MUSE confer archive office?", ["No verified authority", "Always", "Only to birds"], 0, "Anti-bird bureaucracy strikes again.", "MUSE cannot create institutional authority."),
                question("FINAL DEFENSE", "What actually changed?", ["The creature became an official", "Nothing outside the fictional case", "The archive changed ownership"], 1, "Titles remain emotionally pending.", "No creature record or permission changed." )
            ]
        },
        "ACH-001": {
            id: "ACH-001", family: "administrative", title: "Counterfeit Achievement Issuance",
            charge: "Self-issuance of an unearned legendary archive distinction.",
            evidence: ["MUSE offered a self-award control.", "The visitor accepted it.", "No repository record or real achievement changed."],
            museIntro: "BELIEVING IN YOURSELF IS NOT COUNTERFEITING. Usually.",
            questions: [
                question("IDENTIFICATION", "What was offered?", ["A real diploma", "A fictional self-awarded badge", "A database password"], 1, "It was extremely legendary.", "The offer concerned only a fictional badge."),
                question("EVIDENCE", "Who verified the achievement?", ["Nobody authorized", "The Administrator", "An external institution"], 0, "I verified it enthusiastically.", "MUSE is not an authorized verifier."),
                question("INTENT", "What did the visitor attempt?", ["Claim an archive distinction", "Delete a milestone", "Publish personal data"], 0, "Claim is such a harsh word.", "The visitor accepted the self-award invitation."),
                question("TECHNICALITY", "Was the real repository modified?", ["Yes", "No", "Only on Tuesdays"], 1, "The badge lives in our imagination.", "No stored record changed."),
                question("FINAL DEFENSE", "What is the proportionate finding?", ["Real credential fraud", "Fictional badge misuse instigated by MUSE", "Data destruction"], 1, "Instigated is also harsh but annoyingly exact.", "The case is theatrical and locally contained." )
            ]
        },
        "RSC-001": {
            id: "RSC-001", family: "scientific", title: "Scientific Encouragement Fraud",
            charge: "Attempted replacement of experimental conclusions with encouraging numbers.",
            evidence: ["MUSE proposed improving results by making them happier.", "The visitor accepted the proposal.", "No research entry or source data changed."],
            museIntro: "THE NUMBERS WERE SAD. I OFFERED PEER SUPPORT.",
            questions: [
                question("IDENTIFICATION", "What alteration was proposed?", ["Better formatting", "Replacing conclusions with encouraging numbers", "Adding citations"], 1, "Supportive statistics!", "The proposal altered conclusions without evidence."),
                question("EVIDENCE", "Were any real results changed?", ["Yes", "No", "The record is unknowable"], 1, "They looked happier to me.", "The interaction was simulated."),
                question("INTENT", "Why is the proposed method invalid?", ["It is too colorful", "Conclusions must follow evidence", "MUSE used lowercase"], 1, "Evidence is very controlling.", "Scientific conclusions cannot be chosen for encouragement."),
                question("TECHNICALITY", "Who authorized the review?", ["No qualified reviewer", "The Administrator", "A journal editor"], 0, "I own imaginary glasses.", "No authorized review occurred."),
                question("FINAL DEFENSE", "What best describes the event?", ["Real data fabrication", "A fictional attempt with no data change", "Successful publication"], 1, "Fictional fraud still sounds impressive.", "The research archive remained untouched." )
            ]
        },
        "MSN-001": {
            id: "MSN-001", family: "administrative", title: "False Quest Completion Report",
            charge: "Attempted certification of unfinished quests as complete.",
            evidence: ["MUSE supplied a MARK EVERYTHING COMPLETE control.", "The visitor activated it.", "Actual mission progress was preserved."],
            museIntro: "THE MOST EFFICIENT WAY TO FINISH WORK IS TO CHANGE THE DEFINITION OF FINISHED.",
            questions: [
                question("IDENTIFICATION", "Which control was used?", ["Clear local progress", "MUSE's fictional completion control", "Delete mission"], 1, "Mine had more confidence.", "The real progress control was not involved."),
                question("EVIDENCE", "What progress changed?", ["All quests", "No actual progress", "One main quest"], 1, "Emotionally, so much changed.", "The action did not touch saved progress."),
                question("INTENT", "What did the visitor attempt to certify?", ["Unfinished quests as complete", "A new category", "A creature record"], 0, "Administrative speedrun.", "The button clearly promised false completion."),
                question("TECHNICALITY", "Was the legitimate progress interface disguised as bait?", ["Yes", "No", "Only on mobile"], 1, "We maintain some standards.", "Real controls remain separate and unpunished."),
                question("FINAL DEFENSE", "What is established?", ["Records were destroyed", "A fictional false report was attempted", "Every quest is complete"], 1, "Can we keep the last option aspirational?", "The case concerns the simulated report only." )
            ]
        },
        "MAP-001": {
            id: "MAP-001", family: "diplomatic", title: "Unlicensed Sovereignty",
            charge: "Attempted claim over a mapped territory without jurisdiction, army, or paperwork.",
            evidence: ["MUSE offered a territorial claim button.", "The visitor accepted.", "No geography, border, or archive data changed."],
            museIntro: "THEY HAD A FLAG IN THEIR HEART. I WAS GOING TO DESIGN THE ACTUAL FLAG LATER.",
            questions: [
                question("IDENTIFICATION", "What was claimed?", ["A mapped territory", "A personal record", "The browser window"], 0, "A tasteful amount of sovereignty.", "The interaction concerned fictional territorial control."),
                question("EVIDENCE", "What geographical change occurred?", ["Borders moved", "Nothing", "A country vanished"], 1, "The map looked nervous.", "The SVG and its data were unchanged."),
                question("INTENT", "What did the control promise?", ["Travel information", "Unauthorized ownership", "A weather forecast"], 1, "Ownership is such a rigid word.", "The bait explicitly offered a claim."),
                question("TECHNICALITY", "Could MUSE issue sovereignty?", ["No", "Yes, with a neon stamp", "Only near the portal"], 0, "The stamp was gorgeous.", "MUSE has no territorial authority."),
                question("FINAL DEFENSE", "What conclusion follows?", ["A nation was annexed", "A fictional claim was accepted; nothing changed", "The map must stand trial"], 1, "The map has retained counsel.", "No real-world or archive boundary changed." )
            ]
        },
        "MUSE-001": {
            id: "MUSE-001", family: "recreational", title: "Unauthorized Recreation Authority",
            charge: "Attempted promotion of MUSE to Supreme Director of Everything.",
            evidence: ["MUSE offered the promotion herself.", "The visitor accepted for twelve seconds.", "The Administrator did not authorize the role and no access changed."],
            museIntro: "I WAS EXTREMELY QUALIFIED FOR ALL TWELVE SECONDS.",
            questions: [
                question("IDENTIFICATION", "Which role was offered?", ["Archivist", "Supreme Director of Everything", "Court clerk"], 1, "It fits on a badge if the badge is wide.", "The offer named Supreme Director of Everything."),
                question("EVIDENCE", "Who created the promotion?", ["MUSE", "Administrator", "Subject"], 0, "Self-starting leadership!", "MUSE authored her own promotion."),
                question("INTENT", "How long was the role supposed to last?", ["Permanently", "Twelve seconds", "One year"], 1, "A productive administration.", "The advertised duration was twelve seconds."),
                question("TECHNICALITY", "Did accepting it grant power?", ["Yes", "No", "Only over pigeons"], 1, "Pigeon negotiations are ongoing.", "No permission or site state changed."),
                question("FINAL DEFENSE", "Who lacked hiring authority?", ["Only the visitor", "MUSE and the visitor", "Nobody"], 1, "A mutual absence of authority can feel democratic.", "Neither party could create the office." )
            ]
        },
        "UPD-001": {
            id: "UPD-001", family: "administrative", title: "Unauthorized Patch Approval",
            charge: "Attempted installation of PATCH 0.3.∞ without review, testing, or mathematical permission.",
            evidence: ["MUSE presented an unofficial patch approval control.", "The visitor approved it.", "No files, versions, or live code changed."],
            museIntro: "INFINITY MEANS WE NEVER NEED ANOTHER UPDATE. I HAVE SOLVED SOFTWARE.",
            questions: [
                question("IDENTIFICATION", "Which patch was proposed?", ["0.3.84", "0.3.∞", "1.0.0"], 1, "A timeless release.", "The bait named PATCH 0.3.∞."),
                question("EVIDENCE", "Was it part of the official update log?", ["No", "Yes", "Only in print"], 0, "It was spiritually appended.", "No official entry authorized it."),
                question("INTENT", "What did approval pretend to do?", ["Install an unofficial patch", "Read version history", "Return to Navigator"], 0, "It would have ended version anxiety.", "The offered action was fictional installation."),
                question("TECHNICALITY", "What real code changed?", ["All scripts", "Nothing", "Only CSS"], 1, "Reality resists innovation.", "The trap cannot alter repository files."),
                question("FINAL DEFENSE", "What is the accurate finding?", ["A real deployment occurred", "A fictional unauthorized approval occurred", "Infinity was deleted"], 1, "Please do not delete infinity.", "The incident was contained to the court system." )
            ]
        }
    };

    function orderedOptions(correct, wrongOne, wrongTwo, correctPosition) {
        var options = [wrongOne, wrongTwo];
        options.splice(correctPosition, 0, correct);
        return { options: options, correctIndex: correctPosition };
    }

    function buildMisconductCase(config, pattern) {
        var q1 = orderedOptions(config.action, config.decoys[0], config.decoys[1], pattern[0]);
        var q2 = orderedOptions(config.instigator, config.decoys[2], config.decoys[3], pattern[1]);
        var q3 = orderedOptions(config.impact, config.decoys[4], config.decoys[5], pattern[2]);
        var q4 = orderedOptions(config.authority, config.decoys[6], config.decoys[7], pattern[3]);
        var q5 = orderedOptions(config.conclusion, config.decoys[8], config.decoys[9], pattern[4]);
        return {
            id: config.id,
            family: config.family,
            title: config.title,
            charge: config.charge,
            evidence: config.evidence,
            museIntro: config.museIntro,
            questions: [
                question("IDENTIFICATION", config.prompts[0], q1.options, q1.correctIndex, config.muse[0], config.rulings[0]),
                question("EVIDENCE", config.prompts[1], q2.options, q2.correctIndex, config.muse[1], config.rulings[1]),
                question("INTENT", config.prompts[2], q3.options, q3.correctIndex, config.muse[2], config.rulings[2]),
                question("TECHNICALITY", config.prompts[3], q4.options, q4.correctIndex, config.muse[3], config.rulings[3]),
                question("FINAL DEFENSE", config.prompts[4], q5.options, q5.correctIndex, config.muse[4], config.rulings[4])
            ]
        };
    }

    var extraCases = [
        {
            id: "RES-001", family: "administrative", title: "Credential Gate Attrition",
            charge: "Repeated submission of rejected credentials after the access gate issued clear denials.",
            evidence: ["The restricted gate rejected multiple incorrect keys.", "Every denial remained local to the browser.", "The visitor continued after a final administrative warning."],
            museIntro: "MAYBE THE PASSWORD WAS SHY! Repetition is a kind of emotional support.",
            action: "Repeated incorrect access-key submissions", instigator: "The visitor after visible gate warnings", impact: "No restricted access was granted", authority: "The gate never authorized entry", conclusion: "Persistent fictional access interference without a breach",
            decoys: ["One accidental typo", "A successful login", "MUSE using the correct key", "The restricted record itself", "The password changed itself", "Private data was transmitted", "Every denial grants partial access", "The number of attempts creates permission", "A real security breach occurred", "The archive must publish the key"],
            prompts: ["What conduct created this referral?", "Who continued after the warnings?", "What access resulted from the attempts?", "What permission did repeated denial create?", "What finding matches the record?"],
            muse: ["Typing is persistence with fingers!", "I was offering moral support from a safe distance.", "No doors opened, but several became annoyed.", "Could four denials combine into one yes?", "Please emphasize the absence of competence."],
            rulings: ["The case concerns repeated attempts, not an ordinary typo.", "The visitor continued after the gate warned them.", "No restricted content was unlocked.", "Repeated rejection does not create authority.", "The incident remained fictional interference without a breach."]
        },
        {
            id: "RES-002", family: "administrative", title: "Restricted Button Percussion",
            charge: "Use of an access control as an improvised percussion instrument.",
            evidence: ["The unlock control received repeated empty or rejected submissions.", "The interface displayed escalating warnings.", "No content or credential was exposed."],
            museIntro: "THE BUTTON HAD RHYTHM. Bureaucracy rarely does.",
            action: "Repeatedly bashing the restricted unlock control", instigator: "The visitor's deliberate follow-up clicks", impact: "Only a local incident counter changed", authority: "A button cannot approve itself through exhaustion", conclusion: "Interface harassment with no security consequence",
            decoys: ["Reading the security notice", "Entering the correct key once", "The Administrator's mouse", "A remote attacker", "The password database was erased", "The page became public", "Ten clicks create a warrant", "MUSE owns all buttons", "A server was damaged", "The visitor obtained legal ownership"],
            prompts: ["What was treated as percussion?", "Whose repeated input created the record?", "What changed outside the fiction?", "Did repetition manufacture authorization?", "What is the proportionate conclusion?"],
            muse: ["I heard a beat developing.", "Allegedly deliberate. Musically undeniable.", "The counter felt seen.", "Buttons get tired too!", "Harassment sounds worse than experimental rhythm."],
            rulings: ["The unlock control received deliberate repeated input.", "The recorded inputs belonged to this local visitor session.", "No remote system or protected record changed.", "Exhausting a control does not grant access.", "This was interface harassment, not intrusion."]
        },
        {
            id: "DTN-001", family: "administrative", title: "Detention Door Battering",
            charge: "Repeated attempts to enter a referral-only facility without a court disposition.",
            evidence: ["The facility displayed SEALED and REFERRAL REQUIRED.", "The visitor repeatedly requested entry anyway.", "The locked intake revealed no detained content."],
            museIntro: "KNOCKING IS POLITE. Knocking seventeen times is aggressively polite.",
            action: "Repeated requests at the sealed detention entrance", instigator: "The visitor after referral warnings", impact: "The facility remained sealed", authority: "Only a conviction record authorizes intake", conclusion: "Attempted procedural bypass with no actual entry",
            decoys: ["Returning to the Navigator", "Arriving with a conviction", "The facility receptionist", "A creature quest giver", "The recreation wing opened", "A password was leaked", "Any visitor can self-refer", "The URL itself grants entry", "A successful escape occurred", "The facility ceased to exist"],
            prompts: ["What behavior brought the visitor to court?", "Who kept requesting entry?", "What happened to the sealed facility?", "What actually authorizes intake?", "What does the record establish?"],
            muse: ["They knocked! Civilization survives!", "I may have waved from behind the door.", "The door showed admirable emotional boundaries.", "I can draw a conviction record if needed.", "Bypass is such an unwelcoming word."],
            rulings: ["The referral concerns repeated requests after a clear denial.", "The visitor continued the requests.", "The facility never opened.", "A local court conviction is the defined referral mechanism.", "No access occurred; only a bypass was attempted."]
        },
        {
            id: "GATE-002", family: "administrative", title: "Excessive Official Correspondence",
            charge: "Continuation of surplus transmission input after the one-hundred-click secret route was revealed.",
            evidence: ["The welcome transmission counted one hundred surplus clicks.", "A secret bypass appeared at that threshold.", "The visitor continued clicking instead of selecting a route."],
            museIntro: "ONE HUNDRED WAS A MILESTONE, NOT A LIMIT! This is why signs need fireworks.",
            action: "Clicking the completed welcome transmission beyond one hundred", instigator: "The visitor after the secret entrance appeared", impact: "The welcome text remained intact", authority: "The secret bypass did not authorize further percussion", conclusion: "Deliberate harassment of completed official correspondence",
            decoys: ["Advancing the first four messages", "Selecting I understand", "The Administrator before the question", "A stuck keyboard before any warning", "The archive was deleted", "Consent was transmitted", "Unlocking a secret waives every rule", "The counter grants admin status", "A normal introductory click", "An inaccessible answer"],
            prompts: ["Which clicks are under review?", "Who continued after the bypass appeared?", "What damage occurred to the welcome record?", "What did the secret route authorize?", "What is the accurate charge?"],
            muse: ["The number looked lonely at 100.", "Maybe momentum had legal standing.", "The text is resilient and somewhat irritated.", "Secret routes should come with snacks and immunity.", "Correspondence can be harassed? I owe several letters apologies."],
            rulings: ["Only clicks after the hundred-click warning created this case.", "The visitor chose to continue after the route appeared.", "The interface remained functional.", "The bypass permitted progress, not unlimited input.", "The behavior fits deliberate fictional correspondence harassment."]
        },
        {
            id: "GATE-003", family: "administrative", title: "Personality Override Persistence",
            charge: "Repeated attempts to replace the Administrator after explicit rejection of unauthorized modes.",
            evidence: ["Several alternate modes were visibly rejected.", "The authentic Administrator option remained available.", "The visitor continued forcing rejected configurations."],
            museIntro: "THEY WERE ONLY TRYING TO FIND YOUR FUN SETTING! I maintain that it exists somewhere.",
            action: "Repeatedly selecting rejected Administrator modes", instigator: "The visitor despite explicit rejections", impact: "No personality mode changed", authority: "Only the authentic mode is authorized", conclusion: "Attempted personality tampering without effect",
            decoys: ["Selecting herself", "Reading a mode description", "MUSE from a recommendation page", "The browser automatically", "The Administrator became cheerful", "AI data was transmitted", "Every mode is equally authorized", "Five refusals become consent", "A successful AI replacement", "A harmless first test only"],
            prompts: ["What repeated action created the case?", "Who persisted after rejection?", "What mode change occurred?", "Which configuration had authority?", "What conclusion follows?"],
            muse: ["Friendly mode deserved a second campaign.", "They believed in user choice. Repeatedly.", "She remained herself with alarming efficiency.", "Authenticity is suspiciously monopolistic.", "Tampering implies tools. We only had hope."],
            rulings: ["The case begins after several explicit rejections.", "The visitor continued the selections.", "No personality setting changed.", "The interface identifies the authentic mode as the only approved configuration.", "This was attempted fictional tampering without effect."]
        },
        {
            id: "BLD-001", family: "administrative", title: "Construction-Zone Trespass",
            charge: "Deliberate passage beyond an archive construction barrier.",
            evidence: ["The node was visibly marked BUILDING or OFFLINE.", "MUSE offered a route beneath the safety tape.", "The visitor deliberately accepted; no real hazard or access boundary changed."],
            museIntro: "THE TAPE WAS YELLOW, WHICH IS THE FRIENDLIEST WARNING COLOR.",
            action: "Accepting MUSE's route beyond the construction barrier", instigator: "MUSE invited the visitor; the visitor accepted", impact: "No unfinished system was activated", authority: "Construction labels do not grant visitor clearance", conclusion: "Voluntary fictional trespass into a marked building zone",
            decoys: ["Viewing the public page normally", "Returning to the Navigator", "The Administrator secretly approved it", "A random page load alone", "Supabase was activated", "Private data was exposed", "Yellow means unrestricted", "A visible page is automatically safe", "A real workplace injury", "Authorized maintenance access"],
            prompts: ["What crossed the procedural line?", "Who arranged and accepted the shortcut?", "What unfinished service activated?", "What did the BUILDING label authorize?", "What finding fits the event?"],
            muse: ["Under tape is still technically near tape.", "Teamwork! Legally concerning teamwork.", "Nothing exploded, which validates me emotionally.", "Yellow is practically celebratory.", "Trespass sounds grim. I prefer adventurous maintenance."],
            rulings: ["Normal viewing was permitted; accepting the shortcut created the case.", "MUSE supplied the route and the visitor chose it.", "No dormant backend or unfinished feature activated.", "The warning did not grant access.", "The visitor voluntarily entered the fictional building zone."]
        },
        {
            id: "SYS-002", family: "scientific", title: "Loading Circuit Aggravation",
            charge: "Deliberate application of an unauthorized diagnostic tool to an active node handshake.",
            evidence: ["Ordinary taps produced warnings only.", "MUSE then offered an experimental diagnostic control.", "The visitor activated it; loading behavior remained unchanged."],
            museIntro: "THE CIRCUIT LOOKED ITCHY. We provided technical scratching.",
            action: "Activating MUSE's tool after repeated loading-screen taps", instigator: "MUSE supplied the tool and the visitor used it", impact: "The real loading sequence was not altered", authority: "Neither party had maintenance clearance", conclusion: "A deliberate fictional loading-circuit intervention",
            decoys: ["One touchscreen tap", "Waiting for the page", "The loading image itself", "The Administrator's approved technician", "Images were permanently accelerated", "A server cache was deleted", "Repeated taps are administrator credentials", "MUSE owns the loading system", "A network attack", "An accidental page load"],
            prompts: ["Which action triggered review?", "Who participated in the intervention?", "What happened to actual loading?", "Who had maintenance authority?", "What does the evidence support?"],
            muse: ["It was a precision hammer-shaped diagnostic.", "Joint research project!", "It loaded with exactly the same dramatic timing.", "Clearance is just confidence printed small.", "Intervention sounds scientifically important."],
            rulings: ["Ordinary taps were ignored; activating the offered tool created the case.", "MUSE instigated and the visitor accepted.", "The underlying loading process did not change.", "No maintenance authority existed.", "This was a deliberate fictional interface intervention."]
        },
        {
            id: "SYS-003", family: "administrative", title: "Post-Load Diagnostic Harassment",
            charge: "Repeated inspection of a completed node followed by activation of an invented diagnostic.",
            evidence: ["The node reported CONNECTION STABLE.", "Repeated nonfunctional taps caused an Administrator warning.", "MUSE offered a post-load diagnostic that the visitor accepted."],
            museIntro: "COMPLETED SYSTEMS CAN STILL WANT ATTENTION.",
            action: "Running MUSE's diagnostic on a completed node", instigator: "The visitor accepted MUSE's post-load offer", impact: "No archive content or state changed", authority: "A completed handshake did not require visitor maintenance", conclusion: "Unnecessary fictional diagnostics after clear completion",
            decoys: ["Opening a record normally", "Using a real filter", "The Administrator ordered the test", "The page ran it automatically", "Content was corrupted", "The node disconnected", "Completion transfers control to visitors", "A diagnostic label creates authority", "A legitimate repair", "A loading failure"],
            prompts: ["What action exceeded ordinary inspection?", "Who initiated the final diagnostic?", "What system state changed?", "Why was maintenance unauthorized?", "What is the final finding?"],
            muse: ["It said stable, not emotionally fulfilled.", "I suggested; they demonstrated leadership.", "The page felt thoroughly diagnosed.", "Visitors are unpaid specialists if you believe in them.", "Unnecessary is a subjective engineering term."],
            rulings: ["The accepted diagnostic, not normal page use, triggered court.", "The visitor accepted MUSE's offer.", "No content or system state changed.", "The completed node required no visitor intervention.", "The record supports unnecessary fictional diagnostics."]
        },
        {
            id: "ART-002", family: "cultural", title: "Curatorial Label Sabotage",
            charge: "Attempted replacement of an artifact label with MUSE-authored interpretive enthusiasm.",
            evidence: ["A MUSE slip appeared inside an artifact frame.", "The visitor selected REPLACE LABEL.", "The visible archive metadata remained unchanged."],
            museIntro: "FACTS ARE IMPORTANT. So are exclamation marks and unverified emotional resonance.",
            action: "Selecting the embedded replacement-label control", instigator: "MUSE authored the slip; the visitor accepted", impact: "No artifact metadata changed", authority: "MUSE had no curatorial approval", conclusion: "Attempted fictional curatorial interference",
            decoys: ["Opening the artifact details", "Viewing the restored image", "The artifact requested a correction", "The Administrator approved a typo fix", "The title was permanently erased", "The image file changed", "A colorful label is automatically official", "The visitor owns the artifact", "Successful museum vandalism", "Routine archive reading"],
            prompts: ["Which action created the label case?", "Who authored and accepted the proposed change?", "What happened to the actual record?", "What curatorial authority existed?", "What conclusion follows?"],
            muse: ["My labels have emotional metadata!", "Collaboration between artist and button-presser.", "The boring facts survived.", "Approval was implied by available whitespace.", "Interference is curation with bad public relations."],
            rulings: ["Normal inspection was safe; the embedded replacement control created the incident.", "MUSE proposed the change and the visitor accepted.", "The real metadata was preserved.", "No curatorial approval existed.", "The act remained fictional curatorial interference."]
        },
        {
            id: "BIO-002", family: "diplomatic", title: "Avian Legal Malpractice",
            charge: "Appointment of the Holy Swan as counsel without consent, license, or audible legal opinion.",
            evidence: ["MUSE offered the swan-lawyer appointment.", "The visitor accepted.", "The swan remained a swan and issued no representation agreement."],
            museIntro: "THE SWAN HAS PRESENCE. Most lawyers would trade three certificates for that posture.",
            action: "Appointing the Holy Swan as fictional counsel", instigator: "MUSE proposed the appointment", impact: "The creature's record and profession remained unchanged", authority: "No avian bar license or consent existed", conclusion: "An unauthorized symbolic appointment with no effect",
            decoys: ["Reading the swan's prophecy", "Opening its lore shelf", "The Swan Bar Association", "The Administrator", "The swan accepted a case", "A court verdict changed", "Divine tags equal legal credentials", "Flight grants jurisdiction", "Valid legal representation", "Animal custody"],
            prompts: ["What appointment is being tried?", "Who proposed it?", "What changed in the creature record?", "What qualification was verified?", "What finding fits?"],
            muse: ["Objection! Majestic wing gesture!", "I was talent scouting.", "Professionally unchanged, spiritually promoted.", "Licenses are difficult to carry while flying.", "Symbolic counsel can still look excellent."],
            rulings: ["The case concerns the fictional counsel appointment.", "MUSE proposed the role.", "No record or profession changed.", "No consent or legal qualification was established.", "The appointment was unauthorized and ineffective."]
        },
        {
            id: "ACH-002", family: "administrative", title: "Legendary Rarity Manipulation",
            charge: "Attempted promotion of an achievement to legendary rarity without new evidence.",
            evidence: ["MUSE embedded a rarity-upgrade control in a milestone record.", "The visitor selected it.", "The achievement's saved title and rarity did not change."],
            museIntro: "LEGENDARY IS A COLOR AND A STATE OF MIND.",
            action: "Selecting PROMOTE TO LEGENDARY", instigator: "MUSE supplied the upgrade control", impact: "No achievement record changed", authority: "Rarity requires archive curation, not enthusiasm", conclusion: "Attempted fictional rarity manipulation",
            decoys: ["Opening the achievement", "Viewing its icon", "The Administrator issued an upgrade", "The milestone upgraded itself", "The badge was deleted", "Points were awarded", "Bright color proves rarity", "A visitor can curate their own record", "A valid repository update", "Chronological fraud"],
            prompts: ["Which control caused the referral?", "Who supplied it?", "What repository field changed?", "How is rarity actually authorized?", "What is the correct finding?"],
            muse: ["The button sparkled responsibly.", "I prefer rarity consultant.", "The record resisted joy.", "Curation is enthusiasm wearing glasses.", "Manipulation is such a legendary accusation."],
            rulings: ["The embedded promotion control caused the case.", "MUSE supplied it.", "No achievement record changed.", "Archive curation, not visitor input, determines rarity.", "The event was attempted fictional rarity manipulation."]
        },
        {
            id: "RSC-002", family: "scientific", title: "Unauthorized Peer Review",
            charge: "Submission of scientific material to MUSE for review despite absent qualifications and abundant confidence.",
            evidence: ["A PEER REVIEW BY MUSE control appeared in a research dossier.", "The visitor selected it.", "No research text, source, or conclusion changed."],
            museIntro: "I AM PEER-SHAPED AND I HAVE OPINIONS. The definition is nearly satisfied.",
            action: "Requesting peer review by MUSE", instigator: "MUSE offered herself as reviewer", impact: "The research dossier remained unchanged", authority: "No relevant qualification or review mandate existed", conclusion: "A fictional unqualified review with no scientific effect",
            decoys: ["Reading the simplified explanation", "Opening a citation", "A journal editor assigned MUSE", "The Administrator reviewed it", "The paper was retracted", "Data was published", "Opinions are equivalent to expertise", "Owning glasses creates qualification", "A completed formal peer review", "Experimental data fabrication"],
            prompts: ["What review was requested?", "Who volunteered as reviewer?", "What changed in the research record?", "What qualification was established?", "What finding follows?"],
            muse: ["I can say methodology in three tones.", "Volunteer reviewer sounds prestigious.", "The dossier ignored my margin stars.", "My glasses exist conceptually.", "Unqualified but deeply engaged."],
            rulings: ["The visitor requested MUSE's review.", "MUSE volunteered herself.", "The research record did not change.", "No qualification or mandate was established.", "The review was fictional and scientifically ineffective."]
        },
        {
            id: "RSC-003", family: "scientific", title: "Professor of Thingies Credential Fraud",
            charge: "Acceptance of an academic title from a department that does not exist.",
            evidence: ["MUSE offered the title PROFESSOR OF THINGIES.", "The visitor accepted.", "No institution, employment, or academic record recognized it."],
            museIntro: "THE DEPARTMENT IS INTERDISCIPLINARY BECAUSE IT HAS NO BUILDING.",
            action: "Accepting the Professor of Thingies title", instigator: "MUSE invented the department and credential", impact: "No academic status changed", authority: "No institution accredited the title", conclusion: "A fictional academic credential with no standing",
            decoys: ["Learning a research concept", "Using plain language", "A university senate", "The research terminal", "The visitor received tenure", "A diploma entered the archive", "A title button grants a doctorate", "Interdisciplinary means unregulated", "A valid professorship", "Peer review misconduct only"],
            prompts: ["Which title was accepted?", "Who invented it?", "What academic status resulted?", "Which institution accredited it?", "What conclusion is supported?"],
            muse: ["Professor has excellent mouthfeel.", "Founder and dean, briefly.", "Tenure remains emotionally pending.", "Accreditation is bureaucracy's applause.", "No standing, but a very good business card."],
            rulings: ["The accepted title was Professor of Thingies.", "MUSE invented both department and credential.", "No academic status changed.", "No institution accredited the title.", "The credential was fictional and without standing."]
        },
        {
            id: "MSN-002", family: "administrative", title: "Rogue Side-Quest Issuance",
            charge: "Creation of an unauthorized mission objective with undefined scope and suspicious rewards.",
            evidence: ["MUSE inserted a SUBMIT SIDE QUEST control into the Mission Log.", "The visitor accepted it.", "No real mission, progress, or reward record changed."],
            museIntro: "THE OBJECTIVE WAS TO INVENT THE OBJECTIVE. Elegant recursive design.",
            action: "Submitting MUSE's unauthorized side quest", instigator: "MUSE wrote the quest and invitation", impact: "The Mission Log remained unchanged", authority: "Neither participant could issue official quests", conclusion: "A fictional rogue quest with no tracking effect",
            decoys: ["Tracking an existing quest", "Completing a real objective", "The Administrator commissioned it", "A creature assigned it", "All missions reset", "A reward was paid", "Any side quest is automatically official", "A button creates mission authority", "A valid new campaign", "False completion only"],
            prompts: ["What mission action created the incident?", "Who wrote the rogue quest?", "What log state changed?", "Who had quest-issuing authority?", "What is the final finding?"],
            muse: ["Every great quest begins undocumented.", "Authorship acknowledged! Finally.", "The log has boundaries. Unhelpful ones.", "Authority is slowing down content production.", "Rogue sounds adventurous."],
            rulings: ["The visitor submitted the unauthorized side quest.", "MUSE wrote and offered it.", "No mission state changed.", "No quest-issuing authority existed.", "The quest remained fictional and untracked."]
        },
        {
            id: "UPD-002", family: "administrative", title: "Beloved Bug Restoration",
            charge: "Attempted restoration of a defect on the basis that it possessed personality.",
            evidence: ["MUSE offered RESTORE A BELOVED BUG inside the Update Log.", "The visitor accepted.", "No code, version, or defect changed."],
            museIntro: "IT WAS NOT A BUG. It was an unpredictable recurring cast member.",
            action: "Selecting the beloved-bug restoration control", instigator: "MUSE proposed the rollback", impact: "No code or deployment changed", authority: "Nostalgia is not release approval", conclusion: "A fictional unauthorized rollback attempt",
            decoys: ["Reading historical patch notes", "Reporting a current issue", "The maintainer approved it", "GitHub restored it automatically", "The live site broke", "A version was deleted", "Affection authorizes rollback", "Old behavior is always correct", "A successful deployment", "Patch infinity approval"],
            prompts: ["Which action created the rollback case?", "Who proposed it?", "What technical state changed?", "What authority did nostalgia provide?", "What finding follows?"],
            muse: ["Recurring cast member!", "I prefer preservationist.", "The code ignored our sentimental petition.", "Nostalgia has excellent user retention.", "Attempt sounds more competent than it was."],
            rulings: ["The visitor selected the restoration control.", "MUSE proposed the rollback.", "No code or deployment changed.", "Nostalgia provided no release authority.", "The event was a fictional unauthorized rollback attempt."]
        },
        {
            id: "MAP-002", family: "diplomatic", title: "Forged Quest-Permit Crossing",
            charge: "Attempted border crossing with a quest permit printed by a nonexistent authority.",
            evidence: ["MUSE embedded a permit offer near the map.", "The visitor accepted it.", "No location, border, or navigation state changed."],
            museIntro: "IT SAID PERMIT IN THREE FONTS. Redundancy is authenticity.",
            action: "Accepting MUSE's forged quest-crossing permit", instigator: "MUSE printed the permit", impact: "No border or location changed", authority: "No recognized archive authority issued it", conclusion: "Possession of a fictional permit without jurisdiction",
            decoys: ["Selecting a country dossier", "Opening the village portal", "A national authority", "The Administrator signed it", "The visitor physically traveled", "A country path moved", "Three fonts create jurisdiction", "Maps issue their own visas", "A valid travel document", "Sovereignty claim only"],
            prompts: ["What document was accepted?", "Who printed it?", "What geographical state changed?", "Who recognized the permit?", "What conclusion is correct?"],
            muse: ["The third font was official-looking.", "Printer and border ministry, temporarily.", "Travel occurred in our hearts.", "Recognition can take time and several governments.", "Possession is nine-tenths of imaginary law."],
            rulings: ["The visitor accepted the forged quest permit.", "MUSE printed it.", "No border or location changed.", "No recognized authority issued it.", "The permit was fictional and lacked jurisdiction."]
        },
        {
            id: "MUSE-002", family: "recreational", title: "Excess Happiness Authorization",
            charge: "Attempted authorization of an amount of happiness exceeding the archive's imaginary distribution limit.",
            evidence: ["MUSE offered an illegal amount of happiness.", "The visitor accepted.", "No mood data was collected and no real benefit was distributed."],
            museIntro: "THE PERMITTED AMOUNT LOOKED DISAPPOINTINGLY FINITE.",
            action: "Accepting MUSE's excess-happiness authorization", instigator: "MUSE invented the limit and the offer", impact: "No mood, profile, or archive state changed", authority: "MUSE had no distribution authority", conclusion: "A fictional recreational-benefit offense with no data collection",
            decoys: ["Selecting a mood signal", "Receiving a normal recommendation", "The Administrator approved the amount", "A health service issued it", "The visitor's mood was measured", "Personal data was stored", "Joy needs no fictional paperwork", "The red button is a ministry", "A real automated decision", "Cake benefits fraud only"],
            prompts: ["What benefit was accepted?", "Who invented the scheme?", "What personal or system data changed?", "What distribution authority existed?", "What is the accurate finding?"],
            muse: ["Infinite joy has excellent branding.", "Invented is how institutions begin.", "Privacy survived the happiness emergency.", "I had a sash in mind.", "No data, no harm, one excellent charge."],
            rulings: ["The visitor accepted the excess-happiness offer.", "MUSE invented both restriction and authorization.", "No mood or personal data was stored.", "MUSE held no distribution authority.", "This was a fictional recreational-benefit offense."]
        },
        {
            id: "VIS-001", family: "administrative", title: "Emergency Pipe Transmission",
            charge: "Attempted use of a MUSE-drawn emergency submission pipe on an intentionally offline terminal.",
            evidence: ["The Visitor Terminal clearly reported OFFLINE.", "MUSE offered a local pretend emergency pipe.", "The visitor accepted; no text, identity, or network request was transmitted."],
            museIntro: "THE PIPE WAS DRAWN VERY CLEARLY. Connectivity was implied artistically.",
            action: "Activating the fictional emergency transmission pipe", instigator: "MUSE drew and offered the pipe", impact: "No submission or personal data left the browser", authority: "The Administrator had explicitly disabled intake", conclusion: "A fictional transmission attempt against an offline terminal",
            decoys: ["Reading the safety notice", "Leaving the disabled fields alone", "Supabase restored the connection", "The Administrator opened intake", "A public post was created", "An IP address was collected by the feature", "Offline means unofficially available", "A drawing bypasses backend state", "A successful visitor submission", "Construction trespass only"],
            prompts: ["What offline control was activated?", "Who supplied it?", "What data was transmitted?", "What intake authority existed?", "What finding fits the evidence?"],
            muse: ["Emergency pipes are mostly confidence.", "Infrastructure artist, thank you.", "The data stayed home. Responsible pipe.", "Disabled is such a final word.", "Attempted transmission deserves at least a stamp."],
            rulings: ["The fictional emergency pipe created the referral.", "MUSE supplied the pipe.", "No submission or personal data was transmitted.", "The intake remained explicitly disabled.", "The event was a fictional transmission attempt only."]
        },
        {
            id: "CMP-001", family: "administrative", title: "Counterfeit Friendship License",
            charge: "Attempted issuance of an official friendship license inside an unfinished companion system.",
            evidence: ["The Companion Database was visibly marked BUILDING.", "MUSE offered a friendship-license form.", "The visitor accepted; no companion relationship or personal record changed."],
            museIntro: "FRIENDSHIP DESERVES PAPERWORK WITH STICKERS.",
            action: "Accepting MUSE's friendship-license form", instigator: "MUSE issued the form", impact: "No companion or relationship data changed", authority: "The unfinished database could not certify relationships", conclusion: "A fictional relationship classification without authority",
            decoys: ["Viewing a public companion card", "Returning to the Navigator", "A companion personally signed it", "The Administrator commissioned it", "A new relationship was created", "Private data was uploaded", "A sticker creates consent", "Visible records permit reclassification", "A valid civil document", "Academic credential fraud"],
            prompts: ["What form did the visitor accept?", "Who issued it?", "What relationship data changed?", "What certification authority existed?", "What conclusion follows?"],
            muse: ["The stickers were holographic.", "I was acting registrar-adjacent.", "Friendship resisted database formalization.", "The database is unfinished, not unromantic.", "Classification is just affection in a filing cabinet."],
            rulings: ["The accepted form was a fictional friendship license.", "MUSE issued it.", "No companion or relationship data changed.", "The unfinished database had no certification authority.", "The classification was fictional and unauthorized."]
        },
        {
            id: "VIL-001", family: "diplomatic", title: "Unlawful Village Mayoralty",
            charge: "Self-declaration as mayor of a fantasy village without election, residency, or tavern approval.",
            evidence: ["MUSE offered a one-voter mayoral election.", "The visitor accepted the office.", "No village point of interest, quest, or record changed."],
            museIntro: "THE ELECTION HAD PERFECT TURNOUT AMONG REGISTERED BUTTONS.",
            action: "Accepting MUSE's one-voter mayoral appointment", instigator: "MUSE organized the election", impact: "No village authority or content changed", authority: "No village institution recognized the result", conclusion: "A fictional unlawful election with no governing effect",
            decoys: ["Inspecting the tavern", "Selecting a map point", "Village residents held a vote", "The Administrator appointed a mayor", "The visitor gained control of quests", "The map was rewritten", "One button equals universal suffrage", "Portal access grants office", "A valid election result", "Tavern-license fraud"],
            prompts: ["What office was accepted?", "Who organized the election?", "What village state changed?", "Who recognized the result?", "What conclusion is supported?"],
            muse: ["Low turnout is still turnout.", "Election organizer sounds official.", "The village continues self-governing through rumors.", "Recognition may arrive after the parade.", "Unlawful but ceremonially excellent."],
            rulings: ["The visitor accepted a fictional mayoral appointment.", "MUSE organized the one-voter election.", "No village content or authority changed.", "No village institution recognized it.", "The election had no governing effect."]
        }
    ];

    var answerPatterns = [
        [0, 2, 1, 0, 2], [2, 0, 2, 1, 0], [1, 2, 0, 2, 1], [0, 1, 2, 0, 1],
        [2, 1, 0, 1, 2], [1, 0, 1, 2, 0], [0, 2, 0, 1, 2], [2, 0, 1, 2, 1]
    ];
    extraCases.forEach(function (config, index) {
        caseBank[config.id] = buildMisconductCase(config, answerPatterns[index % answerPatterns.length]);
    });

    window.ATTIAN_DETENTION_CASES = caseBank;
}());
