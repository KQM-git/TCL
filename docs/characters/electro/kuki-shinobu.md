---
description: 'The capable and reliable Arataki Gang deputy leader. Please note: capable and reliable are not appellations for the "Arataki Gang," but for their deputy leader in specific.'
---

import char from '@site/src/data/characters/Kuki_Shinobu.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Kuki Shinobu

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kuki_Shinobu.png')} alt="Kuki Shinobu's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

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

| String | Talent 9% | Frames | MV/s      |
| :----- | :-------- | :----- | :-------- |
| 1-Hit  | 89.59%    | 25     | 379.2%/s  |
| 2-Hit  | 81.84%    | 23     | 213.5%/s  |
| 3-Hit  | 109.02%   | 50     | 130.82%/s |
| 4-Hit  | 139.83%   | 67     | 125.22%/s |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9%         | Frames | MV/s      |
| :----------------- | :---------------- | :----- | :-------- |
| Charged Attack DMG | 102.21% + 122.66% | 45     | 299.83%/s |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      | 117.46%   |
| Low Plunge DMG  | 234.86%   |
| High Plunge DMG | 293.36%   |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                                    | Skill             |
| :------------------------------------------- | :---------------- |
| Skill DMG \(T9%\)                            | 128.71%           |
| Grass Ring of Sanctification Healing \(T9%\) | 5.1% Max HP + 587 |
| Grass Ring of Sanctification DMG \(T9%\)     | 42.91%            |
| Tick Rate                                    | 1.5s              |
| Activation Cost                              | 30% Current HP    |
| Particles                                    | 0~1 \(55:45\)     |
| GU                                           | 1U                |
| ICD                                          | Standard          |
| Snapshot                                     | Dynamic           |
| Damage Element                               | Electro           |
| Damage Type                                  | Skill             |
| Duration                                     | 12s               |
| CD                                           | 15s               |

</div>

**Notes**

* 45% chance to generate 1 Particle on hit.
* Hitbox extends slightly above the visual effect.
* Initial cast and tick damage share the same ICD

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                   | Burst                 |
| :-------------------------- | :-------------------- |
| Single Instance DMG \(T9%\) | 6.13% Max HP          |
| Total DMG \(T9%\)           | 42.9% / 73.54% Max HP |
| GU                          | 1U                    |
| ICD                         | Standard              |
| Snapshot                    | Snapshots             |
| Damage Element              | Electro               |
| Damage Type                 | Burst                 |
| Energy Cost                 | 60                    |
| Duration                    | 2s / 3.5s             |
| CD                          | 15s                   |

</div>

**Notes**

* Hits 7 times when above 50% HP and 11-13 times when below 50% HP.
* The number of hits depends on FPS but not on ping.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Kuki_Shinobu.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* The healing increase is additive to normal healing.
* The healing is affected by Healing Bonus.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
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

**Notes**

* Skill and C4 have different ICD.
* C4 damage scales with Elemental Skill Damage %.
* C4 can generate Particles.
* No cooldown for Particle generation between Skill and C4.

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

<Card item={require('../../evidence/characters/electro/kuki-shinobu.md')} />
