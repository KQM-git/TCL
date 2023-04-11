---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Electro).json'
import lumine from '@site/src/data/characters/Lumine_(Electro).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Electro)

![](/img/traveler/electro-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Electro Traveler Written Guide](https://keqingmains.com/electro-traveler/)

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
| Skill DMG \(T9%\) | 133.73% x 3 |
| Particles         | 1           |
| GU                | 1U          |
| ICD               | Standard    |
| Snapshot          | Snapshot    |
| Damage Element    | Electro     |
| Damage Type       | Skill       |
| CD                | 13.5s       |
| Poise Damage      | 100         |
| Impulse Type      | 3           |

</div>

| Attribute                | Abundance Amulet (Talent 9%) |
| :----------------------- | :--------------------------- |
| Energy Regeneration      | 4                            |
| Energy Recharge Increase | 20%                          |
| Duration                 | 6s                           |
| Field Duration           | 15s                          |

**Notes**

* Different units can each pick up one **Abundance Amulet** generated from one **Lightning Blade** cast to gain its effects.
* The Energy Recharge gained from **Abundance Amulets** does not affect Raiden's A4 Passive, Mona's A4 Passive, the 4-Piece bonus from Emblem of Severed Fate or the Engulfing Lightning.
* The number of **Abundance Amulets** generated depends on the number of Lightning Blades hit AND number of enemies hit.
* Hitting a shield will still generate **Abundance Amulets**
* There is a delay before the **Abundance Amulets** can be picked up, on average 1.79s.
* The ER% buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                   | Burst                               |
| :-------------------------- | :---------------------------------- |
| Skill DMG \(T9%\)           | 194.48%                             |
| Falling Thunder DMG \(T9%\) | 55.76%                              |
| Energy Regeneration         | 1                                   |
| GU                          | 1U                                  |
| ICD                         | Standard                            |
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

* The Energy regenerated from **Falling Thunder** is classified as flat Energy.
* **Falling Thunder** DMG snapshots on **Bellowing Thunder** cast.
* **Falling Thunder** can generate Energy even when hitting Dendro Cores and other targetable non-living objects.

</TabItem>
</Tabs>

## Frames

import Frames from '@site/src/components/char/Frames'

### Common

import commonFrames from '@site/src/data/frames/Traveler_(Common).json'

<Frames data={commonFrames} />

### Electro

import anemoFrames from '@site/src/data/frames/Traveler_(Electro).json'

<Frames data={anemoFrames} />

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

**Notes**
  
* This effect persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* This bonus will apply regardless of if the final Energy gained exceeds said threshold.

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
