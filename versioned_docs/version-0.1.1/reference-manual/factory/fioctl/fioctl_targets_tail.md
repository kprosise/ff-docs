## fioctl targets tail

Tail the console output of a live CI Run

```
fioctl targets tail <target> <run> [flags]
```

### Examples

```

  fioctl targets tail 12 build-amd64

```

### Options

```
  -h, --help   help for tail
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

