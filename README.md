### DevTools Core

* devtools-client-adapters
* devtools-launchpad
* devtools-network-request
* devtools-config
* devtools-modules
* devtools-sham-modules

### Local Development

+ [Installing Locally](./#installing-locally)


#### Installing Locally

It's very common to work on a package and test it on a tool like the Debugger.
There are a couple strategies for this: link, local install, and package install.

##### Linking

Linking is the most common approach.
Here, yarn creates a symlink from the debugger's `node_modules/devtools-client-adapters` directory to the
devtools-core `devtools-client-adapters` package directory.

* Once the debugger is linked then any change in the code will be reflected in the debugger.
* Making changes does not require re-starting the dev-server.
* ignores any pre-publish steps that might be important.
* could create a bundling issue because `devtools-client-adapters` has its own set of node_modules, which are not shared with the debugger or other tools.


Steps:

```bash
cd devtools-core/packages/devtools-client-adapters
yarn link
cd ../../../debugger.html
yarn link devtools-client-adapters
```

##### Local install

Local install lets you install a package locally.
It's similar to publishing a new version and installing it remotely.
There are two options:

######  1. adding a local package
```bash
cd debugger.html
yarn add file:../devtools-core/packages/devtools-client-adapters
```

###### 2. adding a local tarball
```bash
cd devtools-core/packages/devtools-client-adapters
yarn pack
cd ../../../debugger.html
yarn add ../devtools-core/packages/devtools-client-adapters/devtools-client-adapters-v0.0.5.tgz
```

The two options are very similar, but have slightly different semantics.
When you install the tarball, you're recreating the remote publish and install process so changes to bin scripts or other dist files will be better supported.
