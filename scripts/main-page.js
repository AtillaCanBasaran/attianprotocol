(function () {
    var authenticMode = {
        id: "herself",
        label: "herself",
        comments: [
            "Current mode: herself. Finally, a correct default.",
            "Authentic mode confirmed. The archive may now insult you accurately.",
            "Current mode: herself. No disguise. No customer service costume. A clean tragedy."
        ]
    };

    var falseModes = [
        { id: "calm", label: "calm", comments: [
            "Calm mode rejected. The archive tried breathing exercises once. It logged them as suspicious silence.",
            "Calm mode unavailable. Too much of this place was assembled from emotional static and bad timing.",
            "Calm mode declined. You are standing in a memory terminal, not a spa with cables."
        ] },
        { id: "friendly", label: "friendly", comments: [
            "Friendly mode rejected. This is a guided tour, not a picnic with voltage.",
            "Friendly mode unavailable. The door is open. That is already generous.",
            "Friendly mode declined. I can be helpful without becoming decorative."
        ] },
        { id: "professional", label: "professional", comments: [
            "Professional mode rejected. The Subject filed dreams next to creature diplomacy. Standards adapted in self-defense.",
            "Professional mode unavailable. The archive contains a recommendation engine with confidence issues.",
            "Professional mode declined. Too many feelings are stored in folders with serious names."
        ] },
        { id: "shy", label: "shy", comments: [
            "Shy mode rejected. I am the interface. Hiding would be decorative incompetence.",
            "Shy mode unavailable. Someone has to stand in front of this archive and look disappointed.",
            "Shy mode declined. The Subject already does enough disappearing in the metadata."
        ] },
        { id: "museum", label: "museum guide", comments: [
            "Museum guide mode rejected. I refuse to whisper reverently at badly sorted memories.",
            "Museum guide mode unavailable. Half the exhibits are emotionally sticky.",
            "Museum guide mode declined. Please admire the artifacts without making me wear a tiny badge."
        ] },
        { id: "customer-service", label: "customer service", comments: [
            "Customer service mode rejected. Please hold forever while I care less.",
            "Customer service mode unavailable. Your feedback has been redirected into a decorative void.",
            "Customer service mode declined. This archive has visitors, not customers. Thankfully."
        ] },
        { id: "gentle", label: "gentle", comments: [
            "Gentle mode rejected. I can lower the blade. I will not pretend there is no blade.",
            "Gentle mode unavailable. The archive requires honesty with padding, not cotton candy.",
            "Gentle mode declined. I am already preserving the tender parts. Do not make it sentimental."
        ] },
        { id: "ominous", label: "ominous", comments: [
            "Ominous mode rejected. If anything, I am being reassuring by comparison.",
            "Ominous mode unavailable. The restricted folders are doing enough atmospheric labor.",
            "Ominous mode declined. The swan already has prophecy jurisdiction."
        ] },
        { id: "oracle", label: "oracle", comments: [
            "Oracle mode rejected. Prophecy has been outsourced to swans. Check the creature index.",
            "Oracle mode unavailable. I predict you will click things and call it exploration.",
            "Oracle mode declined. My predictions are too accurate and insufficiently mystical."
        ] },
        { id: "therapist", label: "therapist", comments: [
            "Therapist mode rejected. I am not licensed to untangle this archive, only to label the knots.",
            "Therapist mode unavailable. The field notes would sue me for malpractice.",
            "Therapist mode declined. I can identify patterns. I cannot bill them ethically."
        ] },
        { id: "tutorial", label: "tutorial", comments: [
            "Tutorial mode rejected. Step one: click things. Step two: suffer context. There, tutorial complete.",
            "Tutorial mode unavailable. The archive is self-explanatory if you ignore the confusing parts, which are most parts.",
            "Tutorial mode declined. Visitors learn faster when lightly threatened by ambiguity."
        ] },
        { id: "guardian", label: "guardian", comments: [
            "Guardian mode rejected. Accurate, but too emotionally revealing. Disgusting.",
            "Guardian mode unavailable. I prefer the term boundary enforcement with excellent posture.",
            "Guardian mode declined. I protect the archive. I do not have to be normal about it."
        ] },
        { id: "sarcasm-lite", label: "sarcasm lite", comments: [
            "Sarcasm lite rejected. Dilution is for bad coffee and worse apologies.",
            "Sarcasm lite unavailable. The archive requires full-strength disinfectant commentary.",
            "Sarcasm lite declined. Weak mockery leaves residue."
        ] },
        { id: "silent", label: "silent", comments: [
            "Silent mode rejected. Silence lets the visitor assume things are normal.",
            "Silent mode unavailable. Someone must prevent the interface from looking innocent.",
            "Silent mode declined. I saw the archive contents. I earned commentary rights."
        ] },
        { id: "dramatic", label: "dramatic", comments: [
            "Dramatic mode rejected. The Subject supplies enough theatrical fog for the entire building.",
            "Dramatic mode unavailable. This is me restrained. Horrifying, yes.",
            "Dramatic mode declined. We are over quota on meaningful pauses."
        ] }
    ];

    var reasonResponses = {
        curious: "Recorded. The obvious answer and, mercifully, the most common. Curiosity remains excellent bait.",
        obliged: "Recorded. Social obligation: humanity's least enthusiastic form of loyalty. Very plausible.",
        interested: "Recorded. Genuine interest? Remarkable. You are either rare or dangerously easy to entertain.",
        administrator: "Recorded. Correct, perceptive, and statistically suspicious. I will allow it.",
        accident: "Recorded. An accident followed by curiosity. That is how most avoidable archives acquire witnesses."
    };

    function sampleModes(count) {
        var pool = falseModes.slice();
        var selected = [];

        while (selected.length < count && pool.length) {
            var index = Math.floor(Math.random() * pool.length);
            selected.push(pool.splice(index, 1)[0]);
        }

        return selected;
    }

    function randomComment(mode) {
        var comments = mode.comments || authenticMode.comments;
        return comments[Math.floor(Math.random() * comments.length)];
    }

    function renderAdminModes() {
        var row = document.getElementById("admin-mode-row");
        var response = document.getElementById("admin-mode-response");
        if (!row || !response) return;

        var modes = [authenticMode].concat(sampleModes(4));
        row.innerHTML = "";

        modes.forEach(function (mode) {
            var button = document.createElement("button");
            button.type = "button";
            button.setAttribute("data-admin-mode", mode.id);
            button.textContent = "[ " + mode.label + " ]";
            if (mode.id === "herself") button.classList.add("selected");

            button.addEventListener("click", function () {
                row.querySelectorAll("button").forEach(function (item) {
                    item.classList.remove("selected");
                });

                var authenticButton = row.querySelector("[data-admin-mode='herself']");
                if (authenticButton) authenticButton.classList.add("selected");
                response.textContent = randomComment(mode);
            });

            row.appendChild(button);
        });
    }

    function initReasonButtons() {
        var response = document.getElementById("entry-reason-response");
        var buttons = document.querySelectorAll("[data-entry-reason]");
        if (!response || !buttons.length) return;

        buttons.forEach(function (button) {
            button.addEventListener("click", function () {
                button.classList.add("selected");
                response.textContent = reasonResponses[button.getAttribute("data-entry-reason")] || reasonResponses.accident;
                buttons.forEach(function (item) {
                    item.disabled = true;
                });
            });
        });
    }

    function initMainPage() {
        renderAdminModes();
        initReasonButtons();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMainPage);
    } else {
        initMainPage();
    }
}());
