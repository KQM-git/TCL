---
description: A general of the Tenryou Commission. Bold, decisive, and skilled in battle.
---

import char from '@site/src/data/characters/Kujou_Sara.json'
import { getSkillName } from '@site/src/utils/skill'

# Kujou Sara

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kujou_Sara.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Short Sara Guide](https://keqingmains.com/sara/)

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

| String    | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :-------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG | 67.78%    | 19     | 214.04%/s | 12.17        | 1            |
| 2-Hit DMG | 71.1%     | 44     | 189.38%/s | 13.5         | 1            |
| 3-Hit DMG | 89.11%    | 82     | 166.82%/s | 16.92        | 1            |
| 4-Hit DMG | 92.59%    | 123    | 156.38%/s | 17.58        | 1            |
| 5-Hit DMG | 106.65%   | 181    | 141.62%/s | 20.25        | 1            |
| Recovery  | -         | 195    | 131.46%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type             | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type      |
| :--------------- | :-------- | :----- | :--------- | :-- | :------------------ | :---------------- |
| Aimed Shot       | 80.58%    | 15     | 322.32%/s  | -   | 10 \(Headshot: 30\) | 2 \(Headshot: 5\) |
| With Recovery    | -         | 25     | 193.392%/s | -   | -                   | -                 |
| Fully Charged    | 210.8%    | 86     | 147.07%/s  | 1A  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| With Recovery    | -         | 96     | 131.75%/s  | -   | -                   | -                 |
| A1 Fully Charged | 210.8%    | 50     | 252.96%    | 1A  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| With Recovery    | -         | 60     | 210.8%/s   | -   | -                   | -                 |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| String          | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute               | Skill    |
| :---------------------- | :------- |
| Skill DMG \(T9%\)       | 213.79%  |
| ATK Bonus Ratio \(T9%\) | 73.03%   |
| ATK Bonus Duration      | 6s       |
| Particles               | 3        |
| Frames                  | 50       |
| GU                      | 1A       |
| ICD (hits/timer)        | None     |
| Snapshot                | Snapshot |
| Damage Element          | Electro  |
| Damage Type             | Skill    |
| Duration                | 18s      |
| CD                      | 10s      |
| Poise Damage            | 100      |
| Impulse Type            | 3        |

</div>

**Notes**

* **Tengu Stormcall** only buffs the on-field characters the frame before the Crowfeather Explosion, this also applies to coop members.
* Triggering **Tengu Juurai: Ambush** doesn't require hitting an enemy, just a fully-charged aimed shot.
* **Tengu Juurai: Ambush** DMG is snapshot upon **Tengu Stormcall** cast.
* Sara does not lose the effects of **Crowfeather Cover** if swapped off.
* **Crowfeather** does not stick to walls; it sticks to the closest walkable surface from the point of collision.
* A fully-charged aimed shot fired with **Crowfeather Cover** will disappear after 2 seconds in flight.
* **Crowfeather** triggers **Tengu Juurai: Ambush** 1.5s after landing.
* **Crowfeather** has a "semi-taunt" mechanic, where it can draw enemy attention even while not in combat mode.
* The hitbox to gain an ATK buff from **Tengu Juurai: Ambush** is massive vertically.
* The damage hitbox of **Tengu Juurai: Ambush** is different from the hitbox to gain an ATK Buff.
* **Tengu Juurai: Ambush** is a unique "friendly fire" attack and can trigger several other characters's perks that require getting hit.
* When Sara is near an enemy, **Tengu Stormcall** will teleport her away from them.
* When Sara is not near any enemies, **Tengu Stormcall** will teleport her backwards. The player can also choose to control the teleport by inputting a direction before the teleport occurs.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                | Burst                                    |
| :----------------------- | :--------------------------------------- |
| Titanbreaker DMG \(T9%\) | 696.32%                                  |
| Stormcluster DMG \(T9%\) | 58% (each)                               |
| Cast Frames              | 80 (60 with swap)                        |
| Energy Frame             | 54                                       |
| CD Frame                 | 48                                       |
| GU                       | 1A                                       |
| ICD (hits/timer)         | 3 hit/2.5s                               |
| Snapshot                 | Snapshot                                 |
| Damage Element           | Electro                                  |
| Damage Type              | Burst                                    |
| Energy Cost              | 80                                       |
| CD                       | 20s                                      |
| Poise Damage             | Titanbreaker: 100 <br/> Stormcluster: 20 |
| Impulse Type             | Titanbreaker: 5 <br/> Stormcluster: 2    |

</div>

**Notes**

* The cast frames of **Subjugation: Koukou Sendou** can be reduced to 60 with a swap cancel.
* **Titanbreaker** and **Stormcluster** do not share ICDs.
* Both **Titanbreaker** and **Stormcluster** damage is snapshot on **Subjugation: Koukou Sendou** cast.
* For Sara's ATK bonus to apply, a character needs to be hit by **Titanbreaker** or **Stormclusters**.
  * Multiple characters can be buffed this way.
* **Titanbreaker** targets closest enemy, then **Stormcluster** moves outward in a plus-shape with one branch directed at Sara’s location at time of cast, dealing 5 hits each.
* **Subjugation: Koukou Sendou** does not benefit from its own attack bonus.

</TabItem>
</Tabs>

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* The weaker Crowfeather from C2 can also trigger this effect.
* The amount of Energy Sara restores with Decorum scales directly with her Energy Recharge. You do not need to hit 100% Energy Recharge increments to restore more Energy.

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

| Type         | Talent 9%       |
| :----------- | :-------------- |
| DMG          | 213.79% \* 0.3  |
| GU           | 1A              |
| Damage Type  | Elemental Skill |
| Poise Damage | 30              |
| Impulse Type | 3               |

**Notes**

* The **Weaker Crowfeather** applies 1A Electro and has separate ICD from **Tengu Stormcall**.
* **Weaker Crowfeather** snapshots upon **Tengu Stormcall** cast.
* The **Weaker Crowfeather** formed can trigger the effects of Sara's A4.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* Each individual **Stormcluster** still hits 5 times, but two additional **Stormclusters** are added, spreading out in the 10:30 and 1:30 directions away from the **Titanbreaker** hit.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* The effects of **Sin of Pride** do not get snapshot.
* **Stormclusters** can benefit from this buff if Sara is hit by her own **Titanbreaker** or **Stormclusters**.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/sara.md')} />
