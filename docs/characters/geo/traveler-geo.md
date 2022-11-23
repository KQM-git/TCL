---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Geo).json'
import lumine from '@site/src/data/characters/Lumine_(Geo).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Geo)

![](/img/traveler/geo-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Geo Traveler Written Guide](https://keqingmains.com/geo-traveler/)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

import TravelerStats from '../\_common/traveler_stats.md'

<TravelerStats />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na-aether' label='Aether Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

import AetherNA from '../_common/aether_na.md'

<AetherNA />

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

import AetherCA from '../_common/aether_ca.md'

<AetherCA />

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

* Aether is the male Traveler.
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='na' label='Lumine Normal Attacks'>
<SkillIcon char={lumine} skill='na' />
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Normal Attack' />

import LumineNA from '../_common/lumine_na.md'

<LumineNA />

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Charged Attack' />

import LumineCA from '../_common/lumine_ca.md'

<LumineCA />

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

* Lumine is the female Traveler.
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 421.6%      |
| Particles         | 3~4 \(2:1\) |
| GU                | 2U          |
| ICD               | Standard    |
| Snapshot          | Snapshot    |
| Damage Element    | Geo         |
| Damage Type       | Skill       |
| Duration          | 30s         |
| CD                | 8s          |
| Poise Damage      | 133.2       |
| Impulse Type      | 5           |

</div>

**Notes**

* The **meteorite** is considered a **Geo Construct** and can be climbed or use to block attacks
* Holding allows you to aim where the **meteorite** appears and has a faster animation time.
* **Starfell Sword** can be manually detonated by over-capping the Geo Constructs limit (3 constructs).
* See this [Vault Entry](../../evidence/characters/geo/traveler-geo.md#rockstep-tech) for different techniques on using the **meteorite**.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute             | Burst                              |
| :-------------------- | :--------------------------------- |
| Shockwave DMG \(T9%\) | 251.6%                             |
| GU                    | 2U                                 |
| ICD                   | Standard                           |
| Snapshot              | Snapshots                          |
| Damage Element        | Geo                                |
| Damage Type           | Burst                              |
| Energy Cost           | 60s                                |
| Duration              | 15s                                |
| CD                    | 15s                                |
| Poise Damage          | Shockwave: 100 <br/> Ending: 10.59 |
| Impulse Type          | Shockwave: 4 <br/> Ending: 3       |

</div>

**Notes**

* Creates 4 walls one in each cardinal direction from where the character is facing.
* These are considered **Geo Construct**s but do not count towards the construct limit and cannot be climbed.
* These walls do not count towards the construct limit. They greatly improve Zhongli's resonance.
* The hitbox can be displaced by certain enemy attacks independently from the visuals of the walls.

</TabItem>
</Tabs>

## Frames

import Frames from '@site/src/components/char/Frames'

### Common

import commonFrames from '@site/src/data/frames/Traveler_(Common).json'

<Frames data={commonFrames} />

### Geo

import anemoFrames from '@site/src/data/frames/Traveler_(Geo).json'

<Frames data={anemoFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 13.5         | 2            |

**Notes**

* This damage bonus is also considered Normal Attack Damage that also deals Elemental DMG.
* This allows Geo Traveler to activate 3 stacks of Mistsplitter Reforged without requiring infusion.
* This instance of damage happens before N5 for Aether and after N5 for Lumine.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Note that this bonus does not apply to the Burst damage UNLESS it is cast within a prior **Wake of Earth**.
* The buff stays even when the walls are destroyed by enemies or invisible from teleporting away.
* The buff is not applied immediately when switching characters, instead it ticks once every ~1s and lingers for ~2s.
* The buff has a vertical limit. When characters like Xiao jump from a construct such as Albedo's Solar Isotoma, they will no longer recieve the buff. See this [Vault Entry](../../evidence/characters/geo/traveler-geo.md#gmc-wake-of-earth-interactions) for visuals and further explanation.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 133.2        | 5            |

**Notes**

* If a **meteorite** is destroyed immediately after summoning this will not activate.
* **Rockcore Meltdown** damage is considered Elemental Skill damage.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* Only applies to the Traveler.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value="c6" label="C6">
<Constellation char={char} constellation={6} />
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

<Card item={require('../../evidence/characters/geo/traveler-geo.md')} />
