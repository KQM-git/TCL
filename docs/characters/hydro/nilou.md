---
description: The star of the Zubayr Theater. She is full of warmth and innocence, and her dances are lively and elegant.
---

import char from '@site/src/data/characters/Nilou.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Nilou

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Nilou.png')} alt="Nilou's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Nilou Quick Guide](https://keqingmains.com/q/nilou-quickguide/)

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
| 1-Hit  | 92.4%     | 26     | 213.3%/s  | 52.64        | 3            |
| 2-Hit  | 83.5%     | 33     | 151.78%/s | 47.55        | 3            |
| 3-Hit  | 129.3%    | 66     | 117.51%/s | 73.60        | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%      | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 92.3% + 100.0% | 42     | 274.69%/s | 60 ×2        | 2 + 6        |

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

| Attribute                          | Pirouette    | Sword Dance \(Lunar Prayer\) | Whirling Steps \(Tranquility Aura\)                              |
| :--------------------------------- | :----------- | :--------------------------- | :--------------------------------------------------------------- |
| DMG \(T9%, 1-Hit/2-Hit/3-Hit\)     | 5.68% Max HP | 7.74/8.75/12.19% Max HP      | 5.55/6.73/8.60% Max HP                                           |
| Particles \(1-Hit/2-Hit/3-Hit\)    | 1-2 \(1:1\)  | 0                            | Whriling Steps: 1/1/1<br />Tranquility Aura: 0                   |
| GU                                 | 1A           | 1A                           | 1A                                                               |
| ICD                                | 3-hit / 2.5s | 3-hit / 2.5s                 | Whirling Steps: 3-hit / 2.5s<br />Tranquility Aura: 4-hit / 1.9s |
| Snapshot                           | Dynamic      | Dynamic                      | Dynamic                                                          |
| Damage Element                     | Hydro        | Hydro                        | Hydro                                                            |
| Damage Type                        | Skill        | Skill                        | Skill                                                            |
| Duration                           | 10s          | 8s                           | 12s                                                              |
| Cooldown                           | 18s          | -                            | -                                                                |
| Poise Damage \(1-Hit/2-Hit/3-Hit\) | 55.64        | 52.64/47.55/90.31            | 54.64/66.43/85                                                   |
| Impulse Type \(1-Hit/2-Hit/3-Hit\) | 3            | 3/3/3                        | 3/3/4                                                            |

</div>

**Notes:**  

* **Dance of Haftkarsvar** generates a total of 4-5 particles each time.
* Nilou can enter both **Sword Dance** and **Whirling Steps** stances at the same time using Sacrificial Sword.
* **Dance of Haftkarsvar** cooldown starts on initial cast, but the infusion duration does not start until the 3rd slash.
* **Tranquility Aura** counts as a zero-damage hit.
* While under the **Pirouette** or **Lunar Prayer** effects, Nilou's Normal Attack combo will not be reset.
* All 3 **Sword Dance** hits can be canceled very early. Well-timed dash cancels does not cause her to lose infusion slashes, thus making her an extremely mobile on-fielder.
* **Luminous Illusion** is considered a ranged attack.
* E N2 Q N1 allows particle pre-funneling.
* **Sword Dance** and **Luminous Illusion** can't trigger [Beidou's Burst](../electro/beidou.md#attacks) but can trigger [Xingqiu's Burst](../hydro/xingqiu.md#attacks).

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Burst        | Lingering Aeon |
| :------------- | :----------- | :------------- |
| DMG \(T9%\)    | 18.4% Max HP | 22.5% Max HP   |
| GU             | 1A           | 1A             |
| ICD            | None         | None           |
| Snapshot       | Dynamic      | Dynamic        |
| Damage Element | Hydro        | Hydro          |
| Damage Type    | Burst        | Burst          |
| Energy Cost    | 70           | -              |
| Duration       | -            | 2s             |
| Cooldown       | 18s          | -              |
| Poise Damage   | 150          | 100            |
| Impulse Type   | 3            | 3              |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Nilou.json'
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

**Notes:**  

* A4 is additive to the Bloom Reaction Bonus from EM.

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

**Notes:**  

* C4 buffs **Lingering Aeon** with the combo: E N2 Q N1.

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

<Card item={require('../../evidence/characters/hydro/nilou.md')} />
