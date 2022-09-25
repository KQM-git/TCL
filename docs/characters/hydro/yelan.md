---
description: A mysterious person who claims to work for the Ministry of Civil Affairs, but is a "non-entity" on the Ministry of Civil Affairs' list.
---

import char from '@site/src/data/characters/Yelan.json'
import { getSkillName } from '@site/src/utils/skill'

# Yelan

![](/assets/characters/gacha/Yelan.png)

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

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 74.73% | 14 | 320.27% | 14.19 | 1 |
| 2-Hit DMG | 71.73% | 29 | 286.92% | 13.62 | 1 |
| 3-Hit DMG | 94.8% | 54 | 227.52% | 18 | 1 |
| 4-Hit DMG | 59.72% x2 | 88 + 102 | 105.38% + 255.94% | 7.56 ×2 | 1 |
| Recovery | - | 142 | - | - | - |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Aimed Shot | 80.58% | 15 | 322.32% | 10 \(Headshot: 30\) | 2 |
| With Recovery | - | 25 | 193.39% | - | - | - |
| Fully-Charged Aimed Shot | 210.8% | 86 | 147.07% | 20 \(Headshot: 60\) | 5 |
| With Recovery | - | 96 | 131.75% | - | - | - |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Breakthrough' />

| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Breakthrough Barb DMG | 19.68% Max HP | 32 | 36.90% Max HP | 100 | 3 |
| With Recovery | - | 42 | 28.13% Max HP | - | - | - | - |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type | Talent 9% | Poise Damage | Impulse Type |
| :--- | :--- | :--- | :--- |
| Plunge DMG | 104.41% | 10 | 2 |
| Low Plunge DMG | 208.77% | 50 | 2 |
| High Plunge DMG | 260.76% | 100 | 3 |

</div>

**Notes:**
* N4 appears behind Yelan and will not go through if she is standing with her back to a wall.
* Charged Attack frame counts are done using by holding and releasing the Normal Attack button. 
* **Breakthrough Barb** does not reset after spending 5s off-field and in combat.
* Yelan can gain **Breakthrough Barb** while charging a Fully-Charged Aimed Shot.
* **Breakthrough Barb** has a 0 damage hit on top of Breakthrough Barb DMG.
* Yelan can plunge from standing.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute | Skill | 
| :--- | :--- |
| DMG \(T9%\) | 38.44% Max HP |
| Particles | 4 \(-\) | 
| Frames | Tap: 40 <br/> Hold: 42-257 |
| GU | 1A |
| ICD | Standard | 
| Snapshot | - | 
| Damage Element | Hydro | 
| Damage Type | Skill |
| Max Duration (Hold) | 3s |
| CD | 10s | 
| Poise Damage | 120 |
| Impulse Type | Air, 400, 800 |

</div>

**Notes:**  
* **Lingering Lifeline** CD begins when Yelan exists the rapid movement state.
* The rapid movement state is affected by movement speed buffs.
* Stamina can be regenerated during the rapid movement state.
* Enemies can i-frame **Lifeline**, causing it to deal no damage but produce Particles.
* Things can be picked up via the interaction key during the rapid movement state.
* The rapid movement state does not do anything to Abyss Lector furnace, Parametric Transformer, or animals.
* Yelan can escape Mirror Maiden prisons during the rapid movement state.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute | Skill | Exquisite Throw |
| :--- | :--- | :--- |
| DMG \(T9%\) | 12.42% Max HP | 8.28% Max HP ×3 |
| Cast Frames | 91 | - |
| Energy Frame | 10 | - |
| CD Frame | 1 | - |
| GU | 2B | 1A |
| ICD | 3-hit / 2.5s | 3-hit / 2s |
| Snapshot | - | Dynamic | 
| Damage Element | Hydro | Hydro |
| Damage Type | Burst | Burst |
| Energy Cost | 70 | - |
| Duration | 15s | - |
| CD | 18s | - |
| Poise Damage | 100 | Air, 200, 600 |
| Impulse Type | 30 | 1 |

</div>

**Notes:**  
* Initial hit and **Exquisite Throws** have separate ICDs.
* **Exquisite Throws** have variable time intervals between each hit.
* **Exquisite Throws** can be buffered.
* If the duration of **Depth-Clarion Dice** ends while a wave of **Exquisite Throw** is triggered, it may not shoot the entire wave.
* **Exquisite Throws** can trigger very early into a Normal Attack animation and N0 will trigger a wave.
* The 15 second timer starts 73 frames after Q is pressed.
* The Burst can be double prefunneled.

**Notes:**  
* The damage of each coordinated attack snapshots separately after being generated.

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

**Notes:**  
* This is additive to other sources of HP%.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes:**  
* It only applies to the character on-field but is not tied to a single character.
* The damage increase does not snapshot or reset when switching characters.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes:**  
* CD of the second **Lingering Lifeline** is added after the CD of the first **Lingering Lifeline** ends.

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
* Multiple stacks can be gained from a single enemy.
* Each stack refreshes the timer.
* All party members' Current HP is increased proportionally to their Max HP, and will be decreased again once the duration ends.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes:**  
* C6 is affected by CA DMG Bonuses.
* C6 does not proc the NA effect from [Mitternachts Waltz](../../equipment/weapons/bows.md#mitternachts-waltz).
* C6 can proc [Beidou's Burst](../electro/beidou.md#attacks).

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/yelan.md')} />