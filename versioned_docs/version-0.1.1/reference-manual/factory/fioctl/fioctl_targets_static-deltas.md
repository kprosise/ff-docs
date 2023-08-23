## fioctl targets static-deltas

Generate static deltas to the given target version to make OTAs faster

### Synopsis

In many cases OTA updates will have many OSTree changes. These updates
can be downloaded significantly faster by generating OSTree static
deltas. Static deltas are generated with a "from(sha) -> to(sha)" type
logic. This command takes the given Target version and will produce a
number of static deltas to ensure devices will be updated efficiently.

```
fioctl targets static-deltas <target-version> [<from-version>...] [flags]
```

### Examples

```

  # There are two ways to run this command:

  # Generate static deltas for 30->42 and 31->42
  fioctl targets static-deltas 42 30 31

  # Find the target versions of all devices configured to the "prod" tag.
  # Generate a static delta from those versions to version 42.
  fioctl targets static-deltas --by-tag prod 42
```

### Options

```
      --by-tag string   Find from-versions devices on the given tag
      --dryrun          Only show what deltas would be produced
  -h, --help            help for static-deltas
      --hw-id string    Filter from and to targets by the given hardware ID
      --no-tail         Don't tail output of CI Job
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl targets](fioctl_targets.md)	 - Manage factory's TUF targets

