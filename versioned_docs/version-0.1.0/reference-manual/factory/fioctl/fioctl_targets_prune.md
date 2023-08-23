## fioctl targets prune

Prune target(s)

```
fioctl targets prune <target> [<target>...] [flags]
```

### Examples

```

  # prune a single target by name:
  fioctl targets prune intel-corei7-64-lmp-123

  # prune all targets with the "custom.tags" set to ["devel"]:
  fioctl targets prune --by-tag devel

  # prune all targets with the "custom.tags" set to ["devel"] except for the most recent 10:
  fioctl targets prune --by-tag devel --keep-last=10

  # prune all targets with the "custom.tags" set to ["devel", "my-test"]:
  fioctl targets prune --by-tag devel my-test

  # see the list of targets to be pruned (based on the above example), don't prune them:
  fioctl targets prune --by-tag devel my-test --dryrun
```

### Options

```
      --by-tag          Prune all targets by tags instead of name
      --dryrun          Only show what would be pruned
  -h, --help            help for prune
      --keep-last int   Keep the last X number of builds for a tag when pruning
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

