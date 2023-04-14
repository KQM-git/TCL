---
description: Methods to cancel various animations involving Aimed Shot mode
---

# Aim Cancel

For bow characters, Aimed Shot mode is used to shoot Charged Attacks (CAs). There are several techniques involving this mode that can increase the rate that these characters shoot both CAs and Normal Attacks (NAs).

## Aim Toggle / R Mode

import Video from "@site/src/components/common/Video"

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/2LCnunv.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/Ud2Co1G.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile:** Tap Aim Toggle (R on PC), press and release Attack (M1) to shoot. Tap R again when finished shooting.
* **Controller:** Hold Aim Toggle (L2/LT), press and release Attack (R2/RT) to shoot. Release Aim Toggle when finished shooting.

Aim Toggle is an easy method to shoot CAs, but there is a lengthy recovery animation after each CA.

## Hold Cancel / M1 Cancel

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/TbJ4vZB.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/JqRepPj.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile/Controller:** Hold Attack for at least 200 ms, release to shoot. Repeat.

Hold Cancels take time to enter Aimed Shot mode, but have a significantly shorter recovery animation. CAs can be shot at a faster rate than with Aim Toggle.

## Dash Cancel

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/7xb7ELZ.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/IfdmC5G.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile/Controller:** Shoot a CA with either Aim Toggle or Hold Attack, then dash after the CA is shot. Repeat.

Dash Cancels shoot CAs at a similar rate to Hold Cancels, trading stamina for increased mobility and i-frames.\
An important note about Dash Canceling CAs is that if the dash happens on the same frame that the CA is shot, that CA will have the properties of ARCC (see below). To avoid getting an ARCC, dash at least 1 frame after shooting a CA.

## M1-R

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/99fZyYI.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/DM8rt2m.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile:** Perform a Hold Cancel CA. When the character exits aim mode, immediately tap Aim. Shoot a CA, and then dash. Repeat from the beginning.
* **Controller:** Perform a Hold Cancel CA. When the character exits aim mode, immediately hold L2. Shoot a CA, and then dash. Repeat from the beginning.

M1-R combines Hold and Dash Cancels to slightly increase the rate of fire over both methods.

## ARCC: Aimed R-Cancel Charged

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/Qofrxqg.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/jKPctlP.mp4" />
</TabItem>

<TabItem value="prop" label="Properties">
<Video src="aim-cancel/BvuqB5g.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile:** Tap Aim, then hold Attack. On the same frame, release Attack and tap Aim.
* **Controller:** Hold L2, then hold R2. On the same frame, release both L2 and R2.

ARCC is a frame-perfect tech that cancels all recovery animations after each CA, allowing the character to perform any action immediately after.\
It has some quirks that are different from normal CAs:

* When out of Normal Attack range from the target, ARCC shots have a fixed height, regardless of how high or low the player aims.
* When within Normal Attack range of a target, ARCC shots will fire toward the target.
  * This can also happen with regular [Dash Cancel](#dash-cancel) or [jump cancelled](../../evidence/combat-mechanics/tech/aim-cancel.md#aimed-dashjump-cancel-charged-shot) shots when done frame-perfectly.
* Non-C6 Ganyu, Yoimiya, and Aloy cannot shoot an Elemental ARCC. They will always get a Physical CA, regardless of charge level before release.
  * C6 Ganyu can shoot an Elemental ARCC after using her Skill.

## M1RCC: Hold M1 R-Cancel Charged

<Tabs>

<TabItem value="elemental" label="Elemental">
<Video src="aim-cancel/64El2LA.mp4" />
</TabItem>

<TabItem value="phys" label="Physical">
<Video src="aim-cancel/OdbMxY6.mp4" />
</TabItem>

</Tabs>

**Inputs:**

* **PC/Mobile:** Hold Attack for at least 200ms. On the same frame, release Attack and tap Aim.
* **Controller:** Hold R2 and L2 at the same time, or hold R2, and then L2. On the same frame, release both L2 and R2.

M1RCC is a variation of ARCC that enters Aim mode with hold Attack instead of Aim Toggle. This tech is slower than ARCC, but can be easier to perform, though still difficult as it has frame-perfect inputs.

## RR Cancel

<Video src="aim-cancel/j01Bux0.mp4" />

**Inputs:**

* **PC/Mobile:** Tap the Aim key twice quickly.
* **Controller:** Hold and release L2 quickly.

RR is a type of aim cancel that is typically used to cancel Normal Attack (NA) animations, not CA animations.\
The speed at which RR can be done varies by character.

* These characters can RR faster while moving: Amber, Fischl, Tartaglia, Diona, Sara, Aloy.
* These characters can perform instant RR: Venti, Ganyu, Yoimiya, Gorou.

## Double CA

### Only works on Venti, Tartaglia, Diona, Yoimiya, Gorou

<Video src="aim-cancel/itkCyVm.mp4" />

**Inputs:**

* **PC/Mobile/Controller:** Hold and release Attack to shoot a CA. During the recovery frames before the camera zooms out, hold Attack, and then release on the frame that the camera zooms out. When done correctly, a second CA is shot.

Some characters can shoot a second CA after doing a Hold Cancel. The second CA has the same properties as ARCC.

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/tech/aim-cancel.md')} />
