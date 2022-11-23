---
description: Captain of her crew, The Crux. She's quite an unbound and forthright woman.
---

import char from '@site/src/data/characters/Beidou.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Beidou

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Beidou.png')} alt="Beidou's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Beidou Mains Discord](https://discord.gg/rgS2f9dBxb)
* [Full Beidou Written Guide: Tales from the Sea](https://keqingmains.com/beidou/)
* [6 Minute Video Guide to Beidou](https://youtu.be/AWlLidtFiDw)

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
| 1-Hit  | 130.67%   | 41     | 191.22%/s | 85.67        | 3            |
| 2-Hit  | 130.19%   | 47     | 166.20%/s | 85.33        | 3            |
| 3-Hit  | 162.27%   | 64     | 152.13%/s | 106.37       | 3            |
| 4-Hit  | 158.95%   | 46     | 207.33%/s | 104.19       | 3            |
| 5-Hit  | 206.03%   | 108    | 114.46%/s | 135.12       | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String       | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG | 103.33%   | ?      | ?         | 60           | 3            |
| Final DMG    | 187.07%   | ?      | ?         | 120          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge Impact   | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* C0-C3 Beidou's should use N4 cancels or N5 dash cancels.
* Beidou's normal attack string concludes with a kick to the sword with her foot. Whether her model makes contact with the claymore depends on the model size of the claymore. We can conclude that it is intended to be a kick to the claymore because a sound will play no matter what model size the claymore.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                      | Tap     | Hold                             |
| :----------------------------- | :------ | :------------------------------- |
| Base DMG \(T9%\)               | 206.72% | 206.72%                          |
| DMG Bonus on Hit Taken \(T9%\) | -       | 272% \(scaling\)                 |
| Particles                      | 2       | 2 ~ 4 \(see note\)               |
| GU                             | 2B      | 2B                               |
| ICD                            | None    | None                             |
| Snapshot                       | Dynamic | Dynamic                          |
| Damage Element                 | Electro | Electro                          |
| Damage Type                    | Skill   | Skill                            |
| Duration                       | -       | upto 3s                          |
| CD                             | 7.5s    | 7.5s                             |
| Poise Damage                   | 100     | 1 stack: 200 <br/> 2 stacks: 300 |
| Impulse Type                   | 4       | 1 stack: 4 <br/> 2 stacks: 6     |

</div>

| Attribute      | Shield \(Talent 9%\) |
| :------------- | :------------------- |
| Scaling        | 24.48% Max HP + 2819 |
| Elemental Type | Electro              |
| Duration       | Hold Duration        |

**Notes**

* **Tidecaller** will produce minimum 2 Particles, if you get hit once while holding \(one charge\) it produces 3 Particles and if you get hit two times \(two charges\) or perform a **perfect parry** it will produce 4 Particles.
* Beidou can perfect counter shots from the Inazuma Kamuijima Cannons.
* The counter has 0/1 startup frames, depending on whether your input is registered immediately or with a 1 frame delay. [Vault Entry](../../evidence/characters/electro/beidou.md#beidou-counter-startup)
* **Tidecaller** counter scaling information is tabulated in the table below.
* Beidou applies 1U of Electro to herself for 2 seconds when she uses **Tidecaller**. After that the Electro aura will decay.

| Tidecaller DMG Bonus     | Talent 9% | Particles |
| :----------------------- | :-------- | :-------- |
| 0 Stacks                 | 206.72%   | 2         |
| 1 Stack                  | 478.72%   | 3         |
| 2 Stacks / Perfect Parry | 750.72%   | 4         |

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst           | Lightning Discharge |
| :---------------- | :-------------- | :------------------ |
| Burst DMG \(T9%\) | 206.72%         | 163.2%              |
| Lightning Bounces | -               | 2                   |
| DMG Reduction     | 32% \(scaling\) | -                   |
| GU                | 4C              | 1A                  |
| ICD               | -               | 3 hit / 2.5s        |
| Snapshot          | Snapshot        | Snapshot            |
| Damage Element    | Electro         | Electro             |
| Damage Type       | Burst           | Burst               |
| Energy Cost       | 80              | -                   |
| Duration          | 15s             | 15s                 |
| Cooldown          | 20s             | 1s                  |
| Poise Damage      | 400             | 50                  |
| Impulse Type      | 4               | 1                   |

</div>

**Notes**

* Beidou's **lightning discharges** have 3 damage instances with 2 targets or more.
* **Stormbreaker**'s additional arc lightning can jump back to the initial target.
* The counter for the cooldown does not start on when Beidou's lightning discharge hits, but when the normal attack hits. Hence, the discharge CD can be randomly and inconsistently affected by ping spikes and is not consistently 1 second. - [Vault Entry](../../evidence/characters/electro/beidou.md#beidou-lightning-proc-cd)
* **Lightning discharge** can bounce off Mitachurl Shields but will deal no damage.
* Snapshot on cast.
  * However, if you swap to Beidou and cast her Burst too quick (Left Alt + Switch Character), her Lightning DMG might fail to snapshot certain buffs.
* The **lightning discharge's** have a range limit, starting from the character attacking, that is calculated after the attack hits and is not affected by travel time.
* The attacker must be on field when the attack hits to proc a **lightning discharge.**
* An extensive collection of proc counts for **Stormbreaker** using different attack strings on different characters can be found [here.](../../evidence/characters/electro/beidou.md#beidou-proc-counts)
* At high ping, Beidou can buffer a Normal Attack hit before activating Q to get a **lightning discharge**.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Beidou.json'
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
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />

| Attribute      | Stunning Revenge |
| -------------- | ---------------- |
| Skill DMG      | 20%              |
| GU             | 1A               |
| ICD            | 3 hit / 2.5s     |
| Damage Element | Electro          |
| Damage Type    | None             |
| Poise Damage   | 30               |
| Impulse Type   | 0                |

**Notes**

* **Stunning Revenge** DMG has 3 hit / 2.5s ICD and shares ICD on Normal Attack, Charged Attack and with **Stormbreaker**'s **lightning discharges**.
* Use N2 cancels to maximize Electro DMG.
* C4 can be activated by certain teammate's hit, e.g., Kujou Sara's Tengou Juurai.
* C4 is activated on hit, regardless taking damage or not. So it can be activated through shields, either her own or allies'.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* The range of this effect is extremely short at just over 1 abyss tile of range.
* The initial cast of Beidou's Burst doesn't benefit from her C6.
* The debuff lingers for about 2 seconds after the Burst ends.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/beidou.md')} />
