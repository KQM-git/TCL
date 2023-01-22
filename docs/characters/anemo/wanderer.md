---
description: A wayfaring figure whose identity is a mystery. He dresses like a mountain ascetic, but he certainly does not act the part.
---

import char from '@site/src/data/characters/Wanderer.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Wanderer

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Wanderer.png')} alt="Wanderer's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Wanderer Quick Guide](https://keqingmains.com/q/wanderer-quickguide/)

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

| String | Talent 9%       | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :--- | :----------- | :----------- |
| 1-Hit  | 126.24%         |        |      | 13.92        | 2            |
| 2-Hit  | 119.45%         |        |      | 12.14        | 2            |
| 3-Hit  | 87.53% + 87.53% |        |      | 9.05 ×2      | 2 ×2         |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| CA     | 224.54%   |        |      | 100          | Air, 0, 400  |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 3            |
| High Plunge DMG | 260.76%   | 100          | 4            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill   | Kuugo: Fushoudan          | Kuugo: Toufukai            |
| :------------------------ | :------ | :------------------------ | -------------------------- |
| DMG \(T9%\)               | 161.84% | 151.15% Normal Attack DMG | 140.92% Charged Attack DMG |
| Particles                 | -       | 1 (-) per hit (2s ICD)    | 1 (-) per hit (2s ICD)     |
| GU                        | 1U      | 1U                        | 1U                         |
| ICD                       | None    | 3 hit / 2.5s              | None                       |
| Snapshot                  |         | -                         | -                          |
| Damage Element            | Anemo   | Anemo                     | Anemo                      |
| Damage Type               | Skill   | Normal Attack             | Charged Attack             |
| Initial Kuugoryoku Points | 100     | -                         | -                          |
| CD                        | 6s      | -                         | -                          |
| Poise Damage              | 100     | 13.92 / 12.14 / 9.05 ×2   | 100                        |
| Impulse Type              | 3       | 2 / 2 / 2 ×2              | Air, 0, 400                |

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst       |
| :---------------- | :---------- |
| Burst DMG \(T9%\) | 250.24% ×5  |
| GU                | 1U          |
| ICD               | Default     |
| Snapshot          |             |
| Damage Element    | Anemo       |
| Damage Type       | Burst       |
| Energy Cost       | 60          |
| Cooldown          | 15s         |
| Poise Damage      | 50          |
| Impulse Type      | Air, 0, 600 |

</div>

</TabItem>
</Tabs>

## Frames

Coming soon.

<!--
import charFrames from '@site/src/data/frames/Wanderer.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />
-->

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

| Attribute      | A4         |
| :------------- | :--------- |
| GU             | 1U         |
| ICD            | 1s         |
| Snapshot       |            |
| Damage Element | Anemo      |
| Damage Type    | Wind Arrow |
| Poise Damage   | 15         |
| Impulse Type   | 1          |

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

| Attribute      | C6            |
| :------------- | :------------ |
| GU             | 1U            |
| ICD            | 2s            |
| Snapshot       |               |
| Damage Element | Anemo         |
| Damage Type    | Normal Attack |
| Poise Damage   | 15            |
| Impulse Type   | 1             |

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/wanderer.md')} />
