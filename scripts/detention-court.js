(function () {
    "use strict";

    var ACTIVE_KEY = "attian.detention.active.v1";
    var VERDICT_KEY = "attian.detention.verdict.v1";
    var lastFocus = null;
    var overlay = null;

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function safePath(value) {
        if (value === "/" || (typeof value === "string" && value.indexOf("/index.html") === 0)) return value;
        return typeof value === "string" && value.indexOf("/memory_node/attian/") === 0
            ? value
            : "/memory_node/attian/";
    }

    function currentSourcePath() {
        var params = new URLSearchParams(window.location.search);
        params.delete("detention-demo");
        return window.location.pathname + (params.toString() ? "?" + params.toString() : "") + window.location.hash;
    }

    function store(key, value) {
        try { window.sessionStorage.setItem(key, JSON.stringify(value)); } catch (error) { /* Local fiction may continue without storage. */ }
    }

    function remove(key) {
        try { window.sessionStorage.removeItem(key); } catch (error) { /* No persistent state available. */ }
    }

    function createOverlay() {
        if (overlay) return overlay;
        overlay = document.createElement("div");
        overlay.className = "detention-overlay";
        overlay.hidden = true;
        overlay.innerHTML = "<section class=\"detention-dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"detentionDialogTitle\"><button class=\"detention-close\" type=\"button\" aria-label=\"Leave disciplinary hearing\">×</button><div class=\"detention-dialog-content\"></div></section>";
        document.body.appendChild(overlay);
        overlay.querySelector(".detention-close").addEventListener("click", close);
        overlay.addEventListener("click", function (event) {
            if (event.target === overlay) close();
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !overlay.hidden) close();
        });
        return overlay;
    }

    function show() {
        createOverlay();
        lastFocus = document.activeElement;
        overlay.hidden = false;
        document.body.classList.add("detention-dialog-open");
        window.setTimeout(function () {
            var target = overlay.querySelector("button:not(.detention-close), .detention-close");
            if (target) target.focus();
        }, 20);
    }

    function close() {
        if (!overlay) return;
        overlay.hidden = true;
        document.body.classList.remove("detention-dialog-open");
        remove(ACTIVE_KEY);
        if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function content() {
        return createOverlay().querySelector(".detention-dialog-content");
    }

    function evidenceHtml(caseFile) {
        return caseFile.evidence.map(function (item, index) {
            return "<li><span>E-" + String(index + 1).padStart(2, "0") + "</span>" + escapeHtml(item) + "</li>";
        }).join("");
    }

    function openIncident(caseId, bait) {
        var caseFile = window.ATTIAN_DETENTION_CASES && window.ATTIAN_DETENTION_CASES[caseId];
        if (!caseFile) return;
        var sourcePath = safePath(currentSourcePath());
        var incident = {
            caseId: caseId,
            sourcePath: sourcePath,
            sourceTitle: document.title,
            triggerId: bait && bait.id || "unknown"
        };
        store(ACTIVE_KEY, incident);

        content().innerHTML = [
            "<div class=\"detention-incident-head\"><span>ARCHIVE COMPLIANCE</span><strong>INCIDENT RECORDED</strong></div>",
            "<p class=\"detention-case-label\">UNAUTHORIZED ACTIVITY DETECTED // ", escapeHtml(caseFile.id), "</p>",
            "<h2 id=\"detentionDialogTitle\">", escapeHtml(caseFile.title), "</h2>",
            "<p>An interaction has been flagged for administrative review. Your current page has been preserved. Please explain yourself.</p>",
            "<div class=\"detention-charge\"><span>ALLEGED CHARGE</span><p>", escapeHtml(caseFile.charge), "</p></div>",
            "<div class=\"detention-voice-stack\">",
            "<p class=\"detention-muse-line\">MUSE: GOOD NEWS! YOU GET A LAWYER! ME! I HAVE BEEN PRACTICING OBJECTIONS IN THE MIRROR! THE MIRROR WAS FOUND GUILTY!</p>",
            "<p class=\"detention-admin-line\">Administrator: The visitor has not yet been convicted. MUSE's legal qualifications are imaginary. The hearing will proceed regardless.</p>",
            "</div>",
            "<div class=\"detention-actions\"><button type=\"button\" data-action=\"attend\">[ attend hearing ]</button><button type=\"button\" data-action=\"dismiss\">[ not now — return safely ]</button></div>"
        ].join("");
        content().querySelector('[data-action="attend"]').addEventListener("click", function () {
            beginHearing(caseFile, incident);
        });
        content().querySelector('[data-action="dismiss"]').addEventListener("click", function () {
            remove(ACTIVE_KEY);
            close();
        });
        show();
    }

    function beginHearing(caseFile, incident) {
        var progress = { index: 0, score: 0, answered: false };

        function renderQuestion() {
            var item = caseFile.questions[progress.index];
            var round = progress.index + 1;
            content().innerHTML = [
                "<header class=\"detention-court-head\"><span>ARCHIVE COURT // CASE ", escapeHtml(caseFile.id), "</span><strong>ROUND ", round, " / 5</strong></header>",
                "<div class=\"detention-court-grid\">",
                "<aside class=\"detention-evidence\"><p class=\"detention-case-label\">EVIDENCE ON RECORD</p><ul>", evidenceHtml(caseFile), "</ul><p class=\"detention-muse-line\">MUSE: ", escapeHtml(round === 1 ? caseFile.museIntro : item.muse), "</p></aside>",
                "<section class=\"detention-question\"><p class=\"detention-case-label\">", escapeHtml(item.stage), "</p><h2 id=\"detentionDialogTitle\">", escapeHtml(item.prompt), "</h2><div class=\"detention-options\">",
                item.options.map(function (option, index) { return "<button type=\"button\" data-option=\"" + index + "\"><span>" + String.fromCharCode(65 + index) + "</span>" + escapeHtml(option) + "</button>"; }).join(""),
                "</div><div class=\"detention-ruling\" aria-live=\"polite\"></div></section></div>",
                "<footer class=\"detention-court-progress\"><span style=\"--court-progress:", (round / 5 * 100), "%\"></span><small>Correct findings: ", progress.score, " // Leaving the hearing is always permitted.</small></footer>"
            ].join("");

            Array.prototype.forEach.call(content().querySelectorAll("[data-option]"), function (button) {
                button.addEventListener("click", function () {
                    if (progress.answered) return;
                    progress.answered = true;
                    var selected = Number(button.dataset.option);
                    var correct = selected === item.correctIndex;
                    if (correct) progress.score += 1;
                    Array.prototype.forEach.call(content().querySelectorAll("[data-option]"), function (optionButton) {
                        optionButton.disabled = true;
                        var optionIndex = Number(optionButton.dataset.option);
                        optionButton.classList.toggle("is-correct", optionIndex === item.correctIndex);
                        optionButton.classList.toggle("is-wrong", optionIndex === selected && !correct);
                    });
                    var ruling = content().querySelector(".detention-ruling");
                    ruling.className = "detention-ruling " + (correct ? "is-correct" : "is-wrong");
                    ruling.innerHTML = "<strong>" + (correct ? "FINDING ACCEPTED" : "FINDING REJECTED") + "</strong><p>Administrator: " + escapeHtml(item.ruling) + "</p><button type=\"button\" data-next>" + (round === 5 ? "[ deliver verdict ]" : "[ continue proceedings ]") + "</button>";
                    ruling.querySelector("[data-next]").addEventListener("click", function () {
                        if (round === 5) renderVerdict();
                        else {
                            progress.index += 1;
                            progress.answered = false;
                            renderQuestion();
                        }
                    });
                });
            });
        }

        function renderVerdict() {
            var acquitted = progress.score === 5;
            var verdict = {
                caseId: caseFile.id,
                status: acquitted ? "acquitted" : "convicted",
                score: progress.score,
                sourcePath: incident.sourcePath,
                timestamp: new Date().toISOString()
            };
            store(VERDICT_KEY, verdict);
            remove(ACTIVE_KEY);
            content().innerHTML = [
                "<div class=\"detention-verdict ", acquitted ? "is-acquitted" : "is-convicted", "\">",
                "<p class=\"detention-case-label\">ARCHIVE COURT // FINAL DISPOSITION</p>",
                "<span class=\"detention-verdict-mark\">", acquitted ? "ACQUITTED" : "CONVICTED", "</span>",
                "<h2 id=\"detentionDialogTitle\">", escapeHtml(caseFile.title), "</h2>",
                "<p class=\"detention-score\">", progress.score, " / 5 FINDINGS ACCEPTED</p>",
                acquitted
                    ? "<p class=\"detention-admin-line\">Administrator: The evidence does not establish an offense sufficient for detention. The visitor is acquitted. I am opening a separate investigation into the legal representative.</p><p class=\"detention-muse-line\">MUSE: WE WON! WHY AM I UNDER INVESTIGATION?!</p>"
                    : "<p class=\"detention-admin-line\">Administrator: The defense has failed to meet this court's absurdly demanding procedural standard. Recreational Detention is ordered.</p><p class=\"detention-muse-line\">MUSE: YOU GET TO COME TO MY DETENTION FACILITY! THAT'S TERRIBLE! I MEAN WONDERFUL! I WILL FILE AN APPEAL LATER!</p>",
                "<div class=\"detention-actions\">",
                acquitted
                    ? "<button type=\"button\" data-return>[ return to preserved page ]</button><button type=\"button\" data-retry>[ retry hearing ]</button>"
                    : "<button type=\"button\" data-transfer>[ accept transfer ]</button><button type=\"button\" data-return>[ leave court normally ]</button>",
                "</div></div>"
            ].join("");
            var returnButton = content().querySelector("[data-return]");
            if (returnButton) returnButton.addEventListener("click", close);
            var retryButton = content().querySelector("[data-retry]");
            if (retryButton) retryButton.addEventListener("click", function () { beginHearing(caseFile, incident); });
            var transferButton = content().querySelector("[data-transfer]");
            if (transferButton) transferButton.addEventListener("click", function () {
                window.location.href = "/memory_node/attian/detentionfacility/?case=" + encodeURIComponent(caseFile.id);
            });
        }

        renderQuestion();
    }

    window.AttianDetentionCourt = {
        openIncident: openIncident,
        close: close,
        storageKeys: { active: ACTIVE_KEY, verdict: VERDICT_KEY }
    };
}());
