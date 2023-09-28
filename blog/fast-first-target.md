---
title: 'Fast First Targets: FoundriesFactory Faster than your Coffee Break'
date: '2023-08-21'
tags: [
  'workflow',
  'fast first target',
  'getting started',
  'foundriesfactory',
  'yocto',
]
categories: [
'technical',
'foundriesfactory',
  ]
authors: [Katrina]
description: "Introducing Fast First Target, an even faster way to manage Linux IoT Devices with FoundriesFactory. Learn how FoundriesFactory can speed up your DevOps."
---

When I joined Foundries.io, I was amazed at how painless getting that first platform image was.
Sure, I knew FoundriesFactory® made things easier, but after years of editing `bblayers` and `local.conf`,
then running BitBake, I was shocked by just how painless—and fast at under 30 minutes—it was to get a Yocto Project build.

Still, there was that inescapable fact, *any Yocto Project build takes time*.
Still half an hour to wait.
I went through our [Docker tutorial](/insights/blog/docker-container-on-foundries-factory/), checked on the build status, and made a cup of pour-over.
It finished in about 24 minutes.
*That was fast* I thought.
I flashed the image and registered my rpi4, giddy with how it was possible to do all of this in the time of a lunch break.
As I continued to make my way through the documentation after the first 45 minutes, I continued to find nifty [features in FoundriesFactory](https://foundries.io/products/).
I sincerely wanted to show this wonderful thing off to some of my friends in the embedded world.
But it was difficult to imagine when they would have the time to get to all the really neat stuff, let alone demo it to their bosses.

Thankfully, someone had an idea…

<!--truncate-->

## Introducing: Fast First Targets for IoT Device Management

1. Create your account and Factory
2. Grab ~~a coffee and wait for~~ the image and flash your device

With a _Fast First Target_ available for many boards/machines,
there is no need to wait while a lengthy build takes place.
Using pre-built binaries and artifacts, [developing with FoundriesFactory](https://foundries.io/products/) can be [experienced](https://foundries.io/freetrial/) right away;
over-the-air [deploy a Compose App Target](https://docs.foundries.io/latest/getting-started/building-deploying-app/index.html), make some changes, repeat.
Or go and start [customizing your platform](https://docs.foundries.io/latest/user-guide/lmp-customization/lmp-customization.html).
I recommend learning about managing your [TUF keys](https://docs.foundries.io/latest/reference-manual/security/offline-keys.html),
or about other [security features](https://docs.foundries.io/latest/reference-manual/security/security.html#overview) available to you.

The nifty thing about this is you can get a feel for FoundriesFactory as soon as you begin discussing a solution;
share your screen, [sign-up](https://docs.foundries.io/latest/getting-started/signup/index.html), and [get going](https://docs.foundries.io/latest/getting-started/signup/index.html) during the same meeting…check off that action item and get back to your task list.

Alongside providing Fast First Targets, we simplified most of your initial git repositories.
There is now just a single branch, `main`.
This declutters things and lets you create and name additional branches as fits within your workflow.

Now (or during your next meeting)…
Go and start your [free trial](https://foundries.io/freetrial/)!
