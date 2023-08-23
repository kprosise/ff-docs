## fioctl devices updates

Show updates performed on a device

```
fioctl devices updates <device> [<update-id>] [flags]
```

### Examples

```

# List all updates performed on a device:
fioctl devices updates <device1>

# List the last 2 updates:
fioctl devices updates <device> -n2

# Show the details of an update:
fioctl devices updates <device> <update-id>

# Show the most recent update with bash help:
fioctl devices updates <device> $(fioctl devices updates <device> -n1 | tail -n1 | cut -f1 -d\ )

```

### Options

```
  -h, --help        help for updates
  -n, --limit int   Limit the number of updates displayed.
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl devices](fioctl_devices.md)	 - Manage devices registered to a factory

