'use strict';


const createControllerMuppet = name => {
    return class Muppet {
        constructor() {
            this._args = {};
        }

        get name() {
            return name;
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


describe('ControllerHolder', () => {


   it('should exist', () => {
       expect(JSWorks.Internal.ControllerHolder).to.be.ok;
   });


   it('should register controller and return it', () => {
       const controllerHolder = new JSWorks.Internal.ControllerHolder();
       expect(controllerHolder).is.ok;

       const controllerPrototype = createControllerMuppet('Muppet');

       controllerHolder.registerController(controllerPrototype);
       expect(controllerHolder.getController('Muppet').name).to.equal(controllerPrototype.name);
   });


   it('should load sample controller', () => {
        const appContext = JSWorks.applicationContext;
        expect(appContext.controllerHolder.getController('SampleController')).to.be.ok;
   });


});

