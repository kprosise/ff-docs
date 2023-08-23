## fioctl devices config updates

Configure aktualizr-lite settings for how updates are applied to a device

### Synopsis

View or change configuration parameters used by aktualizr-lite for updating a device.
When run with no options, this command will print out how the device is
currently configured and reporting.

```
fioctl devices config updates <device> [flags]
```

### Examples

```

  # Make a device start taking updates from Targets tagged with "devel"
  fioctl devices config updates <device> --tag devel

  # Set the docker apps a device will run:
  fioctl devices config updates <device> --apps shellhttpd

  # Set the docker apps and the tag:
  fioctl devices config updates <device> --apps shellhttpd --tag master

```

### Options

```
      --apps string   comma,separate,list
      --dryrun        Only show what would be changed
      --force         DANGER: For a config on a device that might result in corruption
  -h, --help          help for updates
      --tag string    Target tag for device to follow
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl devices config](fioctl_devices_config.md)	 - Device configuration

