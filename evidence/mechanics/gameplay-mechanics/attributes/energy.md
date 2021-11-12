---
search: false
---

# Energy

## Elemental Skill Particle Production Database

**Added:** 12/6/2020

[Full Database](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0) maintained by Steph\#3614

## Only On-Field Characters Gain Energy By Auto Attacks

**By:** c2authoritarian\#5277 and Pinupski\#9999

**Added:** 12/7/2020

Updated: 4/3/2021

**Finding:** Energy recharge gained through auto attacking only applies to the character on field

**Evidence:** The original author didn't provide video evidence, but it was approved due to being easily replicated**.** Special thanks go to Pinupski\#9999 for validating this entry with video evidence.

1. Enemy's health was depleted to ~5% and let to reset to full HP, removing the variable of HP particles
2. [Autoattacking](https://youtu.be/yMstsGRLy5s): Used all bursts to reset the burst meter, then auto attacked with Zhongli until burst was charged
3. [Conclusion](https://youtu.be/3W_Gjd5LfDM): Characters other than Zhongli still had 0 energy.

**Significance:** Off-field characters cannot gain energy via auto attacks from the active character .

## Energy Recharge **D**oes NOT Have a Softcap \(at least up to 300 ER\)

**By:** muakasan\#2792  
**Added:** 4/4/2021

**Evidence:**

1. Bennett was given 300.1% ER
2. Funneled non-pyro elemental particles to Bennett while off-field
3. [Took 33 particles](https://youtu.be/8WRgwQf-zh0), which is almost exactly what was expected

```python
0.6 energy per particle * 3.001 ER * 33 particles = 59.420
```

**Significance:** Helpful when figuring out how much energy recharge is needed to build on a character in a specific team.

## Auto Attack Energy Mechanics

**By:** xf3\#3123 and Zeitraffer\#1074  
**Added:** 5/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839361536900595732/840061797561139211/transcript-auto-attack-energy-mechanics.html)

**Finding:**  
Normal attacks have a chance on hit to give the on field character about 1 energy. It can be seen when the on field character's vision flashes. It is not effected by ER% and can work with charged attacks. Multi-hit attacks, such as Keqing's N1C, count each hit individually for proc chance. It also gives energy regardless if the user can get particles or not, such as in Xiao's Bane of All Evil.

**Evidence:** [Google sheets link](https://docs.google.com/spreadsheets/d/1A72e6GlV8tuzHlOUygokWtQYSc3hB7qsyKOqPUhyjj8/edit?usp=sharing)  
Spreadsheet includes videos of ER% testing, multi-hit attack testing, on hit testing, and Xiao's Bane of All Evil Testing. It also includes graphs illustrating the data spread of the tests. From the graphs and averages, multi-hit/projectile attacks on average proc the effect more often \(N Spam KQ vs N1C KQ and N Spam Diona vs N Spam Amber C1\)

**Significance:**  
Attacking enemies with normal/charged attacks can give extra energy. Although in small amounts, being able to cast a burst because of the mechanic may make or break an abyss run. Ideally, this would be done when waiting for particles, waiting for cooldowns, and/or when outside of rotations.

## Energy Generation Update

**By:** Steph\#3614, wiremash\#0433, Zebin\#1678, Greyhound\#7836, mol\#3280  
**Added:** 6/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/845560562221056001/850107809877196870/transcript-energy-gen-numbers.html)

**Finding:** Several particle production number/ratio were wrong on the elemental particle production sheet.

**Evidence:** Tests on various character were recorded to ensure that the data were right.

Elemental skills that has a fixed production value will be cast for at least 50 times, while elemental skills that has a chance based production value will be cast for at least 200 times until the average stabilize to double confirm the ratio.

In addition, several new conditions to trigger particle generation had been added to specific character notes.

Elemental particle production sheet here: [https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit\#gid=0](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0)

**Conclusion:** Changes made to the sheet were as follow

* Amber: 3~4 \(1:9\) -&gt; 4 \(-\)
* Anemo MC Hold E: 2~4 \(1:9:1\) -&gt; 3~4 \(2:1\)
* Geo MC: 2~4 \(1:2:1\) -&gt; 3~4 \(2:1\)
* Chongyun: 3~4 \(1:1\) -&gt; 4 \(-\)
* Diona: 1 per paw -&gt; 0~1 \(1:4\) check per paw \(5 -&gt; 4 particle average per hold, 2 -&gt; 1.6 particle average per tap\) 
* Jean: 2~3 \(1:1\) -&gt; 2~3 \(1:2\)
* Kaeya: 2~3 \(1:1\)/4~5 \(1:1\) -&gt; 2~3 \(1:2\)/4~5 \(1:2\)
* Keqing: 2~3 \(9:1\) -&gt; 2~3 \(1:1\), included extra note "Produce particle on leap connect or Thunderclap Slash connect. Both produce same amount of particle."
* Klee: 3~4 \(1:9\) -&gt; 4 \(-\)
* Lisa: 3~5 \(1:1:1\) -&gt; 5 \(-\)
* Mona: 3~4 \(1:1\) -&gt; 3~4 \(2:1\), included extra note "only produce particle when final explosion connects"
* Ningguang: 3~4 \(1:9\) -&gt; 3~4 \(3:2\) 
* Razor Tap E: 2~3 \(1:9\) -&gt; 3 \(-\)
* Razor Hold E: 3~4 \(1:9\) -&gt; 4 \(-\)
* Sucrose: 3~4 \(1:1\) -&gt; 4 \(-\)
* Venti Tap E: 2~3 \(1:9\) -&gt; 3 \(-\)
* Venti Hold E: 3~4 \(1:9\) -&gt; 4 \(-\)
* Xingqiu: 4~5 \(1:1\) -&gt; 5 \(-\)
* Xinyan: 3~4 \(1:9\) -&gt; 4 \(-\)
* Xiao: 2~3 \(1:9\) -&gt; 3 \(-\)

