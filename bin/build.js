'use strict';


const child_process = require('child_process');
const fs = require('fs');
const rmdir = require('rmdir');


const exec = (cmd) => {
    child_process.execSync(cmd, [], { stdio: 'inherit' });
};


console.log('Cleaning up...');
rmdir('./release');
rmdir('./dist');

console.log('Running TypeScript linter...');
try {
    exec("node ./node_modules/tslint/bin/tslint './src/**/*.ts?(x)' --type-check --project ./tsconfig.json -o ./tslint.log");
} catch (err) {
    if (!fs.existsSync('./tslint.log')) {
        throw err;
    }

    const log = fs.readFileSync('./tslint.log', 'utf-8');
    console.log(log);

    fs.unlinkSync('./tslint.log');
    process.exit(1);
}

console.log('Compiling TypeScript...');
exec("node ./node_modules/typescript/bin/tsc");

const includeFile = `
    JSWorks = {};
    __JSWorks_services__ = [];
    __JSWorks_controllers__ = [];
    __JSWorks_components__ = [];
    __JSWorks_interceptors__ = [];
    __JSWorks_custom_elements__ = [];
    __JSWorks_models__ = {};
    
    function a(r) {
        r.keys().forEach(r);
    };
    
    a(require.context('./',true,/\.js$/));
    CSSauron = require('../node_modules/cssauron/index.js');
    require('../src/Assets/default-tags.css');
`.split('\n').map((l) => { return l.trim(); }).join('');

console.log('Creating Webpack require file...');
fs.writeFileSync('./release/entry.js', includeFile);

console.log('Running Webpack...');
exec("node ./node_modules/webpack/bin/webpack.js");

