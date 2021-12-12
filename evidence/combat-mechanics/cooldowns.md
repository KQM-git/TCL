---
search: false
---

# Cooldowns

{% page-ref page="../../combat-mechanics/cooldowns.md" %}

## Multi Charge Skills Snapshot CDR

**By:** Kourinn\#6001  
**Added:** 04/18/2021

**Findings:** Multi-charge elemental skills \(C0/C1 Xiao, C1 Sucrose, ...\) snapshot cooldown reduction at the time the skill is cast, not the cooldown reduction at the time the next charge starts charging \(or appears to from in-game UI\). Additionally, held abilities \(Jean E, Childe E, ...\) use CDR at the time their cooldown starts, not on cast/hold start.

**Evidence:** [Testing with Xiao and Chongyun C2](https://youtu.be/MB_IR0OStgA)

**Significance:** CDR may be very beneficial for characters with multi-charge skills.

**Note:** The snapshotting ultimately does not matter for static sources of CDR, from gear, resonance, etc. The added benefit for multi-charge skills would be from on-demand sources like Chong, to be able to pop the CDR, blow your charges, and then not have to worry about the buff/field effect until your charges are back while retaining the reduced cooldown.

## Sacrificial Passive With Multiple E Stacks

**By:** mol\#3280  
**Added:** 5/6/2021  
[Disscussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837514129479827490/840052397882867752/transcript-sac-frags-reset-on-sucrose-c1.html)

**Finding:**  
When a character with multiple charges of their elemental skill procs the sacrificial passive, the elemental skill cooldown shown on the timer is the cooldown that will be reset.

**Evidence:**  
[I cast one Sucrose E](https://imgur.com/a/AKgnNoq), waited until the first cooldown was down to 5s, and cast the second E. A reset occurred, and the time of the second cooldown was ~15s \(minus 10% due to anemo resonance in video\). So, whatever timer is currently showing is the one which will be reset.

The same occurs for [Ganyu C2](https://cdn.discordapp.com/attachments/837514129479827490/837875906907209728/2021-04-30_22-17-45_Trim.mp4) and [Klee](https://www.youtube.com/watch?v=tLdhyD7hBHo&start=133).

**Significance:**  
Any serial-cooldown, multi-cast skill user may waste sacrificial procs by causing a reset when their first cooldown is near 0s. Since the timer on stacked skills begins with the first skill cast out of the stack, and that skill is the one which is reset \(not the longer, still waiting cooldowns\), resets can be completely wasted on characters with multiple stacks. For example, with Sucrose it is possible to reset a skill with 0.1s of cooldown remaining, then have a stack of 15s go onto cooldown afterward. To get the most out of the cooldown benefit of sacrificial weapons, characters with multiple stacks might consider using stacks as quickly as possible.

## CD reduction double bursts

**By:** gengar#8426  
**Added:** 09/06/2021  
[Disscussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/877833812992725043/884454377094537227/transcript-cd-reduction-double-burst.html)

**Finding:**  
With sufficient CD reduction (Chongyun's ice field, anemo resonance, and 20% elemental burst CD reduction from a spiral abyss card), some characters with deployable bursts can have two bursts on field simultaneously.

**Evidence:**  
Video evidence and additional comments consolidated [here](https://docs.google.com/spreadsheets/d/1wNcQ_nnxpG7fD3uTlUcQw8fEWnptp_TE1MGsJDKHzKw/edit?usp=sharing) (unsuccessful characters not included)

**Significance:**  
Documents which current characters are able to have a double burst on field. Extra testing after Baal's release (in consideration of the CD reduction provided by C6) also confirms that the burst talent configurations for these characters remain unchanged.
