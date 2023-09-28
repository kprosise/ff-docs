---
title: Release on Demand to Large Production Device Fleets with FoundriesFactory
date: 2023-09-26
tags: ['OTA', 'FoundriesFactory', 'waves', 'production', 'IoT']
categories: ['technical', 'device-management']
authors: [Volodymyr]
description: FoundriesFactory improves release on demand to large device fleets
image: https://commons.wikimedia.org/wiki/File:The_Great_Wave_off_Kanagawa.jpg
---

Recently, FoundriesFactory® greatly improved its ability to Release on Demand to large device fleets.
This post explains how you can benefit from this to take a firm control over your production fleet updates.

<!--truncate-->

# Background

FoundriesFactory uses [The Update Framework (TUF)][TUF] to bring secure Over The Air (OTA) updates to your devices.
For the past 3 years, our customers have successfully used our invention - ***Waves*** - to release updates on demand to their production device fleets.
To find out more about how TUF and FoundriesFactory work together:

- [Blog: How to release on demand with waves][blog:waves-intro]
- [Blog: How to secure your production updates][blog:waves-security]
- [Reference Manual: OTA Updates][manual:ota]
- [Reference Manual: Production Targets][manual:production-targets]

Recently, there was an increasing demand from our customers to improve how we handle large device fleets.
Waves work great with [device groups][blog:device-groups] to deliver updates in a well controlled way.
However, when the device fleet grows beyond thousands of devices, it becomes less convenient to manage updates via device groups.
In particular, it is hard to implement A/B release testing for large statically defined device groups.
In this scenario a small randomized set of devices is selected as Canary devices to get the updates first.
Only after an update succeeds for this (Canary) set of devices, do the rest of devices receive the update.
Our recent summer improvement for Waves — codenamed ***Ripples*** — was designed with that specific use case in mind.

# Meet the Wave Ripples

```
Great Wave of Kanagawa                  .  ..              ..      ..             Wikimedia Commons
                                    .. ....             ... ..    ....
                        ..  .      ........;;.   ..  ......  ........
                      .'..',ol:,..'. .,ldcckko,. ..       .  . ...  ...
                   .. ..  .;lokkc::'...ck00KK0kl. .             ..'.. ..
                 .'..'.... .codOOOkc;locoKWWNXOo:;.  ...    ..    ...
               .'...''':ool,;xKXK0kk0XXKO0NXXK0kkkc.  ...  ..               ....
             ..:xl;coocoOkkxx0K0O0XNNNXKKXXNNNNKOd:,'...,'..    .  ..      .....''..
           .',.okxoodkkkxk0XXOxkKXNNX0O0XNNNWNX0kddxkl:lll;..   .  ..     ..  ...  .
          ... .cxxolk0kdxKXXOdk0KKX0dx0XNWNXKKKXNNXXKOxdc,......  ......  .  .      ..
         .,.   .:l:lkkookKXOox00KXOoo0NNWNK0KXWWWNNNX0kxo'   ...  ... ..    ..      ...
       .',.  .   ';cdd:;lxkdokO0X0dd0XXX0kOKNWXKXNX0kdolc. . ...........   ..   .........
      .,.     .  .  ..  .,;:ldkK0dxOKXKOdxKK0XXK0xodxdlcl;..  . .....  .     .  ....    .
     .'.    .       .  ....'lxkOdldOO00xdOXKXKKOdool;.  ..   ....  .. ..      .....
   .'.  .  .    ..      ..,,;oOxc;okO0Oxx0XNNNKdodc.            .      ...     ....
 .'  .    .     .. .      ,clol,.,cdxxkxOXXNNN0ddc.             .  ..     ...  ........
'...   .  ..   ..  ....    ......':oodxkOXNNNKxoo.                          .   ...  ..
;  . ..   .    ..    ..  ..   ..'';lc;,;lldkOkodl.                         ...  ...
.. .  ..     .....  ..  ....  ..   ......'lkdood:                             ... .
:     ..      .coc;..:,.;lc,  ...    .;:;:oOKkoo,
, .    .....  .odxdccxxlcldl,,'... .';oxdxxOKkol.
.....  ...';;. ';cool::odoxxloc''...,;oOxdkOKOdc.
,....,:,.,oddc. .....'',;cxkocdd:colll;';l;';odl,,.
;..';ldl;;ldxd:'.  .coc:,,:dxl:cc;,;'',,..,,',lo:''.
o:..,:ooc;,lkxd:..;,,cool:,,co:',,.    ....;::lll;''.
lccl:,:lll;,okxd:,;cc:odllc;,,;:,           ..';cc;,,'.
:odccc:,;odccoxxxd:;lool::c:::'.                .:cc:;''.
.'';:looooc;;:ldkkxxollllc;.                       .;ccc;.
..   ..',;:ccc::clllllol;.            .             .....':c;.                ...
    .,cc:,.';'                      ...                ..         .........................
     .;::,'.                         ...                   .  ..   .,cdddddooodddl::col;.. .'...
,.... .;:,'...             .   .col''lc'''.        .,'''''':kOd:''''''......''',;;,',,;:cl::clooc;,..
dko:;..lxxoc;...   ...  .      .ldoloo'.:dc.  ..,.clcccloO0OOo'.....,,'..;,''',,,,.'..','';:looolc;,;
```

At [Foundries.io](https://foundries.io/)™, we usually describe the update process as a perpetual sequence of *Waves* rolling out to the shore.
Taking this analogy further:

- We can describe an update itself as an invisible inner force which pushes the water mass upwards.
  Those water droplets which got above the surface can be viewed as devices which received an update.
- In case of large device fleet, a single update (wave) may affect (contain) a sheer amount of devices (water droplets).
  From afar such huge wave looks similar to the [Great Wave of Kanagawa][Kanagawa] (pictured above).
- However, above you might notice easily distinguished dots to the right of that Great Wave — ripples on a wave.
  They are sort of pulled off the main water mass forming a wave and dragged ahead of it.
  This is what the new ***Wave Ripples*** feature of FoundriesFactory brings:
  an ability to select a subset of devices to be the first to receive the update.
  With it we allow for an even greater control over how the Release on Demand is provisioned to production devices.

# Practical Example

The updated [user manual][manual:production-targets-advanced] contains a sheer number of examples how to use the **Wave Ripples**.
If you are interested in it, upgrade to the latest Fioctl® release and try the new `fioctl waves rollout` command arguments.
This post still provides an extract about how simple Fioctl commands can be used to implement complex workflows.

Let's assume that your Factory has a huge production device fleet, say 100'000 devices, spread across several large device groups.
What would you typically do to roll out a new release (update) to these devices?

Well, most probably, you've gone through several cycles of pre-release tests using your dev/test devices, and then your in-house production devices.
Either way, the truth is: that is not enough to make sure that the new update will succeed in the wild.
You still need to provision the update to a small subset of your end users' devices, preferably randomized to represent a more diverse audience.
For this, with FoundriesFactory you would run this simple command, potentially several times (after starting a new wave):

```
    fioctl waves rollout <wave-name> [--group <your-group>] --limit 10 --print-uuids
```

This command will dynamically select 10 devices out of your entire fleet (or a specific device group) which match the wave tag.
Once selected, these devices are designated to receive the OTA updates from a given wave.
Finally, the command prints the UUIDs of the selected devices, so you can easily inspect how the update goes for them.
When it is run several times, the command will select a new set every time, containing only devices that were not yet updated.
FoundriesFactory will not update other devices than those selected by the command, until the user explicitly instructs it to _rollout_ to more devices.

If you are worried about using random sets, the new feature provides an even greater control to you.
First, you can print the pre-selected device set *without* actually running an update on them:

```
    fioctl waves rollout <wave-name> [--group <your-group>] --limit 10 --print-uuids --dry-run
```

Second, we give you the ability to specify the exact device UUIDs for the update, carefully selected by you:

```
    fioctl waves rollout <wave-name> [--group <your-group>] [--limit <number>] --uuids @/path/to/file
```

A distinct way how FoundriesFactory ***Waves*** are different from the _Great Wave of Kanagawa_ is an ability to stop them.
At any moment, you can call the `fioctl waves cancel <wave-name>` command, and the update will instantly cease to roll out to not yet updated devices.

All in all, one simple command with intuitive parameters gives you a powerful tool to control how an update to your devices goes.
Don't miss the updated [user manual][manual:production-targets-advanced], and enjoy the sailing through our waves.

## References

References to Foundries&#46;io documentation, blog, or product pages:

- [Fioctl][Fioctl]
- [Blog: How to release on demand with waves][blog:waves-intro]
- [Blog: How to Secure Your Production Updates][blog:waves-security]
- [Blog: How to use device groups][blog:device-groups]
- [Reference Manual: OTA Updates][manual:ota]
- [Reference Manual: Production Targets][manual:production-targets]

External references:

- [The Update Framework (TUF)][TUF]

- [Great Wave of Kanagawa][Kanagawa]

[Fioctl]: https://github.com/foundriesio/fioctl

[blog:device-groups]: {% ref 'device-groups.md' %}

[blog:waves-intro]: {% ref 'waves-intro.md' %}

[blog:waves-security]: {% ref 'waves-security.md' %}

[manual:ota]: https://docs.foundries.io/latest/reference-manual/ota/ota.html

[manual:production-targets]: https://docs.foundries.io/latest/reference-manual/ota/production-targets.html

[manual:production-targets-advanced]: https://docs.foundries.io/latest/reference-manual/ota/production-targets.html#advanced-usage

[TUF]: https://github.com/theupdateframework/specification/blob/master/tuf-spec.md

[Kanagawa]: https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa
