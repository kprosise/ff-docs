## fioctl completion

Generate completion script

```
fioctl completion [bash|zsh|powershell]
```

### Examples

```

# Bash:
$ source <(fioctl completion bash)

# To load completions for each session, execute once:
Linux:
  $ fioctl completion bash > /etc/bash_completion.d/fioctl
MacOS:
  $ fioctl completion bash > /usr/local/etc/bash_completion.d/fioctl

# Zsh:
# If shell completion is not already enabled in your environment you will need
# to enable it.  You can execute the following once:

$ echo "autoload -U compinit; compinit" >> ~/.zshrc

# To load completions for each session, execute once:
$ fioctl completion zsh > "${fpath[1]}/_fioctl"

# You will need to start a new shell for this setup to take effect.

# Fish:
$ fioctl completion fish > ~/.config/fish/completions/fioctl.fish

```

### Options

```
  -h, --help   help for completion
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories

