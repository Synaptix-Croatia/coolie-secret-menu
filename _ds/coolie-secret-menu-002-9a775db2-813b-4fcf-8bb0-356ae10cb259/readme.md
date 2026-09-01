# Coolie Secret Menu — Design System (DS 003)

**Coolie Secret Menu** is a food product for Gen Z: an AI agent called **Coolie** who looks at what you
already have — fridge contents, minutes on the clock, mood, protein target — and hands you *one* thing
worth cooking. Not a recipe search engine, not a meal-plan subscription. A friend with a secret menu.

The aesthetic is deliberately loud: **Y2K meets Memphis**. Colour, line and shape are the primary
visual drivers; photography enters only as **transparent cutouts** of retro imagery and food, dropped
onto flat brand colour. Everything is outlined in ink and casts a hard, unblurred offset shadow, as if
the whole interface were printed stickers laid on a page.

## Sources given for this system

Everything in this system was built from a brief plus a folder of raw assets (no codebase, no Figma
file, no live site was supplied). Originals remain in `uploads/`; working copies are in `assets/`.

| Source | What it gave us |
| --- | --- |
| `uploads/Colors.jpg` | The nine-colour brand palette, hex verbatim. Copied to `assets/reference/Colors.jpg`. |
| `uploads/Roboto-*.ttf`, `uploads/RobotoMono-*.ttf` | The two typefaces, 14 static TTFs. From Google Fonts: <https://fonts.google.com/specimen/Roboto> and <https://fonts.google.com/specimen/Roboto+Mono>. |
| `uploads/Coolie_character_0[1-8].jpg` | Eight renders of the Coolie character — a young woman whose hair is built from food. White-background JPEGs. |
| `uploads/0[1-7]_section_transp*.webp` | Seven transparent food cutouts (mango, spinach, wrap, greens, etc.) used as section and side visuals. |
| `uploads/Asset {7,12,13,15,27,28}.svg`, `uploads/Y2K Futuristic Abstract Shapes Set-{23,31,198}.svg` | Nine monochrome Y2K shapes: asterisks, sparkles, stars, a starburst seal, a blob star, wireframe globes. This is the **entire** icon vocabulary. |
| `uploads/moodboard image 0[1-6]` | Reference for the target feel: full-bleed food-collage type (Ghetto Gastro), acid-green/pink Y2K grooming site, a neo-brutalist system sheet, a Chinese Y2K illustration site, a black/red/yellow brutalist studio page, and a set of Memphis-poster social tiles. |
| Brief (chat) | Product positioning, audience (Gen Z), Coolie's role as agent, "colours, lines and shapes are main visual drivers". |

**No logo file was supplied.** Per the rules of this system, none was drawn. The brand mark is
**typographic**: `COOLIE` set in Roboto ExtraBold caps at −0.045em tracking, with `SECRET MENU` in
Roboto Mono Bold caps at 0.3em beneath it, optionally preceded by the solid asterisk shape. See
`guidelines/brand-wordmark.html`. **If a real logo exists, drop it into `assets/logo.svg` and replace
the wordmark in `NavBar` and `Footer`.**

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts.css` (14 `@font-face` rules), `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `motion.css`, `patterns.css`, `base.css`. |
| `components/core/` | `Button`, `IconButton`, `ShapeIcon`, `Card`, `Tag`, `Badge`, `Marquee`, `SectionHeading` |
| `components/forms/` | `Input`, `Select`, `Checkbox`, `Switch`, `ChipGroup`, `SearchBar` |
| `components/feedback/` | `Dialog`, `Toast`, `ProgressMeter` |
| `components/navigation/` | `NavBar`, `Tabs`, `Footer` |
| `components/coolie/` | `CoolieAvatar`, `ChatBubble`, `RecipeCard`, `MacroStat`, `StickerFrame` |
| `templates/landing-page/` | Reusable Design Component template (`LandingPage.dc.html`) consuming projects can copy: sticker hero, ticker bands, step cards, cutout picks grid, character quote, CTA. Loads the system via `ds-base.js`. |
| `ui_kits/website/` | Click-through recreation of the whole product: home, browse, recipe, plan, chat. See its README. |
| `guidelines/` | 22 specimen cards (Colors, Type, Spacing, Shape, Brand). |
| `assets/fonts/` | The 14 TTFs the `@font-face` rules point at. |
| `assets/shapes/` | The nine Y2K SVGs, plus `shapes.js` (extracted geometry for inlining in plain HTML). |
| `assets/food/` | Seven transparent food cutouts. |
| `assets/character/` | Eight Coolie renders. |
| `assets/reference/` | Palette sheet + six moodboard images. Reference only — never ship these. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-Skills front matter for use outside this tool. |

Each component directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one
`@dsCard`-tagged HTML card showing its states.

### Intentional additions
No source enumerated a component inventory, so a standard set was authored and then trimmed to what
this product actually needs. Two families exist only because the brand demands them:
- **`ShapeIcon`** — a wrapper for the nine supplied Y2K SVGs. Without it, every consumer would
  hand-roll shapes, which is explicitly forbidden.
- **`Marquee`** — the ticker band is not a generic primitive, but it is this brand's section divider;
  it appears in three of the six moodboard references.

The `coolie/` group (`CoolieAvatar`, `ChatBubble`, `RecipeCard`, `MacroStat`, `StickerFrame`) is
product-specific rather than generic, and exists because those five patterns carry the character and
the food imagery — the two things no generic kit can supply.

---

## CONTENT FUNDAMENTALS

**Voice: Coolie herself.** Copy is written *as* the agent, in first person, talking to one person in
second person. She is a friend with opinions, not a wellness brand and not a chatbot.

| Rule | Yes | No |
| --- | --- | --- |
| First person singular, present tense | "I put the pepper in step three so it actually catches." | "Our AI has optimised your recipe." |
| Direct address, lower-case in chat | "tell coolie what you've got" | "Please enter your available ingredients." |
| Short. Verb first. | "Dump your fridge." | "Start by adding the ingredients you currently have." |
| Name the reality | "Eat out of the pan. Nobody is watching." | "Plate and garnish before serving." |
| Anti-diet-culture | "zero guilt", "no sad salads" | "guilt-free", "clean eating", "cheat day" |
| Numbers are concrete and mono-set | "12 min · 38g protein · 4 things" | "quick and nutritious" |

**Casing is a system, not a mood:**
- **Headlines**: ALL CAPS (applied by CSS `text-transform`, so author them lowercase or Title Case).
  Short, declarative, often split across three lines: `THE SECRET / MENU FOR / REAL LIFE`.
- **UI chrome** (buttons, tabs, tags, eyebrows, tickers): ALL CAPS mono with wide tracking.
- **Body copy**: normal sentence case, contractions welcome.
- **Chat + placeholders**: all lowercase — this is where Coolie sounds like a text message
  (`"i have tofu, lime and one sad pepper"`).

**Punctuation & rhythm:** full stops inside body copy; no exclamation marks; no ellipses except in
placeholders. Em dashes for the aside, never for hype. Numerals always as digits (`12 min`, not
`twelve minutes`).

**No emoji, ever.** The nine brand shapes replace them — a `sparkle-6` next to an eyebrow does the job
an ✨ would do, on brand. Two unicode glyphs are permitted, both inside mono contexts only: `✳` as the
marquee separator and `✓` inside a checked `Checkbox`.

**Length limits:** headline ≤ 5 words per line, 3 lines max. Eyebrow ≤ 40 characters. Button label
1–4 words. Body paragraph ≤ 3 sentences. Tag ≤ 14 characters.

**Naming things:** the product is "Coolie Secret Menu"; the agent is "Coolie" (she/her — the character
renders are unambiguous); a saved collection is "your secret menu"; the weekly plan is "your week".
Never "meal plan", never "assistant", never "AI-powered".

---

## VISUAL FOUNDATIONS

### Colour
**DS 003 replaces the original swatch-sheet ramp with scheme E, "Silver Candy".** The canvas is a
soft silver chrome, content sits on an ice white, and every signal is candy, lime or violet. Nine
values, no other hues exist. Everything else in `tokens/colors.css` is derived from them in
`oklch()` (press states, washes) or aliased semantically. The DS 002 names
(`--csm-magenta`, `--csm-acid`, `--csm-purple`, `--csm-pink`, `--csm-crimson`, `--csm-lavender`,
`--csm-paper`) still resolve — they are aliases onto the new ramp, so nothing downstream breaks.

| Token | Hex | Job |
| --- | --- | --- |
| `--csm-silver` | `#E8E8F0` | Chrome canvas. The default page and the category bands. |
| `--csm-ice` | `#F7FFFF` | Content surface: cards, open panels, anything that must read as "inside". |
| `--csm-candy` | `#FF43B5` | The loudest signal. Hot accents, one hot element per view. |
| `--csm-lime` | `#D9FF3F` | The interrupt. Highlight pills, badges, secondary action. |
| `--csm-aqua` | `#80E7ED` | Cool fill. The quiet category, info status. |
| `--csm-lilac` | `#AD8AFF` | Deep fill: closing bands, the heavier of two neighbouring cards. |
| `--csm-violet` | `#5C3BFF` | Action anchor: primary button, links, focus ring. |
| `--csm-ink` | `#111111` | **Every** outline, every shadow, dark sections, body text. |
| `--csm-white` | `#FFFFFF` | Text on violet only. Never a surface — surfaces use ice. |

Rules:
- **Three neutrals, and they are a hierarchy, not a grey scale:** silver is the canvas, ice is the
  content, ink is the line. If something needs to recede it goes on silver or takes `--text-muted`,
  never a new grey.
- **Max two background colours per page section**, and never two identical neighbours: the page rhythm
  runs silver → ink ticker → ice → lilac.
- **Status maps onto the ramp** (`--status-good` = lime, `--status-warn` = a darker candy derived in
  oklch, `--status-info` = aqua, `--status-hype` = candy). No green, no red, no blue enters the system.
- **Text colour on a fill is calculated, never assumed.** Any brand fill can land in any card slot,
  so contrast is derived from the fill's relative luminance at render time (`readableOn()`) and only
  then falls back to ink. Candy, lime, aqua and lilac all take ink; violet takes white.
- **No gradients.** Not in backgrounds, not in buttons, not as "protection" behind text. Flat fills
  only. Where text must sit over an image, it sits inside a **solid capsule or card** — never a
  scrim gradient.

### Type
Roboto and Roboto Mono, shipped as local TTFs (`tokens/fonts.css`). Three registers, never mixed up:

1. **Display — Roboto ExtraBold (800), ALL CAPS, tracking −0.02 to −0.035em, leading 0.86–0.95.**
   Sizes clamp from 28px to 132px. Tight enough that letters nearly touch; the leading is
   deliberately sub-1 so three stacked lines read as a block.
2. **Body — Roboto Regular/SemiBold (400/600), sentence case, leading 1.5–1.55, measure 64ch max.**
   19px lead paragraphs, 16px default, 14px captions.
3. **Mono — Roboto Mono Bold (700), ALL CAPS, tracking 0.10–0.18em.** All UI chrome: buttons, tabs,
   tags, eyebrows (11px/0.18em), tickers (15px/0.10em), and every number-with-unit.

Never italic. Never a third family. Never mono for body copy or Roboto for a button label. Minimum
type size anywhere is 11px, and only for mono eyebrows.

### Spacing & layout
4px base (`--space-1`) through `--space-6` (32px), then chunky jumps: 48 / 64 / 96 / 128 for section
rhythm. Section padding is `clamp(56px, 7vw, 112px)` vertical, `clamp(16px, 4vw, 56px)` horizontal.
Max content width 1440px. Card padding 24px, stack gap 12px, chip gap 8px, grid gutter 24px.

Layout is a **hard grid, broken on purpose**: content sits on a 12-column-feeling grid, and then one
element per section (a badge, a sticker frame, a shape) breaks out past the edge with negative
margins. Nothing is centred except CTA sections and the marquee. Sticky elements: the browse
filter sidebar (`position:sticky; top:var(--space-5)`) and the toast stack
(`position:fixed; bottom/right: var(--space-5)`). Nothing else is fixed — no sticky header.

### Width architecture
The product does not reflow between desktop widths — it **scales**, so a composition approved at
1440 stays that composition.
- **≥1440px:** no scaling. The content track is fixed at 1440 and the gutter grows with the viewport.
- **1152–1440px:** the whole page scales proportionally. Nothing rewraps.
- **<1152px:** scaling stops and the frame takes a horizontal scrollbar. Provisional, until the
  mobile design lands.
- Fluid geometry underneath stays intact as a fallback grid (a recipe card can still go vertical).
- A hero may own its own 1440 stage while its background runs full-bleed.

### Decorations in the margin
Brand shapes and retro objects live in the gutter, outside the 1440 track.
- They are **fixed size** and step further toward the centre of the gutter as it grows — the offset
  formula is wrapped in `max()` so it can only ever increase, never pull an object inward.
- Every decoration inside the track keeps **at least a third of its body within 1440**, so nothing
  reads as accidentally clipped.
- Retro objects (photographic cutouts) float on a `csm-bob` loop, each at a different period so the
  margin never pulses in unison. Shapes `spin`; objects bob. Not both on one element.

### Borders, radii, shadows
- **Borders:** `3px solid var(--csm-ink)` is the default outline on essentially every surface
  (`--border-hard`). 2px for small pills, 5px for statement blocks, 1px `--line-soft` **only** inside
  dense data rows. Never a coloured border except `--line-hot` (magenta) for emphasis.
- **Radii:** pill (`999px`) or square (`0`), with 6 / 14 / 28px for cards. Nothing in between, and
  never a mixed radius on one element — except `ChatBubble`, which squares exactly one corner to
  point at its speaker. `--radius-blob` exists for the one-off organic frame.
- **Shadows:** offset and **never blurred** — `3px 3px 0`, `6px 6px 0`, `10px 10px 0` in ink, plus
  magenta and acid variants. This *is* the elevation system. **Exactly one blurred shadow exists**
  (`--shadow-float`) and it is reserved for floating overlays; the modal scrim is the only place
  `backdrop-filter: blur(3px)` appears in the whole system.
- **Transparency:** used only for decorative shape watermarks (a `globe-wire` at 10–18% behind a
  hero) and the modal scrim (`rgba(20,26,27,.55)`). Surfaces are never translucent; no frosted glass.

### States
- **Hover:** lift `translate(-2px,-2px)` and grow the shadow (6px → 10px). Colour does **not** change
  on hover — geometry does. Cards do the same. Links change colour purple → magenta.
- **Press:** drop into the shadow — `translate(4px,4px)` with a 2px shadow, plus a darker fill from
  the oklch press tokens. The button physically bottoms out.
- **Selected:** invert to ink fill with paper text (chips, tabs) or take an acid fill with an outline
  (active nav link).
- **Disabled:** `opacity:.4`, shadow removed, no transform. Never greyed out with a new colour.
- **Focus:** `3px solid var(--focus-ring)` (purple) at `outline-offset:2px`. Always visible, never
  removed.

### Motion
Snappy and springy, never a slow fade. 80ms instant, **140ms `--ease-snap` for all controls**, 220ms
`--ease-pop` (an overshoot curve) for entrances, 420ms `--ease-out` for meters and layout, 26s linear
for marquees, 14s linear for slow shape spins. Entrances use `csm-pop-in` (scale 0.9 → 1 with a
translate) — things arrive with a bounce. Available keyframes: `csm-marquee`, `csm-spin`,
`csm-pop-in`, `csm-wobble`. Everything is disabled under `prefers-reduced-motion`.

### Backgrounds & patterns
Four repeating patterns in `tokens/patterns.css`, **one per section, never layered**: a 44px pink
grid, a 28px ink checkerboard, 16px ink dots on lavender, and 135° ink stripes. Behind them, one or
two brand shapes at very low opacity, sometimes slowly spinning. No photographic background is ever
full-bleed — the moodboard's full-bleed food collage (moodboard 01) is reinterpreted here as
**cutouts on flat colour**, because the supplied food assets are transparent PNGs/WebPs.

### Imagery
- **Food** arrives as transparent cutouts, dropped into a `StickerFrame` or a `RecipeCard` image
  well: flat brand colour behind, 3px ink outline, tilted ±2–5°, one brand shape breaking a corner.
- **Coolie** arrives as one of eight white-background renders; components `mix-blend-mode: multiply`
  her over the backing colour so the white disappears.
- **Colour vibe:** the cutouts are warm, saturated, high-key, no grain, no filter — they are meant to
  clash cheerfully with the acid/magenta fills. Never desaturate, never duotone, never add grain.
- A rectangular photograph is never placed flush in a layout. If it has no frame, it does not ship.
- Alternate the wash colour across a grid so no two neighbouring tiles share a backing colour.

### Cards
Flat brand fill, 3px ink border, 14px radius, `6px 6px 0` ink shadow, 24px padding. Optional ±2–3°
tilt — **at most one tilted card per cluster**. Interactive cards lift on hover. No card ever uses a
blurred shadow, a gradient, or a coloured left border.

**Flip cards.** A card that turns on hover carries the hover on a **stationary outer frame**; putting
it on the moving face makes the card flicker between states. The front face never shows the arrow —
the arrow belongs on the back, next to the destination label. And the back's promise must be kept:
a flip card links to the **named** destination it just showed, never to a random one.

---

## ICONOGRAPHY

**There is no icon font and no icon library. The 21 supplied Y2K shapes are the entire vocabulary.**

DS 003 adds twelve shapes to the original nine. They live in `assets/shapes/` as monochrome SVGs and
their geometry is embedded in `components/core/ShapeIcon.jsx` (fills normalised to `currentColor`) so
any brand colour works. They are organised in six families, and the family decides the job:

| Family | Shapes | Job |
| --- | --- | --- |
| Marks | `asterisk-solid` · `asterisk-outline` · `spark-cross` | The brand's stand-in mark, beside the wordmark in `NavBar` and `Footer`. |
| Sparkles | `sparkle-6` · `sparkle-4` · `sparkle-pair` · `crosshair-sparkle` · `starburst-fine` | The "Coolie is thinking" signal: beside eyebrows, inside the search field. `starburst-fine` is the delicate one — large sizes only. |
| Stars | `star-8` · `star-5` · `star-cushion` | Inside buttons; breaking a card corner. `star-5` is the hand-drawn, off-axis one. |
| Seals | `burst-seal` · `blob-star` · `cushion` | Bodies of `Badge` seals ("NEW", "AI PICK") and small frames. `cushion` also works as a plain content frame. |
| Blooms | `cloud-blob` · `daisy` · `slab-quarters` · `pinwheel` | Large flat fills behind a section, and category markers. `slab-quarters` and `pinwheel` are the Memphis pair — square-cornered, so they anchor a corner rather than float. |
| Orbits | `globe-wire` · `globe-oval` · `atom-x` | Decorative watermarks at 10–18% opacity, often `spin`ning slowly behind a hero or in a sidebar. |

Rules for the additions:
- **One shape per family per view.** Two sparkles in one composition is a soup; a sparkle and a star
  is a rhythm.
- Blooms are for **fills at 120px and up** — they lose their silhouette small. Marks and sparkles are
  the only shapes allowed under 30px.
- Colour a shape from the ramp, never from outside it; watermarks stay ink at low opacity.

Rules:
- No emoji. No third-party icon set (no Lucide, no Heroicons, no Material) — a CDN substitution was
  considered and **rejected**: a stroke-based UI icon set would fight the brand's solid-shape
  language.
- Two unicode glyphs are permitted in mono contexts only: `✳` (marquee separator) and `✓` (checked
  box). Arrows in buttons use `←` / `▼` as type, not as icons.
- **Do not hand-draw new SVGs.** If an interface needs a glyph these 21 cannot express (a play
  triangle, a trash can), that is a gap to report and have the brand supply — not to improvise.
- In plain (non-React) HTML, either `<img src="assets/shapes/star-8.svg">` for ink-coloured use, or
  inline the geometry from `assets/shapes/shapes.js` and set `color:` for recolouring. CSS
  `mask-image` works in browsers but is dropped by some rasterisers, so inlining is preferred for
  anything that will be screenshotted or exported.

---

## Known gaps / to confirm

0. **DS 003 shipped colour and icons only.** The guideline specimen cards under `guidelines/` and
   the `ui_kits/website/` recreation still render the DS 002 ramp and the original nine shapes; they
   were deliberately left out of this pass and will read as stale until they are regenerated.
1. **No logo.** The wordmark is typographic. Supply `assets/logo.svg` if a mark exists.
2. **Fonts are the real thing** — the supplied Roboto / Roboto Mono TTFs, no substitutions. Roboto is
   variable on Google Fonts; only the static weights 400/600/700/800 (+ italics) were provided, so
   the system uses exactly those four weights.
3. **Cutout inventory is thin** — seven food cutouts for a recipe product. More cutouts (proteins,
   grains, drinks) would let recipe grids stop repeating.
4. **No slide template was supplied**, so no sample slides were authored.
5. **Character expressions** — the eight renders read as subtle variations (neutral, surprised,
   smiling). Named emotional states would make `CoolieAvatar` far more useful in chat.
