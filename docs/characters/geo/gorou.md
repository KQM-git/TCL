---
description: The great general of Watatsumi Island's forces. He is deeply trusted by his subordinates.
---

import char from '@site/src/data/characters/Gorou.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Gorou

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Gorou.png')} alt="Gorou's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

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
| 1-Hit  | 69.36%    | 21     | 198.17%/s | 13.17        | 1            |
| 2-Hit  | 68.26%    | 26     | 157.52%/s | 12.96        | 1            |
| 3-Hit  | 90.85%    | 43     | 126.77%/s | 17.25        | 1            |
| 4-Hit  | 108.39%   | 55     | 118.24%/s | 20.58        | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type          | Talent 9% | Frames | MV/s      | GU  | Poise Damage        | Impulse Type      |
| :------------ | :-------- | :----- | :-------- | :-- | :------------------ | :---------------- |
| Aimed Shot    | 80.58%    | 23     | 193.39%/s | -   | 10 \(Headshot: 30\) | 2 \(Headshot: 5\) |
| Fully Charged | 210.8%    | 94     | 134.55%/s | 1U  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Fully Charged Charged Attack has no ICD.
* N1 will come out even if canceled early. Cancels include jump, dash, skill, and most notably, aim mode.
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute            | War Banner |
| :------------------- | :--------- |
| Skill DMG \(T9%\)    | 182.24%    |
| DEF Increase \(T9%\) | 350        |
| Geo DMG Bonus        | 15%        |
| Particles            | 2 \(-\)    |
| GU                   | 1U         |
| ICD                  | 1s         |
| Snapshot             | -          |
| Damage Element       | Geo        |
| Damage Type          | Skill      |
| Duration             | 10s        |
| CD                   | 10s        |
| Poise Damage         | 80         |
| Impulse Type         | 4          |

</div>

**Notes**

* Gorou counts as one of the Geo characters for **General's War Banner**'s buff condition.
* The initial hit of **Inuzaka All-Round Defense** does not benefit from its own buff.
* There is a delay before applying the buff effects of **General's War Banner**.
* The **General's War Banner** is not affected by gravity.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst       | Crystal Collapse |
| :---------------- | :---------- | :--------------- |
| Skill DMG \(T9%\) | 166.97% DEF | 104.21% DEF      |
| GU                | 1U          | 1U               |
| ICD               | -           | Standard         |
| Snapshot          | -           | Dynamic          |
| Damage Element    | Geo         | Geo              |
| Damage Type       | Burst       | Burst            |
| Energy Cost       | 80          | -                |
| Duration          | 9s          | -                |
| CD                | 20s         | -                |
| Poise Damage      | 40          | 20               |
| Impulse Type      | 4           | 1                |

</div>

**Notes**

* The initial hit of **Juuga: Forward Unto Victory** does not benefit from its own buff.
* The initial hit of **Juuga: Forward Unto Victory** benefits from A1: **Heedless of the Wind and Weather**.
* **General's Glory** has a tickrate of 0.3s \(17-18f\).
* A1/C6 activate on hitmark \(frame 30\).

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Gorou.json'
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

* The DEF increase of **Heedless of the Wind and Weather** only scales off of the base defense stat.

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

**Notes**

* The effect of **Rushing Hound: Swift as the Wind** can be snapshotted along with the buffs of **General's War Banner**.

</TabItem>

<TabItem value="c2" label="C2">
<Constellation char={char} constellation={2} />
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* The healing is dynamic and does not snapshot Gorou's DEF on cast.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* The CRIT DMG increase does not snapshot.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/geo/gorou.md')} />
