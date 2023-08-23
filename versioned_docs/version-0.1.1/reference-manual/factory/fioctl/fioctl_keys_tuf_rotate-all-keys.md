## fioctl keys tuf rotate-all-keys

Rotate all online and offline TUF signing keys for the Factory

### Synopsis

Rotate the following TUF keys for the Factory:
- offline root signing key;
- offline targets signing key;
- online targets signing key;
- online snapshot signing key;
- online timestamp signing key.

The new signing keys are rotated in both CI and production TUF root transactionally.

When you rotate all TUF signing leys:
- if there are CI or production targets in your factory, they are re-signed using the new keys.
- if there is an active wave in your factory, this command is not allowed.
- new CI targets upload is temporarily disabled for the duration of transaction.

```
fioctl keys tuf rotate-all-keys --keys=<offline-creds.tgz> [flags]
```

### Examples

```

Migrate an old factory to use Ed25519 key type for all TUF signing keys (online and offline):
  fioctl keys tuf rotate-all-keys --key-type=ed25519 \
    --keys=offline-tuf-root-keys.tgz --targets-keys=offline-tuf-targets-keys.tgz
```

### Options

```
  -m, --changelog string      Reason for doing rotation. Saved in root metadata for tracking change history.
      --first-time            Used for the first customer rotation. The command will download the initial root key.
  -h, --help                  help for rotate-all-keys
  -y, --key-type string       Key type, supported: Ed25519, RSA. (default "ED25519")
  -k, --keys string           Path to <offline-creds.tgz> used to sign TUF root.
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

