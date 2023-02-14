---
description: A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.
---

import char from '@site/src/data/characters/Diona.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Diona

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Diona.png')} alt="Diona's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Diona Guide](https://keqingmains.com/diona/)
* [4 Minute Video Guide to Diona](https://youtu.be/IWoSkeAFY4o)
* [Icy Paws Deep Dive](https://docs.google.com/document/d/1GZrscI-X_-CgzavXUbCeELrSumbAqlLqVkkJN1vWKwk/edit?usp=sharing)
* [Icy Paws Sacrificial Bow vs Favonius Bow - Energy Gen & Field Time Efficiency](https://docs.google.com/spreadsheets/d/1rMyjElZHS0PDU4uyJ55bKGsmUVW82ga4xPcDUJSE760/edit#gid=1389539947)

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
| 1-hit  | 66.36%    | 30     | 132.72%/s | 12.6         | 1            |
| 2-Hit  | 61.62%    | 21     | 176.06%/s | 11.7         | 1            |
| 3-Hit  | 83.74%    | 44     | 114.19%/s | 15.9         | 1            |
| 4-Hit  | 79%       | 21     | 225.71%/s | 15           | 1            |
| 5-Hit  | 98.75%    | 73     | 81.16%/s  | 18.75        | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type             | Talent 9% | Frames | MV/s      | GU  | Poise Damage              | Impulse Type              |
| :--------------- | :-------- | :----- | :-------- | :-- | :------------------------ | :------------------------ |
| Aimed Shot       | 80.58%    | 23     | 210.21%/s | -   | 10 \(Headshot: 30\)       | 2                         |
| Fully Charged    | 210.8%    | 94     | 134.55%/s | 1U  | 20 \(Headshot: 60\)       | 5                         |
| C4 Fully Charged | 210.8%    | 58     | 218.07%/s | 1U  | <!--- not on the sheet--> | <!--- not on the sheet--> |

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
* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Diona's Fully Charged shots follow a 3 hit/2.5s ICD.
* Diona can cancel her dash early with Aim Toggle. Thus allows her to do quick Charged Attack while still retaining the ability to aim, unlike ARCC which cannot be aimed.
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Tap                       | Hold                      |
| :---------------- | :------------------------ | :------------------------ |
| Skill DMG \(T9%\) | 71.26% x 2                | 71.26% x 5                |
| Particles         | 0~1 \(1:4\) check per paw | 0~1 \(1:4\) check per paw |
| GU                | 1U                        | 1U x 2                    |
| ICD               | Standard                  | Standard                  |
| Snapshot          | Snapshot                  | Snapshot                  |
| Damage Element    | Cryo                      | Cryo                      |
| Damage Type       | Skill                     | Skill                     |
| CD                | 6s                        | 15s                       |
| Poise Damage      | 30                        | 30                        |
| Impulse Type      | 2                         | 2                         |

</div>

| Attribute      | Shield               |
| :------------- | :------------------- |
| Base Scaling   | 12.24% Max HP + 1409 |
| Elemental Type | Cryo                 |
| Duration       | 2.4s per paw         |

**Notes**

* Applies a 1U Cryo Aura for a short duration upon formation and upon swap to a different active character.
* In specific circumstances, Diona's shield will apply 2U of Cryo on swap.
  * For more details see the [full entry](../../evidence/characters/cryo/diona.md#bug-dionas-shield-is-2u-under-specific-circumstances-that-are-guaranteed-on-swap) in Diona's Evidence Vault.
* Icy Paws will not generate a shield if they do not hit something. They will also despawn after a certain amount of time.
* Icy Paws will home on some entities that are not enemies, such as birds in the overworld.
* Icy Paws appear behind Diona and then move forward during hold E, causing it to hit walls when being used in front of a wall.
* A deep-dive into how Icy paws work can be found [here](https://docs.google.com/document/d/1GZrscI-X_-CgzavXUbCeELrSumbAqlLqVkkJN1vWKwk/edit?usp=sharing)

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst |
| :---------------- | :---- |
| Skill DMG \(T9%\) | 136%  |
| GU                | 1U    |
| CD                | 20s   |
| Energy Cost       | 80    |
| Poise Damage      | 50    |
| Impulse Type      | 2     |

</div>

| Attribute        | Field               |
| :--------------- | :------------------ |
| Field DMG (T9%)  | 89.49%              |
| GU               | 1U                  |
| ICD              | Standard            |
| HP Regen         | 9.07% Max HP + 1044 |
| Duration         | 12s                 |
| Tick Rate        | 2s                  |
| C6 Buff Duration | 2s                  |
| Poise Damage     | 50                  |
| Impulse Type     | 1                   |

**Notes**

* C6 buff applies on swap.
* Her field shares an ICD with the initial hit.
* **Drunken Mist** AoE has a finite vertical range. Characters above or below this vertical range will not receive healing.
* **Drunken Mist** targets an enemy and snapshots the position on cast.
* **Drunken Mist** duration starts when the paws disappear from the field, which is about when the Burst CD reaches ~17.5s.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Diona.json'
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

* Ths can stack with other forms of stamina reduction as long as they are not the exact same.

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

* There is no range limit as long as Diona is on the same map.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* This DMG increase is **Additive**.

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

* The Elemental Mastery bonus will apply immediately on swap and linger for 2 seconds.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/diona.md')} />
