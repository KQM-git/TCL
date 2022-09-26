---
description: An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.
---

import char from '@site/src/data/characters/Klee.json'
import { getSkillName } from '@site/src/utils/skill'

# Klee

![](/img/characters/gacha/Klee.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Klee Mains Discord](https://discord.gg/NwYDDrfKZU)
* [In Depth Klee Guide](https://keqingmains.com/klee/)

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

| String | Talent 9% | Frames | Motion Value | GU  | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :----------- | :-- | :----------- | :----------- |
| 1-Hit  | 122.67%   | 32     | 230.00%/s    | 1A  | 65           | 3            |
| 2-Hit  | 106.08%   | 76     | 180.59%/s    | 1A  | 65           | 3            |
| 3-Hit  | 152.86%   | 151    | 151.63%/s    | 1A  | 130          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | Motion Value | GU  | ICD  | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :----------- | :-- | :--- | :----------- | :----------- |
| CA     | 267.51%   | 50     | 321.01%/s    | 1A  | 0.5s | 180          | 8            |

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

* Klees's normal and charged attacks have the **blunt** attribute allowing them to break shields like claymores.
* 3 hits / 2.5s ICD, shared with elemental skill
* Enemies struck by Klee's charged attack will be staggered or launched.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Bounce DMG                       | Mine DMG  |
| :---------------- | :------------------------------- | :-------- |
| Skill DMG \(T9%\) | 161.84%                          | 55.76%    |
| Particles         | 4 \(-\)                          | -         |
| Frames            | 67                               | -         |
| GU                | 1A \(1st & 2nd\)<br />2B \(3rd\) | 1A        |
| ICD               | 3 hits / 2.5s                    | Note      |
| Snapshot          | Snapshots                        | Snapshots |
| Damage Element    | Pyro                             | Pyro      |
| Damage Type       | Skill                            | Skill     |
| CD                | 20s                              | -         |
| Poise Damage      | 40                               | 40        |
| Impulse Type      | 3                                | 3         |

</div>

**Notes**

* Splits into 8 mines
* Bounce ICD is shared with normals
* Each mine has its own ICD on Pyro application however if they explode on the same frame the Pyro application will be inconsistent \(max 2A per frame\).
* Jean, Sucrose and Anemo MC can gather the mines with their vacuum effects, however, Venti cannot do this.
* Klee's **Jumpty Dumpty**'s split mines shares an ICD on Pyro application with her Normal Attacks.
* Can be cancelled before cooldown by **Sparks n&apos; Splash** to activate skill triggered passives for free.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst          |
| :---------------- | :------------- |
| Skill DMG \(T9%\) | 72.49%         |
| Hits              | 22.8 (average) |
| Cast Frames       | 100            |
| Energy Frame      | 15             |
| CD Frame          | 10             |
| GU                | 1A             |
| ICD               | 3 hits / 2.5s  |
| Snapshot          | Snapshots      |
| Damage Element    | Pyro           |
| Damage Type       | Burst          |
| Energy Cost       | 60             |
| Duration          | 10s            |
| CD                | 15s            |
| Poise Damage      | 25             |
| Impulse Type      | 0              |

</div>

**Notes**

* Deals damage in 6 waves over 10 seconds. On each wave, there is a 35% chance for 3 hits to occur, 50% chance for 4 hits to occur, and 15% chance for 5 hits to occur.
* ICD is shared with C1.
* If Klee leaves the field with this active no more damage will be dealt even if there is duration left.
* This snapshots all temporary buffs when cast.

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

**Notes**

* Mines generated by Jumpy Dumpty can generate an Explosive Spark.
* Klee can only generate an Explosive Spark every 4 seconds.
* Explosive Spark lasts up to 30 seconds when not consumed.
* Explosive Spark stays even when Klee has been swapped out.
* Explosive Spark can proc when hitting most plants, animals, and objects even if it doesn't "deal DMG".
* If an Explosive Spark obtained from a Normal Attack is animation canceled by a Charged Attack, Stamina will still be consumed during the Charged Attack.

</TabItem>

<TabItem value='a4' label='Ascension 4'>
<Passive char={char} passive={1} />

**Notes**

* This energy is not affected by ER.
* This energy can proc vs enemy shields

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

| Attribute      | Chained Reactions                 |
| -------------- | --------------------------------- |
| GU             | 1A                                |
| ICD            | 3 hits / 2.5s (shared with Burst) |
| Damage Element | Pyro                              |
| Damage Type    | Elemental Burst                   |
| Poise Damage   | 25                                |
| Impulse Type   | 0                                 |

**Notes**

* This is effected by Elemental Burst DMG% from Noblesse Oblige.
* Has a very small AOE
* Has a 10% chance to spawn, increasing by 8% per failed attempt until it successfully procs.
  * Has no ICD for its proc chance, and has 6 different triggers: N1, N2, N3, CA, pressing E, and pressing Q.
* When nearby 3+ enemies, Klee's C1 has a rare chance to "misfire" causing it to aim in a strange direction (almost always missing the target) or despawn before it even fires.
* Klee's C1 appears to have a standard ICD for elemental application, and is shared with her burst.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Type              | GU  | ICD  |
| :---------------- | :-- | :--- |
| Sparkly Explosion | 2B  | None |
| Poise Damage      | 120 |
| Impulse Type      | 5   |

**Notes**

* Klee’s C4 damage instance has no ability type scaling tags.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* Blazing Delight does not stack with itself.
* Blazing Delight can snapshot Klee's own Elemental Burst.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/klee.md')} />
