---
search: false
---

# Enemy Elemental Gauge

**Main Page:**

{% page-ref page="../../../combat-mechanics/enemy-mechanics/enemy-elemental-gauge.md" %}

## Elemental Aura Application and Gauge Values of Enemies

**By:** BowlSoldier\#3528  
**Added:** 2021-02-04

**Finding:**  
Enemies apply the same 1 unit, 2 unit system to us that we apply to them. They follow exactly the same elemental system we do.

**Evidence:**  
I tested the number of frames that Elements last on my character, upon being hit by attacks from these enemies:

Electro Cicin: 12s Electro \(2 units\)  
Electro Hilichurl Shooter: 12s Electro \(2 units\)  
Pyro Hilichurl Shooter: 12s Pyro \(2 units\)  
Cryo Hilichurl Shooter: 12s Cryo \(2 units\)  
Hilichurl Berserker \(Pyro Club\): Single hit applied 12s \(2 units\), multi-hit dash applies 9.5s each hit \(1 unit\)

Unlike when testing on an enemy, these are exact frame values. There seems to be a slight delay on when Elements appear over an enemy's head. For example, if you cause a reaction on an enemy, the reaction text will appear one or two frames before the Element appears over their head. Also, at the end of an Element's duration, it slowly pulses and fades out, making it difficult to find the exact frame at which it disappears.

On our own characters, the Element does not fade out, but immediately disappears between frames. This allows us to more precisely measure elemental durations: for example, there are precisely 720 frames between the Electro appearing above my health bar when I am shot by an Electro Shooter, and the Electro disappearing from my health bar when it times out. So it lasts exactly 720 / 60 = 12s.

Enemy skills also "fix" the decay rate the same as our skills. In this example, I am hit by a 2 unit Pyro, then 11 seconds later I am hit by a 1 unit Pyro. The Pyro aura lasts precisely 6 seconds from the point I am hit with the 1 unit Pyro. This matches the behaviour we see ourselves when going 2u -&gt; 1u; we have 1 unit still decaying at the 2 unit rate of 6s and 12s.[ ](https://youtu.be/cUWXy_PNO_E)

[https://youtu.be/cUWXy\_PNO\_E](https://youtu.be/cUWXy_PNO_E)

Enemy skills follow the same reaction reductions we do. In this example, I use Hillichurl Shooters to perform a Reverse Melt on myself. The Pyro Shooter applies 2 Pyro to me, then the Cryo Shooter applies 2 Cryo. Since this is a Reverse Melt, the reduction is 0.5x2 so 1 unit reduced. The Pyro lasts a total of 4.5 seconds from initial application to falling off, so the Melt reaction reduced the timer by 7.5 seconds. This matches the behaviour for a 1 unit reduction.

[https://youtu.be/qjTTqPpujiM](https://youtu.be/qjTTqPpujiM)

In addition, the reduction of 7.5s is a precise frame count. This is the "taxless" value, compared to the "taxed" value of 6s. This allows us to calculate the exact value of the so-called "Aura Tax": 6/7.5 = 0.8. This confirms our theory that the Tax is roughly 80%, that is exactly correct.

**Significance:**  
This allows us to more precisely measure frames on reactions due to the way friendly auras appear clearer than enemy auras. Since enemies can have 1 or 2 unit attacks, it's possible some enemies have 4 unit attacks for Elements we have previously not been able to test with 4 units. There may even be 3-unit enemies. This opens up more possible reactions we can test.

## Geo Aura Investigation

**By:** Mr. Pillow\#0065, ShampooBrain\#9583  
**Added:** 2022-08-24  
[Discussion](https://tickets.deeznuts.moe/transcripts/geo-aura-investigation)  

**Finding:**  
Geo "aura" investigation.  
  
**Evidence:**  
There exists a Geo aura in some enemies \(Geo Hypostasis, Shielded Large Geo Slime, Armored Stonehide Lawachurl and Armoed Fatui Skirmisher - Geochanter Bracer\) and in the Petrified status from Zhongli's Elemental Burst. This aura possesses some interesting properties:  
  
* Opponents who have this aura have a Geo symbol above them, which can also appear above special boss-like health-bars, and they also have the Geo color when looked at with the Elemental Sight. [YouTube](https://www.youtube.com/watch?v=A5Ro0vl4aY0.)
* The aura is completely inert; not even Crystallize can be triggered. Geo aura can co-exist with other Elements. [YouTube](https://www.youtube.com/watch?v=p2Ko4uSVujo.)
* Geo attacks don't apply the Geo aura. [YouTube](https://www.youtube.com/watch?v=5GlX5SjeyFs)  
* You can still cause a Crystallize reaction on an opponent with the Geo aura if you apply an Element and then hit with a Geo attack. [YouTube](https://youtu.be/5kOcGatrkMo)  
* Zhongli Hold E doesn't deplete the Geo aura from Petrification. [YouTube](https://www.youtube.com/watch?v=pTOkctw_wNk)  
  
Other remarks:  
* Geo aura doesn't have natural decay. It lasts until a status is removed \(e.g. Petrification duration ends, or the Geo Shield/Armor is broken\)
* Depletion of "GU" from Geo shields/armors should probably be attributed to the shield/armor mechanics, and not the Geo aura itself.  
  
**Significance:**  
Better understanding of the Elements.

## Elemental Node Infusion Has ICD

**By:** vinsette\#0293  
**Added:** 2022-08-24  
[Discussion](https://tickets.deeznuts.moe/transcripts/elemental-node-infusion-has-icd)  

**Finding:**  
Elemental Nodes and Infusion Stones have a 3-Hit ICD per target.  

**Evidence:**  
[YouTube](https://m.youtube.com/watch?v=nMFPDOb3z24) \(credit to Kaleamaranth\#6687\)

**Significance:**  
Adding this mechanic into the TCL from the wiki. Prolonged fights with Elemental Nodes and Infusion Stones won't require you to repeatedly purge off their infusion if you can clear it.  
