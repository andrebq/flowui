#!/usr/bin/env bash
set -eou pipefail

function serve-parcel {
    pushd app
    yarn run parcel index.html
    popd
}

function install-yarn {
    curl -o- -L https://yarnpkg.com/install.sh | bash
}

function check-yarn {
    export PATH="${PATH}:${HOME}/.yarn/bin:${HOME}/.config/yarn/global/node_modules/.bin"
    which yarn || install-yarn
}

function install-deps {
    pushd app
    yarn install
    popd
}

check-yarn
install-deps
serve-parcel
