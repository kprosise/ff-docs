## fioctl devices list-denied

List device UUIDs that have been denied access to the device-gateway

### Synopsis

Devices created using a factory-registration-reference server get created
created on-demand. Because of this, devices are placed into a deny-list when
they are deleted, so that they can't continue to access the system by getting 
re-created.

```
fioctl devices list-denied [flags]
```

### Options

```
  -h, --help        help for list-denied
  -n, --limit int   Number of devices to paginate by. Allowed values: 10,20,30,40,50,100,200,500,1000 (default 500)
  -p, --page int    Page of devices to display when pagination is needed (default 1)
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

