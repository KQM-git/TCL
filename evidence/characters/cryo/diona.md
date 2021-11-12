---
search: false
---

# Diona

**Main Page:**

{% page-ref page="../../../characters/cryo/diona.md" %}

## Attack Mechanics

### **Non-charged Aimed Shots share elemental application ICD with Charged Aimed Shots, despite not having an element themselves**

**By:** EternalDream\#5503  
**Added:** 11/19/2020

**Evidence:**

[**https://youtu.be/3NxsXnfKIT8**](https://youtu.be/3NxsXnfKIT8)

**Significance:**

For Diona, who's charged shot ICD is higher than the time it takes to fire a second charged shot, this prevents elemental reactions or aura application from occuring on a fully charged shot if you fire a normal aimed shot by accident before it, if the ICD was not active yet.

### Diona Dash Aim Cancel

**By:** BowTae#0141  
**Added:** 10/17/2021
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/895937565956378625/899199225462657064/transcript-diona-dash-aim-cancel.html)

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
**Added:** 11/18/2020

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
**Added:** 04/05/2021

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

[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/898145871026348062/898800608826490900/transcript-dionas-skill-icy-paws-may-not-form-a-shield.html)

**By:** D.....K#9002  
**Added:** 10/15/2021  

**Finding:** Diona's Skill Icy Paws do not form a shield if all Icy Paws despawn before hitting something. 

**Evidence:**  
1 Icy Paw hit generates 2.4s shield: [YouTube](https://www.youtube.com/watch?app=desktop&v=63kzH_8eiw0&feature=youtu.be)  
0 Icy Paws hit generate no shield: [YouTube](https://www.youtube.com/watch?app=desktop&v=Bi4qdo4tTQs&feature=youtu.be)  
Icy Paws revolve around a non-activated Ruin Guard until they eventually despawn and no shield is formed: [YouTube](https://www.youtube.com/watch?app=desktop&v=65KWXBu_TvY&feature=youtu.be)  

**Significance:**  
At least 1 Icy Paw must hit something for a shield to form. Situations where Icy Paws might despawn before hitting something include:
1. Standing on a cliff with no ground below
2. Targetting an enemy without ever hitting it, including non-activated Ruin Guards

## Burst Mechanics

### Diona Field Characteristics

**By:** Monochrom9\#8058  
**Added:** 06/02/2021

**Finding:** The Elemental Mastery bonus from Diona C6 will apply immediately on swap and linger for 2 seconds.

**Evidence:** [**GIF**](https://imgur.com/a/egHUnjV)

**Significance:** The healing pulse is separate from the buffs granted by Diona Burst.

### Diona Has Finite Vertical Range for Burst Healing

**By:** Mehhh-yowww\#8236, Kourinn\#6001  
**Added:** 10/30/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/903967252397834272/904154341714309141/transcript-diona-finite-vertical-range-for-burst-healing.html)

**Finding:** Diona's Elemental Burst has a finite vertical range of healing, in contrast to known fields that have infinite vertical range (e.g., Bennett).

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
