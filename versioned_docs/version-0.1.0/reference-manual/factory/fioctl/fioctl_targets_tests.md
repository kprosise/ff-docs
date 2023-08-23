## fioctl targets tests

Show testing done against a target

```
fioctl targets tests [<target> [<test-id> [<artifact name>]]] [flags]
```

### Examples

```

  # List all testing performed in factory
  fioctl targets tests

  # Show tests run against Target 12
  fioctl targets tests 12

  # Show details of a specific test
  fioctl targets tests 12 <test-id>

  # Display a test artifact
  fioctl targets tests 12 <test-id> console.log

```

### Options

```
  -h, --help   help for tests
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

