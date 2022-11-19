---
description: The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.
---

import char from '@site/src/data/characters/Jean.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Jean

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Jean.png')} alt="Jean's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Jean Mains Discord](https://discord.gg/fSw9xXSyTe)
* [Jean Written Guide: Commanding the Dandelion Knight](https://keqingmains.com/jean/)

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
| 1-Hit  | 88.80%    | 28     | 190.29%/s | 37.8         | 3            |
| 2-Hit  | 83.74%    | 20     | 251.22%/s | 35.1         | 3            |
| 3-Hit  | 110.76%   | 36     | 184.60%/s | 48.6         | 3            |
| 4-Hit  | 121.03%   | 52     | 139.65%/s | 54           | 3            |
| 5-Hit  | 145.52%   | 80     | 109.14%/s | 60.3         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 297.67%   | 56     | 318.93%/s | 200          | Air, 0, 1050 |

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

* The Charged Attack visual and audio effect will appear on more than just enemies, as well as even appearing on enemies that don't get lifted at all.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 496.40%     |
| Particles         | 2~3 \(1:2\) |
| GU                | 2U          |
| ICD               | None        |
| Snapshot          | Dynamic     |
| Damage Element    | Anemo       |
| Damage Type       | Skill       |
| Max Duration      | 5s          |
| CD                | 6s          |
| Poise Damage      | 250         |
| Impulse Type      | 9           |

</div>

**Notes**

* Costs 20 stamina per second to hold.
* Enemies launched by **Gale Blade** can incur fall damage against the ground or walls.
  * Fall damage is based on a percentage of enemy health making it very useful against enemies with high health and low interruption resistance.
* While Jean cannot move you can move the camera to change where you are aiming with the blade.
* To be able to lift an enemy, Jean's level must be no more than 20 levels below the enemy's level.
* Fall damage for the hold variant can vary somewhat arbitrarily, as enemies held in **Gale Blade** will not be held completely still.
* If **Gale Blade** \(E\) is held while looking down on falling enemies, they can take fall damage before being launched up again for a second instance of fall damage.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                     | Burst              |
| :---------------------------- | :----------------- |
| Burst DMG \(T9%\)             | 722.16%            |
| Field Enter/Exit DMG \(T9%\)  | 133.28%            |
| Burst Healing \(T9%\)         | 427.04% ATK + 3132 |
| Continuous Healing \(T9%\)    | 42.7% ATK + 313    |
| GU                            | 2U                 |
| ICD                           | None               |
| Snapshot                      | Snapshots          |
| Damage Element                | Anemo              |
| Damage Type                   | Burst              |
| Energy Cost                   | 80                 |
| Duration                      | 10s                |
| CD                            | 20s                |
| Burst Poise Damage            | 400                |
| Burst Impulse Type            | 4                  |
| Field Enter/Exit Poise Damage | 50                 |
| Field Enter/Exit Impulse Type | 2                  |

</div>

**Notes**

* Cast also knocks away light enemies.
* The **Dandelion Field** deals Anemo damage to enemies crossing the border of the field.
* **Dandelion Breeze** deals Field Enter/Exit DMG to enemies within its AoE on initial cast and when the duration of the **Dandelion Field** ends.
* Heals and applies Anemo continuously to the active character inside the field cleansing debuffs.
  * The continuous swirling of auras allows elements to spread to surrounding opponents when self-afflicted with an Element.
  * With precise timing, Anemo can be the aura for self-swirls occasionally.
  * This self-swirl interaction does not count as a reaction for Freedom\-Sworn Passive stacks and 4-Piece Instructor set effect.
  * In Sunfire \(when Jean's Burst and Bennett's Burst overlap\), if Jean triggers Overload the Freedom\-Sworn Passive will be activated.
  * In Sunfire, Bennett can trigger the 4-Piece VV effect set himself if he's the triggerer of Sunfire self-swirl.
* If Jean casts her Burst right before the Final Calamity begins during the Raiden Shogun weekly boss fight, the Dandelion Breeze field exit damage at end of Burst duration will proc Electro Swirl off of invisible Raiden Shogun's shield.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Jean.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* This buff does not stack with itself.

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

<Card item={require('../../evidence/characters/anemo/jean.md')} />
