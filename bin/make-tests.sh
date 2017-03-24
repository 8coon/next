#!/usr/bin/env bash


sh ./bin/build.sh &&


node ./bin/jsworker.js clean --path ./spec/app/ &&
node ./bin/jsworker.js testapp sample --path ./spec/app/ --JSWorksPath /../../dist/ --forTesting true &&
ln -s ./../../node_modules/ ./spec/app/node_modules &&
cd ./spec/app && npm start && exit 0

#node ./node_modules/testem/testem.js ci
