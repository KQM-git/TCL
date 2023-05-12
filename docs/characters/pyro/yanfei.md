---
description: A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.
---

import char from '@site/src/data/characters/Yanfei.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Yanfei

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Yanfei.png')} alt="Yanfei's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Yanfei Full Guide](https://keqingmains.com/yanfei/)

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
| 1-Hit  | 99.18%    | 26     | 228.88%/s | 10.94        | 2            |
| 2-Hit  | 88.61%    | 28     | 189.88%/s | 9.77         | 2            |
| 3-Hit  | 129.22%   | 72     | 107.68%/s | 14.25        | 2            |
| GU     | 1U        | ~      | ~         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%             | Frames | MV/s                  | GU  | Poise Damage | Impulse Type |
| :------------- | :-------------------- | :----- | :-------------------- | :-- | :----------- | :----------- |
| Charged Attack | 152.34% + 26.89%/Seal | 79     | 115.70%/s             | 1U  | 120          | 3            |
| N1C            | 251.52% + 26.89%/Seal | 100    | 164.36%/s \(1 Seal\)  | 1U  | 120          | 3            |
| N2C            | 340.13% + 26.89%/Seal | 95     | 180.49%/s \(2 Seals\) | 1U  | 120          | 4            |
| N3C            | 469.35% + 26.89%/Seal | 121    | 172.95%/s \(3 Seals\) | 1U  | 120          | 5            |

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

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* This stamina consumption reduction applies to all actions
* This Charged Attack's AoE and DMG will increase according to the amount of **Scarlet Seals** consumed
* Yanfei's Charged Attack Shatters Frozen targets.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Effect            | Skill    |
| :---------------- | :------- |
| Skill DMG \(T9%\) | 288.32%  |
| Particles         | 3 \(-\)  |
| GU                | 1U       |
| ICD               | None     |
| Snapshot          | Snapshot |
| Damage Element    | Pyro     |
| Damage Type       | Skill    |
| CD                | 9s       |
| Poise Damage      | 120      |
| Impulse Type      | 3        |

</div>

**Notes**

* **Signed Edict** is **blunt** damage and Shatters Frozen targets.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect                      | Burst    |
| :-------------------------- | :------- |
| Skill DMG \(T9%\)           | 310.08%  |
| Charged Attack DMG Bonus    | 51.8%    |
| Scarlet Seal Grant Interval | 1s       |
| GU                          | 2U       |
| ICD                         | Standard |
| Snapshot                    | Snapshot |
| Damage Element              | Pyro     |
| Damage Type                 | Burst    |
| Energy Cost                 | 80       |
| Duration                    | 15s      |
| CD                          | 20s      |
| Poise Damage                | 200      |
| Impulse Type                | 3        |

</div>
</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Yanfei.json'
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

* The Pyro DMG bonus from **Proviso** is applied before charged attack damage is calculated.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

| Attribute      | Blazing Eye    |
| -------------- | -------------- |
| Talent %       | 80%            |
| GU             | 1U             |
| Damage Element | Pyro           |
| Damage Type    | Charged Attack |
| Poise Damage   | 50             |
| Impulse Type   | 2              |

**Notes**

* **Blazing Eye** has no noticeable ICD to trigger Reactions or apply Pyro.
  * This does not affect her Charged Attack ICD.
* **Blazing Eye** can trigger vs enemy shields.
* **Blazing Eye** has hitlag, allowing you to [dragonstrike](../../combat-mechanics/tech/plunge-tech.md) off of it.

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

**Notes**

* At 4 seals, Yanfei's Charged Attack will consume 0 Stamina.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/yanfei.md')} />
