#!/usr/bin/env bash

node ./node_modules/tslint/bin/tslint ./src/**/*.ts --type-check --project ./tsconfig.json
node ./node_modules/webpack/bin/webpack.js
node ./bin/jsworker.js testapp --path ./spec/app/testapp --JSWorksPath /../../dist/

node ./node_modules/testem/testem.js ci
