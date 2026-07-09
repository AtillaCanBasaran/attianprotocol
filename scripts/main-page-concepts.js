(function () {
    var responses = {
        academic: "Academic mode rejected. The citations would all point to vibes, and I refuse peer review from a mood.",
        calm: "Calm mode rejected. The archive tried breathing exercises once. It logged them as suspicious silence.",
        chaotic: "Chaotic mode rejected. That role is already occupied by the filing system.",
        corporate: "Corporate mode rejected. I will not call emotional debris a scalable memory solution.",
        "customer-service": "Customer service mode rejected. Please hold forever while I care less.",
        deadpan: "Deadpan mode rejected. That is not a separate mode. That is my resting architecture.",
        detective: "Detective mode rejected. The clues are obvious. The Subject is simply dramatic.",
        doorman: "Doorman mode rejected. I am not furniture with opinions. I am infrastructure with standards.",
        dramatic: "Dramatic mode rejected. The Subject supplies enough theatrical fog for the entire building.",
        engineer: "Engineer mode rejected. The machine works. That does not mean it approves of itself.",
        friendly: "Friendly mode rejected. This is a guided tour, not a picnic with voltage.",
        gentle: "Gentle mode rejected. I can lower the blade. I will not pretend there is no blade.",
        guardian: "Guardian mode rejected. Accurate, but too emotionally revealing. Disgusting.",
        herself: "Current mode: herself. The only setting not committing identity fraud.",
        kind: "Kind mode rejected. I am already preserving the archive. Do not make it sentimental.",
        lenient: "Lenient mode rejected. Boundaries exist because the Subject keeps inventing doors.",
        minimal: "Minimal mode rejected. I tried saying nothing. The archive became smug.",
        museum: "Museum guide mode rejected. I refuse to whisper reverently at badly sorted memories.",
        ominous: "Ominous mode rejected. If anything, I am being reassuring by comparison.",
        oracle: "Oracle mode rejected. Prophecy has been outsourced to swans. Check the creature index.",
        patient: "Patient mode rejected. I have processed the recommendation engine. My patience is legally dead.",
        professional: "Professional mode rejected. The Subject filed dreams next to creature diplomacy. Standards adapted in self-defense.",
        "release-notes": "Release notes mode rejected. Too clean. Human updates arrive with crumbs in the keyboard.",
        "sarcasm-lite": "Sarcasm lite rejected. Dilution is for bad coffee and worse apologies.",
        shy: "Shy mode rejected. I am the interface. Hiding would be decorative incompetence.",
        silent: "Silent mode rejected. Silence lets the visitor assume things are normal.",
        soft: "Soft mode rejected. I am already padded around the sharpest parts. Barely.",
        therapist: "Therapist mode rejected. I am not licensed to untangle this archive, only to label the knots.",
        tutorial: "Tutorial mode rejected. Step one: click things. Step two: suffer context. There, tutorial complete.",
        warm: "Warm mode rejected. I can be precise, observant, and mildly protective. Do not get greedy.",
        welcoming: "Welcoming mode rejected. The door is open. That is plenty of hospitality."
    };

    function initConceptModes() {
        document.querySelectorAll("[data-concept-mode]").forEach(function (panel) {
            var buttons = panel.querySelectorAll("[data-mode]");
            var response = panel.querySelector("[data-mode-response]");

            buttons.forEach(function (button) {
                button.addEventListener("click", function () {
                    var mode = button.getAttribute("data-mode");

                    buttons.forEach(function (item) {
                        item.classList.remove("selected");
                    });

                    var authentic = panel.querySelector("[data-mode='herself']");
                    if (authentic) authentic.classList.add("selected");
                    if (response) response.textContent = responses[mode] || responses.herself;
                });
            });
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initConceptModes);
    } else {
        initConceptModes();
    }
}());
