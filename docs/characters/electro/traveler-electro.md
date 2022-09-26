---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Electro).json'
import lumine from '@site/src/data/characters/Lumine_(Electro).json'
import { getSkillName } from '@site/src/utils/skill'

# Traveler (Electro)

![](/img/traveler/electro-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Lumine Normal Attacks'>
<h3>{getSkillName(lumine, 'na')}</h3>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 81.69%    | 14     | 350.1%/s  | 40.5         | 3            |
| 2-Hit  | 79.79%    | 43     | 225.32%/s | 39.6         | 3            |
| 3-Hit  | 97.33%    | 80     | 194.11%/s | 48.6         | 3            |
| 4-Hit  | 107.12%   | 116    | 189.27%/s | 54.0         | 3            |
| 5-hit  | 130.03%   | 148    | 201.06%/s | 64.8         | 6            |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 102.7%+132.72% | -      | -         | 50.6 x2      | 2 + 6        |
| N1C            | 317.11%        | 62     | 306.89%/s | -            | -            |
| N2C            | 396.90%        | 84     | 283.5%/s  | -            | -            |
| N3C            | 494.23%        | 115    | 260.12%/s | -            | -            |
| N4C            | 601.35%        | 160    | 225.51%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* Lumine is the female traveler.

</TabItem>

<TabItem value='na-aether' label='Aether Normal Attacks'>
<h3>{getSkillName(char, 'na')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 81.69%    | 13     | 377.03%/s | 41.4         | 3            |
| 2-Hit  | 79.79%    | 38     | 254.97%/s | 43.2         | 3            |
| 3-Hit  | 97.33%    | 71     | 218.71%/s | 53.1         | 3            |
| 4-Hit  | 107.12%   | 123    | 178.5%/s  | 57.6         | 3            |
| 5-hit  | 130.03%   | 163    | 182.56%/s | 70.2         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 102.7%+111.55% | -      | -         | 50.6 x2      | 2 + 6        |
| N1C            | 295.94%        | 54     | 328.82%/s | -            | -            |
| N2C            | 297.26%        | 90     | 250.49%/s | -            | -            |
| N3C            | 374.26%        | 115    | 246.81%/s | -            | -            |
| N4C            | 459.01%        | 160    | 217.57%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* Aether is the male traveler.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill        |
| :---------------- | :----------- |
| Skill DMG \(T9%\) | 133.73% x 3  |
| Particles         | 1            |
| Frames            | 55           |
| GU                | 1A           |
| ICD               | 3 hit / 2.5s |
| Snapshot          | Snapshot     |
| Damage Element    | Electro      |
| Damage Type       | Skill        |
| CD                | 13.5s        |
| Poise Damage      | 100          |
| Impulse Type      | 3            |

</div>

| Attribute                | Abundance Amulet (Talent 9%) |
| :----------------------- | :--------------------------- |
| Energy Regeneration      | 4                            |
| Energy Recharge Increase | 20%                          |
| Duration                 | 6s                           |
| Field Duration           | 15s                          |

**Notes**

* Different units can each pick up one **Abundance Amulet** generated from one **Lightning Blade** cast to gain its effects.
* The Energy Recharge gained from **Abundance Amulets** does not affect Raiden's A4 passive, Mona's A4 passive, the 4-piece bonus from Emblem of Severed Fate or the Engulfing Lightning.
* The number of **Abundance Amulets** generated depends on the number of Lightning Blades hit AND number of enemies hit.
* Hitting a shield will stil generate **Abundance Amulets**
* There is a delay before the **Abundance Amulets** can be picked up, on average 1.79s.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                   | Burst                               |
| :-------------------------- | :---------------------------------- |
| Skill DMG \(T9%\)           | 194.48%                             |
| Falling Thunder DMG \(T9%\) | 55.76%                              |
| Energy Regeneration         | 1                                   |
| Cast Frames                 | 60                                  |
| Energy Frame                | 42                                  |
| CD Frame                    | 36                                  |
| GU                          | 1A                                  |
| ICD                         | 3 hit / 2.5s                        |
| Snapshot                    | Snapshot                            |
| Damage Element              | Electro                             |
| Damage Type                 | Burst                               |
| Energy Cost                 | 80                                  |
| Duration                    | 12s                                 |
| CD                          | 20s                                 |
| Poise Damage                | Cast: 150 <br/> Falling Thunder: 50 |
| Impulse Type                | Cast: 3 <br/> Falling Thunder: 2    |

</div>

**Notes**

* The energy regenerated from **Falling Thunder** is classified as flat energy.
* **Falling Thunder** DMG snapshots on **Bellowing Thunder** cast.

</TabItem>
</Tabs>

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* This effect only takes into account the Traveler's original Energy Recharge. Picking up an **Amulet** to increase the Traveler's ER will not impact the amount of ER shared by **Resounding Roar** for other Amulet pickups.

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

**Notes**

* This bonus will apply regardless of if the final energy gained exceeds said threshold.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value="c6" label="C6">
<Constellation char={char} constellation={6} />

**Notes**

* The damage increase is multiplicative.

</TabItem>
</Tabs>

## Full Talent Values

import Talent from '@site/src/components/char/Talent'

<Tabs>
<TabItem value='na-lumine' label={'Lumine: ' + getSkillName(lumine, 'na')}>
<Talent char={lumine} skill='na' />
</TabItem>

<TabItem value='na-aether' label={'Aether: ' + getSkillName(char, 'na')}>
<Talent char={char} skill='na' />
</TabItem>

<TabItem value='e' label={getSkillName(char, 'e')}>
<Talent char={char} skill='e' />
</TabItem>

<TabItem value='q' label={getSkillName(char, 'q')}>
<Talent char={char} skill='q' />
</TabItem>
</Tabs>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/traveler-electro.md')} />
