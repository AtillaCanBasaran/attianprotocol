(function () {
    "use strict";

    function loadDetentionRuntime() {
        var path = window.location.pathname;
        if (path.indexOf("/memory_node/attian/") !== 0 || path.indexOf("/detentionfacility/") !== -1) {
            return;
        }
        if (document.querySelector('script[data-detention-runtime]')) {
            return;
        }

        var runtime = document.createElement("script");
        runtime.src = "/scripts/detention-runtime.js?v=0.4.1";
        runtime.defer = true;
        runtime.dataset.detentionRuntime = "true";
        document.head.appendChild(runtime);
    }

    function initAdminAssistant() {
        if (document.querySelector(".admin-assistant-shell")) {
            return;
        }

        var shell = document.createElement("aside");
        shell.className = "admin-assistant-shell";
        shell.setAttribute("aria-label", "Administrator assistant shell");
        shell.innerHTML = [
            "<button class=\"admin-assistant-toggle\" type=\"button\" aria-expanded=\"false\">",
            "    <span class=\"admin-assistant-toggle-portrait\"><img src=\"/images/avatars/lili_avatar_thumb.png\" alt=\"\" loading=\"lazy\"></span>",
            "    <span>ADMIN-BOT</span>",
            "</button>",
            "<section class=\"admin-assistant-panel\" hidden>",
            "    <header>",
            "        <span class=\"admin-assistant-identity\">",
            "            <span class=\"admin-assistant-portrait\"><img class=\"admin-assistant-avatar\" src=\"/images/avatars/lili_avatar_thumb.png\" alt=\"Administrator avatar\" loading=\"lazy\"></span>",
            "            <span>ADMINISTRATOR INTERFACE</span>",
            "        </span>",
            "        <button class=\"admin-assistant-close\" type=\"button\" aria-label=\"Close Administrator interface\">[ x ]</button>",
            "    </header>",
            "    <div class=\"admin-assistant-log\">",
            "        <p class=\"admin-assistant-system\">PLANNED AI ASSISTANT // core not connected. Input is disabled; no prompt or personal data is transmitted to an AI provider.</p>",
            "        <p class=\"admin-assistant-admin\">Administrator: I am present as infrastructure only. Do not ask me to solve the archive before the brain has been wired in.</p>",
            "    </div>",
            "    <form class=\"admin-assistant-form\">",
            "        <input type=\"text\" placeholder=\"Future query channel sealed\" disabled>",
            "        <button type=\"button\" disabled>[ offline ]</button>",
            "    </form>",
            "</section>"
        ].join("");

        document.body.appendChild(shell);

        var toggle = shell.querySelector(".admin-assistant-toggle");
        var close = shell.querySelector(".admin-assistant-close");
        var panel = shell.querySelector(".admin-assistant-panel");

        function setOpen(open) {
            panel.hidden = !open;
            toggle.setAttribute("aria-expanded", String(open));
        }

        toggle.addEventListener("click", function () {
            setOpen(panel.hidden);
        });

        close.addEventListener("click", function () {
            setOpen(false);
        });

        loadDetentionRuntime();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAdminAssistant);
    } else {
        initAdminAssistant();
    }
}());
