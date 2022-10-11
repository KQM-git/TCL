---
description: A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.
---

import char from '@site/src/data/characters/Aether_(Dendro).json'
import lumine from '@site/src/data/characters/Lumine_(Dendro).json'
import { getSkillName } from '@site/src/utils/skill'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Traveler (Dendro)

![](/img/traveler/dendro-traveler.png)

<blockquote>{frontMatter.description}</blockquote>

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Lumine Normal Attacks'>
<SkillIcon char={lumine} skill='na' />
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 81.69%    | 14     | 350.1%/s  | 40.5         | 3            |
| 2-Hit  | 79.79%    | 43     | 225.32%/s | 39.6         | 3            |
| 3-Hit  | 97.33%    | 80     | 194.11%/s | 48.6         | 3            |
| 4-Hit  | 107.12%   | 116    | 189.27%/s | 54.0         | 3            |
| 5-hit  | 130.03%   | 148    | 201.06%/s | 64.8         | 6            |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 102.7%+132.72% | -      | -         | 50.6 x2      | 2 + 6        |
| N1C            | 317.11%        | 62     | 306.89%/s | -            | -            |
| N2C            | 396.90%        | 84     | 283.5%/s  | -            | -            |
| N3C            | 494.23%        | 115    | 260.12%/s | -            | -            |
| N4C            | 601.35%        | 160    | 225.51%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={lumine} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* Lumine is the female traveler.

</TabItem>

<TabItem value='na-aether' label='Aether Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 81.69%    | 13     | 377.03%/s | 41.4         | 3            |
| 2-Hit  | 79.79%    | 38     | 254.97%/s | 43.2         | 3            |
| 3-Hit  | 97.33%    | 71     | 218.71%/s | 53.1         | 3            |
| 4-Hit  | 107.12%   | 123    | 178.5%/s  | 57.6         | 3            |
| 5-hit  | 130.03%   | 163    | 182.56%/s | 70.2         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :------------- | :------------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack | 102.7%+111.55% | -      | -         | 50.6 x2      | 2 + 6        |
| N1C            | 295.94%        | 54     | 328.82%/s | -            | -            |
| N2C            | 297.26%        | 90     | 250.49%/s | -            | -            |
| N3C            | 374.26%        | 115    | 246.81%/s | -            | -            |
| N4C            | 459.01%        | 160    | 217.57%/s | -            | -            |

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

* Aether is the male traveler.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Skill        |
| :------------- | :----------- |
| DMG \(T9%\)    | 391.68%      |
| Particles      | 2~3 \(1:1\)  |
| Frames         |              |
| GU             | 1A           |
| ICD            | None         |
| Snapshot       | -            |
| Damage Element | Dendro       |
| Damage Type    | Skill        |
| CD             | 8s           |
| Poise Damage   | 120          |
| Impulse Type   | 4            |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Default      | Hydro        | Electro      | Pyro         |
| :------------- | :----------- | :----------- | :----------- | :----------- |
| DMG \(T9%\)    | 136.27%      | 136.27%      | 136.27%      | 681.36%      |
| Tick Rate      | 1.5s         | 1.5s         | 0.9s         | -            |
| Cast Frames    | 62           | -            | -            | -            |
| Energy Frame   | 9            | -            | -            | -            |
| CD Frame       | 1            | -            | -            | -            |
| GU             | 1A           | 1A           | 1A           | 2B           |
| ICD            | 3 hit / 2.5s | 3 hit / 2.5s | 3 hit / 2.5s | None         |
| Snapshot       | Snapshot     | Snapshot     | Snapshot     | Snapshot     |
| Damage Element | Dendro       | Dendro       | Dendro       | Dendro       |
| Damage Type    | Burst        | Burst        | Burst        | Burst        |
| Energy Cost    | 80           | -            | -            | -            |
| Duration       | 12s          | -            | -            | -            |
| Cooldown       | 20s          | -            | -            | -            |
| Poise Damage   | 30           | 50           | 30           | 200          |
| Impulse Type   | 1            | 1            | 1            | 1            |

</div>

</TabItem>
</Tabs>

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
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

import Talent from '@site/src/components/char/Talent'

<Tabs>
<TabItem value='na-lumine' label={'Lumine: ' + getSkillName(lumine, 'na')}>
<Talent char={lumine} skill='na' />
</TabItem>

<TabItem value='na-aether' label={'Aether: ' + getSkillName(char, 'na')}>
<Talent char={char} skill='na' />
</TabItem>

<TabItem value='e' label={getSkillName(char, 'e')}>
<Talent char={char} skill='e' />
</TabItem>

<TabItem value='q' label={getSkillName(char, 'q')}>
<Talent char={char} skill='q' />
</TabItem>
</Tabs>

## Evidence Vault

<Card item={require('../../evidence/characters/dendro/traveler-dendro.md')} />
