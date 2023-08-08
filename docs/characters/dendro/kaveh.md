---
description: A renowned architect from Sumeru who perhaps cares a bit too much about too many things. He is an aesthete troubled by reality.
---

import char from '@site/src/data/characters/Kaveh.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Kaveh

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kaveh.png')} alt="Kaveh's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!--
## Resources

* [Kaveh Mains Discord]()
* [Full Kaveh Written Guide]()
* [# Minute Video Guide to Kaveh]()
-->
* [Kaveh Quick Guide](https://keqingmains.com/q/kaveh-quickguide/)

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


| String | Talent 9% | Frames | MV/s    | Poise Damage | Impulse Type  |
| :----- | :-------- | :----- | :------ | :----------- | :------------ |
| 1-Hit  |   140.0%  |   45   | 186.67% |   107.738    |      3        |
| 2-Hit  |   127.9%  |   45   | 170.53% |   98.524     |      3        |
| 3-Hit  |   154.8%  |   52   | 178.62% |   123.542    |      3        |
| 4-Hit  |   188.7%  |   77   | 147.04% |   148.118    | Air, 200, 600 |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type         | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG | 97.60%    | ?      | ?         | 60           | 3            |
| Final DMG    | 177.00%   | ?      | ?         | 120          | 6            |
| Stamina Cost | 40/s      | -      | -         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  137.0%   |      35      |      2       |
| Low Plunge DMG  |  274.0%   |      150     |      4       |
| High Plunge DMG |  342.0%   |      200     |      7       |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Skill       | 
| :------------- | :---------- |  
| DMG \(T9%\)    |  346.8%     |           
| Particles      |   2         |           
| GU             |   1U        |           
| ICD            |  None       |           
| Snapshot       |  Dynamic    |           
| Damage Element |  Dendro     |           
| Damage Type    |  Skill      |           
| Duration       |   -         |           
| CD             |   6s        |           
| Poise Damage   |   75        |           
| Impulse Type   | Air, 0, 600 |           


</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst     |  
| :---------------- | :-------- | 
| DMG \(T9%\)       |  272.0%   |           
| GU                |  2U       |           
| ICD               |  None     |           
| Snapshot          |  Dynamic  |           
| Damage Element    |  Dendro   |           
| Damage Type       |  Burst    |           
| Energy Cost       |  80       |           
| Duration          |  12s      |           
| Cooldown          |  20s      |           
| Poise Damage      |  100      |           
| Impulse Type      |  3        |           


</div>


</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Kaveh.json'
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

* Kaveh Self Heal triggers on the same frame dendro Bloom DMG is registered. The difference between the DMG and heal is applied to Kaveh.
* Kaveh Self heal only occurs if he takes a hit from Bloom, whether shielded or not. He doesn't heal if he dodges the Bloom. Burst i-frames do not prevent healing.

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

**Notes**

* Kaveh's C4 only applies to dendro cores that were created by him.

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

<Card item={require('../../evidence/characters/dendro/kaveh.md')} />
