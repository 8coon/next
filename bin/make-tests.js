'use strict';


const process = require('child_process');
// ToDo: Fix for Windows

const exec = (cmd) => {
    process.execSync(cmd, { stdio: 'inherit', stdio2: ['pipe', process.stdout, process.stderr] });
};


console.log('Building JSWorks...');
exec("node ./bin/build.js");

console.log('Cleaning app...');
exec("node ./bin/jsworker.js clean --path ./spec/app/");

console.log('Generating test app...');
exec("node ./bin/jsworker.js testapp sample --path ./spec/app/ --JSWorksPath /../../dist/ --forTesting true");

console.log('Symlinking node_modules...');
exec("ln -s ./../../node_modules/ ./spec/app/node_modules");

console.log('Starting app server...');
exec("cd ./spec/app && npm start");
