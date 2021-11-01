# Enemy Attributes

## In-Depth Look at Monster Skill Effects in Domains/Abyss

**By:** Steno\#6940  
**Added:**

**Finding:** In-depth look at monster skill effects in abyss/domains \(Ice Cage, Pursuing Fireball, etc.\)

Note: Since the official names for these are incredibly difficult to find, I will list them here

* Ice Cage
* Vacuum Vortex
* Rumbling Stone
* Lightning Stake
* Pursuing Fireball 
* Mist Bubble

[Source](https://genshin.mihoyo.com/en/news/detail/9368)

1\) Monster skill effects deal flat damage. The amount of damage dealt scales similarly to transformative reactions \(thanks to @Carrier5by5 for looking into this\), based purely off a base multiplier corresponding to each skill effect \(for example, **Ice Cage** deals twice as much damage as **Rumbling Stone**\). These multipliers can be found [here](https://genshin-impact.fandom.com/wiki/Elements#Damage_Abilities_2). Also, the damage is unaffected by your character level or defense; it will always deal the same amount of damage regardless.

[https://www.youtube.com/watch?v=iwYAHJzqfos](https://www.youtube.com/watch?v=iwYAHJzqfos) \(Crimson Witch domain\)

2\) The damage from monster skill effects cannot be reduced by skills like **Xingqiu's E/Q** and **Beidou's Q**. This means that comps like **Beidou Xingqiu** electro-charge that can usually tank enemy attacks by stacking damage reduction cannot tank these effects easily.

[https://www.youtube.com/watch?v=IUgeUMhIUq8](https://www.youtube.com/watch?v=IUgeUMhIUq8) \(Crimson Witch domain\) [https://www.youtube.com/watch?v=O5zJxvufisI](https://www.youtube.com/watch?v=O5zJxvufisI) \(12-3\)

3\) The damage from monster skill effects is affected by character resistance.

[https://www.youtube.com/watch?v=ElFNtz8QrnU](https://www.youtube.com/watch?v=ElFNtz8QrnU) \(Tested with a lvl 21 Razor with and without 2pc lavawalkers set\)

4\) The damage from monster skill effects can be shielded. This also means that while the damage can be shielded, damage reduction skills that normally reduce the amount of shield damage taken will not apply.

[https://www.youtube.com/watch?v=d9THhkkdFwY](https://www.youtube.com/watch?v=d9THhkkdFwY)

5\) Monster skill effects can be taunted. In general, these skill effects target the same thing that the corresponding monster is also targeting. In some cases the target will "snapshot" \(i.e. if the monster changes its target during the effect, the effect will not update\) and in other cases it will not. Seems to be inconsistent.

[https://www.youtube.com/watch?v=AEPVPyj-Vl0](https://www.youtube.com/watch?v=AEPVPyj-Vl0)

Monster skill effects spawn at fixed intervals, specific to each type:

* Ice Cage: 12.5 seconds
* Vacuum Vortex: unknown \(its not in the game rn\)
* Rumbling Stone: 15 seconds
* Lightning Stake: 12.5 seconds
* Pursuing Fireball: 20 seconds
* Mist Bubble: 12.5 seconds

[https://www.youtube.com/watch?v=dLjsxQsIzAA](https://www.youtube.com/watch?v=dLjsxQsIzAA) \(Rumbling Stone\) [https://www.youtube.com/watch?v=aZ2N4VC-MXY](https://www.youtube.com/watch?v=aZ2N4VC-MXY) \(Ice Cage\)

Other: Haha Venti go brrr  
[https://www.youtube.com/watch?v=wsAXt1SU6Pk](https://www.youtube.com/watch?v=wsAXt1SU6Pk)  
[https://www.youtube.com/watch?v=D8CzsxXluEc](https://www.youtube.com/watch?v=D8CzsxXluEc)  
[https://www.youtube.com/watch?v=HQdDv1c2ED4](https://www.youtube.com/watch?v=HQdDv1c2ED4)

**Significance:**

Overall useful information for people looking to clear abyss/domains

## Mist Bubble

### Mist Bubble IFrame

**By:** snorting salt#3888  
**Added:** 07/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/865014289025466392/865729755093008415/transcript-bubble-persists-on-swap.html)

**Finding:**  
The bubble from the Hydro Abyss Mages and their hydro bubble spawning mechanic can be effectively iframed by swapping characters at the precise moment. However, the hydro bubble will persist on the character that was initially hit for approximately 5 seconds

**Evidence:**  
[Imgur](https://imgur.com/3gLxkSv)  
[Imgur](https://imgur.com/sVll8pV)  
[Imgur](https://imgur.com/oJ38eFv)  
[Imgur](https://imgur.com/J2UXMr4)

**Significance:**  
Dash iframes do not always work against the bubbles, especially for the abyss mage ones which home onto the character even after iframing through it. While the character initially hit still takes damage from the bubble, the dangerous CC effect of the bubble can be ignored, which makes dealing with the bubbles without ult iframes a lot easier.

## Targeting Ignores Enemy Hitbox Location

**By:** #Kourinn\#6001  
**Added:** 10/31/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/897826161055379466/904520062487126027/transcript-targeting-ignores-hitbox.html)

**Finding/Theory:**  
The targeting point for targeted skills (which is everything except bow aim shot as far as I am aware) is not the center of the enemy hitbox. Instead, the target point is set arbitrarily per enemy per animation.  

**Evidence:**  
[Imgur](https://imgur.com/a/hShlJ7r)  
* The larger of the two new enemies for patch 2.2 can display some highly inaccurate targeting boxes, especially when frozen. This also shows the targeting point and hitbox are separate.  
* The Rifthound initiates a jump back and follow-up charge, but gets frozen as soon as the follow up charge starts. However, Ayaka cannot damage it with her charge attack because the targeting point is too far away from the enemy hitbox.
* I think MiHoYo tried to fake bow normal target tracking for Rifthounds by making the targeting point in front of the enemy hitbox, instead of inside it. Unfortunately, this hack affects everything else too, and makes Ayaka whiff half her kit. R.I.P.  

**Significance:**  
Some Elemental Bursts, Skills, Catalyst/Bow Normal Attacks, and special Charge Attacks can potentially whiff on frozen enemies, resulting in a significant DPS loss. 
