## fioctl el2g devices add

Grant device access to EdgeLock 2GO

```
fioctl el2g devices add <NC12 product-id> <device-id> [flags]
```

### Examples

```
# Add a device with an SE050 (product ID: 935389312472)
# The product IDs configured for you factory can be found by running
#  fioctl el2g status
# Device ID can be found on a device by running:
#  $ ssscli se05x uid | grep "Unique ID:" | cut -d: -f2
#  ssscli se05x uid | grep "Unique ID:" | cut -d: -f2
#  04005001eee3ba1ee96e60047e57da0f6880
# This ID is hexadecimal and must be prefixed in the CLI with 0x. For example:
fioctl el2g devices add 935389312472 0x04005001eee3ba1ee96e60047e57da0f6880

# Add a production device with an SE051 HSM (product ID: 935414457472)
fioctl el2g devices add --production 935414457472 0x04005001eee3ba1ee96e60047e57da0f6880

```

### Options

```
  -h, --help         help for add
      --production   A production device
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl el2g devices](fioctl_el2g_devices.md)	 - Manage devices for EdgeLock 2Go

