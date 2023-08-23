## fioctl targets show sboms

Show SBOMs for a specific target.

```
fioctl targets show sboms <version> [<build/run> [<artifact>]]  [flags]
```

### Examples

```

  # Show all SBOM files for Target version 42:
  fioctl targets show sboms 42

  # Show a subset of the SBOMS for this target. In this case, the 32-bit Arm
  # container SBOMS:
  fioctl targets show sboms 42 41/build-armhf
 
  # Show overview of a specific SBOM:
  fioctl targets show sboms 42 41/build-armhf alpine:latest/arm.spdx.json
  
  # Show overview of a specific SBOM as CSV:
  fioctl targets show sboms --format csv 42 41/build-armhf alpine:latest/arm.spdx.json
  
  # Download all SBOMS for a target to /tmp:
  fioctl targets show sboms 42 --download /tmp
  
  # Download a filtered list of SBOMs to /tmp:
  fioctl targets show sboms 42 41/build-armhf alpine:latest/arm.spdx.json --download /tmp
  
  # Download a specific SBOM as cyclonedx:
  fioctl targets show sboms 42 41/build-armhf --download /tmp --format cyclonedx

  # Download all SBOMS for a target to /tmp as CSV:
  fioctl targets show sboms 42 --download /tmp --format csv
```

### Options

```
      --download string   Download SBOM(s) to a directory
      --format string     The format to download/display. Must be one of table, spdx, cyclonedx, or csv (default "table")
  -h, --help              help for sboms
```

### Options inherited from parent commands

```
  -c, --config string           config file (default is $HOME/.config/fioctl.yaml)
  -f, --factory string          Factory to list targets for
      --production-tag string   Look up target from the production tag
  -t, --token string            API token from https://app.foundries.io/settings/tokens/
  -v, --verbose                 Print verbose logging
```

### SEE ALSO

* [fioctl targets show](fioctl_targets_show.md)	 - Show details of a specific target.

