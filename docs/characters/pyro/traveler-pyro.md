---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Pyro).json'
import lumine from '@site/src/data/characters/Lumine_(Pyro).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Pyro)

<!-- ![](/img/traveler/pyro-traveler.png) -->

<blockquote>{frontMatter.description}</blockquote>

<!-- ## Resources -->

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

<!-- 
| Attribute      | Tap       | Hold      |
| :------------- | :-------- | :-------- |
| DMG \(T9%\)    |           |           |
| Particles      |           |           |
| GU             |           |           |
| ICD            |           |           |
| Snapshot       |           |           |
| Damage Element |           |           |
| Damage Type    |           |           |
| Duration       |           |           |
| CD             |           |           |
| Poise Damage   |           |           |
| Impulse Type   |           |           |
-->

</div>

<!-- **Notes**

*  -->

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

<!-- 
| Attribute         | Primary   | Secondary |
| :---------------- | :-------- | :-------- |
| DMG \(T9%\)       |           |           |
| GU                |           |           |
| ICD               |           |           |
| Snapshot          |           |           |
| Damage Element    |           |           |
| Damage Type       |           |           |
| Energy Cost       |           |           |
| Duration          |           |           |
| Cooldown          |           |           |
| Poise Damage      |           |           |
| Impulse Type      |           |           |
-->

</div>

<!-- **Notes**

*  -->

</TabItem>
</Tabs>

## Frames

import Frames from '@site/src/components/char/Frames'

### Common

import commonFrames from '@site/src/data/frames/Traveler_(Common).json'

<Frames data={commonFrames} />
<!--
### Pyro
import anemoFrames from '@site/src/data/frames/Traveler_(Pyro).json'
<Frames data={anemoFrames} />
-->

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
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

<Tabs queryString="constellation">
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

<Card item={require('../../evidence/characters/pyro/traveler-pyro.md')} />
