## fioctl devices

Manage devices registered to a factory

### Options

```
  -f, --factory string   Factory to list targets for
  -h, --help             help for devices
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories
* [fioctl devices apps-states](fioctl_devices_apps-states.md)	 - List states of Apps reported by a device
* [fioctl devices chown](fioctl_devices_chown.md)	 - Change the device's owner
* [fioctl devices config](fioctl_devices_config.md)	 - Device configuration
* [fioctl devices delete](fioctl_devices_delete.md)	 - Delete a device(s) registered to a factory.
* [fioctl devices delete-denied](fioctl_devices_delete-denied.md)	 - Remove a device UUID from the deny list
* [fioctl devices list](fioctl_devices_list.md)	 - List devices registered to factories. Optionally include filepath style patterns to limit to device names. eg device-*
* [fioctl devices list-denied](fioctl_devices_list-denied.md)	 - List device UUIDs that have been denied access to the device-gateway
* [fioctl devices rename](fioctl_devices_rename.md)	 - Rename a device
* [fioctl devices show](fioctl_devices_show.md)	 - Show details of a specific device
* [fioctl devices updates](fioctl_devices_updates.md)	 - Show updates performed on a device

