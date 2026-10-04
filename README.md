# Halloween Companion

A static, no-build reference for the Halloween franchise: 13 films, 5 continuities, characters, an in-universe timeline, places, lore, extended media, and a writer's room for the gaps.

Open `index.html` in a browser, or serve the folder with GitHub Pages. No server or install needed.

## Sections

- **Films**: plot, cast, kills, settings, production notes, alternate cuts, and per-film facts
- **Characters**: profile, fate in each timeline, and every appearance with the actor (pulled from film cast lists)
- **Timeline**: in-universe chronology, filterable by continuity (A Thorn · B H20 · C Zombie · D Green · E Witch)
- **Compare**: the same story beats side by side across any mix of the five continuities; matching answers merge, and films, deaths, actors, and character fates are pulled in automatically
- **Places**: in-story locations, the films they appear in, and real filming locations
- **Ledger**: every death in all 13 films, filterable by continuity, killer, and method
- **Lore**: Samhain, Thorn, the mask, the white horse, Silver Shamrock, the rules of the Shape
- **Beyond**: novels, comics, games, documentaries, scores, alternate cuts, rights
- **Writer's Room**: contradictions, open seams, craft notes, body counts, ages

Search (press `/`) covers everything.

## Editing the data

All content lives in `assets/data/`:

| File | Holds |
| --- | --- |
| `films.js` | One object per film. `cast` is `[characterId, actor]`; `places` is a list of place ids. |
| `characters.js` | One object per character. Appearances are derived from film cast lists, so add a character here and reference its id in a film's `cast`. |
| `timeline.js` | One row per event. `y` sorts, `d` displays, `tl` is the timeline letters, `film` links a film. |
| `kills.js` | The kill ledger: one row per death with victim, method, killer, count, and cut notes. Film death counts are computed from it. |
| `compare.js` | Comparison rows: one story beat per row, one answer per timeline letter. Identical neighboring answers merge in the view. |
| `world.js` | Timeline definitions, places, lore, extended media, contradictions, open seams, craft notes. |

`assets/app.js` renders the views; `assets/style.css` styles them.
