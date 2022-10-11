---
description: The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.
---

import char from '@site/src/data/characters/Keqing.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Keqing

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Keqing.png')} alt="Keqing's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Keqing Mains Discord](https://discord.gg/Keqing)
* [Full Keqing Written Guide](https://keqingmains.com/keqing/)
* [8 Minute Quick Guide to Keqing](https://youtu.be/A9_k6p52N1o)

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

| String | Talent 9%      | Frames  | MV/s      | Poise Damage | Impulse Type |
| :----- | :------------- | :------ | :-------- | :----------- | :----------- |
| 1-Hit  | 75.37%         | 11      | 411.11%/s | 38.7         | 3            |
| 2-Hit  | 75.37%         | 33      | 274.08%/s | 38.7         | 3            |
| 3-Hit  | 100.01%        | 60      | 250.75%/s | 51.3         | 3            |
| 4-Hit  | 57.83% + 63.2% | 87 / 97 | 229.97%/s | 31.05 x2     | 3 x2         |
| 5-Hit  | 123.08%        | 133     | 223.25%/s | 64.8         | 7            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />
<div>

| String         | Talent 9%      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----------- | :----------- |
| Charged Attack | 141.09% + 158% | 47.3 x2      | 2 + 6        |

| String | Frames | MV/s (Talent 9%) |
| :----- | :----- | :--------------- |
| N1C    | 63     | 356.63%/s        |
| N4C    | 150    | 268.35%/s        |

</div>

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* Keqing's N1C is her highest damage combo but is stamina hungry.
  * N4C is a comparable damage combo that is less stamina intensive.
* Keqing's N4 does not give iframe.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                       | Lightning Stiletto                                | Thunderclap Slash |
| :------------------------------ | :------------------------------------------------ | :---------------- |
| Lightning Stiletto \(T9%\)      | 85.68%                                            | -                 |
| Stiletto Mark Secondary \(T9%\) | 285.6%                                            | 142.8% x 2        |
| Particles                       | 2~3 \(1:1\)                                       | -                 |
| Frames                          | 34                                                | -                 |
| Frames Secondary                | 84                                                | 90                |
| GU                              | 2B                                                | -                 |
| ICD                             | None                                              | -                 |
| ICD Secondary                   | 3 hit / 2.5s                                      | -                 |
| Snapshot                        | Snapshot                                          | -                 |
| Damage Element                  | Electro                                           | -                 |
| Damage Type                     | Skill                                             | -                 |
| CD                              | 7.5s                                              | -                 |
| Poise Damage                    | Lightning Stiletto: 50 <br/> Slashing: 100        | 50 x2             |
| Impulse Type                    | Lightning Stiletto: 3 <br/> Slashing: Air, 0, 600 | 2 x2              |

</div>

**Notes**

* When blinking to a **Stiletto Mark** that was thrown from a Holding cast, Keqing can move across obstructions and glide or initiate a plunge attack.
* Keqing's second **Stellar Restoration** cast is buffered during her dash.
* Keqing can gain 2 stacks of 4pc Pale Flame in one cast of **Stellar Restoration** by dropping a **Stilleto Mark** on a enemy and performing a charge attack.
* It is possible for Keqing to perform a Dragonstrike from the second cast of her E, **Stellar Restoration**.
* Aiming and releasing **Lightning Stiletto** too fast can ignore your targeting and transform it into a **Press** effect instead.
* **Stellar Restoration** has different snapshot mechanics based on usage.
* It is possible for the Electro infusion to expire while Plunging, resulting in a Physical Plunge Attack despite showing Electro visuals on the way down.
* It is possible to send the **Stiletto Mark** in another direction by rapidly spinning the camera after aiming and releasing E.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                     | Burst                                                                                        |
| :---------------------------- | :------------------------------------------------------------------------------------------- |
| Cast DMG \(T9%\)              | 149.6%                                                                                       |
| Consecutive Slash DMG \(T9%\) | 40.8% x 8                                                                                    |
| Last Attack DMG \(T9%\)       | 320.96%                                                                                      |
| Cast Frames                   | 125                                                                                          |
| Energy Frame                  | 60                                                                                           |
| CD Frame                      | 54                                                                                           |
| GU                            | 1U                                                                                           |
| ICD                           | 3 hit / 2.5s                                                                                 |
| Snapshot                      | Dynamic                                                                                      |
| Damage Element                | Electro                                                                                      |
| Damage Type                   | Burst                                                                                        |
| Energy Cost                   | 40                                                                                           |
| CD                            | 12s                                                                                          |
| Poise Damage                  | Cast: 100 <br/> Consecutive Slashes: 25 <br/> Final hit: 200                                 |
| Impulse Type                  | Cast: 1 <br/> 1st, 3rd, 6th, 8th hits: 3 <br/> 2nd, 4th, 5th, 7th hits: 1 <br/> Final hit: 7 |

</div>

**Notes**

* Keqing exits her **Starward Sword** before the last slash and can swap or attack.
* It is possible to interrupt **Starward Sword** before the Burst can actually go through.
  * Doing so can still trigger the Burst's effects, such as her Ascension 4 Passive that gives Crit Rate and ER.
  * Burst cancelling like this does not actually use up her Energy, or put the Burst on cooldown, nor does it deal damage.
  * However, it can potentially lock Keqing in place momentarily, where attempted movement can result in rapid spinning.
* Keqing's Burst has 222 [idle i-frames](../../combat-mechanics/frames.md#burst-idle-iframes) \(3.7s\).

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

| Type             | GU  |
| :--------------- | :-- |
| Electro Infusion | 1A  |

**Notes**

* Keqing's **Electro Infusion** can be overwritten other infusion effects \(Chongyun **Chonghua Field** and Bennett **Inspiration Field** C6\).

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* Keqing receives these buffs the moment she casts **Starward Sword**.
  * The timer for the duration of these buffs also begins on **Starward Sword** cast.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

| Attribute        | Skill                                   |
| :--------------- | :-------------------------------------- |
| Thundering Might | 50%                                     |
| GU               | 1A                                      |
| ICD              | Shared with Lightning Stiletto (recast) |
| Damage Type      | -                                       |
| Poise Damage     | 50                                      |
| Impulse Type     | 1                                       |

**Notes**

* An enemy can be hit twice by the **Thundering Might** AoE if **Stellar Restoration** is recast at point blank range. However, it can be inconsistent on smaller enemies since the AoE is small.
* C1's Damage instance has no ability type scaling tags.
* **Thundering Might** procs before the second part of **Stellar Restoration**. Example: **E1** - **C1 Start** - **C1 Terminus** - **E2**.
* The ICD of C1 is shared with the second part of **Stellar Restoration**.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 50           | 1            |

**Notes**

* The proc rate of **Keen Extraction** is inconsistent, and does not work as stated.
  * For more details, see the [full entry](../../evidence/characters/electro/keqing.md#keqing-c2-procs-inconsistently) in Keqing's Evidence Vault.

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

<Card item={require('../../evidence/characters/electro/keqing.md')} />
