---
description: An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.
---

import char from '@site/src/data/characters/Shenhe.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Shenhe

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Shenhe.png')} alt="Shenhe's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [The Divine Damsel of Devastation: A Shenhe Guide](https://keqingmains.com/shenhe/)

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

| String   | Talent 9%       | Frames   | MV/s      | Poise Damage | Impulse Type |
| :------- | :-------------- | :------- | :-------- | :----------- | :----------- |
| 1-Hit    | 79.47%          | 29       | 164.42%/s | 46.08        | 3            |
| 2-Hit    | 73.94%          | 23       | 192.89%/s | 43.44        | 3            |
| 3-Hit    | 97.96%          | 38       | 154.67%/s | 56.32        | 3            |
| 4-Hit    | 48.35% + 48.35% | 30       | 193.40%/s | 27.88 x2     | 2 + 4        |
| 5-Hit    | 120.55%         | 59       | 122.59%/s | 73.6         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames  | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :------ | :-------- | :----------- | :----------- |
| CA     | 203.33%   | 52      | 234.61%/s | 120          | 5            |
| N1C    | 282.80%   | 80      | 212.10%/s | -            | -            |

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

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Press      | Hold       |
| :---------------- | :--------- | :--------- |
| Skill DMG \(T9%\) | 236.64%    | 320.96%    |
| DMG Bonus         | 77.62% ATK | 77.62% ATK |
| Trigger Quota     | 5          | 7          |
| Particles         | 3 \(-\)    | 4 \(-\)    |
| GU                | 1U         | 2U         |
| ICD               | None       | None       |
| Snapshot          | -          | -          |
| Damage Element    | Cryo       | Cryo       |
| Damage Type       | Skill      | Skill      |
| Duration          | 10s        | 15s        |
| CD                | 10s        | 15s        |
| Poise Damage      | 100        | 200        |
| Impulse Type      | 3          | 2          |

</div>

**Notes**

* **Icy Quill** damage increase is calculated as Additive Base DMG Bonus.
* Initial damage on Press factors in **Spirit Communion Seal** \(A4\).
* **Spring Spirit Summoning** itself consumes an **Icy Quill** stack
* Multiple usages of **Spring Spirit Summoning** only refresh **Icy Quill** stacks and the respective version of **Spirit Communion Seal**'s \(A4\) buff duration.
* **Icy Quill** are Dynamic.
* **Icy Quill** stacks can get dynamically added onto ongoing/existing snapshotted abilities.
* Anemo Abilities with Cryo absorbed consume **Icy Quill** stacks.
  * Additionally, Cryo Swirls don't consume **Icy Quill** stacks
* Triggering **Icy Quill** on a snapshot ability uses the snapshotted stats.
* **Spring Spirit Summoning** \(Press\) does not have hitlag.
* **Spring Spirit Summoning** \(Press\) is capable of escaping Mirror Maiden's cage. **Spring Spirit Summoning** \(Hold\) however, is not.
* **Icy Quill** stacks are used up even if no damage is dealt to an enemy (when they have a shield).
* **Icy Quill** stacks increase the damage dealt to shields \(excluding Cryo\) by ~15 to 20% .
* **Spring Spirit Summoning** \(Hold\) makes Shenhe immune to all staggers and knockbacks for its animation duration.
* **Icy Quill** stacks are not consumed when used on Slime balloons.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute            | Initial Hit | DoT         |
| :------------------- | :---------- | :---------- |
| Skill DMG \(T9%\)    | 171.36%     | 56.3% \* 12 |
| RES Decrease \(T9%\) | 14%         | -           |
| Tick Rate            | -           | 2s          |
| GU                   | 1U          | 1U          |
| ICD                  | -           | Standard    |
| Snapshot             | Dynamic     | Snapshot    |
| Damage Element       | Cryo        | Cryo        |
| Damage Type          | Burst       | Burst       |
| Energy Cost          | 80          | -           |
| Duration             | 12s         | -           |
| CD                   | 20s         | -           |
| Poise Damage         | 250         | 50          |
| Impulse Type         | 3           | 2           |

</div>

**Notes**

* Damage ticks twice every 2 seconds
* Cooldown Starts on press.
* Duration timer starts after the animation.
* Energy Consumption is on press.
* DoT snapshots ATK Buffs and 2-Piece Noblesse but not Shenhe's **Deific Embrace** \(A1\).
* RES Shred persists 2 seconds after **Divine Maiden's Deliverance** ends.
* **Divine Maiden's Deliverance** does not have enough i-frames for explosive barrel immunity.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Shenhe.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* **Deific Embrace** is dynamic and changes as the character enters and exits the **Divine Maiden's Deliverance** field.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* Buff durations for **Spring Spirit Summoning** \(Press\) and **Spring Spirit Summoning** \(Hold\) are independent.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* The charges refreshes **Icy Quill** stacks based on the latest type of **Spring Spirit Summoning** cast \(Press/Hold\).

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* The CRIT DMG buff shortly lingers after **Divine Maiden's Deliverance** ends.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* Stacks are gained after the damage has been dealt .

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

<Card item={require('../../evidence/characters/cryo/shenhe.md')} />
