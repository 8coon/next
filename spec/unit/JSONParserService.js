'use strict';


const getTestObject = () => {
    return {
        data: "kek",
        array: [
            {
                "key a": 13,
                "false": true
            }
        ]
    };
};


describe('JSONParserService', () => {


    it('should exist and be registrable', () => {
        expect(JSWorks.Internal.JSONParserService);

        const holder = new JSWorks.Internal.ServiceHolder();
        holder.registerService(new JSWorks.Internal.JSONParserService());
        holder.registerService(new JSWorks.Internal.NetworkService());
        holder.instantiateServices();

        expect(holder.getService('Parser').name === 'JSONParser');
        expect(holder.getServiceByName('JSONParser').name === 'JSONParser');
    });


    it('should have parseString, parseDOM, parseURL and parseURLAsync methods', () => {
        const parser = new JSWorks.Internal.JSONParserService();

        expect(parser.parseString).to.be.ok;
        expect(parser.parseDOM).to.be.ok;
        expect(parser.parseURL).to.be.ok;
        expect(parser.parseURLAsync).to.be.ok;
    });


    it('should parse JSON from string', () => {
        const holder = new JSWorks.Internal.ServiceHolder();
        holder.registerService(new JSWorks.Internal.JSONParserService());
        holder.registerService(new JSWorks.Internal.NetworkService());
        holder.instantiateServices();

        const parser = holder.getServiceByName('JSONParser');
        const required = getTestObject();

        const parsed = parser.parseString(JSON.stringify(required));
        expect(parsed).to.deep.equal(required);
    });


    it('should parse JSON from HTMLElement', () => {
        const holder = new JSWorks.Internal.ServiceHolder();
        holder.registerService(new JSWorks.Internal.JSONParserService());
        holder.registerService(new JSWorks.Internal.NetworkService());
        holder.instantiateServices();

        const parser = holder.getServiceByName('JSONParser');
        const required = getTestObject();

        const element = document.createElement('DIV');
        element.appendChild(document.createTextNode(JSON.stringify(required)));

        const parsed = parser.parseDOM(element);
        expect(parsed).to.deep.equal(required);
    });


    it('should parse JSON from URL synchronously and asynchronously', () => {
        const holder = new JSWorks.Internal.ServiceHolder();
        holder.registerService(new JSWorks.Internal.JSONParserService());
        holder.registerService(new JSWorks.Internal.NetworkService());
        holder.instantiateServices();

        const parser = holder.getServiceByName('JSONParser');
        const parsed = parser.parseURL('/static/jsworks.manifest.json');

        expect(parsed).to.haveOwnProperty('application');

        return parser.parseURLAsync('/static/jsworks.manifest.json').then((asyncParsed) => {
            expect(asyncParsed).to.deep.equal(parsed);
        });
    });


});