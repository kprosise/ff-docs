## fioctl event-queues

Manage event queues configured for a Factory

### Synopsis

Event queues provide a way for customers to receive notifications about events
happening in a Factory such as when a device is first seen or has started an
over-the-air update.

There are two types of event queues: push and pull. A pull queue works like a
traditional message queue system. Push queues are synonymous with web hooks.

### Options

```
  -f, --factory string   Factory to list targets for
  -h, --help             help for event-queues
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
```

### Options inherited from parent commands

```
  -c, --config string   config file (default is $HOME/.config/fioctl.yaml)
  -v, --verbose         Print verbose logging
```

### SEE ALSO

* [fioctl](fioctl.md)	 - Manage Foundries Factories
* [fioctl event-queues list](fioctl_event-queues_list.md)	 - List configured event queues
* [fioctl event-queues listen](fioctl_event-queues_listen.md)	 - Listen to events sent to a pull queue
* [fioctl event-queues mk-pull](fioctl_event-queues_mk-pull.md)	 - Create a message queue that can be polled for events
* [fioctl event-queues mk-push](fioctl_event-queues_mk-push.md)	 - Create an event queue that will ingest events at the URL
* [fioctl event-queues rm](fioctl_event-queues_rm.md)	 - Remove an event queue

