## fioctl config

Manage configuration common to all devices in a factory

### Options

```
  -f, --factory string   Factory to list targets for
  -h, --help             help for config
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories
* [fioctl config delete](fioctl_config_delete.md)	 - Delete file from the current configuration
* [fioctl config device-group](fioctl_config_device-group.md)	 - Manage factory device groups
* [fioctl config log](fioctl_config_log.md)	 - Show a changelog of configuration
* [fioctl config rotate-certs](fioctl_config_rotate-certs.md)	 - Rotate device x509 keypairs in this group used to connect to the device gateway
* [fioctl config set](fioctl_config_set.md)	 - Create a new factory-wide configuration
* [fioctl config updates](fioctl_config_updates.md)	 - Configure aktualizr-lite settings for how updates are applied to a device group
* [fioctl config wireguard](fioctl_config_wireguard.md)	 - Show current wireguard server config for factory

