## fioctl devices chown

Change the device's owner

### Synopsis

Change the owner of a device. This command can only be run by factory admins 
and owners. The new owner-id can be found by running 'fioctl users'

```
fioctl devices chown <device> <new-owner-id> [flags]
```

### Options

```
  -h, --help   help for chown
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

