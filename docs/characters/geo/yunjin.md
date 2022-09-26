---
description: A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.
---

import char from '@site/src/data/characters/Yun_Jin.json'
import { getSkillName } from '@site/src/utils/skill'

# Yun Jin

![](/img/characters/gacha/Yun_Jin.png)

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

| String    | Talent 9%       | Frames    | MV/s    | Poise Damage | Impulse Type |
| :-------- | :-------------- | :-------- | :------ | :----------- | :----------- |
| 1-Hit DMG | 74.42%          | 15        | 297.68% | 37.665       | 3            |
| 2-Hit DMG | 73.94%          | 38        | 234.25% | 37.451       | 3            |
| 3-Hit DMG | 42.19% + 50.56% | 61 + 75   | 192.88% | 23.46 x2     | 2 + 3        |
| 4-Hit DMG | 44.08% + 52.93% | 101 + 113 | 179.53% | 24.56 x2     | 3 x2         |
| 5-Hit DMG | 123.71%         | 157       | 176.5%  | 62.656       | 6            |
| Recovery  | -               | 214       | -       | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames  | MV/s    | Poise Damage | Impulse Type |
| :------------- | :-------- | :------ | :------ | :----------- | :----------- |
| Charged Attack | 223.57%   | -       | -       | 120          | 5            |
| N1CA           | 297.99%   | 13 + 57 | 313.67% | -            | -            |
| Recovery       | -         | 89      | -       | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type         |
| :-------------- | :-------- | :----------- | :------------------- |
| Plunge DMG      | 117.46%   | 25           | 1st: 2 <br/> Rest: 4 |
| Low Plunge DMG  | 234.86%   | 100          | 4                    |
| High Plunge DMG | 293.36%   | 150          | 7                    |

</div>
</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Tap        | Charge Level 1 | Charge Level 2 |
| :---------------- | :--------- | :------------- | :------------- |
| Skill DMG \(T9%\) | 253.5% DEF | 443.63% DEF    | 633.76% DEF    |
| Particles         | 2 \(-\)    | 2~3 \(3:2\)    | 3 \(-\)        |
| Frames            | 59         | 109            | 147            |
| GU                | 2U         | 2U             | 4U             |
| ICD               | -          | -              | -              |
| Snapshot          | -          | -              | -              |
| Damage Element    | Geo        | Geo            | Geo            |
| Damage Type       | Skill      | Skill          | Skill          |
| Duration          | -          | -              | -              |
| CD                | 9s         | 9s             | 9s             |
| Poise Damage      | 100        | 200            | 300            |
| Impulse Type      | 4          | 4              | 6              |

</div>

| Attribute              | Shield              |
| :--------------------- | :------------------ |
| DMG Absorption \(T9%\) | 20.4% Max HP + 2350 |
| Elemental Type         | Geo                 |
| Duration               | Hold Duration       |

**Notes**

* Yun Jin is considered shielded for the duration of her **Opening Flourish** stance.
  * This can be used to apply Geo Resonanace Geo Res Shred.
* Yun Jin can perfect counter shots from the Inazuma Kamuijima Cannons.
* Yun Jin's flags from her E persist for however long she's frozen.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute               | Burst      |
| :---------------------- | :--------- |
| Skill DMG \(T9%\)       | 414.8%     |
| Damage Increase \(T9%\) | 54.67% DEF |
| Trigger Quota           | 30         |
| Cast Frames             | 55         |
| Energy Frame            | 8          |
| CD Frame                | 1          |
| GU                      | 2U         |
| ICD                     | -          |
| Snapshot                | Dynamic    |
| Damage Element          | Geo        |
| Damage Type             | Burst      |
| Energy Cost             | 60         |
| Duration                | 12s        |
| CD                      | 15s        |
| Poise Damage            | 200        |
| Impulse Type            | 4          |

</div>

**Notes**

* The bonus damage from **Flying Cloud Flag Formation** gets increased by DMG % bonuses. See [Damage Formula](../../combat-mechanics/damage/damage-formula.md) for more details.
* **Flying Cloud Flag Formation** can be extended by hitlag, including from hits by other characters.
* **Flying Cloud Flag Formation** increases damage of all hits in multi-hit attacks.
* **Flying Cloud Flag Formation** only affects affects attacks, passives and effects with the Normal Attack tag. NO EXCEPTIONS.

**Interactions**

* Yoimiya's **Niwabi Fire-Dance's Blazing Arrow** DMG increase does not increase Yun Jin's **Cliffbreaker's Banner** bonus.

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

* Burning grass can trigger **True to Oneself**.

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

**Notes**

* The DEF % increase does not apply to the hit that triggers the Crystallize.

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

<Card item={require('../../evidence/characters/geo/yunjin.md')} />
