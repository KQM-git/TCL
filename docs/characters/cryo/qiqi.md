---
description: An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.
---

import char from '@site/src/data/characters/Qiqi.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Qiqi

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Qiqi.png')} alt="Qiqi's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Qiqi Guide](https://keqingmains.com/qiqi/)

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

| String | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 69.36%          | 20     | 208.08%/s | 25.2         | 3            |
| 2-Hit  | 71.42%          | 27     | 158.71%/s | 27.9         | 3            |
| 3-Hit  | 44.4% + 44.4%   | 44     | 121.09%/s | 35.1 + 12.6  |
| 4-Hit  | 45.35% + 45.35% | 39     | 139.54%/s | 12.6 x2      | 3 x2         |
| 5-Hit  | 115.81%         | 65     | 106.90%/s | 68.6         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%         | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :---------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 118.18% + 118.18% | 76     | 186.60%/s | 63 x2        | 6            |
| N1C            | 305.72%           | 103    | 178.09%/s | -            | -            |

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

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                       | Skill             |
| :------------------------------ | :---------------- |
| Skill DMG \(T9%\)               | 163.2%            |
| Regeneration on Hit \(T9%\)     | 17.95% ATK + 137  |
| Continuous Regeneration \(T9%\) | 118.32% ATK + 916 |
| Herald of Frost DMG \(T9%\)     | 61.2%             |
| Particles                       | 0 \(-\)           |
| GU                              | 1A                |
| ICD                             | 3 hit / 2.5s      |
| Snapshot                        | Snapshots         |
| Damage Element                  | Cryo              |
| Damage Type                     | Skill             |
| Duration                        | 15s               |
| CD                              | 30s               |
| Skill Poise Damage              | 40                |
| Skill Impulse Type              | 3                 |
| Herald of Frost Poise Damage    | 80                |
| Herald of Frost Impulse Type    | Light, 600, 400   |

</div>
</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Skill           |
| :---------------- | :-------------- |
| Skill DMG \(T9%\) | 484.16%         |
| Healing \(T9%\)   | 153% ATK + 1174 |
| GU                | 2B              |
| ICD               | None            |
| Snapshot          | Dynamic         |
| Damage Element    | Cryo            |
| Damage Type       | Burst           |
| Energy Cost       | 80              |
| Duration          | 15s             |
| CD                | 20s             |
| Poise Damage      | 200             |
| Impulse Type      | 4               |

</div>

**Notes**

* **Fortune-Preserving Talisman** is dynamic and does not snapshot any ATK bonus.
  * The healing scales off Qiqi's ATK, not the active character's ATK.
  * The healing will occur as long as the attack hits, regardless dealing any DMG or not.
  * The healing has an ICD of approximately 1 second

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Qiqi.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import ConstellationsFull from '@site/src/components/char/ConstellationsFull'

<ConstellationsFull char={char} />

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char} />

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/qiqi.md')} />
