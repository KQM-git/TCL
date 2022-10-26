---
description: The General Mahamatra in charge of supervising the researchers of the Akademiya. It is said that when he gets down to work, the General Mahamatra is even more efficient than the "Great Vayuvyastra" made by the Kshahrewar.
---

import char from '@site/src/data/characters/Cyno.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Cyno

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Cyno.png')} alt="Cyno's gacha art" />
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

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type  |
| :----- | :--------------- | :----- | :-------- | :----------- | :------------ |
| 1-Hit  | 90.5%            | 16     | 339.38%/s | 45.82        | 3             |
| 2-Hit  | 88.04%           | 30     | 176.08%/s | 44.58        | 3             |
| 3-Hit  | 53.84% \+ 53.84% | 32     | 201.90%/s | 27.26 ×2     | 2 \+ 3        |
| 4-Hit  | 139.43%          | 65     | 128.70%/s | 70.60        | 3             |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 224.83%          | 24     | 201.34%/s | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill       | Mortuary Rite |
| :-----------------------  | :---------- | :------------ |
| DMG \(T9%\)               | 221.68%     | 266.56%       |
| Particles                 | 2~3 \(1:1\) | 1~2 \(1:2\)   |
| GU                        | 1A          | 1A            |
| ICD                       | 0.2s        | None          |
| Snapshot                  |             |               |
| Damage Element            | Electro     | Electro       |
| Damage Type               | Skill       | Skill         |
| Duration                  | 4s          | 4s            |
| CD                        | 7.5s        | 3s            |
| Poise Damage              | 50          | 75            |
| Impulse Type              | 3           | 3             |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst           |
| :---------------- | :-------------- |
| GU                | 1A              |
| ICD               | 3 hit / 2.5s    |
| Snapshot          | Dynamic         |
| Damage Element    | Electro         |
| Damage Type       |                 |
| Energy Cost       | 80              |
| Duration          | 10s             |
| Cooldown          | 20s             |
| Poise Damage      | 400             |
| Impulse Type      | Heavy, 600, 0   |
| EM Bonus          | 100             |

</div>

| String     | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type  |
| :--------- | :-------- | :----- | :-------- | :----------- | :------------ |
| 1-Hit      | 143.82%   | 17     | 507.6%/s  | 46.98        | 3             |
| 2-Hit      | 151.51%   | 32     | 284.08%/s | 49.91        | 3             |
| 3-Hit      | 178.85%   | 43     | 268.23%/s | 64.02        | Heavy, 550, 0 |
| 4-Hit      | 94.97% x2 | 30     | 379.88%/s | 32.50 x2     | 2 \+ 3        |
| 5-Hit      | 240.39%   | 69     | 240.39%/s | 77.70        | 5             |

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 185.65%          | 69     | 161.43%/s | 120          | 6            |

| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      | 117.46%   |
| Low Plunge DMG  | 234.86%   |
| High Plunge DMG | 293.36%   |

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Cyno.json'
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

<Card item={require('../../evidence/characters/electro/cyno.md')} />
