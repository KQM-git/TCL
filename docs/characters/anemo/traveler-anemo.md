---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Anemo).json'
import lumine from '@site/src/data/characters/Lumine_(Anemo).json'
import { getSkillName } from '@site/src/utils/skill'

# Traveler (Anemo)

![](/assets/anemo-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Anemo Traveler Guide](https://keqingmains.com/anemo-traveler/)
* [5 Minute Guide to Anemo Traveler](https://youtu.be/H4Y6y7JJsvM)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Lumine Normal Attacks'>
<h3>{getSkillName(lumine, 'na')}</h3>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit | 81.69% | 14 | 350.1%/s | 40.5 | 3 |
| 2-Hit | 79.79% | 43 | 225.32%/s | 39.6 | 3 |
| 3-Hit | 97.33% | 80 | 194.11%/s | 48.6 | 3 |
| 4-Hit | 107.12% | 116 | 189.27%/s | 54.0 | 3 |
| 5-hit | 130.03% | 148 | 201.06%/s | 64.8 | 6 |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack | 102.7%+132.72% | - | - | 50.6 x2 | 2 + 6 |
| N1C | 317.11% | 62 | 306.89%/s | - | - |
| N2C | 396.90% | 84 | 283.5%/s | - | - |
| N3C | 494.23% | 115 | 260.12%/s | - | - |
| N4C | 601.35% | 160 | 225.51%/s | - | - |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Plunging Attack' />

| Type | Talent 9% | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- |
| Plunge DMG | 117.46% | 25 | 2 |
| Low Plunge DMG | 234.86% | 100 | 4 |
| High Plunge DMG | 293.36% | 150 | 7 |

</div>

**Notes**
* Lumine is the female traveler.

</TabItem>

<TabItem value='na-aether' label='Aether Normal Attacks'>
<h3>{getSkillName(char, 'na')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit | 81.69% | 13 | 377.03%/s | 41.4 | 3 |
| 2-Hit | 79.79% | 38 | 254.97%/s | 43.2 | 3 |
| 3-Hit | 97.33% | 71 | 218.71%/s | 53.1 | 3 |
| 4-Hit | 107.12% | 123 | 178.5%/s | 57.6 | 3 |
| 5-hit | 130.03% | 163 | 182.56%/s | 70.2 | 6 |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack | 102.7%+111.55% | - | - | 50.6 x2 | 2 + 6 |
| N1C | 295.94% | 54 | 328.82%/s | - | - |
| N2C | 297.26% | 90 | 250.49%/s | - | - |
| N3C | 374.26% | 115 | 246.81%/s | - | - |
| N4C | 459.01% | 160 | 217.57%/s | - | - |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type | Talent 9% | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- |
| Plunge DMG | 117.46% | 25 | 2 |
| Low Plunge DMG | 234.86% | 100 | 4 |
| High Plunge DMG | 293.36% | 150 | 7 |

</div>

**Notes**
* Aether is the male traveler.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute | Tap | Hold | Additional Elemental DMG |
| :--- | :--- | :--- | :--- |
| Cutting DMG \(T9%\) | - | 20.4% x 2 + 28.56% x 4 | 5.1% x 1 + 7.14% x 4 |
| Initial/Max Storm DMG \(T9%\) | 299.2% | 299.2% / 326.4% | 74.80% / 81.60% |
| Particles | 2 | 2 / 3~4 (2:1) | - |
| Frames | 60 | 60~145 | - |
| GU | 1U | 1U | 1A |
| ICD | 3 hit / 2.5s | 3 hit / 2.5s | 3 hit / 2.5s |
| Snapshot | - | Dynamic | Dynamic |
| Damage Element | Anemo | Anemo | Absorbed Element |
| Damage Type | Skill | Skill | Skill |
| CD | 5s | 5s / 8s | - |
| Initial Cutting Poise Damage | - | 10 x2 + 10 x4 | - |
| Max Cutting Poise Damage | - | 2 x2 + 2 x4 | - |
| Storm Poise Damage | 200 | 200 | - |
| Storm Impulse Type | 5 | 6 | - |

</div>

**Notes**
* Absorption priority: Cryo > Pyro > Hydro > Electro
* When held beyond the 2 Initial Cutting DMG hits, the Skill's damage, particle generation, and cooldown are all increased; and the last hit is Max Storm DMG instead of Initial Storm DMG.
* There is either 0 or 1 instance of Additional Elemental DMG with the 2 instances of Initial Cutting DMG, it's random.
* The duration of Palm Vortex can be extended when Anemo Traveler is frozen, resulting in many instances of Initial Cutting DMG.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute | Tornado | Additional Elemental DMG |
| :--- | :--- | :--- |
| Tornado DMG \(T9%\) | 137.36% * 9 | 42.16% * 9 |
| Tick Rate | 0.5s | 0.5s | 
| Cast Frames | 41 | - |
| Energy Frame | 8 | - |
| CD Frame | 2 | - |
| GU | 1U | 2B | 
| ICD | 3 hit / 2.5s | 3 hit / 2.5s |
| Snapshot | Snapshot | Snapshot |
| Damage Element | Anemo | Absorbed Element |
| Damage Type | Burst | Burst |
| Energy Cost | 60 | - |
| Duration | 6s | - |
| Cooldown | 15s | - |
| Poise Damage | 13 | 3 |
| Impulse Type | 0 | 0 |

</div>

**Notes**
* Absorption priority: Cryo > Pyro > Hydro > Electro.
* Deals Anemo DMG 9 times at 0.5 second intervals.
* The Additional Elemental DMG has less AoE than the Tornado DMG. 

</TabItem>
</Tabs>

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**
* Applies 1U Anemo, does 36 Poise Damage, and has Impulse Type 2.
* This damage bonus is also considered Normal Attack Damage that also deals Elemental DMG.
* This allows Anemo Traveler to activate 3 stacks of Mistsplitter Reforged without requiring infusion.
* This instance of damage happens before N5 for Aether and after N5 for Lumine.

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

**Notes**
* This effect lasts 10 seconds.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/traveler-anemo.md')} />

