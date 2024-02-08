## fioctl waves init

Create a new wave from targets of a given version

### Synopsis

Create a new wave from targets of a given version.

This command only initializes a wave, but does not provision its updates
to devices. Use a "fioctl wave rollout `<wave>` `<group>`"
to trigger updates of this wave to a device group. Use a "fioctl wave
complete `<wave>`" to update all devices (make it globally
available). Use a "fioctl wave cancel `<wave>` to cancel a wave
(make it no longer available).

```
    fioctl waves init <wave> <version> <tag> [flags]
```
### Examples

    Start a new wave for the target version 4 and the 'production' device tag:
    $ fioctl wave init -k ~/path/to/keys/targets.only.key.tgz wave-name 4 production

    Start a new wave for the target version 16 and also prune old production versions 1,2,3 and 4 in this case:
    $ fioctl wave init -k ~/path/to/keys/targets.only.key.tgz wave-name 16 production --prune 1,2,3,4

### Options

```
      -d, --dry-run             Don't create a wave, print it to standard output.
      -E, --expires-at string   Role expiration date and time in RFC 3339 format.
                                The same expiration will be used for production targets when a wave is complete.
                                When set this value overrides an 'expires-days' argument.
                                Example: 2020-01-01T00:00:00Z
      -e, --expires-days int    Role expiration in days; default 365.
                                The same expiration will be used for production targets when a wave is complete.
      -h, --help                help for init
      -k, --keys string         Path to <offline-creds.tgz> used to sign wave targets.
          --prune strings       Prune old unused Target(s) from the production metadata.
                                Example: 1,2,3
          --source-tag string   Match this tag when looking for target versions. Certain advanced tagging configurations may require this argument.
```

### Options inherited from parent commands

      -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
      -f, --factory string   Factory to list targets for
      -t, --token string     API token from https://app.foundries.io/settings/tokens/
      -v, --verbose          Print verbose logging

### SEE ALSO

-   [fioctl waves](fioctl_waves.md) - Manage factory's waves
