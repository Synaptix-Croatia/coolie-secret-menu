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

- Mjerenje širine ide **isključivo** s vanjskog "gauge" elementa (`setGauge`) kojemu nitko nikad ne mijenja overflow, visinu ni transform. To je ono što je razbilo staru povratnu petlju (mjerenje → overflow → clientWidth → mjerenje) i treperenje oko 1167–1182 px.
- **Hero i footer su pravi responsive layout u svim režimima** i **nisu potomci skaliranog elementa**.
- **Skalira se samo accordion pozornica** (sekcija `#menu`, s dekoracijama u istom koordinatnom sustavu), i to između 1152 i 1440 px.
- Skaliranje koristi **`zoom`, ne `transform: scale()`** — zoom skalira layout, pa wrapper sam dobije ispravnu visinu. Nema JS upisa visine (to je bio drugi izvor petlje).
- Režimi: **≥1440** desktop kako je autorirano · **1152–1439** zoomirana accordion pozornica · **768–1151** pravi tablet reflow · **<768** pravi mobile reflow. Nigdje horizontalnog scrolla.
- `applyScale` i `renderVals` dijele istu funkciju `regime(w)` — nijedan render ne može naslikati drugi režim od onog koji je primijenjen.
- Sekcija `#menu` ima `overflow: clip` (ne `hidden`) — zadržava zarotirane kutove dekoracija, a ne postaje scroll container, pa sticky kičme kategorija rade.

## Ilustrativne kompozicije (hero i footer)

- Isti princip u obje sekcije: container (max 1440) → grid s dva stupca → lijevo tekstualna cjelina, desno ilustrativna grupa.
- Naslov je **uvijek u tri retka**: `Coolie` (Roboto 800) / `SECRET` / `MENU` (Remock), lijevo poravnano. CTA je vezan razmakom na oznake, ne pinnan na dno.
- Grupa ilustracija ima **vlastite lokalne koordinate**: `position: relative` + `aspect-ratio`, predmeti apsolutno u **procentima grupe**. Uža grupa = ista kompozicija, manja. Zato se veličine ne diraju po režimu — samo `max-width` grupe.
- Rotacija i `csm-bob` idu na **unutarnji** element (`art-motion`), da animacija ne prepiše pozicioniranje vanjskog.
- Hero: Coolie crop 01, mikser (povećan), vaga, šerpa juhe, cvijet/orbite/asterisk. Bez jajeta i manga.
- Footer: Coolie crop 02, rola gore lijevo, tortica desno, kazetofon dolje lijevo, namaz dolje desno. Potpis ima vlastiti prostor ispod kompozicije.
- Na mobitelu ilustrativna grupa dolazi **ispod** teksta; hero smije biti viši od jednog ekrana.

## Dekoracije uz accordion

- Mlinac (lijevo, donji dio) i sladoled (desno, gornji dio) su **dvije grupe**, sidrene na **stvarne vanjske rubove accordiona**, s vertikalnom pozicijom u % visine accordiona.
- Odmak: `min(20px, side - širina grupe)` — na širokom ekranu 20 px od accordiona, a kad prostora nema, grupa se podvlači iza accordiona i vidi se samo sliver uz rub stranice. Nikad ne prelazi rub stranice (bez horizontalnog scrolla).
- `--side` se računa iz `--shellw` (1440 unutar zoomirane pozornice, stvarna širina inače), nikad iz `100vw`.
- Nema više fiksnih koordinata tipa `left: 104px` / `right: 140px`. Accordion je iznad dekoracija, s neprozirnim podlogama; dekorativni sloj ima `pointer-events: none`.

## Boje

- Aktivna shema: **E — Silver Candy**. Ostale (A–D) su zadržane za usporedbu.
- Boja teksta na karticama se **izračunava iz podloge** (`readableOn`), ne pretpostavlja.
- Ide u update design systema zajedno s novim ikonama iz `assets/shapes/`.

## Bonus kartice (ispod accordiona)

- Hover okreće karticu; hover stoji na **vanjskom okviru koji se ne miče** (inače treperi).
- Klik vodi na **imenovani recept**, nikad na random — obećanje s poleđine se mora ispuniti.
- Prednja strana bez strelice; strelica je na poleđini uz "VODI NA".

## Otvoreno

- Fino optičko usklađivanje veličina predmeta u hero i footer grupama (procenti su početne vrijednosti).
- Update design systema: boje sheme E, nove ikone, ova pravila. Guideline cardove i UI kit preskočiti.
- Sekcije Večera i Desert imaju po 2 recepta u prvoj podsekciji (simulacija), ostalo čeka .md.
