---
description: The first and greatest head of the Arataki Gang, famed throughout Inazuma City's Hanamizaka... Wait, what? You've never heard of them? Are you trying to be funny here?
---

import char from '@site/src/data/characters/Arataki_Itto.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Arataki Itto

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Arataki_Itto.png')} alt="Arataki Itto's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Hanamizaka Heroics: Arataki Itto Guide](https://keqingmains.com/itto/)

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

| String   | Talent 9% | Frames | MV/s      | Poise Damage\* | Impulse Type\* |
| :------- | :-------- | :----- | :-------- | :------------- | :------------- |
| 1-Hit    | 145.57%   | 42     | 207.96%/s | 82.9           | 3              |
| 2-Hit    | 140.3%    | 45     | 187.07%/s | 77.9           | 3              |
| 3-Hit    | 168.36%   | 53     | 190.60%/s | 98.3           | Heavy, 500, 0  |
| 4-Hit    | 215.37%   | 93     | 138.95%/s | 124.5          | 5              |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String                           | Talent 9% | Frames          | MV/s      | Poise Damage\*                        | Impulse Type\* |
| :------------------------------- | :-------- | :-------------- | :-------- | :------------------------------------ | :------------- |
| Arataki Kesagiri Combo Slash DMG | 167.48%   | 113 \(1 stack\) | 88.93%/s  | 1 stack: 143.4 <br/> 2-5 stacks: 81.7 | Heavy, 250, 0  |
| Arataki Kesagiri Final Slash DMG | 350.76%   | 119             | 176.85%/s | 143.4                                 | Air, 100, 800  |
| Saichimonji Slash DMG            | 131.50%   | 141             | 70.73%/s  | 120                                   | 5              |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 150.35%   | 35           | 2            |
| Low Plunge DMG  | 300.63%   | 150          | 4            |
| High Plunge DMG | 375.5%    | 200          | 7            |

</div>

\* Poise Damage and Impulse Type are the same for regular attacks and converted attacks during **Royal Descent: Behold, Itto the Evil!**.

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Itto can gain **Superlative Superstrength** stacks while off field.
* Itto's **Superlative Superstrength** stacks persist through character swap.
* **Arataki Kesagiri Combo Slash** and **Final Slash**'s hitbox can hit enemies located behind Itto.
* Itto’s Charged Attack has a uniform buffering time - it takes 14 frames from holding LMB to the stack flash, including hitlag frames.
* Itto’s N2 allows a Charged Attack to come out a minimum of 4 frames after hitlag ends. N3 has a minimum of 6 frames after hitlag.
* The non-reset mechanic of Itto's Normal Attack combo has some nuances:  
  * The combo non-reset time after using an Elemental Skill is very long, and seems to last the entire animation duration, and end after the animation ends.
  * Multiple Elemental Skills can be chained in a row and Itto will still retain the combo non-reset. 
  * Only one dash can be used to retain the non-reset effect. Dashing and/or using an Elemental Skill more than once in any permutation will reset his Normal Attack string.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Ushi          |
| :---------------- | :------------ |
| Skill DMG \(T9%\) | 522.24%       |
| Inherited HP      | 100%          |
| Particles         | 3~4 \(1:1\)   |
| GU                | 1U            |
| ICD               | 1s            |
| Snapshot          | -             |
| Damage Element    | Geo           |
| Damage Type       | Skill         |
| Duration          | 6s            |
| CD                | 10s           |
| Poise Damage      | 250           |
| Impulse Type      | Air, 100, 600 |

</div>

**Notes**

* Ushi counts towards the Geo Constructs limit.
* Ushi's duration starts at land, not on cast.
* Hold E has a maximum 10s timer.
* Ushi still persists and gains stacks after teleporting.
* Ushi is unsuckable (via Sucrose and Kazuha).
* Ushi can be pushed by either Itto or enemies.
* Ushi will "land" mid\-air after 2 seconds if it doesn't land on a surface.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst      |
| :---------------- | :--------- |
| ATK Bonus \(T9%\) | 97.92% DEF |
| ATK SPD Bonus     | 10%        |
| Energy Cost       | 70         |
| Duration          | 11s        |
| CD                | 18s        |

</div>

**Notes**

* Converted Normal, Charged, and Plunging Attacks have the same Poise Damage and Impulse Type as the Physical counterparts.
* **Royal Descent: Behold, Itto the Evil!** snapshots DEF but does not shapshot Geo DMG or ATK.
  * Right after Gorou uses his Elemental Burst, if Itto is swapped in either with Alt + Num or manually he will consistently snapshot the buffs. This only happens when the ping is below 75ms, otherwise it's inconsistent, with a 53% success rate at 200\~350ms.
* Itto's converted attacks apply 1U Geo.
  * Itto's converted Normal and Charged Attacks have standard ICD.
* **Royal Descent: Behold, Itto the Evil!**'s duration can be extended through hitlag.
* **Royal Descent: Behold, Itto the Evil!** can expire in the middle of a CA string.
* Burst duration can significantly extend past its normal duration by doing an attack at the end of Burst. This extension ends immediately on any action after the final attack.
* Using **Royal Descent: Behold, Itto the Evil!** during N1 hitlag also gives **Superlative Strength** stacks.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Arataki_Itto.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />

**Notes**

* The extra wood obtained does not count towards daily 2000 tree cap.

</TabItem>

<TabItem value="a1" label="Ascension 1">
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

**Notes**

* The second part of **Stay a While and Listen Up** begins around 50 frames later than according to its description.

</TabItem>

<TabItem value="c2" label="C2">
<Constellation char={char} constellation={2} />

**Notes**

* Itto counts himself as a Geo party member.

</TabItem>

<TabItem value="c3" label="C3">
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value="c4" label="C4">
<Constellation char={char} constellation={4} />
</TabItem>

<TabItem value="c5" label="C5">
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* At C6, Itto can do an **Arataki Kesagiri Combo Slash** at 1 **Superlative Superstrength** stack as the C6 check is performed before the stack is consumed. C6 Itto cannot do an E>SCA Finisher combo.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/geo/arataki-itto.md')} />
