---
description: A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are clear.
---

import char from '@site/src/data/characters/Shikanoin_Heizou.json'
import { getSkillName } from '@site/src/utils/skill'

# Shikanoin Heizou

![](/assets/characters/gacha/Shikanoin_Heizou.png)

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

| String   | Talent 9%                | Frames | MV/s | Poise Damage          | Impulse Type |
| :------- | :----------------------- | :----- | :--- | :-------------------- | :----------- |
| 1-Hit    | 63.71%                   | -      | -    | 42.16                 | 3            |
| 2-Hit    | 62.65%                   | -      | -    | 41.46                 | 3            |
| 3-Hit    | 86.8%                    | -      | -    | 57.44                 | 3            |
| 4-Hit    | 25.13% + 27.64% + 32.67% | -      | -    | 16.63 + 18.29 + 21.62 | 3            |
| 5-Hit    | 104.46%                  | -      | -    | 69.13                 | 5            |
| Recovery | -                        | -      | -    | -                     | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String   | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :------- | :-------- | :----- | :--- | :----------- | :----------- |
| N1C      | 124.1%    | -      | -    | 120          | 5            |
| Recovery | -         | -      | -    | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      | 104.41%   |
| Low Plunge DMG  | 208.77%   |
| High Plunge DMG | 260.76%   |

</div>

**Notes**

* It is possible to dragon strike with N1C.
* When swapping out of CA, it's slightly faster to N1 cancel into a swap than doing it normally.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                    | Skill                                                                                        |
| :--------------------------- | :------------------------------------------------------------------------------------------- |
| Skill DMG \(T9%\)            | 386.78%                                                                                      |
| Declension DMG Bonus \(T9%\) | 96.7%/stack                                                                                  |
| Conviction DMG Bonus         | 193.39%                                                                                      |
| Particles                    | 0-1 Stack: 2 \(-\) <br/> 2-3 Stacks: 2~3 \(1:1\) <br/> 4 Stacks: 3 \(-\)                     |
| Frames                       | -                                                                                            |
| GU                           | 2U                                                                                           |
| ICD                          | None                                                                                         |
| Snapshot                     | -                                                                                            |
| Damage Element               | Anemo                                                                                        |
| Damage Type                  | Elemental Skill                                                                              |
| Declension Duration          | 60s                                                                                          |
| CD                           | 10s                                                                                          |
| Poise Damage                 | 0 Stacks: 150 <br/> 1 Stack: 175 <br/> 2 Stacks: 200 <br/> 3 Stacks: 225 <br/> 4 Stacks: 250 |
| Impulse Type                 | 0-3 Stacks: 4 <br/> 4 Stacks: 6                                                              |

</div>

**Notes**

* **Declension** stacks persist when Heizou is swapped off or interrupted.
* Heizou can get and keep **Declension** stacks by holding E and teleporting as soon as he reaches 4 stacks.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Fudou Style Vacuum Slugger | Windmuster Iris  |
| :------------- | :------------------------- | :--------------- |
| DMG \(T9%\)    | 534.97%                    | 36.48%           |
| Cast Frames    | 76                         | -                |
| Energy Frame   | 8                          | -                |
| CD Frame       | 1                          | -                |
| GU             | 1U                         | 1A               |
| ICD            | None                       | None             |
| Snapshot       | Snapshot                   | Snapshot         |
| Damage Element | Anemo                      | Absorbed Element |
| Damage Type    | Elemental Burst            | Elemental Burst  |
| Energy Cost    | 40                         | 40               |
| CD             | 12s                        | 12s              |
| Poise Damage   | 100                        | 25               |
| Impulse Type   | 7                          | 2                |

</div>

**Notes**

* **Windmuster Kick** can't damage ores or enemy Geo Constructs, unlike Heizou's Normal Attack, Charged Attack, and Elemental Skill.
* **Windmuster Kick** does not have a damage cap.

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

**Notes**

* Swirling objects doesn't give Heizou any **Declension** stacks.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import ConstellationsFull from '@site/src/components/char/ConstellationsFull'

<ConstellationsFull char={char} />

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char} />

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/heizou.md')} />
