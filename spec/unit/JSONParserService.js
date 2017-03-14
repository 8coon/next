'use strict';


describe('JSONParserService', () => {


    it('should exist and be registrable', () => {
        expect(JSWorks.Internal.JSONParserService);

        const holder = new JSWorks.Internal.ServiceHolder();
        holder.registerService(new JSWorks.Internal.JSONParserService());
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
        holder.instantiateServices();

        const parser = holder.getServiceByName('JSONParser');
        const required = {
            data: "kek",
            array: [
                {
                    "key a": 13,
                    "false": true
                }
            ]
        };

        const parsed = parser.parseString(JSON.stringify(required));
        expect(parsed).to.deep.equal(required);
    });


});