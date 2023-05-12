---
description: A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.
---

import char from '@site/src/data/characters/Rosaria.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Rosaria

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Rosaria.png')} alt="Rosaria's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Full Written Rosaria Guide](https://keqingmains.com/rosaria/)
* [7 Minute Video Guide to Rosaria](https://youtu.be/JQ01_OKxdbs)

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

| String | Talent 9%    | Frames    | MV/s      | Poise Damage | Impulse Type |
| :----- | :----------- | :-------- | :-------- | :----------- | :----------- |
| 1-Hit  | 96.38%       | 27        | 214.18%/s | 48.8         | 3            |
| 2-Hit  | 94.8%        | 31        | 183.48%/s | 48           | 3            |
| 3-Hit  | 58.46% x 2   | 37        | 189.60%/s | 29.6 x2      | 3 x2         |
| 4-Hit  | 127.98%      | 54        | 142.20%/s | 64.8         | 4            |
| 5-Hit  | 76.47% + 79% | 77        | 121.15%/s | 39.36 x2     | 3 + 6        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 251.22%   | 73     | 206.48%/s | 120          | 5            |
| N1C            | 347.60%   | 104    | 200.54%/s | -            | -            |

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

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Type              | Skill                 |
| :---------------- | :-------------------- |
| Skill DMG \(T9%\) | 99.28% + 231.2%       |
| Particles         | 3                     |
| GU                | 1U                    |
| ICD               | None                  |
| Snapshot          | Snapshot              |
| Damage Element    | Cryo                  |
| Damage Type       | Skill                 |
| CD                | 6s                    |
| Poise Damage      | 50 + 100              |
| Impulse Type      | 3 + \(Air, 260, 600\) |

</div>

**Notes**

* Will only grant one stack of the Pale Flame artifact 4-Piece bonus per cast.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect                 | Burst           |
| :--------------------- | :-------------- |
| Skill DMG \(T9%\)      | 176.8% + 258.4% |
| Ice Lance DoT \(T9%\)  | 224.4%          |
| GU                     | 1U              |
| ICD                    | None            |
| Snapshot               | Snapshot        |
| Damage Element         | Cryo            |
| Damage Type            | Burst           |
| Energy Cost            | 60              |
| Duration               | 8s              |
| Tick Rate              | 2s              |
| Cooldown               | 15s             |
| Cast Poise Damage      | 100             |
| Cast Impulse Type      | Air, 260, 650   |
| Ice Lance Poise Damage | 50              |
| Ice Lance Impulse Type | 2               |

</div>
</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Rosaria.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />

**Notes**

* The passive does not work in the Serenitea Pot.

</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* Either damage instance of **Ravaging Confession** can trigger this passive.
* This CRIT Rate increase shows up in her stat screen, meaning it can be snapshotted by her A4, **Shadow Samaritan**, and included in the CRIT RATE sharing.
* Rosaria doesn't gain the CRIT Rate bonus unless the use of **Ravaging Confession** lands her behind the enemy.
  * If Rosaria starts her Skill behind an enemy, but that enemy turns around to face her before the two hits, she won't get the CRIT Rate bonus.
  * For enemies who don’t have visual distinction between front and behind, Rosaria can still activate her A1 by hitting them from certain angles.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* The CRIT Rate shared by **Shadow Samaritan** can be stacked with external CRIT buffs that show up in a character's stat sheet
  * For example, the CRIT Rate shared by **Shadow Samaritan** stacks with both Hu Tao's A1 talent and Geo MC C1.  
* This buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Can trigger against shielded enemies

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

* This effect can also be triggered by the lance DoT.
* This effect persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/rosaria.md')} />
