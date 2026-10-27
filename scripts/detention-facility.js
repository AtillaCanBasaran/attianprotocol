(function () {
    "use strict";

    var VERDICT_KEY = "attian.detention.verdict.v1";

    function readVerdict() {
        try {
            return JSON.parse(window.sessionStorage.getItem(VERDICT_KEY) || "null");
        } catch (error) {
            return null;
        }
    }

    function clearVerdict() {
        try { window.sessionStorage.removeItem(VERDICT_KEY); } catch (error) { /* No local record available. */ }
    }

    function safeReturnPath(value) {
        return typeof value === "string" && value.indexOf("/memory_node/attian/") === 0 && value.indexOf("/gamingarea/") === -1
            ? value
            : "/memory_node/attian/";
    }

    function initFacility() {
        var access = document.getElementById("detentionAccessPanel");
        var transfer = document.getElementById("detentionTransferPanel");
        var clear = document.getElementById("detentionClearRecord");
        var returnLink = document.getElementById("detentionReturnLink");
        var verdict = readVerdict();
        var caseFile = verdict && window.ATTIAN_DETENTION_CASES && window.ATTIAN_DETENTION_CASES[verdict.caseId];
        var admitted = Boolean(verdict && verdict.status === "convicted" && caseFile);

        returnLink.href = safeReturnPath(verdict && verdict.sourcePath);
        returnLink.textContent = admitted ? "[ return to preserved page ]" : "[ return to navigator ]";

        if (!admitted) return;

        access.hidden = true;
        transfer.hidden = false;
        clear.hidden = false;
        document.getElementById("detentionTransferTitle").textContent = caseFile.title;
        document.getElementById("detentionTransferCase").textContent = caseFile.id;
        document.getElementById("detentionTransferCharge").textContent = caseFile.charge;
        document.getElementById("detentionTransferScore").textContent = verdict.score + " / 5 findings accepted // CONVICTED";

        clear.addEventListener("click", function () {
            clearVerdict();
            window.location.href = returnLink.href;
        });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initFacility);
    else initFacility();
}());
