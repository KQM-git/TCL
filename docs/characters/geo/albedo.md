---
description: A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.
---

import char from '@site/src/data/characters/Albedo.json'
import { getSkillName } from '@site/src/utils/skill'

# Albedo

![](/img/characters/gacha/Albedo.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Albedo Mains Discord](https://discord.gg/uHV2ZCfPXU)
* [Albedo Written Guide](https://keqingmains.com/albedo/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 67.5%     | 12     | 337.5%/s  | 38.43        | 3            |
| 2-Hit  | 67.5%     | 30     | 270%/s    | 38.43        | 3            |
| 3-Hit  | 87.18%    | 59     | 225.95%/s | 49.68        | 3            |
| 4-Hit  | 91.4%     | 98     | 191.99%/s | 52.11        | 3            |
| 5-Hit  | 114.04%   | 152    | 168.8%/s  | 64.98        | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 86.9% + 110.6% | -      | -         | 60 x2        | 2 + 6        |
| N1C            | 265%           | 54     | 294.44%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Solar Isotoma | Transient Blossom |
| :------------- | :------------ | :---------------- |
| Talent \(T9%\) | 221.68%       | 227.12% DEF       |
| Particles      | 0             | 0~1 \(1:2\)       |
| Frames         | 32            | -                 |
| GU             | 1U            | 1U                |
| ICD            | None          | 3 hit / 2.5s      |
| Snapshot       | Snapshot      | Snapshot          |
| Damage Element | Geo           | Geo               |
| Damage Type    | Skill         | Skill             |
| Duration       | 30s           | -                 |
| CD             | 4s            | -                 |
| Poise Damage   | 50            | 50                |
| Impulse Type   | 4             | 1                 |

</div>

**Notes**

* Casting other constructs above **Solar Isotoma** will cause the construct to shatter.
* The area of **Solar Isotoma** that can generate **Transient Blossoms** is cylindrical and has a maximum height just above the elevator's maximum lift.
* The DMG dealt by **Transient Blossoms** is snapshotted, so any buffs gained/lost after casting **Abiogenesis: Solar Isotoma** will not affect its damage.
* Albedo can one extra proc of the Cinnabar Spindle passive with E N1, but this only occurs at high ping.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Burst Cast                            | Fatal Blossom      |
| :------------- | :------------------------------------ | :----------------- |
| Talent \(T9%\) | 624.24%                               | 122.4% per Blossom |
| Cast Frames    | 96                                    | -                  |
| Energy Frame   | 80                                    | -                  |
| CD Frame       | 75                                    | -                  |
| GU             | 1U                                    | 1U                 |
| ICD            | None                                  | 3 hit / 2.5s       |
| Snapshot       | Snapshot                              | Snapshot           |
| Damage Element | Geo                                   | Geo                |
| Damage Type    | Burst                                 | Burst              |
| Energy Cost    | 40                                    | -                  |
| Cooldown       | 12s                                   | -                  |
| Poise Damage   | Animation Start: 400 <br/> Burst: 100 | 30                 |
| Impulse Type   | 4                                     | 2                  |

</div>

**Notes**

* The 7 **Fatal Blossoms** that are generated will each target one enemy each and excess blossoms will spawn randomly within the **Solar Isotoma** field with more weighting toward the center.
* **Fatal Blossoms** DMG snapshot on **Solar Isotoma** cast.

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

* The buff is triggered during the Q animation when the Geo structures first appear in front of Albedo.

</TabItem>
</Tabs>

## Constellations

import ConstellationsFull from '@site/src/components/char/ConstellationsFull'

<ConstellationsFull char={char} />

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char} />

## Evidence Vault

<Card item={require('../../evidence/characters/geo/albedo.md')} />
