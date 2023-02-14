---
description: Formerly an outcast, now a hunter of unparalleled skill. Ready to do the right thing at any time.
---

import char from '@site/src/data/characters/Aloy.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Aloy

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Aloy.png')} alt="Aloy's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [[Full Written Guide] Aloy: Wandering Heroine](https://keqingmains.com/aloy/)

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

| String    | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :-------- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG | 35.52% + 39.96% | 31     | 146.09%/s | 7.65 x2      | 1 x2         |
| 2-Hit DMG | 72.52%          | 28     | 155.40%/s | 14.7         | 1            |
| 3-Hit DMG | 88.8%           | 38     | 140.21%/s | 18           | 1            |
| 4-Hit DMG | 110.41%         | 61     | 108.60%/s | 22.38        | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type          | Talent 9% | Frames | MV/s      | GU  | Poise Damage        | Impulse Type |
| :------------ | :-------- | :----- | :-------- | :-- | :------------------ | :----------- |
| Aimed Shot    | 80.58%    | 25     | 193.39%/s | -   | 10 \(Headshot: 30\) | 2            |
| Fully Charged | 210.8%    | 96     | 131.75%/s | 1U  | 20 \(Headshot: 60\) | 5            |

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
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Both Poise Damage and Impulse Type are the same for regular Normal Attacks and Normal Attacks during **Rushing Ice** state.
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Freeze Bomb | Chillwater Bomblets |
| :---------------- | :---------- | :------------------ |
| Skill DMG \(T9%\) | 301.92%     | 68%                 |
| Particles         | 5 \(-\)     | -                   |
| Frames            | 67          | -                   |
| GU                | 1U          | 1U                  |
| ICD               | -           | Standard            |
| Snapshot          | Snapshot    | Snapshot            |
| Damage Element    | Cryo        | Cryo                |
| Damage Type       | Skill       | Skill               |
| CD                | 20s         | -                   |
| Poise Damage      | 120         | 30                  |
| Impulse Type      | 2           | 3                   |

</div>

| Attribute                           | Talent 9 Data          |
| ----------------------------------- | ---------------------- |
| ATK Decrease                        | 14%                    |
| ATK Decrease Duration               | 6s                     |
| Coil Normal Attack DMG Bonus        | 9.07% / 18.13% / 27.2% |
| Rushing Ice Normal Attack DMG Bonus | 45.33%                 |
| Rushing Ice Duration                | 10s                    |
| CD                                  | 20s                    |

**Notes**

* Aloy's attacks while in the **Rushing Ice** state follow standard ICD (3 hits/2.5s)
* **Chillwater Bomblets** share ICD and follow standard ICD.
* Aloy can gain **Coil Stacks** while off-field.
* **Chillwater Bomblets** snapshot on **Frozen Wilds** cast.
* Recasting **Frozen Wilds** will cause existing **Chillwater Bomblets** to explode.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst    |
| :---------------- | :------- |
| Skill DMG \(T9%\) | 610.64%  |
| GU                | 2U       |
| ICD               | -        |
| Snapshot          | Snapshot |
| Damage Element    | Cryo     |
| Damage Type       | Burst    |
| Energy Cost       | 40       |
| CD                | 12s      |
| Poise Damage      | 200      |
| Impulse Type      | 3        |

</div>

**Notes:**  
* Aloy's Burst has 211 [idle i-frames](../../combat-mechanics/frames.md#burst-idle-iframes) \(3.5s\).

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Aloy.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />

**Notes**

* Animals still get startled if you get too close to them.
* Animals still get startled if you kill one of them in a group.

</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import ConstellationsFull from '@site/src/components/char/ConstellationsFull'

<ConstellationsFull char={char} />

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char} />

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/aloy.md')} />
