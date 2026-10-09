(function () {
    "use strict";

    var tarotCards = [
        ["THE FIREWALL", "Protection gained. Curiosity penalty pending."],
        ["THE GLITCH SAINT", "A corrupted blessing arrives wearing neon."],
        ["THE EMPTY INVENTORY", "You lose nothing. Suspiciously."],
        ["THE MOON ROOTKIT", "Hidden process detected. Do not romance it."],
        ["THE CAKE TRACE", "Prize signal found. Verification failed."]
    ];

    var wheelOutcomes = [
        "ARCHIVE WINS: Visitor must admire the filing system for six seconds.",
        "ARCHIVE WINS: MUSE receives one legally meaningless compliment.",
        "BAD OUTCOME: Do something kind for the Subject. No loopholes detected.",
        "SUBJECT OWES YOU: One tiny favor, redeemable only through narrative timing.",
        "ARCHIVE WINS: Administrator gets to say 'I told you so' retroactively."
    ];

    function pick(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function initGames() {
        var tarotButton = document.getElementById("drawTarotCard");
        var tarotDisplay = document.getElementById("tarotDisplay");
        var wheelButton = document.getElementById("spinArchiveWheel");
        var wheelFace = document.getElementById("wheelFace");
        var wheelResult = document.getElementById("wheelResult");

        if (tarotButton && tarotDisplay) {
            tarotButton.addEventListener("click", function () {
                var card = pick(tarotCards);
                tarotDisplay.innerHTML = "<span>PLACEHOLDER DRAW</span><strong>" + card[0] + "</strong><p>" + card[1] + "</p>";
            });
        }

        if (wheelButton && wheelFace && wheelResult) {
            wheelButton.addEventListener("click", function () {
                var result = pick(wheelOutcomes);
                wheelFace.textContent = String(Math.floor(Math.random() * 9) + 1);
                wheelResult.textContent = result;
            });
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initGames);
    } else {
        initGames();
    }
}());
