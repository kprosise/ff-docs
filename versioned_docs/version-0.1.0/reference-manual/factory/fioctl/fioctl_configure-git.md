## fioctl configure-git

Configure a source.foundries.io Git credential helper

### Synopsis

Configure a Git credential helper that allows Git to access
source.foundries.io.

This command will likely need to be run as root. It creates a symlink,
git-credential-fio, in the same directory as the git client binary.

NOTE: The credentials will need the "source:read-update" scope to work with Git

```
fioctl configure-git [flags]
```

### Options

```
      --creds-path string   Path to install credential helper. This needs to be writable and in $PATH (default "/opt/homebrew/Cellar/pyenv-virtualenv/1.2.1/shims")
  -h, --help                help for configure-git
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories

