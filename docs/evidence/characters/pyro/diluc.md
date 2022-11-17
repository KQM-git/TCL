---
search: false
---

# Diluc

**Main Page:**

<Card item={require('../../../characters/pyro/diluc.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1p0blrnuM7JvwU2QMdZdLayYqP3-7OMDgYC6GDQNn_QU/edit?usp=sharing) - Kolibri\#7675

## Skill Mechanics

### Searing Onslaught Extension via Freeze

**By:** xf3\#3123  
**Added:** <Version date="2021-06-07" />  
**Last tested:** <VersionHl date="2021-06-07" />

**Finding:**  
Getting Frozen mid Searing Onslaught 2 will allow you to extend the Skill. This allows you to use the Skill multiple times for one rotation.

**Evidence:**  
[https://youtu.be/mjb41Yp2V_Y](https://youtu.be/mjb41Yp2V_Y)

Diluc is Frozen mid Searing Onslaught 2 and the Skill is changed to Searing Onslaught 3. However, he is still able to recast Searing Onslaught 2 multiple times after getting out of the Freeze. I could not get this to replicate for Searing Onslaught 1 and 3.

Other testing was done with other characters with multi-use skills and none of them have been able to reuse their skills out of Freeze. This is likely due to how Diluc's Searing Onslaught does not have extra charges and does not have a reset mechanic \(i.e. xiao or ningguang\)

**Significance:**  
When running Barbara or Xingqiu, self Freeze can be an upside in certain situations \(i.e. waiting for XQ's Q to come off CD or regain Energy\) allowing you to get bonus damage off for free if done correctly.

<Card item={require('../../../characters/pyro/diluc.md')} />

## Burst Mechanics

### Diluc Burst ICD

**By:** Isu\#6867  
**Added:** <Version date="2021-05-29" />  
**Last tested:** <VersionHl date="2021-05-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845447638719266826_848323323459928085_transcript-diluc-burst-icd.html)

**Finding:**  
Diluc's Elemental Burst follows a 5-hit rule on elemental application rather than the standard 3-hit rule.

**Evidence:**  
[Video](https://youtu.be/BaBQi0GZOEU)

**Significance:**  
The vape damage potential of Diluc's Burst is lower than one might expect based on the usual 3-hit rule of elemental application. In the above clip, the last hit with higher MV would have also vaped if the 3-hit rule were followed, but instead, only the 1st and 6th hit were vaped. On the other hand, due to the nature of Diluc's Burst and how it often does not get its maximum hits anyway, the silver lining is that the longer ICD makes it less likely to result in an unwanted Pyro aura.

### Diluc Q initial hit is 2U

**By:** ceeeleste#3568  
**Added:** <Version date="2021-08-20" />  
**Last tested:** <VersionHl date="2021-08-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_877477456519512064_878178628079353886_transcript-diluc-q-gauge-is-2u-and-not-1u-on-the-initial-hit.html)

**Finding:**  
Diluc Q initial hit is 2U

The initial hit also completely eats up the Hydro aura from Xingqiu, so Q > N1 > E at the start does not consistently vape anymore.

**Evidence:**  
Initial hit applies 2U  
[Imgur](https://imgur.com/Hb1NJ7w) - 12s before Pyro aura decayed for Q initial hit, 9.5s for E

Q > N1 > E not working  
[Imgur](https://imgur.com/Su0TaYR)  
[Imgur](https://imgur.com/hZPz7Cd)

Q > N2 > E instead - working  
[Imgur](https://imgur.com/Zxat4TI)

Footage from March recorded by DilucMains also shows that the Q Burst removed Hydro completely aswell, so it always has been 2U and not a recent change.  
Q > N1 (cancel hit) > E > N2 > E...  
[Imgur](https://imgur.com/HIzeN1F)  
Their combo instead has them start the NA animation then cancel it with E, so it still procs Xingqiu's blades without applying Pyro and allows them to vape the rest of their combo

**Significance:**  
Better Diluc rotation.

## Ascension Mechanics

### A4: Blessing of the Phoenix

#### Diluc Burst Damage Benefits from A4

**By:** jamberry\#7142  
**Added:** <Version date="2021-12-12" />  
**Last tested:** <VersionHl date="2021-12-12" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917975114987999382_919073580216643584_transcript-diluc-burst-benefits-from-a4.html)

**Finding:**  
Diluc's Burst damage will benefit from his A4 talent, Blessing of the Phoenix, which grants Pyro DMG% for the duration of the Pyro infusion granted by his Burst.

**Evidence:**  
[YouTube](https://youtu.be/kgvoO5fdECw)

* Diluc has 443 Attack, Level 8 Dawn has 326.40% Slashing Damage
* `326.40 * 443 * (1 + .5) * (1 + .2) * .9 * (81 + 100)/(85 + 100 + 81 + 100) = 1158`
* Damage in game = 1159, which is within rounding error.

**Significance:**  
More damage for Diloog.
