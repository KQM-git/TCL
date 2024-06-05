---
description: A reserved young man who is well-versed in diving. Beneath his distant, icy demeanor lies a pure heart bereft of all flaws.
---

import char from '@site/src/data/characters/Freminet.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Freminet

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Freminet.png')} alt="Freminet's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!---
## Resources

* [Freminet Mains Discord]()
* [Full Freminet Written Guide]()
* [Freminet Quick Guide](https://keqingmains.com/q/freminet-quickguide/)
-->

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s   | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :----- | :----------- | :----------- |
| 1-Hit  | 154.76    | 32     | 290.18 | 112.64       | 3            |
| 2-Hit  | 148.22    | 33     | 269.49 | 107.88       | 3            |
| 3-Hit  | 187.22    | 59     | 138.58 | 136.27       | 3            |
| 4-Hit  | 227.46    | 86     | 158.69 | 165.55       | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String       | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :--- | :----------- | :----------- |
| Spinning DMG |  114.87   |  ?     |   ?  | 60           | 2            |
| Final DMG    |  207.77   |  ?     |   ?  | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03    | 35           | 2            |
| Low Plunge DMG  | 274.01    | 150          | 4            |
| High Plunge DMG | 342.25    | 200          | 7            |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* By holding the attack button with good timing it is possible to infinitely extend the spin CA.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute            | Skill           |
| :------------------- | :-------------- |
| Upward Thrust DMG \(T9%\) | 141.17     |
| Spiritbreath Thorn DMG \(T9%\) | 24.48 |
| Frost DMG \(T9%\)    | 12.17           |
| Level 0 DMG \(T9%\)  | 340.82          |
| Level 1 DMG \(T9%\)  | 170.41 + 82.77  |
| Level 2 DMG \(T9%\)  | 119.29 + 144.85 |
| Level 3 DMG \(T9%\)  | 68.16 + 206.92  |
| Level 4 DMG \(T9%\)  | 0 + 413.95      |
| Particles      | see notes     |
| GU             | 1U            |
| ICD         | Standard, shared |
| Damage Element | Cryo + Phys   |
| Damage Type    | Skill         |
| CD             | 10s           |
| Spiritbreath Thorn CD | 9s     |

|                    | Poise Damage | Impulse type |
| :----------------- | :----------- | :----------- |
| Upward Thrust      | 75           | Air, 0, 600  |
| Spiritbreath Thorn | 25           | 3            |
| Frost DMG          | 25           | 1            |
| Level 0            | 150          | 5            |
| Level 1-3 Cryo     | 70           | 5            |
| Level 1-3 Phys     | 70           | 5            |
| Level 4            | 150          | 5            |

</div>

**Notes**

* Freminet's Skill generates 2 particles on his upthurst and 1 on level 4 Shattering Pressure. During burst, he generates 1 particle on upthurst and 1 on level 4 Shattering Pressure instead.
* Freminet's Skill cooldown starts on its first cast.
* The Pers Timer state persists through swaps.
* If you jump or fall from any height after you reach 4 stacks with his E, you will be able to keep doing normal attacks despite being at full stacks, and you can only E2 by pressing E again.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Primary   |
| :---------------- | :-------- |
| DMG \(T9%\)       | 541.28    |
| GU                | 1U        |
| Damage Element    | Cryo      |
| Damage Type       | Burst     |
| Energy Cost       | 60        |
| Duration          | 10s       |
| Cooldown          | 15s       |
| Poise Damage      | 200       |
| Impulse Type      | 3         |

</div>

**Notes**

* The 200% Frost DMG during Freminet's Burst is a Base DMG Multiplier.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Freminet.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
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

<Tabs queryString="constellation">
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

<Card item={require('../../evidence/characters/cryo/freminet.md')} />
