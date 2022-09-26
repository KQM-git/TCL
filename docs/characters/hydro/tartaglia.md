---
description: No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.
---

import char from '@site/src/data/characters/Tartaglia.json'
import { getSkillName } from '@site/src/utils/skill'

# Tartaglia

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Tartaglia.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Childe Mains Discord](https://discord.gg/Childe)
* [7 Minute Quick Guide to Tartaglia](https://youtu.be/QERML_Jy1DE)
* [Childe Guide](https://keqingmains.com/tartaglia/)

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

| String   | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit    | 75.84%    | 17     | 267.67%/s | 14.4         | 1            |
| 2-Hit    | 85%       | 30     | 321.68%/s | 16.14        | 1            |
| 3-Hit    | 101.75%   | 64     | 246.18%/s | 19.32        | 1            |
| 4-Hit    | 104.75%   | 101    | 218.22%/s | 19.89        | 1            |
| 5-Hit    | 111.86%   | 123    | 233.76%/s | 21.24        | 1            |
| 6-Hit    | 133.67%   | 162    | 226.99%/s | 25.38        | 1            |
| Recovery | -         | 215    | 171.03%/s | -            | -            |

</div>
<div class='talent-columns'>
<div>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />
<Skill char={char} skill='na' sectionFilter='Riptide' />
</div>

| Type          | Talent 9%   | Frames | MV/s      | GU  | Poise Damage        | Impulse Type |
| :------------ | :---------- | :----- | :-------- | :-- | :------------------ | :----------- |
| Aimed Shot    | 80.58%      | 15     | 322.32%/s | -   | 10 \(Headshot: 30\) | 2            |
| With Recovery | -           | 23     | 210.21%/s | -   | -                   | -            |
| Fully Charged | 210.8%      | 86     | 147.07%/s | 1A  | 20 \(Headshot: 60\) | 5            |
| With Recovery | -           | 94     | 134.55%/s | -   | -                   | -            |
| Riptide Flash | 21.08% \* 3 | -      | -         | 1A  | -                   | -            |
| Riptide Burst | 105.4%      | -      | -         | 2B  | -                   | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 10           | 2            |
| Low Plunge DMG  | 234.86%   | 50           | 2            |
| High Plunge DMG | 293.36%   | 100          | 3            |

</div>

**Notes**

* Recovery of 6th Hit is 53 Frames.
* MV/s stated is without recovery and assumes a standing combat-neutral startup.
* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.
* Both **Riptide Flash** and **Riptide Burst** do not snapshot.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter=''/>

| Attribute                 | Skill    |
| :------------------------ | :------- |
| Stance Change DMG \(T9%\) | 122.4%   |
| Frames                    | 28       |
| GU                        | 2B       |
| ICD                       | None     |
| Damage Element            | Hydro    |
| Damage Type               | Skill    |
| Max Duration              | 30s      |
| Preemptive CD             | 6s ~ 36s |
| Max CD                    | 45s      |
| Poise Damage              | 51.75    |
| Impulse Type              | 3        |

</div> 
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Normal Attack' />

| String | Talent 9%     | Frames    | MV/s      | Poise Damage  | Impulse Type |
| :----- | :------------ | :-------- | :-------- | :------------ | :----------- |
| 1-Hit  | 71.42%        | 7         | 612.17%/s | 40.68         | 3            |
| 2-Hit  | 76.47%        | 20        | 443.67%/s | 43.56         | 3            |
| 3-Hit  | 103.49%       | 48        | 314.23%/s | 58.95         | 3            |
| 4-Hit  | 110.13%       | 80        | 271.13%/s | 62.73         | 3            |
| 5-Hit  | 101.59%       | 116       | 239.53%/s | 57.87         | 3            |
| 6-Hit  | 65.1% + 69.2% | 143 + 165 | 217.24%/s | 37.08 + 39.42 | 6 x2         |
| GU     | 1A            | -         | -         | -             | -            |

</div> 
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Charged Attack' />

| String         | Talent 9%       | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------- | :-------------- | :----- | :-------- | :-- | :----------- | :----------- |
| Charged Attack | 110.6% + 132.25 | -      | -         | 1A  | 63 + 75.33   | 2 + 6        |
| N1C            | 314.27%         | 80     | 235.7%/s  | 1A  | -            | -            |
| N2C            | 390.74%         | 93     | 252.09%/s | 1A  | -            | -            |
| N3C            | 494.23%         | 125    | 237.23%/s | 1A  | -            | -            |

</div> 
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Riptide Slash' />

| Attribute         | Riptide Slash |
| :---------------- | :------------ |
| Skill DMG \(T9%\) | 110.6%        |
| Particles         | 1 per proc    |
| GU                | 1A            |
| ICD               | None          |
| Snapshot          | No            |
| Damage Element    | Hydro         |
| Damage Type       | Skill         |
| Poise Damage      | 100           |
| Impulse Type      | 2             |

</div>

**Notes**

* All frame counts are done against a Ruin Guard.
* Gives 1 Hydro Particle upon proc. However, this particle generation has an ICD of 3 seconds.
* **Riptide** and **Riptide Slash** can be applied and triggered by Aimed Shot, both Physical and Hydro, by switching to melee stance before the arrow hits an enemy.
* Using this skill in quick succession after a partial **Bow Stance** attack string allows Childe to continue the attack string in **Melee Stance**.
* Using this skill on the same frame as an attack or burst input can result in a **Ranged Burst** while in **Melee Stance**, a **Melee N1** in **Ranged Stance**,[ among other effects.](../../evidence/characters/hydro/tartaglia.md#elemental-skill-and-attack-or-burst-on-the-same-frame)
* Preemptive CD scales discretely, floored to an integer before cooldown reduction calculations.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<div>
<Skill char={char} skill='q' sectionFilter=''/>
<Skill char={char} skill='q' sectionFilter='Ranged Stance: Flash of Havoc'/>
</div>

| Attribute         | Ranged Burst |
| :---------------- | :----------- |
| Skill DMG \(T9%\) | 643.28%      |
| Cast Frames       | 52           |
| Energy Frame      | 8            |
| CD Frame          | 2            |
| GU                | 2B           |
| ICD               | None         |
| Damage Element    | Hydro        |
| Damage Type       | Burst        |
| Energy Cost       | 60           |
| Energy Refund     | 20           |
| CD                | 15s          |
| MV/s              | 611.3%/s     |
| Poise Damage      | 200          |
| Impulse Type      | 5            |

</div>
<div class='talent-columns'>
<div>
<Skill char={char} skill='q' sectionFilter='Melee Stance: Light of Obliteration'/>
<Skill char={char} skill='q' sectionFilter='Riptide Blast'/>
</div>

| Attribute         | Melee Burst | Riptide Blast |
| :---------------- | :---------- | :------------ |
| Skill DMG \(T9%\) | 788.8%      | 204%          |
| Cast Frames       | 97          | --            |
| Energy Frame      | 75          | --            |
| CD Frame          | 68          | --            |
| GU                | 2B          | 2B            |
| ICD               | None        | None          |
| Damage Element    | Hydro       | Hydro         |
| Damage Type       | Burst       | Burst         |
| Energy Cost       | 60          | --            |
| CD                | 15s         | --            |
| MV/s              | 505.7%/s    | --            |
| Poise Damage      | 250         | 100           |
| Impulse Type      | 7           | 7             |

</div>

**Notes**

* **Riptide Blast** does not snapshot

</TabItem>
<TabItem value="riptide" label="Riptides">

**Riptides**  
A chart of Tartgalia's different Riptide effects

|                   | Riptide Flash       | Riptide Slash     | Riptide Burst         | Riptide Blast         |
| :---------------- | :------------------ | :---------------- | :-------------------- | :-------------------- |
| Source            | Charge shot on mark | Melee hit on mark | Enemy death with mark | Melee Burst with mark |
| Skill DMG \(T6%\) | 17.63% \* 3         | 86.5%             | 86.8%                 | 168%                  |
| Particles         | --                  | 1 per proc        | --                    | --                    |
| GU                | 1A                  | 1A                | 2B                    | 2B                    |
| ICD               | 3 Hit / 2.5s        | None              | None                  | None                  |
| Snapshot          | --                  | Dynamic           | --                    | --                    |
| Damage Element    | Hydro               | Hydro             | Hydro                 | Hydro                 |
| Damage Type       | Normal Attack       | Skill             | Normal Attack         | Burst                 |

**Notes**

* **Riptide** has a 10s duration \(without Ascension 1\).

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

* **Riptide** can be applied to shielded targets, assisting in destroying shields faster.

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
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Name          | Poise Damage | Impulse Type |
| :------------ | :----------- | :----------- |
| Riptide Flash | 15 x3        | 2 x3         |
| Riptide Slash | 100          | 2            |

**Notes**

* This constellation effect is not subject to ICD.
* All of **Riptide** effects triggered by C4 do not snapshot.
* All of **Riptide** effects triggered by C4 are considered Normal Attack DMG.

</TabItem>

<TabItem value="c5" label="C5">
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value="c6" label="C6">
<Constellation char={char} constellation={6} />
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/tartaglia.md')} />
