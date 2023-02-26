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

### Debuffs/Team Buffs With Duration Persist After Applier Leaves Party

**By:** Casdela\#5121, username\#5125, Nociii\#0111, Astro_\#4044, Soul Fish\#8421, Mika Misono\#7916, Cush\#2051, kazuya\#2202  
**Added:** <Version date="2023-02-26" />  
**Last tested:** <VersionHl date="2022-12-14" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/potential-characters-buff-and-debuff-staying-after-swapped-out-of-the-party)

**Finding:**
Some team buffs, debuffs and infusion with duration timer are not removed when the unit who applies said buffs/debuffs is removed from the party, and instead remain for its whole duration.

Some notable points:
- Currently all RES shred, ATK decrease, DMG taken debuffs persist after applier leaves party.
- Almost all DEF shred debuffs persist with the exception of Ayaka C4, even though the debuff arrows remain, the actual effect doesn't. This might be a bug as there is no other currently known case so far where the debuff arrows are wrong.
- About Mona C1: 
  + Mona C1 buff only persist on the character who is on-field in player's own party at the moment Mona leaves party
  + After Mona leaves, switching to another party member will end the buff for the switched out character, and give any switched in party member Mona C1 visual effect, but not the buff itself (even party members not in the party the moment she leaves, see sheet for more detail).
- Buffs are inconsistent on which persists and which doesn't with no identifiable pattern, check sheet for which one persists.

**Evidence:**
Comprehensive sheet of team buffs/debuffs with stated duration:  
[Google Sheets](https://docs.google.com/spreadsheets/d/1x-6lLzfnTn8iBBfPp3JIp4OTtq6X7ro7gZXTESvF1vk/edit#gid=1956096477)

**Significance:**
Documentation of buffs and debuffs that still persist for its full duration after the unit who applies said buffs/debuffs have left the party, which allows multiple buffs and debuffs stacking for damage showcase, particularly relevant for whale co-op dmg showcases. 

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
