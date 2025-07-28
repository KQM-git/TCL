---
description: One of the Mighty and Illuminated Adepti of Jueyun, known as "Cloud Retainer." Expert in all kinds of mechanical contraptions, her heart now turns towards the affairs of the mortal world, through which she walks under the name "Xianyun."
---

import char from '@site/src/data/characters/Xianyun.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Xianyun


import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Xianyun.png')} alt="Xianyun's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!--
## Resources

* [Xianyun Mains Discord]()
* [Full Xianyun Written Guide]()
* [Xianyun Quick Guide]()
* [# Minute Video Guide to Xianyun]()
-->

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 68.5%     | 17     | 241.76%   | 7.6          | 2            |
| 2-Hit  | 66.1%     | 24     | 166.25%   | 7.3          | 2            |
| 3-Hit  | 83.1%     | 40     | 124.65%   | 9.2          | 2            |
| 4-Hit  | 110.4%    | 93     | 71.23%    | 12.2         | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| CA     | 209.3%    | 56     | 224.25% | 90        | 4            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 3            |
| High Plunge DMG | 260.76%   | 100          | 4            |

</div>

**Notes**

* CA projectiles travel along the ground and can go through walls
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


<div>

| Attribute      | Skyladder | Driftcloud Wave |
| :------------- | :-------- | :-------- |
| DMG \(T9%\)    | 42.16%    |           |
| Particles      | -         | 4         |
| GU             | 0U        | 1U        |
| ICD            | None      | None      |
| Damage Element | Anemo     | Anemo     |
| Damage Type    | Skill     | Plunge    |
| CD             | 12s/9s    |           |
| Poise Damage   | 30        |           |
| Impulse Type   | 3         |           |

| Driftcloud Wave | DMG (T9%) | Poise Damage | Impulse Type  |
| :-------------- | :-------- | :----------- | :------------ |
| Level 1         | 197.2%    | 75           | 3             |
| Level 2         | 251.6%    | 75           | Air, 0, 600   |
| Level 3         | 573.9%    | 150          | Air, 100, 800 |

</div>

</div>


**Notes**

* Using the Skill alone generates no particles with a 9s CD, while using the Plunge after the Skill creates 4 particles with a 12s CD
* After using the Skill, the special Plunge can still be used for a short while after landing
* Level 2/3 Driftcloud Wave has minor grouping on enemies
* The fall damage mitigation expires after some time
* The Driftcloud Wave animation expires ~2s after cast

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         |           |
| :---------------- | :-------- |
| DMG \(T9%\)       | 194.4%    |
| Starwicker  DMG (T9%) | 66.64%|
| Healing (T9%)      | 156.67% ATK + 1175 |
| Continuous Healing (T9%) | 73.11% ATK + 548 |
| GU                | 1U        |
| ICD               | Standard (Starwicker) |
| Snapshot          | No (DMG and heal) |
| Damage Element    | Anemo     |
| Damage Type       | Burst     |
| Energy Cost       | 70        |
| Duration          | 16s       |
| Cooldown          | 18s       |
| Poise Damage      | 100 / 50    |
| Impulse Type      | Air, 50, 800 / 100 |


</div>


**Notes**

* Adeptal Assistance stacks are shared in Co-op
* The healing ticks every 2.5 seconds



</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Xianyun.json'
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

**Notes:**
* Particle generation is disabled in C6 state

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/xianyun.md')} />
