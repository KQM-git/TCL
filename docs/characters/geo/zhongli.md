---
description: A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.
---

import char from '@site/src/data/characters/Zhongli.json'
import { getSkillName } from '@site/src/utils/skill'

# Zhongli

![](/assets/characters/gacha/Zhongli.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Zhongli Written Guide](https://keqingmains.com/zhong-li/)
* [Zhongli Mains Discord](https://discord.gg/3h5uepPXKr)

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

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit | 56.53% | 8 | 423.98%/s | 33.76 | 3 / 4\* |
| 2-Hit | 57.23% | 29 | 235.37%/s | 34.32 | 3 |
| 3-Hit | 70.87% | 45 | 246.17%/s | 42 | 3 |
| 4-Hit | 78.89% | 71 | 222.69%/s | 45.92 | 4 |
| 5-Hit | 19.75% x 4 \(79%\) | 91 + 97 + 103 + 109 | 188.54%/s | 11.52 x4 | 2 x4 |
| 6-Hit | 100.12% | 153 | 173.58%/s | 61.52 | 6 |
| Recovery | - | 200 | 132.79%/s | - | - |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack | 203.98% | - | - | 103.28 | Air, 0, 450 |
| N1C | 260.51% | - | - | - | - |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type | Talent 9% | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- |
| Plunge DMG | 117.46% | 25 | 2 |
| Low Plunge DMG | 234.86% | 100 | 4 |
| High Plunge DMG | 293.36% | 150 | 7 |

</div>

\* If the target is more than 2 meters away.

**Notes**
* Zhongli's string has no hit lag on the spear kick \(N5\).
* Zhongli's attack string does not always interact with C6 Fischl on his first attack.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<div>
<Skill char={char} skill='e' sectionFilter='' />
<Skill char={char} skill='e' sectionFilter='Press' />
<Skill char={char} skill='e' sectionFilter='Hold' />
</div>

| Attribute | Stone Stele | Resonance DMG | Hold DMG |
| :--- | :--- | :--- | :--- |
| Skill DMG \(T9%\) | 27.2% | 54.4% | 136% |
| Particles | - | 0~1 \(1:1\) | - |
| Frames | 39 | - | 97 |
| GU | 2U | 1U | 1U |
| ICD | 3 hits / 2.5s | 3 hits / 2.5s | 3 hits / 2.5s
| Snapshot | Snapshot | Snapshot | Snapshot |
| Damage Element | Geo | Geo | Geo |
| Damage Type | Skill | Skill | Skill |
| Duration | 30s | - | 20s |
| CD | 4s | - | 12s |
| Poise Damage | 200 | 0 | 142.9 |
| Impulse Type | 4 | 1 | 4 |

</div>
<div class='talent-columns'>
<Skill char={char} skill='e' sectionFilter='Jade Shield' />

| Attribute | Shield |
| :--- | :--- |
| Base Absorption \(T9%\)| 2506 |
| Additional Absorption \(T9%\) | 21.76% Max HP |
| Element | Geo |
| Duration | 20s |

</div>

**Notes**
* Hits that resonate from other Geo constructs still proc the 4-piece Tenacity of the Millileth set.
* **Stone Steles** are considered a Geo construct that can be used to block attacks, or climb. 
* Resonation can overlap to deal multiple instances of damage.
* **Stone Steles** resonate independently and with Geo Constructs from enemies, but they do not resonate with each other.
* The range for the resistance shred is ~3 Abyss tiles.
* At C0, Hold E does not re-snapshot an existing pillar; at C1 each Stone Stele snapshots on cast, meaning it's possible to have 1 unbuffed **Stone Stele** and 1 buffed **Stone Stele** at the same time.
* 4TotM does not increase the damage of the **Stone Stele** that procs the effect, because **Stone Stele** Snapshots. 
* **Stone Stele** will not be placed and will be destroyed instead when Zhongli is standing on a high platform.
* The Resistance shred lingers for a bit after it breaks/ends.  

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute | Burst  |
| :--- | :--- |
| Skill DMG \(T9%\) | 834.68% |
| Petrification Duration | 3.9s |
| Cast Frames | 140 |
| Energy Frame | 6 |
| CD Frame | 2 |
| GU | 4U |
| ICD | 3 hits / 2.5s |
| Snapshot | Dynamic |
| Damage Element | Geo |
| Damage Type | Burst |
| Energy Cost | 40 |
| CD | 12s |
| Poise Damage | Cast: 400 <br/> Burst: 500 |
| Impulse Type | Cast: Heavy, 1200, 0 <br/> Burst: 2 |

</div>

**Notes**
* **Planet Befall**'s ICD is shared with **Stone Stele**'s damage.

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
* This Shield Strength increase occurs after damage is calculated.
* There is no observable ICD on obtaining Shield Strength stacks.
* Persists upon swap but not upon refresh.

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
* Steles resonate independently and do not resonate with each other

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**
* The shield is visually granted after the burst, but all shield bonuses are active for the burst damage.

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

<Card item={require('../../evidence/characters/geo/zhongli.md')} />

