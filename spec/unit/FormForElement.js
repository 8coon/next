'use strict';


describe('FormForElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.FormForElement).to.be.ok;
    });


    it('should load sample form', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const form = page.view.DOMRoot.querySelector('form-for');

        expect(form).to.be.ok;
        expect(form.model).to.be.ok;
        expect(form.fields[0]).to.be.ok;
        expect(form.fields[0].getAttribute('for')).to.equal('$.name');
        expect(form.fields[1]).to.be.ok;
        expect(form.fields[1].getAttribute('for')).to.equal('$.age');
    });


});