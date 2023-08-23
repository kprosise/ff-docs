## fioctl config updates

Configure aktualizr-lite settings for how updates are applied to a device group

### Synopsis

View or change configuration parameters used by aktualizr-lite for updating devices
in a device group. When run with no options, this command will print out how the 
group is currently configured.

```
fioctl config updates [flags]
```

### Examples

```

  # Make devices start taking updates from Targets tagged with "devel":
  fioctl config updates --group beta --tag devel

  # Set the docker apps that devices will run:
  fioctl config updates --group beta --apps shellhttpd

  # Set the docker apps and the tag for devices:
  fioctl config updates --group beta --apps shellhttpd --tag master
```

### Options

```
      --apps string    comma,separate,list
      --dryrun         Only show what would be changed
      --force          DANGER: For a config on a device that might result in corruption
  -g, --group string   Device group to use
  -h, --help           help for updates
      --tag string     Tag for devices to follow
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl config](fioctl_config.md)	 - Manage configuration common to all devices in a factory

