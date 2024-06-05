---
search: false
---

# Healing

**Main Page:**

<Card item={require('../../../combat-mechanics/damage/healing.md')} />

## Outgoing and Incoming Healing Bonuses are Additive

**By:** ItzSomebody\#0029  
**Added:** <Version date="2021-08-09" />  
**Last tested:** <VersionHl date="2022-10-12" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_874018516842475600_874090458991706122_transcript-outcoming-incoming-healing-additive.html)

**Finding:**  
Outgoing and incoming healing bonuses are additive.

**Evidence:**  
[Video](https://youtu.be/yJMPaWKCCbA) Barbara with 9419 health, level 7 Skill, 4-Piece maidens, and Hydro resonance. Assuming outgoing and incoming are additive, Barbara would heal for `((9419 * 0.06) + 664) * (1 + 0.15 + 0.20 + 0.30) = 2028.081` which video confirms.

**Significance:**  
The two are additive.

## Bond of Life mechanics

### Bond Of Life Detailed Mechanics

**By:** @emmaus  
**Added:** <Version date="2023-10-06" />  
**Last tested:** <VersionHl date="2023-09-30" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/bond-of-life-mechanics)

**Findings:**
1) All sources of BOL stack  
    - Multiple casts of Elemental Skill stacks BOL. This has a passive cooldown of 15s, as specified in the weapon description.
    - Each hit of the Fatui Operatives Hunt Down attack applies a BOL. They stack with existing BOL.
2) Any passive effect conferred by the existence of BOL from any of sources that applied BOL will persist throughout the BOL. BOL is permanent if not cleared.
    - Bleed effect from Fatui Operatives Hunt Down doesn't get cleared until the BOL is cleared, even if it's the last to be applied.
    - Weapon effects conferred by the clearing of BOL considers all HP gained throughout the BOL until cleared, even if stacks are gained at different times.
    - Weapon effects conferred by clearing BOL from the Fontaine craftable series resets when a new BOL is cleared. The duration refreshes.
    - Weapon Buffs can be triggered anytime, on any BOL source, as long as it's cleared again
3) Fatui Operatives Hunt Down bleed effect does not stack with itself. It also applies a separate DOT from corrossion caused by rift enemies.
    - The DOT for 1 stack of BOL from Hunt Down is the same as 3 stacks of BOL.
    - The DOT from Hunt Down applies every second, and ticks separately from corrossion. Bleed from Hunt Down is cleared when BOL is cleared, but corrossion persists.
4) Like corrossion, Hunt Down bleed can not be mitigated, and will not kill inactive party members.
5) Each hit of the Fatui Operative Hunt Down attack will get buffed if there already is a BOL on the target when the hit occurs, even on intial hit.

**Evidence:**
- 1a: https://youtu.be/WjfnWADpetg
- 1b: https://youtu.be/cj-4-xyQamo https://youtu.be/HariQo3Gufs
- 2a: https://youtu.be/U_-KRRfjChk
- 2b: https://youtu.be/9gzX-ebW8OM
- 2c: Initial BOL from Operative clears to grant 2.9% Elemental DMG Bunus. Skill Cast add BOL, and clears soon to give gives additional 8% Elemental DMG Bonus from cast and 7.44% Elemental DMG bonus for 15507 HP on a R1 Flowing Purity, giving a total of 15.44% Elemental DMG Bonus https://youtu.be/IYs_6NMjdYs
- 2d: https://youtu.be/K1DGdBDwIz8
- 3a: 1 stack = 314/s . 3 stack = 314/s https://youtu.be/-1PmWEWHu_4
- 3b: https://youtu.be/c08i_IPMnks
- 4: https://youtu.be/g00rrk4hzXc
- 5: 
    - no BOL present on initial hit: 2019 DMG https://youtu.be/gOFeTVKQ1sM
    - BOL present on initial hit: 5049 DMG. https://youtu.be/_jR8Zcy_nls

### Overhealing can clear bond
**By:** @baloopy
**Added:** <Version date="2024-05-14" />  
**Last tested:** <VersionHl date="2023-08-24" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/4-0-equipment-basic-mechanics)

**Finding:** bond of life works on over healing
**Evidence:** Ayaka is at full health and Kokomi's healing was able to clear her bond of life and she gained the attack: https://youtu.be/sdh6MlZTSs8

### Ocean-Hued clam works with bond
**By:** @caramielle.
**Added:** <Version date="2024-05-14" />  
**Last tested:** <VersionHl date="2023-08-24" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/4-0-equipment-basic-mechanics)

**Finding:** 4pc clam includes healing done towards clearing bond of life
**Evidence:** https://youtu.be/OUwiAnSmoS8?feature=shared

### Bond Of Life Expiry

**By:** @sharaths21312  
**Added:** <Version date="2024-05-25" />  
**Last tested:** <VersionHl date="2024-05-23" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/bond-of-life-expiry)

**Finding:** Bond of life expires naturally
- after 10 min  
- on domain entry/exit  
- on logout/login  
- on death + revival

**Evidence:** [YouTube](https://youtu.be/Sz6eG82_OqE)  
