---
description: A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.
---

import char from '@site/src/data/characters/Zhongli.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Zhongli

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Zhongli.png')} alt="Zhongli's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Zhongli Written Guide](https://keqingmains.com/zhong-li/)
* [Zhongli Mains Discord](https://discord.gg/3h5uepPXKr)

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

| String | Talent 9%          | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :----------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 56.53%             | 24     | 141.33%/s | 33.76        | 3 / 4\*      |
| 2-Hit  | 57.23%             | 19     | 180.73%/s | 34.32        | 3            |
| 3-Hit  | 70.87%             | 25     | 170.09%/s | 42           | 3            |
| 4-Hit  | 78.89%             | 40     | 118.34%/s | 45.92        | 4            |
| 5-Hit  | 19.75% x 4 \(79%\) | 31     | 152.90%/s | 11.52 x4     | 2 x4         |
| 6-Hit  | 100.12%            | 60     | 100.12%/s | 61.52        | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 203.98%   | 55     | 222.52%/s | 103.28       | Air, 0, 450  |
| N1C            | 260.51%   | 91     | 171.76%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

\* If the target is more than 2 meters away.

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Zhongli's string has no hitlag on the spear kick \(N5\).
* Zhongli's attack string does not always interact with C6 Fischl on his first attack.
* How Zhongli's spearkick hits trigger [Echoes of an Offering](../../equipment/artifacts.md#echoes-of-an-offering) differs depending on the tester. For more information see this [Vault Entry](../../evidence/equipment/artifacts.md#echoes-proc-on-zhongli-spearkick-attack-differs-between-tester).
* Zhongli's spearkick combos can fail to proc Echoes after 7, 8, or even 9 hits.
* For more testing results with Zhongli, see the following Vault Entries:
  * [Potade\#9775](../../evidence/equipment/artifacts.md#more-zhongli-testing-data)
  * [Xreejan\#1180](../../evidence/equipment/artifacts.md#more-zhongli-testing-data-at-160-ping)
  * [Latiwings\#3308](../../evidence/equipment/artifacts.md#even-more-data-on-zhonglis-string-with-echoes)

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<div>
<Skill char={char} skill='e' sectionFilter='' />
<Skill char={char} skill='e' sectionFilter='Press' />
<Skill char={char} skill='e' sectionFilter='Hold' />
</div>

| Attribute         | Stone Stele | Resonance DMG | Hold DMG |
| :---------------- | :---------- | :------------ | :------- |
| Skill DMG \(T9%\) | 27.2%       | 54.4%         | 136%     |
| Particles         | -           | 0~1 \(1:1\)   | -        |
| GU                | 2U          | 1U            | 1U       |
| ICD               | Standard    | Standard      | Standard |
| Snapshot          | Snapshot    | Snapshot      | Snapshot |
| Damage Element    | Geo         | Geo           | Geo      |
| Damage Type       | Skill       | Skill         | Skill    |
| Duration          | 30s         | -             | 20s      |
| CD                | 4s          | -             | 12s      |
| Poise Damage      | 200         | 0             | 142.9    |
| Impulse Type      | 4           | 1             | 4        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Jade Shield' />

| Attribute                     | Shield        |
| :---------------------------- | :------------ |
| Base Absorption \(T9%\)       | 2506          |
| Additional Absorption \(T9%\) | 21.76% Max HP |
| Element                       | Geo           |
| Duration                      | 20s           |

</div>

**Notes**

* On cast, **Stone Stele** is placed 1 Abyss Tile in front of Zhongli.
* Hits that resonate from other Geo Constructs still proc the 4-Piece [Tenacity of the Millelith](../../equipment/artifacts.md#tenacity-of-the-millelith) set.
* **Stone Steles** are considered Geo Constructs that can be used to block attacks, or climb.
* **Resonance** can overlap to deal multiple instances of damage.
* **Stone Steles** resonate independently and with Geo Constructs from enemies, but they do not resonate with each other.
* The range for the resistance shred is ~3 Abyss tiles.
* At C0, Hold E does not re-snapshot an existing pillar; at C1 each Stone Stele snapshots on cast, meaning it's possible to have 1 unbuffed **Stone Stele** and 1 buffed **Stone Stele** at the same time.
* 4TotM does not increase the damage of the **Stone Stele** that procs the effect, because **Stone Stele** snapshots.
* **Stone Stele** will not be placed and will be destroyed instead when Zhongli is standing on a high platform.
* The RES Shred lingers for a bit after it breaks/ends.
* **Resonances** have a range of 1.5 Abyss Tiles, and the range for resonating with other Geo Constructs is 3 tiles.
* **Resonance** ICD from **Stone Steles** is shared with other Geo Constructs, C1 **Stone Stele**, and **Planet Befall**.
* The amount of **Resonance** ticks depends on FPS. For more information see this [Vault Entry](../../evidence/general-mechanics/movement-and-physics.md#tick-tock).
* **Stone Steles** can attract the Sprawling Shots when enemies trigger Hyperbloom, saving the player from a hit.
* Zhongli's particle generation is subject to an Internal Cooldown (ICD) of 1.5s. (For reference, the **Resonance** frequency is 2s.)
* Depending on the state of the ICD, the following will happen after each Elemental Skill hit: 
  * A) If on ICD, no particle will be generated. 
  * B) If not on ICD, one or no Geo Particles will be generated with equal probability (50%:50%), after which the ICD will go into effect.
* All types of Elemental Skill hits can generate Elemental Particles (Tap E initial, Hold E initial, **Stone Stele** **Resonance**, and Nearby Construct **Resonance**). However, all of them share the particle ICD. When there are two Steles (C1+), they also share this ICD.
* In co-op, the particle ICD is not shared by different players who use Zhongli.
* Particle generation requires server confirmation of Elemental Skill hits. With high ping, there is a noticeable delay between hits and particle generation, but it seems that this doesn't change the overall particle generation rate.
* The particle ICD is a status that is applied to all the current Stone Steles that Zhongli owns — not to Zhongli himself.
* Zhongli's Elemental Skill hits that occur during disconnection from the server do not deal damage after reconnection and neither do they generate particles.
* **Stone Steles** are able to experience hitlag after being hit by attacks that have hitlag.
* Particles are generated underground and at the base of the **Stone Stele** that owns the particle.
* **Resonance** and Nearby Construct **Resonance** attacks are released at the same time. Also, the damage from these attacks is dealt over all of its AoE at once, even though the attacks appear to be traveling waves.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute              | Burst                               |
| :--------------------- | :---------------------------------- |
| Skill DMG \(T9%\)      | 834.68%                             |
| Petrification Duration | 3.9s                                |
| GU                     | 4U                                  |
| ICD                    | Standard                            |
| Snapshot               | Dynamic                             |
| Damage Element         | Geo                                 |
| Damage Type            | Burst                               |
| Energy Cost            | 40                                  |
| CD                     | 12s                                 |
| Poise Damage           | Cast: 400 <br/> Burst: 500          |
| Impulse Type           | Cast: Heavy, 1200, 0 <br/> Burst: 2 |

</div>

**Notes**

* **Planet Befall**'s ICD is shared with **Stone Stele**'s damage.
* Zhongli's Burst has 190 [idle i-frames](../../combat-mechanics/frames.md#burst-idle-iframes) \(3.2s\).
* Zhongli's Burst cannot shatter Frozen enemies. It also prevents Freeze when enemies are Petrified.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Zhongli.json'
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

* This Shield Strength increase occurs after damage is calculated.
* There is no observable ICD on obtaining Shield Strength stacks.
* Persists upon swap but not upon refresh.
* Fortify gets triggered by Aura Checks.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Steles resonate independently and do not resonate with each other.
* C1 **Stone Stele** shares ICD with the other **Stone Stele**.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* The shield is visually granted after the Burst, but all shield bonuses are active for the Burst damage.

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

* Healing is not triggered by environmental damage or Corrosion.
* Healing does not have an ICD.
* Healing triggers 4-Piece [Ocean-Hued Clam](../../equipment/artifacts.md#ocean-hued-clam).

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/geo/zhongli.md')} />
