'use strict';


/*describe('ConfigurationService', () => {


    it('should exist and be registrable', () => {
        expect(JSWorks.Internal.ConfigurationService);

        const holder = getTestServiceHolder(['JSONParser', 'Network', 'Configuration']);

        expect(holder.getService('Configuration').name === 'Configuration');
        expect(holder.getServiceByName('Configuration').name === 'Configuration');
    });


    it('should return application title and version', () => {
        const holder = getTestServiceHolder(['JSONParser', 'Network', 'Configuration']);
        const parser = holder.getServiceByName('JSONParser');
        const config = holder.getService('Configuration');
        const appData = parser.parseURL('/static/jsworks.manifest.json');

        expect(config.appTitle).to.equal(appData.application.title);
        expect(config.appVersion).to.equal(appData.application.version);
    });


    it('should have essential parameters', () => {
        const holder = getTestServiceHolder(['JSONParser', 'Network', 'Configuration']);
        const parser = holder.getServiceByName('JSONParser');
        const config = holder.getService('Configuration');
        const appData = parser.parseURL('/static/jsworks.manifest.json');

        Object.keys(appData.configuration).forEach((key) => {
            if (config[`${key}Name`]) {
                expect(appData.configuration[key] === config[`${key}Name`]);
            }
        });
    });


});*/
