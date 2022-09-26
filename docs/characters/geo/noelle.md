---
description: A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.
---

import char from '@site/src/data/characters/Noelle.json'
import { getSkillName } from '@site/src/utils/skill'

# Noelle

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Noelle.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Noelle Mains Discord](https://discord.gg/kvft4TKFet)
* [Full Noelle Guide: The One-Maid Army](https://keqingmains.com/noelle/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage \(no Q/with Q\) | Impulse Type |
| :----- | :-------- | :----- | :-------- | :--------------------------- | :----------- |
| 1-Hit  | 145.36%   | 28     | 311.49%/s | 105.8 / 132.25               | 3            |
| 2-Hit  | 134.77%   | 70     | 240.11%/s | 98.1 / 122.82                | 3            |
| 3-Hit  | 158.47%   | 116    | 226.86%/s | 115.34 / 144.87              | 3            |
| 4-Hit  | 208.4%    | 174    | 223.1%/s  | 151.68 / 189.75              | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String           | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :--------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG     | 93.22%    | 311    | 179.85%/s | 60           | 3            |
| Final Attack DMG | 166.22%   | 40     | 187.76%/s | 120          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

**Notes**

* Optimal damage is a 4-hit cancel when hitting all targets or 3-hit cancel when the fourth hit won't hit all enemies.
* Noelle is able to perform dragonstrike, but because of her model, it's difficult to perform by hand without movement speed buffs. However, the characters that increase movement speed do not synergize well with Noelle in normal play. Performing dragonstrike on Noelle via N1 + plunge nets on average, about a 27% increase in DPS compared to N3D.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill        |
| :---------------- | :----------- |
| Skill DMG \(T9%\) | 204% DEF     |
| Particles         | 0 \(-\)      |
| Frames            | -            |
| GU                | 2U           |
| ICD               | 3 hit / 2.5s |
| Snapshot          | Dynamic      |
| Damage Element    | Geo          |
| Damage Type       | Skill        |
| Duration          | 12s          |
| CD                | 24s          |
| Poise Damage      | 100          |
| Impulse Type      | 3            |

| Attribute               | Shield           |
| :---------------------- | :--------------- |
| Base Scaling \(T9%\)    | 272% DEF + 1565  |
| Healing Chance          | 58%              |
| Healing Scaling \(T9%\) | 36.18% DEF + 209 |
| Elemental Type          | Geo              |
| Duration                | 12s              |

</div>

**Notes**

* **Breastplate**'s damage shares standard ICD with **To Be Cleaned** \(C4\).
* The damage from **To Be Cleaned** \(C4\) is calculated using Noelle’s current attack at the moment the shield breaks.
* When the shield breaks it creates enough hitlag that you can perform a Plunge attack if you jump at the correct time, however unless you purposefully break the shield it can be hard to time correctly.
* The initial hit of **Breastplate** can trigger the healing as well, not just Normal and Charged Attacks.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute       | Burst        |
| :-------------- | :----------- |
| Burst DMG (T9%) | 114.24%      |
| Skill DMG (T9%) | 157.76%      |
| ATK Bonus (T9%) | 68% DEF      |
| Cast Frames     | 111          |
| Energy Frame    | 8            |
| CD Frame        | 2            |
| GU              | 1U           |
| ICD             | 3 hit / 2.5s |
| Snapshot        | Dynamic      |
| Damage Element  | Geo          |
| Damage Type     | Burst        |
| Duration        | 15s          |
| CD              | 15s          |
| Poise Damage    | 150          |
| Impulse Type    | 4            |

</div>

**Notes**

* Noelle's infused Normal and Charged Attacks apply 1GU and have standard 3 hit / 2.5s ICD.
* The DEF to ATK conversion is snapshotted when you activate burst so any changes to DEF after burst is used will not affect ATK.
* The two activation damage instances can proc the healing effect from **Breastplate**.

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

| Attribute      | Shield   |
| :------------- | :------- |
| Base Scaling   | 400% DEF |
| Elemental Type | Geo      |
| Duration       | 20s      |
| CD             | 60s      |

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* Hitting multiple opponents with a single attack is only counted as one hit.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* This is an additive DMG% bonus.

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Attribute      | C4           |
| :------------- | :----------- |
| Skill DMG      | 400%         |
| GU             | -            |
| ICD            | 3 hit / 2.5s |
| Snapshot       | Dynamic      |
| Damage Element | Geo          |
| Damage Type    | Skill        |

**Notes**

* C4 shares ICD with Noelle's elemental skill damage.
* The damage from **To Be Cleaned** is calculated using Noelle’s current attack at the moment the shield breaks.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* Noelle can extend her burst duration at C6 to maximum by being off field at the time it is supposed to expire
* The bonus DEF conversion from **Must Be Spotless** is additive (i.e. it takes the bonus from 56% DEF to 106% DEF at talent level 6).

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/geo/noelle.md')} />
