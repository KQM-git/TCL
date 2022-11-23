---
search: false
---

# Parametric Transformer

**Main Page:**

<Card item={require('../../../equipment/gadgets/parametric-transformer.md')} />

## Internal Cooldown

**By:** Mcpie#8672  
**Added:** <Version date="2021-07-10" />  
**Last tested:** <VersionHl date="2021-07-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_859763876592877578_862607271769669652_transcript-parametric-transformer-speedrun.html)

**Finding:**  
Parametric Transformer has an internal cooldown of 0.4 seconds and it takes exactly 18 Elemental hits to fill it from 0% to 100%.  
It cannot receive any Elemental source DMG for at least 0.4 seconds in order to reach another step, therefore adding more damage sources most of the time **_will not_** make it progress further, but will **_delay_** it.

That's why:

* Venti Q -> won't work because it's interval is 0.4 seconds
* Sucrose N1 -> N2 -> won't work because the chain is too fast unless it's timed correctly
* But **Mona Sprint**, **Lisa Q**, and **Electro Crystal** have 0.5 seconds interval, so they will always fill it with every hit.

The best time you can achieve without manual timing is 18 x 0.5s = 9s  
The best theoretical time you can achieve is 18 x 0.401s = 7.218s

**Evidence:**  
[Mona dash speedrun](https://youtu.be/7ed8Xd8HX24)

Parametric ICD - 0.4s

Venti Q - 0.4s

Lisa Q - 0.5s

Mona dash - Assumed 0.517s from video after frame analysis: [YouTube](https://www.youtube.com/watch?v=QqpqITYB5Fc)  
That's only 1 frame difference.

Electro Crystal - 0.5s after frame analysis: [YouTube](https://www.youtube.com/watch?v=69BUuqOBhRo)

**Significance:**  
If you're in a rush and you want to save that extra second, you can min-max your life using techniques mentioned above
