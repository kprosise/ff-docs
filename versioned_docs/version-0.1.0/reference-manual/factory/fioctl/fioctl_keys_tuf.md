## fioctl keys tuf

Manage The Update Framework Keys for your factory

### Synopsis

These sub-commands allow you to manage your Factory's TUF private keys
to ensure that you are in complete control of your OTA metadata.

### Options

```
  -h, --help   help for tuf
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl keys](fioctl_keys.md)	 - Manage keys in use by your factory fleet
* [fioctl keys tuf rotate-all-keys](fioctl_keys_tuf_rotate-all-keys.md)	 - Rotate all online and offline TUF signing keys for the Factory
* [fioctl keys tuf rotate-offline-key](fioctl_keys_tuf_rotate-offline-key.md)	 - Rotate the offline TUF signing key for the Factory
* [fioctl keys tuf show-root](fioctl_keys_tuf_show-root.md)	 - Show the Factory's TUF root metadata
* [fioctl keys tuf updates](fioctl_keys_tuf_updates.md)	 - Manage updates to the TUF root for your factory (expert mode)

