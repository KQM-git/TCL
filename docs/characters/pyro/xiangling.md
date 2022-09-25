---
description: A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.
---

import char from '@site/src/data/characters/Xiangling.json'
import { getSkillName } from '@site/src/utils/skill'

# Xiangling

![](/assets/characters/gacha/Xiangling.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Xiangling Guide](https://keqingmains.com/xiangling/)

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

| String | Talent 9%             | Frames                | MV/s      | Poise Damage   | Impulse Type |
| :----- | :-------------------- | :-------------------- | :-------- | :------------- | :----------- |
| 1-Hit  | 77.26%                | 12                    | 386.30%/s | 16             | 3            |
| 2-Hit  | 77.42%                | 38                    | 244.23%/s | 19.2           | 3            |
| 3-Hit  | 47.87% x2 \(95.74%\)  | 60 + 72               | 208.68%/s | 19.2 + 20      | 2 + 3        |
| 4-Hit  | 25.91% x4 \(103.64%\) | 106 + 118 + 129 + 141 | 150.66%/s | 19.2 x3 + 12.8 | 2 x2 + 3 x2  |
| 5-Hit  | 130.51%               | 167                   | 174.10%/s | 71.2           | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 223.57%   | -      | -         | 120          | 5            |
| N1C    | 300.83%   | 90     | 200.55%/s | -            | -            |

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

* All frame counts are done against Ruin Guards.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill     |
| :---------------- | :-------- |
| Skill DMG \(T9%\) | 189.18%   |
| Particles         | 1 per hit |
| Frames            | 18        |
| GU                | 1A        |
| ICD               | None      |
| Snapshot          | Snapshot  |
| Damage Element    | Pyro      |
| Damage Type       | Skill     |
| Duration          | 7s        |
| CD                | 12s       |
| Poise Damage      | 32        |
| Impulse Type      | 3         |

</div>

**Notes**

* Multiple Guobas can exist on-field at a time if Xiangling has enough Cooldown Reduction
* Guoba self applies pyro aura when he attacks. This aura can be swirled.
* Upon casting, Guoba can snapshot and benefit from 1 stack of the Crimson Witch of Flames 4-Piece Bonus.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | 1-Hit Swing  | 2-Hit Swing  | 3-Hit Swing  | Pyronado |
| :---------------- | :----------- | :----------- | :----------- | :------- |
| Skill DMG \(T9%\) | 122.4%       | 149.6%       | 186.32%      | 190.4%   |
| Cast Frames       | 99           | -            | -            | -        |
| Energy Frame      | 29           | -            | -            | -        |
| CD Frame          | 20           | -            | -            | -        |
| GU                | 1A           | 1A           | 1A           | 1A       |
| ICD               | 3 hit / 2.5s | 3 hit / 2.5s | 3 hit / 2.5s | None     |
| Snapshot          | Dynamic      | Dynamic      | Snapshot     | Snapshot |
| Damage Element    | Pyro         | Pyro         | Pyro         | Pyro     |
| Damage Type       | Burst        | Burst        | Burst        | Burst    |
| Energy Cost       | 80           | -            | -            | -        |
| Duration          | 10s          | -            | -            | -        |
| CD                | 20s          | -            | -            | -        |
| Poise Damage      | 30           | 30           | 30           | 30       |
| Impulse Type      | 3            | 3            | 3            | 3        |

</div>

**Notes**

* Moving in the opposite direction of **Pyronado**'s spin will increase the number of hits.
* **Pyronado** has a ~36 frame lockout before it can deal damage to the same enemy again.

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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 8.8          | 2            |

**Notes**

* C2 DMG instance has no ability type scaling tags.
* C2 DMG also does not snapshot.

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

* Pyronado itself does not benefit from C6, but the third hit of her initial swings can receive the 15% **Pyro** DMG Bonus.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/xiangling.md')} />
