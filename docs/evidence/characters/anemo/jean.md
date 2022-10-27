---
search: false
---

# Jean

**Main Page:**

<Card item={require('../../../characters/anemo/jean.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1KQB8VOEyaCsRa3QulF-gAq3a1CxsqiauTNYuK2_paMY/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675

## Attack Mechanics

### Jean CA Visual Effect

**By:** ASnowOwI\#7234  
**Added:** <Version date="2021-12-30" />  
**Last tested:** <VersionHl date="2021-12-30" />

**Finding:** Jean's CA visual and audio effect will appear on more than just enemies, as well as even appearing on enemies that don't get lifted at all.

**Evidence:**

* Torch: [Youtube](https://youtu.be/URAVSQvPUCs)
* Ruin Guard: [Youtube](https://youtu.be/ZzQ-FhWjO3w)
* Haybales and Cooking Pot: [Youtube](https://youtu.be/KHEDUlbdGvQ)
* Parametric Transformer (activated and not activated):
  * [Youtube](https://youtu.be/nK5wto4WbVA)
  * [Youtube](https://youtu.be/pknsfrRqW_o)

**Significance:** Fluff.

## Skill Mechanics

### Gale Blade's Pull effect's Dependence on Level Difference

**By:** Michael/mSoo\#1561

**Theory:**  
Tested this with Jean level by level. For Gale Blade to continually be able to pull opponents, it seems a level difference below or equal to 20 is required.

**Evidence:**

* [Lvl 74 Jean vs lvl 95 Hillichurl, where target Hilichurl isn't lifted](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/jean.md/discord/attachments_765191980115689542_794809136244195339_unknown.png)
* [Lvl 75 Jean vs lvl 95 Hillichurl, where target Hilichurl is lifted](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/jean.md/discord/attachments_765191980115689542_794809333057454091_unknown.png)

**Significance:**  
Leveling your Jean to 80 is necessary if you want to abuse fall damage on Level 100 enemies on Floor 12 of Spiral Abyss

### Fall Damage Basis from Gale Blade

**By:** Wrax\#7777  
**Added:** <Version date="2020-12-01" />  
**Last tested:** <VersionHl date="2020-12-01" />

**Theory:**  
The damage caused by Jean's Elemental Skill, Gale Blade, from falling is a percent based on the target maximum health. These percentage value ranges are based on velocity of the fall rather than the height.

**Evidence:**  
For the two below clips, we are comparing the damages dealt for simply pulling them to the ground after Jean's Charged Attack, and for when they are flung high up in the air with Jean's Elemental Skill.

* [Lvl 69 Hilichurl](https://youtu.be/fG90rk8K6-U)
  * Damage of 2.2k, for pulling the target to the ground after Jean's Charged Attack
  * Damage of 2.1k, for flinging the target high up in the air with Gale Blade
* [Lvl 70 Fatui Cicin Mage](https://youtu.be/EYO5-SCBH7Q) 13.4k, 12.5k
  * Damage of 13.4k, for pulling the target to the ground after Jean's Charged Attack
  * Damage of 12.5k, for flinging the target high up in the air with Gale Blade

In the clip below, the second time Gale Blade is used, the target flew and was thrown at a slight arc rather than straight up. This resulted in reduced damage.

* [Lvl 90 Fatui Cicin Mage \(in Midsummer domain\)](https://youtu.be/v0ShwTzt9Fg)
  * Damage of 39.4k, for pulling the target to the ground after Jean's Charged Attack
  * Damage of 22.9k, for flinging the target at an arc with Gale Blade

I believe that the large gap in damage is sufficient evidence to claim that the slam/fall damage is a percentage based on the target's maximum health. Damage isn't boosted by Superconduct.

* [Evidence that its based on max hp](https://youtu.be/B1a3mCpDGkc)
  * Damage of 57k in the beginning when target had full hp
  * Damage of 53k at the end when target had only a sliver of health

**Significance:**

* Pulling the target to the ground using Gale Blade rather than launching them results in similar damage applied faster.
* If choosing to launch target for crowd-control reasons, then make sure that the target is sent straight up in order to inflict the most damage.

### Jean Hold E Fall Damage Inconsistent

**By:** xf3\#3123 and Zeitraffer\#1074  
**Added:** <Version date="2021-04-23" />  
**Last tested:** <VersionHl date="2021-04-23" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_830897860743921664_835374730487398460_transcript-gale-blade-fall-dmg-inconsistency.html)

**Findings:**  
Jean's Held Gale Blade produces inconsistent fall damage numbers when compared to Tap Gale Blade. Fall Damage on enemies is inconsistent while fall damage on objects is not.

**Evidence:**  
[Spreadsheet](https://docs.google.com/spreadsheets/d/1_PrFk3jhc-vsoz66z4z61DJ_ZvYajBMvchFOxlhuvM0/edit#gid=0)

Jean's Gale Blade: "At the cost of continued stamina consumption, Jean can command the whirlwind to pull surrounding opponents and objects towards her front."

In the sheet, there are two tests, one for Gale Blade on Baron Bunny and on an Abyss Mage with a video demonstration of the method used.

For the Baron Bunny tests, Held Gale Blade produced slightly inconsistent fall damage numbers compared to Tap Gale Blade's consistent numbers. For the Abyss Mage tests, both variations of Gale Blade produced inconsistent numbers, however, the disparity for Held Gale Blade's numbers were far greater than Tap Gale Blade's numbers.

The inconsistent fall damage from the Held version of Gale Blade is likely to be something caused by the small disturbances happening while holding a target. As such it can also be negated by simply doing a Sucrose Counter Yeet \(yes, I called it that\) which will force the target to come crashing down at maximum speed which will remove the massive inconsistencies of a normal Jean Yeet.  
[Example](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/jean.md/discord/attachments_830897860743921664_835099004857483274_Jean_Yeet_Test_Results.mp4)

**Significance:**  
Illustrates that Jean's Held Gale Blade produces inconsistent numbers compared to Tap Gale Blade. Jean players, and likely other fall damage abusers, will have to take this into consideration for their strategies as it could effect abyss runs against lightweight enemies. So far, the most likely reason is how Jean's Held Gale Blade holds enemies in front of her, causing small changes in velocity/height. Other reasons would be tied to how fall damage as a whole works, relating to velocity, hitbox collision, landing angle, etc.

_Additional Notes:_  
Further proves that fall damage is based on velocity, not height \(however greater height causes more acceleration\). Also proves that objects \(such as Baron Bunny\) have different hitboxes than enemies when calculating fall damage. Also, some instances of fall damage are drastically lower. This is likely due to a bug.

### Fall Damage Is Influenced By Poise

**By:** ColaSenami\#5312  
**Added:** <Version date="2021-06-20" />  
**Last tested:** <VersionHl date="2021-06-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_850586648760549377_856383288956813342_transcript-jean-fall-dmg-60-pct-better-stagger.html)

**Finding:**  
The velocity from fall dmg can be influenced by interrupt resist or poise, and can increase fall dmg to 160%.

**Evidence:**  
Original clip is from xf3, then made to edit to make it side by side. In the video below it shows an abyss mage with 0 poise (stunned/staggered) vs an abyss mage with 2.25 poise. mage at 0 poise was launched at higher velocity than the mage who is dancing. This is easily reproducible.  
[Video](https://www.youtube.com/watch?v=eVPetqEeJU4)

**Significance:**  
Before launching an opponent with Jean E, reduce its poise to 0 and stagger them first, then watch your fall dmg hit higher numbers.

## Burst Mechanics

* Dandelion Field & Border Entering/Exiting DMG gauge is 2U - Luci\#4980
  * [Burst Field is 2U](https://youtu.be/huQYjQoqFnI)
  * [Burst Border is 2U](https://youtu.be/ivneYMlnblE)
  * [Jean burst clearing 1A Aloy charged shot](https://youtu.be/vN9gsLFd9MA)

### Continuous Self-Swirl and Cleanse

**By:** KDacus\#2865  
**Added:** <Version date="2021-03-21" />  
**Last tested:** <VersionHl date="2021-03-21" />

**Findings:**  
Jean's Elemental Burst, Dandelion Breeze, repeatedly Swirls every character in the area if they have an Aura element on them. Should the same character stand on Bennett's Elemental Burst, Fantastic Voyage, it will trigger a Swirl reaction every second and apply Pyro to all surrounding enemies.

**Evidence:**  
[YouTube](https://youtu.be/f-fzwDOYL6I)

**Significance:**  
Very consistent aura application. Can be used for Cryo or Hydro main carries or Overload setups in conjunction with Bennett.

### Anemo Aura

**By:** ProfHugo\#6478  
**Added:** <Version date="2021-06-14" />  
**Last tested:** <VersionHl date="2021-06-14" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_853336250898579476_854032596726972456_transcript-anemo-aura.html)

**Finding:**  
Anemo can be the aura for swirl during Bennett-Jean Sunfire under very specific circumstances

**Evidence:**  
[YouTube](https://youtu.be/ZEQdmWjMBNM?t=16)

At 0:16-0:17, Bennett's Q applied pyro shortly after Jean Q applied anemo on the active character (Kaeya). This caused Bennett to become the trigger for swirl, causing a sunfire pulse which was vaporized for 2244 pyro damage, even though Jean has 0 EM (Bennett had 141 EM in this run). A subsequent vaporized Surefire pulse at 0:21 dealt 872 damage, which was the expected amount if Jean is the trigger.

Though there isn't currently a known method for reliably reproducing this phenomenon, it is near certain that the conditions required to replicate this involves swapping characters while under both Bennett Q and Jean Q such that Jean's Q applies anemo right before Bennett's Q applies pyro on the active character.

**Significance:**  
This is the second known scenario where anemo is not the trigger of a swirl reaction, but rather is the aura of one (the first being the Anemo Hypostasis). For sunfire specifically, this could substantially reduce the damage of a chain reacted sunfire pulse. This also implies that certain sources of anemo can cause a unit other than the Anemo Hypostasis to have a reactable amount of anemo aura

Lastly, it debunks the common belief that anemo cannot be the aura for a swirl reaction (though the behavior of the Anemo Hypostasis already serves as limited proof)

### Jean Burst Border Damage on Initial Cast and Duration End

**By:** Maes\#6425  
**Added:** <Version date="2022-01-10" />  
**Last tested:** <VersionHl date="2022-01-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926758212236087337_929999851922538526_transcript-jean-burst-border-dmg-on-initial-cast-and-duration-end.html)

**Finding:**  
Jean’s Elemental Burst, **Dandelion Breeze**, deals Border DMG to enemies within its AOE on initial cast and when the duration of the dandelion field ends. If an enemy enters the field after initial cast or leaves the field before the duration ends \(voluntarily or involuntarily\), an instance of Border DMG is dealt to said enemy. With enough aura on enemies or well-timed elemental application, the initial burst cast can cause 2 swirl instances \(1 from initial Burst DMG, 1 from Border DMG\).

**Evidence:**

* [Border DMG on initial cast and end + Border DMG upon late entry](https://youtu.be/dPsG4YhLqIQ)
* [Border DMG upon premature exit](https://youtu.be/7SoQ6IHyM70)
* [2 swirls on initial cast](https://youtu.be/du8J0Rj2GRQ)
  * [w/ Fischl & Raiden](https://youtu.be/33JEdrSlgYI)

**Significance:**  
Finding is somewhat significant for team damage calculations. This gives Jean slightly higher damage contribution through 2 guaranteed instances of Border DMG and additional swirl instances \(where applicable\). Additionally, team rotations with Jean that depend on certain auras on enemies for setups should also consider these additional damage instances as they can potentially deplete auras.

### Anemo Aura Continued

**By:** ProfHugo\#6478  
**Added:** <Version date="2022-07-21" />  
**Last tested:** <VersionHl date="2022-07-21" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/anemo-aura-continued-950255566389915728-1658431198969)

**Finding:**  
Finding 1: For Jean Q -> Bennett Q, the approximate timing for ensuring that Bennett becomes the trigger of Sunfire self swirl at 80ms ping is from ~2.035s to ~2.065s from pressing Q on Jean to pressing Q on Bennett.  
Finding 2: Bennett can trigger VV if he's the trigger of Sunfire self swirl

**Evidence:**  
Example clip: [YouTube](https://youtu.be/EZ1gvuLaYCw)  
Macro for testing: [Imgur](https://imgur.com/xEK5hta)  
Bennett statpage (Iron Sting): [Imgur](https://imgur.com/gbvpMOO), [Imgur](https://imgur.com/3obY33q)  
Jean statpage (Festering Desire): [Imgur](https://imgur.com/maXHeli), [Imgur](https://imgur.com/2RbmA4s)

**Significance:**  
4VV Bennett viable yahooooooooooooooooooooooooo

## Constellation Mechanics

### Jean's C4 Verticality

**By:** Special\#1775  
**Added:** <Version date="2020-11-24" />  
**Last tested:** <VersionHl date="2020-11-24" />

**Findings:**  
Jean's fourth constellation has the following effect:  
_"Within the Field created by Dandelion Breeze, all opponents have their Anemo RES decreased by 40%."_  
The Anemo Resistance reduction component of this constellation still applies vertically even if her Elemental Burst misses enemies on Venti's Elemental Burst

**Evidence:**  
[YouTube](https://youtu.be/3deF3geFYdE)

**Significance:**  
The reach of Dandelion Breeze's damage component has a vertical limit but the effects of it can reach much further. Thus, has potential combination for Xiao midair strikes.

## Synergies/Interactions

### Interaction Between Jean Sunfire And Freedom\-Sworn

**By:** Vye\#9195  
**Added:** <Version date="2022-01-28" />  
**Last tested:** <VersionHl date="2022-01-28" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_933279462974427176_936416305064595496_transcript-interaction-between-jean-sunfire-and-freedom-sworn.html)

**Finding:**  
"Sunfire" is the interaction between Jean Q and Bennett Q. In this scenario Jean selfswirls the pyro applied to her by Bennett Q to damage the enemy. The damage is affected by EM which makes it a viable strategy to build EM/EM/EM on Jean in a comp using "Sunfire". Please note that under specific circumstances "Sunfire" can also have anemo aura as explained in this [TCL entry](#anemo-aura).

This entry will explain the interaction between Sunfire and the weapon Freedom\-Sworn for Jean. The self swirl interaction of "Sunfire" does not count as a reaction for Freedom\-Sworn Passive stacks. This is the same problem that 4pc Instructor set has, explored in this [TCL entry](../../equipment/artifacts.md#instructor-ignores-environmental-target-and-your-characters).

**Evidence:**

* [Sunfire on-field no FS](https://www.youtube.com/watch?v=SiDWp14tLHs)
* [Sunfire off-field no FS](https://www.youtube.com/watch?v=g3c3bO98bIw)
* [Sunfire 2+ targets](https://www.youtube.com/watch?v=FzsSGLi_ToU)

**Significance:**  
This limits the use of Freedom\-Sworn on Jean significantly in certain comps. A prominent example would be Raiden Hyper (Raiden | buffer | Jean | Bennett) among others. Sunfire itself cannot be used to proc the passive. Players need to do EQ or QE and both abilities need to proc a reaction of an enemy directly for Freedom Sworn to activate.

The number of targets does not matter because only the initial hit and the ending hit of Jeans Q count for the Freedom\-Sworn Passive. Due to the cooldown in gaining stacks which is 0.5s across all refines for the weapon you cannot gain 2 stacks from the reaction of the initial Jean Q hit.

### Sunfire Jean OL Triggering Freedom\-Sworn

**By:** MeiMay\#3039  
**Added:** <Version date="2022-03-29" />  
**Last tested:** <VersionHl date="2022-03-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958491081933221908_transcript-sunfire-jean-ol-triggering-fs.html)

**Finding:**  
Sunfire Jean triggering off-field Overloads during her Burst can trigger the Freedom-Sworn \(FS\) Passive. This is primarily relevant in Raiden Hyper teams.

**Evidence:**  
Here is the Passive being activated with Jean EQ, as already established:

* [Video](https://i.imgur.com/BzPnp5R.mp4)

Below are two instances of off-field FS activation via OL occuring in Abyss 12\-2 against two Ruin Graders:

* [Video 1](https://i.imgur.com/U6BCcIO.mp4)
* [Video 2](https://i.imgur.com/OMqYjXr.mp4)

Here is a recording of the run from the beginning to confirm testing integrity:

* [Video](https://i.imgur.com/7N7SBlS.mp4)

However, the OLs from Sunfire Jean \(and hence the activation of the FS Passive\) seem to be inconsistent in Raiden Hyper. In the two below videos, the FS Passive did not trigger because Jean did not trigger a single Overload throughout her Q:

* [Video 1](https://i.imgur.com/LO8OvXI.mp4)
* [Video 2](https://i.imgur.com/Lt8Bkn8.mp4)

**Significance:**  
It's not always the end of the world if you forget to EQ with Jean to activate Freedom-Sworn in Raiden teams; the Passive may still activate during the rest of her Burst. Also somewhat relevant if the enemies are knocked back by OL and your E misses.
