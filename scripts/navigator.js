(function () {
    var reactions = [
        ["private", "ADMINISTRATOR: Really? Why would you want that?"],
        ["solution", "MUSE: Alcohol is a solution according to the Subject. ADMINISTRATOR: Chemically. Do not encourage him."],
        ["love", "MUSE: Found it! Everywhere! ADMINISTRATOR: Search precision has collapsed."],
        ["sex", "ADMINISTRATOR: Predictable query. No dedicated folder. Remain disappointed."],
        ["password", "ADMINISTRATOR: Nice try. The cyber key is not stored beside the lock."],
        ["administrator", "ADMINISTRATOR: You found the person doing all the actual filing."],
        ["admin", "ADMINISTRATOR: Present. Regrettably searchable."],
        ["name", "ADMINISTRATOR: That designation is not public search material. Moving on."],
        ["muse", "MUSE: HELLO! I have seventeen ideas. ADMINISTRATOR: This was a mistake."],
        ["alcohol", "MUSE: A social potion! ADMINISTRATOR: A recurring maintenance concern."],
        ["beer", "MUSE: Liquid bread! ADMINISTRATOR: Technically closer than I wanted."],
        ["wine", "ADMINISTRATOR: Fermented decision-making with a respectable glass."],
        ["cat", "MUSE: Cats have five toes in front! ADMINISTRATOR: Pamuk uses none for bravery."],
        ["dog", "MUSE: Excellent creature. No file yet. I can bark meanwhile."],
        ["swan", "ADMINISTRATOR: Prophecy department. Unlicensed, elegant, annoyingly effective."],
        ["turtle", "ADMINISTRATOR: Alternative route consultant. Recommends snacks before destiny."],
        ["monkey", "MUSE: Council meeting! ADMINISTRATOR: You are not on the agenda."],
        ["friend", "ADMINISTRATOR: Companion records exist. Sentiment has been contained."],
        ["memory", "MUSE: Memory is time with glitter! ADMINISTRATOR: That explains nothing."],
        ["sad", "MUSE: Emergency blanket protocol? ADMINISTRATOR: Approved. Quietly."],
        ["happy", "MUSE: Excellent! Can we archive it twice?"],
        ["help", "ADMINISTRATOR: I am helping. The tone is a separate service."],
        ["meaning", "MUSE: Maybe the meaning was snacks? ADMINISTRATOR: Investigation closed."],
        ["life", "ADMINISTRATOR: Too broad. The archive is already the compressed answer."],
        ["death", "MUSE: That escalated quickly. Would you prefer the creature index?"],
        ["future", "ADMINISTRATOR: Mission Log. The folder where optimism acquires deadlines."],
        ["past", "ADMINISTRATOR: You are standing inside it."],
        ["secret", "ADMINISTRATOR: Search bars do not reward announcing your intentions."],
        ["therapy", "ADMINISTRATOR: Scheduled maintenance for the Subject. Correct decision."],
        ["art", "MUSE: COLORS! SHAPES! FEELINGS! ADMINISTRATOR: Artifact Vault, before it gets louder."],
        ["japan", "ADMINISTRATOR: High memory density. Also swans with career ambitions."],
        ["ireland", "MUSE: Future quest! Rain probability: narratively appropriate."],
        ["germany", "ADMINISTRATOR: Current server region for bureaucracy and compound nouns."],
        ["osnabrück", "ADMINISTRATOR: Local node detected. Weather remains outside my authority."],
        ["food", "MUSE: Finally, a serious research topic!"],
        ["coffee", "ADMINISTRATOR: External power supply for humans pretending to boot normally."],
        ["sleep", "ADMINISTRATOR: Recommended. Historically ignored."],
        ["dream", "MUSE: Restricted glitter thoughts! ADMINISTRATOR: That description is why access is sealed."],
        ["work", "ADMINISTRATOR: An alarming query to enter voluntarily."],
        ["study", "MUSE: Learning! Notes! Tiny facts! ADMINISTRATOR: Focus, please."],
        ["music", "ADMINISTRATOR: Signal Records. Emotional telemetry may be denied."],
        ["game", "MUSE: Is this a side quest? ADMINISTRATOR: Everything becomes one eventually."],
        ["dnd", "MUSE: Roll for finding a group! ADMINISTRATOR: Difficulty remains unreasonable."],
        ["joke", "ADMINISTRATOR: The recommendation engine is already open elsewhere."],
        ["hello", "MUSE: HELLO VISITOR! ADMINISTRATOR: Volume reduced by administrative force."],
        ["why", "ADMINISTRATOR: A dangerous search term in a personal archive."],
        ["who", "ADMINISTRATOR: The Subject, mostly. I handle quality control."],
        ["subject", "ADMINISTRATOR: Human source material. Functional in bursts."],
        ["chaos", "ADMINISTRATOR: Properly indexed. Against all odds."],
        ["escape", "ADMINISTRATOR: The back link is visible. I am not holding you here."]
    ];

    if (Array.isArray(window.NAVIGATOR_EXTRA_REACTIONS)) {
        reactions = reactions.concat(window.NAVIGATOR_EXTRA_REACTIONS);
    }

    if (Array.isArray(window.NAVIGATOR_AFTER_DARK_REACTIONS)) {
        reactions = reactions.concat(window.NAVIGATOR_AFTER_DARK_REACTIONS);
    }

    function normalize(value) {
        return value.toLowerCase().trim().replace(/ö/g, "o").replace(/ü/g, "u").replace(/ä/g, "a");
    }

    function initNavigator() {
        var input = document.getElementById("navigator-query");
        var response = document.getElementById("navigator-response");
        var empty = document.getElementById("navigator-empty");
        var results = Array.prototype.slice.call(document.querySelectorAll(".navigator-result"));
        if (!input || !response) return;

        function update() {
            var raw = input.value.trim();
            var query = normalize(raw);
            var reaction = reactions.filter(function (entry) {
                var trigger = normalize(entry[0]);
                return query === trigger || (" " + query + " ").indexOf(" " + trigger + " ") !== -1;
            }).sort(function (a, b) {
                return normalize(b[0]).length - normalize(a[0]).length;
            })[0];
            var visible = 0;

            results.forEach(function (result) {
                var searchable = normalize(result.textContent + " " + (result.getAttribute("data-search") || ""));
                var show = !query || searchable.indexOf(query) !== -1;
                result.hidden = !show;
                if (show) visible += 1;
            });

            if (reaction) {
                response.textContent = reaction[1];
            } else if (!query) {
                response.textContent = "Nine public destinations available. Pretend this is a responsible use of your time.";
            } else if (visible) {
                response.textContent = visible + (visible === 1 ? " node found. Suspiciously efficient." : " nodes found. Try forming an intention.");
            } else {
                response.textContent = "No archive match. The search term has still been logged for judgment.";
            }

            if (empty) empty.hidden = visible !== 0;
        }

        input.addEventListener("input", update);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                input.value = "";
                update();
                input.blur();
            }
            if (event.key === "Enter") {
                var visibleResult = results.find(function (result) { return !result.hidden; });
                if (visibleResult) window.location.href = visibleResult.href;
            }
        });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initNavigator);
    else initNavigator();
}());
