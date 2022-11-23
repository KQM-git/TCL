---
description: Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.
---

import char from '@site/src/data/characters/Raiden_Shogun.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Raiden Shogun

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Raiden_Shogun.png')} alt="Raiden Shogun's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Raiden Shogun Guide](https://keqingmains.com/raiden/)

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

| String    | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :-------- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG | 72.84%          | 24     | 182.10%/s | 36.88        | 3            |
| 2-Hit DMG | 73%             | 19     | 230.53%/s | 36.96        | 3            |
| 3-Hit DMG | 91.64%          | 32     | 171.83%/s | 46.4         | 4            |
| 4-Hit DMG | 53.25% + 53.25% | 41     | 155.85%/s | 26.96 x2     | 3 + 4        |
| 5-Hit DMG | 120.24%         | 56     | 128.83%/s | 60.88        | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------------- | :--------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack DMG | 182.96%          | 41     | 267.75%/s | 120          | 4            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| String          | Talent 9% | Poise Damage | Impulse Type |
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

| Type                              | Skill           | Coordinated Attack |
| :-------------------------------- | :-------------- | :----------------- |
| Skill DMG \(T9%\)                 | 199.24%         | 71.4%              |
| Elemental Burst DMG Bonus \(T9%\) | 0.3% Per Energy | -                  |
| Particles                         | -               | 0~1 (1:1)          |
| GU                                | 1A              | 1A                 |
| ICD (hits/timer)                  | 3 hit / 2.5s    | 3 hit / 2.5s       |
| Damage Element                    | Electro         | Electro            |
| Damage Type                       | Skill           | Skill              |
| Duration                          | 25s             | -                  |
| CD                                | 10s             | -                  |
| Poise Damage                      | 80              | 2                  |
| Impulse Type                      | 30              | 2                  |

</div>

**Notes**

* The coordinated attack only occurs when the active character triggers a Transformative Reaction that deal AoE damage against enemies.
* The Eye's Elemental Burst DMG Bonus does affect the Raiden Shogun.
* Raiden's E coordinated attack CD starts with the triggering move's damage, not with the coordinated attack's.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect                                    | Initial Slash                                     | Basic Attacks            |
| :---------------------------------------- | :------------------------------------------------ | :----------------------- |
| Musou no Hitotachi Base Slash DMG \(T9%\) | 681.36%                                           | -                        |
| Resolve Bonus \(T9%\)                     | 6.61% ATK DMG Per Stack                           | 1.23% ATK DMG Per Stack  |
| Resolve Stacks Gained \(T9%\)             | 0.19 Per Energy Consumed                          | 0.19 Per Energy Consumed |
| Musou Isshin Energy Restoration \(T9%\)   | -                                                 | 2.4                      |
| GU                                        | 2B                                                | 1A                       |
| ICD (hits/timer)                          | None                                              | 3 hit / 2.5s             |
| Snapshot                                  | Dynamic                                           | Dynamic                  |
| Damage Element                            | Electro                                           | Electro                  |
| Damage Type                               | Burst                                             | Burst                    |
| Energy Cost                               | 90                                                | -                        |
| Musou Isshin Duration                     | -                                                 | ~7s                      |
| CD                                        | 18 s                                              | -                        |
| Poise Damage                              | Beginning Animation: 400 <br/> Burst: 150         | \(see below\)            |
| Impulse Type                              | Beginning Animation: Heavy, 800, 0 <br/> Burst: 2 | \(see below\)            |

</div>

| String          | Talent 9%      | Frames | 60 resolve MV | MV/s (60 resolve) | Poise Damage | Impulse Type |
| :-------------- | :------------- | :----- | :------------ | :---------------- | :----------- | :----------- |
| 1-Hit DMG       | 75.24%         | 25     | 73.8%         | 357.7%/s          | 40.67        | 3            |
| 2-Hit DMG       | 73.93%         | 22     | 73.8%         | 402.9%/s          | 39.96        | 3            |
| 3-Hit DMG       | 90.52%         | 22     | 73.8%         | 448.15%/s         | 48.93        | 4            |
| 4-Hit DMG       | 51.95% + 52.1% | 64     | 73.8% x 2     | 343.16%/s         | 28.11 x2     | 3 + 4        |
| 5-Hit DMG       | 124.36%        | 65     | 73.8%         | 182.92%/s         | 67.22        | 4            |


| String             | Talent 9%                  | Frames | 60 resolve MV | MV/s (60 resolve) | Poise Damage | Impulse Type |
| :----------------- | :------------------------- | :----- | :------------ | :---------------- | :----------- | :----------- |
| Charged Attack DMG | 103.6% + 125.06%           | 64     | 73.8% x 2     | 352.74%/s         | 60 x2        | 4 + 5        |
| N1C                | 75.24% + 103.6% + 125.06%  | 94     | 73.8% x 3     | 335.30%/s         | -            | -            |
| N2C                | 149.17% + 103.6% + 125.06% | 121    | 73.8% x 4     | 333.73%/s         | -            | -            |
| N3C                | 239.69% + 103.6% + 125.06% | 151    | 73.8% x 5     | 332.72%/s         | -            | -            |
| N4C                | 343.74% + 103.6% + 125.06% | 200    | 73.8% x 7     | 326.70%/s         | -            | -            |

| String          | Talent 9%      | Poise Damage | Impulse Type |
| :-------------- | :------------- | :----------- | :----------- |
| Plunge DMG      | 117.46%        | 25           | 2            |
| Low Plunge DMG  | 234.86%        | 100          | 4            |
| High Plunge DMG | 296.36%        | 150          | 7            |

**Notes**

* Charged Attack Stamina Cost: 20
* **Resolve Stacks** act as bonus MV, which is given to each split of a string in the case of multi-hits.
* **Resolve Stacks** are not rounded to the nearest whole number and the partial stack is expressed in the final damage.
* Raiden's interruption resistance under the effects of **Musou Isshin** makes her immune to being staggered.
* **Musou Isshin** duration timer begins after the cast animation of **Secret Art: Musou Shinsetsu** has ended.
* Energy restoration from **Musou Isshin** works against shielded and immune enemies.
* During **Musou Isshin**, her Electro-infused tachi Normal and Charged attacks share ICD, but the tachi attacks do not share ICD with elementally-infused polearm attacks.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Raiden_Shogun.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* The effects of The Raiden Shogun's C2 applies to both her Elemental Burst and Elemental skill.
* The effects of C2 also apply to all damage during her burst including physical damage procs from weapon passives.
* The defense ignore is multiplicative with defense shred.

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

<Card item={require('../../evidence/characters/electro/raiden-shogun.md')} />
