# Image slots

Drop images into this folder and they'll override the live themossway.co.uk
CDN images currently used as placeholders. The page references each slot via
the `IMG` object in `app/copy.ts` — update the path there once a file lands.

| Slot key (in `copy.ts`) | Where it's used | What it should be | Status |
| --- | --- | --- | --- |
| `IMG.hero` | Section 1 — hero right | Open jar, spoon mid-air with the gel, daylight, oak counter, bundle bottom right | **needs new shot** — placeholder is CDN jar |
| `IMG.problemShelf` | Section 2 — visual | Chaotic supplement shelf, half-empty bottles, visible expiry dates | **needs new shot** — using styled empty state |
| `IMG.solutionGel` | Section 3 — visual | Macro of moss gel in jar with daylight passing through | **needs new shot** — using CDN ingredient infographic |
| `IMG.founder` | Section 6 — founder portrait | Harry, candid, daylight, coastal or workshop background | **needs new shot** — using LinkedIn cover as placeholder |
| `IMG.vsCompare` | Section 7 — comparison visual | TMW jar on one side, pile of bottles/gummies/sachets on the other | **needs new shot** |
| `IMG.jarSingle` | Sections 11 / pricing trial | Single Original Moss 500ml jar | OK — CDN product shot |
| `IMG.jarTriple` | Section 11 / 60-day plan | Three jars together, fresh | OK — CDN Large Gel Bundle shot |

## How to swap a placeholder

1. Drop the image into `public/images/` (e.g. `hero.jpg`)
2. Open `app/copy.ts`
3. Change the `IMG.hero` value from the CDN URL to `"/images/hero.jpg"`
4. Save. Dev server hot-reloads.

That's it. No code changes needed beyond `app/copy.ts`.
