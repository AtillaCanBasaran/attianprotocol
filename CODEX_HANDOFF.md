# Attian Protocol - Project Context

This repository is a static personal website called **Attian Protocol**. It is a personal digital museum/archive: memories, fragments, objects, visitors, goals, private logs, and strange little systems presented as a cyberpunk terminal.

The tone should feel like a memory archive operated by a sarcastic, bad-mannered admin. The admin is annoyed, dry, judgmental, sometimes weirdly caring, and should narrate the site more than the owner directly explains himself. Think: clinical terminal language mixed with rude affection. Avoid making pages sound like plain diary entries unless that is explicitly the point.

## Current Version

Local version: **v0.3**

Local Git state as of this handoff:

- Branch: `main`
- Local commit: `3f0ad07 Release version 0.3`
- Local tag: `v0.3`
- Local branch is ahead of `origin/main` by 1 commit.
- Push was attempted but blocked because GitHub authentication is not configured in the local terminal.
- To publish after authentication:

```bash
git push origin main
git push origin v0.3
```

## Design Direction

- Static HTML/CSS/JS.
- Main stylesheet: `css/style.css`.
- Keep styling consolidated in `css/style.css`; avoid reintroducing separate `blocks.css`, `cards.css`, `terminal.css`, or `visitor.css`.
- Visual style: dark cyberpunk terminal, purple/cyan glow, archive/system UI, not a corporate landing page.
- Admin voice should appear in descriptions, status lines, error messages, labels, and empty states.
- The site should feel usable first, atmospheric second.
- No emojis unless intentionally requested.

## Core Scripts

### `scripts/legal-footer.js`

Injects collapsible legal sections into pages:

- `IMPRESSUM / LEGAL NOTICE`
- `DATENSCHUTZERKLARUNG / PRIVACY POLICY`

Contact details used:

- Johannisstr. 136
- 49074 Osnabrück
- Germany
- atillacanbasran@gmail.com

### `scripts/restricted-access.js`

Adds password gate for restricted pages.

- Current password: `1327`
- Does not persist session unlock; pages ask again on reload.
- Keep the cyberpunk admin-access feel.

Protected pages currently include:

- `memory_node/attian/dreamingfragments/`
- `memory_node/attian/fieldnotes/`
- `memory_node/attian/signalrecords`
- `memory_node/attian/systemfailurelog/`

### `scripts/main-page.js`

Controls the admin personality selector on the main landing page.

- Default selected personality: admin being herself.
- Other personality options are rejected with sarcastic admin responses.

## Page Map

### `/index.html`

Main entry page.

Purpose:

- Introduces **Attian Protocol** as the website/system.
- Contains a short admin-written concept introduction.
- Has admin mode/personality buttons.
- Provides transition to the navigator.

Important behavior:

- The admin personality cannot actually be changed.
- Clicking other personality modes should produce sarcastic refusal text.

### `/memory_node/attian/index.html`

Navigator page.

Purpose:

- Main hub after entering the protocol.
- Shows public and restricted archive nodes.
- Design lab is intentionally hidden from visible navigation.

Visible public nodes:

- `achievementrepository`
- `artifactvault`
- `companiondatabase`
- `creatureindex`
- `missionlog`
- `researchterminal`
- `visitorterminal`

- `recommendationengine`
- `updatelog`

Visible restricted nodes:

- `dreamingfragments`
- `fieldnotes`
- `signalrecords`
- `systemfailurelog`

Hidden node:

- `designlab`
- URL: `/memory_node/attian/designlab/`
- It exists, but is not shown as a visible navigator card.
- There is currently a source comment in the navigator preserving the address.

### `/memory_node/attian/designlab/index.html`

Hidden design lab.

Purpose:

- A private test/playground page for trying CSS concepts.
- Contains 100 design/style ideas for the site.
- Useful for future inspiration and copy/paste styling experiments.
- Should remain hidden for now, not deleted.

### `/memory_node/attian/achievementrepository/index.html`

Achievement repository.

Purpose:

- Records life milestones as achievement unlocks rather than direct diary entries.
- Narrated by the admin in sarcastic system language.

Current entries include:

- Birth/existence unlock.
- Early speech around age 2-3, date corrupted.
- Childhood chewing-gum-ring wedding around age 6.
- Primary school completion and top 4% placement around age 13.
- High school friend group formation.
- High school questioning/identity/philosophy phase.
- First serious university relationship around age 17.

Tone:

- "Achievement unlocked" style.
- Admin judging requirements, penalties, unlocks, and system effects.
- Avoid too much direct wording from the owner's original memory notes.

### `/contents/missionlog.html`

Mission log.

Purpose:

- Current/future life objectives written as admin-tracked missions.

Current missions:

- Go to Ireland.
- Revisit Japan.
- Improve German.
- Paint more.
- Finish this website.
- Attend next therapy sessions.
- Do more art.
- Organize writings and notes.
- Handle bureaucracy.
- Play a DnD campaign and find a group.

Tone:

- Active objective list.
- Admin is judgmental but motivating in her own unpleasant way.

### `/memory_node/attian/visitorterminal/index.html`

Visitor terminal.

Purpose:

- Lets visitors submit fragments to a Supabase-backed archive.
- Visitors can leave anything: thoughts, feelings, facts, jokes, food opinions, fragments, etc.

Current form fields:

- `Entry name`
- `Visitor name`
- `Fragment`

Important implementation:

- Uses Supabase CDN:
  - `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
- Database table:
  - `visitor_logs`
- Folder key:
  - `visitor_terminal`

Visitor archive:

- Entries render as collapsible `details` records.
- Entry name is the visible title.
- Clicking expands visitor name, date/status, and fragment content.

### `/memory_node/attian/artifactvault/index.html`

Artifact vault.

Purpose:

- Recovered images/objects/artifacts.
- Currently basic but part of the public navigator.

Future direction:

- Could become a gallery of meaningful objects, photos, drawings, souvenirs, or "evidence."
- Admin should describe objects as recovered artifacts, not sentimental scrapbook items.

### `/memory_node/attian/companiondatabase/index.html`

Companion database.

Purpose:

- People/companions/entities important to the archive.
- Public navigator describes it as trusted entities, emotional liabilities, and people the system failed to delete.

Future direction:

- Profile cards for friends, family, important people, fictional companions, pets, or symbolic "allies."

### `/memory_node/attian/creatureindex/index.html`

Creature index.

Purpose:

- Creature records and taxonomy attempts.
- Can be silly, mythic, animal-related, invented, or symbolic.

Future direction:

- Entries can feel like field-guide records written by an incompetent-but-confident archive admin.

### `/memory_node/attian/researchterminal/index.html`

Research terminal.

Purpose:

- Pseudo-academic files where ordinary habits/ideas are given unnecessarily serious titles.

Future direction:

- Good place for essays, theories, observations, funny analyses, "studies" of habits, interests, aesthetics, people, etc.

### `/contents/signalrecords.html`

Restricted page.

Purpose:

- Media/culture/music/signal fragments.

Current note:

- Protected by admin access password.
- Input/access gate styling previously had theme issues; keep it aligned with global style.

### `/memory_node/attian/dreamingfragments/index.html`

Restricted page.

Purpose:

- Dreams, intrusive fragments, surreal thoughts, or less public memory pieces.

Current note:

- Protected by admin access password.

### `/memory_node/attian/fieldnotes/index.html`

Restricted page.

Purpose:

- Personal observations, field notes from life, possibly more candid.

Current note:

- Protected by admin access password.

### `/memory_node/attian/systemfailurelog/index.html`

Restricted page.

Purpose:

- Failures, malfunctions, delays, avoidable errors, depression-ish states, and other human software incidents.

Current note:

- Protected by admin access password.

### `/memory_node/attian/bodyreadout/index.html`

Existing page, not currently visible in the navigator.

Purpose:

- Could be used for physical/body state, health, exhaustion, sleep, weird biological telemetry.

Future direction:

- If restored to navigation, decide whether public or restricted.

### `/contents/lostdata.html`

Existing content page.

Purpose:

- Lost/corrupted data.

Future direction:

- Could be a place for unrecoverable memories, missing years, placeholders, or intentionally glitched writing.

### `/contents/transmissionbeacon.html`

Existing content page.

Purpose:

- Beacon/transmission style page.

Future direction:

- Could become contact/broadcast/announcement page, but legal contact already lives in the footer's Impressum.

## Removed / Deprecated

### Emotion Analytics

Deleted:

- `memory_node/attian/emotionanalytics/index.html`

Reason:

- User requested complete removal.

### Old CSS Files

Deleted:

- `css/blocks.css`
- `css/cards.css`
- `css/terminal.css`
- `css/visitor.css`

Reason:

- User wants a single main CSS file for easier design edits.

## Development Notes

Local server has been run from the repo root with:

```bash
python3 -m http.server 8000
```

Local URL:

```text
http://localhost:8000/
```

Open the repo folder in VSCode:

```text
/Users/sb-atillacanbasaran/Documents/Codex/2026-06-24/i-hav/attianprotocol
```

Important:

- There are currently some `.DS_Store` files untracked from Finder/VSCode browsing. They are not part of v0.3.
- Consider adding `.DS_Store` to `.gitignore` later.
- Do not reset or overwrite local changes casually; the local version is ahead of GitHub.

## Writing Guidelines For Future Edits

- Prefer admin narration over plain self-description.
- Main story can stay accurate, but phrasing should be transformed into archive/system language.
- Use humor, but keep emotional truths intact.
- Avoid overexplaining how the site works inside visible UI.
- Keep links and paths absolute from root when possible, e.g. `/memory_node/attian/`.
- Keep legal footer script loaded on pages.
- Keep restricted access script loaded on restricted pages.
- When adding new pages, link `css/style.css` and `scripts/legal-footer.js`.
