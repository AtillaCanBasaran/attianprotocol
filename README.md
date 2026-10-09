# Attian Protocol

Attian Protocol is a static personal archive website built as a cyberpunk memory terminal: part digital museum, part quest log, part artifact vault, part creature index, and part unreliable system interface.

Live site:

https://attianprotocol.net/

## What this is

The site is an in-world archive operated by the `Administrator`: dry, sarcastic, protective, and chronically unimpressed. It stores memories, achievements, objects, creatures, companion records, research notes, media signals, future quests, and experimental interactive sections.

This is currently an alpha checkpoint. The main structure is online; many pages still need deeper content and polish.

## Main sections

- `Navigator` — public archive hub and restricted-node access.
- `Achievement Repository` — life milestones framed as unlockable achievements.
- `Artifact Vault` — visual/object memory archive.
- `Creature Index` — quest-giving animal and creature records.
- `Mission Log` — video-game-style quest tracker with categories and local progress.
- `Research Terminal` — simplified notes and pseudo-academic explanations.
- `Signal Records` — restricted media/music/game/book archive.
- `Dreaming Fragments` / `Field Notes` / `System Failure Log` — restricted personal shelves.
- `Gaming Area` — MUSE-moderated game backbone.
- `Grand Map` — interactive world map.
- `Fun Village` — portal-only fantasy village reached from the Grand Map.

## Tech stack

This is intentionally simple:

- Static HTML
- CSS
- Vanilla JavaScript
- GitHub Pages deployment

There is no build step and no package manager requirement.

## Local preview

From the repository root:

```bash
python3 -m http.server 8003
```

Then open:

```text
http://127.0.0.1:8003/
```

## Repository layout

```text
index.html                         Main entry page
memory_node/attian/                Archive pages
css/style.css                      Central stylesheet
scripts/                           Shared JavaScript
images/                            Active image assets
docs/                              Project guides, audits, source notes
CODEX_HANDOFF.md                   Context for future Codex sessions
CONTENT_EDITING_GUIDE.md           Quick editing map
```

## Content editing

Start here:

- `CONTENT_EDITING_GUIDE.md` — quick map of where visible text lives.
- `docs/CONTENT_AUTHORING_GUIDE.md` — step-by-step recipes for adding artifacts, creatures, quests, achievements, map data, and records.
- `CODEX_HANDOFF.md` — project identity, workflow, voice rules, and implementation notes.

For generated visual archive content:

- Put Artifact Vault images in `images/artifactvault/`.
- Put Creature Index images in `images/creatureindex/`.
- Add future metadata in `scripts/archive-content-data.js`.
- Keep original images as fallback, and add optimized `.avif` / `.webp` plus `_thumb` variants for faster pages.

## Voice rules

- Public narrator: `Administrator`.
- MUSE: playful chaos, games, recommendations, and occasional interference.
- Red Channel: rare, creepy, incomplete corruption signal.

Avoid making the public site sound like a normal portfolio. It should feel like an archive terminal with memory leaks and opinions.

## Deployment

The site deploys through GitHub Pages from the `main` branch using:

```text
.github/workflows/static.yml
```

Custom domain:

```text
attianprotocol.net
```

## License / reuse

This is a personal archive project. Code patterns may be referenced, but personal writing, images, character voices, and archive content are not intended for reuse without permission.
