# Attian Protocol Content Authoring Guide

Use this when manually adding new content. This is the practical editing guide; `CODEX_HANDOFF.md` explains the wider project.

## Global Rules

Write like this is an archive system, not a diary.

- Use `Administrator` for the main archive voice.
- Use `MUSE` for playful chaos, game systems, recommendations, and occasional bright nonsense.
- Use `[ RED CHANNEL ]` rarely, only as creepy incomplete leakage.
- Keep visible summaries short; put long lore inside collapsible sections.
- Prefer in-world labels: `Archive summary`, `Dossier`, `Integrity`, `Quest Behavior`, `Signal Bias`.
- Avoid public implementation labels like `file`, `script`, `JSON`, `SVG`, or `placeholder`.

## Adding an Artifact Vault Entry

Files involved:

- Images: `images/artifactvault/`
- Metadata: `scripts/archive-content-data.js`
- Renderer/page: do not edit unless changing layout.

### 1. Add the image

Choose one family:

- `drawing`
- `memory`
- `mini`

Name the restored/display image with the next number:

```text
images/artifactvault/memory5.png
```

Optional source/original:

```text
images/artifactvault/memory5_original.jpeg
```

Supported restored extensions:

- `.png`
- `.jpeg`
- `.jpg`
- `_restored.png`

### 2. Add metadata

Open:

```text
scripts/archive-content-data.js
```

Inside `artifacts`, add a key matching the image filename without extension:

```js
"memory5": {
    code: "PLACE-BAR-0003",
    title: "Name Visitors See",
    short: "short hook / object category",
    category: "Special Places",
    collection: "Travel Bars",
    status: "Recovered",
    type: "Memory image",
    timestamp: "2026-05",
    integrity: "Warm. Fragmented. Useful.",
    archive: "One concise paragraph explaining what this artifact is and why it matters.",
    note: "Administrator restoration note: Dry, precise, slightly judgmental comment.",
    feature: "Text used if this artifact appears in the daily feature slot."
}
```

Also add the key to `artifactItems` near the top of the file:

```js
artifactItems: ["drawing1", "memory1", "memory2", "memory3", "memory4", "memory5", "mini1", "mini2", "mini3"],
```

This avoids slow filename scanning and keeps the page loading quickly.

### 3. Check the page

Open:

```text
http://127.0.0.1:8003/memory_node/attian/artifactvault/
```

The card should appear automatically. If it does not:

- confirm the filename family and number match the metadata key;
- confirm the image is inside `images/artifactvault/`;
- hard refresh the page if the browser cached the old script.

### 4. Optimized image versions

The live page uses small `_thumb` files in the collapsed creature rows, then loads the higher-quality `.webp` preview only when a creature is expanded. The full-size `.png` stays linked from the preview, so opening the image in a new tab reveals the original-resolution restored file. Any `_original.png` / `_original.jpeg` source fragment remains available through the separate inspection drawer.

For best performance, generate these beside the original:

```text
memory5.avif
memory5.webp
memory5_thumb.avif
memory5_thumb.webp
```

If you skip this, the page will still work, but it will load the larger original image.

## Adding a Creature Index Entry

Files involved:

- Images: `images/creatureindex/`
- Metadata: `scripts/archive-content-data.js`

### 1. Add the image

Use the next creature number:

```text
images/creatureindex/creature7.png
```

Optional source/original:

```text
images/creatureindex/creature7_original.jpeg
```

### 2. Add metadata

Open:

```text
scripts/archive-content-data.js
```

Inside `creatures`, add the matching number:

```js
7: {
    code: "CRTR-FLD-0007",
    title: "CREATURE TITLE",
    subtitle: "SHORT TAXONOMIC INSULT",
    rarity: "RARE / SIDE QUEST ENCOUNTER",
    tags: ["FIELD", "URBAN", "SUSPICIOUS"],
    stats: { Power: 5, Speed: 6, Courage: 4, Wisdom: 8, Charisma: 7, Stealth: 3 },
    latin: "Invented latin-style name",
    inn: "Encounter location",
    size: "Small-medium",
    age: "Unknown",
    eyes: "Judgmental, tiny, ancient, etc.",
    fur: "Fur/feathers/shell/surface description",
    skillSet: ["Skill One", "Skill Two", "Skill Three"],
    skillDetails: {
        "Skill One": "Short, useful, mildly funny explanation of what happens.",
        "Skill Two": "Short explanation for the second ability.",
        "Skill Three": "Short explanation for the third ability."
    },
    professions: ["Quest Giver", "Local Problem"],
    abstract: "Short card-front description of what this creature is and what makes the encounter strange.",
    questType: "SIDE QUEST",
    questStatus: "ACTIVE",
    questName: "Quest Name",
    questBehavior: "One clear objective the player can understand.",
    questReward: "A concrete, funny, or lore-relevant reward.",
    story: "Longer optional lore-shelf encounter record. Vivid, funny, not endless.",
    comment: "Administrator note: final dry classification."
}
```

Also add the number to `creatureItems` near the top of the file:

```js
creatureItems: [1, 2, 3, 4, 5, 6, 7],
```

This lets the page render from a known list instead of checking many missing filenames.

### 3. Optimized image versions

The live collection card prefers the restored `.webp` / `.avif` artwork and always contains the complete image without cropping it. The original `.png` / `.jpeg` stays in place for full-resolution inspection, and `_thumb` files remain useful for other compact archive contexts.

Keep the six shared stats in the documented order so visitors can compare cards directly. Every name in `skillSet` should have an identically spelled key in `skillDetails`; selecting that skill opens its short explanation on the card. `questType`, `questStatus`, `questBehavior`, and `questReward` form the compact quest panel.

For best performance, generate these beside the original:

```text
creature7.avif
creature7.webp
creature7_thumb.avif
creature7_thumb.webp
```

If you skip this, the page will still work, but it will load the larger original image.

## Adding a Mission Log Quest

Files involved:

- Content: `memory_node/attian/missionlog/index.html`
- Behavior: `scripts/mission-log.js` only if changing filters/tracking behavior.

Copy an existing `<details class="quest-card">` block inside:

```html
<section class="quest-board">
```

Use one category:

```html
data-category="main"
data-category="side"
data-category="crafting"
data-category="multiplayer"
data-category="world"
data-category="corrupted"
```

Minimal quest template:

```html
<details class="quest-card" data-category="side">
    <summary class="quest-head">
        <div>
            <span class="quest-id">SIDE-EXAMPLE-0001</span>
            <h2>Quest Title</h2>
            <p>One-sentence playable objective summary.</p>
        </div>
        <div class="quest-meta">
            <span>Available</span>
            <small>Side Quest</small>
            <small>Low Risk</small>
        </div>
    </summary>
    <div class="quest-grid">
        <section>
            <h3>Requirements / Objectives</h3>
            <ul>
                <li>Objective one.</li>
                <li>Objective two.</li>
            </ul>
        </section>
        <section>
            <h3>Rewards</h3>
            <ul>
                <li>Reward one</li>
                <li>Reward two</li>
            </ul>
        </section>
    </div>
    <p class="mission-admin">Administrator: dry quest assessment.</p>
    <details class="quest-story">
        <summary>Story description</summary>
        <p>Optional longer lore.</p>
    </details>
</details>
```

After adding quests, update the intro count:

```html
<div><span>20</span><p>Logged Quests</p></div>
```

## Adding a Navigator Search Response

Files involved:

- Easy manual response bank: `scripts/navigator-response-data.js`
- Navigator page: no edit needed unless adding/removing visible destination cards.

Open `scripts/navigator-response-data.js` and add one object inside `window.NAVIGATOR_RESPONSE_BANK`:

```js
{
    terms: ["cake", "the cake", "grand prize"],
    speaker: "muse",
    routes: ["detention"],
    node: "DETENTION FACILITY // REFERRAL ONLY",
    text: "The prize may be dessert, acronym, leverage, or a trap wearing frosting."
}
```

`routes` uses the destination's `data-route` value from `memory_node/attian/index.html`. Matching routes remain visible and their chipset traces illuminate. `node` supplies the compact label after the character commentary. Use `showAll: true` instead of `routes` only for help or system queries that should retain the entire map.

To suggest a plausible node without claiming an exact match, add `mode: "suggestion"` and keep the likely destinations in `routes`. To show a temporary visual node instead of a real destination, use `mode: "pending"`, `"question"`, or `"error"`:

```js
{
    category: "unconnected",
    terms: ["food", "recipe", "cooking"],
    mode: "pending",
    node: "CULINARY MEMORY NODE",
    virtualCode: "...",
    virtualTitle: "ROUTE RESERVED",
    virtualText: "Food data exists. A civilized filing system does not.",
    speaker: "administrator",
    text: "Culinary residue detected, but no dedicated node has been constructed."
}
```

`virtualCode`, `virtualTitle`, and `virtualText` are optional. The renderer supplies themed defaults. A search with no authored entry automatically becomes a neutral question-mark node.

Supported speakers:

- `administrator` or `lili` = LILI avatar, purple archive-control frame
- `muse` = MUSE avatar, bright cyan live-spark frame
- `red` = public signal corruption: no Red avatar and no clean Red voice; it glitches/silences the visible archive speaker instead

Keep terms lowercase when possible. Group phrases that share one response instead of copying the same object. Reusing a trigger is allowed when its response is different: the Navigator randomly selects among equally specific matching responses each time the query is typed.

The response data file is divided into three arrays:

- `window.NAVIGATOR_RESPONSE_BANK` for current curated responses
- `window.NAVIGATOR_LEGACY_ROUTED_RESPONSES` for older responses that already inherited a destination
- `window.NAVIGATOR_UNASSIGNED_RESPONSES` for older responses that retain their commentary but display the gray unconnected node

An unassigned entry can remain gray indefinitely. To route it later, move the complete object into the routed array, remove `virtualCode`, `virtualTitle`, and `virtualText`, then replace `mode: "question"` with the intended `routes`, `node`, and optional mode.

For a mixed voice response, keep one entry and mark the interruption inside `text`:

```js
{
    terms: ["beer"],
    speaker: "muse",
    text: "Liquid bread! ADMINISTRATOR: Technically closer than I wanted."
}
```

The Navigator will split the line into an asymmetric MUSE/Admin transmission automatically.

## Adding a Recommendation Engine Result

Edit `scripts/recommendation-engine-data.js`; the page HTML does not need to change for ordinary content additions.

Add a contextual result to `window.MUSE_CONTEXTUAL_RECOMMENDATIONS`:

```js
{
    actions: ["watch"],
    moods: ["tired", "chaotic"],
    title: "WHAT WE DO IN THE SHADOWS",
    muse: "Watch What We Do in the Shadows. Vampires are also tired and bad at administration.",
    admin: "Undead workplace failure has been accepted as a recommendation criterion."
}
```

Supported action IDs are `watch`, `read`, `play`, `make`, `eat`, `visit`, `listen`, `do`, and `think`. Supported moods are `tired`, `curious`, `restless`, `cozy`, `brave`, `haunted`, `social`, `focused`, and `chaotic`. Give an entry several moods when appropriate; the engine scores all selected moods.

Other editable arrays in the same file:

- `MUSE_RECOMMENDATIONS` contains the preserved free-range pool used by “surprise me.”
- `MUSE_GLITCHES` contains rare event pairs.
- `MUSE_SECONDARY_COMMENTS` contains the uncommon extra MUSE response that may replace Administrator review.

Do not add browser storage or telemetry to this feature. The visible session trace is intentionally held only in page memory and disappears when the page closes.

## Adding an Achievement

File:

```text
memory_node/attian/achievementrepository/index.html
```

Image icon convention:

```text
images/icons/ACHV-CODE-0001.png
```

Copy an existing `<details class="achievement-card">` block. Keep:

- achievement code;
- short summary;
- metadata;
- explanation;
- requirements;
- effects;
- `Administrator verdict`.

Use corrupted/approximate dates when needed. Do not invent exact dates if memory is vague.

## Adding a Companion

File:

```text
memory_node/attian/companiondatabase/index.html
```

Copy an existing companion record and update:

- card name/title;
- classification;
- metadata;
- skills/role;
- abstract profile;
- Administrator note.

Privacy rule: avoid unnecessary real names, exact birth dates, addresses, or sensitive details unless intentionally approved.

## Adding Research Terminal Logs

Content files:

```text
memory_node/attian/researchterminal/data/core-records.md
memory_node/attian/researchterminal/data/new-records.md
```

Research records use plain Markdown. Copy this block into the appropriate data file:

```markdown
## 16 // BIOLOGY / TOPIC

### An Overly Formal Archive Title

**Archive explanation:** A clear, accurate explanation of the actual concept.

**Subject storage format:** The Subject's longer personal analogy, joke, or memory device.

**Admin comment:** A concise Administrator correction or review.

---
```

Rules:

- Keep the three bold field labels exactly as shown; the page parser uses them.
- `LILI's comment` is accepted for imported legacy material but new public records should use `Admin comment`.
- Blank lines create separate paragraphs inside the dossier.
- The visible `RT-###` code and total record count are generated automatically.
- Search terms are generated from the category, title, and explanation.

If adding a new top-level category, add one matching filter button in `.research-filter-row` inside `index.html`.

## Adding Signal Records

File:

```text
memory_node/attian/signalrecords/index.html
```

Add a new:

```html
<details class="signal-log" data-tags="movie title keyword">
```

Use:

- `.signal-summary-text` beginning with `Archive summary:`
- `.signal-subjective` beginning with `Subjective note:`
- `.signal-remark` for persistent memory hooks such as characters, short quote or lyric fragments, scenes, images, recurring concepts, or details that immediately return when remembering the work
- one of:
  - `.signal-admin`
  - `.signal-muse`
  - `.signal-red`

The live index is divided by large HTML comments for anime, movies, series, music, games, and books. Put the new record below the matching divider. A complete copy-ready `RECORD TEMPLATE` is stored at the top of `.signal-library`.

Keep interpretation in `Subjective note`; move specific remembered material into `Remark`. If nothing has been recorded yet, use:

```html
<section class="signal-remark" aria-label="Persistent remarks">
    <h3>Remark</h3>
    <p class="signal-remark-empty">No persistent fragment indexed yet.</p>
</section>
```

Red Channel examples should be clipped and uncomfortable:

```text
[ RED CHANNEL ]: keep the empty room.
[ RED CHANNEL ]: close them. lose it.
```

Avoid clean poetic paragraphs for Red Channel.

If adding a new media category, add a filter button in `.signal-filter-row`.

## Adding Grand Map Country Data

File:

```text
images/Map/countries-index.json
```

Add or update the country ID used by the SVG. Most use two-letter IDs:

```json
"DE": {
  "name": "Germany",
  "status": "INDEXED",
  "locations": ["Osnabrueck"],
  "coordinates": "52.2799 N, 8.0472 E",
  "artifacts": ["Artifact names or routes"],
  "creatures": ["Creature names or routes"],
  "companions": ["Companion names or routes"],
  "fieldNotes": "Restricted note route or summary",
  "comments": "Administrator: in-world note."
}
```

Rules:

- Keep valid JSON: double quotes, commas between entries, no comments.
- Do not edit `world_rw.svg` geometry.
- Avoid public comments about SVG/runtime internals unless deliberately documenting a technical limitation.

## Editing Fun Village Points Of Interest

Files:

- `memory_node/attian/fantasyvillage/index.html` for SVG box placement.
- `scripts/fantasy-village.js` for the dossier text.

The clickable boxes are `<g class="village-poi">` elements with:

```html
data-poi="tavern"
```

The matching data is in `scripts/fantasy-village.js`:

```js
tavern: {
    title: "The Tavern",
    summary: "Short in-world description.",
    status: "Foundation placed",
    trouble: "Likely local problem",
    hook: "Future content hook"
}
```

If moving a box, edit the SVG `<rect>` coordinates in the village page. The viewBox is:

```text
1672 941
```

That matches `villagemap.png`.

## Updating the Update Log

File:

```text
memory_node/attian/updatelog/index.html
```

Add new patches at the top of:

```html
<section class="patch-stream">
```

Do not delete older patches. Historical chaos is still data.

Use `Administrator` as the author.

## Final Manual Checklist

Before considering a content addition done:

- Page still loads.
- No public text says `placeholder` unless intentionally hidden in docs.
- New content uses the right voice.
- Search/filter still finds the entry if the page supports search.
- New images are in the correct folder.
- Update Log gets a new patch if behavior, structure, or visible site content changed materially.
