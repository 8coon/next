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


const generateView = (path, folder, name, viewExtends, templateFile) => {
    templateFile = templateFile || 'view.html';
    let view = fs.readFileSync(`./bin/generators/${templateFile}.template`, 'utf-8');

    view = view.replace(/%\{NAME}%/g, name);

    if ((viewExtends || '').length > 0) {
        view = view.replace(/%\{EXTENDS}%/g, `extends="${viewExtends}"`);
    } else {
        view = view.replace(/%\{EXTENDS}%/g, '');
    }

    let style = fs.readFileSync('./bin/generators/view.scss.template', 'utf-8');

    mkdirp.sync(`${path}/${folder}/${name}View/`);
    fs.writeFileSync(`${path}/${folder}/${name}View/${camelToDash(name)}-view.html`, view);
    fs.writeFileSync(`${path}/${folder}/${name}View/${camelToDash(name)}-view.scss`, style);

    fs.appendFileSync(`${path}/application.js`,
        `require('./${folder}/${name}View/${camelToDash(name)}-view.scss');\n`);
    fs.appendFileSync(`${path}/application.js`,
        `require('./${folder}/${name}View/${camelToDash(name)}-view.html');\n`);
};


const generateRoute = (path, name, page, match, parent) => {
    const document = jsdom(fs.readFileSync(`${path}/application.html`), {});
    const routeTag = document.createElement('app-route');
    let routeParent = document.body.querySelector('app-routes');

    if (parent.length > 0) {
        routeParent = routeParent.querySelector(`app-route[match="${parent}"]`);
    }

    if (name) {
        routeTag.setAttribute('id', `${name}Route`);
        routeTag.setAttribute('page', `${page}Page`);
    }

    if (match === '') {
        routeTag.setAttribute('default', '');
    } else {
        routeTag.setAttribute('match', match);
    }

    routeParent.appendChild(routeTag);
    fs.writeFileSync(`${path}/application.html`, prettyPrint(serializeDocument(document)));
};


const generateController = (path, folder, name, withView, viewExtends, viewTemplate, templateFile) => {
    templateFile = templateFile || 'controller.ts';
    let controller = fs.readFileSync(`./bin/generators/${templateFile}.template`, 'utf-8');

    controller = controller.replace(/%\{NAME}%/g, name);

    mkdirp.sync(`${path}/${folder}/${name}Controller/`);
    fs.writeFileSync(`${path}/${folder}/${name}Controller/${camelToDash(name)}-controller.ts`, controller);

    if (withView === '*') {
        generateView(path, folder, name, viewExtends || '', viewTemplate);
    }

    // const outFolder = folder.slice(folder.indexOf('/'));
    fs.appendFileSync(`${path}/application.js`,
            `require('./dist/compiled/${folder}/${name}Controller/${camelToDash(name)}-controller.js');\n`);
};

const generateInterceptor = (path, folder, name, interceptorType, templateFile, reject) => {
    templateFile = templateFile || 'interceptor.ts';

    let interceptor = fs.readFileSync(`./bin/generators/${templateFile}.template`, 'utf-8');
    reject = reject || 'false';

    interceptor = interceptor.replace(/%\{NAME}%/g, name);
    interceptor = interceptor.replace(/%\{INTERCEPTOR_TYPE}%/g, interceptorType);

    if (reject === 'true') {
        interceptor = interceptor.replace(/%\{RESOLVE_REJECT}%/g, `reject('error')`);
    } else {
        interceptor = interceptor.replace(/%\{RESOLVE_REJECT}%/g, 'resolve(1)');
    }

    mkdirp.sync(`${path}/${folder}/${name}Interceptor/`);
    fs.writeFileSync(`${path}/${folder}/${name}Interceptor/${camelToDash(name)}-interceptor.ts`, interceptor);

    // const outFolder = folder.slice(folder.indexOf('/'));
    fs.appendFileSync(`${path}/application.js`,
        `require('./dist/compiled/${folder}/${name}Interceptor/${camelToDash(name)}-interceptor.js');\n`);
};


const generateComponent = (path, name, withRoute, className, viewExtends, viewTemplate,
                           controllerTemplate, templateFile) => {
    className = className || 'Page';
    let folder = 'components';

    if (className === 'Page') {
        folder = 'pages';
    }

    mkdirp.sync(`${path}/${folder}/${name}${className}/`);
    generateController(path, `${folder}/${name}${className}`, name, '*', viewExtends || '',
        viewTemplate, controllerTemplate);

    templateFile = templateFile || 'component.ts';
    let component = fs.readFileSync(`./bin/generators/${templateFile}.template`, 'utf-8');

    component = component.replace(/%\{CLASS}%/g, className);
    component = component.replace(/%\{NAME}%/g, name);

    fs.writeFileSync(`${path}/${folder}/${name}${className}/${camelToDash(name)}-${className.toLowerCase()}.ts`,
        component);

    if (withRoute !== 'false' && className === 'Page') {
        generateRoute(path, name, `${name}Page`, camelToDash(name), '');
    }

    fs.appendFileSync(`${path}/application.js`,
        `require('./dist/compiled/${folder}/${name}${className}/${camelToDash(name)}-${className.toLowerCase()}.js');\n`);
};


const generateModel = (path, name, modelFile) => {
    modelFile = modelFile || 'model.ts';
    let model = fs.readFileSync(`./bin/generators/${modelFile}.template`, 'utf-8');

    model = model.replace(/%\{NAME}%/g, name);

    mkdirp.sync(`${path}/models/${name}Model/`);
    fs.writeFileSync(`${path}/models/${name}Model/${camelToDash(name)}-model.ts`, model);
    fs.appendFileSync(`${path}/application.js`,
        `require('./dist/compiled/models/${name}Model/${camelToDash(name)}-model.js');\n`);
};


const generateStaticServer = (path, title, jsWorksPath, forTesting) => {
    let server = fs.readFileSync('./bin/generators/server.js.template', 'utf-8');
    let testsPath = `/spec`;

    if (forTesting === 'true') {
        testsPath = '/../../spec';
        server = fs.readFileSync('./bin/generators/test-server.js.template', 'utf-8');
    }

    server = server.replace(/%\{TITLE}%/g, title);
    server = server.replace(/%\{JSWORKS_PATH}%/g, jsWorksPath);
    server = server.replace(/%\{TESTS_PATH}%/g, testsPath);

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

    application = application.replace(/%\{TITLE}%/g, title);
    application = application.replace(/%\{TESTING}%/g, testing);
    application = application.replace(/%\{TESTING-OUTPUT}%/g, testingOutput);


    fs.writeFileSync(`${path}/application.html`, application);
    fs.writeFileSync(`${path}/application.js`, '// Require your application JS files here\n\n');

    const nodePackage = {
        name: name,
        version: "1.0.0",
        description: title,
        main: './server.js',
        license: 'MIT',

        scripts: {
            start: `
                node ./node_modules/typescript/bin/tsc && 
                node ./node_modules/webpack/bin/webpack.js &&
                node ./server.js
            `.replace('\n', '')
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
            'extract-text-webpack-plugin': 'latest',
            'body-parser': 'latest'
        }
    };

    fs.writeFileSync(`${path}/package.json`, JSON.stringify(nodePackage, null, 4));

    const tsConfig = {
        "compilerOptions": {
            "outDir": "./dist/compiled/",
            "rootDir": ".",
            "sourceMap": true,
            "alwaysStrict": true,
            "target": "es5",
            "experimentalDecorators": true,
            "emitDecoratorMetadata": true,

            "lib": [
                "es2016",
                "dom"
            ]
        },

        "include": [
            "./**/*"
        ],

        "exclude": [
            "node_modules",
            "spec",
            "dist"
        ]
    };

    fs.writeFileSync(`${path}/tsconfig.json`, JSON.stringify(tsConfig, null, 4));

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
    mkdirp.sync(`${path}/views`);
    mkdirp.sync(`${path}/components`);
    mkdirp.sync(`${path}/pages`);
    mkdirp.sync(`${path}/models`);
    mkdirp.sync(`${path}/spec`);
    mkdirp.sync(`${path}/dist`);
    mkdirp.sync(`${path}/static`);
    mkdirp.sync(`${path}/interceptors`);

    generateApplication(path, name, title, forTesting);
    generateStaticServer(path, title, jsWorksPath, forTesting);
};


const sampleApp = (path, forTesting, jsWorksPath) => {
    startApp('sample', 'Sample Application', path, forTesting, jsWorksPath);

    generateRoute(path, 'Default', 'Default', '', '');
    generateRoute(path, undefined, undefined, 'api', '');
    generateRoute(path, 'Users', 'Users', 'users', 'api');
    generateRoute(path, 'Profile', 'Profile', ':id', 'users');
    generateRoute(path, 'EditProfile', 'EditProfile', 'edit', ':id');
    generateRoute(path, undefined, undefined, 'posts', 'users');
    generateRoute(path, 'UserPostsAll', 'UserPostsAll', 'all', 'posts');
    generateRoute(path, 'UserPost', 'UserPost', ':slug', 'posts');
    // generateRoute(path, 'Posts')

    generateView(path, 'views', 'Base', '', 'base-view.html');
    generateComponent(path, 'Sample', '*', 'Page', 'BaseView');

    generateComponent(path, 'Test', '*', 'Page', 'BaseView', 'test-view.html',
        'test-controller.ts', 'test-page.ts');

    generateInterceptor(path, 'interceptors', 'TestBefore1', 'RouteBeforeNavigateInterceptor',
       'test-interceptor.ts');
    generateInterceptor(path, 'interceptors', 'TestBefore2', 'RouteBeforeNavigateInterceptor',
        'test-interceptor.ts');
    generateInterceptor(path, 'interceptors', 'TestAfter1', 'RouteAfterNavigateInterceptor',
        'test-interceptor.ts');
    generateInterceptor(path, 'interceptors', 'TestAfter2', 'RouteAfterNavigateInterceptor',
        'test-interceptor.ts', 'true');
    generateInterceptor(path, 'interceptors', 'TestAfter3', 'RouteAfterNavigateInterceptor',
        'test-interceptor.ts');

    generateModel(path, 'Test', 'test-model.ts');
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

            /* case 'view': {
                const name = parseArg('--name', 'Unnamed');
                const viewExtends = parseArg('--extends', '');

                generateView(path, name, viewExtends);
            } break;

            case 'controller': {
                const name = parseArg('--name', 'Unnamed');
                const withView = parseArg('--withView', '*');
                const withRoute = parseArg('--withRoute', '*');

                generateController(path, name);
            } break; */

            case 'component': {
                // ToDo: component generator
            } break;

            case 'helper': {
                // ToDo: helper generator
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