## fioctl keys tuf updates sign

Sign the staged TUF root for your Factory with the offline root key

### Synopsis

Sign the staged TUF root for your Factory with the offline root key

```
fioctl keys tuf updates sign --txid=<txid> --keys=<tuf-root-keys.tgz> [flags]
```

### Options

```
  -h, --help          help for sign
  -k, --keys string   Path to <tuf-root-keys.tgz> used to sign TUF root.
  -x, --txid string   TUF root updates transaction ID.
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

