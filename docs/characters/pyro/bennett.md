---
description: A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.
---

import char from '@site/src/data/characters/Bennett.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Bennett

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Bennett.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Bennett Mains Discord](https://discord.gg/qrjeEyejsd)
* [Full Bennett Guide: Bennett's Adventure Log](https://keqingmains.com/bennett/)

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
| 1-Hit  | 81.84%    | 12     | 409.20%/s | 38.7         | 3            |
| 2-Hit  | 78.53%    | 32     | 300.69%/s | 37.8         | 3            |
| 3-Hit  | 100.33%   | 63     | 248.29%/s | 47.7         | 3            |
| 4-Hit  | 109.65%   | 118    | 188.31%/s | 52.2         | 3            |
| 5-Hit  | 132.09%   | 167    | 180.52%/s | 62.1         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 102.7% + 111.55% | -      | -         | 2 + 6        |
| N1C    | 296.09%          | 100    | 177.65%/s | -            | -            |

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
* Enemies struck by Bennett's charged attack will be staggered or launched.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill Press | Skill Hold \(Level 1\) | Skill Hold \(Level 2\)                                        |
| :---------------- | :---------- | :--------------------- | :------------------------------------------------------------ |
| Skill DMG \(T9%\) | 233.92%     | 142.8% + 156.4%        | 149.6% + 163.2% + 224.4%                                      |
| MV/s \(T9%\)      | 269.91%/s   | 160.29%/s              | 163.61%/s                                                     |
| Particles         | 2~3 \(3:1\) | 3 \(-\)                | 3 \(-\)                                                       |
| Frames            | 52          | 112                    | 197                                                           |
| GU                | 2B          | 2x 1A                  | 3x 1A                                                         |
| ICD               | None        | None                   | None                                                          |
| Snapshot          | Dynamic     | Dynamic                | Dynamic                                                       |
| Damage Element    | Pyro        | Pyro                   | Pyro                                                          |
| Damage Type       | Skill       | Skill                  | Skill                                                         |
| CD                | 5s          | 7.5s                   | 10s                                                           |
| Poise Damage      | 100         | 100 x2                 | Hit: 100 x2 + 250 <br/> Explosion: 250                        |
| Impulse Type      | 4           | 3 + \(Air, 300, 900\)  | Hit: 3 + \(Air, 300, 900\) + 8 <br/> Explosion: Air, 650, 950 |

</div>

**Notes**

* Max hold duration is 2 seconds, after which Bennett will use a Level 2 Passion Overload by default.
* Having knockback resistance will prevent the explosion from knocking back Bennett after casting a Level 2 Passion Overload.
* When casting a Level 2 Passion Overload it will destroy one of the **Rain Swords** from Xingqiu's Elemental skill despite not dealing any damage.
* Frame counts are done against Ruin Guards.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q' sectionFilter='' />

| Attribute         | Burst    |
| :---------------- | :------- |
| Skill DMG \(T9%\) | 395.76%  |
| Cast Frames       | 51       |
| Energy Frame      | 42       |
| CD Frame          | 36       |
| GU                | 2B       |
| ICD               | None     |
| Snapshot          | Snapshot |
| Damage Element    | Pyro     |
| Damage Type       | Burst    |
| Energy Cost       | 60       |
| CD                | 15s      |
| Poise Damage      | 200      |
| Impulse Type      | 4        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='q' sectionFilter='Inspiration Field' />

| Attribute       | Field \(Talent 9%\) |
| :-------------- | :------------------ |
| HP Regeneration | 10.2% Max HP + 1174 |
| ATK Bonus Ratio | 95.2% **Base ATK**  |
| Imbue           | 1A                  |
| Duration        | 12s                 |

</div>

**Notes**

* Bennett field does not apply the buffs instantaneously on swap. **Inspiration Field** applies the ATK bonus and healing on the same tick every second. If you swap after the tick occurs, you will need to wait for the next tick to receive the ATK bonus.
  * Additionally, **Inspiration Field**'s buff lingers for a bit after the visual of the circle fades away.
* **Inspiration Field's** ATK Bonus and **C6: Fire Ventures With Me** Pyro DMG Bonus will apply on its own damage calculation.
* The bonus ATK from **Inspiration Field** ONLY scales with Bennett's base attack.
* When in coop with multiple Bennetts, the bonus ATK prioritizes the **Inspiration Field** that applied the bonus first.
  * This means that even when two Bennett bursts overlap, the attack buff that was applied first will remain.

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

<TabItem value='a4' label='Ascension 4'>
<Passive char={char} passive={1} />

**Notes**

* This effect is tied to Bennett's Attack Bonus, not the field itself.

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
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Attribute         | Skill Hold \(Level 1\) + Normal Attack |
| :---------------- | :------------------------------------- |
| Skill DMG \(T6%\) | 117.6% + 128.8% + 173.88%              |
| Particles         | 3 \(-\)                                |
| GU                | 3x 1A                                  |
| ICD               | 3 hits/2.5s                            |
| Snapshot          | Dynamic                                |
| Damage Element    | Pyro                                   |
| Damage Type       | Skill                                  |
| CD                | 7.5s                                   |
| Poise Damage      | 100                                    |
| Impulse Type      | 6                                      |

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* Pyro Infusion lasts 2 seconds upon leaving **Inspiration Field**.
* The Pyro DMG bonus will apply to the Fantastic Voyage damage.
* Pyro infused autos have 1U worth of Pyro application.
* The buff does not stack in coop.
* The description of **Fire Ventures With Me** has a mistranslation. The 15% Pyro DMG Bonus applies to every character within its area of effect, regardless of weapon type.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/bennett.md')} />
