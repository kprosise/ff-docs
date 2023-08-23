## fioctl event-queues mk-pull

Create a message queue that can be polled for events

### Synopsis

Create a message queue that can be polled for events via the Google PubSub API:

  https://cloud.google.com/pubsub/docs/reference/libraries 

The command creates a credentials file to a scoped service account capable of 
polling the resulting PubSub subscription.

```
fioctl event-queues mk-pull <label> <pubsub creds file> [flags]
```

### Options

```
  -h, --help   help for mk-pull
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

