---
description: A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.
---

import char from '@site/src/data/characters/Xingqiu.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Xingqiu

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Xingqiu.png')} alt="Xingqiu's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Xingqiu Mains Discord](https://discord.gg/5MKsJyhkQv)
* [A Revised Xingqiu Handbook](https://keqingmains.com/xingqiu-short/)
* [Extended Xingqiu Guide: Prospector of Precipitation](https://keqingmains.com/xingqiu-extended/)
* [5 Minute Video Guide to Xingqiu](https://youtu.be/EiOP60N4p58)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9%     | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :------------ | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 85.64%        | 24     | 214.10%/s | 47.7         | 3            |
| 2-Hit  | 87.53%        | 30     | 175.06%/s | 49.5         | 3            |
| 3-Hit  | 52.46% \(x2\) | 41     | 153.54%/s | 29.3 x2      | 3 x2         |
| 4-Hit  | 102.86%       | 36     | 171.43%/s | 57.6         | 3            |
| 5-Hit  | 65.89% \(x2\) | 86     | 91.94%/s  | 36.81 x2     | 6 x2         |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :-------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 86.9% + 103.17% | 58     | 196.62%/s | 50.3 x2      | 2 + 6        |
| N1C            | 275.71%         | 99     | 167.10%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Enemies struck by Xingqiu's Charged Attack will be staggered or launched.


</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute       | Skill            |
| :-------------- | :--------------- |
| Skill DMG (T9%) | 285.6% + 325.04% |
| Particles       | 5 \(-\)          |
| GU              | 1U \(x2\)        |
| ICD             | None             |
| Damage Element  | Hydro            |
| Damage Type     | Skill            |
| CD              | 21s              |
| Poise Damage    | 120 x2           |
| Impulse Type    | 3 x2             |

</div>

| Attribute           | Rain Swords         |
| :------------------ | :------------------ |
| DMG Reduction (T9%) | 20% Hydro DMG + 28% |
| Snapshot            | Snapshot            |
| GU                  | 1U                  |
| ICD                 | 2.25s               |
| Duration            | 15s                 |

**Notes**

* The DMG Reduction:
  * Does not take the Hydro DMG Bonus% gained from Kazuha's A4 into account.
  * Is affected by Mistsplitter's passive.
  * Does not work for the self-damage from Burgeon.
* Increased resistance to interruption stacks with other skills of similar effects.
* After the **Rain Swords** pop, there is a small window of time where Xingqiu can apply Hydro to enemies, even if the rain swords aren't visible.
  * This occurs with the orbitals created by both Xingqiu's Skill and Burst.
* Only one **Rain Sword** can be shattered at a time, and the shattering has a cooldown of 1.5s.
* Using **Guhua Sword: Fatal Rainscreen** applies a very brief 1U Hydro aura onto the character.
* EQE is about 0.5 \- 1s slower on average compared to QEE or EEQ in teams where Xingqiu's E CD gates the rotation time. See more in this [Vault Entry](../../evidence/characters/hydro/xingqiu.md#xingqiu-eqe-vs-qee).
* See [this vault entry](../../evidence/characters/hydro/xingqiu.md#what-triggers-xq-rainsword-healing) for a list of specific edge cases that trigger the healing from breaking the Rain Swords

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute            | Burst                             |
| :------------------- | :-------------------------------- |
| Sword Rain DMG (T9%) | 92.26%                            |
| GU                   | 1U                                |
| ICD                  | Standard                          |
| Snapshot             | Dynamic                           |
| Damage Element       | Hydro                             |
| Damage Type          | Burst                             |
| Energy Cost          | 80                                |
| Duration             | 15s                               |
| CD                   | 20s                               |
| Poise Damage         | Cast: 400 <br/> Sword Rain: 25    |
| Impulse Type         | Cast: 4 <br/> Sword Rain: 0 / 1\* |

</div>

\* Only the right one in 2, center one in 3, and center one in 5.

**Notes**

* The number of **Sword Rain** attacks in each wave cycles in a 2-3 sequence, with the first wave having 2 Sword Rain attacks.
* **Rain Swords** will not shatter.
* **Rain Swords** DMG Reduction created by **Guhua Sword: Raincutter** also snapshots.
  * Before swapping, **Guhua Sword: Raincutter**'s Rain Swords will always override **Guhua Sword: Fatal Rainscreen**'s .
  * After swapping, the DMG Reduction is based on the most recently cast Rain Swords.
* **Sword Rain** waves can be triggered at most once a second. So long as you are still in a normal attack animation, the next **Sword Rain** wave will be triggered as soon as possible.
  * Some normal attack animations, which persist longer than 1 second, can trigger multiple **Sword Rain** waves.
* The Normal Attack may be cancelled, but **Sword Rain** wave will still be triggered.
* **Guhua Sword: Raincutter** does not snapshot buffs on cast. However, each wave of sword rain attacks from **Guhua Sword: Raincutter** will snapshots buffs when they are summoned.
* Xingqiu's Burst has 106 [idle i-frames](../../combat-mechanics/frames.md#burst-idle-iframes) \(1.8s\).
* Burst Cancelling by using a special interaction on Xingqiu causes his Burst Sword Rain to not proc and his Skill to not create Rain Sword Orbitals.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Xingqiu.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />
 
**Notes**
 
* The effect persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* This effect is multiplicative.
  * See: [Damage Formula](../../combat-mechanics/damage/damage-formula.md#evilsoother)

</TabItem>

<TabItem value="c5" label="C5">
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value="c6" label="C6">
<Constellation char={char} constellation={6} />

**Notes**

* Changes the number of **Sword Rain** attacks created in the wave cycles of Guhua Sword: Raincutter's **Sword Rain** waves to a 2-3-5 sequence. Xingqiu regenerates 3 Energy when the third **Sword Rain** wave hits opponents.
* Energy regeneration is not affected by Energy Recharge.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/xingqiu.md')} />
