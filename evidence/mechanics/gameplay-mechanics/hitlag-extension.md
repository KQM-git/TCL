# Hitlag Extension

#### Hitlag Extends Elemental Aura Duration  <a id="docs-internal-guid-116d1688-7fff-1539-a82f-c218e3de996c"></a>

By: BowlSoldier\#3528

**Finding:**  
Elemental Aura durations are affected by hitlag, much like any other enemy debuff.

**Evidence:**

[https://youtu.be/KaqUOpoGiSk](https://youtu.be/KaqUOpoGiSk) 

In the first example in the video, there is no hitlag. The Electro aura lasts for 566 frames, or 9.43 seconds.

In the second example, Razor causes as much hitlag as possible. The Electro aura lasts for 11.41 seconds, longer than expected.

**Significance:**  
We can extend aura durations with hitlag to give ourselves more time to cause reactions.

Unfortunately this means a lot of our frame counts of elemental durations will be off by a few frames, because of the hitlag on the moves that apply the element.

