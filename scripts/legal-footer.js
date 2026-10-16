(function () {
    function addLegalFooter() {
        if (document.querySelector(".legal-footer")) {
            return;
        }

        var style = document.createElement("style");
        style.textContent = [
            ".legal-footer {",
            "    margin-top: 70px;",
            "    padding-top: 28px;",
            "    border-top: 1px solid #2a1838;",
            "    color: #9e79bd;",
            "    font-size: 0.85rem;",
            "    line-height: 1.7;",
            "}",
            ".legal-footer h2 {",
            "    letter-spacing: 3px;",
            "    font-weight: normal;",
            "}",
            ".legal-footer h2 {",
            "    margin-top: 0;",
            "    font-size: 1rem;",
            "}",
            ".legal-footer .legal-footer-nav {",
            "    display: flex;",
            "    flex-wrap: wrap;",
            "    gap: 10px;",
            "}",
            ".legal-footer .legal-footer-nav a {",
            "    border: 1px solid #3d2850;",
            "    padding: 8px 11px;",
            "    color: #c56cff;",
            "    background: rgba(5,1,10,0.58);",
            "    text-decoration: none;",
            "}",
            ".legal-footer .legal-footer-nav a:hover,",
            ".legal-footer .legal-footer-nav a:focus-visible {",
            "    border-color: #71ffe3;",
            "    color: #ffffff;",
            "    outline: none;",
            "}",
            ".legal-footer .legal-footer-status {",
            "    margin: 14px 0 0;",
            "    color: #6d5b80;",
            "}",
            "@media (max-width: 720px) {",
            "    .legal-footer .legal-footer-nav {",
            "        display: grid;",
            "    }",
            "}"
        ].join("\n");
        document.head.appendChild(style);

        var footer = document.createElement("footer");
        footer.className = "legal-footer";
        footer.innerHTML = [
            "<h2>LEGAL ACCESS</h2>",
            "<nav class=\"legal-footer-nav\" aria-label=\"Legal information\">",
            "    <a href=\"/impressum/\">IMPRESSUM / LEGAL NOTICE</a>",
            "    <a href=\"/datenschutz/\">DATENSCHUTZ / PRIVACY</a>",
            "</nav>",
            "<p class=\"legal-footer-status\">No analytics or advertising trackers. Visitor intake and AI processing are currently offline. Local quest progress remains on this device.</p>"
        ].join("\n");

        document.body.appendChild(footer);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addLegalFooter);
    } else {
        addLegalFooter();
    }
}());
