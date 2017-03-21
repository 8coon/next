'use strict';


const createMuppet = (name, type, requires) => {
    return class {
        constructor() {
            this._args = {};
        }

        get name() {
            return name;
        }

        get type() {
            return type;
        }

        get requires() {
            return requires || [];
        }

        get args() {
            return this._args;
        }

        getInstance(args) {
            this._args = args;
            return this;
        }
    };
};


describe('ServiceHolder', () => {



    it('should exist', () => {
        expect(JSWorks.Internal.ServiceHolder).to.be.ok;
    });



    it('should register a service and return it', () => {
        const holder = new JSWorks.Internal.ServiceHolder();

        const serviceProto = createMuppet('MyMuppet', 'Muppet');
        const service = new serviceProto();

        holder.registerService(service);
        holder.instantiateServices();

        expect(holder.getService('Muppet').name === service.name);
        expect(holder.getServiceByName('MyMuppet').name === service.name);
    });



    it('should return service registered first in case of two services have one type', () => {
        const holder = new JSWorks.Internal.ServiceHolder();

        const firstProto = createMuppet('FirstMuppet', 'Muppet');
        const secondProto = createMuppet('SecondMuppet', 'Muppet');
        const first = new firstProto();
        const second = new secondProto();

        holder.registerService(first);
        holder.registerService(second);
        holder.instantiateServices();

        expect(holder.getService('Muppet').name === first.name);
        expect(holder.getServiceByName('FirstMuppet').name === first.name);
        expect(holder.getServiceByName('SecondMuppet').name === second.name);
    });



    /*
        Из-за использования DI на декораторах тест стал лишним.
     */

    /*
    it('should resolve service references by name and by type correctly', () => {
        const holder = new JSWorks.Internal.ServiceHolder();

        const thirdProto = createMuppet('FirstMuppet', 'Muppet');
        const firstProto = createMuppet(undefined, 'Puppet');
        const secondProto = createMuppet('SecondPuppet', 'Puppet', [new thirdProto(), new firstProto()]);
        const rootProto = createMuppet('RootMuppet', 'Root', [new thirdProto(), new secondProto()]);

        const root = new rootProto();
        const first = new firstProto();
        const second = new secondProto();
        const third = new thirdProto();

        holder.registerService(root);
        holder.registerService(first);
        holder.registerService(second);
        holder.registerService(third);
        holder.instantiateServices();

        expect(holder.getService('Root').args['FirstMuppet'].name === third);
        expect(holder.getService('Root').args['SecondPuppet'] === second);
        expect(holder.getService('Root').args['SecondPuppet'].args['Puppet'] === first);
    });
    */

});
