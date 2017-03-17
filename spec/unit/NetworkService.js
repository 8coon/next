'use strict';


describe('NetworkService', () => {


    it('should exist and be registrable', () => {
        expect(JSWorks.Internal.NetworkService);

        const holder = getTestServiceHolder(['Network']);

        expect(holder.getService('Network').name === 'Network');
        expect(holder.getServiceByName('Network').name === 'Network');
    });


    it('should have fetch and fetchAsync methods', () => {
        const network = new JSWorks.Internal.NetworkService();

        expect(network.fetch).to.be.ok;
        expect(network.fetchAsync).to.be.ok;
    });


    it('should fetch file content immediately or fire HTTPError', () => {
        const holder = getTestServiceHolder(['Network']);
        const network = holder.getServiceByName('Network');
        const manifest = network.fetch('/static/jsworks.manifest.json');

        expect(JSON.parse(manifest.data)).to.haveOwnProperty('application');

        expect((() => {
            try {
                network.fetch('/static/no-such-file.json')
            } catch (error) {
                return false
            }
        })()).to.be.equal(false);
    });


    it('should return a promise on fetchAsync and resolve it', () => {
        const holder = getTestServiceHolder(['Network']);
        const network = holder.getServiceByName('Network');

        return network.fetchAsync('/static/jsworks.manifest.json').then((result) => {
            expect(JSON.parse(result.data)).to.haveOwnProperty('application');
        });
    });


    it('should return a promise on fetchAsync and reject it if the error code is 400+', () => {
        const holder = getTestServiceHolder(['Network']);
        const network = holder.getServiceByName('Network');

        return network.fetchAsync('/static/no-such-file.json').then(null, (error) => {
            expect(error.status).to.equal(404);
        });
    });


});
