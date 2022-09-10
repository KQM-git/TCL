---
search: false
---

# Venti

**Main Page:**

{% page-ref page="../../../characters/anemo/venti.md" %}

## Skill Mechanics

Tap E ICD: None - [Video](https://youtu.be/IiD4gj7NZZQ) - Bobrokrot\#0111  

### Venti autoattack after elemental skill faster switching

**By:** sexyeboy69\#3215  
**Added:** 2021-05-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834085780611137607_845831330662187028_transcript-venti-autoattack-after-skill-faster-switching.html)

**Finding:** Doing an auto attack as soon as possible after using Venti's e allows the user to swap to a different character faster.

**Evidence:** [Video](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/venti.md/discord/attachments_834085780611137607_842113118805295134_Venti-E-N-Swap.mp4)

**Significance:** Allows you to save a second of animation time when switching character after using Venti's elemental skill.  

### Venti 10 Frame Elemental Skill

**By:** Charliex3000#9403  
**Added:** 2021-10-18  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_894423798416310304_899832505866289192_transcript-10-frame-venti-e.html)

**Finding:** Venti Elemental Skill can consistently be cancelled at 10 frames.

**Evidence:** [YouTube](https://youtu.be/PWJ7Z-Gb-KE)  
The inputs are: Hold E for 9 frames. Release E. Press Q.  

**Significance:** Saves around 10 frames on E-Q combo (20 frames E -> 10 frames E).  

### Venti CA Skill Cancel

**By:** BowTae\#0141  
**Added:** 2022-04-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_964968100883726397_transcript-venti-ca-e-cancel.html)  

**Finding:**  
Using Venti Tap Elemental Skill immediately after shooting a non-ARCC Charged Attack will reduce essentially all of his Skill's animation frames.  

**Evidence:**  
[Original discovery by Turtlemaster3000 V.2](https://youtu.be/O587rUzfJao)  
* You do not need to mash Skill to do this, you just need to tap Skill once immediately after Venti exits Aim mode.  

This can be done with both hold M1 shots and Aim toggle shots.  
* I couldn't get it to work with ARCC, probably because ARCC removes the shooting animation which is likely what allows this to happen.
* With Aim toggle, it is possible to do this so that Venti does not need to stop walking: [YouTube](https://youtu.be/Pk8-6Mzg9cQ)  
* With hold M1, Venti will stop walking to cast his Skill, but this can be canceled immediately with an action, such as dash, Skill, Burst, Attack, or Aim: [YouTube](https://youtu.be/IoL8v-aABos)  
  * This is therefore just as good as the Aim toggle version, while also needing less time to shoot the CA.  
  * The hold M1 version seems to rarely if ever work at 30fps, while it is consistent at 60fps.  
* Proof that this shortened E does damage: [YouTube](https://youtu.be/rxja0bljcuk)  

**Significance:**  
Crescent Venti stonks. Allows Phys Venti to cast Skill without interrupting the CAs: [YouTube](https://youtu.be/UK556Tz22PA)  
Can also let Venti do 4pc Shimenawa tax evasion at low ping.  
In more serious terms, this has little practical use for the majority of Venti usage since it requires a CA.  

## Burst Mechanics

### Venti Q Absorbed Element ICD

**By:** Charliex3000\#9403  
**Added:** 2021-04-05

**Finding:** Venti's Burst elemental infusion application follows the standard ICD rules of elemental application every 3rd hit.

**Evidence:** [Youtube](https://youtu.be/nlxEcKJUfKA)

**Significance**: Once the GUs of Venti ult's absorbed element has been determined, this can aid us in calculating his single target elemental application rate

### Venti Q Late Absorption Bug

**By:** soup420\#1634  
**Added:** 2021-04-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_829479729299193877_835390049503543336_transcript-venti-burst-absorption-bug.html)

**Finding:**  
Venti burst's elemental absorption creates an independent and invisible aoe field that always ticks for for the full number of ticks regardless of when absorption happens.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=Jpxf7bD47ZY)

Clips 1 and 2 show that even when absorption happens late, the elemental infusion damage continues to tick even after Venti's Q ended. I counted 14 ticks in first clip and 15 ticks in second clip, which should be around the max total ticks of early infusion, but I'm not sure why the second clip showed 1 more tick.

Clip 3 \(0:30\) shows that when an enemy moves away from the area where the infusion happened, they stop taking the infusion damage. Clip 4 \(0:45\) shows that if an enemy moves into the area where the infusion happened, they'll take tick damage for the remaining duration of the infusion. This shows that the elemental infusion creates an invisible aoe field that does a set number of ticks before disappearing.

**Significance:**  
When elemental absorption happens late into a Venti Q, the damage from elemental infusion ticks aren't lost as long as enemies stay inside the aoe. However you would still lose out on swirl damage if there's no element to be swirled.

### Venti Burst Infusion Elemental Gauge Units

**By:** Ayzel\#7399  
**Added:** 2021-05-02  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837853360023011378_838536559040790608_transcript-venti-burst-1u-infusion.html)

**Finding:** Venti's infusion elemental damage on his burst applies 1U of the element it absorbs.

**Evidence:** [https://youtu.be/HcfgBlMjlLA](https://youtu.be/HcfgBlMjlLA)

The last tick of the hydro damage caused by Venti's burst elemental infusion is at about 18 seconds. The hydro aura fully disappears at about 27 seconds, which means that the damage caused is 1U.

**Significance:** Can help calculate the elemental application rate of Venti's burst, along with determining how reactions should work against enemies caught in an infused Venti burst.

### Venti Burst Anemo Gauge Units

**By:** Charliex3000#9403  
**Added:** 2021-09-17  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887526029508354099_888246550936043610_transcript-venti-ult-anemo-gauge.html)

**Finding:**  
Venti ult anemo gauge is 1U.

**Evidence:**  
[Youtube](https://youtu.be/Arq_x6nFs6s)

[Imgur](https://imgur.com/a/QK1y6oa): From this screenshot, we see that the shield has taken about 10 or 11 pixels of damage, out of a total 111 pixel shield.  
Lector shields have need 72 anemo units worth of guage to break.  
So we conclude that around 7 anemo units were applied from the 7 swirls/applications from Venti's ult.  
Thus each application is 1U.

**Significance:**  
Venti ult anemo gauge is 1U.

### Venti Elemental Absorption Proc Count Correction
**By:** CC#5588  
**Added:** 2022-01-21  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_931544431885160499_933946366424670218_transcript-venti-elemental-absorption-proc-count-correction.html)

**Finding:** The Additional Elemental DMG from Venti's Burst Procs 13-15 Times.

**Evidence:**   
15 ticks | 60 fps
* CC#5588 - [Youtube](https://youtu.be/q2HtOuYvDUM)
* Sabrenn#8965 -  [Youtube](https://youtu.be/Cd6IiIBUYuI)
* CrazyWeke123#9720 - [Youtube](https://youtu.be/vTQXvxLGn_0)

14 ticks | 60 fps
* Sabrenn#8965 - [Youtube](https://youtu.be/AipBkL-HXUA)
* CrazyWeke123#9720 - [Youtube](https://youtu.be/QhQYU3_tcA0)

14 ticks | 120 fps
* Asaki#9139 - [Youtube](https://youtu.be/pVmPlsXPylc)(1) | [Youtube](https://youtu.be/FDpUR3uzf6o)(2)

14 ticks | 30 fps
* CC#5588 - [Youtube](https://youtu.be/T_JDrnxGFh0)

13 ticks | 30 fps mode
* Puffin#9920 - [Youtube](https://youtu.be/v4PM5NY-fYA)
* CC#5588 - [Youtube](https://youtu.be/eRl7PuVLPiU)

**Significance:** Better Accuracy for Calcs Involving Venti.

## Constellation Mechanics

### C1: Splitting Gales

#### Venti C1 damage

**By:** jamberry#7142  
**Added:** 2021-08-07  
 [Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)  

**Finding:**  
Venti’s C1 damage instance is considered CA damage.

**Evidence:**  
Testing done by Peekays#2722  
Damage increases with 4WT bonus - [Video](https://www.youtube.com/watch?v=zvq7kmHLpmU)

**Significance:**  
Damage calculations for Venti.

### C6: Storm of Defiance

#### C6 Venti Resistance Down Duration

**By:** Hishammm ♡\#0001  
**Added:** 2021-05-01  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837587957828419594_838584790323298355_transcript-c6-venti-res-down-duration.html)

**Finding:**  
The resistance reduction from Venti C6 lasts 10 seconds from the last tick of damage taken. Anemo res reduction duration can only be refreshed by anemo dmg ticks, while the infused element's res reduction duration is refreshed by that element's DOT ticks.  
Venti's late infusion bug still exists in 1.5.

**Evidence:**

Anemo Res Reduction: [Youtube](https://www.youtube.com/watch?v=KvEPod0i_P0)  
Res reduction lasts 10s from last anemo dmg tick.

* Sucrose without res reduction deals: 91, 83, 104, 130
* Sucrose with res reduction deals: 106, 97, 122, 152
* Last tick of anemo dmg at 0:18
* Sucrose stopped dealing increased damage at 0:28.

Elemental Res Reduction \(ft. Venti late infusion bug\): [Youtube](https://www.youtube.com/watch?v=JAVanCKpxIo)  
Res reduction lasts 10s from last hydro DOT tick.

* Barbara without res reduction deals: 76, 71, 83, 111
* Barbara with res reduction deals: 89, 83, 97, 130
* Last tick of anemo dmg at 0:12
* Last tick of hydro DOT at 0:14
* Barbara stopped dealing increased damage at 0:24.

Anemo Res Reduction \(ft. Venti late infusion bug\): [Youtube](https://www.youtube.com/watch?v=Ix85zbuwves/)  
Anemo res reduction lasts 10s from last anemo dmg tick, not influenced by infusion ticks.

* Sucrose without res reduction deals: 25, 23, 29, 36
* Sucrose with res reduction deals: 42, 38, 48, 60
* Last tick of anemo dmg at 0:10
* Last tick of hydro DOT at 0:14
* Sucrose stopped dealing increased damage at 0:20

Venti's late infusion bug still exists in 1.5: [Youtube](https://www.youtube.com/watch?v=QIUdiR6p5TQ)

**Significance:** Here is how long C6 venti debuff lasts since mihoyo didn't bother to list it.

## Synergies/Interactions

### Venti Burst On Top of Zhongli Pillar

**By:** EdisonsMathsClub\#6469  
**Added:** 2021-06-03

**Finding:** Venti's Vortex can be fired on top of Zhongli's Pillar

**Evidence:** [https://www.youtube.com/watch?v=veVNQh7wtKs](https://www.youtube.com/watch?v=veVNQh7wtKs)

1. Stand 3 square tiles from your desired Venti firing location.  
2. Place Zhongli's pillar, it should be 4 tiles away from the Venti firing location.  
3. Walk to desired Venti firing location and fire Vortex, it should land ontop of it.  

**Significance:** This allows for Venti to pull in targets whilst keeping them just low enough for melee units to hit such as Childe, despite being within the 20 levels to pull them in. However due to unknown reasons, the enemies will float \(perhaps due to poise, further investigation is needed\) after some time.

