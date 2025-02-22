---
description: The current President of Spina di Rosula, who is lovely, dutiful, and a great boss.
---

import char from '@site/src/data/characters/Navia.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Navia

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Navia.png')} alt="Navia's gacha art" />
<blockquote>{frontMatter.description}</blockquote>


## Resources

* [Full Navia Written Guide](https://keqingmains.com/navia/)
* [Navia Quick Guide](https://keqingmains.com/q/navia-quickguide/)


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



| String | Talent 9% | Frames  | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :------ | :--- | :----------- | :----------- |
| 1-Hit  |   171.81  |   23    |      |     129.8    |       3      |
| 2-Hit  |   158.93  |   22    |      |     120.1    |   Air, 400, 0|
| 3-Hit  |   64.09x3 | 31-39-48|      |     50.5x3   |     1-1-1    |
| 4-Hit  |   245.14  |   41    |      |     185.9    | Air, 120, 480|


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String       | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :--- | :----------- | :----------- |
| Spinning DMG |   114.87  |        |      | 60           | 3            |
| Final DMG    |   207.77  |        |      | 120          | 6            |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |   137.03  |     35       |      2       |
| Low Plunge DMG  |   274.01  |     150      |      4       |
| High Plunge DMG |   342.25  |     200      |      7       |


</div>


**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Tap       | Hold       |
| :------------- | :-------- | :--------- |
| DMG \(T9%\)    |   671.68*5 | 671.68*11  |
| Particles      |   3~4 \(1:1\) |  3~4 \(1:1\)  |
| GU             |   1     |     1      |
| ICD            |   None   |    None    |
| Snapshot       |   Dynamic|  Dynamic   |
| Damage Element |   Geo    |    Geo     |
| Damage Type    |   Skill  |   Skill    |
| Duration       |           |            |
| CD             |   9s     |     9s     |
| Poise Damage   |   150     |     150    |
| Impulse Type   |   3     |      3     |


</div>


**Notes**
* Navia's Skill hit box starts from slightly behind her back.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Primary   | Cannon Fire Support |
| :---------------- | :-------- | :-------- |
| DMG \(T9%\)       |     127.84      |    73.36       |
| GU                |     2U      |     1U      |
| ICD               |     No ICD     |     12s/3 Hits      |
| Snapshot          |     -      |     Dynamic      |
| Damage Element    |     Geo      |     Geo      |
| Damage Type       |     Burst      |     Burst      |
| Energy Cost       |     60      |           |
| Duration          |     12s       |         |
| Cooldown          |     15s       |          |
| Poise Damage      |     100      |     50      |
| Impulse Type      |     4      |     1      |
-->

</div>


**Notes**
* Navia's Burst is dynamic.
* Navia fires 1 Cannon Fire Support approx every ~0.75 seconds, and a total of 17 shots over 12 seconds, for 1+17 hits total including the activation.


</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Navia.json'
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
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/geo/navia.md')} />
