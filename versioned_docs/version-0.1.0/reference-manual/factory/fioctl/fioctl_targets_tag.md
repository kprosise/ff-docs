## fioctl targets tag

Apply a comma separated list of tags to one or more targets.

```
fioctl targets tag <target> [<target>...] [flags]
```

### Examples

```

  # Promote Target #42 currently tagged as master
  fioctl targets tag --tags master,promoted --by-version 42

  # Tag a specific Target by name
  fioctl targets tag --tags master,testing intel-corei7-64-lmp-42
```

### Options

```
      --append        Append the given tags rather than set them
      --by-version    Apply tags to all targets matching the given version(s)
      --dryrun        Just show the changes that would be applied
  -h, --help          help for tag
      --no-tail       Don't tail output of CI Job
  -T, --tags string   comma,separate,list
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

