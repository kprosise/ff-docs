## fioctl devices delete-denied

Remove a device UUID from the deny list

### Synopsis

Remove a device UUID from the deny list so that the UUID can be re-used.
This is handy for Factories using HSMs and a factory-registration-reference
server.

```
fioctl devices delete-denied <uuid> [<uuid>...] [flags]
```

### Options

```
  -h, --help   help for delete-denied
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

