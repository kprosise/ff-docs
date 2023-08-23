## fioctl targets list

List targets.

### Synopsis

Available columns for display:

  * apps
  * containers-sha
  * hardware-ids
  * manifest-sha
  * origin
  * overrides-sha
  * tags
  * version

```
fioctl targets list [flags]
```

### Options

```
      --by-tag string     Only list targets that match the given tag
      --columns strings   Specify which columns to display (default [version,tags,apps,origin])
  -h, --help              help for list
      --production        Show the production version targets.json
  -r, --raw               Print raw targets.json
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

