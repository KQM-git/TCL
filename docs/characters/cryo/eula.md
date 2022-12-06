---
description: The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.
---

import char from '@site/src/data/characters/Eula.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Eula

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Eula.png')} alt="Eula's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Eula Mains Discord](https://discord.gg/EulaMains)
* [Basic Eula Guide](https://keqingmains.com/eula/)
* [7 Minute Video Guide to Eula](https://youtu.be/4pm1CQ7ftws)

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

| String        | Talent 9%  | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------ | :--------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit         | 164.86%    | 44     | 224.81%/s | 101.2        | 105.8        |
| 2-Hit         | 171.87%    | 48     | 214.84%/s | 105.8        | 3            |
| 3-Hit         | 104.35% x2 | 65     | 192.65%/s | 65.55 x2     | 3            |
| 4-Hit         | 206.95%    | 54     | 229.94%/s | 129.95       | 3            |
| 5-Hit         | 131.97% x2 | 116    | 136.52%/s | 69.21 x2     | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type         | Talent 9% | Poise Damage | Impulse Type |
| :----------- | :-------- | :----------- | :----------- |
| Spinning DMG | 126.4%    | 60           | 3            |
| Final DMG    | 228.55%   | 120          | 6            |
| Stamina Cost | 40/s      | -            | -            |
| Max Duration | 5s        | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Press       | Hold        | Icewhirl Brand |
| :---------------- | :---------- | :---------- | :------------- |
| Skill DMG \(T9%\) | 248.88%     | 417.52%     | 163.2%         |
| Particles         | 1~2 \(1:1\) | 2~3 \(1:1\) | -              |
| GU                | 1U          | 1U          | 1U             |
| ICD               | None        | None        | 3 hits / 2.5s  |
| Snapshot          | -           | -           | -              |
| Damage Element    | Cryo        | Cryo        | Cryo           |
| Damage Type       | Skill       | Skill       | Skill          |
| CD                | 4s          | 10s         | -              |
| Poise Damage      | 120         | 150         | 50             |
| Impulse Type      | 3           | 5           | 1              |

</div>

| Attribute                 | Value         |
| :------------------------ | :------------ |
| DEF Bonus                 | 30% per stack |
| Phys RES Decrease \(T9%\) | 24%           |
| Cryo Res Decrease \(T9%\) | 24%           |
| RES Decrease Duration     | 7s            |
| Grimheart Duration        | 18s           |

**Notes**

* Both variants of E are considered blunt attacks, but **Icewhirl Brands** are not.
* **Grimheart** stacks persist on switch.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                        | Skill         | Lightfall Sword |
| :------------------------------- | :------------ | :-------------- |
| Skill DMG \(T9%\)                | 417.52%       | -               |
| Lightfall Sword Base DMG \(T9%\) | -             | 674.34%         |
| DMG Per Stack \(T9%\)            | -             | 137.78%         |
| GU                               | 2U            | None            |
| ICD                              | None          | None            |
| Snapshot                         | Dynamic       | Dynamic         |
| Damage Element                   | Cryo          | Physical        |
| Damage Type                      | Burst         | Burst           |
| Energy Cost                      | 80            | -               |
| Duration                         | -             | 7s              |
| CD                               | 20s           | -               |
| Poise Damage                     | 0\*           | 400             |
| Impulse Type                     | Air, 0, 800\* | Air, 0, 800     |

</div>

\* Beginning of the animation affect does 400 Poise Damage and has Impulse Type 3.

**Notes**

* **Glacial Illumination** does not snapshot.
  * **Lightfall Sword** is still updating live stats when it lights up and is about to explode.
  * Lightfall stacks cannot be gained once **Lightfall Sword** lights up right before exploding.
  * **Lightfall Sword** does not snapshot even after Eula is swapped off-field, allowing for a 23 frame window to apply team buffs and increase her Burst's damage.
    * Buffs that work for **Lightfall Sword** under her Alt-Swap + LFS timer include Rosaria A4, Bennett Burst, 4NO, Lisa A4, Shenhe A4, TTDS, and Zhongli shred.
  * Rosaria's [**Shadow Samaritan**](rosaria.md#ascension-passives) \(A4\), does not consistently last to the end of Eula's Burst when immediately activated before Eula's Burst.
* **Glacial Illumination**'s cooldown and Energy is reset at hitmark, not cast.
* **Glacial Illumination** cast and **Lightfall Sword** are both considered blunt attacks
* The duration of **Glacial Illumination** cannot be increased by hitlag.
* **Lightfall stacks** are independent of enemies hit, meaning hitting multiple enemies will not net more stacks compared to hitting one enemy.
* The initial hit of Eula's Q does not grant a **Lightfall Stack**.
* Eula’s **Lightfall Sword** damage can be blocked by both [wooden](https://imgur.com/a/bL0UttC) and [Geo](https://imgur.com/a/PU9gkvv) Mitachurl shields.
* NA multihits, Hold E Icewhirls, and A1 sword remnant add 1 **Lightfall Stack** for each damage instance.
* Ranges \(1 abyss tile is ~2.55m\)
  * **Glacial Illumination**'s cast range: ~8 meters
  * **Lightfall Sword** explosion range: ~7 meters
* By holding down a directional key during the animation of **Glacial Illumination**, you are actionable ~4 frames earlier compared to not holding it down.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Eula.json'
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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 180          | 3            |

**Notes**

* The damage dealt by **Shattered Lightfall Sword** scales with **Glacial Illumination**'s talent level.
* This damage is considered Elemental Burst damage and is buffed by the effects of 2NO.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Whenever you consume a Grimheart stack, no matter the amount of stacks consumed, the duration of C1 will last a base of 6 seconds + 6 per Grimheart stack.
  * So one stack is 12s and two is 18s

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

* This effect is additive and applies to both her Lightfall Sword from **Glacial Illumination** \(Burst\) and the Lightfall Remnants from **Roiling Rime** \(A1\).

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

<Card item={require('../../evidence/characters/cryo/eula.md')} />
