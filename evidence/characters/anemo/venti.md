# Venti

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

## Venti Burst Infusion Elemental Gauge Units

**By:** Ayzel\#7399
**Added:** 5/2/2021
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837853360023011378/838536559040790608/transcript-venti-burst-1u-infusion.html)

**Finding:** Venti's infusion elemental damage on his burst applies 1U of the element it absorbs.

**Evidence:** https://youtu.be/HcfgBlMjlLA

The last tick of the hydro damage caused by Venti's burst elemental infusion is at about 18 seconds. The hydro aura fully disappears at about 27 seconds, which means that the damage caused is 1U.

**Significance:** Can help calculate the elemental application rate of Venti's burst, along with determining how reactions should work against enemies caught in an infused Venti burst.
