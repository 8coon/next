'use strict';


const fs = require('fs');
const mkdirp = require('mkdirp');
const jsdom = require('jsdom').jsdom;
const serializeDocument = require('jsdom').serializeDocument;
const rmdir = require('rmdir');


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


const prettyPrint = (html) => {
    return html;
};


const generateView = (path, name, viewExtends) => {
    let view = fs.readFileSync('./bin/generators/view.html.template', 'utf-8');

    view = view.replace('%{NAME}%', name);
    view = view.replace('%{EXTENDS}%', viewExtends);

    let style = fs.readFileSync('./bin/generators/view.scss.template', 'utf-8');

    mkdirp.sync(`${path}/views/${name}View/`);
    fs.writeFileSync(`${path}/views/${name}View/${camelToDash(name)}-view.html`, view);
    fs.writeFileSync(`${path}/views/${name}View/${camelToDash(name)}-view.scss`, style);

    fs.appendFileSync(`${path}/application.js`,
        `require('./views/${name}View/${camelToDash(name)}-view.scss');\n`);
    fs.appendFileSync(`${path}/application.js`,
        `require('./views/${name}View/${camelToDash(name)}-view.html');\n`);
};


const generateRoute = (path, name, controller, match, parent) => {
    const document = jsdom(fs.readFileSync(`${path}/application.html`), {});
    const routeTag = document.createElement('app-route');
    let routeParent = document.body.querySelector('app-routes');

    if (parent.length > 0) {
        routeParent = routeParent.querySelector(`#${parent}`);
    }

    routeTag.setAttribute('id', `${name}Route`);
    routeTag.setAttribute('controller', controller);
    routeTag.setAttribute('match', match);
    routeParent.appendChild(routeTag);
    fs.writeFileSync(`${path}/application.html`, prettyPrint(serializeDocument(document)));
};


const generateController = (path, name, withView, withRoute) => {
    let controller = fs.readFileSync('./bin/generators/controller.js.template', 'utf-8');

    controller = controller.replace('%{NAME}%', name);

    mkdirp.sync(`${path}/controllers/${name}Controller/`);
    fs.writeFileSync(`${path}/controllers/${name}Controller/${camelToDash(name)}-controller.js`, controller);

    const document = jsdom(fs.readFileSync(`${path}/application.html`), {});
    const controllerTag = document.createElement('app-controller');
    controllerTag.setAttribute('id', `${name}Controller`);

    if (withView === '*') {
        controllerTag.setAttribute('view', `${name}View`);
        generateView(path, name, '');
    } else if (!(withView === '')) {
        controllerTag.setAttribute('view', withView);
    }

    document.body.querySelector('app-info app-controllers').appendChild(controllerTag);
    fs.writeFileSync(`${path}/application.html`, prettyPrint(serializeDocument(document)));
    fs.appendFileSync(`${path}/application.js`,
            `require('./controllers/${name}Controller/${camelToDash(name)}-controller.js');\n`);

    if (withRoute !== 'false') {
        generateRoute(path, name, `${name}Controller`, camelToDash(name), '');
    }
};


const generateStaticServer = (path, title, jsWorksPath, forTesting) => {
    let server = fs.readFileSync('./bin/generators/server.js.template', 'utf-8');
    let testsPath = `/spec`;

    if (forTesting === 'true') {
        testsPath = '/../../spec';
    }

    server = server.replace('%{TITLE}%', title);
    server = server.replace('%{JSWORKS_PATH}%', jsWorksPath);
    server = server.replace('%{TESTS_PATH}%', testsPath);

    fs.writeFileSync(`${path}/server.js`, server);
};


const getTests = (path, forTesting) => {
    const files = [];
    path = `${path}/spec`;

    if (forTesting === 'true') {
        path = './spec';
    }

    const iterate = (root, rootExport) => {
        fs.readdirSync(root, 'utf-8').forEach((file => {
            const name = `${root}/${file}`;
            const exportName = `${rootExport}/${file}`;

            if (fs.statSync(name).isDirectory()) {
                if (name === 'app') {
                    return;
                }

                iterate(name, exportName);
                return;
            }

            if (/^.+\.js$/g.test(name)) {
                files.push(exportName);
            }
        }));
    };

    iterate(path, '');

    return files.map((file) => {
        return `<script src="/tests/${file}"></script>`;
    });
};


const generateApplication = (path, name, title, forTesting) => {
    let application = fs.readFileSync('./bin/generators/application.html.template', 'utf-8');
    let testingOutput = '';
    let testing = '';
    let tests = '';

    if (forTesting === 'true') {
        testing += '<link rel="stylesheet" media="all" href="/mocha/mocha.css">\n';
        testing += '<script src="/mocha/mocha.js"></script>\n';
        testing += '<script src="/chai/chai.js"></script>\n';
        testing += '<script>expect = chai.expect;</script>\n';

        testingOutput += fs.readFileSync('./bin/generators/tests.html.template', 'utf-8');
        testingOutput = testingOutput.replace('%{TESTS}%', getTests(path, forTesting).join('\n'));
    }

    application = application.replace('%{TITLE}%', title);
    application = application.replace('%{TESTING}%', testing);
    application = application.replace('%{TESTING-OUTPUT}%', testingOutput);


    fs.writeFileSync(`${path}/application.html`, application);
    fs.writeFileSync(`${path}/application.js`, '// Require your application JS files here\n\n');

    const nodePackage = {
        name: name,
        version: "1.0.0",
        description: title,
        main: './server.js',
        license: 'MIT',

        scripts: {
            start: 'node ./node_modules/webpack/bin/webpack.js && node ./server.js'
        },

        dependencies: {
            'typescript': 'latest',
            'webpack': 'latest',
            'awesome-typescript-loader': 'latest',
            'source-map-loader': 'latest',
            'jasmine': 'latest',
            'testem': 'latest',
            'sass-loader': 'latest',
            'node-sass': 'latest',
            'style-loader': 'latest',
            'html-loader': 'latest',
            'extract-loader': 'latest',
            'file-loader': 'latest',
            'css-loader': 'latest',
            'extract-text-webpack-plugin': 'latest'
        }
    };

    fs.writeFileSync(`${path}/package.json`, JSON.stringify(nodePackage, null, 4));

    const tsConfig = {
        "compilerOptions": {
            "outDir": "./dist/",
            "sourceMap": true,
            "noImplicitAny": true,
            "module": "commonjs",
            "target": "es5"
        },
        "include": [
            "./**/*"
        ]
    };

    fs.writeFileSync(`${path}/tsconfig.json`, JSON.stringify(nodePackage, null, 4));

    const jsWorksManifest = {
        application: {
            title: title,
            version: '1.0.0',
            author: 'mrHuman'
        },

        configuration: {
            viewParser: 'HTMLParser',
            viewFile: '/main.html',
            virtualDOMProvider: 'SimpleVirtualDOM'
        }
    };

    fs.writeFileSync(`${path}/static/jsworks.manifest.json`, JSON.stringify(jsWorksManifest, null, 4));

    let webPack = fs.readFileSync('./bin/generators/webpack.config.js.template', 'utf-8');
    fs.writeFileSync(`${path}/webpack.config.js`, webPack);
};


const cleanApp = (path) => {
    rmdir(path);
};


const startApp = (name, title, path, forTesting, jsWorksPath) => {
    mkdirp.sync(path);
    mkdirp.sync(`${path}/controllers`);
    mkdirp.sync(`${path}/views`);
    mkdirp.sync(`${path}/components`);
    mkdirp.sync(`${path}/models`);
    mkdirp.sync(`${path}/helpers`);
    mkdirp.sync(`${path}/spec`);
    mkdirp.sync(`${path}/dist`);
    mkdirp.sync(`${path}/static`);

    generateApplication(path, name, title, forTesting);
    generateStaticServer(path, title, jsWorksPath, forTesting);
};


const sampleApp = (path, forTesting, jsWorksPath) => {
    startApp('sample', 'Sample Application', path, forTesting, jsWorksPath);

    generateController(path, 'Sample', '*', '*');
};




switch (process.argv[2]) {

    /***
     * $ jsw startapp --name <test> --title <Test Application> --path <./> --forTesting <false>
     */
    case 'startapp': {
        const name = parseArg('--name', 'test');
        const title = parseArg('--title', 'Test Application');
        const path = parseArg('--path', './');
        const forTesting = parseArg('--forTesting', 'false');

        startApp(name, title, path, forTesting);
    } break;


    /***
     * $ jsw g model
     * $ jsw g view --name <Unnamed> --extends <>
     * $ jsw g controller --name <Unnamed> --withView <*> --withRoute <*>
     *     --withView * will generate new view corresponding to this controller
     *     --withView ViewName will bind view 'ViewName' to the newly-generated controller
     *     --withRoute * will generate new route for this controller
     *     --withRoute false will not
     */
    case 'g': {
        const path = parseArg('--path', './');

        switch (process.argv[3]) {

            case 'model': {
                // ToDo: model generator
            } break;

            case 'view': {
                const name = parseArg('--name', 'Unnamed');
                const viewExtends = parseArg('--extends', '');

                generateView(path, name, viewExtends);
            } break;

            case 'controller': {
                const name = parseArg('--name', 'Unnamed');
                const withView = parseArg('--withView', '*');
                const withRoute = parseArg('--withRoute', '*');

                generateController(path, name);
            } break;

            case 'helper': {
                // ToDo: helper generator
            } break;

            case 'component': {
                // ToDo: component generator
            } break;

            case 'spec': {
                // ToDo: spec generator
            } break;
        }

    } break;


    case 'testapp': {
        const path = parseArg('--path', './');
        const forTesting = parseArg('--forTesting', 'false');
        const jsWorksPath = parseArg('--JSWorksPath', '/node_modules/jsworks/dist');

        switch (process.argv[3]) {

            case 'sample': {
                sampleApp(path, forTesting, jsWorksPath);
            } break;

        }

    } break;


    case 'clean': {
        const path = parseArg('--path', './app');

        cleanApp(path);
    } break;


}