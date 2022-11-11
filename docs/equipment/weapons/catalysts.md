import Weapon from '@site/src/components/weapon/Weapon'
import catalysts from '@site/src/data/weapons/Catalyst.json'

# Catalysts

## 5 Stars

### A Thousand Floating Dreams

<Weapon weapon="A Thousand Floating Dreams" weapons={catalysts} />

### Everlasting Moonglow

<Weapon weapon="Everlasting Moonglow" weapons={catalysts} />

### Kagura's Verity

<Weapon weapon="Kagura's Verity" weapons={catalysts}>

* Stacks refresh on stack gain and act as one.
* Stacks are gained upon initial input, not on hit.
* Stacks are dynamic and can't be snapshotted.
* The Elemental Skill that triggers a stack is also affected by it.
* Klee can gain 2 stacks by casting 1 E with a double tap and no other actions are performed within ~81 frames afterwards.

</Weapon>

### Lost Prayer to the Sacred Winds

<Weapon weapon="Lost Prayer to the Sacred Winds" weapons={catalysts}>

* Lost Prayer does not reset upon leaving combat, ONLY upon switching to a different character or if the character is defeated - [Konbo\#0004](../../evidence/equipment/weapons.md#lost-prayer-to-the-sacred-winds)
* The buff timer starts ticking and continues ticking whether the holder is on the field or not. However the character only gains a stack every 4 seconds if that character is on field.

</Weapon>

### Memory of Dust

<Weapon weapon="Memory of Dust" weapons={catalysts}>

* Xingqiu's Rain Swords do not count as a shield for Memory of Dust - [＃＃\#0123](../../evidence/equipment/weapons.md#analysis-of-whether-xingqiu-e-q-counts-as-a-shield-for-memory-of-dust-and-bolide)
* Hits that can gain stacks include Normal Attack, Charged Attack, Elemental Skill, and Elemental Burst hits. - [CQLQRS#7853 and Dunia#2481](../../evidence/equipment/weapons.md#weapon-stacks-on-hit)
* MoD can gain stacks on zero-damage attacks. - [Kolibri\#7675, Xreejan\#1180, Phana\#0420](../../evidence/equipment/weapons.md#weapon-stacks-and-zero-damage-attacks)

</Weapon>

### Skyward Atlas

<Weapon weapon="Skyward Atlas" weapons={catalysts}>

* Skyward Atlas's passive can crit.

</Weapon>

## 4 Stars

### Blackcliff Agate

<Weapon weapon="Blackcliff Agate" weapons={catalysts}>

import BlackcliffSeries from './\_common/blackcliff_series.md';

<BlackcliffSeries/>

</Weapon>

### Dodoco Tales

<Weapon weapon="Dodoco Tales" weapons={catalysts} />

### Eye of Perception

<Weapon weapon="Eye of Perception" weapons={catalysts} />

### Favonius Codex

<Weapon weapon="Favonius Codex" weapons={catalysts}>

import FavSeries from './\_common/fav_series.md';

<FavSeries/>

</Weapon>

### Frostbearer

<Weapon weapon="Frostbearer" weapons={catalysts} />

### Fruit of Fulfillment

<Weapon weapon="Fruit of Fulfillment" weapons={catalysts} />

### Hakushin Ring

<Weapon weapon="Hakushin Ring" weapons={catalysts}>

* Buff applies to the holder - [jas\#8888](../../evidence/equipment/weapons.md#hakushin-ring-can-buff-the-holder)
* Crytallize, Swirl and Swirl chain reactions work for the effect - [ProfHugo\#6478](../../evidence/equipment/weapons.md#crystalize-swirl-and-swirl-chain-reactions-work-for-the-effect)
* Buff does not get refreshed - [ProfHugo\#6478](../../evidence/equipment/weapons.md#gaining-a-new-buff-does-not-refresh-duration)
* Buff does not trigger when the character equipped with **Hakushin Ring** is off-field - [Greyhound\#7836 and Terrapin\#8603](../../evidence/equipment/weapons.md#hakushin-ring-doesnt-trigger-off-field)

</Weapon>

### Mappa Mare

<Weapon weapon="Mappa Mare" weapons={catalysts} />

### Oathsworn Eye

<Weapon weapon="Oathsworn Eye" weapons={catalysts}>

* The Passive does not stack when casting the Elemental Skill multiple times within 10s, but the duration is refreshed.
* Works off-field.
* Increases Hydro% from [Mona A4](../../characters/hydro/mona.md#ascension-passives).

</Weapon>

### Prototype Amber

<Weapon weapon="Prototype Amber" weapons={catalysts}>

* HP regeneration is based off the Max HP of the character being healed, not the max HP of the character equipped with **Prototype Amber** - [Reens#9389](../../evidence/equipment/weapons.md#prototype-amber-healing-clarification)
* HP regeneration does not stack when multiple characters use Prototype Amber. The second one overrides the first one.
* HP regeneration is affected by Healing Bonus and Incoming Healing Bonus - [RoaringMeow#2437](/evidence/equipment/artifacts#maiden-beloved)

</Weapon>

### Royal Grimoire

<Weapon weapon="Royal Grimoire" weapons={catalysts}>

import RoyalSeries from './\_common/royal_series.md';

<RoyalSeries/>

</Weapon>

### Sacrificial Fragments

<Weapon weapon="Sacrificial Fragments" weapons={catalysts}>

import SacSeries from './\_common/sac_series.md';

<SacSeries/>

</Weapon>

### Solar Pearl

<Weapon weapon="Solar Pearl" weapons={catalysts} />

### The Widsith

<Weapon weapon="The Widsith" weapons={catalysts}>

* The Passive remains active even when the character is swapped out.
* When entering the second half of a Spiral Abyss chamber, if the wielder is in the first slot the buff timer will start during the loading screen.

</Weapon>

### Wandering Evenstar

<Weapon weapon="Wandering Evenstar" weapons={catalysts}>

* Evenstar buff begins 64 frames after it's equipped, all timers are reset when removed or when enter/exit domains \(including challenge again, abyss try again, etc.\), allowing the buff to reapply 64 frames after re-equipping or enter/exit domains regardless of the previous timer.

</Weapon>

### Wine and Song

<Weapon weapon="Wine and Song" weapons={catalysts} />

## 3 Stars

### Emerald Orb

<Weapon weapon="Emerald Orb" weapons={catalysts} />

### Magic Guide

<Weapon weapon="Magic Guide" weapons={catalysts}>

import BaneSeries from './\_common/bane_series.md';

<BaneSeries/>

</Weapon>

### Otherworldly Story

<Weapon weapon="Otherworldly Story" weapons={catalysts}>

* HP restored is affected by Healing Bonus and Incoming Healing Bonus - [Daibangden#8410](/evidence/equipment/weapons.md#weapons-and-heals)

</Weapon>

### Thrilling Tales of Dragon Slayers

<Weapon weapon="Thrilling Tales of Dragon Slayers" weapons={catalysts}>

* The Passive remains active even when the character is swapped out.

</Weapon>

### Twin Nephrite

<Weapon weapon="Twin Nephrite" weapons={catalysts} />

## 2 Stars

### Pocket Grimoire

<Weapon weapon="Pocket Grimoire" weapons={catalysts} />

## 1 Stars

### Apprentice's Notes

<Weapon weapon="Apprentice's Notes" weapons={catalysts} />

## Catalyst Comparison

**By:** [Maygi\#4987](../../evidence/equipment/weapons.md#catalyst-effective-attack-comparisons)

[Imgur](https://imgur.com/a/TpQsJqS)

* Low Stat = 10 substat lines
* Med Stat = 20 substat lines
* High Stat = 30 substat lines

## External Links

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Catalysts)

## Evidence Vault

<Card item={require('../../evidence/equipment/weapons.md')} />
