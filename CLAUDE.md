# Coolie Secret Menu — dogovori projekta

Glavni file: `Coolie Secret Menu Hi-Fi.dc.html`. Wireframeovi: `Coolie Secret Menu Wireframes.dc.html`.
Podaci recepata: `data/coolie-recipes.js` (generiran iz `uploads/*-struktura.md`).

## Sadržaj — neprekršivo

- Tekst recepata se prenosi **doslovno** iz .md fileova. Ne skraćivati, ne preformulirati.
- Struktura po receptu je varijabilna: 1–3 hacka, fusnota i vlakna postoje samo gdje ih .md ima.
- Kad se .md mijenja, `data/coolie-recipes.js` se regenerira parsiranjem — ne ručno.
- Emoji iz .md naslova se strippaju (design system ih zabranjuje).
- Tekst bonus kartica živi u logici (`CARDS`), ne u .md.

## Arhitektura širine

- **≥1440 px**: bez skaliranja. Staza 1440, žlijeb raste s ekranom.
- **1152–1440 px**: cijela stranica se **proporcionalno skalira** (`applyScale` u logici). Bez prelamanja — kompozicija s 1440 ostaje identična.
- **<1152 px**: skaliranje se zaustavi, okvir dobiva horizontalni scroll. Privremeno, do mobilnog dizajna.
- Fluid geometrija ispod svega ostaje kao mreža (kartica recepta zna preći u vertikalu).
- Hero ima vlastitu 1440 pozornicu; njegova pozadina je full-bleed.

## Dekoracije u margini

- **Fiksna veličina**, odmiču se prema centru žlijeba kako on raste.
- Formula ima `max()` zaštitu: odmak može samo rasti, nikad privući element bliže.
- Svaka dekoracija unutar staze ima najmanje trećinu tijela unutar 1440.
- Retro objekti (`assets/y2k/`) lebde s `csm-bob`, u različitim ritmovima.

## Boje

- Aktivna shema: **E — Silver Candy**. Ostale (A–D) su zadržane za usporedbu.
- Boja teksta na karticama se **izračunava iz podloge** (`readableOn`), ne pretpostavlja.
- Ide u update design systema zajedno s novim ikonama iz `assets/shapes/`.

## Bonus kartice (ispod accordiona)

- Hover okreće karticu; hover stoji na **vanjskom okviru koji se ne miče** (inače treperi).
- Klik vodi na **imenovani recept**, nikad na random — obećanje s poleđine se mora ispuniti.
- Prednja strana bez strelice; strelica je na poleđini uz "VODI NA".

## Otvoreno

- Hero: disko rola stoji preko "Coolie", jaje je skriveno iza pilla "NOVI NAČIN KUHANJA".
- Mobilni dizajn (<1152) — postoje wireframeovi.
- Update design systema: boje sheme E, nove ikone, ova pravila. Guideline cardove i UI kit preskočiti.
- Sekcije Večera i Desert imaju po 2 recepta u prvoj podsekciji (simulacija), ostalo čeka .md.
