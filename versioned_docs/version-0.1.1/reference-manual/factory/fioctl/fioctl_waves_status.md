## fioctl waves status

Show a status for a given wave by name

### Synopsis

Show a status for a given wave by name.
When no wave name is provided - show a status for a currently active wave.

For an active wave this command shows an overview of a wave,
followed by an overview of device groups participating in a wave,
and after that a detailed information for each rollout group.

For finished waves a detailed per group information is not shown as it is no more relevant.

When counting a total number of devices participating in a wave,
each production device that has a tag equal to a wave tag counts.
In particular, devices outside rollout groups also count if they satisfy this condition.

All other numbers are calculated relative to this total number.
For example, online devices in each group are counted among only those production devices,
that belong to a given group and also have a tag equal to a group tag.
This number can be lower than a total number of online devices in this group.

In a device group overview all wave rollout groups are shown first in an order of rollout time.
After that follow other groups that have devices with matching tag (if they contain at least one such device).
The last row is for devices not belonging to any group (if at least one such device matches a wave tag).

A number of updated devices depends onto a wave status:
For active wave it is a number of devices in rollout groups with target version >= wave version.
For finished waves it is a number of all devices with target version >= wave version.

Meaning of scheduled vs unscheduled (for update) device number also depends onto a wave status:
For active wave, scheduled for update are devices in rollout groups with target version < wave version.
For complete wave, scheduled are all devices (regardless a group) with target version < wave version.
For canceled wave, all devices with target version < wave version are unscheduled (scheduled is always zero).

For finished waves all numbers are calculated for a current date (not a date of a wave finishing).
This can be used to monitor how an update progresses after a wave has been complete.


```
fioctl waves status [<wave>] [flags]
```

### Options

```
  -h, --help                    help for status
      --offline-threshold int   Consider device 'OFFLINE' if not seen in the last X hours (default 4)
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

