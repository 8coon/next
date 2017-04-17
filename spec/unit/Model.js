'use strict';


describe('Model', () => {


    it('should load test model data', () => {
        expect(__JSWorks_models__).to.be.ok;
        expect(__JSWorks_models__.TestModel).to.be.ok;
        expect(__JSWorks_models__.TestModel.proto).to.be.ok;
        expect(__JSWorks_models__.TestModel.primaryKey).to.be.ok;
        expect(__JSWorks_models__.TestModel.fields).to.be.ok;
        expect(__JSWorks_models__.TestModel.createMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.readMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.updateMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.deleteMethod).to.be.ok;
    });


});
