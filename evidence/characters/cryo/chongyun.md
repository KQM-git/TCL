# Chongyun

## **3 Attack Rotation Time and Frames + Max Amounts of Shattered Procs with Chongyun Alone \(E is not shattered\)**

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

## **Chongyun C6 DMG bonus is Additive**

**By:** _\*\*_Artesians\#0002

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

## C2 CDR Based on Original Cooldown

**By:** Sparko53557\#7010 and LazyGeniusMan\#6252  
**Added:** 4/13/2021

**Finding:** Chongyun C2 reduces your cooldown based on your original cooldown instead of the increased cooldown while affected by Slowing Waters. 

**Evidence:** [https://youtu.be/mlaGmZoQw7k](https://youtu.be/mlaGmZoQw7k)

C2 Chongyun reduces Qiqi’s E cooldown by 4.5 seconds. It continues to do so while in Cecilia Garden 2 which increases your skill’s CD duration by 100%. 

**Significance**: Chongyun is largely ineffective at decreasing the debuff from slowing waters in a meaningful fashion.

### **Addendum**

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

