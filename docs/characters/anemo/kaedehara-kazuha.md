---
description: A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.
---

import char from '@site/src/data/characters/Kaedehara_Kazuha.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Kaedehara Kazuha

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kaedehara_Kazuha.png')} alt="Kaedehara Kazuha's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Kazuha Written Guide: Scarlet Leaves Pursue Wild Waves](https://keqingmains.com/kazuha/)
* [6 Minute Video Guide to Kazuha](https://youtu.be/QpaxtAxTJuA)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String              | Talent 9%           | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------------ | :------------------ | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG           | 82.63%              | 22     | 225.35%/s | 47.7         | 3            |
| 2-Hit DMG           | 83.11%              | 26     | 191.79%/s | 47.34        | 3            |
| 3-Hit DMG           | 47.4% + 56.88%      | 41     | 152.60%/s | 29.7 x2      | 3 x2         |
| 4-Hit DMG           | 111.55%             | 46     | 145.50%/s | 63.54        | 3            |
| 5-Hit DMG           | 46.61% x3 (139.83%) | 80     | 104.87%/s | 26.55 x3     | 2 + 2 + 5    |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9%     | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------------- | :------------ | :----- | :-------- | :----------- | :----------- |
| Charged Attack DMG | 79% + 137.14% | 55     | 135.79%/s | 60 x2        | 2 + 6        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| String          | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 150.35%   | 25           | 2            |
| Low Plunge DMG  | 300.63%   | 100          | 4            |
| High Plunge DMG | 375.50%   | 150          | 7            |

</div>

**Notes**

* Kazuha cannot strike enemies that are lifted by Venti's Elemental Burst.
* Kazuha's N5 attack can be used to [dragonstrike](../../evidence/characters/anemo/kaedehara-kazuha.md#dragonstrike-of-n5).
* Kazuha's 2-hit N3 is "not linked" but his 3-hit N5 is "linked" when it comes to [Echoes of an Offering](../../equipment/artifacts.md#echoes-of-an-offering). For more information see this [Vault Entry](../../evidence/equipment/artifacts.md#kazuha-na-interaction-with-echoes).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<div>
<Skill char={char} skill='e' sectionFilter='' />
<Skill char={char} skill='e' sectionFilter='Press' />
<Skill char={char} skill='e' sectionFilter='Hold' />
</div>

| Attribute         | Tap           | Hold        |
| :---------------- | :------------ | :---------- |
| Skill DMG \(T9%\) | 326.4%        | 443.36%     |
| Particles         | 3             | 4           |
| GU                | 1U            | 2U          |
| ICD               | None          | None        |
| Damage Element    | Anemo         | Anemo       |
| Damage Type       | Skill         | Skill       |
| CD                | 6s            | 9s          |
| Poise Damage      | 150           | 300         |
| Impulse Type      | Air, 100, 800 | Air, 0, 800 |

</div>
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Plunging Attack: Midare Ranzan' />

| Attribute                    | Midare Ranzan     |
| :--------------------------- | :---------------- |
| Plunge Collision DMG \(T9%\) | 150.35%           |
| Low/High Plunge DMG \(T9%\)  | 300.63% / 375.50% |
| GU                           | 1U                |
| ICD                          | None              |
| Damage Element               | Anemo             |
| Damage Type                  | Plunge            |
| Plunge Poise Damage          | 25                |
| Plunge Impulse Type          | 1                 |
| Low/High Plunge Poise Damage | 100 / 150         |
| Low/High Impulse Type        | 7                 |

</div>

**Notes**

* Kazuha's **Chihayaburu** (Hold) can cause certain enemies to take Fall DMG.
* By double tapping your glider as soon as you've tapped your Skill on Kazuha, you can shorten the air time thereby landing on the ground a little bit faster if you don't intend to plunge (for example if you want to reapply VV shred to some Frozen enemies but you don't want to Shatter them).
* Some forms of interruption after casting **Chihayaburu** may cause the ability to cast **Midare Ranzan** to persist up to 10s without remaining airborne.
* Plunging immediately after a tap E guarantees a high plunge while waiting might give low plunge damage.
* Absorption priority: Pyro > Hydro > Electro > Cryo
* Kazuha E will, under certain conditions, fail to absorb self auras
* **Midare Ranzan** does not have a minimum height limit, meaning Kazuha can start the Plunging Attack a lot lower than a regular Plunging Attack.
* **Midare Ranzan** can be considered as an Anemo Infusion which cannot be overridden by other Infusions.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect            | Slash         | DoT           | Elemental DMG    |
| :---------------- | :------------ | ------------- | :--------------- |
| Skill DMG \(T9%\) | 446.08%       | 204%          | 61.2%            |
| GU                | 2U            | 1U            | 1A               |
| ICD               | None          | None          | None             |
| Snapshot          | Snapshot      | Snapshot      | Snapshot         |
| Damage Element    | Anemo         | Anemo         | Absorbed Element |
| Damage Type       | Burst         | Burst         | Burst            |
| Energy Cost       | 60            | -             | -                |
| Duration          | 8s            | -             | -                |
| CD                | 15s           | -             | -                |
| Poise Damage      | 75            | 25            | -                |
| Impulse Type      | Light, 0, 100 | Light, 0, 100 | -                |

</div>

**Notes**

* Absorption priority: Pyro > Hydro > Electro > Cryo

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Kaedehara_Kazuha.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

| Type           | Soumon Swordsmanship |
| :------------- | :------------------- |
| Skill DMG      | 200%                 |
| GU             | 1A                   |
| Damage Element | Absorbed Element     |
| Damage Type    | Plunge               |

**Notes**

* The Elemental damage is applied before Midare Ranzan, allowing it to Swirl without a pre-existing aura on enemies, additionally this also means that the applied aura can react with pre-existing aura, potentially resulting in no Swirl.
* Absorption priority: Pyro > Hydro > Electro > Cryo

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* Kazuha's 4th ascension passive works off-field and only gives bonus damage on swirled elements.
* Kazuha's 4th ascension passive will reflect his Elemental Mastery from the time of the Swirl, even if his Elemental Mastery later changes during its duration.
* Kazuha's 4th ascension passive overrides previous instances on every Swirl of the same Element, using his current Elemental Mastery.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* Sucrose's A4 shares 20% of EM from this Constellation.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* The Energy gained while gliding is not affected by Energy Recharge.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* The Anemo infusion can be overridden by other infusion effects such as Bennett's C6 Inspiration Field.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/kaedehara-kazuha.md')} />
