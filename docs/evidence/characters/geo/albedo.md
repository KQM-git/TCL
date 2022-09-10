---
search: false
---

# Albedo

**Main Page:**

{% page-ref page="../../../characters/geo/albedo.md" %}

## Skill Mechanics

### Dimensions of Albedo’s Elemental Skill AoE

**Added:** 2020-12-28  
**By:** HailCorporate\#2970

**Finding:**  
Albedo's E AoE is cylindrical and has a maximum height just over the elevator's height.

**Evidence:**  
Linked video showcases different flower positions on a wall and confirming if Albedo's E will proc. Attached Screenshot shows relative distance from a shadow on the wall.

There was no point where it was possible to proc E underneath the flower versus on the outermost part of the AoE supporting that it is Cylindrical and not Spherical.

[https://youtu.be/D7KwuJeSXRY](https://youtu.be/D7KwuJeSXRY)

**Significance:**  
It is possible to place Albedo's flower in an elevated position to avoid it getting destroyed.

**Further Testing:**  
I've experienced placing Albedo's flower on top of Electro Hypostasis' summons during its death phase and it remained suspended after the summon was destroyed. This may be replicated in Albedo + Zhong teams with Zhong's pillar however I cannot test this as I do not own Zhong.

### Albedo's Elemental Skill Snapshots

**By:** Steno\#6940  
**Added:** 2021-04-21  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834274373493456976_834662830120239115_transcript-albedo-e-snapshot.html)

**Finding:** Albedo's elemental skill snapshots, meaning that damage for its entire duration is calculated when the skill is cast, so any buffs gained/lost after the skill is cast will not affect the skill's damage.

**Evidence:** [https://youtu.be/BhfcSLmPW5s](https://youtu.be/BhfcSLmPW5s)

Albedo's skill does not get affected by Ningguang's Jade Screen buff, since Albedo cast the skill before walking through the screen.

**Signifiance:** Will help improve rotations to deal more damage. In rotations, Albedo should only cast his skill after getting buffed.

### Albedo's Elemental Skill Triggering is Pepega

**By:** NZPIEFACE\#8439, Kolibri\#7675  
**Added:** 2022-06-14  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_986267083748835339_transcript-albedo-e-is-pepega.html)

**Finding:**  
Albedo's Solar Isotoma procs the Transient Blossoms when enemies take damage (client-side).  

**Evidence:**  
Triggers offline (client-side) and from talents, reactions, and environmental damage - [YouTube #1](https://youtu.be/FpCKqikOCQA), [YouTube #2](https://youtu.be/Mw_9WIU4cdk), [YouTube #3](https://youtu.be/0VWD8izbYog)  

**Signifiance:**  
Albedo's on-damage effect appears to trigger client-side and from all sources of damage, unlike most other on-damage effects.  

## Burst Mechanics

### Albedo's Fatal Blossoms Snapshots when his E is cast, not his Q

**By:** gtrain#9987  
**Added:** 2021-08-13  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_875475337687990272_875585791869468722_transcript-albedo-fatal-blossom-snapshot.html)

**Finding:**  
Albedo's Fatal Blossom damage is based on stats snapshotted when his E is cast, not at the time of Q cast

**Evidence:**  
E without snapshotting Bennett Q: [Imgur](https://imgur.com/a/nU2rHRm)  
Fatal blossom damage (noncrit): 88  
E with snapshotting Bennett Q: [Imgur](https://imgur.com/a/cEimR22)  
Fatal blossom damage (noncrit): 503  

Stats remain constant in each scenario. Only difference is order of bennett Q and albedo E. Fatal blossoms in first clip deal 88 damage, while in the second they are 503.  
Specific Attack Calcs: [Google Sheet](https://docs.google.com/spreadsheets/d/1k_BUIffVbN781YZ5eL9OT4IqIZjS6rTpg-Ejr2f7-DI/edit?usp=sharing)  

This is similar to Ningguang's Q, where the gems from the screen have their stats taken from the E's Screen.  

**Signifiance:**  
To maximize Albedo Q damage, E should snapshot any attack buffs, as otherwise the fatal blossoms will not gain damage. Also shows why in my testing, fatal blossoms do not gain mistsplitter stacks.

## Ascension Mechanics

### A4: Homuncular Nature

#### Albedo A4 Triggers During Q Animation

**By:** Poisonite\#0195  
**Added:** 2022-04-08  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962008806097838120_transcript-albedo-a4-triggers-during-q-animation.html)  

**Finding:**  
Albedo's A4 buff starts in the middle of his Q animation when the Geo structure appears in front of him. The buff timer starts at the same time and ends 10s after.  

**Evidence:**  
* In [this video](https://youtu.be/1ICK11HGyBs), the buff indicator only appeared in the middle of the animation, once the structure appears in front of Albedo.  

* In [this video](https://imgur.com/a/xxeBaqj), the Burst animation started at 21f, and the buff indicators appeared at 105f, before the Burst animation ended \(whic takes a total of 96f\).  

The A4 buff lasts 10s from the time the buff indicator appears, this is true for both videos.  

**Significance:**  
This info can help in rotation crafting, where people would need to know how long Albedo's A4 Passive lasts, which is 10s after Geo structure from his Burst appears. 

## Synergies/Interactions

### Albedo Cinnabar Spindle Buffs Both Hits of E N1 Combo

**By:** Markoda\#5294  
**Added:** 2022-08-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/albedo-cinnabar-spindle-buffs-both-hits-of-e-n1-combo)  

**Finding:**  
The Cinnabar Spindle's passive seems to linger more than the 0.1s as stated in its description, leaving room for Albedo to perform a Skill > Normal Attack combo and have both hits be buffed by Spindle's Flat Damage bonus.  
  
**Evidence:**  
The weapon description of the Cinnabar Spindle reads:  
  
> "Elemental Skill DMG is increased by 80% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG."  
  
With this explanation, since 0.1s is very short (<6 frames for 60FPS), one might assume that even if Albedo performs a quick Normal Attack (N1) after casting his Elemental Skill (E), the first Transient Blossom will not receive the Spindle buff. However, testings have shown that this is not the case.  
  
Testing sheet: [Google Sheets](https://docs.google.com/spreadsheets/d/1gY82fEkHDonUlp8Bho76PusTo-HwGixK2L5ADGMEo40/edit?usp=sharing)  
  
Out of 53 runs where Albedo casted his Elemental Skill then quickly followed up with a Normal Attack, 39(74%) had the Transient Blossom that triggered also buffed by Spindle's passive. This became more consistent as the tester had gotten more used to the practice.  
  
However, it is worth noting that in 19 additional runs where Albedo, with his Solar Isotoma already present, performed a Normal Attack > Skill > Normal Attack combo (N1 E N1), none of the runs managed to have the Spindle buffed either the Skill cast damage or the 2nd Transient Blossom damage. Since this is a common tech in use to allow Albedo to trigger 2 Blossoms bypassing the 2s cooldown, it sadly makes the slightly longer time window irrelevant in combat, except the very first Transient Blossom when Albedo has not placed a Solar Isotoma yet.  
  
*Ping dependency*  
  
It is also worthy noting that the initial tests were done with a high ping, mobile environment. A few follow up tests were done in a 60FPS setting with ~135ms, which produced consistent Spindle proc up till ~0.5s delay between the initial E hit and the Normal Attack. A third series of testing done in ~20ms ping has failed to produce a single successful Spindle proc after 21 trials, suggesting that this Spindle proc tech is in fact most likely only achievable with high ping.  
  
**Significance:**  
By performing a quick Normal Attack right after placing his Elemental Skill, Albedo is often able to get one extra proc of the Cinnabar Spindle Flat Damage increase buff at the beginning of combat. However, this result is only consistently observed when the ping of the player’s device is high.  
