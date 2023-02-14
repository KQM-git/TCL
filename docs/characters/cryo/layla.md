---
description: A Rtawahist student who specializes in Theoretical Astrology. Heavily prone to somnambulism and locked in a grinding war with sleep deprivation, the problem of restful slumber is a most troubling one to her.
---

import char from '@site/src/data/characters/Layla.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Layla

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Layla.png')} alt="Layla's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Layla Quick Guide](https://keqingmains.com/q/layla-quickguide/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 94.10%    | 25     | 225.84%/s | 53.60        | 3            |
| 2-Hit  | 89.07%    | 42     | 127.24%/s | 50.74        | 3            |
| 3-Hit  | 134.07%   | 73     | 110.19%/s | 76.37        | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 87.69% + 96.54% | 57     | 193.93%/s | 60 + 60      | 2 + 5        |
| N1C    | 278.33%         | 94     | 177.66%/s | 176.60       | 8            |
| N2C    | 273.30%         | 100    | 163.98%/s | 170.74       | 8            |

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

| Attribute      | Skill         | Shooting Star | Shield                           |
| :------------- | :------------ | :------------ | :------------------------------- |
| DMG \(T9%\)    | 21.76% Max HP | 25.02% Max HP | 18.36 + 2114 Max HP (absorption) |
| Particles      | 1~2 (2:1)     | -             | -                                |
| GU             | 1U            | 1U            | 1U (self)                        |
| ICD            | None          | 7 hit / 3s    | -                                |
| Snapshot       | -             | Snapshot      | -                                |
| Damage Element | Cryo          | Cryo          | Cryo                             |
| Damage Type    | Skill         | Skill         | -                                |
| Duration       | -             | -             | 12                               |
| CD             | 12            | -             | -                                |
| Poise Damage   | 30            | 15            | -                                |
| Impulse Type   | 3             | 2             | -                                |

</div>

**Notes**

* When re-casting **Nights of Formal Focus** while the **Curtain of Slumber** is active, the duration of **Shooting Stars** will be extended.
* Certain characters can "use" an Elemental Skill twice so that Layla generates extra Night Stars. These include but are not limited to Yelan, Sayu, Tartaglia, Fischl, Mona, and Keqing.
* Each individual Shooting Star snapshots when it launches.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst       |
| :---------------- | :---------- |
| Burst DMG \(T9%\) | 7.9% Max HP |
| GU                | 1U          |
| ICD               | Standard    |
| Snapshot          | Snapshot    |
| Damage Element    | Cryo        |
| Damage Type       | Burst       |
| Energy Cost       | 40          |
| Duration          | 12          |
| Cooldown          | 12          |
| Poise Damage      | 20          |
| Impulse Type      | 2           |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Layla.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* The Shield Strength transfers to the character on-field.
* **Like Nascent Light** and **Shooting Stars** don't reset when Layla's shield is refreshed.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
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

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/layla.md')} />
