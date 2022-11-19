---
search: false
sidebar_position: 3000
---

# Energy

<Card item={require('../../combat-mechanics/energy.md')} />

## Elemental Skill Particle Production Database

**Added:** <Version date="2020-12-06" />  
**Last tested:** <VersionHl date="2020-12-06" />

[Full Database](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0) maintained by Steph\#3614

## Only On-Field Characters Gain Energy By Auto Attacks

**By:** c2authoritarian\#5277 and Pinupski\#9999  
**Added:** <Version date="2020-12-07" />  
**Last tested:** <VersionHl date="2020-12-07" />  
**Updated:** 2021-04-03

**Finding:** Energy Recharge gained through Normal Attacking only applies to the character on field

**Evidence:** The original author didn't provide video evidence, but it was approved due to being easily replicated**.** Special thanks go to Pinupski\#9999 for validating this entry with video evidence.

1. Enemy's health was depleted to ~5% and let to reset to full HP, removing the variable of HP Particles
2. [Autoattacking](https://youtu.be/yMstsGRLy5s): Used all Bursts to reset the Burst meter, then Normal Attacked with Zhongli until Burst was charged
3. [Conclusion](https://youtu.be/3W_Gjd5LfDM): Characters other than Zhongli still had 0 Energy.

**Significance:** Off-field characters cannot gain Energy via Normal Attacks from the active character .

## Energy Recharge Does NOT Have a Softcap \(at least up to 300 ER\)

**By:** muakasan\#2792  
**Added:** <Version date="2021-04-04" />  
**Last tested:** <VersionHl date="2021-04-04" />

**Evidence:**

1. Bennett was given 300.1% ER
2. Funneled non-Pyro Elemental Particles to Bennett while off-field
3. [Took 33 Particles](https://youtu.be/8WRgwQf-zh0), which is almost exactly what was expected

```python
0.6 Energy per Particle * 3.001 ER * 33 Particles = 59.420
```

**Significance:** Helpful when figuring out how much Energy Recharge is needed to build on a character in a specific team.

## Auto Attack Energy Mechanics

**By:** xf3\#3123 and Zeitraffer\#1074  
**Added:** <Version date="2021-05-06" />  
**Last tested:** <VersionHl date="2021-05-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839361536900595732_840061797561139211_transcript-auto-attack-energy-mechanics.html)

**Finding:**  
Normal attacks have a chance on hit to give the on field character about 1 Energy. It can be seen when the on field character's vision flashes. It is not effected by ER% and can work with charged attacks. Multi-hit attacks, such as Keqing's N1C, count each hit individually for proc chance. It also gives Energy regardless if the user can get Particles or not, such as in Xiao's Bane of All Evil.

**Evidence:** [Google sheets link](https://docs.google.com/spreadsheets/d/1A72e6GlV8tuzHlOUygokWtQYSc3hB7qsyKOqPUhyjj8/edit?usp=sharing)  
Spreadsheet includes videos of ER% testing, multi-hit attack testing, on hit testing, and Xiao's Bane of All Evil Testing. It also includes graphs illustrating the data Spread of the tests. From the graphs and averages, multi-hit/projectile attacks on average proc the effect more often \(N Spam KQ vs N1C KQ and N Spam Diona vs N Spam Amber C1\)

**Significance:**  
Attacking enemies with normal/charged attacks can give extra Energy. Although in small amounts, being able to cast a Burst because of the mechanic may make or break an abyss run. Ideally, this would be done when waiting for Particles, waiting for cooldowns, and/or when outside of rotations.

## Energy Generation Update

**By:** Steph\#3614, wiremash\#0433, Zebin\#1678, Greyhound\#7836, mol\#3280  
**Added:** <Version date="2021-06-03" />  
**Last tested:** <VersionHl date="2021-06-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845560562221056001_850107809877196870_transcript-energy-gen-numbers.html)

**Finding:** Several Particle production number/ratio were wrong on the Elemental Particle production sheet.

**Evidence:** Tests on various character were recorded to ensure that the data were right.

Elemental skills that has a fixed production value will be cast for at least 50 times, while Elemental skills that has a chance based production value will be cast for at least 200 times until the average stabilize to double confirm the ratio.

In addition, several new conditions to trigger Particle generation had been added to specific character notes.

Elemental Particle production sheet here: [https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit\#gid=0](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0)

**Conclusion:** Changes made to the sheet were as follow

* Amber: 3~4 \(1:9\) -&gt; 4 \(-\)
* Anemo MC Hold E: 2~4 \(1:9:1\) -&gt; 3~4 \(2:1\)
* Geo MC: 2~4 \(1:2:1\) -&gt; 3~4 \(2:1\)
* Chongyun: 3~4 \(1:1\) -&gt; 4 \(-\)
* Diona: 1 per paw -&gt; 0~1 \(1:4\) check per paw \(5 -&gt; 4 Particle average per hold, 2 -&gt; 1.6 Particle average per tap\)
* Jean: 2~3 \(1:1\) -&gt; 2~3 \(1:2\)
* Kaeya: 2~3 \(1:1\)/4~5 \(1:1\) -&gt; 2~3 \(1:2\)/4~5 \(1:2\)
* Keqing: 2~3 \(9:1\) -&gt; 2~3 \(1:1\), included extra note "Produce Particle on leap connect or Thunderclap Slash connect. Both produce same amount of Particle."
* Klee: 3~4 \(1:9\) -&gt; 4 \(-\)
* Lisa: 3~5 \(1:1:1\) -&gt; 5 \(-\)
* Mona: 3~4 \(1:1\) -&gt; 3~4 \(2:1\), included extra note "only produce Particle when final explosion connects"
* Ningguang: 3~4 \(1:9\) -&gt; 3~4 \(3:2\)
* Razor Tap E: 2~3 \(1:9\) -&gt; 3 \(-\)
* Razor Hold E: 3~4 \(1:9\) -&gt; 4 \(-\)
* Sucrose: 3~4 \(1:1\) -&gt; 4 \(-\)
* Venti Tap E: 2~3 \(1:9\) -&gt; 3 \(-\)
* Venti Hold E: 3~4 \(1:9\) -&gt; 4 \(-\)
* Xingqiu: 4~5 \(1:1\) -&gt; 5 \(-\)
* Xinyan: 3~4 \(1:9\) -&gt; 4 \(-\)
* Xiao: 2~3 \(1:9\) -&gt; 3 \(-\)
