## fioctl secrets update

Update secret(s) in a factory

```
fioctl secrets update secret_name=secret_val... [flags]
```

### Examples

```

  # Create or update a secret
  fioctl secrets update githubtok=foo

  # Create or update a secret with value from a file
  fioctl secrets update ssh-github.key==/tmp/ssh-github.key

  # Delete a secret by setting it to an empty value. eg:
  fioctl secrets update secret_name=
```

### Options

```
  -h, --help   help for update
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl secrets](fioctl_secrets.md)	 - Manage secret crendentials configured in a factory

