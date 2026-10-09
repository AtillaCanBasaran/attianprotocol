(function () {
    "use strict";

    const worldSvgCandidates = [
        "/images/Map/world_rw.svg",
        "/images/Map/world.svg"
    ];
    const indexUrl = "/images/Map/countries-index.json";
    const classToIso = {
        Italy: "IT",
        Japan: "JP",
        Turkey: "TR"
    };

    let countryIndex = {};

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function normalizeList(value) {
        if (Array.isArray(value)) return value;
        if (value == null || value === "") return ["Pending archive entry"];
        return [value];
    }

    function listText(value) {
        return normalizeList(value).map(escapeHtml).join(", ");
    }

    function getCountryName(path) {
        return path.getAttribute("name") || path.dataset.name || path.classList[0] || path.dataset.countryId || "Unknown region";
    }

    function getCountryId(path) {
        return path.dataset.countryId || path.id || classToIso[path.classList[0]] || "";
    }

    function fallbackEntry(path) {
        const countryName = getCountryName(path);

        return {
            name: `${countryName} // Corrupted Data`,
            status: "UNINDEXED",
            coordinates: "Coordinate packet unavailable",
            locations: ["Corrupted data placeholder"],
            artifacts: ["Corrupted data"],
            creatures: ["Corrupted data"],
            companions: ["Corrupted data"],
            fieldNotes: "No approved field note attached.",
            comments: "Administrator: country geometry exists, but the archive entry has not been written yet."
        };
    }

    async function loadCountryIndex() {
        try {
            const response = await fetch(indexUrl, { cache: "no-cache" });
            if (!response.ok) throw new Error(`country index returned ${response.status}`);
            countryIndex = await response.json();
        } catch (error) {
            countryIndex = {};
            console.warn("Grand Map country index unavailable; using fallback dossiers.", error);
        }
    }

    async function fetchFirstAvailable(urls) {
        let lastError;

        for (const url of urls) {
            try {
                const response = await fetch(url, { cache: "no-cache" });
                if (response.ok) return response.text();
                lastError = new Error(`${url} returned ${response.status}`);
            } catch (error) {
                lastError = error;
            }
        }

        throw lastError || new Error("No world SVG candidates were available.");
    }

    function renderPanel(path) {
        const panel = document.getElementById("grandMapPanel");
        if (!panel || !path) return;

        const countryId = getCountryId(path);
        const entry = countryIndex[countryId] || fallbackEntry(path);
        const countryLabel = entry.name || getCountryName(path) || countryId;
        const status = entry.status || "INDEXED";

        panel.innerHTML = [
            '<div class="map-dossier-scroll">',
                '<p class="map-panel-kicker">LOCATION DOSSIER</p>',
                `<h2>${escapeHtml(countryLabel)}</h2>`,
                `<p class="dim">Archive signal: ${escapeHtml(status)} // Cartographic tag: ${escapeHtml(countryId || "UNMARKED")}</p>`,
                "<dl>",
                    `<dt>Locations</dt><dd>${listText(entry.locations)}</dd>`,
                    `<dt>Coordinates</dt><dd>${escapeHtml(entry.coordinates || "Pending archive entry")}</dd>`,
                    `<dt>Artifacts</dt><dd>${listText(entry.artifacts)}</dd>`,
                    `<dt>Creatures</dt><dd>${listText(entry.creatures)}</dd>`,
                    `<dt>Companions</dt><dd>${listText(entry.companions)}</dd>`,
                    `<dt>Field Notes</dt><dd>${escapeHtml(entry.fieldNotes || "Pending archive entry")}</dd>`,
                    `<dt>Comments</dt><dd>${escapeHtml(entry.comments || "Administrator: dossier awaiting manual commentary.")}</dd>`,
                "</dl>",
            "</div>"
        ].join("");
    }

    function clearSelection() {
        document.querySelectorAll(".world-svg-mount .country").forEach((country) => {
            country.classList.remove("selected");
        });
    }

    function selectCountry(path) {
        const countryId = getCountryId(path);
        clearSelection();

        document.querySelectorAll(".world-svg-mount .country").forEach((piece) => {
            if (piece.dataset.countryId === countryId) piece.classList.add("selected");
        });

        renderPanel(path);
    }

    function countryIdFromPath(path) {
        const label = path.getAttribute("inkscape:label") || path.getAttributeNS("http://www.inkscape.org/namespaces/inkscape", "label");
        if (label && /^[A-Z]{2,3}$/.test(label)) return label;

        const className = Array.from(path.classList).find((candidate) => classToIso[candidate]);
        if (className) return classToIso[className];

        if (path.id && !/^path\d+$/i.test(path.id)) return path.id;

        return "";
    }

    function countryNameFromPath(path) {
        return path.getAttribute("name") || Array.from(path.classList).find((candidate) => classToIso[candidate]) || "";
    }

    function prepareCountryPaths(svg) {
        svg.querySelectorAll("path").forEach((path) => {
            const countryId = countryIdFromPath(path);
            if (!countryId) return;

            const countryName = countryNameFromPath(path);
            path.classList.add("country");
            path.dataset.countryId = countryId;
            if (countryName) path.dataset.name = countryName;
            path.setAttribute("tabindex", "0");
            path.setAttribute("role", "button");
            path.setAttribute("aria-label", `Inspect ${countryName || countryId}`);

            path.addEventListener("click", () => selectCountry(path));
            path.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectCountry(path);
                }
            });
        });
    }

    function ensureResponsiveViewBox(svg) {
        if (!svg.getAttribute("viewBox")) {
            const lowerCaseViewBox = svg.getAttribute("viewbox");
            if (lowerCaseViewBox) {
                svg.setAttribute("viewBox", lowerCaseViewBox);
                svg.removeAttribute("viewbox");
            } else {
                const width = parseFloat(svg.getAttribute("width"));
                const height = parseFloat(svg.getAttribute("height"));
                if (width && height) svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
            }
        }

        svg.removeAttribute("width");
        svg.removeAttribute("height");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.classList.add("world-svg-map");
    }

    function installMapDefs(svg) {
        const svgNS = "http://www.w3.org/2000/svg";
        const defs = svg.querySelector("defs") || document.createElementNS(svgNS, "defs");

        if (!defs.parentNode) {
            svg.insertBefore(defs, svg.firstChild);
        }

        if (!svg.querySelector("#grandMapSelectedGradient")) {
            const gradient = document.createElementNS(svgNS, "linearGradient");
            gradient.id = "grandMapSelectedGradient";
            gradient.setAttribute("x1", "0%");
            gradient.setAttribute("y1", "0%");
            gradient.setAttribute("x2", "100%");
            gradient.setAttribute("y2", "100%");

            [
                ["0%", "#c56cff", "0.70"],
                ["48%", "#71ffe3", "0.36"],
                ["100%", "#090018", "0.78"]
            ].forEach(([offset, color, opacity]) => {
                const stop = document.createElementNS(svgNS, "stop");
                stop.setAttribute("offset", offset);
                stop.setAttribute("stop-color", color);
                stop.setAttribute("stop-opacity", opacity);
                gradient.append(stop);
            });

            defs.append(gradient);
        }
    }

    async function initGrandMap() {
        const mount = document.getElementById("worldSvgMount");
        if (!mount) return;

        await loadCountryIndex();

        try {
            mount.innerHTML = await fetchFirstAvailable(worldSvgCandidates);

            const svg = mount.querySelector("svg");
            if (!svg) throw new Error("world.svg did not contain an <svg> root.");

            ensureResponsiveViewBox(svg);
            installMapDefs(svg);
            prepareCountryPaths(svg);
        } catch (error) {
            mount.innerHTML = '<p class="map-overlay-error">World SVG unavailable.</p>';
            console.error("Grand Map world SVG failed.", error);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initGrandMap);
    } else {
        initGrandMap();
    }
}());
