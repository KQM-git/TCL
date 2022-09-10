---
search: false
---

# Yoimiya

**Main Page:**

{% page-ref page="../../../characters/pyro/yoimiya.md" %}

## Basic Yoimiya Mechanics

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_867272710715736064_878384023569825852_transcript-yoimiya-basic-mechanics.html)

## Attack Attributes

* Gauges - [xf3#3123](https://imgur.com/a/cmgaCZm)
  * Level 1 Charged Shot: 1A
  * Level 2 Charged Shot: 1A
  * Kindling Arrows: 1A
  * Pyro-infused NA: 1A
  * Charged shot during Niwabi Fire-Dance: 1A
  * Burst initial hit: 2B
  * Aurous Blaze Explosion: 1A
* Energy Generation
  * Charged shot during E does not produce particles - [Steph#3614](https://imgur.com/yml32cI)
  * Yoimiya's particle generation triggers on-hit (ICD estimate is ~2s) - [Steph#3614](https://imgur.com/zUi3Gxq)
  * Yoimiya can still produce energy even after infusion expiry **as long as the icd is off CD and the infused normal attack string arrow lands** - [Steph#3614](https://imgur.com/L7RiFfc)
* Kindling Arrows
  * Yoimiya's Kindling Arrows last around 2.5 seconds, don't drop off like regular arrows, and have auto lock aiming at a semi wide range. - [xf3#3123](https://imgur.com/a/l8wot7Y)
  * Yoimiya's Kindling Arrows can trigger a second overload if shot far away enough, because Kindling Arrows travel long enough to bypass the 0.5s ICD of overload - [Bobrokrot#0111](https://youtu.be/rlEAqvFFAfQ)
  * Yoimiya can have all three Kindling Arrows up after Niwabi Fire Dance ends, so long as the required charging time is met. - nat#4502
    * [3 Kindling Arrows](https://youtu.be/XEAJ9ssLmv4)
    * [2 Kindling Arrows](https://youtu.be/G50c8wvMqL4)
* Yoimiya can consistently trigger fall damage utilizing overload reactions. - [Bobrokrot#0111](https://youtu.be/T4niW6uCsC0)
  * You have to trigger all 3 overloads across her NA string to do this, otherwise she can miss the target. Results may vary for other electro applicators.
* Yoimiya's auto-aim range for her normals is around 6 tiles (~15.3 meters) - [nat#4502](https://youtu.be/jUOaFM4R9AQ)
* Kindling Arrows can home in on different targets. - [Mcpie#8672](https://i.imgur.com/sbQgjv8.mp4)  
* Kindling Arrows have a limited range. - [Mcpie#8672](https://i.imgur.com/3bgYXfR.mp4)  
* Kindling Arrow tracking is curved making it possible to orbit around targets. - [Ravantier#4984](https://imgur.com/mtpNOud)  

### Kindling Arrows Interaction with Amos' Bow
**By:** Ayzel\#7399  
**Added:** 2021-11-11  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_908499139703214080_908507642199150652_transcript-yoi-kindling-arrows-and-amos.html)

**Findings:**  
 Kindling Arrows are affected by Amos' Bow's passive, and it is very easy for Kindling Arrows to gain all 5 stacks because of how slowly they move.
 
**Evidence:**  
[Kindling Arrow affected by Amos' Bow's passive at various ranges](https://www.youtube.com/watch?v=-OAt8g15qkM&ab_channel=Ayzel)

**Significance:**  
Increases Amos' Bow value with a CA-oriented Yoimiya playstyle.

### Yoimiya Kindling Arrows Weakspot Interaction

**By:** DisgustingPractice\#6486  
**Added:** 2022-08-12  
[Discussion](https://tickets.deeznuts.moe/transcripts/yoimiya-kindling-arrows-weakspot-interaction)  

**Finding:**  
Yoimiya CA Kindling Arrows can hit weakspots but don't always crit.  
  
**Evidence:**  
[YouTube](https://youtu.be/Ke_y0571V40)  
The 3 Kindling Arrows didn't crit when hitting the weakspot but clearly activated the Prototype Crescent passive.  
  
**Significance:**  
Easier activation of the Prototype Crescent passive on Yoimiya and a possible bug where the Kindling Arrow hit doesn't activate the 100% crit on weakspots.  

## Skill Mechanics

* Her infused arrows follow standard ICD - [Artesians#0002](https://imgur.com/lebjy1p)
* Yoimiya's Skill is Multiplicative - Ayzel#7399
  * [Yoimiya Stat Sheet](https://i.imgur.com/zEBS0cvh.jpg)
  * [Yoimiya Damage](https://i.imgur.com/3jaKFjV.png) (2090)
  * `2089 * 1.12 * 0.5 * 0.9 * 2.552 * 1.5879 * 0.4901 = 2091` (difference explained by hidden rounding from game)
    * 2089 = attack
    * 1.12 = 1 + damage bonus (0.12 from bow)
    * 0.5 = enemy defence multiplier
    * 0.9 = enemy resistance multiplier
    * 2.552 = crit
    * 1.5879 = normal ATK damage bonus from T9 Niwabi Fire-Dance 
    * 0.4901 = talent multiplier of T6 N1

### Yoimiyas Arrows Snapshot Her Skill Bonus

**By:** lucianekat\#7757  
**Added:** 2022-07-18  
[Discussion](https://tickets.deeznuts.moe/transcripts/yoimiyas-arrows-snapshot-her-skill-bonus)

**Finding:**  
Yoimiya's blazing arrows snapshot the damage bonus from her skill.  
  
**Evidence:**  
Although Yoimiya's skill ends when she swaps off field, her blazing arrow damage remains the same whether you swap off before it hits an enemy or stay on field.  
In this [video](https://youtu.be/xqTe-y5g7Ds), you can see that Yoimiya's N1 did the same damage when I swapped and when I didn't.   
  
We can show that Yoimiya's skill ends as soon as you swap off because blazing arrows that hit after you swap off cannot activate her A1 passive.  
In this [video](https://youtu.be/zw-yje0DMMw), Yoimiya's Pyro DMG Bonus didn't increase, even though her infused N1 hit, because she was off field. 
  
**Significance:**  
Better understanding of snapshotting - Even though Yoimiya's normal damage bonus from her skill is multiplicative and doesn't show up in her "Character Details" page, her arrows still snapshot it.

## Burst Mechanics

* Burst doesn't snapshot - [xf3#3123](https://i.imgur.com/gQwo7gs.mp4)
* Burst follows standard ICD (3-hit/2.5s) - [ProfHugo#6478](https://www.youtube.com/watch?v=XcWfDIDdyEE)
* The initial hit of Yoimiya's Burst is an arrow, and can miss. - [Aluminum#5462](https://youtu.be/mBOPnKHIHtg)  
* Yoimiya's burst elevates her character position. - [Ori#5463](https://youtu.be/-QKEeCRe2Vw)  

## Ascension Mechanics
### A1: Tricks of the Trouble-Maker

* Yoimiya's A1 passive can last up to 3s after E expires. - [Mcpie#8672](https://i.imgur.com/pIa4ptP.mp4)
* Stacks gained from Yoimiya's A1 do not have independent durations, each Normal Attack hit will refresh the duration of all stacks to 3s. - [Mcpie#8672](https://i.imgur.com/aItiOYk.mp4) and [nat#4502](https://youtu.be/ykg2reBFBDI)
* Viridescent Hunt's passive does not affect Yoimiya's A1. - [Mcpie#8672](https://i.imgur.com/aItiOYk.mp4) 
* Gaining stacks will cause the orbitting sparks from Niwabi Fire-Dance to increase in brightness. - [nat#4502](https://youtu.be/GdQM8qDQ6O8)

## Synergies/Interactions

### Niwabi Fire-Dance's Blazing Arrow and Yun Jin's Cliffbreaker's Banner
* Yoimiya's Niwabi Fire-Dance's Blazing Arrow DMG increase does not increase Yun Jin's Cliffbreaker's Banner bonus. - [Sheet](https://docs.google.com/spreadsheets/d/1IsvKVQEc425ObfG1Ak2X8EzI0rCs6sfyBvCgfXInSVM/) - NZPIEFACE\#8439


### Fluff

* Yoimiya is also one of the few characters whom NPC will cheer for when using elemental skill. - [itskhoi#0013](https://www.youtube.com/watch?v=9YkInN2GsUA)
