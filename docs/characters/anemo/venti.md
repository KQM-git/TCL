---
description: One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.
---

import char from '@site/src/data/characters/Venti.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Venti

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Venti.png')} alt="Venti's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Venti Guide](https://keqingmains.com/venti/)
* [Venti Mains Discord](https://discord.gg/ventimains)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String    | Talent 9%  | Frames | MV\s      | Poise Damage | Impulse Type |
| :-------- | :--------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG | 37.45% x 2 | 30     | 149.80%/s | 6 x2         | 1 x2         |
| 2-Hit DMG | 81.53%     | 38     | 128.73%/s | 13.8         | 1            |
| 3-Hit DMG | 96.22%     | 33     | 174.95%/s | 15.6         | 1            |
| 4-Hit DMG | 47.87% x 2 | 31     | 185.30%/s | 7.68 x2      | 1 x2         |
| 5-Hit DMG | 93.06%     | 22     | 253.80%/s | 15           | 1            |
| 6-Hit DMG | 130.35%    | 98     | 79.81%/s  | 20.4         | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type          | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type      |
| :------------ | :-------- | :----- | :-------- | :-- | :----------- | :---------------- |
| Aimed Shot    | 80.58%    | 23     | 210.21%/s | -   | 10           | 2 \(Headshot: 5\) |
| Fully Charged | 210.8%    | 94     | 134.55%/s | 1A  | 20           | 2 \(Headshot: 5\) |

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
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute       | Tap     | Hold         |
| :-------------- | :------ | :----------- |
| Skill DMG (T9%) | 469.20% | 646%         |
| Particles       | 3 \(-\) | 4 \(-\)      |
| GU              | 2U      | 2U           |
| ICD             | None    | 3 hit / 2.5s |
| Snapshot        | -       | -            |
| Damage Element  | Anemo   | Anemo        |
| Damage Type     | Skill   | Skill        |
| Cooldown        | 6s      | 15s          |
| Poise Damage    | 150     | 150          |
| Impulse Type    | 7       | 7            |

</div>

**Notes**

* Doing a Normal Attack as soon as possible after using the press version of **Skyward Sonnet** allows the user to swap to a different character faster.
* Venti can shorten the starting animation of the press version of **Skyward Sonnet** by holding Elemental Skill for 9 frames, which starts the animation for the hold version of **Skyward Sonnet**, and then releasing, which cancels the Hold version into a Press version of **Skyward Sonnett**. This allows Venti to perform an action immediately after. In total, the **Skyward Sonnet** cast can be cancelled to be only 10 frames.
* Using the Press version of **Skyward Sonnett** immediately after shooting a non-ARCC Charged Attack will reduce essentially all of the Skill's animation frames.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute       | Burst DoT    | Burst Additional Elemental DMG |
| :-------------- | :----------- | :----------------------------- |
| Skill DMG (T9%) | 63.92% \* 20 | 31.96% \* 15\*                 |
| GU              | 1U           | 1A                             |
| ICD             | 3 hits       | 3 hits                         |
| Duration        | 8s           | 6.0s                           |
| Total Ticks     | 20           | 15\* (FPS Dependent)           |
| Snapshot        | Snapshot     | Snapshot                       |
| Damage Element  | Anemo        | Absorbed Element               |
| Damage Type     | Burst        | Burst                          |
| CD              | 15s          | -                              |
| Energy Cost     | 60           | -                              |
| Poise Damage    | 4            | 0                              |
| Impulse Type    | 2            | 0                              |

</div>

**Notes**

* Absorption priority: Pyro > Hydro > Electro > Cryo
* The **Stormeye** is elevated above the ground. Some attacks are unable to hit enemies that are lifted.
* Venti cannot lift enemies that are more than 20 levels above his level.
* Elemental absorption can occur at soonest, **after the 4th Anemo tick**
  * The additional Elemental DMG will deal 13-15 ticks of damage in the original Burst area, no matter the time of absorption.
  * The absorption DMG does not share ICD with the DoT DMG
* Venti's vortex can be fired on top of Zhongli's pillar, allowing Venti to pull in targets whilst keeping them just low enough for melee units to hit.

\* Number of ticks is FPS-dependent and inconsistent. 13 or 14 ticks at 30 FPS. 14 or 15 ticks at 60 FPS.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Venti.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

| Attack                                 | Poise Damage | Impulse Type |
| :------------------------------------- | :----------- | :----------- |
| Aimed Shot Extra Arrow                 | 1            | 2            |
| Aimed Shot Extra Arrow \(Headshot\)    | 3            | 5            |
| Fully Charged Extra Arrow              | 2            | 2            |
| Fully Charged Extra Arrow \(Headshot\) | 6            | 5            |

**Notes**

* Venti’s C1 damage instance is considered CA damage.

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

**Notes**

* The resistance reduction from Venti C6 lasts 10 seconds from the last tick of damage taken. Anemo RES reduction duration can only be refreshed by Anemo DMG ticks, while the infused Element's RES reduction duration is refreshed by that Element's DOT ticks.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/venti.md')} />
