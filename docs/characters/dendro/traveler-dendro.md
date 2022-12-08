---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Dendro).json'
import lumine from '@site/src/data/characters/Lumine_(Dendro).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Dendro)

![](/img/traveler/dendro-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

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

| Attribute      | Skill       |
| :------------- | :---------- |
| DMG \(T9%\)    | 391.68%     |
| Particles      | 2~3 \(1:1\) |
| GU             | 1U          |
| ICD            | None        |
| Damage Element | Dendro      |
| Damage Type    | Skill       |
| CD             | 8s          |
| Poise Damage   | 120         |
| Impulse Type   | 4           |

</div>

**Notes:**  

* It can hit a Ruin Guard's Weakspot.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Default              | Hydro                | Electro              | Pyro                              |
| :------------- | :------------------- | :------------------- | :------------------- | :-------------------------------- |
| DMG \(T9%\)    | 136.27%              | 136.27%              | 136.27%              | 681.36%                           |
| Tick Rate      | 1.5s                 | 1.5s                 | 0.9s                 | -                                 |
| Total Ticks    | C0: 9<br />C2: 11    | C0: 9<br />C2: 11    | C0: 15<br />C2: 17   | -                                 |
| GU             | 1U                   | 1U                   | 1U                   | 2U                                |
| ICD            | 3 hit / 2.5s         | 3 hit / 2.5s         | 3 hit / 2.5s         | None                              |
| Snapshot       | Snapshot             | Snapshot             | Snapshot             | Snapshot                          |
| Damage Element | Dendro               | Dendro               | Dendro               | Dendro                            |
| Damage Type    | Burst                | Burst                | Burst                | Burst                             |
| Energy Cost    | 80                   | -                    | -                    | -                                 |
| Duration       | C0: 12s<br />C2: 15s | C0: 12s<br />C2: 15s | C0: 12s<br />C2: 15s | Depends on when it's transfigured |
| Cooldown       | 20s                  | -                    | -                    | -                                 |
| Poise Damage   | 30                   | 50                   | 30                   | 200                               |
| Impulse Type   | 1                    | 1                    | 1                    | 1                                 |

</div>

**Notes:**  

* AdditiveReactionDamage \(flat number added to multiplier\) is calculated dynamically with respect to DMC's A1.
  * The Spread's total damage is calculated with the snapshotted A4 DMG Bonus% for that Lamp tick.
* **Lotuslight Transfiguration** can't be triggered by auras on characters or enemies \(except the AoE spreading part of Burning auras on enemies\), it can only be triggered by Elemental attacks from characters and enemies.
* Zero damage attacks can trigger **Lotuslight Transfiguration**, but zero gauge attacks can't.
* With the correct timing, the **Lea Lotus Lamp** will do an extra tick right after **Lotuslight Transfiguration** is triggered.
  * Hydro: within 0.15s before or 0.37s after any tick.
  * Electro: within 0.87s after the 1st tick or between 1.15s and 1.75s after the 1st tick.
* The **Lea Lotus Lamp** spawns ~1m directly in front of DMC in whatever direction they're facing.
* The radius of the **Lea Lotus Lamp** AoE is ~3 abyss tiles without Hydro Transfiguration and ~5 with Hydro Transfiguration.
* The **Lea Lotus Lamp** can hold a Cryo aura before it's transfigured and can't be transfigured until the aura is gone.
  * It can also hold a Frozen aura and be Shattered.
* Summons such as Oz and Guoba will target an untransfigured Lamp when there are no enemies nearby, but will target the enemies otherwise.
* DMC snapshots 2 Mistsplitter Reforged stacks on Burst cast.

</TabItem>
</Tabs>

## Frames

import Frames from '@site/src/components/char/Frames'

### Common

import commonFrames from '@site/src/data/frames/Traveler_(Common).json'

<Frames data={commonFrames} />

### Dendro

import anemoFrames from '@site/src/data/frames/Traveler_(Dendro).json'

<Frames data={anemoFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes:**  

* A1 timer starts when the Burst is casted, not when the first tick hits, so 1 stack is applied to the first tick.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes:**  

* A4 is calculated as DMG Bonus%.
* A4 doesn't get DMG Bonus% from Sucrose's A4 EM sharing.
* A4 snapshots the EM that DMC has when they go off-field and updates it when they come back on-field.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes:**  

* C1 generates 3.5 Energy regardless of the number of enemies hit.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes:**  

* The 5 stacks from C4 are applied to the 2nd tick even if the Lamp is transfigured before the 1st tick, and its timing is independent from regular A1 stacks \(which stays 1 per second\).

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes:**  

* Dendro DMG Bonus starts when the Lamp is placed down and ends when it disappears, but it does not apply to DMC's Burst since it snapshots slightly before C6 starts.
* Hydro/Electro/Pyro DMG Bonus starts as soon as the Lamp is transfigured and ends when it disappears \(in the case of Pyro it's about 2 seconds in total\).

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

<Card item={require('../../evidence/characters/dendro/traveler-dendro.md')} />
