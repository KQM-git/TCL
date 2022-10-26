---
description: A descendant of King Deshret with an amber left eye. The defender of Aaru Village.
---

import char from '@site/src/data/characters/Candace.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Candace

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Candace.png')} alt="Candace's gacha art" />
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
| 1-Hit  | 111.71%         | 26     | 257.79%/s | 60.08        | 3            |
| 2-Hit  | 112.34%         | 39     | 172.83%/s | 59.76        | 3            |
| 3-Hit  | 65.2% \+ 79.69% | 54     | 160.99%/s | 38.08 ×2     | 2 \+ 3       |
| 4-Hit  | 174.43%         | 76     | 137.71%/s | 94.80        | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 228.15%          | 57     | 240.16%/s | 120          | 5            |

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

| Attribute                 | Tap                  | Hold                 |
| :-----------------------  | :------------------- | :------------------- |
| DMG \(T9%\)               | 20.4% Max HP         | 32.37% Max HP        |
| Shield DMG Absorption     | 20.4% \+ 2349 Max HP | 20.4% \+ 2349 Max HP |
| Particles                 | 2 \(-\)              | 3 \(-\)              |
| GU                        | 1A                   | 1A                   |
| ICD                       | None                 | None                 |
| Snapshot                  | Dynamic              | Dynamic              |
| Damage Element            | Hydro                | Hydro                |
| Damage Type               | Skill                | Skill                |
| CD                        | 6s                   | 9s                   |
| Poise Damage              | 150                  | 300                  |
| Impulse Type              | 6                    | 6                    |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst         | Wave Impact   |
| :---------------- | :------------ | :------------ |
| DMG \(T9%\)       | 11.24% Max HP | 11.24% Max HP |
| DMG Bonus         | 20%           | -             |
| Instances         | -             | 3             |
| GU                | 1A            | 1A            |
| ICD               | None          | None          |
| Snapshot          | Dynamic       | Dynamic       |
| Damage Element    | Hydro         | Hydro         |
| Damage Type       | Burst         | Burst         |
| Energy Cost       | 60            | -             |
| Duration          | 9s            | -             |
| Cooldown          | 15s           | -             |
| Poise Damage      | 300           | 300           |
| Impulse Type      | 2             | 2             |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Candace.json'
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

<Card item={require('../../evidence/characters/hydro/candace.md')} />
