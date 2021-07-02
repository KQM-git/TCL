# Venti

**Main Page:**

{% page-ref page="../../../characters/anemo/venti.md" %}

## Venti Burst Analysis

**By:** KleefulFrames\#6735

Link [here](https://docs.google.com/spreadsheets/d/18SqSQzSyfQP4X2NGcXkubQ9NzC0BdT1Jxt0I1TL_zGs/edit#gid=2088924426).

## Venti Weapon Comparisons and Guide

**By:** paimonbukeyi\#4732  
**Added:** 04/05/2021

**Theory/Finding:** Mostly weapon rankings + optimal substats and to look for Venti with a bit of other calcs.

**Evidence:** Just some simple substat optimization in my script.

* [Sheet](https://docs.google.com/spreadsheets/d/1Z5UEfzhPpEyb_0ehjGj6z9W9oiQTr_bMcNL67XNvXW0/edit?usp=sharing)
* [Guide](https://anneta-vershinina.gitbook.io/venti/)

**Significance:** Better understanding of Venti.

## Venti Q Absorbed Element ICD

**By:** Charliex3000\#9403  
**Added:** 04/05/2021

**Finding:** Venti's Burst elemental infusion application follows the standard ICD rules of elemental application every 3rd hit.

**Evidence:** [Youtube](https://youtu.be/nlxEcKJUfKA)

**Significance**: Once the GUs of Venti ult's absorbed element has been determined, this can aid us in calculating his single target elemental application rate

## Venti Q Late Absorption Bug

**By:** soup420\#1634  
**Added:** 04/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/829479729299193877/835390049503543336/transcript-venti-burst-absorption-bug.html)

**Finding:**  
Venti burst's elemental absorption creates an independent and invisible aoe field that always ticks for for the full number of ticks regardless of when absorption happens.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=Jpxf7bD47ZY)

Clips 1 and 2 show that even when absorption happens late, the elemental infusion damage continues to tick even after Venti's Q ended. I counted 14 ticks in first clip and 15 ticks in second clip, which should be around the max total ticks of early infusion, but I'm not sure why the second clip showed 1 more tick.

Clip 3 \(0:30\) shows that when an enemy moves away from the area where the infusion happened, they stop taking the infusion damage. Clip 4 \(0:45\) shows that if an enemy moves into the area where the infusion happened, they'll take tick damage for the remaining duration of the infusion. This shows that the elemental infusion creates an invisible aoe field that does a set number of ticks before disappearing.

**Significance:**  
When elemental absorption happens late into a Venti Q, the damage from elemental infusion ticks aren't lost as long as enemies stay inside the aoe. However you would still lose out on swirl damage if there's no element to be swirled.

## C6 Venti Resistance Down Duration

**By:** Hishammm ♡\#0001  
**Added:** 05/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837587957828419594/838584790323298355/transcript-c6-venti-res-down-duration.html)

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

## Venti Burst Infusion Elemental Gauge Units

**By:** Ayzel\#7399  
**Added:** 5/2/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837853360023011378/838536559040790608/transcript-venti-burst-1u-infusion.html)

**Finding:** Venti's infusion elemental damage on his burst applies 1U of the element it absorbs.

**Evidence:** [https://youtu.be/HcfgBlMjlLA](https://youtu.be/HcfgBlMjlLA)

The last tick of the hydro damage caused by Venti's burst elemental infusion is at about 18 seconds. The hydro aura fully disappears at about 27 seconds, which means that the damage caused is 1U.

**Significance:** Can help calculate the elemental application rate of Venti's burst, along with determining how reactions should work against enemies caught in an infused Venti burst.

## Venti autoattack after elemental skill faster switching

**By:** sexyeboy69\#3215  
**Added:** 05/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/834085780611137607/845831330662187028/transcript-venti-autoattack-after-skill-faster-switching.html)

**Finding:** Doing an auto attack as soon as possible after using Venti's e allows the user to swap to a different character faster.

**Evidence:** [Video](https://cdn.discordapp.com/attachments/834085780611137607/842113118805295134/Venti-E-N-Swap.mp4)

**Significance:** Allows you to save a second of animation time when switching character after using Venti's elemental skill.

## Venti Burst On Top of Zhongli Pillar

**By:** EdisonsMathsClub\#6469  
**Added:** 6/3/2021

**Finding:** Venti's Vortex can be fired on top of Zhongli's Pillar

**Evidence:** [https://www.youtube.com/watch?v=veVNQh7wtKs](https://www.youtube.com/watch?v=veVNQh7wtKs)

1. Stand 3 square tiles from your desired Venti firing location.  
2. Place Zhongli's pillar, it should be 4 tiles away from the Venti firing location.  
3. Walk to desired Venti firing location and fire Vortex, it should land ontop of it.  

**Significance:** This allows for Venti to pull in targets whilst keeping them just low enough for melee units to hit such as Childe, despite being within the 20 levels to pull them in. However due to unknown reasons \(at the time, see &lt;\#846381351012007967&gt; \), the enemies will float \(perhaps due to poise\) after some time.

