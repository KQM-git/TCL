---
description: A famed Fontainian magician who possesses great stage presence as well as gift of the gab. Audiences are enthralled by his exquisite skills, and they hang on to his every clever word.
---

import char from '@site/src/data/characters/Lyney.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Lyney

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Lyney.png')} alt="Lyney's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!---
## Resources

* [Lyney Mains Discord]()

* [Full Lyney Written Guide]()-->
* [Lyney Quick Guide](https://keqingmains.com/q/lyney-quickguide/)
<!--* [# Minute Video Guide to Lyney]()
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
| 1-Hit  |   71.30%  |   22   | 194.45%/s |   13.537     |    1         |
| 2-Hit  |   69.80%  |   24   | 174.5%/s  |   13.252     |    1         |
| 3-Hit  |  50.1% *2 |   39   | 154.15%/s |   9.5085 *2  |    1 *2      |
| 4-Hit  |  104.60%  |   59   | 106.37%/s |   19.872     |    1         |
 

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type                                                  | Talent 9%                 | Frames | MV/s      | GU         | Poise Damage        | Impulse Type      |
| :---------------------------------------------------- | :------------------------ | :----- | :-------- | :--------- | :------------------ | :---------------- |
| Aimed Shot                                            |  80.60%                   |   24   | 201.5%/s  | -          | 10 \(Headshot: 30\)         | 2 \(Headshot: 5\)       |
| Fully Charged                                         | 210.80%                   |   80   | 158.1%/s  | 1U         | 20 \(Headshot: 60\)         | 2 \(Headshot: 5\)       |
| Prop Arrow + Pyrotechnic Strike +  Spiritbreath Thorn | 293.76% + 360.4% + 46.84% |  111   | 378.94%/s | 1U, 1U, 0U | 60 \(Headshot: 60\), 30, 20 | 2 \(Headshot: 5\), 2, 2 | 
 

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  104.41%  |     50       |     2        |
| Low Plunge DMG  |  208.77%  |    100       |     3        |
| High Plunge DMG |  260.76%  |     20       |     2        |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* **Grin-Malkin Hat** created by **Prop Arrow** snapshots on creation.
* Lyney's **Prop Arrow** from his Charged Attack can hit multiple enemies grouped very closely together.
* Amos' Bow and Slingshot interaction with **Grim-Malkin Hat**'s **Pyrotechnic Strike** is as follows. The bonus is calculated as if the charged attack was fired the moment **Pyrotechnic Strike** was launched (regardless of Lyney's **Prop Arrows**). If Elemental Skill was being used to detonate the **Grim-Malkin Hat**, the time is counted as 0s. 
* Lyney's Charged Attack that drains HP does not get it's own 12% Crit Rate stack of **Marechaussee Hunter**.
* Lyney's **Pyrotechnic Strike** can trigger Beidou Burst's coordinated attacks if he is on-field. 

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Skill                                             | 
| :------------- | :------------------------------------------------ | 
| DMG \(T9%\)    |  284.24%                                          |           
| Skill DMG Bonus| 90.44 ATK/Stack                                   |
| Particles      |  5 \(-\)                                          |           
| GU             |  1U                                               |           
| ICD            | Skill: None, <br /> Grin-Malkin Hat Explosion: 1s |           
| Snapshot       |  Dynamic                                          |           
| Damage Element |  Pyro                                             |           
| Damage Type    |  Skill                                            |          
| Duration       |  -                                                |           
| CD             |  15s                                              |           
| Poise Damage   |  Skill: 60, <br />Grin-Malkin Hat Explosion: 90   |           
| Impulse Type   |  Skill: 4, <br />Grin-Malkin Hat Explosion: 2     |           


</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst                                           | 
| :---------------- | :---------------------------------------------- | 
| DMG \(T9%\)       | Skill: 261.8% <br /> Explosive Firework: 703.8% |                    
| GU                | 1U                                              |                    
| ICD               | None                                            |                    
| Snapshot          | Dynamic                                         |                    
| Damage Element    | Pyro                                            |                    
| Damage Type       | Burst                                           |                    
| Energy Cost       | 60                                              |                    
| Duration          | 3s                                              |                    
| Cooldown          | 15s                                             |                    
| Poise Damage      | Skill: 40 <br /> Explosive Firework: 120        |                    
| Impulse Type      | Skill: 2 <br /> Explosive Firework: 7           |                    


</div>

**Notes**

* Lyney can not lose vertical height during the **Grim-Malkin Cat** state, allowing him to fly for a short duration.
* Lyney's Burst gives him 50% Damage Reduction.

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Lyney.json'
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

<Card item={require('../../evidence/characters/pyro/lyney.md')} />
