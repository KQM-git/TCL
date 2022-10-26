---
description: An alchemist filled with curiosity about all things. She researches bio-alchemy.
---

import char from '@site/src/data/characters/Sucrose.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Sucrose

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Sucrose.png')} alt="Sucrose's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Sucrose Mains Discord](https://discord.gg/SRgmCt4)
* [Full Sucrose Written Guide](https://keqingmains.com/sucrose/)
* [8 Minute Quick Guide to Sucrose](https://youtu.be/paUqUTmcf-Y)

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

| String   | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit    | 56.89%    | 17     | 200.79%/s | 5.5 x2       | 1 x2         |
| 2-Hit    | 52.05%    | 26     | 120.12%/s | 7.7          | 1            |
| 3-Hit    | 65.36%    | 33     | 118.84%/s | 8.75         | 1            |
| 4-Hit    | 81.46%    | 51     | 95.84%/s  | 16.9         | 1            |
| GU       | 1GU       | -      | -         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :-- | :----------- | :----------- |
| Charged Attack | 204.27%   | 69     | 177.63%/s | 1GU | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9 DMG% | GU  | Poise Damage | Impulse Type |
| :-------------- | :------------ | :-- | :----------- | :----------- |
| Plunge DMG      | 104.41%       | 1GU | 5            | 2            |
| Low Plunge DMG  | 208.77%       | 1GU | 50           | 3            |
| High Plunge DMG | 260.76%       | 1GU | 100          | 4            |

</div>

**Notes**

* N1 is bugged and sometimes will not exist, but there are ways to work around it. See this [Vault Entry](../../evidence/characters/anemo/sucrose.md#sucrose-n1-bug-misconceptions-and-workarounds) for more details.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill   |
| :---------------- | :------ |
| Skill DMG \(T9%\) | 359.04% |
| Particles         | 4 \(-\) |
| GU                | 1U      |
| ICD               | None    |
| DMG Element       | Anemo   |
| DMG Type          | Skill   |
| CD                | 15s     |
| Poise Damage      | 150     |
| Impulse Type      | 7       |

</div>

**Notes**

* When cancelled by a dash, the particles created by this skill are spawned on the direction where Sucrose is facing.
* If you dash cancel Sucrose's Skill and switch characters too fast, no particles will be generated.
* Freeze and Petrify will allow Sucrose to group enemies together without launching them into the air.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | DoT      | Additional Elemental DMG |
| :---------------- | :------- | :----------------------- |
| Skill DMG \(T9%\) | 251.6%   | 74.8%                    |
| GU                | 1U       | 1A                       |
| ICD               | None     | None                     |
| Snapshot?         | Snapshot | Snapshot                 |
| DMG Element       | Anemo    | Absorbed Element         |
| DMG Type          | Burst    | Burst                    |
| Energy Cost       | 80       | -                        |
| Duration          | 6s       | -                        |
| Cooldown          | 20s      | -                        |
| Poise Damage      | 150      |
| Impulse Type      | 7        |

</div>

**Notes**

* Absorption priority: Pyro > Hydro > Electro > Cryo
* Absorption Damage is simultaneous
* Freeze and Petrify will allow Sucrose to group enemies together without launching them into the air.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Sucrose.json'
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

* This effect can be triggered even when Sucrose is not on the field.
* This effect cannot be triggered by swirling off Guoba or environmental objects such as cooking pots.
* This effect can be triggered by chain reaction Swirls.
* Swirls caused by the absorbed element in **Forbidden Creation-Isomer 75/Type II** can trigger this effect.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* A4 snapshots Sucrose's **Elemental Mastery**.
* A4 also always activates _after_ **Instructor** 4pc set bonus within the same proc.
* A4 effect can be triggered even when Sucrose is not on the field.
* A4 effect is dynamic in multiswirl situations.
* A4 shares 20% of Kazuha's C2 EM.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* If you cancel by a dash then use the skill again too quick, it won't produce extra particles.

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

* This counter starts even when E isn't on CD
  * Swapping characters and/or death do not reset the counter
  * This counter lasts for over 30s, the exact time cap is still unknown
* The cooldown reduction hard caps at each charge's cooldown.
  * If you get a higher reduction than the current E charge CD, it will reset, and not carry over to potentially 2nd charge's cooldown

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* This buff lasts for 10 seconds.
* C6 effect can be triggered even when Sucrose is not on the field.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/sucrose.md')} />
