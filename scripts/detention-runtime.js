(function () {
    "use strict";

    if (window.ATTIAN_DETENTION_RUNTIME_LOADING) return;
    window.ATTIAN_DETENTION_RUNTIME_LOADING = true;

    function addStylesheet() {
        if (document.querySelector('link[href^="/css/detention.css"]')) return;
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/detention.css?v=0.4.0";
        document.head.appendChild(link);
    }

    function loadScript(source) {
        return new Promise(function (resolve, reject) {
            var existing = document.querySelector('script[src^="' + source + '"]');
            if (existing) {
                if (existing.dataset.loaded === "true") resolve();
                else existing.addEventListener("load", resolve, { once: true });
                return;
            }
            var script = document.createElement("script");
            script.src = source + "?v=0.4.0";
            script.addEventListener("load", function () {
                script.dataset.loaded = "true";
                resolve();
            }, { once: true });
            script.addEventListener("error", reject, { once: true });
            document.head.appendChild(script);
        });
    }

    addStylesheet();
    loadScript("/scripts/detention-cases.js")
        .then(function () { return loadScript("/scripts/detention-court.js"); })
        .then(function () { return loadScript("/scripts/detention-triggers.js"); })
        .catch(function () {
            window.ATTIAN_DETENTION_RUNTIME_LOADING = false;
        });
}());
