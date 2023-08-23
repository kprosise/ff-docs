## fioctl waves cancel

Cancel a given wave by name

### Synopsis

Cancel a given wave by name.
Once canceled a wave is no longer available as an update source for production devices.
However, those devices that has already updated to a wave version
will remain on that version until a new version is rolled out.

```
fioctl waves cancel <wave> [flags]
```

### Options

```
  -h, --help   help for cancel
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

