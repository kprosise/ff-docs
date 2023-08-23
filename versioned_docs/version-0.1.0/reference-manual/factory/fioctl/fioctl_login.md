## fioctl login

Access Foundries.io services with your client credentials

```
fioctl login [flags]
```

### Options

```
  -h, --help                   help for login
      --oauth-url string       OAuth URL to authenticate with (default "https://app.foundries.io/oauth")
      --refresh-access-token   Refresh your current oauth2 access token. This is used when a token's scopes have been updated in app.foundries.io
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories

