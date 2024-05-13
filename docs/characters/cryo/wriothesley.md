---
description: Duke of the Fortress of Meropide, Lord Incognito of the murky depths.
---

import char from '@site/src/data/characters/Wriothesley.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Wriothesley

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Wriothesley.png')} alt="Wriothesley's gacha art" />
<blockquote>{frontMatter.description}</blockquote>


## Resources

* [Wriothesley Quick Guide](https://keqingmains.com/q/wriothesley-quickguide/)

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


| String | Talent 9%         | Frames | MV/s       | Poise Damage | Impulse Type |
| :----- | :--------         | :----- | :---       | :----------- | :----------- |
| 1-Hit  | 98.03             | 14     | 420.13 %/s | 41.51        | 3            |
| 2-Hit  | 95.17             | 13     | 439.25 %/s | 40.22        | 3            |
| 3-Hit  | 123.5             | 24     | 308.75 %/s | 51.36        | 4            |
| 4-Hit  | 69.64 x2 (139.28) | 41     | 203.82 %/s | 28.6 x2      | 3, 4         |
| 5-Hit  | 166.71            | 59     | 169.54 %/s | 71.92        | 5            |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%                | Frames | MV/s       | Poise Damage | Impulse Type |
| :----- | :--------                | :----- | :---       | :----------- | :----------- |
| CA     | 260.03                   | 52     | 300.03 %/s | 110          | Air, 0, 420  |
| N3C    | 316.7 + 260.03 (576.73)  | 99     | 349.53 %/s | -            | -            |
| N5C    | 622.69 + 260.03 (882.72) | 184    | 287.84 %/s | -            | -            |


</div>


<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41    | 5            | 2            |
| Low Plunge DMG  | 224.62    | 50           | 3            |
| High Plunge DMG | 280.57    | 100          | 4            |

</div>

**Notes:**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Wriothesley CAs are blunt

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Tap         |
| :------------- | :--------   |
| Normal Attack DMG multiplier \(T9%\)    |  166.95    |
| HP Cost        | 4.5% Max HP |
| Particles      | 1 every 2s  |
| Duration       | 10s         |
| CD             | 16s         |

</div>

**Notes**

* The particle generation is triggered only on Normal Attacks, and the cooldown is shared with that of enhanced Charged Attacks.
* The particle generation can be triggered on gadgets and other non-enemy objects.
* Normal Attacks under 50% HP do not generate particles.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst     |
| :---------------- | :-------- |
| Skill DMG \(T9%\) | 216.24×5	|
| Surging Blade DMG \(T9%\) | 72.08 |
| GU                | 1         |
| ICD               | Standard  |
| Snapshot          |    -      |
| Damage Element    | Cryo      |
| Damage Type       | Burst     |
| Energy Cost       | 60        |
| Cooldown          | 15s       |
| Poise Damage (Skill) | 250    |
| Poise Damage (Surging Blade) | 20 |
| Impulse Type (Skill) | Heavy, 400, 0 |
| Impulse Type (Surging Blade) | Air, 0, 600 |


</div>

<!--
**Notes**

* 
-->

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Wriothesley.json'
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

<Card item={require('../../evidence/characters/cryo/wriothesley.md')} />
