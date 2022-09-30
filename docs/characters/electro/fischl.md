---
description: A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven named Oz.
---

import char from '@site/src/data/characters/Fischl.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Fischl

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Fischl.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Fischl Mains Discord](https://discord.gg/JSN9Rk2sWe)
* [5 Minute Quick Guide to Fischl](https://youtu.be/_9PPaCczgTo)
* [Fischl Support Weapon Rankings](https://docs.google.com/spreadsheets/d/1cyxc8ZCIi8f9FqYDFZS0j3Jjd6nnWJ8l0LLnkCZUAOQ/edit?usp=sharing) _by itsjaeYOU\#2868_

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

| String        | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------ | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit         | 81.05%    | 10     | 486.3%/s  | 12           | 1            |
| 2-Hit         | 85.95%    | 28     | 357.86%/s | 12.9         | 1            |
| 3-Hit         | 106.81%   | 61     | 269.32%/s | 15.9         | 1            |
| 4-Hit         | 106.02%   | 102    | 223.43%/s | 15.6         | 1            |
| 5-Hit         | 132.4%    | 131    | 234.61%/s | 19.71        | 1            |
| With Recovery | 512.23%   | 182    | 168.87%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type          | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type |
| :------------ | :-------- | :----- | :--------- | :-- | :------------------ | :----------- |
| Aimed Shot    | 80.58%    | 15     | 322.32%/s  | -   | 10 \(Headshot: 30\) | 2            |
| With Recovery | -         | 25     | 193.392%/s | -   | -                   | -            |
| Fully Charged | 210.8%    | 86     | 147.07%/s  | 1A  | 20 \(Headshot: 60\) | 5            |
| With Recovery | -         | 96     | 131.75%/s  | -   | -                   | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge Impact   | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Fischl's max damage ceiling is 245.81% MV/s for a N2-LMB combo, but reaching this level is not realistic for humans.
* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute        | Skill   |
| :--------------- | :------ |
| Cast DMG \(T9%\) | 196.25% |
| Particles        | 0       |
| Frames           | 18      |
| GU               | 1A      |
| ICD              | None    |
| Damage Element   | Electro |
| Damage Type      | Skill   |
| Summon CD        | 25s     |
| Reposition CD    | 1s      |
| Poise Damage     | 80      |
| Impulse Type     | 2       |

</div>

**Notes**

* When **Oz** is already on the field, this ability repositions him next to Fischl instead, without modifying his remaining duration.

</TabItem>

<TabItem value="oz" label="Oz">

| Attribute              | Oz          |
| :--------------------- | :---------- |
| Normal Attacks \(T9%\) | 150.96%     |
| Particles              | 0~1 \(1:2\) |
| GU                     | 1A          |
| ICD                    | 4 hits / 5s |
| Snapshot               | Snapshot    |
| Duration               | 10s         |
| Total Hits             | 10          |
| Damage Element         | Electro     |
| Damage Type            | Skill       |
| Poise Damage           | 10          |
| Impulse Type           | 1           |

**Notes**

* **Oz** is able to target Baron Bunny after Fischl’s Ascension 1 passive, **Stellar Predator** is triggered, despite having no enemies nearby. The passive may or may not deliver a **Thundering Retribution** onto the Baron Bunny.
* When **Oz** is repositioned via the use of this elemental skill, it counts as a use of an elemental skill and it re-snapshots Fischl's stats.
* **Oz's** normal attacks shares ICD with her **C6**.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst          |
| :---------------- | :------------- |
| Skill DMG \(T9%\) | 353.6%         |
| Cast Frames       | 20             |
| Energy Frame      | 11             |
| CD Frame          | 2              |
| GU                | 1A             |
| ICD               | Shared With C4 |
| Snapshot          | Snapshot       |
| Damage Element    | Electro        |
| Damage Type       | Burst          |
| Energy Cost       | 60             |
| Duration          | 2s             |
| CD                | 15s            |
| Poise Damage      | 150            |
| Impulse Type      | 3              |

</div>

**Notes**

* Fischl may not attack, cast, or dash during the duration of this ability.
* Summons **Oz** when the effect ends.
* If **Oz** is already on the field, this will reset his duration instead.
* You can swap characters during Fischl's **Midnight Phantasmagoria** to exit the burst early.
* **Midnight Phantasmagoria** only has invulnerability frames \(iframes\) on startup.
* After summoning **Oz** with Midnight Phantasmagoria and swapping off of Fischl, **Oz** will snapshot Fischl's stats right before she leaves the field.
* **Midnight Phantasmagoria** is considered a blunt attack and will shatter frozen enemies.

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

| Attribute      | Thundering Retribution |
| :------------- | :--------------------- |
| Skill DMG      | 152.7%                 |
| Particles      | 0                      |
| GU             | 2B                     |
| Damage Element | Electro                |
| Damage Type    | Charged Attack         |
| Poise Damage   | 40                     |
| Impulse Type   | 1                      |

**Notes**

* This can be used to activate the passive on Prototype Crescent when the bolt hits a humanoid, as the top of their heads are their weakpoint hitbox.
* The AoE Electro DMG is calculated as a raw multiplier to Fischl's Aimed Shot Base DMG, not as a normal DMG Bonus.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

| Attribute        | A4      |
| :--------------- | :------ |
| Skill DMG        | 80%     |
| GU               | 1A      |
| ICD              | None    |
| Damage Elemental | Electro |
| Damage Type      | Skill   |
| Poise Damage     | 40      |
| Impulse Type     | 1       |

**Notes**

* There is a **~0.5s** timer between A4 procs \(it seems to be either more than 0.5s or depends on ping\).
* At edges of long range attacks, it may not trigger since they must be within a certain range of the active character.
* The bolt from **Undone Be Thy Sinful Hex** targets the closest enemy to the character, which could be a separate enemy from whom a reaction was triggered.
* **Undone By Thy Sinful Hex** uses snapshotted stats on Oz cast and recast.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

| Effect         | C1            |
| :------------- | :------------ |
| Joint Attack   | 22%           |
| Damage Element | Physical      |
| Damage Type    | Normal Attack |
| Poise Damage   | 30            |
| Impulse Type   | 0             |

**Notes**

* This is an echo effect.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* C2 is calculated as additional MV added to **Nightrider**'s Summoning MV. Example: At T9, Nightrider's Summoning MV becomes 396.25% when factoring in C2.
* C2 does not affect Oz's turret attack damage.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Attribute               | Burst                                   |
| :---------------------- | :-------------------------------------- |
| Her Pilgrimage of Bleak | 222%                                    |
| GU                      | 2B                                      |
| ICD                     | Shared With **Midnight Phantasmagoria** |
| Damage Type             | Elemental Burst                         |
| Poise Damage            | 500                                     |
| Impulse Type            | 2                                       |

**Notes**

* C4 can crit and has separate crit rolls from Q.
* C4 damage occurs before Q (higher priority)
* C4 is not a blunt attack and will not shatter frozen enemies.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

| Attribute      | C6          |
| :------------- | :---------- |
| Joint Attack   | 30%         |
| Particles      | 0           |
| GU             | 1A          |
| ICD            | 4 hits / 5s |
| Snapshot       | Snapshot    |
| Attack Speed   | No Limit    |
| Damage Element | Electro     |
| Damage Type    | Skill       |
| Duration       | 12s         |
| Poise Damage   | 10          |
| Impulse Type   | 0           |

**Notes**

* **C6** joint attacks share ICD with **Oz's** Normal Attacks.
* The joint attack only procs once on multi-hit attacks.
* **Oz** normal attacks a total of 12 times over the **C6** duration.
* **C6** uses snapshotted stats on Oz cast and recast.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/fischl.md')} />
