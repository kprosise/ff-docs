## fioctl devices config set

Create a secure configuration for the device

### Synopsis

Creates a secure configuration for device encrypting the contents each
file using the device's public key. The fioconfig daemon running
on each device will then be able to grab the latest version of the
device's configuration and apply it. The maximum size of a config is 1Mb.

```
fioctl devices config set <device> <file1=content> <file2=content ...> [flags]
```

### Examples

```
  
  # Basic use can be done with command line arguments:
  fioctl device config set my-device npmtok="root" githubtok="1234" readme.md==./readme.md

  There are several ways how to pass a file content into this command:
  - with filename="filecontent" format, a file content is passed directly.
  - with filename==/path/to/file format, a file content is read from a specified file path.

  # The device configuration format also allows specifying what command
  # to run after a configuration file is updated on the device. To take
  # advantage of this, the "--raw" flag must be used.
  cat >tmp.json <<EOF
  {
    "reason": "I want to use the on-changed attribute",
    "files": [
      {
        "name": "npmtok",
        "value": "root",
        "on-changed": ["/usr/bin/touch", "/tmp/npmtok-changed"]
      },
      {
        "name": "A-Readable-Value",
        "value": "This won't be encrypted and will be visible from the API",
        "unencrypted": true
      },
      {
        "name": "githubtok",
        "value": "1234"
      }
    ]
  }
  > EOF
  fioctl devices config set my-device --raw ./tmp.json

  # fioctl will read in tmp.json, encrypt its contents, and upload it
  # to the OTA server. Instead of using ./tmp.json, the command can take
  # a "-" and will read the content from STDIN instead of a file.

```

### Options

```
      --create          Replace the whole config with these values. Default is to merge these values in with the existing config values
  -h, --help            help for set
      --raw             Use raw configuration file
  -m, --reason string   Add a message to store as the "reason" for this change
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl devices config](fioctl_devices_config.md)	 - Device configuration

