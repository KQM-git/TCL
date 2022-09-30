---
description: The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Akademiya to be their most distinguished graduate in the past two centuries.
---

import char from '@site/src/data/characters/Lisa.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Lisa

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Lisa.png')} />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Lisa Mains Discord](https://discord.gg/5SYy4MPPCt)
* [Full Lisa Written Guide](https://keqingmains.com/lisa/)

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
| 1-Hit         | 67.32%    | 25     | 161.57%/s | 1A  | 6.75         | 1            |
| 2-Hit         | 61.06%    | 46     | 167.45%/s | 1A  | 6            | 1            |
| 3-Hit         | 72.76%    | 70     | 172.41%/s | 1A  | 7.35         | 1            |
| 4-Hit         | 93.43%    | 114    | 155.04%/s | 1A  | 8.7          | 1            |
| With Recovery | 294.57%   | 143    | 123.6%/s  | 1A  | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | GU  | ICD  | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :-- | :--- | :----------- | :----------- |
| Charged Attack | 301.1%    | 95     | 190.17%/s | 1A  | 0.5s | 15           | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 3            |
| High Plunge DMG | 260.76%   | 100          | 4            |

</div>

**Notes**

* Lisa's 3rd Normal Attack recovery has 2 different animations. She will either teleport backwards or forward depending on the position of her target.
* 3 hits / 2.5s ICD, shared with tap elemental skill.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Tap                                    | Hold \(0 / 1 / 2 / 3 stacks\)                |
| :---------------- | :------------------------------------- | :------------------------------------------- |
| Skill DMG \(T9%\) | 136%                                   | 544% / 625.6% / 720.8% / 828.24%             |
| Frames            | 21                                     | 116                                          |
| MV/s \(T9%\)      | 388.57%/s                              | 281.38%/s / 323.59%/s / 372.83%/s / 428.4%/s |
| GU                | 1A                                     | 2B                                           |
| ICD               | 3 hits / 2.5s <br/> \(Shared with NA\) | None                                         |
| Particles         | -                                      | 5 \(-\)                                      |
| Damage Element    | Electro                                | Electro                                      |
| Damage Type       | Skill                                  | Skill                                        |
| CD                | 1s                                     | 16s                                          |
| Poise Damage      | 18                                     | 150 / 195 / 240 / 300                        |
| Impulse Type      | 2                                      | 2 / 2 / 2 / 2                                |

</div>

**Notes**

* The **Lightning Orb** bounces to nearby targets with the small AoE spreading **Conductive** stacks each bounce
  * This means in tight enough groups, it can apply all 3 stacks in a single Press E.
  * **Conductive** stacks last 15s with independent timers. Beyond 3 **Conductive** stacks, additional applications will refresh the stack(s) with the least remaining duration.
  * As **Conductive** stacks are an enemy attribute, multiple players using Lisa in co-op share **Conductive** stacks consumption and stacking.
* The hitbox of Lisa's Hold E is a cylinder with the following dimensions/attributes:
  * Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage.
  * Its Height/Depth is either unlimited or absurdly large. This is difficult to properly quantize.
  * Its hitbox can clip through the terrain, allowing it to connect with enemies that are out of Lisa's direct Line of Sight.
* Lisa can Utilize Pyro/Cryo with her Press E variant of **Violet Arc** to Stack **Conductive** Stacks
  * When an opponent affected by Pyro or Cryo is struck, the mob directly hit will immediately gain 2 **Conductive** Stacks, and others in the resulting Overload or Superconduct radius will gain 1 **Conductive** Stack
  * If Violet Arc connects and causes Overload or Superconduct while in a Pyro or Cryo-environment \(the most common ones being Burning Grass and Frozen Water\), the direct hit mob will obtain 3 **Conductive** stacks and will radiate 2 stacks to nearby opponents.
  * If 2 opponents are nearby and only one is afflicted with a status, if the afflicted mob is hit, both enemies will gain 3 stacks of **Conductive**

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute             | Burst                        |
| :-------------------- | :--------------------------- |
| Summon DMG            | 10%                          |
| Discharge DMG \(T9%\) | 62.15% \* 29                 |
| Tick Rate             | 0.5s                         |
| Cast Frames           | 57                           |
| Energy Frame          | 64                           |
| CD Frame              | 55                           |
| MV/s                  | 102.4%/s                     |
| GU                    | 1A                           |
| ICD                   | 3 hits / 2.5s                |
| Damage Element        | Electro                      |
| Damage Type           | Burst                        |
| Energy Cost           | 80                           |
| Duration              | 15s                          |
| CD                    | 20s                          |
| Poise Damage          | 10                           |
| Impulse Type          | Summon: 4 <br/> Discharge: 2 |

</div>

**Notes**

* **Lightning Rose** has an unlisted instance of damage on initial summon
  * Summon damage is 10% at all talent levels.
  * Summon damage does not apply an Electro Aura.
  * Summon damage does not apply the DEF shred from **Static Electricity Field** \(A4\).
* Enemy targeting seems fully randomized between all opponents in-range.
* Discharges from **Lightning Rose** have a small AoE on impact. In tight enemy groups, a lightning bolt can deal damage to multiple enemies at once.
* The hitbox of Lisa's Lightning Rose is a cylinder with the following dimensions/attributes:
  * Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage. Misleadingly, the actual area is not the flowered decal, but the soft tinted circle of purple.
  * Its Height/Depth is either unlimited or absurdly large. This is difficult to properly quantize.
  * Its hitbox can clip through terrain (allowing it to connect with enemies that are out of Lisa's direct Line of Sight); see Azhdaha.
* Surrounding opponents are only launched if made airborne while their poise is broken. Poise-broken grounded enemies are frequently staggered instead.
* The initial Summon DMG dealt by **Lightning Rose** is dealt once within a specific area.
  * This area is a flat circular plane which shares the radius of **Lightning Rose** (7m).
  * The Summon DMG cannot deal damage to enemies whose hurtboxes are below or above near the suspended plane of which **Lightning Rose** was casted on.
* More than one **Lightning Roses** can co-exist with sufficient cooldown reduction.

</TabItem>
</Tabs>

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* This only applies to the Hold E variant.
* This summons a single special particle that only provides energy if Lisa is on field.

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

* The description is misleading. **Plasma Eruption** changes the number of lightning bolts to 1-3, not 2-4 as implied by the wording.
  * For more details, see the [full entry](../../evidence/characters/electro/lisa.md#c4-description-and-actual-effects-are-miscommunicated) in Lisa's Evidence Vault.
* In tight enemy groups, **Plasma Eruption** can quadratically increase the damage of **Lightning Rose** due to the AoE of each lightning bolt released.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* The pulse visual effect and cooldown are not initiated when not in combat, but will still apply **Conductive** stacks nearby.
* The radius of this effect is 5m and its height is seemingly infinite, regardless of whether or not Lisa is in combat.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/lisa.md')} />
