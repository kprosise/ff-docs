## fioctl keys tuf updates init

Start a new transaction to update TUF root keys

```
fioctl keys tuf updates init [flags]
```

### Options

```
  -m, --changelog string   Reason for doing this operation. Saved in root metadata to track change history.
      --first-time         Used for the first customer rotation. The command will download the initial root key.
  -h, --help               help for init
  -k, --keys string        Path to <offline-creds.tgz> used to store initial root key.
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl keys tuf updates](fioctl_keys_tuf_updates.md)	 - Manage updates to the TUF root for your factory (expert mode)

