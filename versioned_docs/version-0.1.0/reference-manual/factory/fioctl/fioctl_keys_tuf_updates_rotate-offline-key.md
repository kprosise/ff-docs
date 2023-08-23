## fioctl keys tuf updates rotate-offline-key

Stage rotation of the offline TUF signing key for the Factory

### Synopsis

Stage rotation of the offline TUF signing key for the Factory.

The new offline signing key will be used in both CI and production TUF root.

When you rotate the TUF targets offline signing key:
- if there are production targets in your factory, they are re-signed using the new key.
- if there is an active wave in your factory, the TUF targets rotation is not allowed.

```
fioctl keys tuf updates rotate-offline-key --role root|targets --txid=<txid> --keys=<tuf-root-keys.tgz> [flags]
```

### Examples

```

- Rotate offline TUF root key and re-sign the new TUF root with both old and new keys:
  fioctl keys tuf updates rotate-offline-key \
    --txid=abc --role=root --keys=tuf-root-keys.tgz --sign
- Rotate offline TUF root key explicitly specifying new key type (and signing algorithm):
  fioctl keys tuf updates rotate-offline-key \
    --txid=abc --role=root --keys=tuf-root-keys.tgz --key-type=ed25519
- Rotate offline TUF targets key and re-sign the new TUF root with offline TUF root key:
  fioctl keys tuf updates rotate-offline-key \
    --txid=abc --role=targets --keys=tuf-root-keys.tgz --sign
- Rotate offline TUF targets key and store the new key in a separate file (and re-sign TUF root):
  fioctl keys tuf updates rotate-offline-key \
    --txid=abc --role=targets --keys=tuf-root-keys.tgz --targets-keys=tuf-targets-keys.tgz --sign
```

### Options

```
  -h, --help                  help for rotate-offline-key
  -y, --key-type string       Key type, supported: Ed25519, RSA. (default "ED25519")
  -k, --keys string           Path to <tuf-root-keys.tgz> used to sign TUF root.
  -r, --role string           TUF role name, supported: Root, Targets.
  -s, --sign                  Sign the new TUF root using the offline root keys.
  -K, --targets-keys string   Path to <tuf-targets-keys.tgz> used to sign prod & wave TUF targets.
  -x, --txid string           TUF root updates transaction ID.
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

