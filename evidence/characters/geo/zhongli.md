# Zhongli

**Main Page:**

{% page-ref page="../../../characters/geo/zhongli.md" %}

## Skill Mechanics

### Construct Resonance Mechanics

**By:** TunaPotato\#9114  
**Added:** 9/24/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/891048091225038888/891127648288383026/transcript-zhongli-pillar-mechanics.html)

**Finding 1:**  
Construct resonance hits as many times as there are constructs

**Evidence:**  
[Video:](https://youtu.be/6mUqRTjVgBE) With 1 Stele and 2 geo constructs, there are 3 instances of geo damage on the ruin guard per pulse

**Significance:**  
The greater the number of geo constructs on the field the more damage resonance will deal (of course counting on the fact that each resonance hits the target)

**Finding 2:**  
The resonance produced by each Stele is independant of each other

**Evidence**  
This was tested using two steles and one geo construct. As can be seen clearly from the [targetless example](https://youtu.be/5tU76Qn7V_U), the geo construct pulses twice in 2s - once for each steele.
This is further shown in the [example with a target](https://youtu.be/naC-dy0jECw). There are two Steles present, A and B as well as one geo construct C. As shown, the pulses AC and BC hit separately in a 2s window, each doing two instances of damage for a total of 4 instances of damage in 2s.

**Significance:**  
This shows that with c1 Zhongli or during co-op, the presence of more than one Zhongli pillar allows more resonance damage within a given window. With b being the resonance damage with one seele in one 2s window and n being the number of steeles, the total resonance damage would be nb.
In other words having two pillars from c1 will double the damage from resonance

## Ascension Mechanics

### A1: Resonant Waves

#### Zhongli's Ascension 1 broken down

**By:** 3b00d\_09\#2235  
**Added:** 4/28/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837172595202719794/837181219086401536/transcript-zhongli-a1-exploration.html)

Credits to JonahFarc\#7056 for helping me figure out how this works.

**Finding:** Zhonglis' A1, Resonant Waves, buffs up Jade Shield by 5% _after_ damage calculation occurs.

**Evidence:** If we take a Zhongli with Talent 8 Dominus Lapidis, and 16201 MAX HP, we get a Jade Shield that has 8443.45 Absorption.

_Scenario 1:_ [Calculations](https://cdn.discordapp.com/attachments/837172595202719794/837178466234663002/unknown.png)

* A level 85 Ruin Guard with my Zhongli's DEF deals 1409 Damage per Rocket hit.  
* If the +5% buff applies after the damage calculation, then the Jade Shield should fully absorb 6 rockets, and only sustain 302 damage.  
* If the +5% buff applies during damage calculation, then Jade Shield should fully absorb 7 rockets, with ~885 remaining Shield HP.

[Video](https://www.youtube.com/watch?v=Lf14taQz1QE)

As we can see in this video, Zhongli was able to fully absorb 6 rockets, losing his shield at the 7th rocket and sustaining direct damage.

_Scenario 2:_

Further Evidence: Lets take another example, Zhongli this time has 9570 Base Shield Absorption. A single swing from a level 85 Ruin Guard will hit for 3388 Damage.

* If the +5% Shield Bonus is applied after damage calculation, then Jade Shield should full absorb two swings, breaking at the third and sustaining 137 damage: [Calculations](https://cdn.discordapp.com/attachments/837172595202719794/837178529971044372/unknown.png)  
* If the +5% Shield Bonus is applied during damage calculation, then Jade Shield should fully absorb 3 hits with 364 Shield Strength remaining: [Calculations](https://cdn.discordapp.com/attachments/837172595202719794/837178650636845076/unknown.png)

[Video](https://www.youtube.com/watch?v=zE9G3cymFqQ)

We can see that Zhongli's Jade Shield was able to fully absorb 2 swings, with the third swing breaking his shield and dealing 143 damage to him.

In case you cant tell how many swings _actually_ hit Zhongli, _if_ the shield fully absorbed 3 hits, then in the case where the +5% Fortification is applied during damage step, Zhongli should sustain ~3k direct damage from the instance the shield breaks, no matter what hit it was. Clearly, he took 143 direct damage from the hit that broke Jade Screen.

On a side note, recasting Jade Screen before it breaks will reset the Fortification bonus back to 0.

**Significance:** This allows for more accurate Zhongli shield calculations, as well as any future characters with a similar mechanic.

#### Zhongli A1 Has No/Negligible ICD

**By:** JonahFarc\#7056  
**Added:** 4/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/836279063760732201/836642776217026620/transcript-zhongli-a1-no-icd.html)

**Finding:** Zhongli's A1 passive has either no ICD or an extremely negligible one

**Evidence:**

[Video:](https://youtu.be/nrML_xrMJPc) Walked into dendro samachurl burn and immediately checked character window to see shield strength maxed

**Significance:**

Zhongli's shield is ridiculously effective against DoT as it stacks immediately to maximum.

## Constellation Mechanics

### C2: Stone, the Cradle of Jade

#### Zhongli C2 Mechanics

**By:** Midori\#2173  
**Added:** 04/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/834400006948782090/834658055391150150/transcript-zhongli-c2-mechanics.html)

**Finding:** Zhongli c2 affects his own burst when casting as do the 15% DMG bonus from Geo resonance but not the Geo resistance down unless it is applied first.

**Evidence:** [This video shows the damage of his burst in specific circumstances](https://www.youtube.com/watch?v=Uv9ZNUz5vHE)

* Burst with shield already applied: 48k
* Burst with no shield: 48k
* Burst with Geo resonance and no shield: 52k
* Burst with Geo resonance and shield: 52k
* Burst with Geo resonance shield and res down: 57k
* The shield is formed at the end of the burst animation.

**Significance:** For the highest damage apply the Geo res down before pressing Burst.

## Interactions/Synergies

### Fischl C6 does not always Proc on Zhongli's first Normal Attack

**By:** muakasan\#2792  
**Added:** 01/07/2021

**Bug/Finding:**

Fischl C6 does not always proc on Zhongli's first normal attack. When chaining multiple Zhongli attack sequences together, after the first sequence, the c6 does not proc on the first normal of the subsequent sequences.

**Evidence:**

[https://youtu.be/\_hEXbDqPtfo](https://youtu.be/_hEXbDqPtfo), as we can see Zhongli's first normal attack in the second and third attack sequence does not proc a fischl c6 proc

Pausing between sequences \([https://youtu.be/QmN3a94XPBI](https://youtu.be/QmN3a94XPBI)\), and dash canceling after the sequence \([https://youtu.be/JBQUbJp0hks](https://youtu.be/JBQUbJp0hks)\) seems to avoid the problem and the c6 proc occurs as normal.

**Significance:**

Allows for more accurate DPS calculations when using Zhongli and c6 fischl together.

### 4 TOM Passive on Zhongli Procs With Other Geo Constructs

**By:** Lowy\#7647  
**Added:** 5/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839089619743539230/840068304864280586/transcript-4pc-tom-zhongli-interaction.html)

**Finding:**  
4pc ToM passive can be triggered by other geo constructs when it is in range of zhongli's pillar

**Evidence:**  

* [Test with Geo MC](https://www.youtube.com/watch?v=N8yJ_4LHQxY)  
* [Test with Albedo](https://www.youtube.com/watch?v=R56dA5SOpyk)  
* [Test with Ningguang](https://www.youtube.com/watch?v=J7fJY0Q3Iqs)

**Significance:**  
This make triggering the 4pc ToM passive easier with Zhongli when playing with other geo characters
