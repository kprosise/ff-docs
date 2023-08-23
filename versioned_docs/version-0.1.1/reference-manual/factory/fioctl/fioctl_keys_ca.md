## fioctl keys ca

Manage Public Key Infrastructure for your device gateway

### Synopsis

Every factory can have its own dedicated device gateway. This allows customers
to own the PKI infrastructure of their factory. This infrastructure is used
to manage mutual TLS between your devices and the Foundries.io device gateway.

### Options

```
  -h, --help   help for ca
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl keys](fioctl_keys.md)	 - Manage keys in use by your factory fleet
* [fioctl keys ca create](fioctl_keys_ca_create.md)	 - Create PKI infrastructure to manage mutual TLS for the device gateway
* [fioctl keys ca show](fioctl_keys_ca_show.md)	 - Show what certificates are known to the factory
* [fioctl keys ca update](fioctl_keys_ca_update.md)	 - Update the list of CAs that can create client certificates for devices

