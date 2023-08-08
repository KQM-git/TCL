---
description: A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongst her fellow Eremites.
---

import char from '@site/src/data/characters/Dehya.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Dehya

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Dehya.png')} alt="Dehya's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Dehya Quick Guide](https://keqingmains.com/q/dehya-quickguide/)

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


| String | Talent 9%  | Frames | MV/s      | Poise Damage | Impulse Type  |
| :----- | :--------- | :----- | :-------- | :----------- | :------------ |
| 1-Hit  |   114.12%  |   41   | 167%/s    |    93.33     |       3       |
| 2-Hit  |   113.37%  |   44   | 154.6%/s  |    92.72     |       3       |
| 3-Hit  |   140.79%  |   53   | 159.38%/s |    115.14    |       4       |
| 4-Hit  |   175.07%  |   96   | 109.42%/s |    143.17    | Air, 400, 800 |


</div>


<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String       | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :--- | :----------- | :----------- |
| Spinning DMG |  103.49%  |    ?   |   ?  | 60           | 3            |
| Final DMG    |  187.07%  |    ?   |   ?  | 120          | 6            |
| Stamina Cost |    40/s   | -      | -    | -            | -            |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |   137.03  |     35       |       2      |
| Low Plunge DMG  |   274.01  |     150      |       4      |
| High Plunge DMG |   342.25  |     200      |       7      |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Dehya's N3 does not knock back unlike what was advertised in the trailer, and so the combo weaves together properly.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Indomitable Flame       | Ranging Flame      | Fiery Sanctum Field         |
| :------------- | :---------------------- | :----------------- | :-------------------------- |
| DMG \(T9%\)    |         191.90%         |      225.76%       | 102.34% ATK + 1.75% Max HP  | 
| Particles      |         -               |      -             |         3 (-)               |
| GU             |         1U              |      1U            |         1U                  |
| ICD            |         None            |      None          |         None                |
| Snapshot       |         Snapshot        |      Snapshot      |         Snapshot            |
| Damage Element |         Pyro            |      Pyro          |         Pyro                |
| Damage Type    |         Skill           |      Skill         |         Skill               |
| Duration       |         -               |      -             |         12s                 |
| CD             |         20s             |      20s           |         20s                 |
| Poise Damage   |         50              |      50            |         50                  |
| Impulse Type   |         4               |      Air, 100, 600 |         2                   |


</div>


**Notes**

* Dehya's Skill is not ping affected.
* Dehya's coordinated attack from **Fiery Sanctum** is centered on enemy hitboxes and has a small AoE.
* Dehya only generates skill particles on **Fiery Sanctum** tick, not on cast/recast. Each tick will generate 1 Pyro energy particle.
* On-character shields mitigate **Fiery Sanctum** bleed damage.
* Dehya's **Fiery Sanctum** mitigates True DMG.
* Dehya's **Fiery Sanctum** damage mitigation does not mitigate corrosion.
* Dehya's **Fiery Sanctum** is weightless, hence doesn't work on pressure plates.
* Dehya's Redmane damage is determined dynamically.
* Follow-up Attacks from Dehya’s **Fiery Sanctum** are capable of proccing Sacrificial Greatsword's passive. 

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>



| Attribute         | Flame-Mane's Fist        | Incineration Drive       |
| :---------------- | :----------------------- | :----------------------  |
| DMG \(T9%\)       | 167.79% ATK+2.88% Max HP | 236.81% ATK+4.06% Max HP |
| GU                |     1U                   |       1U                 |
| ICD               |     3 hits/2.5s          |       None               |
| Snapshot          |     Dynamic              |       Dynamic            |
| Damage Element    |     Pyro                 |       Pyro               |
| Damage Type       |     Burst                |       Burst              |
| Energy Cost       |     70                   |       70                 |
| Duration          |     4s                   |       -                  |
| Cooldown          |     18s                  |       18s                |
| Poise Damage      |     50                   |       100                |
| Impulse Type      |     Heavy, 250, 0        |       Air, 100, 900      |


</div>

**Notes**

* If Dehya jumps during her burst, the burst prematurely ends.
* Teleporting during Dehya's burst doesn't prematurely end it.
* Dehya burst hits are heavy attacks and thus Shatter against frozen enemies.
* Dehya's Burst attacks do not latch onto the overground hitbox of Azhdaha. It is presumed that it’s trying to hit the underground hitbox instead.
* Dehya's burst Fist phase can be skipped into Incineration Drive, by pressing Dash -> Jump.
    * Dehya's burst early Incineration Drive tech places the Fiery Sanctum before the kick damage instance happens, this potentially leads to doing coordinated dmg with Incineration Drive DMG itself, unlike in regular case. This can be also done just after last punch done in her burst.
*  Dehya burst does not reach the center of Venti burst.  

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Dehya.json'
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

**Notes**

* Dehya C2 will trigger from her own Redmane damage. Only 1 hit taken can keep uptime of C2's damage increase.

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

<Card item={require('../../evidence/characters/pyro/dehya.md')} />
