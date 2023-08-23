## fioctl config set

Create a new factory-wide configuration

### Synopsis

Creates a factory wide configuration. The fioconfig daemon running on
each device will then be able to grab the latest version of the configuration
and the device's configuration and apply it. Use the --group parameter to 
create a device group wide configuration instead.

```
fioctl config set file=content <file2=content ...> [flags]
```

### Examples

```

  # Basic use
  fioctl config set npmtok="root" githubtok="1234" readme.md==./readme.md

  There are several ways how to pass a file content into this command:
  - with filename="filecontent" format, a file content is passed directly.
  - with filename==/path/to/file format, a file content is read from a specified file path.

  # The configuration format also allows specifying what command to
  # run after a configuration file is updated on the device. To take
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
  fioctl config set --raw ./tmp.json

  # fioctl will read in tmp.json and upload it to the OTA server.
  # Instead of using ./tmp.json, the command can take a "-" and will read the
  # content from STDIN instead of a file.
```

### Options

```
      --create          Replace the whole config with these values. Default is to merge these values in with the existing config values
  -g, --group string    Device group to use
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

* [fioctl config](fioctl_config.md)	 - Manage configuration common to all devices in a factory

