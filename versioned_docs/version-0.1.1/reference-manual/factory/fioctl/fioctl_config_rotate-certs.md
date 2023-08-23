## fioctl config rotate-certs

Rotate device x509 keypairs in this group used to connect to the device gateway

### Synopsis

This command will send a fioconfig change to a device to instruct it to perform
a certificate rotation using the EST server configured with "fioctl keys est".

This command will only work for devices running LmP version 90 and later.

```
fioctl config rotate-certs [flags]
```

### Options

```
      --dryrun                Show what the fioconfig entry will be and exit
  -p, --est-port int          The EST server port (default 8443)
  -e, --est-resource string   The path the to EST resource on your server (default "/.well-known/est")
  -g, --group string          Device group to use
  -h, --help                  help for rotate-certs
      --hsm-cert-ids string   Available PKCS11 slot IDs for the client certificate (default "03,09")
      --hsm-pkey-ids string   Available PKCS11 slot IDs for the private key (default "01,07")
  -r, --reason string         The reason for changing the cert
      --server-name string    EST server name when not using the Foundries managed server. e.g. est.example.com
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl config](fioctl_config.md)	 - Manage configuration common to all devices in a factory

