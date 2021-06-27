# Calculators

## Damage Calculators

{% hint style="info" %}
Some of the calculators listed below may be outdated.
{% endhint %}

### Simple Damage Calculator

**By:** Momomona\#6156  
**Added:** 4/20/2021

A quick way to calculate damage quickly without having to input character details and artifacts.

[Link](https://docs.google.com/spreadsheets/d/1UNcH99P-MRnj2XGpCkkJ34zTcKuDX02rd62jVDDV29c/edit?usp=sharing)

### Reaction Damage Calculator

**By:** shdwbld\#8103 and Cola\#6861  
Update 11/5/2020: calculator includes artifact/talent/con % bonus

{% tabs %}
{% tab title="Link" %}
Link [here](https://docs.google.com/spreadsheets/d/1QcVNogethh7w1wfhFww2vGiZ2qvVEx-_mHD_TpUcTAE/edit?usp=sharing)
{% endtab %}

{% tab title="Directions" %}
1. Make a copy
2. Select the reaction you are calculating
3. Select the level of the character performing the reaction.
4. Plug in your Elemental Mastery
5. Plug in the enemy resistance

**Note:** Small Margin of Error, around 1-20 dmg
{% endtab %}
{% endtabs %}

### Damage Calculator

[https://genshin.ashal.eu/equip](https://genshin.ashal.eu/equip)

### Keqing-Specific Damage Calculator with Resistances

**By:** denmax\#9293  
**Updated:** 12/10/2020

Link [here](https://docs.google.com/spreadsheets/d/1ZZ3wHknS9evXWZj7DZ-rpIBCsV9sr7lj2HWCFvfqhPo/edit?usp=sharing).

This calculator is highly accurate, but 100% cannot be achieved due to artifact stats having hidden decimals. Read the changelog inside it.

## Artifact Calculators

### Circlet Optimizer

**By:** Maygi\#4987  
Updated 12/19/2020 with weapon data

For calculating effective attack values, can be used for stat optimization as well

[Link](https://docs.google.com/spreadsheets/d/128LD8nh1--4BwDm5hoDX1KzKi569d04R24AWEI15HJA/edit#gid=192421506)

### Artifact Comparison Tool

By: GRZ\#4782  
WIP, available for public use.

Simple gear comparison tool incorporating individual artifact stat inputs.

[Link](https://docs.google.com/spreadsheets/d/1nY7xTVqnJx-9I9ES6q69nN9BidDkBwmaRIh2awpbfPY/edit#gid=0%20)

### Endgame Artifact Drop Prediction Tool

**By:** Ghostpaw\#2345 and Theotherhiveking\#0212  
**Added:** 5/23/2021  
[Discussion](https://discord.com/channels/763583452762734592/804212994002780160/845820070525665300)

{% tabs %}
{% tab title="Overview" %}
A [tool](https://docs.google.com/spreadsheets/d/1c109wjvN3WalIJ560qEQCcvi5Wvytm_uwzHDw0XRAB0/edit?usp=sharing) that allows you to see how long it will take and how much resin it costs on average to get certain piece in a artifact set.

Can accurately predict both the number of runs and resin needed to get a desired piece of gear, pertaining to all of the below:

* The right Set
* The right Artifact Slot
* The right Main Stat
{% endtab %}

{% tab title="Assumptions" %}
* Each SET is equally weighted to drop
* Each SLOT is equally weighted to drop
* Each MAINSTAT is NOT equally weighted to drop, and has a specific probability
  * Mainstat probability distributions updated at the beginning of each month \(Data from Artifact Analysis Database\)
* Each Domain Run is done at AR45+ where a minimum of one 5-Star Piece is guaranteed \(Data from Drop Rates Database\)
* Each Domain Run is 20 Resin. If Condensed Resin is used, the probability corresponds to half the runs/ days in their respective cells
* Each World Boss Run is done at AR55+, where a minimum of one 5-Star Piece is guaranteed \(Data from Drop Rates Database\)
* Each World Boss Run is 40 Resin
* Each Day Needed accounts for 160 Resin
* The Desired Piece Probability is for AT LEAST 1 of the Desired Pieces to drop, meaning it accounts for getting multiple copies of that exact Desired Piece over the Runs
* A Desired Piece is an Artifact that has ALL of the requirements met, which are currently:
  * The right Set
  * The right Slot
  * The right Main Stat
{% endtab %}

{% tab title="Limitations" %}
* We do not know if there is any sort of hidden drop pity/ soft pity is at play
* Only accounting for time/ odds of exact specific piece, not multiple different desired pieces
{% endtab %}
{% endtabs %}

## Miscellaneous Calculators

### Royal Weapon Crit Simulator

By: Cola\#6861

{% tabs %}
{% tab title="Link" %}
This is the tool I used to run simulations for Royal weapon line crits.

[Link](https://docs.google.com/spreadsheets/d/1v1hi6tUdFEC4SHM6_zwtlXOmCl_5paXqAD_d8uU6Umc/edit?usp=sharing%20)
{% endtab %}

{% tab title="Directions" %}
1. File &gt; Make a Copy
2. Navigate to "Sim" sheet
3. Change Base Crit % & Refine Rank
{% endtab %}
{% endtabs %}

### Character Pulls Calculator

**By:** Venatic\#3993

{% tabs %}
{% tab title="Link" %}
This can help you figure out how many primos to save.

Tbh, if there was a pull sim out there it would probably provide an easier way to do the calcs for more scenarios. I haven't seen any though, so I am just sharing this here.

You can edit this google sheets to figure out the expected number of pulls you will use to achieve different copies of characters. Make a copy because it is view-only.

[Calcs](https://docs.google.com/spreadsheets/d/16Vope8T59ldSRX6WO80nfBAE1-uYpzbRe8nCnlXrWN4/edit?usp=sharing%20)
{% endtab %}

{% tab title="Methodology" %}
Slightly modified the math from The Double Dixie Cup Problem by Newman & Shepp. I have not ran any sims to determine if the modifications are correct, but it does seem to match in the more easily verifiable cases such as seeking 1 copy of all rate up 4 stars
{% endtab %}

{% tab title="Limitations" %}
1. It treats pity as simply raising the base odds \(e.g. 1.6% per pull for a 5\*\).
2. Doesn't allow you to specify scenarios like "any C6 4 star", you have to specify the one you are interested in
3. There's currently no way to use it to answer "with X pulls, how lucky must I get to achieve my goals?"
4. There's also no calcs for achieving a 5star + a 4star goal together right now. E.g. "1 C2 Albedo and 1 C6 Fischl". The expected values will be given separately

Seems like a simulation would answer all limitations, I just wanted to approach this problem with google sheets and without simulating. Currently working on limitation 2, but the math seems beyond me.
{% endtab %}
{% endtabs %}

### Adventure Rank EXP Calculator

**By:** able16\#6618  
**Added:** 1/7/2021

This is a tool that can calculate remaining AR EXP and time left before you can reach AR 45/50/55 given regular progress \(no quests, etc\)

[Link ](https://docs.google.com/spreadsheets/d/1kBbbh6bIUjVeUmG_ZAXtAkG7uFnlfJSYh3wJ11qPlU4/edit?usp=sharing)

### Resin Calculator

**By:** Zakharov#5645  
**Added:** 6/26/2021

A calculator that determines the average amount of resin needed to upgrade characters, weapons, artifacts, etc. It includes the average cost of finding artifacts with the correct stats.

[Link](https://docs.google.com/spreadsheets/d/1QZhdx6-L7jAJDqV9OfPYhl0Q0R8DYpwJz2KIyjHE2Ow/edit#gid=1421390734)


