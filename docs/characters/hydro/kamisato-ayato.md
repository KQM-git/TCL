---
description: The young but highly accomplished head of the Yashiro Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.
---

import char from '@site/src/data/characters/Kamisato_Ayato.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Kamisato Ayato

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kamisato_Ayato.png')} alt="Kamisato Ayato's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

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

| String   | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit    | 82.60%    | 21     | 236.00%/s | 47.053       | 3            |
| 2-Hit    | 86.64%    | 33     | 157.53%/s | 49.351       | 3            |
| 3-Hit    | 107.68%   | 38     | 170.02%/s | 61.339       | 3            |
| 4-Hit    | 54.10% x2 | 27     | 240.44%/s | 30.819 x2    | 3 x2         |
| 5-Hit    | 138.90%   | 72     | 115.75%/s | 79.121       | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 327.97%   | 55     | 259.60%/s | 120          | 7            |
| N1C            | 320.57%   | 85     | 226.28%/s | -            | -            |

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

| Attribute                   | Skill              |
| :-------------------------- | :----------------- |
| Namisen DMG Bonus \(T9%\)   | 1.03% Max HP/Stack |
| Water Illusion DMG \(T9%\)  | 186.44%            |
| Particles                   | 1-2 \(1:1\)        |
| GU                          | 1A                 |
| ICD                         | 3-hit / 2.5s       |
| Snapshot                    | Snapshot           |
| Damage Element              | Hydro              |
| Damage Type                 | Skill              |
| Duration                    | 6s                 |
| CD                          | 12s                |
| Water Illusion Poise Damage | 100                |
| Water Illusion Impulse Type | 3                  |

</div>

| String           | Talent 9% | MV/s      | Poise Damage | Impulse Type |
| :--------------- | :-------- | :-------- | :----------- | :----------- |
| Shunsuiken 1-Hit | 97.17%    | 201.04%/s | 50           | 3            |
| Shunsuiken 2-Hit | 108.23%   | 223.92%/s | 50           | 3            |
| Shunsuiken 3-Hit | 119.29%   | 230.88%/s | 50           | 3            |
| GU               | 1A        | -         | -            | -            |

**Notes**

* Shunsuiken Attacks can hit enemies inside of Venti's [Wind's Grand Ode](../anemo/venti.md#attacks).
* Shunsuiken Attacks do not snapshot.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                       | Burst    |
| :------------------------------ | :------- |
| Bloomwater Blade DMG \(T9%\)    | 112.98%  |
| Normal Attack DMG Bonus \(T9%\) | 19%      |
| GU                              | 1A       |
| ICD                             | -        |
| Snapshot                        | Snapshot |
| Damage Element                  | Hydro    |
| Damage Type                     | Burst    |
| Energy Cost                     | 80       |
| Duration                        | 18       |
| CD                              | 20       |
| Poise Damage                    | 50       |
| Impulse Type                    | 2        |

</div>

**Notes**

* **Kamisato Art: Suiyuu** is similar to Ganyu's [Celestial Shower](../cryo/ganyu.md#attacks) \(tracking and mechanic-wise with one less, so hit\-miss\-miss\-miss against one enemy\) but slower.
* **Bloomwater Blades** drop once every 30 frames, with a theoretical maximum of 36 drops per Q cast.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Kamisato_Ayato.json'
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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 50           | 2            |

**Notes**

* The extra Shunsuiken strikes are considered Normal Attack damage.
* The extra Shunsuiken strikes do not have ICD.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/kamisato-ayato.md')} />
