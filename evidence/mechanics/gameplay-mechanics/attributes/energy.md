# Energy

## Elemental Skill Particle Production Database

**Added:** 12/6/2020

[Full Database](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0)

**Contributors**

* Base information came from this [post](https://twitter.com/_aomu/status/1317287212858433537)
* Steph\#3614
* Aerylle\#1254 
* JarJarThinks
* ＃＃\#0123
* JinJinx \(Mathalos Main\)\#5874

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

## Energy Recharge Does NOT Have a Softcap \(at least up to 300 ER\)

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

**By:** xf3\#3123  
**Added:** 09/06/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/883849971630227466/884470874378489856/transcript-aa-energy-revision.html)

**Finding:**  
* Plunges do not count for hits to proc AAE.
* Each weapon has a starting chance and a ramp up for when AAE does not get activated.

Table showing initial chance and ramp up for each weapon: [Imgur](https://imgur.com/a/OPHpZGH)

**Evidence:**  
[Datamine](https://github.com/Dimbreath/GenshinData/blob/9ea6dc32920e1176d938defb4a7b8cf42fe4f60c/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Common.json#L688)

[Spreadsheet](https://docs.google.com/spreadsheets/d/1A72e6GlV8tuzHlOUygokWtQYSc3hB7qsyKOqPUhyjj8/edit#gid=0) with Data and Evidence + Plunge Evidence: 

**Significance:**  
Attacking enemies with normal/charged attacks can give extra energy. Although in small amounts, being able to cast a burst because of the mechanic may make or break an abyss run. Ideally, this would be done when waiting for particles, waiting for cooldowns, and/or when outside of rotations.

## Energy Generation Update

**By:** Steph\#3614, wiremash\#0433, Zebin\#1678, Greyhound\#7836, mol\#3280  
**Added:** 6/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/845560562221056001/850107809877196870/transcript-energy-gen-numbers.html)

**Finding:** Several particle production number/ratio were wrong on the elemental particle production sheet.

**Evidence:** With help from datamine data, test on various character were recorded to ensure that the data were right.

Elemental skills that has a fixed production value will be cast for at least 50 times, while elemental skills that has a chance based production value will be cast for at least 200 times until the average stabilize to double confirm the ratio.

In addition, several new conditions to trigger particle generation had been added to specific character notes.

Datamine data here: [https://github.com/Dimbreath/GenshinData/tree/d633c8cfe5f1f383413a1f65f44d9bd018e5f9be](https://github.com/Dimbreath/GenshinData/tree/d633c8cfe5f1f383413a1f65f44d9bd018e5f9be) Elemental particle production sheet here: [https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit\#gid=0](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0)

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

