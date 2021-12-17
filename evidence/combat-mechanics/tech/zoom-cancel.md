---
search: false
---

# Zoom Cancel

{% page-ref page="../../../combat-mechanics/tech/zoom-cancel.md" %}

**By:** randomspades \#0956  
**Added:** 04/18/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/815411615322341406/833576716701138984/transcript-elemental-burst-zoom-cancel.html)

**Theory/Finding:** Zoom in for a 5 star elemental burst and similar elemental bursts will not occur when there is potential clipping due to interference with another object.

Many characters have a primary camera that normally tracks them and a secondary camera that manages the zoom in phase of the elemental burst. In order to detect collisions, the secondary camera casts a short ray in the direction of the character. If that ray collides with an object besides the character, it will switch to the primary camera in order to prevent clipping. Programmers can use layers to select what objects to ignore. If the secondary camera is within another object, such as behind a wall, raycasting won't register any collision and will return a null value. In which case, a ray in the opposite direction is cast in order to detect collisions and the camera will switch to the primary camera if collisions are detected.

**Evidence:**

* [https://imgur.com/a/uZepFyj](https://imgur.com/a/uZepFyj)
* [https://imgur.com/a/NbmNQgt](https://imgur.com/a/NbmNQgt) 
* [https://imgur.com/a/bbpU1Dp](https://imgur.com/a/bbpU1Dp) 
* [https://www.youtube.com/watch?v=4u0c-Pmfn5s](https://www.youtube.com/watch?v=4u0c-Pmfn5s)
* [https://www.youtube.com/watch?v=LYxdAABh9F4](https://www.youtube.com/watch?v=LYxdAABh9F4)
* [Details on Raycasting](https://docs.unity3d.com/ScriptReference/Physics.Raycast.html)

**Frames before recovery with Zoom Cancel:** These match exactly with ult dash cancel frames from Robin's sim.

* Klee: 104
* Qiqi: 125
* Jean: 75
* Hu Tao: 101
* Keqing: 125
* Diluc: 138
* Barbara: 137

**Tested features:**

* Walls
* Rock features
* Geo Constructs: 
  * Wake of Earth
  * Starfell Sword
  * Stone Stele 
* Geo Samachurl pillars
* Cryo Samachurl pillar
* Geo Hypostasis pillar
* Dvalin's neck
* crates
* Trees!
* Standing in shallow water.

**Tested Characters:**

* Keqing
* Barbara
* Diluc
* Jean
* Qiqi
* Klee
* Hu Tao
* Zhongli
* Ganyu
* Xiao
* Venti
* Childe
* Albedo
* Mona

**Significance:** A reliable way to cancel certain 5 star and 4 star zoom ins. Looks very stylish. This allows mobile users to continuously input a dash during the active frames of an ultimate, allowing them to more easily dash cancel. This also disproves the myth that cancelling the zoom in of the elemental burst decreases the duration of the elemental burst, and explains why zoom in cancel happens.

**Additional Notes:**

Why don't mobs work in general? It could be because of their hitbox. The ray that's cast is not a large ray, so having a spherical collider/hitbox that's larger than the mob goes a long way in preventing 90% of collisions. The secondary camera is probably not attached to a rigid body because I've seen clipping through mobs before. In videos, I've seen like 1 zoom cancel off of a mob. It's in the speedrun video, and it probably happens because the dead mitachurl is an object that collides with the secondary camera ray. If you watch carefully you might see the same thing that I see.

Clipping can still happen with this process of raycasting because the ray casting process calculates a small window before the camera even moves, leaving some room for error.

The other more likely explanation of why mobs don't proc zoom cancels is that most active mobs are ignored in the raycasting process, through a filter but that the developers forgot to include stuff like elements of the mobs that are children such as the dead mobs and missiles like that or don't include it in the filter by design.

Zoom cancel in water can't be completely explained by raycasting, but it makes sense to detect if a character is standing in water while doing their elemental burst in order to prevent clipping. Most raycasting programs ignore water because water usually doesn't have a defined hitbox. Detecting if a character is standing in water is much easier than raycasting as well. Standing in water in order to cancel the zoom seems to be a recent development. There seems to be an exception with Mona's ability to zoom cancel in water, because her elemental burst includes water.

**Does it increase DPS?** The answer is that hitlag adjusted frame counts are the same with or without zoom cancel. Mobile players can still use touch controls if they zoom cancel. There is no difference for PC or controller players.

