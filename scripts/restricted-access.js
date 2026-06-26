(function () {
    var PASSWORD = "1327";

    document.documentElement.classList.add("restricted-locking");

    var style = document.createElement("style");
    style.textContent = [
        "html.restricted-locking body {",
        "    visibility: hidden;",
        "}",
        ".restricted-content {",
        "    display: none;",
        "}",
        "body.restricted-unlocked .restricted-content {",
        "    display: contents;",
        "}",
        ".access-gate {",
        "    border: 1px solid #6d3b91;",
        "    padding: 26px;",
        "    margin-bottom: 42px;",
        "    background: linear-gradient(135deg, rgba(197,108,255,0.10), rgba(5,1,10,0.94) 45%, rgba(60,255,218,0.05));",
        "    box-shadow: 0 0 20px rgba(197,108,255,0.18), inset 0 0 18px rgba(197,108,255,0.05);",
        "}",
        ".access-gate h1 {",
        "    margin-top: 0;",
        "}",
        ".access-gate .gate-grid {",
        "    display: grid;",
        "    grid-template-columns: 1fr auto;",
        "    gap: 12px;",
        "    align-items: end;",
        "}",
        ".access-gate input {",
        "    width: 100%;",
        "    background: #05010a;",
        "    color: #b58ad8;",
        "    border: 1px solid #2a1838;",
        "    font-family: Consolas, Monaco, monospace;",
        "    font-size: 1rem;",
        "    padding: 10px;",
        "    box-sizing: border-box;",
        "    margin-bottom: 0;",
        "}",
        ".access-gate input:focus {",
        "    outline: 1px solid #c56cff;",
        "    box-shadow: 0 0 10px rgba(197,108,255,0.22);",
        "}",
        ".access-gate input::placeholder {",
        "    color: #6d5b80;",
        "}",
        ".access-gate button {",
        "    background: none;",
        "    color: #c56cff;",
        "    border: 1px solid #c56cff;",
        "    padding: 10px 14px;",
        "    font-family: Consolas, Monaco, monospace;",
        "    font-size: 1rem;",
        "    cursor: pointer;",
        "    white-space: nowrap;",
        "}",
        ".access-gate button:hover, .access-gate button:focus {",
        "    color: #ffffff;",
        "    border-color: #ffffff;",
        "    outline: none;",
        "}",
        ".access-gate a {",
        "    color: #c56cff;",
        "    text-decoration: none;",
        "    text-shadow: 0 0 6px rgba(197,108,255,0.3);",
        "}",
        ".access-gate a:hover {",
        "    color: #ffffff;",
        "}",
        ".access-gate .gate-status {",
        "    min-height: 1.8em;",
        "    margin-top: 14px;",
        "    color: #6d5b80;",
        "}",
        ".access-gate.denied {",
        "    animation: access-denied 0.22s linear 2;",
        "}",
        "@keyframes access-denied {",
        "    25% { transform: translateX(-3px); }",
        "    75% { transform: translateX(3px); }",
        "}",
        "@media (max-width: 620px) {",
        "    .access-gate .gate-grid {",
        "        grid-template-columns: 1fr;",
        "    }",
        "}"
    ].join("\n");
    document.head.appendChild(style);

    function unlock(gate, content) {
        document.body.classList.add("restricted-unlocked");
        gate.remove();
        content.removeAttribute("aria-hidden");
    }

    function buildGate(content) {
        var gate = document.createElement("section");
        gate.className = "access-gate";
        gate.setAttribute("aria-labelledby", "admin-access-title");
        gate.innerHTML = [
            "<h1 id=\"admin-access-title\">ADMIN ACCESS</h1>",
            "<p class=\"dim\">Restricted memory address detected. Authentication required.<span class=\"cursor\">_</span></p>",
            "<form>",
            "    <div class=\"gate-grid\">",
            "        <input type=\"password\" name=\"password\" autocomplete=\"current-password\" inputmode=\"numeric\" placeholder=\"ACCESS KEY\">",
            "        <button type=\"submit\">[ unlock ]</button>",
            "    </div>",
            "    <p class=\"gate-status\">Awaiting credential packet...</p>",
            "</form>",
            "<div class=\"nav\">",
            "    <a href=\"/memory_node/attian/\">[ <-- return to navigator ]</a>",
            "</div>"
        ].join("\n");

        var form = gate.querySelector("form");
        var input = gate.querySelector("input");
        var status = gate.querySelector(".gate-status");

        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (input.value === PASSWORD) {
                status.textContent = "ACCESS GRANTED. Restoring restricted memory...";
                unlock(gate, content);
                return;
            }

            input.value = "";
            status.textContent = "ACCESS DENIED. Credential packet rejected.";
            gate.classList.remove("denied");
            void gate.offsetWidth;
            gate.classList.add("denied");
            input.focus();
        });

        return gate;
    }

    function protectPage() {
        document.documentElement.classList.remove("restricted-locking");

        var content = document.createElement("div");
        content.className = "restricted-content";
        content.setAttribute("aria-hidden", "true");

        while (document.body.firstChild) {
            content.appendChild(document.body.firstChild);
        }

        var gate = buildGate(content);
        document.body.appendChild(gate);
        document.body.appendChild(content);

        var input = gate.querySelector("input");
        if (input) {
            input.focus();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", protectPage);
    } else {
        protectPage();
    }
}());
