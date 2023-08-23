## fioctl keys tuf rotate-offline-key

Rotate the offline TUF signing key for the Factory

### Synopsis

Rotate the TUF root or TUF targets offline signing key for the Factory.

The new signing key is rotated in both CI and production TUF root transactionally.

When you rotate the TUF targets offline signing key:
- if there are production targets in your factory, they are re-signed using the new key.
- if there is an active wave in your factory, the TUF targets rotation is not allowed.

```
fioctl keys tuf rotate-offline-key --role root|targets --keys=<offline-creds.tgz> [flags]
```

### Examples

```

  # Take ownership of TUF root and targets keys for a new factory, keep them in separate files:
  fioctl keys tuf rotate-offline-key --role=root \
    --keys=offline-tuf-root-keys.tgz --first-time
  fioctl keys tuf rotate-offline-key --role=targets \
    --keys=offline-tuf-root-keys.tgz --targets-keys=offline-tuf-targets-keys.tgz

  # Rotate offline TUF targets key using the Ed25519 elliptic curve to generate a new key pair:
  fioctl keys tuf rotate-offline-key --role=targets --key-type=ed25519 \
    --keys=offline-tuf-root-keys.tgz --targets-keys=offline-tuf-targets-keys.tgz
```

### Options

```
  -m, --changelog string      Reason for doing rotation. Saved in root metadata for tracking change history.
      --first-time            Used for the first customer rotation. The command will download the initial root key.
  -h, --help                  help for rotate-offline-key
  -y, --key-type string       Key type, supported: Ed25519, RSA. (default "ED25519")
  -k, --keys string           Path to <offline-creds.tgz> used to sign TUF root.
  -r, --role string           TUF role name, supported: Root, Targets.
  -K, --targets-keys string   Path to <offline-targets-creds.tgz> used to sign prod & wave TUF targets.
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl keys tuf](fioctl_keys_tuf.md)	 - Manage The Update Framework Keys for your factory

