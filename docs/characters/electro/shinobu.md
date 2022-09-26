---
description: 'The capable and reliable deputy leader of the "Arataki Gang." Please note: capable and reliable are not appellations for the "Arataki Gang," but for their deputy leader in specific.'
---

import char from '@site/src/data/characters/Kuki_Shinobu.json'
import { getSkillName } from '@site/src/utils/skill'

# Kuki Shinobu

![](/img/characters/gacha/Kuki_Shinobu.png)

<blockquote>{frontMatter.description}</blockquote>

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

| String   | Talent 9% | Frames | MV/s |
| :------- | :-------- | :----- | :--- |
| 1-Hit    | 89.59%    | -      | -    |
| 2-Hit    | 81.84%    | -      | -    |
| 3-Hit    | 109.02%   | -      | -    |
| 4-Hit    | 139.83%   | -      | -    |
| Recovery | -         | -      | -    |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9%         | Frames | MV/s |
| :----------------- | :---------------- | :----- | :--- |
| Charged Attack DMG | 102.21% + 122.66% | -      | -    |
| Recovery           | -                 | -      | -    |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      | 117.46%   |
| Low Plunge DMG  | 234.86%   |
| High Plunge DMG | 293.36%   |

</div>
</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                                    | Skill             |
| :------------------------------------------- | :---------------- |
| Skill DMG \(T9%\)                            | 128.71%           |
| Grass Ring of Sanctification Healing \(T9%\) | 5.1% Max HP + 587 |
| Grass Ring of Sanctification DMG \(T9%\)     | 42.91%            |
| Tick Rate                                    | 1.5s              |
| Activation Cost                              | 30% Current HP    |
| Particles                                    | 0~1 \(55\:45\)    |
| Frames                                       | -                 |
| GU                                           | 1A                |
| ICD                                          | 3 hit / 2.5s      |
| Snapshot                                     | Dynamic           |
| Damage Element                               | Electro           |
| Damage Type                                  | Skill             |
| Duration                                     | 12s               |
| CD                                           | 15s               |

</div>

**Notes**

* 45% chance to generate 1 particle on hit.
* Hitbox extends slightly above the visual effect.
* Initial cast and tick damage share the same ICD

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                   | Burst                 |
| :-------------------------- | :-------------------- |
| Single Instance DMG \(T9%\) | 6.13% Max HP          |
| Total DMG \(T9%\)           | 42.9% / 73.54% Max HP |
| Cast Frames                 | -                     |
| Energy Frame                | -                     |
| CD Frame                    | -                     |
| GU                          | 1A                    |
| ICD                         | 3 hit / 2.5s          |
| Snapshot                    | Snapshots             |
| Damage Element              | Electro               |
| Damage Type                 | Burst                 |
| Energy Cost                 | 60                    |
| Duration                    | 2s / 3.5s             |
| CD                          | 15s                   |

</div>

**Notes**

* Hits 7 times when above 50% HP and 11-13 times when below 50% HP.
* Number of hits depend on FPS but not on ping.

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

**Notes**

* Skill and C4 have differnet ICD.
* C4 damage scales with Elemental Skill Damage \%.
* C4 can generate particles.
* No cooldown for particle generation between Skill and C4.

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

<Card item={require('../../evidence/characters/electro/shinobu.md')} />
