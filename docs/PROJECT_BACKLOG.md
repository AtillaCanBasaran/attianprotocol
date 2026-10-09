# Attian Protocol Project Backlog

This file indexes future-content sources. It is not public site copy.

Use this workflow:

1. Find the relevant source file below.
2. Adapt the idea into the target page or script using the established page structure.
3. Add an Update Log entry when the public site behavior or content structure changes.
4. Leave raw source notes in place unless the user asks to prune them.

## Source Index

| Source | Intended destination | Notes |
| --- | --- | --- |
| `content-sources/site-backlog-raw.txt` | General planning | Broad site ideas, page-level todo items, Archive Echo concept. |
| `content-sources/mission-log-quest-seeds.txt` | `memory_node/attian/missionlog/index.html` | Future quests and category seeds. |
| `content-sources/achievement-repository-seeds.txt` | `memory_node/attian/achievementrepository/index.html` | Life events and achievement candidates. |
| `content-sources/research-terminal-topic-seeds.txt` | `memory_node/attian/researchterminal/index.html` | Future research topics. |
| `content-sources/signal-records-source.txt` | `memory_node/attian/signalrecords/index.html` | Media, music, game, film, and series records. Contains rough notes and should be curated before public use. |
| `content-sources/system-failure-log-seeds.txt` | `memory_node/attian/systemfailurelog/index.html` | Failure/interference categories. |
| `content-sources/creature-index-story-seeds.txt` | `memory_node/attian/creatureindex/index.html` | Creature story ideas. |
| `content-sources/companion-database-seeds.txt` | `memory_node/attian/companiondatabase/index.html` | Companion and relationship notes. Treat carefully before making public. |
| `content-sources/chaos-index-ruleset.txt` | Future chaos/card page or game system | Raw card/ruleset ideas. No public page currently exists. |

## Implementation Format

Most pages use one repeated entry type inside a page-specific section.

- Add new content directly inside that page's `index.html`.
- Match existing class names and entry structure.
- Keep visible summaries short.
- Put longer context behind `<details>` or page-native expandable sections when appropriate.
- Use `Administrator`, `MUSE`, and `[ RED CHANNEL ]` consistently with `CODEX_HANDOFF.md`.

Generated card pages are exceptions:

- Artifact Vault and Creature Index metadata live partly in `scripts/visual-archive.js`.
- Mission Log behavior lives in `scripts/mission-log.js`; quest content lives in the Mission Log HTML.

## Privacy Reminder

Some raw notes mention real people, private memories, or sensitive material. Do not publish raw notes directly. Curate them into archive voice, anonymize when needed, and ask the user before exposing anything that feels personal or identifying.
