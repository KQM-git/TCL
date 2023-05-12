---
description: A young researcher well-versed in botany who currently serves as a Forest Watcher in Avidya Forest. He is a straight shooter with a warm heart — and a dab hand at guiding even the dullest of pupils.
---

import char from '@site/src/data/characters/Tighnari.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Tighnari

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Tighnari.png')} alt="Tighnari's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Tighnari Written Guide](https://keqingmains.com/tighnari/)

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
| 1-Hit  | 82%       | 26     | 189.23%/s | 16.5         | 1            |
| 2-Hit  | 77.1%     | 23     | 201.13%/s | 15.9         | 1            |
| 3-Hit  | 48.59% ×2 | 37     | 157.59%/s | 9.75 ×2      | 1            |
| 4-Hit  | 126.08%   | 68     | 111.25%/s | 25.5         | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type                                     | Talent 9%        | Frames | MV/s      | GU  | Poise Damage             | Impulse Type          |
| :--------------------------------------- | :--------------- | :----- | :-------- | :-- | :----------------------- | :-------------------- |
| Aimed Shot                               | 80.58%           | ?      | ?         | -   | 10 \(Headshot: 30\)      | 2 \(Headshot: 5\)     |
| Charge Level 1                           | 210.8%           | 94     | 134.55%/s | 1U  | 20 \(Headshot: 60\)      | 2 \(Headshot: 5\)     |
| Wreath Arrow + Clusterbloom Arrow        | 148.24% + 65.62% | 183    | 70.12%/s  | 1U  | 20 \(Headshot: 60\) + 20 | 2 \(Headshot: 5\) + 3 |
| Wreath Arrow + Clusterbloom Arrow (in E) | 148.24% + 65.62% | 41     | 312.97%/s | 1U  | 20 \(Headshot: 60\) + 20 | 2 \(Headshot: 5\) + 3 |

</div>
  
**Notes**

* Tighnari can paralyze the Aeonblight Drake with 1 aimed shot using a Wreath Arrow.

<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**  

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Skill                       |
| :------------- | :-------------------------- |
| DMG \(T9%\)    | 254.32%                     |
| Particles      | 3~4 \(1:1\)                 |
| GU             | 1U                          |
| ICD            | None                        |
| Snapshot       | Snapshot                    |
| Damage Element | Dendro                      |
| Damage Type    | Skill                       |
| Duration       | Field: 8s <br/> Effect: 12s |
| CD             | 12s                         |
| Poise Damage   | 50                          |
| Impulse Type   | 2                           |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Primary  | Secondary |
| :------------- | :------- | :-------- |
| DMG \(T9%\)    | 94.55%   | 115.57%   |
| GU             | 1U       | 1U        |
| ICD            | Standard | Standard  |
| Snapshot       | Snapshot | Dynamic   |
| Damage Element | Dendro   | Dendro    |
| Damage Type    | Burst    | Burst     |
| Energy Cost    | 40       | -         |
| Cooldown       | 12s      | -         |
| Poise Damage   | 30       | 30        |
| Impulse Type   | 3        | 3         |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Tighnari.json'
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

**Notes**  

* Tighnari A4 benefits from percentage-based EM buffs.

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
  
* The buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

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

<Card item={require('../../evidence/characters/dendro/tighnari.md')} />
