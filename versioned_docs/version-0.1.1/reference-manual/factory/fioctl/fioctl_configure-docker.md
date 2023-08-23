## fioctl configure-docker

Configure a hub.foundries.io Docker credential helper

### Synopsis

Configure a Docker credential helper that allows Docker to access
hub.foundries.io.

This command will likely need to be run as root. It creates a symlink,
docker-credential-fio, in the same directory as the docker client binary.

NOTE: The credentials will need the "containers:read" scope to work with Docker

```
fioctl configure-docker [flags]
```

### Options

```
      --creds-path string      Path to install credential helper (default "/opt/homebrew/Cellar/pyenv-virtualenv/1.2.1/shims")
      --docker-config string   Docker config file to update (default "/Users/kat/.docker/config.json")
  -h, --help                   help for configure-docker
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories

