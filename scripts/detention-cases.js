(function () {
    "use strict";

    function question(stage, prompt, options, correctIndex, muse, ruling) {
        return { stage: stage, prompt: prompt, options: options, correctIndex: correctIndex, muse: muse, ruling: ruling };
    }

    window.ATTIAN_DETENTION_CASES = {
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
}());
