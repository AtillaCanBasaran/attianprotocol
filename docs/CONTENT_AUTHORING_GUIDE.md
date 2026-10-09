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
    latin: "Invented latin-style name",
    inn: "Encounter location",
    size: "Small-medium",
    age: "Unknown",
    eyes: "Judgmental, tiny, ancient, etc.",
    fur: "Fur/feathers/shell/surface description",
    skillSet: ["Skill One", "Skill Two", "Skill Three"],
    professions: ["Quest Giver", "Local Problem"],
    abstract: "Short profile of what this creature is in archive terms.",
    questName: "Quest Name",
    questBehavior: "What it asks, blocks, causes, or symbolizes.",
    story: "Longer encounter record. Vivid, funny, not endless.",
    comment: "Administrator note: final dry classification."
}
```

Also add the number to `creatureItems` near the top of the file:

```js
creatureItems: [1, 2, 3, 4, 5, 6, 7],
```

This lets the page render from a known list instead of checking many missing filenames.

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

File:

```text
memory_node/attian/researchterminal/index.html
```

Add a new:

```html
<details class="research-log" data-tags="science biology keyword">
```

Use:

- `<span>` for category;
- `<b>` for long academic-style title;
- `.research-simple` for plain explanation;
- one subject storage line;
- `.research-admin` for Administrator note.

If adding a new category, also add a filter button in `.research-filter-row`.

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
- `.signal-subjective`
- one of:
  - `.signal-admin`
  - `.signal-muse`
  - `.signal-red`

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
