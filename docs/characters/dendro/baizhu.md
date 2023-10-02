---
description: The owner of Bubu Pharmacy, who is rarely seen without the white snake named Changsheng. His medicinal knowledge is encyclopedic, and his personal intrigues subtle.
---

import char from '@site/src/data/characters/Baizhu.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Baizhu

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Baizhu.png')} alt="Baizhu's gacha art" />
<blockquote>{frontMatter.description}</blockquote>


## Resources
<!--
* [Baizhu Mains Discord]()
* [Full Baizhu Written Guide]()-->
* [Baizhu Quick Guide](https://keqingmains.com/q/baizhu-quickguide/)
<!--* [# Minute Video Guide to Baizhu]()
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
| 1-Hit  |  63.50%   |   22   | 173.18%/s |   7.2801     |     1        |
| 2-Hit  |  61.90%   |   33   | 112.55%/s |   6.9396     |     1        |
| 3-Hit  |  76.60%   |   40   | 114.9%/s  |   4.2913 x2  |     1 x2     |
| 4-Hit  |  92.00%   |   67   | 82.39%/s  |   10.3056    |     3        |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String | Talent 9% | Frames | MV/s     | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :------- | :----------- | :----------- |
| CA     |  205.80%  |   70   | 176.4%/s |              |      3       |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  104.4%   |     5        |      2       |
| Low Plunge DMG  |  209%     |     50       |      3       |
| High Plunge DMG |  261%     |    100       |      4       |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Tap       |
| :------------- | :-------- | 
| DMG \(T9%\)    |  134.64%  |           
| Particles      |  3~4 (1:1)|           
| GU             |  1U       |           
| ICD            |  2s       |           
| Snapshot       |  Snapshot |           
| Damage Element |  Dendro   |           
| Damage Type    |  Skill    |           
| Duration       |           |           
| CD             |  10s      |           
| Poise Damage   |  30       |           
| Impulse Type   |  3        |           


</div>

**Notes**

* His Skill does 1 twirl, then returns to him if it finds no target.
* If his Skill finds a target, the 2nd and 3rd hits may not cause an enemy to become aggro'd.
* Skill can target the same enemy more than once but always prioritizes a new enemy if it can.
* Skill range is approximately 8 abyss tiles, with the homing range being half that for ~12 total before it fails to find a target.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst                                            | 
| :---------------- | :----------------------------------------------- |
| DMG \(T9%\)       |  165.01%	                                       |           
| GU                |  1U                                              |           
| ICD               |  None                                            |           
| Snapshot          |  Snapshot                                        |           
| Damage Element    |  Dendro                                          |           
| Damage Type       |  Burst                                           |           
| Energy Cost       |  80                                              |           
| Duration          |  Seamless Shield: 2.5s <br /> Pulsing Clarity: 14s |           
| Cooldown          |  20s                                             |           
| Poise Damage      |  50                                              |           
| Impulse Type      |  1                                               |           


</div>


</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Baizhu.json'
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

**Notes**

* Most interactions from the on field character to enemies will trigger Baizhu's C2, whether they do damage or not. There is no condition required (e.g., burst is active). The only exception found was Zhongli's shield shred.

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

<Card item={require('../../evidence/characters/dendro/baizhu.md')} />
