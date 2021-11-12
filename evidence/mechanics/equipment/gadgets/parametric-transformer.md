---
search: false
---

# Parametric Transformer

**Main Page:**

{% page-ref page="../../../mechanics/equipment/gadgets/parametric-transformer.md" %}

## Internal Cooldown

**By:** Mcpie#8672  
**Added:** 07/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/859763876592877578/862607271769669652/transcript-parametric-transformer-speedrun.html)

**Finding:**  
Parametric Transformer has an internal cooldown of 0.4 seconds and it takes exactly 18 elemental hits to fill it from 0% to 100%.  
It cannot receive any elemental source dmg for at least 0.4 seconds in order to reach another step, therefore adding more damage sources most of the time ***will not*** make it progress further, but will ***delay*** it.

That's why:  
* Venti Q -> won't work because it's interval is 0.4 seconds  
* Sucrose N1 -> N2 -> won't work because the chain is too fast unless it's timed correctly  
* But **Mona Sprint**, **Lisa Q**, and **Electro Crystal** have 0.5 seconds interval, so they will always fill it with every hit.

The best time you can achieve without manual timing is 18 x 0.5s = 9s  
The best theoretical time you can achieve is 18 x 0.401s = 7.218s  

**Evidence:**  
[Mona dash speedrun](https://youtu.be/7ed8Xd8HX24)

[Parametric ICD - 0.4s](https://github.com/Dimbreath/GenshinData/blob/034e03bb49dcd656c2b06b634aca3d398dd1aa58/BinOutput/Ability/Temp/GadgetAbilities/ConfigAbility_Scene_Toys.json#L1584) (in-game file datamined by Dimbreath)

[Venti Q - 0.4s](https://github.com/Dimbreath/GenshinData/blob/d633c8cfe5f1f383413a1f65f44d9bd018e5f9be/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Venti.json#L2604) (in-game file datamined by Dimbreath)

[Lisa Q - 0.5s](https://github.com/Dimbreath/GenshinData/blob/d633c8cfe5f1f383413a1f65f44d9bd018e5f9be/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Lisa.json#L3322) (in-game file datamined by Dimbreath)

Mona dash - Can't find in gamefiles, assumed 0.517s from video after frame analysis: [https://youtu.be/QqpqITYB5Fc](https://www.youtube.com/watch?v=QqpqITYB5Fc)  
That's only 1 frame difference.

Electro Crystal - 0.5s after frame analysis: [https://youtu.be/69BUuqOBhRo](https://www.youtube.com/watch?v=69BUuqOBhRo)

**Significance:**  
If you're in a rush and you want to save that extra second, you can min-max your life using techniques mentioned above

