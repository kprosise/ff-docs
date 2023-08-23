## fioctl keys tuf updates rotate-online-key

Stage rotation of the online TUF signing key for the Factory

### Synopsis

Stage rotation of the online TUF signing key for the Factory.

The new online signing key will be used in both CI and production TUF root.

When you rotate the TUF online signing key:
- if there are CI or production targets in your factory, they are re-signed using the new key.
- if there is an active wave in your factory, the TUF online key rotation is not allowed.
- the new wave cannot be created until you apply the online keys rotation.

When you apply the online key rotation, these features are temporarily disabled until it succeeds:
- new CI targets upload (including the targets upload during CI builds).
- automatic re-signing of expired TUF roles using online keys (both CI and production targets).

```
fioctl keys tuf updates rotate-online-key --role targets|snapshot|timestamp [--txid=<txid>] [flags]
```

### Examples

```

- Rotate online TUF targets key and re-sign the new TUF root:
  fioctl keys tuf updates rotate-online-key \
    --txid=abc --role=targets --keys=tuf-root-keys.tgz --sign
- Rotate all online TUF keys explicitly specifying new key type (and signing algorithm):
  fioctl keys tuf updates rotate-online-key \
    --txid=abc --role=targets,snapshot,timestamp --key-type=ed25519
```

### Options

```
  -h, --help              help for rotate-online-key
  -y, --key-type string   Key type, supported: Ed25519, RSA. (default "ED25519")
  -k, --keys string       Path to <tuf-root-keys.tgz> used to sign TUF root.
  -r, --role strings      TUF role name, supported: Targets, Snapshot, Timestamp.
  -s, --sign              Sign the new TUF root using the offline root keys.
  -x, --txid string       TUF root updates transaction ID.
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

