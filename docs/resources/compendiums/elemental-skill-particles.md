---
description: Elemental Particle generation by character.
---

# Elemental Skill Particles Database

## Elemental Particle/Orb to Energy Conversion

|                                           | Elemental Particle | Elemental Orb | Clear Particle | Clear Orb |
| :---------------------------------------- | :----------------: | :-----------: | :------------: | :-------: |
| On-Field, same Element                    |        3.0         |      9.0      |      2.0       |    6.0    |
| Off-field, 4 man party, same Element      |        1.8         |      5.4      |      1.2       |    3.6    |
| Off-field, 3 man party, same Element      |        2.1         |      6.3      |      1.4       |    4.2    |
| Off-field, 2 man party, same Element      |        2.4         |      7.2      |      1.6       |    4.8    |
| On-Field, different Element               |        1.0         |      3.0      |      2.0       |    6.0    |
| Off-field, 4 man party, different Element |        0.6         |      1.8      |      1.2       |    3.6    |
| Off-field, 3 man party, different Element |        0.7         |      2.1      |      1.4       |    4.2    |
| Off-field, 2 man party, different Element |        0.8         |      2.4      |      1.6       |    4.8    |

## Elemental Skill Particles

*Updated for Patch 3.2a.*

Production ratio shows the rate of the amount of Particles that will be produced \(for example 2~3 \(1:2\) means 33.33% chance of producing 2 Particles and 66.67% chance of producing 3 Particles\).

<Tabs>
<TabItem value="anemo" label="Anemo">

| Character               | Notes                                                                                                                                                                                   | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| ----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------------ | :---------------- | :------------ |
| Heizou                  | Skill produces Particles based on Declension Stacks consumed. 0-1 stacks produces 2 Particles. 2-3 stacks produces 2~3 (1:1) particles. 4 stacks produces 3 Particles. 4 stacks assumed | 10             | 3 \(-\)             | 3 \(-\)           | 18.0          |
| Jean                    | Hold/Tap produce same Particles                                                                                                                                                         | 6              | 2~3 \(1:2\)         | 2.67              | 26.7          |
| Kazuha                  | C1 (**Scarlet Hills**)                                                                                                                                                                  | 5.4            | 3 \(-\)             | 3.00              | 33.3          |
| Kazuha                  |                                                                                                                                                                                         | 6.1            | 3 \(-\)             | 3.00              | 30.0          |
| Kazuha                  | C1 (**Scarlet Hills**), Skill Hold                                                                                                                                                      | 8.1            | 4 \(-\)             | 4.00              | 29.6          |
| Kazuha                  | Skill Hold                                                                                                                                                                              | 9              | 4 \(-\)             | 4.00              | 26.7          |
| Sayu                    | Hold E > tap E to cancel roll immediately (roll connect produce 1 Particle, Fuufuu Whirlwind kick produce 2 Particle)                                                                   | 6.5            | 3 \(-\)             | 3.00              | 27.7          |
| Sayu                    |                                                                                                                                                                                         | 6              | 2 \(-\)             | 2.00              | 20.0          |
| Sayu                    | Skill Hold \[Roll connect produce 1 Particle, Fuufuu Whirlwind Kick produce 2 Particle, 3s icd, 10s full duration \(4 procs on 0s, 3s, 6s, 9s)\, cd only starts after Skill ends\]      | 21             | 6 \(-\)             | 6.00              | 17.1          |
| Sucrose                 | C0                                                                                                                                                                                      | 15             | 4 \(-\)             | 4.00              | 16.0          |
| Traveler<br />\(Anemo\) |                                                                                                                                                                                         | 5              | 2 \(-\)             | 2.00              | 24.0          |
| Traveler<br />\(Anemo\) | Skill Hold                                                                                                                                                                              | 8              | 3~4 \(2:1\)         | 3.33              | 25.0          |
| Venti                   |                                                                                                                                                                                         | 6              | 3 \(-\)             | 3.00              | 30.0          |
| Venti                   | Skill Hold                                                                                                                                                                              | 15             | 4 \(-\)             | 4.00              | 16.0          |
| Xiao                    | During **Bane of All Evil**, Skill produces no Particles. Particle/min assumes 0% **Bane of All Evil** uptime                                                                           | 10             | 3 \(-\)             | 3.00              | 18.0          |

</TabItem>
<TabItem value="cryo" label="Cryo">

| Character | Notes                                                                | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| --------- | :------------------------------------------------------------------- | :------------- | :------------------ | :---------------- | :------------ |
| Aloy      | **Chillwater Bomblets** produce no Particles                         | 20             | 5 \(-\)             | 5.00              | 15.0          |
| Ayaka     |                                                                      | 10             | 4~5 \(1:1\)         | 4.50              | 27.0          |
| Chongyun  |                                                                      | 15             | 4 \(-\)             | 4.00              | 16.0          |
| Diona     | Skill Hold, assuming all paws hit, each paw does a 0~1 \(1:4\) check | 15             | 0~5 \(-\)           | 4.00              | 16.0          |
| Diona     | Assuming all paw hit, each paw does a 0~1 \(1:4\) check              | 6              | 0~2 \(-\)           | 1.60              | 16.0          |
| Eula      | Skill Hold, C2 \(**Lady of Seafoam**\)                               | 4              | 2~3 \(1:1\)         | 2.50              | 37.5          |
| Eula      | Skill Tap                                                            | 4              | 1~2 \(1:1\)         | 1.50              | 22.5          |
| Eula      | Skill Hold                                                           | 10             | 2~3 \(1:1\)         | 2.50              | 15.0          |
| Ganyu     | Skill produce 2 Particles on connect, 2 on expiry explosion connect  | 10             | 4 \(-\)             | 4.00              | 24.0          |
| Kaeya     | A4 \(**Heart of the Abyss**\), 1 extra Particle per enemy, max 2     | 6              | 4~5 \(1:2\)         | 4.67              | 46.7          |
| Kaeya     |                                                                      | 6              | 2~3 \(1:2\)         | 2.67              | 26.7          |
| Qiqi      | Skill produces no Particles                                          | 30             | 0 \(-\)             | 0.00              | 0.0           |
| Rosaria   | Only produce Particle if you connect the 2nd hit                     | 6              | 3 \(-\)             | 3.00              | 30.0          |
| Shenhe    | Skill Tap                                                            | 10             | 3 \(-\)             | 3.00              | 18.0          |
| Shenhe    | Skill Hold                                                           | 15             | 4 \(-\)             | 4.00              | 16.0          |

</TabItem>
<TabItem value="dendro" label="Dendro">

| Character                | Notes                                                                           | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| ------------------------ | :------------------------------------------------------------------------------ | :------------- | :------------------ | :---------------- | :------------ |
| Collei                   | Generates Particles on initial Skill hit.                                       | 12             | 3 (-)               | 3.00              | 15.0          |
| Nahida                   | Initial hit produces no Particles, TKP procs produce 3 Particles with a 7s ICD. | 7              | 3 \(-\)             | 3.00              | 25.7          |
| Tighnari                 |                                                                                 | 12             | 3~4 \(1:1\)         | 3.50              | 17.5          |
| Traveler<br />\(Dendro\) |                                                                                 | 8              | 2~3 \(1:1\)         | 2.50              | 18.8          |

</TabItem>
<TabItem value="electro" label="Electro">

| Character                 | Notes                                                                                                                                                                                                                                         | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| ------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------------ | :---------------- | :------------ |
| Beidou                    | **Tidecaller** produce 2 Particle at baseline, increase Particle by 1 every time a hit is received while holding, max 2. Particle/min assumes always full charge                                                                              | 7.5            | 2~4 \(-\)           | 4.00              | 32.0          |
| Cyno                      | During Burst. Assuming 100% Burst uptime.                                                                                                                                                                                                     | 3.5            | 1~2 \(1:2\)         | 1.33              | 22.8          |
| Cyno                      | Outside of Burst                                                                                                                                                                                                                              | 7.5            | 2~3 \(1:1\)         | 2.50              | 20.0          |
| Dori                      | A4 Passive \(**Compound Interest**\) generates 5 Energy per 100% ER. Not included in this table.                                                                                                                                              | 9              | 2 \(-\)             | 2.00              | 13.3          |
| Fischl                    | C6 \(**Evernight Raven**\) Oz, Oz duration doubled with well timed Burst                                                                                                                                                                      | 25             | 0~12 \(-\)          | 8.04              | 38.6          |
| Fischl                    | Off-field \(Oz\) \(Oz duration doubled with well timed Burst\)                                                                                                                                                                                | 25             | 0~10 \(-\)          | 6.70              | 32.2          |
| Fischl                    | C6 \(**Evernight Raven**\) Oz                                                                                                                                                                                                                 | 25             | 0~12 \(-\)          | 8.04              | 19.3          |
| Fischl                    | Doesn't have to stay on field \(Oz\). Does a 0~1 \(1:2\) check on every Oz's non-constellation 6 non-talent attack, 1s icd interval                                                                                                           | 25             | 0~10 \(-\)          | 6.70              | 16.1          |
| Keqing                    | Produce Particle on leap connect or Thunderclap Slash connect. Both produce same amount of Particle                                                                                                                                           | 7.5            | 2~3 \(1:1\)         | 2.50              | 20.0          |
| Lisa                      | Skill Hold                                                                                                                                                                                                                                    | 16             | 5 \(-\)             | 5.00              | 18.8          |
| Raiden                    | Skill itself produces no Particles, every type of damage \(including non-EC reaction triggered by Skill\) triggers coordinated attack, which produce Particle \(0~1 \(1:1\) check, 0.9s icd, does not buffer\), doesn't have to stay on field | 0.9            | 0~1 \(1:1\)         | 0.50              | 33.3          |
| Razor                     |                                                                                                                                                                                                                                               | 6              | 3 \(-\)             | 3.00              | 30.0          |
| Razor                     | Skill Hold                                                                                                                                                                                                                                    | 10             | 4 \(-\)             | 4.00              | 24.0          |
| Sara                      | Particle produced on **Tengu Juurai: Ambush** connect                                                                                                                                                                                         | 10             | 3 \(-\)             | 3.00              | 18.0          |
| Shinobu                   | C4 "To Sever Sealing". Does a 0~1 check check every time Thundergrass Mark deals Electro DMG. No CD.                                                                                                                                          | 15             | 0~1 \(11:9\)        | 5.85              | 23.40         |
| Shinobu                   | C2 "To Forsake Fortune". Does a 0~1 (45%) check every time Grass Ring of Sanctification deals Electro DMG. 1.5s ICD.                                                                                                                          | 15             | 0~1 \(11:9\)        | 4.50              | 18.00         |
| Shinobu                   | Does a 0~1 (45%) check every time Grass Ring of Sanctification deals Electro DMG. 1.5s ICD.                                                                                                                                                   | 15             | 0~1 \(11:9\)        | 3.60              | 14.4          |
| Traveler<br />\(Electro\) | Multiple Thunder Shadow connect doesn't change the result                                                                                                                                                                                     | 13.5           | 1 \(-\)             | 1.00              | 4.4           |
| Yae Miko                  | Skill itself doesn't produce Particles. 1 Particle is produced every time a Sesshou Sakura hits. When multiple Sesshou Sakuras are present, only one of them will produce Particles                                                           | 4              | 1 \(-\)             | 1.00              | 15.0          |

</TabItem>
<TabItem value="geo" label="Geo">

| Character             | Notes                                                                                                                                    | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| --------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------------ | :---------------- | :------------ |
| Albedo                | **Solar Isotoma** connect does not produce Particle. **Transient Blossom** proc on CD \(2s\). Doesn't have to stay on field, 100% uptime | 2              | 0~1 \(1:2\)         | 0.67              | 20.1          |
| Gorou                 | C1 \(**Rushing Hound: Swift as the Wind**\), proc off cooldown                                                                           | 8              | 2 \(-\)             | 2.00              | 15.0          |
| Gorou                 |                                                                                                                                          | 10             | 2 \(-\)             | 2.00              | 12.0          |
| Itto                  |                                                                                                                                          | 10             | 3~4 \(1:1\)         | 3.50              | 21.0          |
| Ningguang             | C2 \(**Shock Effect**\), proc off cooldown                                                                                               | 6              | 3~4 \(3:2\)         | 3.40              | 34.0          |
| Ningguang             |                                                                                                                                          | 12             | 3~4 \(3:2\)         | 3.40              | 17.0          |
| Noelle                | Skill produces no Particles                                                                                                              | 24             | 0 \(-\)             | 0.00              | 0.0           |
| Traveler<br />\(Geo\) | A2 \(**Shattered Darkrock**\)                                                                                                            | 6              | 3~4 \(2:1\)         | 3.33              | 33.3          |
| Traveler<br />\(Geo\) |                                                                                                                                          | 8              | 3~4 \(2:1\)         | 3.33              | 25.0          |
| Yun Jin               | Skill Hold Level 2, C1 \(**Thespian Gallop**\)                                                                                           | 7.38           | 3 \(-\)             | 3.00              | 24.4          |
| Yun Jin               | Skill Hold Level 2                                                                                                                       | 9              | 3 \(-\)             | 3.00              | 20.0          |
| Yun Jin               | Skill Hold Level 1, C1 \(**Thespian Gallop**\)                                                                                           | 7.38           | 2~3 \(3:2\)         | 2.40              | 19.5          |
| Yun Jin               | Skill Tap, C1 \(**Thespian Gallop**\)                                                                                                    | 7.38           | 2 \(-\)             | 2.00              | 16.3          |
| Yun Jin               | Skill Hold Level 1                                                                                                                       | 9              | 2~3 \(3:2\)         | 2.40              | 16.0          |
| Yun Jin               | Skill Tap                                                                                                                                | 9              | 2 \(-\)             | 2.00              | 13.3          |
| Zhongli               | Skill Hold produces no Particle, 50% chance to produce Particle on hit and pulse. 100% uptime                                            | 2              | 0~1 \(1:1\)         | 0.50              | 15.0          |

</TabItem>
<TabItem value="hydro" label="Hydro">

| Character | Notes                                                                                                                                                                                                                                       | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| --------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------- | :------------------ | :---------------- | :------------ |
| Ayato     |                                                                                                                                                                                                                                             | 12             | 1~2 \(1:1\)         | 1.50              | 7.5           |
| Barbara   | Skill produces no Particles                                                                                                                                                                                                                 | 32             | 0 \(-\)             | 0.00              | 0.0           |
| Candace   | C4. Skill produces 2 Particles at baseline, increases Particles by 1 when fully held or hit. Particle/min assumes always full hold.                                                                                                         | 6              | 3 \(-\)             | 3.00              | 30.0          |
| Candace   | Skill produces 2 Particle at baseline, increase Particle by 1 while fully held or hit. Particle/min assumes always full hold.                                                                                                               | 9              | 3 \(-\)             | 3.00              | 20.0          |
| Candace   | Particle/min assumes Tap without being hit.                                                                                                                                                                                                 | 6              | 2 \(-\)             | 2.00              | 20.0          |
| Kokomi    | Does a 0~1 \(1:2\) check once on every instance of damage **Bake-Kurage** does as long as it stays on the field, 2s icd within same **Bake-Kurage**, 100% uptime through Tamaooya's Casket talent extension, does not have to stay on field | 20             | 0~1 \(1:2\)         | 0.66              | 19.8          |
| Kokomi    | Does a 0~1 \(1:2\) check once on every instance of damage **Bake-Kurage** does as long as it stays on the field, 2s icd within same **Bake-Kurage**, does not have to stay on field                                                         | 20             | 0~1 \(-\)           | 3.96              | 11.9          |
| Mona      | Doesn't have to stay on field \(**Phantom**\), only produce Particle when final explosion connects, does not have to stay on field                                                                                                          | 12             | 3~4 \(2:1\)         | 3.33              | 16.7          |
| Tartaglia | C6 \(**Havoc: Annihilation**\), melee full uptime, procs riptide off CD \(riptide icd 1.5s, particle icd 3s\)                                                                                                                               | 3              | 1 \(-\)             | 1.00              | 20.0          |
| Yelan     | Skill Tap or Hold                                                                                                                                                                                                                           | 10             | 4 (-)               | 4.00              | 24.0          |
| Yelan     | C1 "Taking All Comers", Skill Tap or Hold \(1 extra E cast total\)                                                                                                                                                                          | 10             | 4 \(-\)             | 4.00              | 28.0          |
| Xingqiu   |                                                                                                                                                                                                                                             | 21             | 5 \(-\)             | 5.00              | 14.3          |

</TabItem>
<TabItem value="pyro" label="Pyro">

| Character | Notes                                                                                                                                                  | Cooldown \(s\) | Particles \(ratio\) | Average Particles | Particles/min |
| --------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- | :------------------ | :---------------- | :------------ |
| Amber     | C4, extra charge not used \(**It's not just any doll...**\) \(Decrease CD 20%, +1 charge\)                                                             | 12             | 4 \(-\)             | 4.00              | 20.0          |
| Amber     | Off-field \(Baron Bunny\)                                                                                                                              | 15             | 4 \(-\)             | 4.00              | 16.0          |
| Bennett   | A4 \(**Fearnaught**\), Burst off CD \(80% uptime\), always on-field, particle/min assumes 6 E cast per Burst cycle                                     | 2              | 2~3 \(3:1\)         | 2.25              | 54.0          |
| Bennett   | A2 \(**Rekindle**\)                                                                                                                                    | 4              | 2~3 \(3:1\)         | 2.25              | 33.8          |
| Bennett   |                                                                                                                                                        | 5              | 2~3 \(3:1\)         | 2.25              | 27.0          |
| Bennett   | Skill Hold \(Charge Lvl 1\), A2 \(**Rekindle**\)                                                                                                       | 6              | 3 \(-\)             | 3.00              | 30.0          |
| Bennett   | Skill Hold \(Charge Lvl 1\)                                                                                                                            | 7.5            | 3 \(-\)             | 3.00              | 24.0          |
| Bennett   | Skill Hold \(Charge Lvl 2\), A2 \(**Rekindle**\)                                                                                                       | 8              | 3 \(-\)             | 3.00              | 22.5          |
| Bennett   | Skill Hold \(Charge Lvl 2\)                                                                                                                            | 10             | 3 \(-\)             | 3.00              | 18.0          |
| Diluc     | Does an individual 1~2 \(3:1\) check on every E tap                                                                                                    | 10             | 3~6 \(27:27:9:1\)   | 3.75              | 22.5          |
| Hu Tao    | Skill itself produces no Particles. Attacks during infusion produce Particles \[2~3 \(3:2\) check, infusion 9s, particle production icd 5s\]           | 16             | 4~6 \(9:12:4\)      | 4.80              | 18.0          |
| Klee      | Landing multiple bounce and mines doesn't change the result                                                                                            | 20             | 4 \(-\)             | 4.00              | 12.0          |
| Thoma     |                                                                                                                                                        | 15             | 3~4 \(3:2\)         | 3.40              | 13.6          |
| Xiangling | Off-field \(Guoba\). 1 Particle per breathe if enemy survives, particle/min assumes full connect without kills                                         | 12             | 4 \(-\)             | 4.00              | 20.0          |
| Xinyan    | All shield levels produce same Particles. Level 3: Rave's Pyro pulse produces no Particles                                                             | 18             | 4 \(-\)             | 4.00              | 13.3          |
| Yanfei    |                                                                                                                                                        | 9              | 3 \(-\)             | 3.00              | 20.0          |
| Yoimiya   | Skill itself produces no Particles. Attacks during infusion produce Particle \(1 Particle, infusion 10s, particle production icd 2s, does not buffer\) | 18             | 4 \(-\)             | 4.00              | 13.3          |

</TabItem>
</Tabs>

## Resources

* [Elemental Skill Particle Production Rate (Google Sheet)](https://docs.google.com/spreadsheets/d/1G05DxDSjtBzj4PZtVjGRA4ATq76HPZa6e4kHVWS6mrA/edit#gid=0)
