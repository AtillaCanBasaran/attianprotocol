/*
    GRAND MAP SEGMENTATION GUIDE
    ============================

    This is NOT loaded by the live website.
    It is a commented reference file for manually rebuilding the Grand Map
    interaction layer after the borders have been tuned by hand.

    Live experimentation file:

        scripts/grand-map-dev.js

    Live page:

        memory_node/attian/grandmap/index.html

    Current page state:

        The Grand Map page now contains only:

            <div class="world-map-board" id="grandMapWorkbench">
                <img src="/images/Map/map0.png" ...>
            </div>

        No country segmentation, no info boxes, no click handler, and no final
        dossier panel are active. This is intentional.


    GOAL FOR THE FUTURE SCRIPT
    --------------------------

    The final script should:

    1. Treat the map image itself as the coordinate reference.
    2. Create an SVG overlay inside #grandMapWorkbench.
    3. Draw countries/regions as SVG <path> or <polygon> elements.
    4. Highlight a country when hovered or focused.
    5. Animate click selection.
    6. Show a fixed information box/panel with:
       - location name
       - coordinates
       - related artifacts
       - related creatures
       - related companions
       - related field notes
       - comments / Administrator notes
    7. Keep the map layout stable even when a region has long text.


    RECOMMENDED PAGE STRUCTURE
    --------------------------

    Do not place floating boxes inside the map as the main content container.
    Floating boxes overlap too easily and become chaotic on different screens.

    Better structure:

        <section class="grand-map-shell">
            <div id="grandMapWorkbench" class="world-map-board">
                <img src="/images/Map/map0.png">
                <!-- script injects SVG overlay here -->
            </div>

            <aside id="grandMapPanel">
                <!-- script injects selected-region info here -->
            </aside>
        </section>

    The map and panel should be a fixed grid/flex layout. The panel should have
    internal scrolling, not expand the full page height.


    COORDINATE STRATEGY
    -------------------

    The map image is 1672 x 941 pixels.

    Use an SVG overlay with the exact same viewBox:

        <svg viewBox="0 0 1672 941" preserveAspectRatio="none">

    Why preserveAspectRatio="none"?

        If the SVG is absolutely positioned over the rendered image, and both
        are stretched to the exact same displayed width/height, "none" keeps
        the overlay coordinates locked to the image corners.

    The wrapper must be:

        position: relative;

    The image must be:

        display: block;
        width: 100%;
        height: auto;

    The overlay must be:

        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;

    The individual paths must be:

        pointer-events: auto;


    MINIMAL EXPERIMENT SCRIPT
    -------------------------

    Paste this into scripts/grand-map-dev.js to test one country.
    Then refresh the Grand Map page.

    (() => {
        const board = document.getElementById("grandMapWorkbench");
        if (!board) return;

        const svgNS = "http://www.w3.org/2000/svg";
        const overlay = document.createElementNS(svgNS, "svg");

        overlay.setAttribute("viewBox", "0 0 1672 941");
        overlay.setAttribute("preserveAspectRatio", "none");
        overlay.classList.add("grand-map-dev-overlay");

        const germany = document.createElementNS(svgNS, "path");
        germany.setAttribute("d", "M843 282 L861 274 L881 282 L882 302 L872 322 L849 320 L835 303 Z");
        germany.setAttribute("tabindex", "0");
        germany.dataset.region = "germany";
        germany.classList.add("grand-map-dev-region");

        overlay.append(germany);
        board.append(overlay);
    })();


    TEMPORARY CSS FOR TESTING
    -------------------------

    You can inject CSS from the dev script while testing:

    const style = document.createElement("style");
    style.textContent = `
        #grandMapWorkbench {
            position: relative;
        }

        .grand-map-dev-overlay {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .grand-map-dev-region {
            pointer-events: auto;
            cursor: pointer;
            fill: rgba(113, 255, 227, 0.08);
            stroke: rgba(113, 255, 227, 0.45);
            stroke-width: 3;
            vector-effect: non-scaling-stroke;
            transition: fill 140ms ease, stroke 140ms ease, filter 140ms ease;
        }

        .grand-map-dev-region:hover,
        .grand-map-dev-region:focus,
        .grand-map-dev-region.selected {
            fill: rgba(113, 255, 227, 0.28);
            stroke: #71ffe3;
            filter: drop-shadow(0 0 12px rgba(113, 255, 227, 0.85));
            outline: none;
        }
    `;
    document.head.append(style);


    ADDING REGION DATA
    ------------------

    Keep region content in one object:

    const regions = {
        germany: {
            title: "Germany",
            locations: ["Osnabrueck"],
            coordinates: "52.2799 N, 8.0472 E",
            artifacts: ["Pending"],
            creatures: ["Pending"],
            companions: ["Pending"],
            fieldNotes: "Pending",
            comments: "Administrator: record awaiting manual archive content."
        }
    };


    ADDING CLICK BEHAVIOR
    ---------------------

    Each path should:

    1. remove .selected from all regions
    2. add .selected to itself
    3. render the matching data into a fixed panel

    Example:

    function selectRegion(regionId, path) {
        document
            .querySelectorAll(".grand-map-dev-region")
            .forEach((region) => region.classList.remove("selected"));

        path.classList.add("selected");
        renderPanel(regionId);
    }


    PANEL RENDERING
    ---------------

    A safe panel renderer:

    function renderPanel(regionId) {
        const data = regions[regionId] || {
            title: "Corrupted Data",
            locations: ["Uncataloged"],
            coordinates: "Unknown",
            artifacts: ["Corrupted data"],
            creatures: ["Corrupted data"],
            companions: ["Corrupted data"],
            fieldNotes: "No approved notes.",
            comments: "Administrator: no stable record attached."
        };

        panel.innerHTML = `
            <p class="map-panel-kicker">SELECTED REGION</p>
            <h2>${data.title}</h2>
            <dl>
                <dt>Locations</dt><dd>${data.locations.join(", ")}</dd>
                <dt>Coordinates</dt><dd>${data.coordinates}</dd>
                <dt>Artifacts</dt><dd>${data.artifacts.join(", ")}</dd>
                <dt>Creatures</dt><dd>${data.creatures.join(", ")}</dd>
                <dt>Companions</dt><dd>${data.companions.join(", ")}</dd>
                <dt>Field Notes</dt><dd>${data.fieldNotes}</dd>
                <dt>Comments</dt><dd>${data.comments}</dd>
            </dl>
        `;
    }


    HOW TO DRAW / FIX BORDERS MANUALLY
    ----------------------------------

    Option A: Browser-based SVG editor
        1. Open map0.png in a vector editor or browser overlay tool.
        2. Trace a country border as an SVG path.
        3. Copy the path's "d" value.
        4. Paste it into scripts/grand-map-dev.js.
        5. Refresh localhost and tune.

    Option B: Manual polygon
        1. Start with a rough <polygon points="x,y x,y x,y">.
        2. Move points until the hover zone matches the country.
        3. Convert to <path> later if curves are needed.

    Option C: Proper country source
        1. Use a real world SVG or GeoJSON dataset.
        2. Match its projection to the PNG map.
        3. Style the countries with this site's neon/corruption theme.

    Option C is the cleanest long-term option, but manual tracing may be easier
    for this specific custom image.


    COMMON FAILURE CAUSES
    ---------------------

    1. SVG uses page coordinates instead of image coordinates.
       Fix: use viewBox="0 0 1672 941" and absolute overlay inside the map wrapper.

    2. The panel is inside the map.
       Fix: keep panel outside the map area.

    3. The panel grows and changes the map size.
       Fix: fixed shell height and panel overflow:auto.

    4. The overlay does not match the image after resize.
       Fix: image and overlay must share the same wrapper and exact rendered box.

    5. Countries overlap in bad ways.
       Fix: put smaller/high-priority countries later in the SVG so they sit on top.


    WHEN READY FOR FINAL POLISH
    ---------------------------

    Once the dev script feels correct:

    1. Move stable CSS into css/style.css.
    2. Rename scripts/grand-map-dev.js to a production name or replace it with
       a cleaned script.
    3. Update CODEX_HANDOFF.md with the new structure.
    4. Add a real update-log patch entry.
*/
