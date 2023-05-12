---
description: The current scribe of the Sumeru Akademiya, a man endowed with extraordinary intelligence and talent. He lives free — free from the searching eyes of ordinary people, anyway.
---

import char from '@site/src/data/characters/Alhaitham.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Alhaitham

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Alhaitham.png')} alt="Alhaitham's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

<!--
* [Full Alhaitham Written Guide](https://keqingmains.com/alhaitham/)
-->

* [Alhaitham Quick Guide](https://keqingmains.com/q/alhaitham-quickguide/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 90.99%    | 21     | 259.97%/s | 58.5         | 3            |
| 2-Hit  | 93.24%    | 28     | 199.80%/s | 59.5         | 3            |
| 3-Hit  | 62.79% x2 | 50     | 150.70%/s | 39 x2        | 2 + 3        |
| 4-Hit  | 122.67%   | 50     | 245.34%/s | 77           | 4            |
| 5-Hit  | 154.05%   | 73     | 126.62%/s | 101          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%  | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------- | :----- | :-------- | :----------- | :----------- |
| CA     | 101.51% x2 | 50     | 243.65%/s | 60 x2        | 2 + 6        |
| N1C    | 294.01%    | 79     | 223.31%/s | -            | -            |
| N2C    | 387.27%    | 102    | 227.81%/s | -            | -            |
| N3C    | 512.85%    | 150    | 205.14%/s | -            | -            |
| N4C    | 635.52%    | 186    | 205.01%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Rush Attack                            | Mirror Projection Attack                                                                                                                                                |
| :------------- | :------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DMG \(T9%\)    | 329.12% ATK + 263.3% Elemental Mastery | 1-Mirror: 114.24% ATK + 228.48% Elemental Mastery<br />2-Mirror: (114.24% ATK + 228.48% Elemental Mastery)×2<br />3-Mirror: (114.24% ATK + 228.48% Elemental Mastery)×3 |
| Particles      | 1 (-)                                  | -                                                                                                                                                                       |
| GU             | 1U                                     | 1U                                                                                                                                                                      |
| ICD            | None                                   | 2 hit / 12s                                                                                                                                                             |
| Snapshot       | Dynamic                                | Snapshot                                                                                                                                                                |
| Damage Element | Dendro                                 | Dendro                                                                                                                                                                  |
| Damage Type    | Skill                                  | Skill                                                                                                                                                                   |
| CD             | 18s                                    | 1.6s                                                                                                                                                                    |
| Poise Damage   | 100                                    | 50                                                                                                                                                                      |
| Impulse Type   | 3                                      | 2                                                                                                                                                                       |

</div>


**Notes**

* Alhaitham's resistance to interruption is increased while holding Skill and during his tap Skill animation.
* After using hold Skill, you can instantly plunge at any height.
* Coordinated attacks from Chisel-Light Mirrors can proc Sacrificial Sword's passive.
* Tap Skill can teleport further than hold Skill.
* **Chisel-Light Mirror** projection attack's positioning depends on Alhaitham's own positioning and what direction he's facing.
* Hold E -> Plunge combo can be done faster by aiming closer to his feet while pressed against an enemies hitbox.
* **Chisel-Light Mirror** projection attacks can miss if a swap occurs too fast (more likely at higher ping).
* Alhaitham keeps his momentum if interrupted during his hold Skill teleport.
* Alhaitham can remain submerged in water when in his hold Skill state.
* Alhaitham can make his sword disappear by cancelling his Skill before it gives him mirrors. This is easily done using an alchemy table or by talking to an NPC or falling in water while in his hold Skill. Using N5, Skill or Burst makes his sword reappear, but it is still possible to activate his Dendro infusion via his A1 passive.
* **Chisel-Light Mirror** projection attacks spawn 0-2 frames after damage numbers become visible. Damage numbers appearing is ping-dependent. Therefore, the time a Chisel-Light Mirror Projection attack spawns is ping dependent. Furthermore, the check for the level of mirror projection attacks occurs at (approximately) the same time as the damage numbers appearing.
* **Chisel-Light Mirror** generation is not affected by ping.
* **Chisel-Light Mirror**'s Projection Attack Type is not determined by the amount of Mirrors on the triggering hit. The check happens on the Projection Proc.


</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute        | Burst                                                        |
| :--------------- | :----------------------------------------------------------- |
| DMG \(T9%\)      | 206.72% ATK + 165.38% Elemental Mastery                      |
| Attack Instances | Basic: 4<br />1-Mirror: 6<br />2-Mirror: 8<br />3-Mirror: 10 |
| GU               | 1U                                                           |
| ICD              | Standard                                                     |
| Snapshot         | Snapshot                                                     |
| Damage Element   | Dendro                                                       |
| Damage Type      | Burst                                                        |
| Energy Cost      | 70                                                           |
| Cooldown         | 18s                                                          |
| Poise Damage     | 35                                                           |
| Impulse Type     | 2                                                            |

</div>


**Notes**

* Burst has a 2s wait before generating new **Chisel-Light Mirrors**. It is possible to swap to another character, use a skill, and come back in time to catch the new Mirrors generated.


</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Alhaitham.json'
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

**Notes**

* **Chisel-Light Mirror** counts for projection attacks are calculated after A1.

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

**Notes**
  
* The EM buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* C6 buff duration after bursting depends on how many mirrors exist when the 3 mirrors are generated at burst.
    * Burst -> CA - 6s
    * Burst -> Tap Skill - 12s
    * Burst -> Hold Skill -> Plunge - 18s
    * Burst -> Tap Skill -> Wait for Mirrors from Burst - 18s
* There is a visual indicator for the buff (green trailing light on Alhaitham's right shoulder).

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/dendro/alhaitham.md')} />
