#!/usr/bin/env bash

node ./node_modules/tslint/bin/tslint './src/**/*.ts?(x)' --type-check --project ./tsconfig.json &&

node ./node_modules/typescript/bin/tsc &&
echo "function a(r){r.keys().forEach(r);};a(require.context('./',true,/\.js$/));" > ./release/entry.js &&
node ./node_modules/webpack/bin/webpack.js
