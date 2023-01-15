---
search: false
sidebar_position: 3000
---

# Cooldowns

<Card item={require('../../combat-mechanics/cooldowns.md')} />

## Multi Charge Skills Snapshot CDR

**By:** Kourinn\#6001  
**Added:** <Version date="2021-04-18" />  
**Last tested:** <VersionHl date="2021-04-18" />

**Findings:** Multi-charge Elemental Skills \(C0/C1 Xiao, C1 Sucrose, ...\) snapshot cooldown reduction at the time the Skill is cast, not the cooldown reduction at the time the next charge starts charging \(or appears to from in-game UI\). Additionally, held abilities \(Jean E, Childe E, ...\) use CDR at the time their cooldown starts, not on cast/hold start.

**Evidence:**  
[Testing with Xiao and Chongyun C2](https://youtu.be/MB_IR0OStgA)

**Significance:**  
CDR may be very beneficial for characters with multi-charge Skills.

**Note:** The snapshotting ultimately does not matter for static sources of CDR, from gear, resonance, etc. The added benefit for multi-charge Skills would be from on-demand sources like Chong, to be able to pop the CDR, blow your charges, and then not have to worry about the buff/field effect until your charges are back while retaining the reduced cooldown.

## Sacrificial Passive With Multiple E Stacks

**By:** mol\#3280  
**Added:** <Version date="2021-05-06" />  
**Last tested:** <VersionHl date="2021-05-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837514129479827490_840052397882867752_transcript-sac-frags-reset-on-sucrose-c1.html)

**Finding:**  
When a character with multiple charges of their Elemental Skill procs the sacrificial passive, the Elemental Skill cooldown shown on the timer is the cooldown that will be reset.

**Evidence:**  
[I cast one Sucrose E](https://imgur.com/a/AKgnNoq), waited until the first cooldown was down to 5s, and cast the second E. A reset occurred, and the time of the second cooldown was ~15s \(minus 10% due to Anemo resonance in video\). So, whatever timer is currently showing is the one which will be reset.

The same occurs for [Ganyu C2](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/cooldowns.md/discord/attachments_837514129479827490_837875906907209728_2021-04-30_22-17-45_Trim.mp4) and [Klee](https://www.youtube.com/watch?v=tLdhyD7hBHo&start=133).

**Significance:**  
Any serial-cooldown, multi-cast Skill user may waste sacrificial procs by causing a reset when their first cooldown is near 0s. Since the timer on stacked Skills begins with the first Skill cast out of the stack, and that Skill is the one which is reset \(not the longer, still waiting cooldowns\), resets can be completely wasted on characters with multiple stacks. For example, with Sucrose it is possible to reset a Skill with 0.1s of cooldown remaining, then have a stack of 15s go onto cooldown afterward. To get the most out of the cooldown benefit of sacrificial weapons, characters with multiple stacks might consider using stacks as quickly as possible.

## CD reduction double bursts

**By:** gengar\#8426  
**Added:** <Version date="2021-09-06" />  
**Last tested:** <VersionHl date="2021-09-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_877833812992725043_884454377094537227_transcript-cd-reduction-double-burst.html)

**Finding:**  
With sufficient CD reduction (Chongyun's ice field, Anemo resonance, and 20% Elemental Burst CD reduction from a spiral abyss card), some characters with deployable Bursts can have two Bursts on field simultaneously.

**Evidence:**  
Video evidence and additional comments consolidated [here](https://docs.google.com/spreadsheets/d/1wNcQ_nnxpG7fD3uTlUcQw8fEWnptp_TE1MGsJDKHzKw/edit?usp=sharing) (unsuccessful characters not included)

**Significance:**  
Documents which current characters are able to have a double Burst on field. Extra testing after Baal's release (in consideration of the CD reduction provided by C6) also confirms that the Burst talent configurations for these characters remain unchanged.
