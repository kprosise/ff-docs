## fioctl event-queues listen

Listen to events sent to a pull queue

### Synopsis

Listens to pull queue events. This command is useful for debugging or as a 
reference implementation of queue listener.

```
fioctl event-queues listen <label> <creds file> [flags]
```

### Options

```
  -h, --help   help for listen
```

### Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

### SEE ALSO

* [fioctl event-queues](fioctl_event-queues.md)	 - Manage event queues configured for a Factory

