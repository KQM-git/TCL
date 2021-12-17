---
search: false
---

# Enemy Elemental Gauge

**Main Page:**

{% page-ref page="../../../combat-mechanics/enemy-mechanics/enemy-elemental-gauge.md" %}

## Elemental Aura Application and Gauge Values of Enemies

**By:** BowlSoldier\#3528  
**Added:** 2/4/2021

**Finding:**  
Enemies apply the same 1 unit, 2 unit system to us that we apply to them. They follow exactly the same elemental system we do.

**Evidence:**  
I tested the number of frames that elements last on my character, upon being hit by attacks from these enemies:

Electro Cicin: 12s Electro \(2 units\)  
Electro Hilichurl Shooter: 12s Electro \(2 units\)  
Pyro Hilichurl Shooter: 12s Pyro \(2 units\)  
Cryo Hilichurl Shooter: 12s Cryo \(2 units\)  
Hilichurl Berserker \(Pyro Club\): Single hit applied 12s \(2 units\), multi-hit dash applies 9.5s each hit \(1 unit\)

Unlike when testing on an enemy, these are exact frame values. There seems to be a slight delay on when elements appear over an enemy's head. For example, if you cause a reaction on an enemy, the reaction text will appear one or two frames before the element appears over their head. Also, at the end of an element's duration, it slowly pulses and fades out, making it difficult to find the exact frame at which it disappears.

On our own characters, the element does not fade out, but immediately disappears between frames. This allows us to more precisely measure elemental durations: for example, there are precisely 720 frames between the Electro appearing above my health bar when I am shot by an Electro Shooter, and the Electro disappearing from my health bar when it times out. So it lasts exactly 720 / 60 = 12s.

Enemy skills also "fix" the decay rate the same as our skills. In this example, I am hit by a 2 unit Pyro, then 11 seconds later I am hit by a 1 unit Pyro. The Pyro aura lasts precisely 6 seconds from the point I am hit with the 1 unit Pyro. This matches the behaviour we see ourselves when going 2u -&gt; 1u; we have 1 unit still decaying at the 2 unit rate of 6s and 12s.[ ](https://youtu.be/cUWXy_PNO_E)

[https://youtu.be/cUWXy\_PNO\_E](https://youtu.be/cUWXy_PNO_E)

Enemy skills follow the same reaction reductions we do. In this example, I use Hillichurl Shooters to perform a Reverse Melt on myself. The Pyro Shooter applies 2 Pyro to me, then the Cryo Shooter applies 2 Cryo. Since this is a Reverse Melt, the reduction is 0.5x2 so 1 unit reduced. The Pyro lasts a total of 4.5 seconds from initial application to falling off, so the Melt reaction reduced the timer by 7.5 seconds. This matches the behaviour for a 1 unit reduction.

[https://youtu.be/qjTTqPpujiM](https://youtu.be/qjTTqPpujiM)

In addition, the reduction of 7.5s is a precise frame count. This is the "taxless" value, compared to the "taxed" value of 6s. This allows us to calculate the exact value of the so-called "Aura Tax": 6/7.5 = 0.8. This confirms our theory that the Tax is roughly 80%, that is exactly correct.

**Significance:**  
This allows us to more precisely measure frames on reactions due to the way friendly auras appear clearer than enemy auras. Since enemies can have 1 or 2 unit attacks, it's possible some enemies have 4 unit attacks for elements we have previously not been able to test with 4 units. There may even be 3-unit enemies. This opens up more possible reactions we can test.

