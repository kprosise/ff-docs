## fioctl waves complete

Complete a given wave by name to make it generally available

### Synopsis

Complete a given wave by name.
Once complete a wave becomes generally available as an update source for all production devices.
A subsequent wave might become a new source for a part of production devices again.

```
fioctl waves complete <wave> [flags]
```

### Options

```
  -h, --help   help for complete
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl waves](fioctl_waves.md)	 - Manage factory's waves

