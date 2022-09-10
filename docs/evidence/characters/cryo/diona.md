---
search: false
---

# Diona

**Main Page:**

{% page-ref page="../../../characters/cryo/diona.md" %}

## Attack Mechanics

### **Non-charged Aimed Shots share elemental application ICD with Charged Aimed Shots, despite not having an element themselves**

**By:** EternalDream\#5503  
**Added:** 2020-11-19

**Evidence:**

[**https://youtu.be/3NxsXnfKIT8**](https://youtu.be/3NxsXnfKIT8)

**Significance:**

For Diona, who's charged shot ICD is higher than the time it takes to fire a second charged shot, this prevents elemental reactions or aura application from occuring on a fully charged shot if you fire a normal aimed shot by accident before it, if the ICD was not active yet.

### Diona Dash Aim Cancel

**By:** BowTae#0141  
**Added:** 2021-10-17
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_895937565956378625_899199225462657064_transcript-diona-dash-aim-cancel.html)

**Finding:**  
Diona can cancel her dash early with Aim Toggle (R on PC, L2 on controller).

**Evidence:**  
[Imgur](imgur.com/JcCDf1U)

With C4: [Imgur](https://imgur.com/i4PC2pN)  

Diona can dash aim cancel after doing one of the following actions after switching in:
* Enter Aim Mode
* Normal or Charged Attack (can cancel it before the attack comes out)
* Hold Skill (Tap Skill does not work)
* Burst
* Plunge Attack  

[Imgur](https://imgur.com/TEapcWE)  
[Imgur](https://imgur.com/SuK5IyM)

Diona can then dash aim cancel all of her dashes, until she switches out, does Tap Skill, or does ARCC, after which she must do one of the above actions again to do dash aim cancel: 
[Imgur](https://imgur.com/mGQK7Vk)  
[Imgur](https://imgur.com/eTH5LG1)  
[Imgur](https://imgur.com/0Q4fAir)

**Significance:**  
Very fast way to shoot CAs with Diona while still retaining the ability to aim (since ARCC cannot be aimed) 

## Skill Mechanics

### **Diona Elemental Skill ICD analysis**

**By:** Tractor\#9418  
**Added:** 2020-11-18

**Finding:**

The first 2 \(tap\) and last 3 \(hold\) projectiles of Diona's Elemental skill have separate element application cooldowns.

**Evidence:**

[https://youtu.be/MrN0FWlHcCo](https://youtu.be/MrN0FWlHcCo)

After applying a strong fire aura \(Bennett E\), I applied a Cryo trigger from Diona's E.  
I also tested waiting between Bennett's E and Diona's E to downgrade the fire element strength.

Bennett E + \(no wait\) + Diona E \(tap\) = 1 melt reaction + weak pyro aura remaining on enemy.

Bennett E + \(no wait\) + Diona E \(hold\) = 2 melt reactions + no element remaining on the enemy.

Bennett E + \(wait 5+ seconds\) + Diona E \(tap\) = 1 melt reaction + no element remaining on the enemy.

Bennett E + \(wait 5+ seconds\) + Diona E \(hold\) = 1 melt reaction + cryo aura remaining on the enemy.



### Bug:  Diona's shield is 2U under specific circumstances that are guaranteed on swap

**By:** Monochrom9\#8058, Help Me with Honours\#1678, Zeitraffer\#1074

**Evidence:**

* [https://www.youtube.com/watch?v=fdT1fHL9y-g](https://www.youtube.com/watch?v=fdT1fHL9y-g) \(Level 3 Domain at end of video\)  
* [https://imgur.com/a/rYbqJi1](https://imgur.com/a/rYbqJi1)
* [https://imgur.com/a/nDl7CiC](https://imgur.com/a/nDl7CiC) 
* [https://imgur.com/a/yB74Dz5](https://imgur.com/a/yB74Dz5) 
* [https://www.youtube.com/watch?v=MfUORD9kvDY](https://www.youtube.com/watch?v=MfUORD9kvDY)

**Significance:**

Diona's shield was most likely meant to be 1U like every other self-aura in the game. Mihoyo may have implemented a failsafe for Diona's e missing that forms a shield anyway, and this redundant shield ALSO applies 1U and can appear even if her e does connect functionally making it a 2U application and the largest self aura in the game. The fact that it is strangely particular in when and how it applies the 2U instead of 1U makes it more likely that the scenario where you get 1U of cryo instead is intended instead of the other way around.

Hopefully, Mihoyo just makes her shield more consistent when it comes to cleansing herself in a future patch, but the workaround from the below video can be used to cleanse the team with 1 less swap in the meantime. My speculation as to WHY this happens has to do with some observations and ideas about how shields work in general.

When a character swaps, the whole character gets entirely removed from play and then replaced with the new one and it SEEMS that it keeps the same shield. But if we make a certain assumption that shields function like buffs, then some things start to make sense. For example, because shield effectiveness is a statistic, moving the same exact shield across characters wouldn't be correct as we know that shields have different values across characters with different shield effectiveness.

To solve this they save the base shield value, remaining shield, and duration and apply these characteristics to the new shield upon character swap. The old shield then ceases to exist under normal circumstances and a new shield is immediately created using the saved characteristics on the new character adjusted for shield efficiency. Since Diona's shield ALSO applies cryo to the character they would also need to apply cryo to the character and this is where things might be going wrong in between shields, the method that they are using to apply the cryo may linger for too long across swaps and apply to the new unit on top of the normal shield that they generate.

I'm not 100% certain it works this way, but Noelle had a similar bug that leads me to believe shields work like this. In the Noelle video below, under the above theory, the shield is just breaking instead of ceasing to exist on swap like it is supposed to, and the timing for the glitch being identical to the current subject raises my eyebrows.

Unfortunately, this comparison has some issues such as Diona shield not caring about ping and the above theory failing to explain how the first shield could apply 2U. I have no idea at this time how to construct an experiment that would prove definitively that this is how shields actually work and is honestly outside the scope of this entry, but these two bugs are suspicious in their shared timings and could be worth scrutinizing.

Note: Diona cleansing Pyro aura is inconsistent and can be 1U, 1.5U or 2U depending on the aura also it does not apply 2U to Diona herself until the second swap.

### Diona's Shield Deep-Dive

**By:** EggsD\#9603  
**Added:** 2021-04-05

**Finding:** Detailed description and rundown of Diona's Icy Paws Shield. Which includes...

* description
* ascension stat
* bow choice
* artifacts
* DMG absorption mechanics
* uptime
* sacrificial bow stacking potential
* infinity shield strategy

**Evidence:**

* [Google Doc](https://docs.google.com/document/d/1GZrscI-X_-CgzavXUbCeELrSumbAqlLqVkkJN1vWKwk/edit?usp=sharing)
* [Video](https://youtu.be/gLZYAy3GBLc)

**Significance:**

* Noted especially with how Diona shield works with Sacrificial Bow. 
* Understand the full mechanics about the Diona's shield maximum uptime and durability carry over. 

### Icy Paws despawn after a certain amount of time if they do not hit a target

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_898145871026348062_898800608826490900_transcript-dionas-skill-icy-paws-may-not-form-a-shield.html)

**By:** D.....K#9002  
**Added:** 2021-10-15  

**Finding:** Diona's Skill Icy Paws do not form a shield if all Icy Paws despawn before hitting something. 

**Evidence:**  
1 Icy Paw hit generates 2.4s shield: [YouTube](https://www.youtube.com/watch?app=desktop&v=63kzH_8eiw0&feature=youtu.be)  
0 Icy Paws hit generate no shield: [YouTube](https://www.youtube.com/watch?app=desktop&v=Bi4qdo4tTQs&feature=youtu.be)  
Icy Paws revolve around a non-activated Ruin Guard until they eventually despawn and no shield is formed: [YouTube](https://www.youtube.com/watch?app=desktop&v=65KWXBu_TvY&feature=youtu.be)  

**Significance:**  
At least 1 Icy Paw must hit something for a shield to form. Situations where Icy Paws might despawn before hitting something include:
1. Standing on a cliff with no ground below
2. Targetting an enemy without ever hitting it, including non-activated Ruin Guards

### Diona’s Paws Home on Entities That Are Not Enemies

**By:** Ultimate Noob\#2955 and Junolau#4337    
**Added:** 2022-05-07  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_972570999696531457_transcript-dionas-paws-home-on-entities-that-are-not-enemies.html)  

**Finding:**  
Diona's paws can home on some entities that are not enemies.  

**Evidence:**  
[YouTube](https://youtu.be/gZnJG4kPziM)

**Significance:**  
Who needs to snipe birds when you have heat-seeking missiles?

### Diona's Paws Don't Work Next to a Wall

**By:** Ultimate Noob\#2955  
**Added:** 2022-05-22  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_977693874942275594_transcript-dionas-paws-dont-work-next-to-a-wall.html)

**Finding:**  
Diona's paws appear behind Diona and then move forward during hold E. In the following clip the paws appear behind Diona inside the wall and explode before being able to travel forwards. Since no enemies got hit, no DMG got dealt and no particles were generated, however she still gets her shield up.

**Evidence:**  
[Hold E](https://youtu.be/yZ76CuHqXss)

**Significance:**  
Don't fire Diona's paws when there is a wall behind you.

## Burst Mechanics

### Diona Field Characteristics

**By:** Monochrom9\#8058  
**Added:** 2021-06-02  

**Finding:**  
The Elemental Mastery bonus from Diona C6 will apply immediately on swap and linger for 2 seconds.  

**Evidence:**  
[**GIF**](https://imgur.com/a/egHUnjV)  

**Significance:**  
The healing pulse is separate from the buffs granted by Diona Burst.  

### Diona Has Finite Vertical Range for Burst Healing

**By:** Mehhh-yowww\#8236, Kourinn\#6001  
**Added:** 2021-10-30  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_903967252397834272_904154341714309141_transcript-diona-finite-vertical-range-for-burst-healing.html)

**Finding:**  
Diona's Elemental Burst has a finite vertical range of healing, in contrast to known fields that have infinite vertical range (e.g., Bennett).  

**Evidence:**  
Diona's Burst not healing compared to Bennett's Burst that will heal (in coop): [YouTube](https://youtu.be/3f1BOY5sd9s)  
Diona's Burst does not heal when the Burst AoE is far below the character: [YouTube](https://youtu.be/P16N8sC6_iY)  
Diona's Burst does not heal when Burst AoE is above the character, unlike Bennett's Burst: [YouTube](https://youtu.be/EZzy92RlDKQ)  
Diona's Burst does heal above its visual AoE within a vertical range slightly shorter than the height of the Shrines of Depths: [YouTube](https://youtu.be/CcBbVWLWMXA)  
Diona's Burst does heal below its visual AoE within a small vertical range: [YouTube](https://youtu.be/czZ_QRqK4O4)  
Diona's Burst may not heal Xiao in his Burst because his jumping height is higher than Diona's Burst vertical range: [Imgur](https://imgur.com/Fkow2LI)

**Significance:**  
Diona's Burst healing has a limited range in contrast to all other known healing fields that have infinite vertical range.  
This has implications against Xiao (or for Xiao with Staff of Homa) because the height limit is lower than Xiao's jump height.  

### Diona's Burst Position Snapshot

**By:** Ultimate Noob\#2955  
**Added:** 2022-02-24  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_967852523027312751_transcript-dionas-burst-position-snapshot.html)  

**Finding:**  
Diona’s Burst snapshots position on cast, so if a enemy moves after you cast her Burst, it will go to the position of where the enemy was as you casted and miss.

**Evidence:**  
[Video](https://imgur.com/a/dU7nB0N) \(credit to ♡Maddie'soneandonlyPinkie♡\#0949\)

**Significance:**  
If you cast her Burst on a moving enemy you will miss, it could be good for long-ranged characters, bad for melee ones.

## Ascension Mechanics

### A1: Cat's Tail Secret Menu

#### Diona's Stamina Reduction Stacks With Other Sources

**By:** Ultimate Noob\#2955  
**Added:** 2022-03-04  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_949479240284401744_transcript-bokuso-box-crit-scales-off-character.html)  

**Finding:**  
Diona's stamina reduction stacks with other sources.  

**Evidence:**  
* [Kazuha's sprinting stamina reduction](https://youtu.be/ILUq9dW4UvE) - credit to Charisma\#5567  
* [Amber's gliding stamina reduction](https://youtu.be/kgxmV03nsxM) - credit to Spacebar\#7879  
* [Beidou's swimming stamina reduction](https://youtu.be/eV71GHCVv5Y) - credit to Spacebar\#7879  
* [Anemo Resonance](https://youtu.be/i7qrFnbywLo) - credit to Spacebar\#7879    

**Significance:**  
Previously, such effects didn't stack, but around patch 2.0 Mihoyo changed it so that they do stack. Mostly fluff.  

## Constellation Mechanics

### C1: A Lingering Flavor

#### Diona C1 Range and Q Duration

**By:** Yume\#2875  
**Added:** 2022-05-12  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_974466651477127248_transcript-diano-c1-range-and-q-duration.html)  

**Finding:**  
Diona C1:  
While doing tests for another ticket, I accidentally found out that Diona's C1 seems to have no range limit, I went to test it out and found out that it seemingly indeed have infinite range when on the same map, when teleporting to a different map such as Enkanomiya or Teapot, however, the C1 fails to proc, as can be seen in the evidence 2-5, where Diona does not gain the Energy from C1.

Diona Q Duration:  
We can also see that Diona's Q, Signature Mix, field duration starts when the paws disappear from the field, which in my tests happen at around ~17.5s timer on the Burst cooldown, this checks out due to the field having a 12s duration and Diona gaining the 15 Energy from her C1 at around ~5.5s timer on the Burst cooldown, 17.5 - 5.5 = 12.  

**Evidence:**  
* [Teyvat to Teyvat](https://imgur.com/a/hwBDyWk)
* [Teyvat to Enkanomiya](https://imgur.com/a/l7rnEt0)
* [Enkanomiya to Teyvat](https://imgur.com/a/mIszgm0)
* [Teyvat to Teapot](https://imgur.com/a/kwTBxPO)
* [Teapot to Teyvat](https://youtu.be/FE8Bh6zmkdk) \(credits to Puffin\#9920\)
* [Logging out test](https://imgur.com/a/PWEOOt1)

**Significance:**  
More understanding of Diona's kit.  

## Interactions  

### Diona Sacrifial Proc Inconsistency

**By:** Homura\#9806  
**Added:** 2022-02-14  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_936983999581159454_942896166872440872_transcript-sac-procs-on-diona.html)  

**Finding:**  
Sacrifical Bow procs on Diona's hold E do not match the theoretical chances, the reason for this is currently not known, the scope of this entry is specifcally to identify and document this.  
 
**Evidence:**  
* Diona
  * 92/100 R2 hold E in Abyss (theoretical 96.875%)
  * 93/100 R2 hold E in Abyss
  * 95/100 R2 hold E in Abyss
  * 93/100 R2 hold E in Abyss
  * 94/100 R3 hold E in Abyss (theoretical 98.976%) first 50 runs only, but it's 47/50 so same percentage at least: [YouTube](https://www.youtube.com/watch?v=113GE8yXMpc)
  * 92/100 R3 hold E on Pyro Regisvine
  * 78/100 R1 hold E (from friend) in Abyss (theoretical 92.224%)
  * 280/300 R3 hold E in Abyss [YouTube](https://youtu.be/gNgc723WkO8)
  * 49/50 R1 fav bow in Abyss, 89.4% crit rate (theoretical 97.859% from ItzSomebody\#0029's math) [YouTube](https://youtu.be/2vikaPLhSPo)
* XQ
  * 87/100 R3 in Abyss (theoretical 84%)
* Sucrose
  * 42/50 R2 5 enemies hit in Abyss from pai (theoretical 96.875%) [YouTube](https://youtu.be/dbYao5ego1Q)
* Ayaka
  * 97/100 R3 5 enemies hit in abyss (theoretical 98.976%)
* EMC
  * 47/50 R3 in Abyss (theoretical 93.6%) [YouTube](https://youtu.be/f0T14Pxa7uA)
* Sara
  * 49/50 R3 4-5 enemies hit in Abyss (theoretical between 97.44% and 98/976%) [YouTube](https://youtu.be/tHPgAaspY1U)

**Explanation/Methodology:**  
 To find out why diona is not proccing Sacrifical Bow correctly, both sac and fav bow were tested on diona to ensure that it was simply not diona's hold E being weird in general, sac weapons were tested on hitting multiple enemies to see if it triggered correctly, a sac weapon (sword) was tested on hitting one enemy multiple times with the same skill (emc e) to see if it triggered correctly, and sac bow specifically was tested on hitting multiple enemies to see if it triggered correctly.  
 
**Significance:**  
The results of the testing shows that everything works pretty much as expected except diona's hold E on sac bow. While we currently do not know the source of this anomaly, the scope of this entry is to record and document its existence. Since diona as a battery sometimes uses sac bow, knowing she doesn't proc it as well as math dictates means energy calculations with sac bow should change to reflect that she doesn't follow standard math.

