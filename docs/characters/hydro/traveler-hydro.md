---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Hydro).json'
import lumine from '@site/src/data/characters/Lumine_(Hydro).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Hydro)

<!-- ![](/img/traveler/hydro-traveler.png) -->

<blockquote>{frontMatter.description}</blockquote>

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

import TravelerStats from '../\_common/traveler_stats.md'

<TravelerStats />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
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

| Attribute                           | Torrent Surge, Dewdrop, Spiritbreath Thorn | 
| :---------------------------------  | :----------------------------------------- |
| DMG \(T9%\)                         | 321.78%, 55.76%, 55.76%                    |
| Suffusion DMG Bonus \(T9%\)         | 1.09%  Max HP                              |
| Suffusion HP Cost                   | 4% Max HP                                  |
| Particles                           | 3~4 \(2-1\)                                |
| GU                                  | 1U, 1U, 0U                                 |
| ICD                                 | None, 1.5s, None                           |
| Snapshot                            | Dynamic                                    |
| Damage Element                      | Hydro                                      |
| Damage Type                         | Skill                                      |
| CD                                  | 10s <br /> Spiritbreath Thorn Interval: 9s |
| Duration                            | 6s (maximum)                               |
| Poise Damage                        | 100, 25, 20                                |
| Impulse Type                        | 2, 2, 2                                    |

</div>

**Notes**

* The **Arkhe: Pneuma Spiritbreath Thorn** can proc the reset on Sacrificial Sword.
* Hold Skill shoots a total of 22 Dewdrops over the maximum duration. The last Dewdrop is fired simulatenously with the Torrent Surge attack.
* Traveler remains stationary for a time after using Hold E on ice bridge and the ice bridge melts. Before they fall into the water, they cannot be controlled.
* **Sourcewater Droplets** from Skill function similarly to **Klee**/**Aloy** Skill when interacing with **Anemo** abilities. Droplets can be pulled. Droplets do not explode at the same time. Droplets do not have innate **Hydro** aura.
* In co-op, **Sourcewater Droplets** from other Hydro Travelers do not exist for you. You cannot see other their Sourcewater Droplets and you cannot use them to regain HP.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute        | Burst                                                        |
| :--------------- | :----------------------------------------------------------- |
| DMG \(T9%\)      | 173.17%                                                      |
| GU               | 1U                                                           |
| ICD              | 8s/4 hit                                                     |
| Snapshot         | Snapshot                                                     |
| Damage Element   | Hydro                                                        |
| Damage Type      | Burst                                                        |
| Energy Cost      | 80                                                           |
| Duration         | 4s                                                           |
| Cooldown         | 20s                                                          |
| Poise Damage     | 40                                                           |
| Impulse Type     | 2                                                            |

</div>

**Notes**

* Burst snapshots at beginning of animation.
* Burst cannot be pulled by **Anemo** abilities.
* Burst doesn't stop against Enemies, Geo Constructs or walls.

</TabItem>
</Tabs>

## Frames

import Frames from '@site/src/components/char/Frames'

### Common

import commonFrames from '@site/src/data/frames/Traveler_(Common).json'

<Frames data={commonFrames} />

### Hydro


import anemoFrames from '@site/src/data/frames/Traveler_(Hydro).json'

<Frames data={anemoFrames} />


## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
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
</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />
</TabItem>
</Tabs>

## Full Talent Values

import Talent from '@site/src/components/char/Talent'

<Tabs queryString="talent">
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

<Card item={require('../../evidence/characters/hydro/traveler-hydro.md')} />
