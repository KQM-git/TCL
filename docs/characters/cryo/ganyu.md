---
description: The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.
---

import char from '@site/src/data/characters/Ganyu.json'
import { getSkillName } from '@site/src/utils/skill'

# Ganyu

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Ganyu.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Short Ganyu Guide](https://keqingmains.com/ganyu/)

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

| String | Talent 9% | Frames | MV/s    | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :------ | :----------- | :----------- |
| 1-hit  | 58.3%     | 18     | 194.33% | 11.07        | 1            |
| 2-Hit  | 65.41%    | 43     | 172.62% | 12.42        | 1            |
| 3-Hit  | 83.58%    | 73     | 170.38% | 15.87        | 1            |
| 4-Hit  | 83.58%    | 117    | 149.16% | 15.87        | 1            |
| 5-Hit  | 88.64%    | 153    | 148.83% | 16.83        | 1            |
| 6-Hit  | 105.86%   | 190    | 153.27% | 20.1         | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type             | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type      |
| :--------------- | :-------- | :----- | :--------- | :-- | :------------------ | :---------------- |
| Aimed Shot       | 80.58%    | 15     | 322.32%/s  | -   | 10 \(Headshot: 30\) | 2                 |
| With Recovery    | -         | 25     | 193.392%/s | -   | -                   | -                 |
| Charge Level 1   | 210.8%    | 74     | 170.92%    | 1A  | 20 \(Headshot: 60\) | 5                 |
| With Recovery    | -         | 85     | 148.8%/s   | -   | -                   |
| Frostflake Arrow | 217.6%    | 103    | 126.76%    | 1A  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| Frostflake Bloom | 369.92%   | 103    | 215.49%    | 1A  | 40                  | 1                 |
| With Recovery    | -         | 113    | 311.96%/s  | -   | -                   |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.
* **Frostflake Bloom** is considered a Charged Attack.
* Both **Frostflake Arrow** and **Frostflake Bloom** will apply 1A Cryo.
* **Frostflake Bloom** will damage enemies within a cylinder regardless of distance from the **Frostflake Arrow** on the same frame.
* Ganyu's Charged Attacks snapshot on release, including the bloom.
* Ganyu cannot perform the "ARCC" aimed shot animation cancel without Constellation 6.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                      | Skill                      |
| :----------------------------- | :------------------------- |
| Skill DMG \(T9%\)              | 224.4% \* 2                |
| Inherited HP                   | 204% max HP                |
| Cast Particles                 | 2                          |
| Expiration/Destroyed Particles | 2                          |
| Frames                         | 34                         |
| GU                             | 1A                         |
| ICD                            | None                       |
| Snapshot                       | Snapshot                   |
| Damage Element                 | Cryo                       |
| Damage Type                    | Skill                      |
| Duration                       | 6s                         |
| CD                             | 10s                        |
| Poise Damage                   | 80                         |
| Impulse Type                   | Cast: 3 <br/> Explosion: 4 |

</div>

**Notes**

* The taunt applies to all enemies in the game that are not considered bosses.
* **Ice Lotus** will generate particles on cast and when it expires or is destroyed.
* Multiple **Ice Lotuses** can be spawned without C2 Ganyu when using cooldown reduction effects.
* **Ice Lotus** will be placed mid-air when Ganyu is standing on a high platform.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute              | Ice Shard       |
| :--------------------- | :-------------- |
| Skill DMG \(T9%\)      | 119.46% \* 50   |
| Cast Frames            | 102             |
| Energy Frame           | 8               |
| CD Frame               | 1               |
| GU                     | 1A              |
| ICD                    | 3 hit / 2.5s    |
| Snapshot               | Snapshot        |
| Damage Element         | Cryo            |
| Damage Type            | Elemental Burst |
| Energy Cost            | 60              |
| Duration               | 15s             |
| CD                     | 15s             |
| Cast Poise Damage      | 400             |
| Cast Impulse Type      | Heavy, 1200, 0  |
| Ice Shard Poise Damage | 60              |
| Ice Shard Type         | 2               |

</div>

**Notes**

* Celestial Shower drops **Ice Shards** every 0.3 seconds.
* The **Sacred Cryo Pearl** will drop a shard **on a random enemy within the field that has not been targeted by a shard in the last 4** **Ice Shards**.
* If there are no enemies that have not been targeted by the last 4 shards, they will randomly drop within the field where the shard AoE can still strike a target.
* Ganyu's icicles follow standard ICD (3-hit/2.5s).
* Ganyu's icicles are more likely to hit targets that are larger in size.
* If **Celestial Shower** is cast before the previous one ends through the use of cooldown reduction, the existing field will end prematurely.

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

**Notes**

* Undivided Heart will not apply to the first **Frostflake Bloom**, but will apply on consecutive shots.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* **Celestial Shower's** Cryo DMG bonus can apply to itself if Ganyu casts subsequent bursts off cooldown within the radius of the prior burst. This buff can be snapshotted.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Dew-Drinker's Cryo RES down will apply to the **Bloom** if the enemy is hit by the **Frostflake Arrow**.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />
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

<Card item={require('../../evidence/characters/cryo/ganyu.md')} />
