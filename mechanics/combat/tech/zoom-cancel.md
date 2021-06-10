---
description: Animation Cancel
---

# Zoom Cancel

Zoom canceling makes use of how the camera works to prevent it from zooming in during certain Elemental Bursts. Characters with zoom-in effects during their Elemental bursts can skip this by standing near walls/terrain or geo constructs. This does not affect DPS, but can help with situational awareness and helps mobile players have an easier time with controls.

More technically, many characters have a primary camera that normally tracks them and a secondary camera that manages the zoom-in phase of the elemental burst. In order to detect collisions, the secondary camera casts a short ray in the direction of the character. If that ray collides with an object besides the character, it will switch to the primary camera in order to prevent clipping. Programmers can use layers to select what objects to ignore. If the secondary camera is within another object, such as behind a wall, raycasting won't register any collision and will return a null value. In which case, a ray in the opposite direction is cast in order to detect collisions and the camera will switch to the primary camera if collisions are detected.

## Media

{% embed url="https://imgur.com/a/uZepFyj" caption="" %}

{% embed url="https://imgur.com/a/NbmNQgt" caption="" %}

{% embed url="https://imgur.com/a/bbpU1Dp" caption="" %}

## Evidence Vault

{% page-ref page="../../../evidence/mechanics/combat/tech/zoom-cancel.md" %}

