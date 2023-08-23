## fioctl targets show

Show details of a specific target.

```
fioctl targets show <version> [flags]
```

### Examples

```

  # Show details of all Targets with version 42:
  fioctl targets show 42

  # Show a specific Target by name:
  fioctl targets show intel-corei7-64-lmp-42
```

### Options

```
  -h, --help                    help for show
      --production-tag string   Look up target from the production tag
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl targets](fioctl_targets.md)	 - Manage factory's TUF targets
* [fioctl targets show compose-app](fioctl_targets_show_compose-app.md)	 - Show details of a specific compose app.
* [fioctl targets show sboms](fioctl_targets_show_sboms.md)	 - Show SBOMs for a specific target.

