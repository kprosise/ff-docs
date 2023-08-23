## fioctl targets

Manage factory's TUF targets

### Options

```
  -f, --factory string   Factory to list targets for
  -h, --help             help for targets
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories
* [fioctl targets add](fioctl_targets_add.md)	 - Compose and add Targets to Factory's  TUF targets metadata
* [fioctl targets artifacts](fioctl_targets_artifacts.md)	 - Show artifacts created in CI for a Target
* [fioctl targets image](fioctl_targets_image.md)	 - Generate a system image with pre-loaded container images
* [fioctl targets list](fioctl_targets_list.md)	 - List targets.
* [fioctl targets offline-update](fioctl_targets_offline-update.md)	 - Download Target content for an offline update
* [fioctl targets prune](fioctl_targets_prune.md)	 - Prune target(s)
* [fioctl targets show](fioctl_targets_show.md)	 - Show details of a specific target.
* [fioctl targets static-deltas](fioctl_targets_static-deltas.md)	 - Generate static deltas to the given target version to make OTAs faster
* [fioctl targets tag](fioctl_targets_tag.md)	 - Apply a comma separated list of tags to one or more targets.
* [fioctl targets tail](fioctl_targets_tail.md)	 - Tail the console output of a live CI Run
* [fioctl targets tests](fioctl_targets_tests.md)	 - Show testing done against a target

