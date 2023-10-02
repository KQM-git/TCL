---
search: false
---

# Alhaitham

**Main Page:**

<Card item={require('../../../characters/dendro/alhaitham.md')} />

<br />


## Basic Mechanics
[Discussion](https://tickets.deeznuts.moe/transcripts/alhaitham-basic-mechanics)

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1qznqZMkFRRFKpzEXvQ_bJAXoleI2BrV-nKNAusJoYrU/edit?usp=sharing) , [Video](https://youtu.be/zqm1ypb3qUo) - Kolibri\#7675
* Gauges:
    * Skill cast(both Tap and Hold): 1U - [Video](https://youtu.be/RSHSW3oktvM) - Puffin\#9920
* ICD:
    * Tap E: None - [Video](https://youtu.be/hFJm5tXBaqE) - Puffin\#9920
    * Burst: Standard (3 hits/2.5s) - [Video](https://youtu.be/GyMBxHiEtBc) - Puffin\#9920
* Snapshot:
    * Skill cast: Dynamic - [Video](https://youtu.be/K7tAv2997Jk) - Bobrokrot\#0111
    * Chisel-Light Mirrors: Snapshots at the start of the animation - [Video](https://youtu.be/ySzAI3KqYeg) - Bobrokrot\#0111
    * Burst: Snapshots in the middle of the animation when the field is createdd - [Video](https://youtu.be/K7tAv2997Jk) - Bobrokrot\#0111
## Attack Mechanics

## Skill Mechanics

* Alhaitham's resistance to interruption is increased while holding Skill and during his tap Skill animation. - [Tap](https://youtu.be/gfnVh3yNTQo) , [Hold](https://youtu.be/2md6wXzpnGY) - an odd medium\#6288
* After using hold Skill, you can instantly plunge at any height - [Video](https://www.youtube.com/watch?v=BOhWzxBTOQI) - Zentras\#1620
* Coordinated attacks from **Chisel-Light Mirrors** can proc Sacrificial Sword's passive - [Video](https://youtu.be/EBJNdDN8rnk) - Puffin\#9920
* Tap Skill can teleport further than hold Skill - [Hold](https://www.youtube.com/watch?v=MUMQaxMbTTQ) , [Tap](https://www.youtube.com/watch?v=mTJ_iTrEsos) - Cyn\#0962
* **Chisel-Light Mirror** projection attack's positioning depends on Alhaitham's own positioning and what direction he's facing - [Video](https://youtu.be/iCCiERsGeGE) - Hybri\#1099
* Hold E -> Plunge combo can be done faster by aiming closer to his feet while pressed against an enemies hitbox - [Long](https://www.youtube.com/watch?v=WsuLjvyEJdI) , [Short](https://www.youtube.com/watch?v=WhXnvRZ0pKo) - Cyn\#0962
* **Chisel-Light Mirror** projection attacks can miss if a swap occurs too fast (more likely at higher ping) - [Video](https://www.youtube.com/watch?v=bpzOUSaxWT4) - Cyn\#0962
* Alhaitham keeps his momentum if interrupted during his hold Skill teleport - [Video](https://www.youtube.com/watch?v=6DD4AZOGyn4) - Cyn\#0962
* Alhaitham can remain submerged in water when in his hold Skill state - [Video](https://www.youtube.com/watch?v=ROQ01hLr_PI) - Cyn\#0962
* Alhaitham can make his sword disappear by cancelling his Skill before it gives him mirrors. This is easily done using an alchemy table or by talking to an NPC or falling in water while in his hold Skill. Using N5, Skill or Burst makes his sword reappear, but it is still possible to activate his Dendro infusion via his A1 passive. 
    * Using alchemy table - [Video](https://youtu.be/gnOmsZGJ3kQ) - Rathalos\#2875
    * Falling in water while in hold SKill - [Video](https://youtu.be/2WpyAM3jxFc) - The 11th Fatui Harbinger\#0720
* **Chisel-Light Mirror** projection attacks spawn 0-2 frames after damage numbers become visible. Damage numbers appearing is ping-dependent. Therefore, the time a **Chisel-Light Mirror** Projection attack spawns is ping dependent. Furthermore, the check for the level of mirror projection attacks occurs at (approximately) the same time as the damage numbers appearing. - Hybri\#1099
    * Frame tests done at a variety of ping values - [Video](https://youtu.be/CnJJWus6x84)
        * 115ms: Input:0488, Dendro aura:0501, Numbers appear:0513, Mirror:0514 ;  Input:0745, Dendro aura:0759, Numbers appear:0770, Mirror:0770
        * 260ms: Input:2440, Dendro aura:2453, Numbers appear:2470, Mirror:2472 ; Input:2679, Dendro aura:2693, Numbers appear:2712, Mirror:2714
        * 500ms: Input:5357, Dendro aura:5370, Numbers appear:5402, Mirror:5404 ; Input:5560, Dendro aura:5573, Numbers appear:5610, Mirror:5612
    * Tests done at ~500ms ping:
        * [Video](https://youtu.be/4TT9bfNoeEU) - Dendro aura at frame 472 while holding 2 mirrors. Damage numbers appear at frame 506 while holding 2 mirrors.
        * [Video](https://youtu.be/aU69HYX9SPk) - Dendro aura at frame 557 while holding 2 mirrors. Damage numbers appear at frame 590 while holding 1 mirror.
    * Projection Attack not showing up despite having Mirrors while in a disconnected state - [Video](https://imgur.com/B561rut) - Latiwings\#3308
* Alhaitham's Mirror Generation is not affected by ping - Latiwings\#3308
    * Method: Go to map > Disconnect by unplugging LAN cable > trigger the criteria for Mirror gen > go back to map > reconnect
    * CA Proc: [Video](https://imgur.com/iE8SY2o)
    * Skill: [Video](https://imgur.com/demSbc9)
    * Burst: [Video](https://imgur.com/z34O29x)
* **Chisel-Light Mirror**'s Projection Attack Type is not determined by the amount of Mirrors on the triggering hit. The check happens on the Projection Proc. - Latiwings\#3308 , Cyn\#0962
    * Method: Disconnect > Burst > Trigger Projection with one N1 with 3 mirrors > Let 1 Mirror expire > Reconnect > Check what type of Projection was procced - [Video](https://imgur.com/TOleVV5) - If the Projection Attack read the state of the Mirror on triggering hit, it would have been a rainfall. However, it shows up as 2 Mirror Projection Attack. 
    * [Video](https://www.youtube.com/watch?v=ktpIfGhHfGQ) - The Dendro DMG conversion is still in affect for the final normal attack, but the mirrors wear off before the check happens, resulting in no projection attack
    * [Video](https://www.youtube.com/watch?v=aR7v9QfcSBA) -  N1 -> Skill cast procs a 3 Mirror projection 
    * [Video](https://www.youtube.com/watch?v=AhMZC-QujxY) - CA-1 activates A1 "on-hit", but does not apply the gained mirror to CA-1 (only CA-2). This shows that the conditions for a “check” require the hit to happen when >0 mirrors are present.
    * [Video](https://www.youtube.com/watch?v=fnWr70EsG_Q) -  If CA-1 trigger both a projection attack and A-1 at the same time, the "check" happens later and will take into account the gained mirror.
    This was tested by using Skill -> N1 on a separate target, waiting (to line up the next projection attack timer in between n1 and CA-1), and then doing N1 -> CA on a separate target, with CA-1 killing the target (so we can check if we get the A1 proc to factor into the projection triggered).
## Burst Mechanics

* Burst has a 2s wait before generating new **Chisel-Light Mirrors**. It is possible to swap to another character, use a skill, and come back in time to catch the new Mirrors generated. - [Video](https://youtu.be/hHC1ZE-fkbs) - Latiwings\#3308
## Ascension Mechanics

### A1: Four-Causal Correction
* **Chisel-Light Mirror** counts for projection attacks are calculated after A1 - [Video](https://www.youtube.com/watch?v=8i_VaM5Uw-c) - Cyn\#0962

## Constellation Mechanics

### C6: Structuration

* C6 buff duration after bursting depends on how many mirrors exist when the 3 mirrors are generated at burst. - 荷花\#0108
    * Burst -> CA - 6s - [Video](https://www.youtube.com/watch?v=pyu0BYlXIp4)
    * Burst -> Tap Skill - 12s - [Video](https://www.youtube.com/watch?v=5Pc6An90PZc)
    * Burst -> Hold Skill -> Plunge - 18s - [Video](https://www.youtube.com/watch?v=4_X4DPRYUDw)
    * Burst -> Tap Skill -> Wait for Mirrors from Burst - 18s - [Video](https://www.youtube.com/watch?v=VaqIcNPYzYc)
    * There is a visual indicator for the buff (green trailing light on Alhaitham's right shoulder).

## Synergies/Interactions

