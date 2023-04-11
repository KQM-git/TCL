---
description: Streetward Rambler's youngest disciple. A gentle and caring "little adult."
---

import char from '@site/src/data/characters/Yaoyao.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Yaoyao

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Yaoyao.png')} alt="Yaoyao's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

<!--
* [Full Yaoyao Written Guide](https://keqingmains.com/yaoyao/)
-->

* [Yaoyao Quick Guide](https://keqingmains.com/q/yaoyao-quickguide/)

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

| String | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 93.70%          | 30     | 187.4%/s  | 51.73        | 3            |
| 2-Hit  | 87.16%          | 30     | 174.32%/s | 47.51        | 3            |
| 3-Hit  | 57.65% + 60.53% | 46     | 154.15%/s | 33.04 x2     | 3 x2         |
| 4-Hit  | 143.18%         | 69     | 124.5%/s  | 77.36        | 4            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 206.98%   | 53     | 234.32%/s | 120          | 5            |


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

| Attribute       | Skill                                                 |
| :-------------- | :---------------------------------------------------- |
| DMG \(T9%\)     | 50.86%                                                |
| Healing \(T9%\) | 2.91% Max HP + 335.69                                 |
| Particles       | 0~1 (1:1) per hit                                     |
| GU              | 1U                                                    |
| ICD             | 2.5s                                                  |
| Snapshot        | Snapshot                                              |
| Damage Element  | Dendro                                                |
| Damage Type     | Skill                                                 |
| Duration        | White Jade Radish: 5s<br />Yuegui: Throwing Mode: 10s |
| CD              | 15s                                                   |
| Poise Damage    | 15                                                    |
| Impulse Type    | 2                                                     |

</div>

<!--
**Notes**

* 
-->

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute        | Burst    | Adeptal Legacy White Radish |
| :--------------- | :------- | :-------------------------- |
| DMG \(T9%\)      | 194.75%  | 122.67%                     |
| Healing          | -        | 3.43 Max HP + 394.93        |
| Dendro RES Bonus | -        | 50%                         |
| GU               | 1U       | 1U                          |
| ICD              | None     | 1.5s                        |
| Snapshot         | Snapshot | Snapshot                    |
| Damage Element   | Dendro   | Dendro                      |
| Damage Type      | Burst    | Burst                       |
| Energy Cost      | 80       | -                           |
| Duration         | -        | 5s                          |
| Cooldown         | 20s      | -                           |
| Poise Damage     | 50       | 3                           |
| Impulse Type     | 15       | 2                           |

</div>

<!--
**Notes**

* 
-->

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Yaoyao.json'
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
  
* The Dendro DMG Bonus buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

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

<Card item={require('../../evidence/characters/dendro/yaoyao.md')} />
