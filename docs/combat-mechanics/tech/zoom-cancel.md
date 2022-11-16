---
description: Animation Cancel
---

# Zoom Cancel

Zoom canceling makes use of how the camera works to prevent it from zooming in during certain Elemental Bursts. Characters with zoom-in effects during their Elemental Bursts can skip this by standing near walls/terrain or Geo constructs. This does not affect DPS, but can help with situational awareness and helps mobile players have an easier time with controls.

More technically, many characters have a primary camera that normally tracks them and a secondary camera that manages the zoom-in phase of the elemental Burst. In order to detect collisions, the secondary camera casts a short ray in the direction of the character. If that ray collides with an object besides the character, it will switch to the primary camera in order to prevent clipping. Programmers can use layers to select what objects to ignore. If the secondary camera is within another object, such as behind a wall, raycasting won't register any collision and will return a null value. In which case, a ray in the opposite direction is cast in order to detect collisions and the camera will switch to the primary camera if collisions are detected.

## Media

import Video from "@site/src/components/common/Video"

<Tabs>

<TabItem value="wall" label="Natural terrain">
<Video src="Qmbopaj7K7Rg1U6T41AND7JNNv5BbqTQFierV6HgzUUzz8" caption="Wall" />
</TabItem>

<TabItem value="geoe" label="Geo Traveler Skill">
<Video src="QmXkNT9EgA5iC2vAVEw3Cqnj1UCpYcaS4TcBvtpkumXpcG" caption="Geo Traveler Skill" />
</TabItem>

<TabItem value="geoq" label="Geo Traveler Burst">
<Video src="QmcPqQEkTtroy7SFjxrhdKtgmPLCGWt2LWPRmk8YBqUh7T" caption="Geo Traveler Burst" />
</TabItem>

</Tabs>

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/tech/zoom-cancel.md')} />
