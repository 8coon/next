'use strict';

const createMuppet = name => {
    return class {
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

       const controllerPrototype = createMuppet('Muppet');
       const controller = new controllerPrototype();

       controllerHolder.registerController(controller);
       expect(controllerHolder.getController('Muppet').name).to.equal(controller.name);
   })

});

