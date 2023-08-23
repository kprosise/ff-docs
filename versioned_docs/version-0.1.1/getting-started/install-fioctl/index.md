# Installing Fioctl {#gs-install-fioctl}

`Fioctl™ <ref-fioctl>`{.interpreted-text role="ref"} is a simple tool
for interacting with the Foundries.io REST API.

::: seealso
Fioctl is based on Foundries.io\'s [ota-lite
API](https://api.foundries.io/ota/).
:::

`ref-fioctl`{.interpreted-text role="ref"} is used to manage:

-   `Tags (per device, per device group and per Factory) <ref-advanced-tagging>`{.interpreted-text
    role="ref"}
-   `Device Configuration <ref-fioconfig>`{.interpreted-text role="ref"}
-   `OTA Updates <ref-aktualizr-lite>`{.interpreted-text role="ref"}
-   `CI Secrets <ref-container-secrets>`{.interpreted-text role="ref"}
-   `Offline TUF Keys <ref-offline-keys>`{.interpreted-text role="ref"}
-   `Git Access <gs-git-config>`{.interpreted-text role="ref"}

## Installation {#gs-fioctl-installation}

### Manual Installation {#gs-fioctl-manual-install}

We use [Github Releases](https://github.com/foundriesio/fioctl/releases)
to distribute static golang binaries.

::: tip
::: title
Tip
:::

Repeating the following steps will overwrite an existing binary, useful
for updating or changing version.
:::

::: tabs
::: group-tab
Linux

::: attention
::: title
Attention
:::

Make sure you have `curl` installed.
:::

1.  Download a Linux binary to a directory on your `PATH`.

    For example, to download version on Linux, define the version:

    ::: parsed-literal
    FIOCTL_VERSION=\"\"
    :::

    Download the binary with curl:

    ::: prompt
    bash host:\~\$, auto

    host:\~\$ sudo curl -o /usr/local/bin/fioctl -LO
    <https://github.com/foundriesio/fioctl/releases/download/$FIOCTL_VERSION/fioctl-linux-amd64>
    :::

2.  Make the `ref-fioctl`{.interpreted-text role="ref"} binary
    executable:

    ::: prompt
    bash host:\~\$, auto

    host:\~\$ sudo chmod +x /usr/local/bin/fioctl
    :::
:::

::: group-tab
macOS

::: attention
::: title
Attention
:::

Make sure you have `curl` installed.
:::

1.  Download a Darwin binary from the [Github
    Releases](https://github.com/foundriesio/fioctl/releases) page to a
    directory on your `PATH`.

    For example, to download version on macOS, define the version:

    ::: parsed-literal
    FIOCTL_VERSION=\"\"
    :::

    Download the binary with curl:

    ::: prompt
    bash host:\~\$, auto

    host:\~\$ sudo curl -o /usr/local/bin/fioctl -L
    <https://github.com/foundriesio/fioctl/releases/download/$FIOCTL_VERSION/fioctl-darwin-amd64>
    :::

    ::: important
    ::: title
    Important
    :::

    For MacOS running on a Apple M1 processor, replace
    `fioctl-darwin-amd64` with `fioctl-darwin-arm64`, and set
    `FIOCTL_VERSION` to v0.21 or newer.
    :::

2.  Make the `ref-fioctl`{.interpreted-text role="ref"} binary
    executable:

    ::: prompt
    bash host:\~\$, auto

    host:\~\$ sudo chmod +x /usr/local/bin/fioctl
    :::
:::

::: group-tab
Windows

1.  Download a Windows binary from the [Github
    Releases](https://github.com/foundriesio/fioctl/releases) page.

2.  Put it in a folder of your choosing and rename it to `fioctl.exe`

3.  Press `Win + R` and type `SystemPropertiesAdvanced`

4.  Press `enter` or click `OK`.

5.  Click \"Environment Variables\...\" in the resultant menu..

6.  Click the `Path` **system** variable, then click `Edit...`

7.  Click `New` in the \"Edit environment variable\" menu.

8.  Enter the path to the folder in which you have placed
    `ref-fioctl`{.interpreted-text role="ref"}.

    An example path string if installing to a folder on the desktop
    would look like this.

    `C:\Users\Gavin\Desktop\fio\bin`

You should now be able to open `cmd.exe` or `powershell.exe` and type
`fioctl`.
:::
:::

## Authenticating Fioctl

With `ref-fioctl`{.interpreted-text role="ref"} installed, authenticate
it with our backend. For this, you will generate OAuth2 application
credentials for interacting with the FoundriesFactory API:

::: prompt
bash host:\~\$, auto

host:\~\$ fioctl login

:   Please visit:

    <https://app.foundries.io/settings/credentials/>

    and create a new \"Application Credential\" to provide inputs below.

    Client ID:
:::

`ref-fioctl`{.interpreted-text role="ref"} will now ask for your Client
ID and Secret. Follow the next steps to generate them.

### Adding Application Credentials

Go to [Application
Credentials](https://app.foundries.io/settings/credentials) and click on
`+ New Credentials`{.interpreted-text role="guilabel"}.

<figure>
<img src="/_static/install-fioctl/application_credentials.png"
class="align-center" width="900"
alt="/_static/install-fioctl/application_credentials.png" />
<figcaption>Application Credentials</figcaption>
</figure>

Complete with a **Description** and the **Expiration date** and select
`next`{.interpreted-text role="guilabel"}.

For Fioctl®, check the `Use for tools like fioctl`{.interpreted-text
role="guilabel"} box and select your **Factory**. You can revoke this
access and set up a new credential later once you are familiar with the
`ref-api-access`{.interpreted-text role="ref"}.

<figure>
<img src="/_static/install-fioctl/fioctl_token.png" class="align-center"
width="500" alt="/_static/install-fioctl/fioctl_token.png" />
<figcaption>API Token</figcaption>
</figure>

::: tip
::: title
Tip
:::

We recommend creating a new API token for each computer you plan to use
our tools with. For example, if you intend to develop on both a laptop
and a desktop, create a new token for each, as you would with SSH keys.
This way you can revoke tokens for individual systems, should they be
compromised.
:::

Use the Client ID and Secret to finish the Fioctl login.

<figure>
<img src="/_static/install-fioctl/token.png" class="align-center"
width="500" alt="/_static/install-fioctl/token.png" />
<figcaption>Client ID and Secret</figcaption>
</figure>

::: prompt
bash host:\~\$, auto

host:\~\$ fioctl login

:   Please visit:

    <https://app.foundries.io/settings/credentials/>

    and create a new \"Application Credential\" to provide inputs below.

    Client ID: Client secret: You are now logged in to Foundries.io
    services.
:::

::: seealso
`ref-fioctl`{.interpreted-text role="ref"} documentation.
:::

## Configuring Git {#gs-git-config}

After `Fioctl <ref-fioctl>`{.interpreted-text role="ref"} is properly
setup, it can be leveraged as a Git credential helper to allow pushing
to your repositories with
`FoundriesFactory® <ref-factory-definition>`{.interpreted-text
role="ref"}. With this, Git knows when you connect to
`source.foundries.io` and uses Fioctl for authentication when utilizing
`git` commands.

### Setting Up Git

Run the following command to add the relevant entries to the Git
configuration:

::: prompt
bash host:\~\$, auto

host:\~\$ sudo fioctl configure-git
:::

::: important
::: title
Important
:::

This must run as `sudo` instead of directly as the `root` user. This is
because it needs to have privileges to create a symlink in the same
directory as where `git` is located.
:::

::: warning
::: title
Warning
:::

\* If for some reason the command fails with an error, the following
manual steps can be taken to get the exact same result:

git config \--global credential.<https://source.foundries.io.username>
fio-oauth2 git config \--global
credential.<https://source.foundries.io.helper> fio ln -s
/usr/bin/fioctl /usr/bin/git-credential-fio

-   Existing users reconfiguring Git access may need to remove the
    following lines from `.gitconfig` to use `fioctl configure-git`
    utility:

\[http \"<https://source.foundries.io>\"\] extraheader = Authorization:
basic \<TOKEN\>

-   If editing scopes on existing tokens, the user should refresh the
    local `fioctl` credentials with:

fioctl login \--refresh-access-token
:::

Verify this has succeeded by cloning a repository from your Factory,
such as your `containers.git` repo. Replace `<factory>` with your
Factory\'s name:

::: prompt
bash host:\~\$, auto

host:\~\$ git clone
<https://source.foundries.io/factories/>\<factory\>/containers.git
:::

::: tip
::: title
Tip
:::

You can also use `git config --global --list` to show the current state
of the global Git configuration, where `source.foundries.io` should be
referenced along with a username and a helper.
:::

::: seealso
\* `Fioctl Reference Manual <ref-fioctl>`{.interpreted-text role="ref"}
\* `API Access for factory <ref-api-access>`{.interpreted-text
role="ref"}
:::
