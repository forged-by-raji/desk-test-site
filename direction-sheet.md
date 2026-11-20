# Direction sheet: Test Gym Kickboxing (round 2)

A made-up client, used to test a full new build. **Round 2, approved by Musawir 20 Nov 2026 ("Approve, make stills"), with the photo set.** Round 1 (approved, then all three stills rejected: "this is a fucking bad result, none of them works for me") is in git history. What changed: the photos lead, the gym's own colour fills whole sections, and the motion goes up a level.

Sources: the approved brief (`brief.md`), the approved copy (`copy.md`, unchanged), the research (`research.md`), and the photo set made from his chosen master (`photos/`, `image-prompts.md`).

```yaml
client: Test Gym Kickboxing
lane: classic
motion_level: 2
framework: astro
surface: light
loud_type: hero
paid: no
container_max: 1600px
gutter: clamp(20px, 4vw, 64px)
approved_by: Musawir
approved_on: 2026-11-20
```

## 1. The lane
**Classic, led by photography.** A parent trusts what they can see: real kids smiling, a coach kneeling to a child's height, a bright clean room. The classic lane's "one real hero photo, proof in the hero" is the core. Playful lends one thing: colour as meaning for the age groups.

## 2. The one idea
**The round**, kept from round 1, now told with pictures. Each phase of the class (warm up, pads, bag, games, cool down) has its photo. The hero says the hour, the class shows it.
- **The hero:** the master photo, the kids' class mid jab, large and edge to edge inside the container.
- **A record:** a timetable row, with the group's photo beside it.
- **The main action:** "Book your first class free".

## 3. Brand, sampled from the photos
The gym has no logo, so the palette comes from its own room, measured from the master photo:
- **Mat blue #2f5a8f**, from the mats in shade (sampled #355d8a). This is now the gym's own colour. It fills whole sections as a ground (timetable, closing) and is the one action colour.
- **Ink #141414**, from the heavy bags (sampled #282827, deepened for text).
- **White #ffffff** for the main ground. The brick in the photos reads warm (sampled #bdb1a9), so it stays in the photos and never becomes a page colour, which keeps cream off the page.
- **Age colours,** only as small tags with the group's name: Little Kickers yellow #f5c400, Juniors green #16a34a, Adults white on mat blue.

## 4. Type pair
Archivo Condensed, heavy capitals, for heads and numbers. Archivo for text. Kept from round 1: the rejection named the pictures and the colour, not the type. Huge type once, in the hero.

## 5. Motion level: 2, Lively
- A clean load: the hero photo and the headline arrive together, nothing held back.
- **Words that show photos on hover:** hover a phase name ("Pads") and its photo appears beside the pointer. The tap version opens it in place. His words on HLK: "they has to effect, like hover effect on text that shows images".
- Sections rise into view once. A light scroll move on the hero photo.
- Nothing fast, no loader, reduced motion respected.

## 6. Asset recipe
Eight photos, generated with Codex on his ChatGPT login from the master he picked (version 2):
| File | Use |
|---|---|
| `master.png` | Hero: the kids' class mid jab |
| `pads.png` | Pads phase, and "your coaches" |
| `little-kickers.png` | Little Kickers, games phase |
| `adults.png` | Adults, bag phase |
| `coach-dana.png`, `coach-marco.png` | Coaches |
| `gloves.png` | What to bring, small section |
| `timer.png` | The round, small section |

Every photo is marked as AI generated in its alt text and in the footer. Each is checked before use: no logos, no text, plain timer face, hands and limbs whole.

## 7. The signature moment
Hover "Pads, rounds 3 to 5" and the photo of Dana kneeling with a boy appears beside the words. A parent reads the hour and sees it at the same time.

## 8. The avoid list
From round 1, plus the rejection:
- **Black and white pages built from line drawings and diagrams** (round 1, rejected).
- A cookie wall, two actions fighting at the top, "find a studio".
- Dark red and black, burn headlines, dark rooms.
- No times or prices on the home page.
- Stock photos (these are generated from one master, so one shoot).
- Cream or beige as a page colour.

## 9. The framework
Astro. Five pages of facts that change through the Desk, built to plain fast pages. Images served as resized WebP. Vercel hosts it on the free plan for this test.

## 10. The page story
In `copy.md`, approved and unchanged.

## The still he picked
**Still 2, "The colour field"** (`stills/r2-2-colour-field.html`), picked by Musawir on 20 Nov 2026 ("Still 2"). Before the build, two weak spots were fixed: the empty gap in the hero's left column now holds the week at a glance (the approved times), and the coach cards carry their quote larger so the middle is not empty.

## How the three stills will differ (round 2)
Not three diagrams of one page. Three different looks, all from this sheet:
1. **The full photo:** the master photo fills the first screen inside the container, the headline set across its lower edge.
2. **The colour field:** a mat blue first screen, the headline in white, the photos as tall cut panels.
3. **The class in pictures:** a strip of the five phase photos under the headline, each with its round numbers, like a contact sheet.
