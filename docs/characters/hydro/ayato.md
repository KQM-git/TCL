---
description: The young but highly accomplished head of the Yashiro Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.
---

import char from '@site/src/data/characters/Kamisato_Ayato.json'
import { getSkillName } from '@site/src/utils/skill'

# Kamisato Ayato

![](/img/characters/gacha/Kamisato_Ayato.png)

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

| String   | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit    | 82.60%    | 13     | 381.23%/s | 47.053       | 3            |
| 2-Hit    | 86.64%    | 43     | 173.28%/s | 49.351       | 3            |
| 3-Hit    | 107.68%   | 73     | 215.36%/s | 61.339       | 3            |
| 4-Hit    | 54.10% x2 | 111    | 170.84%/s | 30.819 x2    | 3 x2         |
| 5-Hit    | 138.90%   | 159    | 173.63%/s | 79.121       | 6            |
| Recovery | -         | 191    | -         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames  | MV/s      | Poise Damage | Impulse Type |
| :------------- | :-------- | :------ | :-------- | :----------- | :----------- |
| Charged Attack | 327.97%   | -       | -         | 120          | 7            |
| N1C            | 320.57%   | 13 + 54 | 356.19%/s | -            | -            |
| Recovery       | -         | 84      | -         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                   | Skill              |
| :-------------------------- | :----------------- |
| Namisen DMG Bonus \(T9%\)   | 1.03% Max HP/Stack |
| Water Illusion DMG \(T9%\)  | 186.44%            |
| Particles                   | 1-2 \(1:1\)        |
| Frames                      | 20                 |
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

| String           | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--------------- | :-------- | :----- | :--- | :----------- | :----------- |
| Shunsuiken 1-Hit | 97.17%    | -      | -    | 50           | 3            |
| Shunsuiken 2-Hit | 108.23%   | -      | -    | 50           | 3            |
| Shunsuiken 3-Hit | 119.29%   | -      | -    | 50           | 3            |
| Recovery         | -         | -      | -    | -            | -            |
| GU               | 1A        | -      | -    | -            | -            |

**Notes**

* Shunsuiken Attacks can hit enemies inside of Venti's [Wind's Grand Ode](../anemo/venti.md#attacks).
* Shunsuiken Attacks do not snapshot.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                       | Burst    |
| :------------------------------ | :------- |
| Bloomwater Blade DMG \(T9%\)    | 112.98%  |
| Normal Attack DMG Bonus \(T9%\) | 19%      |
| Cast Frames                     | 122      |
| Energy Frame                    | 10       |
| CD Frame                        | 1        |
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

<Card item={require('../../evidence/characters/hydro/ayato.md')} />
