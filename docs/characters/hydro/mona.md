---
description: A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.
---

import char from '@site/src/data/characters/Mona.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Mona

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Mona.png')} alt="Mona's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Mona Mains Discord](https://discord.gg/uxVEDkTyRe)
* [Full Mona Written Guide: The Astrological Guide to Mona Megistus](https://keqingmains.com/mona/)
* [Optimal Mona Attack String](../../evidence/characters/hydro/mona.md#what-attack-string-combo-outputs-the-highest-dps-for-mona) _by Baezal\#0868_
* [Mona Omen Extension Explained](../../evidence/characters/hydro/mona.md#mona-omen-extension-extended) _by Gibbigobo\#9750 \(aka LACola\)_

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

| String        | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------ | :-------- | :----- | :-------- | :-- | :----------- | :----------- |
| 1-Hit         | 63.92%    | 18     | 213.07%/s | 1A  | 7.62         | 1            |
| 2-Hit         | 61.2%     | 23     | 159.65%/s | 1A  | 7.35         | 1            |
| 3-Hit         | 76.16%    | 39     | 117.17%/s | 1A  | 9.15         | 1            |
| 4-Hit         | 95.47%    | 67     | 85.5%/s   | 1A  | 11.85        | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :-- | :----------- | :----------- |
| Charged Attack | 254.52%   | 113    | 135.14%/s | 1A  | 26.15        | 3            |
| N1C            | 318.44%   | 142    | 134.55%/s | -   | -            | -            |
| N2C            | 379.64%   | 161    | 141.48%/s | -   | -            | -            |
| N3C            | 455.80%   | 208    | 131.48%/s | -   | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | GU  | Poise Damage | Impulse Type |
| :-------------- | :-------- | :-- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 1A  | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 1A  | 50           | 3            |
| High Plunge DMG | 260.76%   | 1A  | 100          | 4            |

</div>

**Notes**

* Frame counts are done using M1 Spams.
* Mona's 3rd Normal Attack has 2 different animations. She will either jump backwards or forward depending on the position of her target.
* 3 hits / 2.5s ICD
* Charged Attack frame counts are done using Timed M1 Spams
* N2C and N3C frame counts are done using the same method without Jump Cancels.
* 0.5s ICD

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | DoT           | Explosion   |
| :---------------- | :------------ | :---------- |
| Skill DMG \(T9%\) | 54.4%         | 225.76%     |
| Tick Rate         | 1/s           | -           |
| Particles         | -             | 3~4 \(2:1\) |
| GU                | 1A            | 1A          |
| ICD               | 3 hits / 2.5s | None        |
| Snapshot          | Snapshot      | Snapshot    |
| Damage Element    | Hydro         | Hydro       |
| Damage Type       | Skill         | Skill       |
| Duration          | 5s            | -           |
| CD                | 12s           | -           |
| Poise Damage      | 40            | 150         |
| Impulse Type      | 2             | 3           |

</div>

**Notes**

* Mona can dash before **Mirror Reflection of Doom** finishes casting, which leads to no **Phantom** being created.
* **Mirror Reflection of Doom** (Hold) has invincibility frames that can be utilized for dodging.
* **Mirror Reflection of Doom** will cause five instances of damage. It will tick 4 times, dealing DoT damage, then explode to deal Explosion DMG.
* Applies Hydro on cast

</TabItem>

<TabItem value='alt' label='Alternative Sprint'>
<SkillIcon char={char} skill='alt' />
<div class='talent-columns'>
<Skill char={char} skill='alt'/>

| Attribute               | Values        |
| :---------------------- | :------------ |
| Activation Stamina Cost | 10            |
| Stamina Drain           | 15/s          |
| Hydro Application GU    | 1A            |
| ICD                     | 3 hits / 2.5s |
| Poise Damage            | 0             |
| Impulse Type            | 2             |

</div>

**Notes**

* **Illusory Torrent** isn't affected by stamina reduction passives from Kaeya or Razor
* **Illusory Torrent** holds priority over Mona's Skill, meaning that if you dash before Mona's Skill is finished casting, the Skill cast will be cancelled and Mona will dash instead.
* Her alternate sprint has the same iframes as other characters' normal sprint.
* Rosaria's Passive, **Night Walk**, increases Mona's sprint speed
  * the same goes for Anemo Resonance

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Bubble                                             | Omen            |
| :---------------- | :------------------------------------------------- | :-------------- |
| Skill DMG \(T9%\) | 752.08%                                            | 58% \(scaling\) |
| GU (Cast)         | 1A                                                 | 2B              |
| ICD               | 3 hits / 2.5s\*                                    | 3 hits / 2.5s\* |
| Snapshot          | Dynamic                                            | Dynamic         |
| Damage Element    | Hydro                                              | Hydro           |
| Damage Type       | Burst                                              | Burst           |
| Energy Cost       | 60                                                 | -               |
| Duration          | 8s                                                 | 4.5s            |
| CD                | 15s                                                | -               |
| Poise Damage      | Bubble Application: 50 <br/> Bubble Explosion: 200 | -               |
| Impulse Type      | 1                                                  | -               |

</div>

**Notes**

* Bubble Burst DMG is determined at the time the Bubble is actually triggered, rather than snapshotting on immediate cast.
* Bubble and Omen ICD is shared.
* **Omen** DMG Bonus is additive to the damage calculation and is classified as **DamageBonus**
  * See: [Damage Formula](../../combat-mechanics/damage/damage-formula.md#base-damage)
* **Illusory Bubble**'s duration can be extended under specific circumstances:
  * Enemies that were applied Cryo beforehand, thus got Frozen after receiving the **Illusory Bubble** status.
  * Enemies that are in a stagger-resistant state, i.e., performing an attack animation, having an Elemental shield/armor, etc.
  * Petrify can extend the duration of the aforementioned stagger-resistant state, effectively extending the duration of the **Illusory Bubble**.
* Certain Skills/Bursts cannot trigger the **Illusory Bubble** (Zhongli E, Klee Q).

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Mona.json'
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

**Notes**

* No ICD
* Damage dealt by this **Phantom** is considered Elemental Skill damage, and can thus trigger related artifact effects.

</TabItem>

<TabItem value='a4' label='Ascension 4'>
<Passive char={char} passive={1} />

**Notes**

* The Hydro DMG Bonus increase only shows when Mona is in an active party.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**  
This bonus effect is additive and classified as **ReactionBonus.** See: [Damage Formula](../../combat-mechanics/damage/damage-formula.md#amplifying-reaction-bonus)

Teammates in Co-op are not counted as "your own party members" and will not obtain the effects of **Prophecy of Submersion.**

* Vaporize DMG bonus can be snapshotted.
* Hydro Swirl and Electro-Charged DMG bonus do not snapshot and require the reaction owner to be onfield.
* **Prophecy of Submersion** does not extend Frozen.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 26.15        | 3            |

**Notes**

* This Charged Attack is not fast enough to do an automatic double Vaporize.
* No ICD

</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

**Notes**

* This bonus only applies to the target(s) affected by the Omen and does not appear in the stat page.

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

<Card item={require('../../evidence/characters/hydro/mona.md')} />
