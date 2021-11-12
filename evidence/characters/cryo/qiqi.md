---
search: false
---

# Qiqi

**Main Page:**

{% page-ref page="../../../characters/cryo/qiqi.md" %}

## Burst Mechanics

### Talisman Healing Conditions

**By:** Ayzel\#7399  
**Added:** 04/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/832474168297259028/835378635598594058/transcript-qiqi-talisman-healing-conditions.html)

**Finding:**

Qiqi's Talisman will heal characters attacking the target to which the talisman is applied as long as the damage dealt to the target is a\) based on the attacking character's stats and b\) dealt by a character which is currently on-field.

**Evidence:**

[\[Video\] Environmental Damage doesn't heal](https://www.youtube.com/watch?v=WEfSS996nE8&ab_channel=Ayzel)

[\[Video\] Off-field character damage doesn't heal on-field character](https://www.youtube.com/watch?v=bjrZ7twLqdA&ab_channel=Ayzel)

[\[Video\] Off-field characters don't heal if they do damage](https://www.youtube.com/watch?v=bRuZ88GPx7Q&ab_channel=Ayzel)

[\[Video\] On-field character \(Jean\) healing with Aquila Favonia passive](https://www.youtube.com/watch?v=2jHs8gmwYsY&ab_channel=Ayzel)

**Significance:**

Shows how Qiqi's talisman interacts with sources of damage.

### Talisman Does Not Snapshot

**By:** Dooners#6709  
**Added:** 09/22/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/889381442432409630/890102971847815228/transcript-qiqi-talisman-healing-doesnt-snapshot.html)

**Finding:**  
Qiqi healing from applying talisman is dynamically based on current atk, and cannot snapshot atk buffs

**Evidence:**  
Qiqi baseline healing: [Youtube](https://www.youtube.com/watch?v=gIx8FpS2BIM)  
Qiqi buffed healing amount (Sara feather): [Youtube](https://www.youtube.com/watch?v=dzanV9B5Xjs)

Unbuffed: 2598 hp healed  
Buffed by Sara: 3365 hp healed  
Buffed and wait for bonus to wear off: 2598 hp healed

**Significance:**  
The timing of applying the talisman does not matter at all, all that matters is how much atk your character has when hitting the enemy

### Talisman Heals Regardless Dealing DMG Or Not

**By:** Nass008#8577  
**Added:** 10/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/895729399729623060/899174324060192798/transcript-qiqi-talisman-0-damage-healing.html)

**Finding:**  
Even moves that deal 0 damage (therefore no scaling with stats) can still trigger Qiqi’s talisman healing

This behavior is different compared to Albedo E and Raiden E (both of them have similarly worded conditions for in-game tooltips)

**Evidence:**  
1. Mona/Ayaka alternate sprints: [Imgur](https://imgur.com/WuUAXcA)  
2. Xingqiu/Barbara E hydro application: [Imgur](https://imgur.com/NWOh0qL)  
3. Jean Q self hydro swirls: [Imgur](https://imgur.com/vS8ueTt)  
4. Mona Q cast: [Imgur](https://imgur.com/3Qzy2My)  
5. Xingqiu Q activation: [Imgur](https://imgur.com/6FlHxOk)  
6. Hutao E activation: [Youtube](https://youtu.be/NHXlZiXdHhg) (credit to ItzSomebody#0029)  
7. Yoimiya E activation: [Youtube](https://youtu.be/O23CJGQtlCU) (credit to ItzSomebody#0029) 

**Significance:**
Additional insight on how game consider to be "taking damage" (which is not consistent between characters)

### Qiqi Talisman ICD

**By:** Nass008\#8577, NZPIEFACE\#8439  
**Added:** 10/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/895389894145355836/899122969400475648/transcript-qiqi-talisman-healing-icd.html)  

**Finding:**  
Healing from Fortune-Preserving Talisman (Qiqi Q) has cooldown (approximately 1 second).
In-game tooltip only mention the target taking damage as condition. However the talisman has cooldown on how fast it can heal.

The healing from talisman only occurs every ~1 seconds and healing ticks will not increase against multiple targets (suggesting cooldown is shared between targets).

To add to this, the healing cooldown appears to be shared across the team.

**Evidence:**  

[Single target](https://youtu.be/ryLga9DRUD0)

[Single target frame count](https://imgur.com/grbH8Qz)

[Multi target](https://youtu.be/X4P8ay0Cv14) 

[Multi target frame count](https://imgur.com/FrqMFZe) 

[Across team members](https://www.youtube.com/watch?v=OWTu6zEjH5A)

**Significance:**  
Clarification on Qiqi's healing mechanics

## Calculations/Resources

### Qiqi driver frame counting

**By:** Sir_pick_the_prick#2209, Nass008#8577, denmax#9293, Creepah#9480  
**Added:** 09/06/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/864092495369338900/884489611034890280/transcript-qiqi-copium-overdrive.html)

**Finding:**  

**Qiqi's Frame counting as a driver:**  
1. N1CW, N1CD, N2CD: [Speadsheet](https://docs.google.com/spreadsheets/d/1BLBhxU8wgHlHV5yTkFsyHvUUNdbwNgd0NtAZFk77sxE/edit?usp=sharing)
2. N1CJ, N2CW, N2CJ, N2J: [Speadsheet](https://docs.google.com/spreadsheets/d/1AHKoAHc7gbEKBoaTZh9UZNdjWtnaQc0SgGPNJpkWsFA/edit?usp=sharing)

**Off-field-trigger counts:**  
1. Fischl:  
- N1CJ: [Video](https://youtu.be/oDO1BaxHajE)  
- N2CJ: [Video](https://youtu.be/Ptz-4CnnT3g)  
- N2J: [Video](https://youtu.be/9RmLIAAu7Ks)  
2. Xingqiu:  
- N1CJ: [Video](https://youtu.be/LWIb66HLUOE)  
- N2CJ: [Video](https://youtu.be/JW-urnXz4FE)  
- N2J: [Video](https://youtu.be/UJ03pHyxvOo)  
3. Beidou:  
- N1CJ: [Video](https://youtu.be/Dm6HUn_KOiM)  
- N2CJ: [Video](https://youtu.be/w9j5O2HYPGw)  
- N2J: [Video](https://youtu.be/Jd-lAz7zlSQ)  
4. Albedo:  
- N2CJ: [Video](https://youtu.be/G2_yr8ObBhY)

**Significance:**  
For future Qiqi guide.
