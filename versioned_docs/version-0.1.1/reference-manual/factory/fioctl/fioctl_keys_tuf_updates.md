## fioctl keys tuf updates

Manage updates to the TUF root for your factory (expert mode)

### Synopsis

These sub-commands allow you to transactionally stage and apply changes
to your Factory's TUF private keys in a granular way familiar for TUF experts.

The TUF updates transaction starts by running the "fioctl keys tuf updates init" command.
That command returns a unique secure Transaction ID which is then required for other actions.
The admin initiating the transaction should save that TXID for the timespan of the transaction.
It must only be shared with those Factory admins which will participate in the transaction.

Typically, admin(s) will run other subcommands to make changes to the TUF root (see examples).
The staged changes can be checked using the "fioctl keys tuf updates review" command.

Finally, the transaction can be applied using the "fioctl keys tuf updates apply" command.
If admin decides to abandon the staged changes they can run "fioctl keys tuf updates cancel".

For increased safety there can be only one active TUF updates transaction at a time.

### Examples

```

- Take ownership of TUF root and targets keys for a new factory, keep them on separate machines:
  1. On TUF root admin's shell:
     fioctl keys tuf updates init --first-time --keys=tuf-root-keys.tgz
  2. The above command prints a transaction ID (e.g. abcdef42) to be shared with TUF targets admin.
  3. On TUF targets admin's shell:
     fioctl keys tuf updates rotate-offline-key \
	    --role=targets --txid=abcdef42 --targets-keys=tuf-targets-keys.tgz
  4. On TUF root admin's shell:
     fioctl keys tuf updates rotate-offline-key \
	    --role=root --txid=abcdef42 --keys=tuf-root-keys.tgz --sign
  5. On TUF root admin's shell:
     fioctl keys tuf updates apply --txid=abcdef42
```

### Options

```
  -h, --help   help for updates
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
* [fioctl keys tuf updates apply](fioctl_keys_tuf_updates_apply.md)	 - Apply staged TUF root updates for the Factory
* [fioctl keys tuf updates cancel](fioctl_keys_tuf_updates_cancel.md)	 - Cancel staged TUF root updates for the Factory
* [fioctl keys tuf updates init](fioctl_keys_tuf_updates_init.md)	 - Start a new transaction to update TUF root keys
* [fioctl keys tuf updates review](fioctl_keys_tuf_updates_review.md)	 - Show the Factory's TUF root metadata
* [fioctl keys tuf updates rotate-offline-key](fioctl_keys_tuf_updates_rotate-offline-key.md)	 - Stage rotation of the offline TUF signing key for the Factory
* [fioctl keys tuf updates rotate-online-key](fioctl_keys_tuf_updates_rotate-online-key.md)	 - Stage rotation of the online TUF signing key for the Factory
* [fioctl keys tuf updates sign](fioctl_keys_tuf_updates_sign.md)	 - Sign the staged TUF root for your Factory with the offline root key

