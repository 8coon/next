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


});