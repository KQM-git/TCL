---
description: A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.
---

import char from '@site/src/data/characters/Nahida.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Nahida

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Nahida.png')} alt="Nahida's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Nahida Quick Guide](https://keqingmains.com/q/nahida-quickguide/)

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
| 1-Hit  | 68.52%    | 30     | 137.04%/s | 7.56         | 2            |
| 2-Hit  | 62.86%    | 22     | 171.44%/s | 6.93         | 2            |
| 3-Hit  | 77.99%    | 38     | 123.14%/s | 8.60         | 2            |
| 4-Hit  | 99.29%    | 71     | 83.91%/s  | 10.95        | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 224.4%    | 65     | 207.14%/s | 80           | 5            |

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

| Attribute      | Tap     | Hold    | Tri-Karma Purification        |
| :------------- | :------ | :------ | ----------------------------- |
| DMG \(T9%\)    | 167.28% | 221.68% | 175.44% ATK<br />+ 350.88% EM |
| Particles      | 0       | 0       | 3 \(7s ICD\)                  |
| GU             | 1U      | 1U      | 1.5U                          |
| ICD            | None    | None    | 1a                            |
| Snapshot       | Dynamic | Dynamic | Dynamic                       |
| Damage Element | Dendro  | Dendro  | Dendro                        |
| Damage Type    | Skill   | Skill   | Skill                         |
| Tick Rate      | -       | -       | 2.5s                          |
| Duration       | -       | -       | 25                            |
| CD             | 5       | 6       | -                             |
| Poise Damage   | 75      | 100     | 30                            |
| Impulse Type   | 2       | 2       | 2                             |

</div>
</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute     | Cast | Pyro                        | Electro                              | Hydro                                 |
| :------------ | :--- | :-------------------------- | :----------------------------------- | :------------------------------------ |
| Buffs \(T9%\) | -    | 25.3%/37.94%<br />DMG Bonus | 0.422s/0.632s<br />Interval Decrease | 5.685s/8.527s<br />Duration Extension |
| Snapshot      | -    | Snapshot                    | Snapshot                             | Snapshot                              |
| Energy Cost   | 15   | -                           | -                                    | -                                     |
| Duration      | 15   | -                           | -                                    | -                                     |
| Cooldown      | 13.5 | -                           | -                                    | -                                     |

</div>

**Notes**  

* Buffs are for 1 character and 2 characters respectively.
* Buffs snapshot but the EM bonus from A1 does not snapshot.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Nahida.json'
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

<Card item={require('../../evidence/characters/dendro/nahida.md')} />
