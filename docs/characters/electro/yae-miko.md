---
description: Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.
---

import char from '@site/src/data/characters/Yae_Miko.json'
import { getSkillName } from '@site/src/utils/skill'

# Yae Miko

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Yae_Miko.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<h3>{getSkillName(char, 'na')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String   | Talent 9% | Frames | MV/s    | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :------ | :----------- | :----------- |
| 1-Hit    | 64.42%    | 22     | 175.69% | 7.436        | 1            |
| 2-Hit    | 65.48%    | 46     | 163.70% | 7.222        | 1            |
| 3-Hit    | 96.71%    | 90     | 131.88% | 10.667       | 1            |
| Recovery | -         | 127    | -       | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9% | Frames | MV/s    | Poise Damage | Impulse Type |
| :----------------- | :-------- | :----- | :------ | :----------- | :----------- |
| CHarged Attack DMG | 242.92%   | 87     | 167.53% | 80           | 2            |

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

* Normal Attacks have a 3 hit/2.5s ICD.
* Charged Attacks have no ICD.
* Charged Attacks can hit the same enemy twice if the hitbox is large enough. e.g. Azhdaha.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Sesshou Sakura |
| :------------------------ | :------------- |
| Skill DMG Level 1 \(T9%\) | 103.14%        |
| Skill DMG Level 2 \(T9%\) | 128.93%        |
| Skill DMG Level 3 \(T9%\) | 161.16%        |
| Skill DMG Level 4 \(T9%\) | 201.45%        |
| Particles                 | 1 \(-\)        |
| Frames                    | 34             |
| GU                        | 1A             |
| ICD                       | 3 hit / 2.5s   |
| Snapshot                  | Dynamic        |
| Damage Element            | Electro        |
| Damage Type               | Skill          |
| Duration                  | 14             |
| CD                        | 4              |
| Poise Damage              | 25             |
| Impulse Type              | 2              |

</div>

**Notes**

* Each Sesshou Sakura hits up to 5 times, generating 1 particle on each hit and none on cast.
* When casting E three times in a straight line only the one in the middle will be level 3.
* It has a small AoE.
* The dash does not have i-frames.
* The Sesshou Sakura will always be placed in front of Yae Miko as she dashes back, unless a directional key is held down, in which case she will dash towards said direction.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                     | Burst                               |
| :---------------------------- | :---------------------------------- |
| Skill DMG \(T9%\)             | 442%                                |
| Tenko Thunderbolt DMG \(T9%\) | 567.49%                             |
| Cast Frames                   | 111                                 |
| Energy Frame                  | 7                                   |
| CD Frame                      | 1                                   |
| GU                            | 1A                                  |
| ICD                           | None                                |
| Snapshot                      | Dynamic                             |
| Damage Element                | Electro                             |
| Damage Type                   | Burst                               |
| Energy Cost                   | 90                                  |
| CD                            | 22                                  |
| Poise Damage                  | 75                                  |
| Impulse Type                  | Burst: 3 <br/> Tenko Thunderbolt: 2 |

</div>

**Notes**

* It is completely stationary and targets the enemies at the end of the animation, regardless of where the Sesshou Sakuras are.
* Elemental Particles and Orbs can be pre-funneled.
* The Sesshou Sakuras are unsealed instantly when casting the Burst.

</TabItem>
</Tabs>

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

**Notes**

* Elemental Mastery from other characters such as Kazuha C2, Sucrose A4, or Diona C6 increases the DMG of Sesshou Sakura.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* The Burst does not need to hit an enemy in order for the Energy to be restored.

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

<Card item={require('../../evidence/characters/electro/yae-miko.md')} />
