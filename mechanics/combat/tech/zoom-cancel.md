---
description: Animation Cancel
---

# Zoom Cancel

Zoom cancelling makes use of how the camera works to prevent it from zooming in during certain Elemental Bursts.
Characters with zoom in effects during their Elemental bursts can skip this by standing near walls/terrain or geo
constructs. This does not affect DPS, but can help with situational awareness and helps for mobile players to recover
control.

More technically, many characters have a primary camera that normally tracks them and a secondary camera that manages
the zoom in phase of the elemental burst. In order to detect collisions, the secondary camera casts a short ray in the
direction of the character. If that ray collides with an object besides the character, it will switch to the primary
camera in order to prevent clipping. Programmers can use layers to select what objects to ignore. If the secondary
camera is within another object, such as behind a wall, raycasting won't register any collision and will return a null
value. In which case, a ray in the opposite direction is cast in order to detect collisions and the camera will switch
to the primary camera if collisions are detected.

## Media

{% tabs %} 
{% tab title="Wall" %} 
{% embed url="https://imgur.com/a/uZepFyj" %} 
{% endtab %}

{% tab title="Geo MC Construct" %} 
{% embed url="https://imgur.com/a/NbmNQgt" %} 
{% endtab %}

{% tab title="Geo MC Wall" %} 
{% embed url="https://imgur.com/a/bbpU1Dp" %} 
{% endtab %}
{% endtabs %}