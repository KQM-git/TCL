---
description: A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.
---

import char from '@site/src/data/characters/Chongyun.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Chongyun

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Chongyun.png')} alt="Chongyun's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Chongyun Mains Discord](https://discord.gg/FT4ZFmgf8T)
* [Swordfall: A Chongyun Guide](https://keqingmains.com/chongyun/)

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
| 1-Hit  | 128.61%   | 40     | 192.92%/s | 105          | 3            |
| 2-Hit  | 115.97%   | 46     | 151.27%/s | 95           | 3            |
| 3-Hit  | 147.57%   | 69     | 128.32%/s | 121          | 3            |
| 4-Hit  | 185.97%   | 113    | 98.75%/s  | 152          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type         | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG | 103.41%   | ?      | ?         | 60           | 3            |
| Final DMG    | 186.99%   | ?      | ?         | 120          | 6            |
| Stamina Cost | 40/s      | -      | -         | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Normal and Charged Attacks share standard ICD.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 292.47%     |
| MV/s \(T9%\)      | 307.86%/s   |
| Cast GU           | 2U          |
| Infused Attack GU | 1U          |
| Particles         | 4 \(-\)     |
| ICD               | None        |
| Snapshot          | Snapshot    |
| Damage Element    | Cryo        |
| Damage Type       | Skill       |
| Infusion Duration | 2.8s        |
| Field Duration    | 10s         |
| CD                | 15s         |
| Poise Damage      | 150         |
| Impulse Type      | Air, 0, 600 |

</div>

**Notes**

* The field works as a cylinder with a large height.
* The infusion persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst        |
| :---------------- | :----------- |
| Skill DMG \(T9%\) | 242.08% \* 3 |
| MV/s \(T9%\)      | 322.77%/s    |
| GU                | 1U per hit   |
| ICD               | None         |
| Snapshot          | Dynamic      |
| Damage Element    | Cryo         |
| Damage Type       | Burst        |
| Energy Cost       | 40           |
| CD                | 12s          |
| Poise Damage      | 100          |
| Impulse Type      | Air, 0, 600  |

</div>

**Notes**

* The maximum casting range for **Spirit Blade: Cloud-Parting Star** is 17.85m \(7 Abyss tiles\). If it's casted any further it will not target the enemy.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Chongyun.json'
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
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 100          | Air, 0, 600  |

**Notes**

* The **Spirit Blade** is considered Elemental Skill damage.
* The **Spirit Blade** snapshots any buffs received upon **Chonghua’s Layered Frost** use.
* No ICD on Elemental application
* The Cryo RES shred persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

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

**Notes**

* Chongyun C2 reduces your cooldown based on your original cooldown instead of the increased cooldown while affected by Slowing Waters.
* When used with any cooldown reduction \(CDR\) from the active character, Chongyun’s C2 reduces your cooldown after the reduction from the active character and Slowing Waters.
  * For example: Bennett CDRs from his Ascension 1 and Ascension 4 talents apply before Chongyun's C2 CDR.

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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 100          | Air, 0, 600  |

**Notes**

* This DMG Bonus is **Additive**.
* See: [Damage Formula](../../combat-mechanics/damage/damage-formula.md#base-damage)

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/chongyun.md')} />
