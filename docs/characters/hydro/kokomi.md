---
description: The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.
---

import char from '@site/src/data/characters/Sangonomiya_Kokomi.json'
import { getSkillName } from '@site/src/utils/skill'

# Sangonomiya Kokomi

![](/img/characters/gacha/Sangonomiya_Kokomi.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Sangonomiya Kokomi: Pearl of Wisdom](https://keqingmains.com/kokomi/)
* [Kokomi Quick Guide](https://youtu.be/FAI39xYCMgo)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<h3>{getSkillName(char, 'na')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String        | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------ | :-------- | :----- | :-------- | :-- | :----------- | :----------- |
| 1-Hit         | 116.24%   | 10     | 697.44%/s | 1A  | 12.82        | 1 / 3\*      |
| 2-Hit         | 104.62%   | 36     | 368.1%/s  | 1A  | 11.53        | 1 / 3\*      |
| 3-Hit         | 160.32%   | 82     | 278.65%/s | 1A  | 17.68        | 1 / 3\*      |
| With Recovery | -         | 122    | 141.8%/s  | -   | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9% | Frames | MV/s    | GU  | Poise Damage | Impulse Type      |
| :----------------- | :-------- | :----- | :------ | :-- | :----------- | :---------------- |
| Charged Attack DMG | 252.14%   | 45     | 336.19% | 1A  | 100          | 1 / Air, 0, 600\* |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | GU  | Poise Damage | Impulse Type |
| :-------------- | :-------- | :-- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | -   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 1A  | 50           | 3            |
| High Plunge DMG | 260.76%   | 1A  | 100          | 4            |

</div>

\* During her Elemental Burst, **Ceremonial Garment**.

**Notes**

* Kokomi's Normal Attacks...
  * Apply hydro and share a 3 hit / 2.5s ICD.
  * Have a range of ~6 tiles before it stops auto-targetting.
  * Hit in a small AoE.
* Kokomi's 2nd Normal Attack sometimes has a delay before it comes out. This delay is inconsistent, but can usually be mitigated by performing Dash or Jump cancel.
* Kokomi's Charged Attack applies hydro and has no ICD.
* Kokomi's Low/High Plunge Attacks apply hydro and have no ICD.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute          | Skill                    |
| :----------------- | :----------------------- |
| Ripple DMG \(T9%\) | 185.62%                  |
| Particles          | 0~1 (1:2)                |
| Frames             | 66 (51 with Dash Cancel) |
| GU                 | 1A                       |
| ICD                | None                     |
| Snapshot           | Snapshot                 |
| Damage Element     | Hydro                    |
| Damage Type        | Skill                    |
| HP Regen \(T9%\)   | 7.48% Max HP + 862       |
| Duration           | 12s                      |
| Tick Rate          | 2s                       |
| Cooldown           | 20s                      |
| Poise Damage       | 50 / 100\*               |
| Impulse Type       | 1                        |

</div>

\* During her Elemental Burst, **Ceremonial Garment**.

**Notes**

* Does a 0~1 (1:2) check once on every instance of damage **Bake-Kurage** does as long as it stays on the field.
  * If **Bake-Kurage** disappears before its final tick hits an enemy, the game will not check for particle production on that hit.
* **Bake-Kurage**'s range has a radius of ~2.5 tiles.
* Kokomi is limited to one **Bake-Kurage** on-field at a time.
* **Bake-Kurage** snapshots on **Kurage's Oath** cast and does not resnapshot upon **Nereid's Ascension** triggering the duration refresh effect from her Ascension 1.
* In most cases, the damage bonus from **Ceremonial Garment** is a dynamic stat and thus does not get snapshot by **Bake-Kurage**. However, if Kokomi immediately switches after casting **Kurage's Oath**, the damage bonus from **Ceremonial Garment** is snapshot by **Bake-Kurage**.
* Casting **Kurage's Oath**, even when interrupted, will still trigger Artifact set effects that trigger on Elemental Skill cast.
* Tech: It is possible to snapshot the damage bonus from **Nereid's Ascension** for **Bake-Kurage** by casting E, being in Q, and swapping off before the first tick of the E. Using a simple application of this, it is possible to maintain 100% uptime on the Q bonus for E just by timing your rotations.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst         |
| :---------------- | :------------ |
| Skill DMG \(T9%\) | 17.71% Max HP |
| Cast Frames       | 75            |
| Energy Frame      | 57            |
| CD Frame          | 48            |
| GU                | 2B            |
| ICD               | None          |
| Snapshot          | Dynamic       |
| Damage Element    | Hydro         |
| Damage Type       | Burst         |
| Energy Cost       | 70            |
| Cooldown          | 18s           |
| Poise Damage      | 250           |
| Impulse Type      | 3             |

</div>

| Attribute                | Buff (Talent 9%)   |
| :----------------------- | :----------------- |
| Normal Attack DMG Bonus  | 8.23% Max HP       |
| Charged Attack DMG Bonus | 11.52% Max HP      |
| HP Regen Per Hit         | 1.37% Max HP + 157 |
| Bake-Kurage DMG Bonus    | 12.06% Max HP      |
| Duration                 | 10s                |

**Notes**

* The DMG Bonus from **Ceremonial Garment** can be extended if an attack is buffered right before her **Nereid's Ascension** duration ends.
* The Normal Attack/Charged Attack/Bake-Kurage DMG Bonus are all dynamic.
  * However, if Kokomi immediately switches after casting Q, the DMG bonus from **Ceremonial Garment** will be snapshotted by her E.
* Kokomi cannot absorb pre-fed particles during her Elemental Burst animation.

</TabItem>
</Tabs>

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive1' label='Passive 1'>
<Passive char={char} passive={2} />
</TabItem>
<TabItem value='passive2' label='Passive 2'>
<Passive char={char} passive={3} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* The **Bake-Kurage** Duration refresh from A1 does not refresh Heart of Depths 4pc passive, because it does not count as a "using an Elemental Skill"
* The actual refresh timing requires the **Bake-Kurage** to be on field the frame her burst animation finishes, or else you will lose the refresh.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* The effects of **Song of Pearls** cannot get extended by buffering an attack right before her Burst duration ends.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* The **Swimming Fish** from **At Water's Edge** does not have ICD and isn't shared with her Normal Attack string.

</TabItem>

<TabItem value="c2" label="C2">
<Constellation char={char} constellation={2} />

**Notes**

* This effect is considered flat healing, it is not applied to the heal bonus part of calculations.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />
</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/kokomi.md')} />
