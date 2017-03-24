#!/usr/bin/env bash

node ./../tslint/bin/tslint './src/**/*.ts?(x)' --type-check --project ./tsconfig.json &&

node ./..//typescript/bin/tsc &&
echo "function a(r){r.keys().forEach(r);};a(require.context('./',true,/\.js$/));" > ./release/entry.js &&
node ./..//webpack/bin/webpack.js
