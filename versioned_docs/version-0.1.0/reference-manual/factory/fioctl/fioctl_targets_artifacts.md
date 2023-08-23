## fioctl targets artifacts

Show artifacts created in CI for a Target

```
fioctl targets artifacts <target> [<artifact name>] [flags]
```

### Examples

```

  # List all artifacts for Target 12
  fioctl targets artifacts 12

  # Dump console.log artifact to STDOUT
  fioctl targets artifacts 12 publish-compose-apps/console.log

  # Download an artifact. Progress is printed to STDERR, the contents is
  # re-directed /tmp/tmp.gz
  fioctl-linux-amd64 targets artifacts 207 \
    raspberrypi3-64/lmp-factory-image-raspberrypi3-64.wic.gz >/tmp/tmp.gz

```

### Options

```
  -h, --help   help for artifacts
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

