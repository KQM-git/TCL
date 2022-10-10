---
description: An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.
---

import char from '@site/src/data/characters/Tighnari.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Tighnari

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Tighnari.png')} alt="Tighnari's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

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
| 1-Hit  | 82%       |        |           | 16.5         | 1            |
| 2-Hit  | 77.1%     |        |           | 15.9         | 1            |
| 3-Hit  | 48.59% ×2 |        |           | 9.75 ×2      | 1            |
| 4-Hit  | 126.08%   |        |           | 25.5         | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type               | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type      |
| :----------------- | :-------- | :----- | :--------- | :-- | :------------------ | :---------------- |
| Aimed Shot         | 80.58%    |        |            | -   | 10 \(Headshot: 30\) | 2 \(Headshot: 5\) |
| With Recovery      | -         |        |            | -   | -                   | -                 |
| Charge Level 1     | 210.8%    |        |            | 1A  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| With Recovery      | -         |        |            | -   | -                   | -                 |
| Wreath Arrow       | 148.24%   |        |            | 1A  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| Clusterbloom Arrow | 65.62%    |        |            | 1A  | 20                  | 3                 |
| With Recovery      | -         |        |            | -   | -                   | -                 |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill                       |
| :-----------------------  | :-------------------------- |
| DMG \(T9%\)               | 254.32%                     |
| Particles                 | 3~4 \(1:1\)                 |
| Frames                    |                             |
| GU                        | 1A                          |
| ICD                       | None                        | 
| Snapshot                  | Snapshot                    |
| Damage Element            | Dendro                      |
| Damage Type               | Skill                       |
| Duration                  | Field: 8s <br/> Effect: 12s |
| CD                        | 12s                         |
| Poise Damage              | 50                          |
| Impulse Type              | 2                           |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Primary         | Secondary       |
| :---------------- | :-------------- | :-------------- |
| DMG \(T9%\)       | 94.55%          | 115.57%         |
| Cast Frames       | 12              | -               |
| Energy Frame      | 7               | -               |
| CD Frame          | 1               | -               |
| GU                | 1A              | 1A              |
| ICD               | 3 hits / 2.5s   | 3 hits / 2.5s   |
| Snapshot          | Snapshot        | Dynamic         |
| Damage Element    | Dendro          | Dendro          |
| Damage Type       | Burst           | Burst           |
| Energy Cost       | 40              | -               |
| Cooldown          | 12s             | -               |
| Poise Damage      | 30              | 30              |
| Impulse Type      | 3               | 3               |

</div>

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
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/dendro/tighnari.md')} />