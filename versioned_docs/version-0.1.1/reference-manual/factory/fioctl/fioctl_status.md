## fioctl status

Get dashboard view of a factory and its devices

```
fioctl status [flags]
```

### Options

```
  -f, --factory string          Factory to list targets for
  -h, --help                    help for status
      --offline-threshold int   Consider device 'OFFLINE' if not seen in the last X hours (default 4)
  -t, --token string            API token from https://app.foundries.io/settings/tokens/
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories

