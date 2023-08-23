# fioctl targets add

Compose and add Targets to Factory's  TUF targets metadata

## Synopsis

Compose new Targets out of the latest Targets tagged with the specified source tag and the specified via the command arguments eiter OSTree commit hashes or App URIs.

```
fioctl targets add --type <ostree | app> --tags <comma,separate,list of Target tags> --src-tag <source Target tag> [--targets-creator <something about Targets originator>]\ 
	<hardware ID> <ostree commit hash> [<hardware ID> <ostree commit hash>]  (for ostree type)
	<App #1 URI> [App #N URI] (for app type)
```

```
fioctl targets add [flags]
```

## Examples

```

Add new ostree Targets: 
	fioctl targets add --type ostree --tags dev,test --src-tag dev --targets-creator "custom jenkins ostree build" intel-corei7-64 00b2ad4a1dd7fe1e856a6d607ed492c354a423be22a44bad644092bb275e12fa raspberrypi4-64 5e05a59529dcdd54310945b2628d73c0533097d76cc483334925a901845b3794
		
Add new App Targets:
	fioctl targets add --type app --tags dev,test --src-tag dev hub.foundries.io/factory/simpleapp@sha256:be955ad958ef37bcce5afaaad32a21b783b3cc29ec3096a76484242afc333e26 hub.foundries.io/factory/app-03@sha256:59b080fe42d7c45bc81ea17ab772fc8b3bb5ef0950f74669d069a2e6dc266a24 
		
```

## Options

```
      --dry-run                  don't post generated new Targets
  -h, --help                     help for add
      --quiet                    don't print generated new Targets to stdout
      --src-tag string           OSTree Target tag to base app targets on
      --tags string              comma,separate,list of Target tags
      --targets-creator string   optional name/comment/context about Targets origination (default "fioctl")
      --type string              Target type
```

## Options inherited from parent commands

```
  -c, --config string    config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string   Factory to list targets for
  -t, --token string     API token from https://app.foundries.io/settings/tokens/
  -v, --verbose          Print verbose logging
```

## SEE ALSO

* [fioctl targets](fioctl_targets.md)	 - Manage factory's TUF targets

