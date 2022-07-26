# MintBox, by Cabala Labs

Develop a NFT minting site as rapidly as possible, on any EVM compatible chain.

**_❗❗MintBox is currently at alpha stage and is under active development, breaking changes may be introduced without prior notice, use this at your own risk❗❗_**

MintBox works on macOS, Windows, and Linux.
If something doesn’t work, please file an issue.
If you have questions or need help, please ask in GitHub Discussions.

## Quick Overview

To create a new project, simply type

```sh
npx mintbox init
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

It will create a directory called at the current working directory.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
. (project root)
├── contract
└── frontend
```

The frontend currently supports:

- React

The contract is currently built with hardhat and on top of ERC721A.

# Roadmap

- Add support for other frontend frameworks
