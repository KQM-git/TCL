---
description: A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."
---

import char from '@site/src/data/characters/Xiao.json'
import { getSkillName } from '@site/src/utils/skill'

# Xiao

![](/img/characters/gacha/Xiao.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Xiao Mains Discord](https://discord.gg/Xiao)
* [Full Xiao Written Guide: Adeptal Guide to Conquering Xiao](https://keqingmains.com/xiao/)

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

| String | Talent 9 DMG%         | Frames | MV/s      | Poise Damage \(no Q/with Q\) | Impulse Type |
| :----- | :-------------------- | :----- | :-------- | :--------------------------- | :----------- |
| 1-Hit  | 46.32% x2 \(92.64%\)  | 16     | 347.4%/s  | 25.08 x2 / 37.62 x2          | 3 + 2        |
| 2-Hit  | 95.76%                | 42     | 269.14%/s | 51.76 / 77.64                | 3            |
| 3-Hit  | 115.29%               | 68     | 267.96%/s | 62.32 / 93.48                | 3            |
| 4-Hit  | 63.34% x2 \(126.68%\) | 115    | 224.54%/s | 34.28 x2 / 51.42 x2          | 2 x2         |
| 5-Hit  | 120.32%               | 145    | 227.87%/s | 65.05 / 97.56                | 3            |
| 6-Hit  | 161.17%               | 197    | 216.81%/s | 87.12 / 130.68               | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9 DMG% | Frames | MV/s      | Poise Damage \(no Q/with Q\) | Impulse Type |
| :------------- | :------------ | :----- | :-------- | :--------------------------- | :----------- |
| Charged Attack | 203.65%       | -      | -         | 120 / 180                    | 7            |
| N1C            | 296.29%       | 80     | 222.22%/s | -                            | -            |
| N3C            | 507.34%       | 157    | 193.89%/s | -                            | -            |
| N4C            | 634.02%       | 190    | 200.22%/s | -                            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Plunge Type     | Talent 9 DMG% | Frames | MV/s     | Poise Damage \(no Q/with Q\) | Impulse Type |
| :-------------- | :------------ | :----- | :------- | :--------------------------- | :----------- |
| Plunge DMG      | 150.35%       | -      | -        | 25 / 37.5                    | 2            |
| Low Plunge DMG  | 300.63%       | 65     | 277.5%/s | 100 / 150                    | 4            |
| High Plunge DMG | 375.5%        | 75     | 300.4%/s | 150 / 225                    | 7            |

</div>

**Notes**

* Xiao's Charged Attacks share an ICD on Anemo application with his Normal Attacks when under the effects of Bane of All Evil.
* All frame counts are done against Ruin Guards.
* All of the stated Talent DMG% doesn't include the Normal Attack Modifier from Q.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill        |
| :---------------- | :----------- |
| Skill DMG \(T9%\) | 429.76%      |
| Particles         | 3            |
| Frames            | 36           |
| GU                | 2B           |
| ICD               | 7 hit / 0.1s |
| Snapshot          | Snapshot     |
| Damage Element    | Anemo        |
| Damage Type       | Skill        |
| CD                | 10s          |
| Poise Damage      | 100          |
| Impulse Type      | 3            |

</div>

**Notes**

* A double E Cast is only 60 frames long.
* **Lemniscatic Wind Cycling** can allow Xiao to Plunge, even below jump level.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                                 | Burst           |
| :---------------------------------------- | :-------------- |
| Normal, Charged, Plunge DMG bonus \(T9%\) | 90.65%          |
| Life Drain \(T9%\)                        | 2% Current HP/s |
| Cast Frames                               | 58              |
| Energy Frame                              | 39              |
| CD Frame                                  | 31              |
| Energy Cost                               | 70              |
| Duration                                  | 15s             |
| CD                                        | 18s             |

</div>

**Notes**

* Xiao's attacks will be infused with 1GU Anemo.
* While the effects of **Elemental Burst: Bane of All Evil** are active, the energy particle generation of **Elemental Skill: Lemniscatic Wind Cycling** is disabled.
* Xiao can keep his mask on if his Burst is canceled.

</TabItem>
</Tabs>

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import ConstellationsFull from '@site/src/components/char/ConstellationsFull'

<ConstellationsFull char={char} />

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/xiao.md')} />
