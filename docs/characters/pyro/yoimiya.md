---
description: Owner of Naganohara Fireworks. Known as the "Queen of the Summer Festival," she excels in her craft of creating fireworks that symbolize people's hopes and dreams.
---

import char from '@site/src/data/characters/Yoimiya.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Yoimiya

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Yoimiya.png')} alt="Yoimiya's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [6 Minute Yoimiya Video Guide](https://www.youtube.com/watch?v=FjDsbxPbk50)
* [Yoimiya Full Guide](https://keqingmains.com/yoimiya/)

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

| String    | Talent 9%           | Frames | MV/s      | Poise Damage | Impulse Type \(no E/with E\) |
| :-------- | :------------------ | :----- | :-------- | :----------- | :--------------------------- |
| 1-Hit DMG | 59.94% ×2 (119.88%) | 35     | 205.51%/s | 8.16         | 1 / 2                        |
| 2-Hit DMG | 115%                | 26     | 265.38%/s | 15.65        | 1 / 2                        |
| 3-Hit DMG | 149.49%             | 39     | 229.98%/s | 19.98        | 1 / 2                        |
| 4-Hit DMG | 78.07% ×2 (156.14%) | 44     | 212.92%/s | 10.66        | 1 / 2                        |
| 5-Hit DMG | 178.04%             | 51     | 209.46%/s | 23.84        | 1 / 2                        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String                    | Talent 9% | Frames        | MV/s                            | GU  | Poise Damage        | Impulse Type |
| :------------------------ | :-------- | :------------ | :------------------------------ | :-- | :------------------ | :----------- |
| Aimed Shot                | 80.58%    | 26            | 185.95%/s                       | -   | 10 \(Headshot: 30\) | 2            |
| Charge Level 1            | 210.8%    | 97            | 130.39%/s                       | 1U  | 20 \(Headshot: 60\) | 5            |
| Kindling Arrows (1, 2, 3) | 27.88%    | 114, 132, 150 | 125.62%/s, 121.16%/s, 117.78%/s | 1U  | 20                  | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| String          | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.11%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* The auto-aim range for her normals is around 6 abyss tiles (~15.3 meters)
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).
* Regular Charge Level 2 arrows have Impulse Type 2 and headshots have 5, Poise Damage is the same as Charge Level 1.
* **Kindling Arrows** last around 2.5 seconds, don't drop off like regular arrows, and have auto lock aiming at a semi wide range.
* Yoimiya can have all three **Kindling Arrows** up after **Niwabi Fire Dance** ends, so long as the required charging time is met.
* **Kindling Arrows** are affected by [Amos' Bow](../../equipment/weapons/bows.md#amos-bow)'s passive and reach max stacks at low range.
* When hitting a weakspot with **Kindling Arrows**, Yoimiya can activate the [Prototype Crescent](../../equipment/weapons/bows.md#prototype-crescent) passive but not always CRIT.
* How Yoimiya's N1 hits trigger [Echoes of an Offering](../../equipment/artifacts.md#echoes-of-an-offering) differs depending on range.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill                     |
| :------------------------ | :------------------------ |
| Blazing Arrow DMG \(T9%\) | 158.79% Normal Attack DMG |
| Particles                 | 1 (-) per proc            |
| GU                        | 1U                        |
| ICD                       | Standard                  |
| Damage Element            | Pyro                      |
| Damage Type               | Normal Attack             |
| Duration                  | 10s                       |
| CD                        | 18s                       |
| Poise Damage              | 60                        |
| Impulse Type              | 3                         |

</div>

**Notes**

* The DMG Bonus from **Niwabi Fire-Dance** is multiplicative.
* Yoimiya's Particle generation triggers on infused arrow hit and has an ICD of 2s on Particle generation.
  * Yoimiya's Particle generation procs cannot be buffered, so Yoimiya will ideally generate 4 Particles over the duration of **Niwabi Fire-Dance**
* Charged Shots during the duration of **Niwabi Fire-Dance** do not generate Particles.
* Yoimiya can still produce Energy even after **Niwabi Fire-Dance** expires as long as the ICD is off CD and the infused normal attack string arrow lands.
* Blazing Arows snapshot the DMG Bonus from Niwabi Fire-Dance and still benefit from it even when Yoimiya swaps off-field right before the Blazing Arrows hit.

**Interactions**

* Yoimiya's **Niwabi Fire-Dance's Blazing Arrow** DMG increase does not increase Yun Jin's **Cliffbreaker's Banner** bonus.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute       | Burst         | Aurous Blaze Explosion |
| :-------------- | :------------ | ---------------------- |
| Skill DMG (T9%) | 216.24%       | 207.4%                 |
| GU              | 2U            | 1U                     |
| ICD             | None          | Standard               |
| Snapshot?       | Dynamic       | Dynamic                |
| DMG Element     | Pyro          | Pyro                   |
| DMG Type        | Burst         | Burst                  |
| Energy Cost     | 60            | -                      |
| CD              | 15s           | -                      |
| Duration        | 10s           | -                      |
| Poise Damage    | 220           | 60                     |
| Impulse Type    | Air, 200, 800 | 3                      |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Yoimiya.json'
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

* Stacks gained from **Tricks of the Trouble-Maker** do not have independent durations, each Normal Attack hit will refresh the duration of all stacks to 3s.
* The Pyro DMG Bonus from **Tricks of the Trouble-Maker** can last up to 3s after **Niwabi Fire-Dance** ends.
* Gaining stacks will cause the orbitting sparks from **Niwabi Fire-Dance** to increase in brightness.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**
 
* The buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 15           | 2            |

**Notes**

* Kindling Arrow shares ICD with Yoimiya's infused Normal Attacks.
* These extra Blazing Arrow shares ICD with Yoimiya's infused normal attacks.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/yoimiya.md')} />
