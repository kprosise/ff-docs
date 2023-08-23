## fioctl targets offline-update

Download Target content for an offline update

```
fioctl targets offline-update <target-name> <dst> --tag <tag> [--prod] [--expires-in-days <days>] [--tuf-only] [flags]
```

### Examples

```

	# Download update content of the production target #1451 tagged by "release-01" for "intel-corei7-64" hardware type
	fioctl targets offline-update intel-corei7-64-lmp-1451 /mnt/flash-drive/offline-update-content --tag release-01 --prod

	# Download update content of the CI target #1451 tagged by "devel" for "raspberrypi4-64" hardware type
	fioctl targets offline-update raspberrypi4-64-lmp-1448 /mnt/flash-drive/offline-update-content --tag devel --expires-in-days 15

	
```

### Options

```
  -e, --expires-in-days int   Desired metadata validity period in days (default 30)
  -h, --help                  help for offline-update
      --no-apps               Skip fetching Target Apps
      --prod                  Instruct to fetch content of production Target
      --tag string            Target tag
  -m, --tuf-only              Fetch only TUF metadata
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

