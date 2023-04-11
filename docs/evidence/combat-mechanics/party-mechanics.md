# Party Mechanics

## Debuffs/Team Buffs With Duration Persist After Applier Leaves Party

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
