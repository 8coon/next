#!/usr/bin/env bash

node ./node_modules/tslint/bin/tslint './src/**/*.ts?(x)' --type-check --project ./tsconfig.json &&

node ./node_modules/typescript/bin/tsc &&
echo "JSWorks={};__JSWorks_services__=[];__JSWorks_controllers__=[];function a(r){r.keys().forEach(r);};a(require.context('./',true,/\.js$/));CSSauron=require('../node_modules/cssauron/index.js');" > ./release/entry.js &&
node ./node_modules/webpack/bin/webpack.js
