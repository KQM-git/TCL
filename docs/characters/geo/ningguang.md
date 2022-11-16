---
description: The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.
---

import char from '@site/src/data/characters/Ningguang.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Ningguang

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Ningguang.png')} alt="Ningguang's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Ningguang Written Guide: Geo Goddess](https://keqingmains.com/ningguang/)
* [6 Minute Guide to Ningguang](https://youtu.be/aecxJRSn2d4)

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

| String        | Talent 9% | GU  | Poise Damage | Impulse Type |
| :------------ | :-------- | :-- | :----------- | :----------- |
| Normal Attack | 47.6% x 2 | 1U  | 45           | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9% | GU  | Poise Damage | Impulse Type |
| :----------------- | :-------- | :-- | :----------- | :----------- |
| Charged Attack DMG | 295.94%   | 1U  | 45           | 2            |
| Star Jade DMG      | 84.32%    | 1U  | 45           | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | GU  | Poise Damage | Impulse Type |
| :-------------- | :-------- | :-- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | -   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 1U  | 50           | 3            |
| High Plunge DMG | 260.76%   | 1U  | 100          | 4            |

</div>

**Notes**

* Normal Attacks apply Geo with a shared 3 hit / 2.5s ICD.
* Ningguang's Normal Attacks can be cancelled as soon as the **Star Jades** appear by her side by jumping or dashing.
* Charged Attacks and Star Jades apply Geo with a shared 3 hit / 2.5s ICD.
* Ningguang has two different animations when doing her Charged Attack. Her Charged Attack initiated with her right hand has higher frames.
  * This can be mitigated by holding a direction key while using Normal Attacks, releasing it when you Charged Attack, and inputting it again after casting the Charged Attack.
* Star Jades' trajectory can be manipulated with the use of directional inputs immediately after using a Charged Attack. This can potentially make Star Jades miss their target even at point-black range.
* Additional resources for her animation cancels can be found in the [Ningguang Mains discord](https://discord.gg/ENcBMd86nD).
* Star Jades are considered Charged Attacks and benefit from Charged Attack Bonuses.
* Low/High Plunge applies Geo and has no ICD.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 391.68%     |
| Particles         | 3~4 \(3:2\) |
| GU                | 1U          |
| ICD               | None        |
| Snapshot          | Snapshot    |
| Damage Element    | Geo         |
| Damage Type       | Skill       |
| CD                | 12s         |
| Poise Damage      | 133.2       |
| Impulse Type      | 5           |

</div>

**Notes**

* **Jade Screen** has a 6s cooldown on generating particles, not affected by Elemental Skill cooldown reset or reduction.
* **Jade Screen** has no ICD for the detection of aura-checks.

| Attribute | Construct (Talent 9%) |
| :-------- | :-------------------- |
| Health    | 77.7% Max HP          |
| Duration  | 30s                   |

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute           | Burst        |
| :------------------ | :----------- |
| DMG per Gem \(T9%\) | 147.83%      |
| GU                  | 1U           |
| ICD                 | 3 hit / 2.5s |
| Snapshot            | Snapshot     |
| Damage Element      | Geo          |
| Damage Type         | Burst        |
| Energy Cost         | 40           |
| CD                  | 12s          |
| Poise Damage        | 30           |
| Impulse Type        | 5            |

</div>

**Notes**

* When **Starshatter** is cast, gems from **Jade Screen** will use the stats that were snapshotted when the **Jade Screen** was initially cast.
* As long as Ningguang is within the maximum construct range from the **Jade Screen**, casting **Starshatter** will allow the **Jade Screen** to fire the additional gems, even if she teleports away.
* The gems created by a shattered **Jade Screen** suffer heavily from the autotargeting system, causing them to move in patterns that usually result to 1 - 2 gems missing their targets. These gems usually hit the ground instead.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Ningguang.json'
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
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* If Sacrificial Fragments procs on the same skill cast as **Shock Effect**, the 6 second cooldown for **Shock Effect** will still occur.
  * This can occur when **Jade Shield** is present on field and broken by casting E again.

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

<Card item={require('../../evidence/characters/geo/ningguang.md')} />
