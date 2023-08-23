## fioctl targets image

Generate a system image with pre-loaded container images

```
fioctl targets image <target-name> [flags]
```

### Examples

```
fioctl targets image raspberrypi4-64-lmp-464 // preload all Target apps
fioctl targets image raspberrypi4-64-lmp-464 --apps app-00,app-01 // preload app-00 and app-01
```

### Options

```
      --apps string              comma,separate,list of Target apps to preload into a resultant image. All apps of Target are preloaded if the flag is not defined or empty
      --ci-scripts-ref string    Override to a specific git-ref of ci-scripts (default "master")
      --ci-scripts-repo string   Override to custom version of ci-scripts (default "https://github.com/foundriesio/ci-scripts")
  -h, --help                     help for image
      --no-tail                  Don't tail output of CI Job
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

