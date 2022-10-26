---
description: Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.
---

import char from '@site/src/data/characters/Amber.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Amber

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Amber.png')} alt="Amber's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Amber Guide](https://keqingmains.com/amber/)
* [8 Minute Guide to Amber](https://www.youtube.com/watch?v=QW40leHPgJ8)

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
| 1-hit  | 66.36%    | 26     | 153.14%/s | 12.9         | 1            |
| 2-Hit  | 66.36%    | 22     | 180.98%/s | 13.2         | 1            |
| 3-Hit  | 85.32%    | 37     | 138.36%/s | 15           | 1            |
| 4-Hit  | 86.9%     | 34     | 153.35%/s | 14.4         | 1            |
| 5-Hit  | 109.02%   | 60     | 109.02%/s | 16.5         | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type          | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type |
| :------------ | :-------- | :----- | :--------- | :-- | :------------------ | :----------- |
| Aimed Shot    | 80.58%    | 25     | 193.39%/s  | -   | 10 \(Headshot: 30\) | 2            |
| Fully Charged | 210.8%    | 96     | 131.75%/s  | 2B  | 20 \(Headshot: 60\) | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Charged Attack frame counts are done using by holding and releasing the Normal Attack button.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Effect                 | Skill     |
| :--------------------- | :-------- |
| Explosion DMG \(T9%\)  | 209.44%   |
| Inherited HP \(T9%\)   | 70.31%    |
| Particles              | 4 \(-\)   |
| GU                     | 2B        |
| ICD                    | None      |
| Snapshot               | Snapshots |
| Damage Element         | Pyro      |
| Damage Type            | Skill     |
| Duration               | 8s        |
| Cooldown               | 15s       |
| Explosion Poise Damage | 260       |
| Explosion Impulse Type | 5         |

</div>

**Notes**

* The explosion has the blunt attribute that lets it damage shields and shatter frozen enemies like claymores.
* **Baron Bunny** can be picked up by Anemo units like Jean and Sucrose when they use their elemental skills.
* The explosion radius is smaller than the animation so take care when aiming it.
* Baron Bunny is allowed to have a hydro or cryo aura, as well as be frozen.
  * Only environmental effects may apply the hydro aura.
  * Most reactions function properly on this aura, notably: crystalize, swirl, superconduct, and shatter.
* Multiple Baron Bunnies can be spawned without C4 when utilizing cooldown reduction effects.
* **Baron Bunny**'s duration starts when it lands, not when the Skill is casted.
* If **Baron Bunny** doesn't land on the ground within 10s of being casted, it disappears.
* **Baron Bunny** can take collision damage from characters and from falling. Collision damage can occur from dashing into the bunny or plunging into it.
* **Baron Bunny** has a hitbox that players can hit with **Normal Attacks**. Some characters such as **Xingqiu** can hit this hitbox easily, while other characters struggle to hit it consistently. This can be used for Dragonstrikes.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect            | Burst                                           |
| :---------------- | :---------------------------------------------- |
| Wave DMG \(T9%\)  | 47.74%                                          |
| Total DMG \(T9%\) | 859.25% \(18 Waves\)                            |
| GU                | 1A                                              |
| ICD               | 3 hits / 1s                                     |
| Snapshot          | Snapshots                                       |
| Damage Element    | Pyro                                            |
| Damage Type       | Burst                                           |
| Energy Cost       | 40                                              |
| Duration          | 2s                                              |
| CD                | 12s                                             |
| Poise Damage      | Main Arrows: 7.22 x5 <br/> Sub Arrows: 7.22 x13 |
| Impulse Type      | Main Arrows: 2 x5 <br/> Sub Arrows: 0 x13       |

</div>

**Notes**

* Applies 1A worth of pyro 6 times, following normal ICD rules.
* Does 18 waves total over 2 seconds in the center of the AoE.
* 8 of the waves cover approximately the outer half the size of the marker.
* 10 waves cover the inner half of the marker.
* Anything in the outer half is expected to get hit a random number of times, with closer to the edge being lower in the number of hits.
* The random arrow distribution in Amber's burst makes the reaction potential of her burst as the trigger very inconsistent.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Amber.json'
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

| Extra Arrow   | Poise Damage       | Impulse Type      |
| :------------ | :----------------- | :---------------- |
| Aime Shot     | 2 \(Headshot: 6\)  | 2 \(Headshot: 5\) |
| Fully Charged | 4 \(Headshot: 12\) | 2 \(Headshot: 5\) |

**Notes**

* The second arrow is fired 10 degrees vertically below actual aiming, has separate critical, and also makes the primary shot travel further before it starts dropping down.
* C1 damage instance is considered CA damage.
* Shared ICD with Charged Attack.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* Explosion via manual detonation deals 200% additional DMG.
* C2 damage instance is considered skill damage.
* Baron Bunny snapshots.
* In CO-OP, teammates can manually detonate each other's Baron Bunnies, but the damage bonus will only apply if both players have C2.
* It can be triggered using Transformative Reactions via Amber's Charged Attacks.  

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

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/amber.md')} />
