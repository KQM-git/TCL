---
description: The tycoon of a winery empire in Mondstadt, unmatched in every possible way.
---

import char from '@site/src/data/characters/Diluc.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Diluc

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Diluc.png')} alt="Diluc's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Diluc: The Dark Side of the Dawn (In-Depth Written Guide)](https://keqingmains.com/diluc/)
* [3 Minute Guide to Diluc](https://www.youtube.com/watch?v=KdBdeGvtyUM)
* [Diluc Mains Discord](https://discord.gg/af9MWyd)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 164.79%   | 42     | 235.41%/s | 108.1        | 3            |
| 2-Hit  | 161%      | 56     | 172.50%/s | 105.57       | 3            |
| 3-Hit  | 181.54%   | 44     | 247.55%/s | 119.03       | 3            |
| 4-Hit  | 246.16%   | 111    | 133.06%/s | 161.46       | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String      | Talent 9% | Frames | MV/s     | Poise Damage | Impulse Type |
| :---------- | :-------- | :----- | :------- | :----------- | :----------- |
| Slash       | 126.4%    | ?      | ?        | 60           | 3            |
| Final Slash | 229.1%    | ?      | ?        | 120          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 164.44%   | 35           | 2            |
| Low Plunge DMG  | 328.81%   | 150          | 4            |
| High Plunge DMG | 410.7%    | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter=''/>

| Attribute         | Skill (1-Hit) | Skill (2-Hit) | Skill (3-Hit) |
| :---------------- | :------------ | :------------ | :------------ |
| Skill DMG \(T9%\) | 160.48%       | 165.92%       | 218.96%       |
| MV/s \(T9%\)      | 213.97%/s     | 191.45%/s     | 162.19%/s     |
| Particles         | 1~2 \(3:1\)   | 1~2 \(3:1\)   | 1~2 \(3:1\)   |
| GU                | 1U            | 1U            | 1U            |
| ICD               | None          | None          | None          |
| Snapshot          | Dynamic       | Dynamic       | Dynamic       |
| Damage Element    | Pyro          | Pyro          | Pyro          |
| Damage Type       | Skill         | Skill         | Skill         |
| Cooldown          | 10s           | -             | -             |
| Poise Damage      | 120           | 120           | 120           |
| Impulse Type      | 4             | 5             | 6             |

</div>

**Notes**

* The cooldown starts after the first cast.
* Each cast adds a stack to the 4-Piece Crimson Witch of Flames artifact set.
* When Searing Onslaught hits a Frozen target, it will Shatter before reacting with any underlying auras.
* Getting Frozen in the middle of **Searing Onslaught**'s second attack's animation allows for the Skill to be briefly recasted when unfrozen.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q' sectionFilter=''/>
<div>

| Attribute | Field |
| :-------- | :---- |
| Infuse GU | 1U    |
| Duration  | 8s    |

| Attribute         | Slashing DMG                                      | DoT DMG       | Explosion DMG |
| :---------------- | :------------------------------------------------ | :------------ | :------------ |
| Skill DMG \(T9%\) | 346.8%                                            | 102%          | 346.8%        |
| MV/s              | 413.63%/s                                         | -             | -             |
| GU                | 2U                                                | 2U            | 2U            |
| ICD               | 5 hits/5s\*                                       | 5 hits/5s\*   | 5 hits/5s\*   |
| Snapshot          | Dynamic                                           | Snapshot      | Snapshot      |
| Damage Element    | Pyro                                              | Pyro          | Pyro          |
| Damage Type       | Burst                                             | Burst         | Burst         |
| Energy Cost       | 40                                                | -             | -             |
| Duration          | 12s                                               | -             | -             |
| CD                | 12s                                               | -             | -             |
| Poise Damage      | Cast: 400 <br/> 1st Part: 100 <br/> 2nd Part: 100 | 100           | 100           |
| Impulse Type      | Cast: 3 <br/> 1st Part: 4 <br/> 2nd Part: 5       | Heavy, 900, 0 | 8             |

</div>
</div>

**Notes**

* The ICD for **Dawn** is shared between Slashing DMG, DoT DMG, and Explosions DMG.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Diluc.json'
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

<TabItem value='a4' label='Ascension 4'>
<Passive char={char} passive={1} />

**Notes**

* The Pyro DMG Bonus is also applied to **Dawn**'s Slashing, DoT, and Explosion DMG.

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

* This effect can be stacked while shielded because it's triggered on hit and not on damage.

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

<TalentsFull char={char} />

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/diluc.md')} />
