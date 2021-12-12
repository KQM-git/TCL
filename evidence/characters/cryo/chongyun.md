---
search: false
---

# Chongyun

**Main Page:**

{% page-ref page="../../../characters/cryo/chongyun.md" %}

## Attack Mechanics

### 3 Attack Rotation Time and Frames + Max Amounts of Shattered Procs with Chongyun Alone \(E is not shattered\)

**By:** shdwbld\#8103

**Findings:**

3 Attack Rotations  
3 Full Damage Rotation takes 11.2 Seconds in Cryo-Field with 8% Attack Speed \(buffed\). The duration of Cryo-Field is 10 seconds but charged attack is still infused due to a lingering effect.

**Rough frames and Seconds**

* Frames: 194 \(1 rotation\)
* Seconds: 3.07 \(1 rotation\)

**3 Attack Rotation's Shattered procs with E freezing enemy.**

* \(E Cast\)Apply Cryo \(freeze\)
* 1st. Shattered + Apply cryo \(freeze\)
* 2nd. Shattered + ICD
* 3rd. ICD
* 4th. Apply cryo \(freeze\)
* 5th. Shattered + ICD
* 6nd. ICD
* 7th. Apply cryo \(freeze\)
* 8th. Shattered + ICD
* 9th. ICD
* 10th. Apply cryo \(freeze\)
* 11th. Shattered + ICD
* 12th. ICD

**Conclusion:** From 12 basic attacks

5 shattered - \( E shattered\) Since initial slam to the ground of E has it's own ICD, you can have 2 shattered reactions on the 1st rotation. This will just make it so that you get 1 more reaction and by the end of the 3 rotations, end with a shattered reaction instead of an ICD.

## Skill Mechanics

### Frost Field Tick Rate

**By:** Monochrom9\#8058  
**Added:** 2/12/2021  

**Finding:**  
Chongyun's E applies its effects on eligible units once EVERY second, and that second is perfectly aligned with the CD of the skill such that it ticks on EXACTLY XX.0 for every second of the field duration.  

**Evidence:**  
[Lvl 1 E](https://youtu.be/Le1MJEOkyuw)  
In this video, I lose the infusion buff around 9 seconds of CD, and I walk back in immediately after 8.XX has passed. I do not get the infusion buff again until 7.0 on the CD, following the XX.0 rule.  

[Lvl 2 E](https://youtu.be/v0XZnj_4aEM)  
Chongyun’s E however can have the infusion linger for up to 3 seconds \(w/ E levels\), but as you can see with this video where I leveled it up to 2 \(2.1 sec duration\) from the previous video’s level 1 \(2.0 sec duration\) this doesn’t change the functionality of the cryo field in regards to XX.0 rule. It still applies at the same intervals, it just lingers for longer without needing to be reapplied.  

[Dodging E ticks](https://youtu.be/gS3WIyrQDAI)  
Of course since Chongyun’s E adheres to this rule this also means you can weave in and out of the field and never get any benefit as long as you avoid the intervals where buffs are granted.  

**Significance:**  
If you re-enter a buff field or swap to a new character immediately after this XX.0 has already passed, that character will be stranded with no buff until the next XX.0. So, when optimizing your rotations involving Chongyun, you can only apply the benefits of a field buff in intervals of exactly one second. If you swap to a new character on XX.1 seconds remaining CD of the skill, they will get the buff on the next tenth of a second, while if you swap to a new character when XX.9 seconds remains, they will be stranded without the buffs for almost a full second, potentially introducing some inconsistency/uninfused normal attacks.  Rotations that rely heavily on field buffs should time their swaps out so that they receive the necessary buffs in a timely manner.  

### **Chongyun E and A4 interactions**  

**By:** DeFault\#1802  
**Added:** 6/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/856905392633151528/858349517241450536/transcript-chongyun-e-and-a4-interactions.html)  

**Findings:**  
The various interactions between Chongyun’s A4 and E have been looked at and the findings are as follows:  

1. Chongyun’s A4 blade is considered as elemental skill damage and as such can proc the effects of ToM 4-pc bonus and Sacrificial Greatsword.  
2. Chongyun’s A4 blade snapshots the buffs received by the E skill on cast and buffs received after do not take effect. This suggests that Chong’s E and A4 work similarly to Geo traveler’s E and C2 snapshot interaction.  
3. Chongyun’s E area is not a field but instead a cylinder of unknown (But large) height and depth. Chongyun’s A4 can target any enemy within this large cylindrical area.  

**Evidence:**  

1. Chongyun’s A4 is considered E Skill damage. As show in the video, 4 ToM effect and Sacrificial Greatsword work with A4 Spirit Blade: [Video](https://www.youtube.com/watch?v=Y-AVX--FWlo)  
2. Chongyun’s A4 snapshots any buffs received by E skill: [Video](https://www.youtube.com/watch?v=HZuIDiry-Zs)  
3. Chongyun’s E field has a large cylindrical area and his A4 blade can target any enemy within it: [Video](https://www.youtube.com/watch?v=ezrIL3uUl3Y)  

**Significance:**  

1. Because Chongyun’s A4 is considered skill damage and can proc ToM, this can open up new builds for teams that can snapshot the buff before it runs out, furthermore Chongyun might be able to equip new artifact sets in the future that revolve around skill damage.  
2. As Chongyun’s A4 snapshots any buffs received by E skill, new rotations can be made that allow Chongyun’s E to snapshot buffs first to make the most of E and A4 skill damage.  
3. Due to the actual large area of Chongyun’s E field, it can be noted in the future that leaving the ground will not deactivate the effects of the field as long as you stay within its radius. Useful for characters that can use their E skill in the air such as Xiao. Also, less practical and more meme-y (and fun), Chongyun’s A4 can be used to snipe unsuspecting enemies near high cliffs and ravines.

## Constellation Mechanics

### C1: Ice Unleashed

#### **Chongyun C1 damage**  

**By:** elijam#7142  
**Added:** 08/07/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/866108653634846780/873536676675338280/transcript-tcl-damage-type-completion.html)  

**Findings:**  
Chongyun’s C1 damage instance has no ability type scaling tags. 

**Evidence:**  
Testing done by cartercr#4207  
Damage is consistent with and without 4bolide bonus - [Video](https://www.youtube.com/watch?v=htbi0XPPSC4)  
Damage is consistent with and without 2gambler bonus - [Video](https://www.youtube.com/watch?v=HJP9Mc_0V_0)  
Damage is consistent with and without 2NO bonus- [Video](https://www.youtube.com/watch?v=GIIEy7ieY8A)  

**Significance:**  
Damage calculations for Chongyun

### C2: Atmospheric Revolution

#### C2 CDR Based on Original Cooldown

**By:** Sparko53557\#7010 and LazyGeniusMan\#6252  
**Added:** 4/13/2021

**Finding:** Chongyun C2 reduces your cooldown based on your original cooldown instead of the increased cooldown while affected by Slowing Waters.

**Evidence:** [https://youtu.be/mlaGmZoQw7k](https://youtu.be/mlaGmZoQw7k)

C2 Chongyun reduces Qiqi’s E cooldown by 4.5 seconds. It continues to do so while in Cecilia Garden 2 which increases your skill’s CD duration by 100%.

**Significance**: Chongyun is largely ineffective at decreasing the debuff from slowing waters in a meaningful fashion.

**Addendum**

**By:** LazyGeniusMan\#6252

**Finding:** When used with any cooldown reduction\(CDR\) from the active character, Chongyun’s C2 reduces your cooldown after the CDR from the active character and Slowing Waters.

```python
Chongyun's C2 in Slowing Waters

let x = (E-cooldown) * (CDR from own character)
let y = (E-cooldown) * (CDR from own character) * (Chongyun C2’s CDR)
(E-cooldown) * (CDR from own character) * (Slowing Water Debuff) – (x - y) = E Cooldown
```

**For example:**

```python
Bennett’s E’s CD : 5 s 
w/ A1            : 4 s   [5 * .8 = 4]
w/ A1, A4        : 2 s   [5 * .8 * .5 = 2]
w/ A1, A4, CY C2 : 1.7 s [5 * .8 *.5 *.85 = 1.7]
2 – 1.7 = .3 seconds 

Bennett’s E CD w/ A1, A4, and Slowing Waters: 4 seconds 
5 * .8 * .5 * 2 = 4 seconds. 

Bennett’s E CD w/ A1, A4, Slowing Waters and CY C2: 3.7 seconds 
4 - .3 = 3.7 seconds
```

**Evidence:** [https://imgur.com/a/I8TM0uV](https://imgur.com/a/I8TM0uV)

**Significance:** This suggests that when another character grants a different character CDR it is treated as a separate buff that is applied without taking debuffs in account.  

### C6: Rally of Four Blades

#### **Chongyun C6 DMG bonus is Additive**

**By:** Artesians\#0002

**Findings:**

C6 Chongyun’s “Spirit Blade - Cloud-parting Star deals 15% more DMG to enemies with a lower percentage of their Max HP” is an additive bonus.

**Evidence:**

* Video with the enemy not having a lower percentage of his Max HP than Chongyun:
  * [https://streamable.com/u9n1r4](https://streamable.com/u9n1r4) 
* Video with the enemy having a lower percentage of his Max HP than Chongyun:
  * [https://streamable.com/7hec30](https://streamable.com/7hec30)

\(1+0.15+0.223\)/\(1+0.223\) = 320/285 math by **Robin**  
Testing was done with a Lv. 70 Chongyun & 22.3% Cryo DMG Goblet.

**Significance:**

**+15% to Cryo Damage** + Noblesse - the bonus gained from constellation 6 is about ~7% \(ballpark estimate by Kleeful\) for a well built Chongyun. DMG bonus being additive implies that it would deal less damage than previously expected, where it was assumed to be a multiplicative bonus.

