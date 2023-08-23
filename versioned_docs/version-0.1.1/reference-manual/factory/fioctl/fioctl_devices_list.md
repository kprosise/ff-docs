## fioctl devices list

List devices registered to factories. Optionally include filepath style patterns to limit to device names. eg device-*

### Synopsis

Available columns for display:

  * apps
  * created-at
  * created-by
  * curent-update
  * device-group
  * factory
  * is-prod
  * is-wave
  * last-seen
  * name
  * ostree-hash
  * owner
  * status
  * tag
  * target
  * up-to-date
  * updated-at
  * updated-by
  * uuid

```
fioctl devices list [pattern] [flags]
```

### Options

```
  -g, --by-group string                    Only list devices belonging to this group (factory is mandatory)
      --by-tag string                      Only list devices configured with the given tag
      --by-target string                   Only list devices updated to the given target name
      --columns strings                    Specify which columns to display (default [name,target,status,apps,up-to-date,is-prod])
  -h, --help                               help for list
      --just-mine                          Only include devices owned by you
  -n, --limit int                          Number of devices to paginate by. Allowed values: 10,20,30,40,50,100,200,500,1000 (default 500)
      --offline-threshold int              List the device as 'OFFLINE' if not seen in the last X hours (default 4)
  -p, --page int                           Page of devices to display when pagination is needed (default 1)
      --sort-by-last-seen string[="asc"]   Sort by last-seen (asc, desc); default sort is by owner and name
      --sort-by-name string[="asc"]        Sort by name (asc, desc); default sort is by owner and name
      --uuid string                        Find device with the given UUID
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

