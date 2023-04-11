---
description: A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.
---

import char from '@site/src/data/characters/Nahida.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Nahida

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Nahida.png')} alt="Nahida's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Nahida Quick Guide](https://keqingmains.com/q/nahida-quickguide/)

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
| 1-Hit  | 68.52%    | 30     | 137.04%/s | 7.56         | 2            |
| 2-Hit  | 62.86%    | 22     | 171.44%/s | 6.93         | 2            |
| 3-Hit  | 77.99%    | 38     | 123.14%/s | 8.60         | 2            |
| 4-Hit  | 99.29%    | 71     | 83.91%/s  | 10.95        | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 224.4%    | 65     | 207.14%/s | 80           | 5            |

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

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* NA and CA ICDs are not shared.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Tap     | Hold    | Tri-Karma Purification   |
| :------------- | :------ | :------ | :----------------------- |
| DMG \(T9%\)    | 167.28% | 221.68% | 175.44% ATK + 350.88% EM |
| Particles      | 0       | 0       | 3 \(7s ICD\)             |
| GU             | 1U      | 1U      | 1.5U                     |
| ICD            | None    | None    | 1s                       |
| Snapshot       | Dynamic | Dynamic | Dynamic                  |
| Damage Element | Dendro  | Dendro  | Dendro                   |
| Damage Type    | Skill   | Skill   | Skill                    |
| Tick Rate      | -       | -       | 2.5s                     |
| Duration       | -       | -       | 25                       |
| CD             | 5       | 6       | -                        |
| Poise Damage   | 75      | 100     | 30                       |
| Impulse Type   | 2       | 2       | 2                        |

</div>

**Notes**

* **All Schemes to Know** initial hit and **Tri-Karma Purification** ICDs are not shared.
* **Tri-Karma Purification**:
  * Can be triggered by triggering a reaction after casting **All Schemes to Know** (including Second-stage Bloom reactions, reactions triggered by the environment or enemies, and re-applying Cryo or Hydro to a Frozen target).
  * Cannot be triggered by casting **All Schemes to Know** on an enemy with a pre-existing aura, Burning ticks, or re-applying Dendro.
* Upon casting **All Schemes to Know**, the initial hit deals Dendro DMG before the target is marked with the **Seed of Skandha**.
  * [Raiden's coordinated attack](../electro/raiden-shogun.md#attacks) hits after the enemies are marked.
* Up to 8 enemies can be marked with THE **Seed of Skandha** at a time, however, more than 8 can be marked and linked with multiple uses of **All Schemes to Know**.
* The hold version of  **All Schemes to Know** can mark inactive enemies (e.g. Ruin Guards) and "wake" them up, but the tap version cannot.
  * It can also mark enemies from behind Nahida, this is affected by the camera position.
  * It lifts Nahida, allowing her to float in the air and avoid getting hit by certain enemy attacks.
  * It can mark some "invisible" enemies but not others.
  * It can mark enemies through the terrain.
* Nahida gains *a lot* of Interruption Resistance, allowing her to tank things such as Explosive Barrels while holding her Skill.
* Aim speed is limited when using controllers, which affects how fast Nahida can spin during Hold E.
* The range of **All Schemes to Know** is about 9 meters for Press E and 26 meters for Hold E.
* [Fischl A4](../electro/fischl.md#ascension-passives) happens before Nahida E (at ~200ms ping).
* **Tri-Karma Purification** can be triggered by the Shatter reaction.
* Spiders cannot be marked with **All Schemes to Know**.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute     | Cast | Pyro                        | Electro                              | Hydro                                 |
| :------------ | :--- | :-------------------------- | :----------------------------------- | :------------------------------------ |
| Buffs \(T9%\) | -    | 25.3%/37.94%<br />DMG Bonus | 0.422s/0.632s<br />Interval Decrease | 5.685s/8.527s<br />Duration Extension |
| Snapshot      | -    | Snapshot                    | Snapshot                             | Snapshot                              |
| Energy Cost   | 15   | -                           | -                                    | -                                     |
| Duration      | 15   | -                           | -                                    | -                                     |
| Cooldown      | 13.5 | -                           | -                                    | -                                     |

</div>

**Notes**  

* Buffs are for 1 character and 2 characters respectively.
* Buffs snapshot but the EM bonus from A1 does not snapshot.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Nahida.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />

**Notes**

* Nahida can only collect up to 5 items at a time, enemies do not count.
* Both Tap and Hold E can collect harvestable items, although it is inconsistent.
  * Things that can be collected: Onikabutos, mushrooms from Shroomboars, seeds, etc.
  * Things that cannot be collected: ores, pigeons, Crystalflies, Dandelions, mimic Whopperflowers, etc.
* During quests, NPCs have different voice lines that are unvoiced.
* Hold E can reach harvestable items that are usually unreachable by the camera's vertical limit when aiming straight up or down before using Hold E.


</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* Snapshots EM value on-cast.
* The buff can be snapshotted for Amplifying Reactions.
* External sources of EM that **work** with A1:
  * [Staff of the Scarlet Sands](../../equipment/weapons/polearms.md#staff-of-the-scarlet-sands)
  * [4-Piece Gilded Dreams](../../equipment/artifacts.md#gilded-dreams) (EM)
  * [Cyno A4](../electro/cyno.md#ascension-passives)
  * [Dendro Traveler A4](traveler-dendro.md#ascension-passives)
  * [Tighnari A4](tighnari.md#ascension-passives)
  * [Yae Miko A4](../electro/yae-miko.md#ascension-passives)
* External sources of EM that **do not** work with A1:
  * [Hunter's Path](../../equipment/weapons/bows.md#hunters-bow)
  * [Key of Khaj-Nisut](../../equipment/weapons/swords.md#key-of-khaj-nisut)
  * [Xiphos' Moonlight](../../equipment/weapons/swords.md#xiphos-moonlight)
  * [Wandering Evenstar](../../equipment/weapons/catalysts.md#wandering-evenstar)
  * [Kazuha A4](../anemo/kaedehara-kazuha.md#ascension-passives)
  * [Sucrose A4](../anemo/sucrose.md#ascension-passives)

</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />

**Notes**

* A4 takes the DMG Bonus from A1 into account.
* A4 is dynamic and receptive to EM buffs.

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* C1 does not require the presence of an Element to add to the count.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* CRIT:
  * Dependent on the target, not the source attack.
  * Allows Bloom, Hyperbloom, and Burgeon to trigger the Favonius passive, but not Burning.
* DEF Shred:
  * Also applies to non-Electro non-Dendro damage.
  * Does not apply to the hit that triggers it.
  * It likely triggers under the condition of "a Catalyze [reaction is triggered on]/[aura is applied to] an enemy marked with a Seed of Skandha".
  * Persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

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

| Attribute      | Karmic Oblivion |
| :------------- | --------------- |
| GU             | 1U              |
| ICD            | Standard        |
| Damage Element | Dendro          |
| Damage Type    | Skill           |
| Poise Damage   | 30              |
| Impulse Type   | 2               |

**Notes**

* C6 is affected by the DMG Bonus from Nahida's Burst and A4.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/dendro/nahida.md')} />
