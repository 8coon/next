'use strict';


const fs = require('fs');
const mkdirp = require('mkdirp');
const jsdom = require('jsdom').jsdom;


const parseArg = (name, defValue) => {
    let val = undefined;

    process.argv.forEach((arg, index, args) => {
        if (arg === name) {
            val = args[index + 1];
        }
    });

    if (!val) {
        return defValue;
    }

    return val;
};


const camelToDash = (camelName) => {
    const dash = camelName.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).toLowerCase();

    if (dash.startsWith('-')) {
        return dash.slice(1);
    }

    return dash;
};


const addDefinition = (type, name) => {
    const document = jsdom(markup, {

    });
};


const generateController = (app, path, name) => {
    let controller = fs.readFileSync('./bin/generators/controller.js.template', 'utf-8');

    controller = controller.replace('%{NAME}%', name);

    mkdirp.sync(`${path}/${app}/controllers/${name}Controller/`);
    fs.writeFileSync(`${path}/${app}/controllers/${name}Controller/${camelToDash(name)}.js`, controller);
};


const generateView = (app, path, name, viewExtends) => {
    let view = fs.readFileSync('./bin/generators/view.html.template', 'utf-8');

    view = view.replace('%{NAME}%', name);
    view = view.replace('%{EXTENDS}%', viewExtends);

    mkdirp.sync(`${path}/${app}/views/${name}View/`);
    fs.writeFileSync(`${path}/${app}/views/${name}View/${camelToDash(name)}.html`, view);
};


const generateApplication = (app, path, name) => {
    let application = fs.readFileSync('./bin/generators/application.html.template', 'utf-8');

    application = application.replace('%{NAME}%', name);

    fs.writeFileSync(`${path}/${app}/application.html`, application);
};


const cleanApp = () => {
    const path = parseArg('--path', './');
};


const startApp = () => {
    const name = parseArg('--name', 'TestApplication');
    const path = parseArg('--path', './');

    mkdirp.sync(path);
    mkdirp.sync(`${path}/${name}/controllers`);
    mkdirp.sync(`${path}/${name}/views`);
    mkdirp.sync(`${path}/${name}/components`);
    mkdirp.sync(`${path}/${name}/models`);
    mkdirp.sync(`${path}/${name}/helpers`);

    generateApplication(path, name);
    generateView(path, 'Sample');
    generateController(path, 'Sample');
};




switch (process.argv[2]) {

    case 'startapp': {
        startApp();
    } break;


    case 'generate': {

    } break;


    case 'clear': {

    } break;

}