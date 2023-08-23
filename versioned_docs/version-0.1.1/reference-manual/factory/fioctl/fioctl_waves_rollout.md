## fioctl waves rollout

Roll out a wave to a subset of production devices

### Synopsis

Roll out a wave to a subset of production devices matching a wave's tag.
Upon rollout a wave becomes available as an update source for a given subset of production devices.
A rollout is not instant, rather each device will update to the wave's targets at some point.
The exact update time is determined by many factors:
device up and down lifecycle, its update schedule, networking between a device and update servers, etc.
At least one command flag is required to limit the subset of devices to roll out to.
If you want to roll out to all matching devices in a factory, please, use the "complete" command.

```
fioctl waves rollout <wave> [flags]
```

### Examples

```

Rollout a wave to all devices in the "us-east" device group:
$ fioctl waves rollout --group us-east

Rollout a wave to 10 devices in the "us-east" device group:
$ fioctl waves rollout --group us-east --limit=10

Rollout a wave to 2 specific devices in the "us-east" device group:
$ fioctl waves rollout --group us-east --uuids=uuid1,uuid2

Rollout a wave to 10% devices in your factory:
$ fioctl waves rollout --limit=10%

Rollout a wave to specific devices in your factory, device UUIDs provided by a file:
$ fioctl waves rollout --uuids=@/path/to/file

Rollout a wave to 10% of specific devices in your factory, device UUIDs provided by a file:
$ fioctl waves rollout --uuids=@/path/to/file --limit=10%

In all of the above examples:
- When using the "uuids" flag, each device in a list is verified to match wave requirements.
  In addition, if the "group" flag is provided, each device must also belong to that device group.
- When using the "limit" flag, a list of rolled out devices is auto-selected by the API.
  The most recently active devices have a higher chance to get into this selection.
  A device is excluded from the selection, if a wave was already rolled out to it ealier.
- Using both "uuids" and "limit" flags constrains auto-selection to a given device list.
  This can be combined with the "group" flag to further constrain it to a given device group.
- The following characters are supported as a separator for the device list in the "uuids" flag:
  a comma (","), a semicolon (";"), a pipe ("|"), white space, tabs, and line breaks.
  The user is responsible for properly escaping these characters in a shell script.
  It is recommended to pass a list of UUIDs via a file if their number is big enough.

```

### Options

```
      --dry-run        Only show what would happen without an actual rollout. Most useful with --print-xxx flags.
  -g, --group string   A device group to roll out a wave to
  -h, --help           help for rollout
  -l, --limit string   A number of devices to roll out a wave to.
                       It can be an exact number (e.g. 10), or as a percentage of all matching devices (e.g. 10%).
                       An actual number of rolled out devices can be less than the specified value.
                       A maximum number of devices rolled out using this flag cannot exceed 10000.
      --print-names    Print names of devices to which a wave was rolled out (would be rolled out with --dry-run).
      --print-uuids    Print UUIDs of devices to which a wave was rolled out (would be rolled out with --dry-run).
      --uuids string   A comma-separated list of exact device UUIDs to roll out a wave to.
                       Also accepts a filename containing a comma-separated list via "--uuids=@path/to/file.name".
                       A maximum number of devices rolled out using this flag cannot exceed 10000.
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl waves](fioctl_waves.md)	 - Manage factory's waves

