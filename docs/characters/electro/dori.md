---
description: Dori is a merchant in Sumeru who has a fondness for glittering Mora.
---

import char from '@site/src/data/characters/Dori.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Dori

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Dori.png')} alt="Dori's gacha art" />
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

| String | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 165.74%         |        |           | 95.22        | 3            |
| 2-Hit  | 75.46 \+ 79.22% |        |           | 46.5175 ×2   | 3 ×2         |
| 3-Hit  | 235.89%         |        |           | 127.42       | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String       | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG | 114.91%   |        |           | 60           | 2            |
| Final DMG    | 207.77%   |        |           | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill        | After-Sales Service Round |
| :-----------------------  | :----------- | :------------------------ |
| DMG \(T9%\)               | 250.38%      | 53.65                     |
| Particles                 | 2 \(-\)      | -                         |
| Frames                    |              | -                         |
| GU                        | 1A           | 1A                        |
| ICD                       | 3 hit / 2.5s | 3 hit / 2.5s              |
| Snapshot                  |              |                           |
| Damage Element            | Electro      | Electro                   |
| Damage Type               | Skill        | Skill                     |
| CD                        | 9s           | -                         |
| Poise Damage              | 30           | 10                        |
| Impulse Type              | 3            | 3                         |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute             | Burst                |
| :-------------------- | :------------------- |
| Connector DMG \(T9%\) | 27%                  |
| Healing \(T9%\)       | 11.34% Max HP + 1305 |
| Cast Frames           | 62                   |
| Energy Frame          | 6                    |
| CD Frame              | 2                    |
| Connector GU          | 1A                   |
| Self GU               | 1A                   |
| ICD                   | 3s                   |
| Snapshot              |                      |
| Damage Element        | Electro              |
| Damage Type           | Burst                |
| Energy Cost           | 80                   |
| Duration              | 12s                  |
| Cooldown              | 20s                  |
| Poise Damage          | 8                    |
| Impulse Type          | 0                    |

</div>

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

<Card item={require('../../evidence/characters/electro/dori.md')} />
