---
description: A magic assistant of few words, her emotions are as inscrutable as any cat's.
---

import char from '@site/src/data/characters/Lynette.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Lynette

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Lynette.png')} alt="Lynette's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!---
## Resources

* [Lynette Mains Discord]()
* [Full Lynette Written Guide]()-->
* [Lynette Quick Guide](https://keqingmains.com/q/lynette-quickguide/)
<!--* [# Minute Video Guide to Lynette]()
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
| 1-Hit  |   79.20%  |   30   | 158.4%/s  |   46.0575    |      3       |
| 2-Hit  |   69.10%  |   22   | 188.45%/s |   40.2102    |      3       |
| 3-Hit  |   90.90%  |   43   | 126.84%/s |   27 x2      |     3, 2     |
| 4-Hit  |  116.00%  |   60   | 116%/s    |   67.6422    |      4       |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     |  194.00%  |   42   | 277.14%/s |   60 x2      | 2 + 6        |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  117.46%  |     25       |     2        |
| Low Plunge DMG  |  234.86%  |    100       |     4        |
| High Plunge DMG |  293.36%  |    150       |     7        |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Enigmatic Thrust         | Surging Blade               | 
| :------------- | :-------------------     | :-------------------------- |
| DMG \(T9%\)    |     455.6%               |      53.04%                 |
| Particles      |     4 \(-\)              |      -                      |
| GU             |     1U                   |      0U                     |
| ICD            |     None                 |      None                   |
| Snapshot       |     Dynamic              |      Dynamic                |
| Damage Element |     Anemo                |      Anemo                  |
| Damage Type    |     Skill                |      Skill                  |
| Duration       |     Hold: 2.5s           |      -                      |
| CD             |     12s                  | Surging Blade Interval: 10s |
| Poise Damage   | Tap: 100<br /> Hold: 125 |      20                     |
| Impulse Type   |     2                    |      3                      |


</div>

**Notes**
* Stamina regenerates while in Lynette's **Pilfering Shadow** State from her hold Skill.
* **Arkhe: Ousia Enigma Thrust** can proc the Skill reset passive on Sacrificial Sword.
* The Skill cannot Guoba swirl.



</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Skill      | Bogglecat Box          | Vivid Shot       |
| :---------------- | :--------- | :--------------------- | :--------------- |
| DMG \(T9%\)       |  141.44%   |      87.04%            |   77.52%         |
| GU                |  1U        |      1U                |   1U             |
| ICD               | 3-hits/2.5s|      3-hits/2.5s       |  3-hits/2.5s     |
| Snapshot          | Dynamic    |      Dynamic           |  Dynamic         |
| Damage Element    | Anemo      |      Anemo             | Absorbed Element |
| Damage Type       | Burst      |      Burst             |  Burst           |
| Energy Cost       | 70         |      -                 |  -               |
| Duration          | 12s        |      -                 |  -               |
| Cooldown          | 18s        |      -                 |  -               |
| Poise Damage      | 40         |      40                |  40              |
| Impulse Type      | 3          |      2                 |  2               |


</div>

**Notes**
* The absorption priority on her burst is Cryo > Pyro > Hydro > Electro. For more information, read this [Vault Entry](../../evidence/characters/anemo/lynette.md#burst-mechanics).
* The burst cannot Guoba swirl.

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Lynette.json'
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

**Notes**
* The pull radius is about 6m.

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

<Card item={require('../../evidence/characters/anemo/lynette.md')} />
