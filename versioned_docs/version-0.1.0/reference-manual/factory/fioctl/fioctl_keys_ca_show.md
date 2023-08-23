## fioctl keys ca show

Show what certificates are known to the factory

```
fioctl keys ca show [flags]
```

### Options

```
  -h, --help              help for show
      --just-device-cas   Only show device authenticate certificates trusted by the device-gateway
      --just-root         Only show the Factory root CA certificate
      --just-tls          Only show the device-gateway TLS certificate
      --pretty            Display human readable output of each certificate
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl keys ca](fioctl_keys_ca.md)	 - Manage Public Key Infrastructure for your device gateway

