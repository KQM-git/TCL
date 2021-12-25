---
search: false
---

# Sucrose

**Main Page:**

{% page-ref page="../../../characters/anemo/sucrose.md" %}

## Attack Mechanics

### **Sucrose's N1 Attack can, in some Situations, Cease to Exist**

**By:** Mikman\#1149

**Finding/Bug:**

Sucrose's N1 attack can, in some situations, cease to exist. Sucrose will do her attacking animation, but no Anemo attack will be created.

**Evidence:**

There's a video linked showing the issue occurring at 0:02 and 0:19 [**https://drive.google.com/file/d/1tckURU3KAJmzCKvH-qVykY8DnXDWpIZg/view?usp=sharing**](https://drive.google.com/file/d/1tckURU3KAJmzCKvH-qVykY8DnXDWpIZg/view?usp=sharing)

**Significance:**

From what I can tell \(complaints about it on Hoyolab\), this has been in the game since launch. Attacking quickly with Sucrose will, in many instances, lose a significant portion of damage \(and more importantly Swirl potential\) because this bug is still in the game.

### **Can Sucrose's Normal Attacks \(and by extension, Swirl reactions\) trigger Fischl's Lightning Smite?**

By: Cola\#6861

I was asked this question on reddit and thought it should be the case since Sucrose' basic attacks are anemo which will swirl the electro debuff on the enemy.

Upon testing, as expected: it works, and yes Lightning Smite also crits!

**Evidence:**

[https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be](https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be)

**Significance:**

One more reason to get Sucrose out in the field more often, at least for this use case

## Elemental Skill Mechanics

### Sucrose's Particles spawn on the direction she's facing

**By:** Bobrokrot\#0111

**Added:** 13/12/2021

[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/918183951598759957/919808593459560488/transcript-sucrose-particle-tech.html)

**Findings:** Particles of Sucrose's Elemental Skill are created where Sucrose is facing (instead of the enemy location) if you dash cancel her E animation.

**Evidence:** https://youtu.be/b7m-RKf2C3I

**Significance:** This makes it possible/easier to pre-funnel Xiao with a sequence of Sucrose's E followed by Xiao's two Es. 
* [Example](https://youtu.be/nDoUaa5ksME)

## Elemental Burst Mechanics

### Sucrose Absorbed Dmg is simultaneous

**By:** kxmndz\#4700  
**Added:** 16/12/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/904089904416436264/920907095434473512/transcript-sucrose-absorbed-damage-simultaneous-or-sequential.html)

**Finding:** The damage from Anemo and the absorbed element in Sucrose's Burst ticks happen simultaneously. 

**Evidence:**   
VV/Swirl testing: [Video](https://youtu.be/88FnnTmL2Hg),
[Stats](https://imgur.com/a/UXunncL)   
An enemy was applied Pyro. Sucrose Burst was set up so it would absorb Pyro before its first tick.
* The first tick of the Burst Swirled the enemy with the Pyro aura and dealth Anemo and Pyro damage to both.
* The enemy with a Pyro aura was dealt 108 Pyro, 1031 Anemo, with 2262 Pyro Swirl.
* The other enemy was dealth 241 Pyro (crit), 1031 Anemo, with 1770 Pyro Swirl. The non-crit damage would be 84 Pyro damage.  
This shows that the VV shred from the Swirl damage of Swirl reactions was applied after all the talent damage from the Burst. The VV shred from the Swirl reaction itself is still applied to the single target before the talent damage.  

This was inconclusive, and there were two theories:
* Anemo and the absorbed element are simultaneous, and AoE Swirl damage comes after the rest of damage is dealt.(Meaning it is also after when debuffs from reactions are applied).
* Anemo and the absorbed element are sequential instances of damage, but AoE Swirls creates new instances of damage that are calculated after all instances of talent damage are finished calculating(and reacting).  

Raining Anemo Hypostasis Testing  
* Sucrose can cause a Swirl reaction by applying Anemo to the Anemo Hypostasis while it is raining. [Some Proselytizer\#8340](https://youtu.be/L_dGJsQknwg) 
* Barbara can cause a Swirl reaction by applying Hydro to the Anemo Hypostasis while it is raining. 
[NZPIEFACE\#8439](https://youtu.be/81DIGtneP3c)
* Sucrose's Burst that has absorbed Hydro causes a single Swirl reaction on the Anemo Hypostasis while it is raining. 
[Some Proselytizer\#8340](https://youtu.be/AGLqrDXaD0A)

As there was only a single reaction, unlike the expected two Swirls if Sucrose's Burst was sequential, there is a strong argument to say that the damage from the Anemo and the absorbed element in her Burst are simultaneous.

**Significance:** We better understand Sucrose's kit and how attacks in general work.

## Ascension Mechanics  

### A1: Catalyst Conversion

#### Sucrose's A1 talent does not proc on swirling environmental objects and guoba  

**By:** Katsune\#4691  
**Added:** 17/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/898471465438027806/898489236662132756/transcript-sucrose-a1-doesnt-proc-on-swirling-guobaenvironmental-objects.html)  

**Findings:**  
Sucrose's A1 talent, Catalyst Conversion, does not proc on Swirling Guoba or environmental objects.  

**Evidence:**  
* [Swirling off Guoba](https://youtu.be/D-ifIdU1Z6c)  
* [Swirling off Cooking Pot](https://youtu.be/RWBMCpfH47E)  

**Significance:**  
For double swirl setups involving Guoba (Sucrose/Bennett/XL/XQ or Sucrose/Bennett/XL/Childe), Sucrose's A1 talent will not benefit Xiangling unless you swirl pyro off of the enemy.

#### Sucrose's EM share on multiswirl is dynamic  

**By:** Rainfury\#8343  
**Added:** 16/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/894468808285225000/898898697084108830/transcript-sucrose-em-share-on-multiswirl-is-dynamic.html)  

**Findings:**  
The amount of EM shared by Sucrose's A4 Talent, Mollis Favonius in multiple swirl scenarios is dynamic.

**Evidence:**  
In the video, Yanfei has 0 EM while Sucrose has 706 EM. If Sucrose's EM share is snapshotted based on the amount of EM she had on Q cast, then Yanfei should have 141+120=261 EM. However, Yanfei had 141+120+24=285 EM instead, whereby the extra 24 EM was derived from 20% of the Instructor 4-piece bonus. [Instructor 4-Piece](https://youtu.be/QX2_CBysbU8)  

In the video, Yanfei has 0 EM while Sucrose has 525 EM. If Sucrose's EM share is snapshotted, Yanfei will have 105+50=155 EM. However, Yanfei had 105+50+48=203 EM instead, whereby the extra 48 EM was derived from 20% of the 240 EM Widsth Buff. [Widsth R1 Buff](https://youtu.be/LwzfGdJHICs)

**Significance:**  
More flexible rotations and Sucrose does not need to be buffed before using her Q.

#### Sucrose passives off-field triggering

**By:** Sayline#5959  
**Added:** 08/30/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/879730262802575390/881737206165823498/transcript-off-field-sucrose-triggers-passives.html)

**Findings:**  
Sucrose's A1 passive, A4 passive, and C6 effect can be triggered even when she is off-field.

**Evidence:** [Youtube](https://youtu.be/Fl3j9rp0N90)

**Significance:**  
More flexible rotations. For VV support Sucrose, you can do EQ Sucrose -> [*element you want to buff*] -> N1 Sucrose without fear of losing her A1, A4 and C6 buffs, while allowing you to squeeze in a VV shred. For non-VV support Sucrose, this lessens her field time even further, since you can EQ Sucrose -> [*element you want to buff*] and continue with the rest of your rotations without having to imbue element first before Sucrose moves.  

#### A1 Triggers on Chain Reaction Swirls

**By:** NZPIEFACE\#8439  
**Added:** 12/16/2021   
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/917957994048782336/919114773902290964/transcript-sucrose-a1-trigger-mechanics.html)  

**Finding:**  
Sucrose A1 triggers on chain reaction Swirls.  

**Evidence:**  
Sucrose has 915 EM with VV. Optimiser gave me 916.  
Xiangling has 96 EM from ascension. She has lvl 9 Guoba and lvl 1 1* polearm.  
* Calculated damages using Genshin Optimizer: [Google Doc](https://docs.google.com/spreadsheets/d/1MG6BYWBDJLZB5gxhiTa6fCs8AbQO-WEZIfu7F9dipmY/edit?usp=sharing)  

Reference videos for damage:
* [Guoba attack on Anemo Cube](https://youtu.be/gkxR9K5sLJE)
* [Sucrose A4, Guoba attack on Anemo Cube](https://youtu.be/YbAdoc8jTsg)

[Sucrose Guoba Swirl on Anemo Cube](https://youtu.be/3KYJfKK-Puw)  
Mapping the damage numbers in this video to the calculated numbers:
* First Sucrose E:
  ```  
  5174 - Sucrose Swirl  
  6612 - Sucrose Swirl with VV  
  244 - Guoba with VV  
  1552 - Xiangling Swirl from Guoba with Sucrose A1 and VV  
  ```  
* Second Sucrose E:
  ```  
  7043 - Sucrose Swirl with Xiangling C1 and VV  
  2582 - Xiangling Swirl from Guoba with Sucrose A1 A4, Xiangling C1, and VV  
  260 - Guoba with Xiangling C1 and VV  
  ```  

This shows that A1 was triggered from the second Swirl from Sucrose (where the Guoba Swirl applied Pyro to the Anemo Hypostasis, causing another Swirl reaction). This is a chain reaction. This also shows that A4 is delayed for some reason. Probably ping.  
 
**Significance:**  
Sucrose can utilize her A1 buff even when Swirling off of objects, as long as there is an enemy with an Anemo aura nearby.  

#### Swirls Caused By Absorbed Element in Burst Can Trigger A1

**By:** NZPIEFACE\#8439  
**Added:** 12/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/917957994048782336/919114773902290964/transcript-sucrose-a1-trigger-mechanics.html)  

**Finding:**  
Swirls caused by the absorbed element in Sucrose's Burst can trigger her A1.  

**Evidence:**  
Infusing Sucrose Burst with Beidou hold Skill vs Anemo Cube: [YouTube](https://youtu.be/iwmDccAyoVA)  

**Significance:**  
When will we get more Anemo auras on enemies...  

### A4: Mollis Favonius

#### Sucrose A4 snapshots EM value

**By:** NZPIEFACE#8439  
**Added:** 07/18/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/864528623578251314/866111168929857537/transcript-sucrose-a4-snapshots-em-value.html)

**Findings:** Sucrose A4 snapshots EM value.

**Evidence:**  
[Albedo snapshot](https://www.youtube.com/watch?v=5n60s5c9e0M)

* First half, using Sucrose A4 before EM buff from Albedo A4, grants 0 EM to everyone. Albedo Q increases party EM by 125. Higher value is expected if A4 did not snapshot.
* Second half, using Sucrose A4 a few seconds before the EM buff from Albedo ends. Grants 25 (20% of 125) EM to other party members. After albedo buff expires, party members still have 25 EM buff, instead of 0 if A4 did not snapshot

[Instructor buff post](https://www.youtube.com/watch?v=msWr5X0Rrvw)

* Using Sucrose A4 gives 16 EM to other party members. This is expected.
* Causing a swirl reaction further gives party members 170 EM (120 from instructor, 50 from A2) and 120 to Sucrose.
* If A4 did not snapshot, total EM on party members would be 210 instead of 186.

[Instructor buff pre](https://www.youtube.com/watch?v=xXH_wWKpZg4)

* A4 without buff -> 16 EM to other party members.
* Swirl without A4 buff -> 170 EM to other party members, 120 to sucrose (200 total in sucrose).
* After instructors and A1 expires -> 40 EM on party members instead of 16.

[Widsith post](https://www.youtube.com/watch?v=F5gj8iyodUs)

* A4 -> 0 EM to other party members.
* After widsith -> 0 EM to other party members, 480 on Sucrose.
* Without snapshot, expected 96 EM to party.

[Widsith pre](https://www.youtube.com/watch?v=mkYHGvOsIOY)

* Vid starts with showing widsith buff.
* A4 -> 96 EM to other party members.
* After buff decays -> 96 EM to other party members.
* Without snapshot expected to be 0 EM.

[Instructor EM buff procs before A4](https://www.youtube.com/watch?v=3CvAb1XWgUE)  

* Sucrose gives 210 EM (50 + 120 + 20% * 200) to other party members despite not getting Instructor buff beforehand.

**Significance:**

* Use buffs in the right order: Buff sucrose first (this only means albedo) to maximize EM share to rest of party.
* Time your buffs. its possible to switch back to sucrose before these buffs end to extend the effective duration of A4.
* Quickswap with Instructors set doesn't need proc the buff with a normal attack first before E.

## Constellation Mechanics

### C4: Alchemania

#### Sucrose C4 Mechanics

**By:** Sitri\#9504  
**Added:** 5/11/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837549621936652309/841878915156279306/transcript-sucrose-c4-mechanics.html)

**Findings:**  
Remember that Sucrose C4 creates a 7 hit counter, where after 7 hits your E CD is reduced by 1-7s.

Sucrose C4 creates a 7 hit counter when the first normal/charged attack connects an enemy \(hitting the air does not create, nor further the counter\). However, this counter starts whether your E is on cooldown or not. If you do 5 normal attacks, then E and put your E on cooldown, you only need to do 3 more to hit the counter and get your cooldown reduced.

Switching characters does not delete this counter either, and it exists for a very long time, tested up to 30s, so guesstimate is 30s plus. Death also does not delete the counter.

The cooldown reduction hard caps at each charge's cooldown. If you get a higher reduction than the current E charge CD, it will reset, and not carry over to potentially 2nd charge's cooldown.  
Example: E is on 3s CD, you get a 5s CD reduction, you instantly gain E charge and timer start at 15s for the remaining charge.

Sucrose C4 CD reduction probability distribution:  
[Google Sheets](https://docs.google.com/spreadsheets/d/1jMODclkPguPHpTsLmGafbvQKIcXk1ddc9NWYPjhqqsc/edit?usp=sharing)  
[Image \(Graph\)](https://cdn.discordapp.com/attachments/837549621936652309/837957383111049216/unknown.png)  
Although the distribution does not fit nicely into the Gaussian curve, mean ~ 4s suggests there is no overly skewed cooldown reduction to either lower or higher bound, at large N.

**Evidence:**  
Switching character does not reset Sucrose counter: [Video](https://www.youtube.com/watch?v=Q32IuH-Eu9g)  
Counter starts whether your E is on CD or not: [Video](https://youtu.be/Q2zyolyA8r0)  
Counter exists for 30s+: [Video](https://youtu.be/qTboBW3A7Qw)

**Significance:**  
This very slightly makes on field enabler Sucrose comps better, as swapping on Sucrose is very lenient + better understanding of Sucrose C4 RNG.

### C6: Chaotic Entropy

#### Sucrose C6 Buff Timer

**By:** Terrapin\#8603  
**Added:** 5/9/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840099295344197632/840821871901540362/transcript-sucrose-c6-buff-timer.html)

**Finding:**  
The buff provided by Sucrose's Constellation 6 \(granting party members a 20% Elemental DMG Bonus based on which element is absorbed by Sucrose's burst\) lasts for 10 seconds.

**Evidence:** [https://www.youtube.com/watch?v=VNVnsEdh29c](https://www.youtube.com/watch?v=VNVnsEdh29c)

The first test in the video establishes that the Sucrose in question has her Constellation 6 active, and that the buff arrows on Sucrose correspond to a 20% Pyro DMG Bonus from her burst absorbing Pyro from Guoba.

The second test shows that, as soon as Sucrose's Elemental Burst absorbs Pyro, Sucrose gets buffed, which lasts for 10 seconds.

The third test shows that even a late absorption of Pyro still results in a 10 second buff.

**Significance:**  
Teams with C6 Sucrose can plan their absorption time around when they want to utilize her 10 second buff window, either for snapshotting or for general team rotations.

## Synergies/Interactions

### **Gambler's 4pc effect can stack with sacrificial weapons to refresh two of sucrose's skill charges simultaneously**

**By:** Faranight\#0001

**Added:** 01/26/2021

**Evidence:** [**https://i.imgur.com/jBugRq2.gifv**](https://i.imgur.com/jBugRq2.gifv)

**Significance:**

If running these together you should avoid triggering both while holding a spare charge. Might be good to know for some niche pure ER battery builds.

\[Also applies to other characters with charges\]

### **Sucrose A4 EM sharing does not benefit from Albedo's A4 EM sharing if Sucrose triggers hers before Albedo triggers his.**

**By:** ioannesfifth\#1236 **Added:** 01/26/2021

**Evidence:**

Images are stored in:

* Base Stats: [https://imgur.com/a/pQW7ujK](https://imgur.com/a/pQW7ujK)
* Albedo Q then Sucrose E: [https://imgur.com/a/KJ5Cp3E](https://imgur.com/a/KJ5Cp3E)
* Sucrose E then Albedo Q: [https://imgur.com/a/b3u2QhE](https://imgur.com/a/b3u2QhE)

**Setup:** a team comprised of an artifact-less 0 EM Childe, 0 EM Albedo, and a 154 EM Sucrose.

The final EM we expect from Childe and Albedo is determined by the ff formulas:

If Albedo's A4 is factored in Sucrose's A4:

&lt;Character's Base EM&gt; + 125 + \(&lt;Sucrose's Base EM&gt; + 125\) \* 0.2 = 180.8

If not:

&lt;Character's Base EM&gt; + 125 + \(&lt;Sucrose's Base EM&gt;\) \* 0.2 = 155.8

As we can see from the images, Albedo's A4 must be active when Sucrose triggers her A4. We can confirm it's not bc of any durations ending because Sucrose has the same EM in both scenarios.

**Significance:**

25 EM is lost if Sucrose triggers first which may be important in making rotations when min-maxing reaction damage.

### **Diona's Burst at Constellation 6 Stacks with Sucrose's Passive.**

**By:** EggsD\#9603 and AngaFundarge\#4044

**Evidence:**

[**https://imgur.com/gallery/nEtn6yK**](https://imgur.com/gallery/nEtn6yK) **\(pre-test stat\)**

[**https://imgur.com/gallery/aLVqfnT**](https://imgur.com/gallery/aLVqfnT) **\(Only A4\)**

[**https://imgur.com/a/2ljFQHq**](https://imgur.com/a/2ljFQHq) **\(A1+A4 while in Diona's Burst, Sucrose on field\)**

**Significance:** This means if you pair Diona into your team, you can either stack even more Elemental Mastery towards your team as Sub-DPS, or you can allocate your Sucrose stats to DPS while not losing too much EM into the team. This only works inside Diona's burst range, get out of it and the buff is gone. Also the other characters can get the additional 200EM increase if you switch on top of the stack buff.  
So in essence, Diona's em stacks twice. Same theorem works for Albedo's burst as well and adding both of them altogether works too but as above, use Albedo first.  
The above suggests the formula for final EM for a buffed party member after Sucrose’s A1 and A4 is  
50 + \[\(&lt;sucrose em&gt; + &lt;additional party em buffs&gt;\)×0.2\] + &lt;additional em buffs&gt;.

### Sucrose freeze and petrify burst interaction

**By:** hz\#4084  
**Added:** 5/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839639101825089556/845824358214795324/transcript-sucrose-q-cc-and-freeze-interaction.html)

**Findings:** Sucrose's burst normally pulls smaller enemies towards the center, and knocks back all enemies with each pulse. Freeze and petrify prevents the knockback but does not prevent the SUCC on smaller enemies.

**Evidence:**

* Example on smaller enemies: [Link](https://cdn.discordapp.com/attachments/839639101825089556/839639647784927252/Genshin_Impact_2021.05.06_-_00.56.09.05.mp4)  
* Example on larger enemy: [Link](https://cdn.discordapp.com/attachments/839639101825089556/839639679774883840/Genshin_Impact_2021.05.06_-_00.59.11.06.mp4)
* Petrify: [Link](https://cdn.discordapp.com/attachments/839639101825089556/839650961516527658/Genshin_Impact_2021.05.06_-_01.51.25.08.mp4)

**Significance:** Sucrose's Burst can be used in conjunction with freeze or petrify to group enemies very tightly together without knocking them away from the center.
