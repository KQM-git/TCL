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

| String | Talent 9%       | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 126.24%         | 26     | 291.32%/s | 13.92        | 2            |
| 2-Hit  | 119.45%         | 18     | 398.17%/s | 12.14        | 2            |
| 3-Hit  | 87.53% + 87.53% | 64     | 164.12%/s | 9.05 ×2      | 2 ×2         |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 224.54%   | 51     | 279.69%/s | 100          | Air, 0, 400  |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 3            |
| High Plunge DMG | 260.76%   | 100          | 4            |

</div>

**Notes**

* Wanderer's Normal Attacks and A4 can track teleporting enemies.
* Wanderer can stun the Aeonblight Drake and he gets knocked back mid-air when the it falls.
* If you hug an enemy, both hits of Wanderer's N3 will hit at the exact same frame.
* Wanderer's Plunge Attack doesn't startle NPCs.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill   | Kuugo: Fushoudan            | Kuugo: Toufukai            |
| :------------------------ | :------ | :-------------------------- | :------------------------- |
| DMG \(T9%\)               | 161.84% | 151.15% Normal Attack DMG   | 140.92% Charged Attack DMG |
| Particles                 | -       | 1 (-) per hit (2s ICD)      | 1 (-) per hit (2s ICD)     |
| GU                        | 1U      | 1U                          | 1U                         |
| ICD                       | None    | Standard                    | None                       |
| Snapshot                  |         | Dynamic                     | Dynamic                    |
| Damage Element            | Anemo   | Anemo                       | Anemo                      |
| Damage Type               | Skill   | Normal Attack               | Charged Attack             |
| Initial Kuugoryoku Points | 100     | -                           | -                          |
| CD                        | 6s      | -                           | -                          |
| Poise Damage              | 100     | 13.9164 / 12.1365 / 9.05 ×2 | 100                        |
| Impulse Type              | 3       | 3 / 3 / 3 ×2                | Air, 0, 600                |

</div>

| String                             | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :--------------------------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Kuugo: Fushoudan 1-Hit DMG         | 126.24%   | 30     | 252.48%/s | 13.9164      | 3            |
| Kuugo: Fushoudan 2-Hit DMG         | 119.45%   | 17     | 421.59%/s | 12.1365      | 3            |
| Kuugo: Fushoudan 3-Hit DMG         | 175.06%   | 54     | 194.51%/s | 9.05 x2      | 3 x2         |
| Kuugo: Toufukai Charged Attack DMG | 237.74%   | 54     | 264.16%/s | 100          | Air, 0, 600  |

**Notes**
* Interruption Resistance is highly increased while in Elemental Skill activation.
* Wanderer is immune to being frozen during his Elemental Skill's casting animation.
* **Windfavored** state lasts exactly 10 seconds if you stay still or only use normal attacks.
* Wanderer makes 1 particle on hit during his **Windfavored** state, with a 2s particle generation ICD.
* The **Windfavored** state allows Stamina to regenerate in the background.
* Wanderer can move/strafe slowly in any direction while attacking, at no extra Kuugoryoku Points cost.
* Wanderer can extend his Windfavored state by performing a Charged Attack just as his Kuugoryoku Points run out.
* There are large differences in the horizontal distance gained based on how you input sprint during Wanderer's Windfavored state.
    * From worst to best distance gained: spamming sprint, holding sprint, holding sprint and tap sprint at the end for extension, normal flight and tap sprint at the end for extension.
* **Windfavored** state expiry can disrupt the casting of his N3.
* Wanderer can generate particles from his Windfavored state and possibly proc A4 if his Elemental Skill was cast while the attack is in the air.
* Wanderer can gain more height during his **Windfavored** state from holding Jump than tapping. This is done by releasing Jump before the ticking consumption for ascending begins.
* Wanderer's Kuugoryuku Point drain rate while dashing and ascending is dependent on the client's frame rate. A higher frame rate will result in a higher drain rate.
    * Hover has no difference, while holding dash or jump have relevant differences.
* Effects that modify the consumption of stamina points do not alter the consumption of Wanderer’s Kuugoryoku Points.
* When Wanderer exits the Windfavored State and still has Kuugoryoku Points, he won’t be able to bounce on Bouncy Mushrooms. Otherwise, if he runs out of Kuugoryoku Points, he will bounce off the Bouncy Mushrooms.  

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst       |
| :---------------- | :---------- |
| Burst DMG \(T9%\) | 250.24% ×5  |
| GU                | 1U          |
| ICD               | Standard    |
| Snapshot          | Snapshot    |
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

import charFrames from '@site/src/data/frames/Wanderer.json'
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

**Notes**
* Absorption priority: Pyro > Hydro > Electro > Cryo.
* Wanderer can absorb Pyro from Guoba.
* Buff indicators disappear visually at around 5 seconds into the **Windfavored** state, but the buffs remain.
* Elemental Skill cast absorbs Elements applied to yourself, but does not cleanse them.

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

| Attribute      | A4         |
| :------------- | :--------- |
| GU             | 1U         |
| ICD            | 1s         |
| Snapshot       | Snapshot   |
| Damage Element | Anemo      |
| Damage Type    | Wind Arrow |
| Poise Damage   | 15         |
| Impulse Type   | 1          |

**Notes**
* Wanderer's A4 passive trigger and point consumption is client-side. The check for when Wanderer runs out of points is server-side.
* Wanderer can gain the Descent effect and simultaneously fire off its arrows during a sprint animation. However, he does not benefit from the point reduction, i.e. he spends points to sprint (as this is deducted at the start of his sprint).
* Wanderer will not fire the wind arrows from his A4 if he dashes more than 590 frames (at 60fps) after entering his Windfavored state. The cutoff frame is not ping-dependent.

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
