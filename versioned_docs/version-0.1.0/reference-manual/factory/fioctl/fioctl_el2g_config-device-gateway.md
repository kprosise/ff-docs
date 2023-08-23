## fioctl el2g config-device-gateway

Setup EdgeLock 2Go support for device gateway

```
fioctl el2g config-device-gateway [flags]
```

### Examples

```

  fioctl el2g config-device-gateway --pki-dir /tmp/factory-pki
```

### Options

```
  -h, --help             help for config-device-gateway
      --pki-dir string   Directory container factory PKI keys
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl el2g](fioctl_el2g.md)	 - Manage EdgeLock 2Go integration

