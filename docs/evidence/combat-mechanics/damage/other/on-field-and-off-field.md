---
search: false
---

# On-Field and Off-Field

## Main Page

<Card item={require('../../../../combat-mechanics/damage/other/on-field-and-off-field.md')} />

## On-Hit Mechanics

### On-Hit Means On-Field

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2023-02-01" />  
**Last tested:** <VersionHl date="2022-07-22" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/on-hit-means-on-field)  

**Finding:**  
According to some Talent, Constellation, weapon, and artifact descriptions, the ability is triggered when the character scores a hit. Some descriptions say that they work even if the character is off-field, however, for all the descriptions that do not say, it is quite inconsistent and depends on which one it is.  

**Evidence:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/1S_Toll_6qIO1q2ood0KPteVH0-lw3mAPTKqEkmJeo9U/edit?usp=sharing)  

**Significance:**  
On-hit does not always mean on-field.  

### On-Hit Effects During Burst

**By:** emmaus\#9072  
**Added:** <Version date="2023-02-16" />  
**Last tested:** <VersionHl date="2023-01-31" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/on-hit-effects-burst)

**Finding:**  
Passives that trigger on getting hit or damaged will trigger if hit during Elemental Burst cast.  

**Evidence:**  
Serpent Spine  
[YouTube](https://youtu.be/VZ4Px_eqeiI)  
  
The Bell  
[YouTube](https://youtu.be/RONcYgPozRg)  
  
**Significance:**  
More info for timing bursts to trigger beneficial passives, even when shielded.  
  
Aquila Favonia is also affected, but this behavior is already recorded for it in the library.

## Off-Field Mechanics

### Shielding Off-Field

**By:** emmaus\#9072  
**Added:** <Version date="2023-02-16" />  
**Last tested:** <VersionHl date="2023-02-02" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/shielding-off-field)

**Finding:**  
One character's shield (The Bell, Noelle A1) can trigger shield-related buffs off-field, e.g. Geo Resonance, The Bell passive.  

**Evidence:**  
No Geo Resonance (baseline video as reference)  
[YouTube](https://youtu.be/907ht-pmIuU)  
  
Noelle's A1 Passive  
[YouTube](https://youtu.be/7vzenXTocWU)  
  
Retracing Bolide (Courtesy of Rathalos\#2875)  
[YouTube](https://youtu.be/FJzIPKN5Etc)  
  
Sayu, The Bell, no passive  
[YouTube](https://youtu.be/YChsny3Am2A)  
  
Sayu, The Bell, off-field passive  
[YouTube](https://youtu.be/VUPDJwe7wxo)  
  
**Significance:**  
Certain shields can affect the unit with passives while off-field.

## On-CRIT Mechanics

### Bloom CRITS and ICD

**By:** PowerOfTheAsian\#0865  
**Added:** <Version date="2023-02-12" />  
**Last tested:** <VersionHl date="2023-01-04" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/th-bloom-crits-and-icd)

**Theory:**  
Whether Bloom-related Reaction DMG under DMG ICD can trigger on-CRIT effects.  
  
**Evidence:**  
* [YouTube](https://www.youtube.com/watch?v=5I4mdP76C_I)
  * At 1:57 and 6:40 it shows that Xinyan receives buff arrows (indicating her C1 has activated), despite not having any large numbers indicating critical DMG being dealt.
* [YouTube](https://www.youtube.com/watch?v=iWukqGkbpII)
  * At 1:45 it also shows the same behavior, with better control testing.

Explanation: Xinyan C1 triggers when a CRIT is triggered by her, and Nahida C2 CRIT on Bloom and Bloom-related Reactions count. The testing determines whether the 3rd instance of a Bloom-related reaction triggered at the same time would cause Xinyan's C1 to trigger, even if the DMG for it would be dismissed/ignored due to the 2-hit DMG Instance ICD.  

Conclusion: Bloom-related Reaction DMG under DMG ICD can still trigger certain on-CRIT effects such as Xinyan C1.  
  
**Significance:**  
Better understanding of on-CRIT interactions with reactions.
