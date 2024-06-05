---
description: Indefatigable reporter of The Steambird, constantly on the hunt for the "truth."
---

import char from '@site/src/data/characters/Charlotte.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Charlotte

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Charlotte.png')} alt="Charlotte's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Charlotte Quick Guide](https://keqingmains.com/q/charlotte-quickguide/)

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

| String | Talent 9% | Frames  | MV/s       | Poise Damage | Impulse Type |
| :----- | :-------- | :-----  | :---       | :----------- | :----------- |
| 1-Hit  | 84.7%     | 23      | 220.96 %/s | 9.35         | 1            |
| 2-Hit  | 73.37%    | 35      | 125.78 %/s | 8.13         | 1            |
| 3-Hit  | 109.8%    | 74      | 89.03 %/s  | 12.11        | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s        | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :---        | :----------- | :----------- |
| CA     | 170.9%    | 79     | 129.8 %/s   | 80           | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.4%    | 5            | 2            |
| Low Plunge DMG  | 208.8%    | 50           | 3            |
| High Plunge DMG | 260.8%    | 100          | 4            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Tap                                   | Hold                                  |
| :-------------    | :--------                             | :--------                             |
| DMG \(T9%\)       | 114.2%<br/>'Snappy Silhouette': 66.6% | 236.6%<br/>'Focused Impression': 69%  |
| Particles         | 3 (-)                                 | 5 (-)                                 |
| Trigger Interval  | 'Snappy Silhouette': 1.5s             | 'Focused Impression': 1.5s            |
| Duration          | 'Snappy Silhouette': 6s               | 'Focused Impression': 12s             |
| GU                | 1U<br/>'Snappy Silhouette': 1U        | 1U<br/>'Focused Impression': 1U       |
| ICD               | Standard                              | Standard                              |
| Snapshot          | Dynamic                               | Dynamic                               |
| Damage Element    | Cryo                                  | Cryo                                  |
| Damage Type       | Skill                                 | Skill                                 |   
| CD                | 12s                                   | 18s                                   |
| Poise Damage      | 50<br/>'Snappy Silhouette': 20        | 50<br/>'Focused Impression': 20       |
| Impulse Type      | 2<br/>'Snappy Silhouette': 2          | 2<br/>'Focused Impression': 2         |

</div>
**Notes**

* Over their duration, **'Snappy Silhouette'** hits 4 times, and  **'Focused Impression'** hits 9 times.
* The skill's initial hit does not share ICD with **'Snappy Silhouette'** and **'Focused Impression'**.
* Charlotte needs to hold her skill for ~1.85s to reach a Finisher Frame state.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Cast              | Kamera            |
| :---------------- | :----             | :-----            |
| DMG \(T9%\)       | 131.9%            | 11%               |
| Healing           | 436% ATK + 3270   | 15.7% ATK + 116   |
| GU                | 2U                | 1U                |
| ICD               | None              | 4 hits/4s         |
| Snapshot          | -                 | Snapshot          |
| Damage Element    | Cryo              | Cryo              |
| Damage Type       | Burst             | Burst             |
| Energy Cost       | 80                | -                 |
| Duration          | -                 | 4s                |
| Cooldown          | 20s               | -                 |
| Poise Damage      | 200               | 25                |
| Impulse Type      | 2                 | 1                 |

</div>

**Notes**

* Charlotte's Burst hits 9 times (1 initial then 8 ticks)

</TabItem>
</Tabs>

<!--
## Frames

import charFrames from '@site/src/data/frames/Charlotte.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />
-->

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

**Notes**
* This healing does not snapshot.
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

| Attribute     | Coordinated Attack |
| :--------     | :----------------- |
| GU            | 1U                 |
| ICD           | None               |
| Poise Damage  | 100                |
| Impulse Type  | 2                  |
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/charlotte.md')} />
