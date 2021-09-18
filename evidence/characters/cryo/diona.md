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

## Burst Mechanics

### Diona Field Characteristics

**By:** Monochrom9\#8058  
**Added:** 06/02/2021

**Finding:** The Elemental Mastery bonus from Diona C6 will apply immediately on swap and linger for 2 seconds.

**Evidence:** [**GIF**](https://imgur.com/a/egHUnjV)

**Significance:** The healing pulse is separate from the buffs granted by Diona Burst.

