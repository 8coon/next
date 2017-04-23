'use strict';


describe('ComponentElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ComponentElement).to.be.ok;
    });


    it('should create and initialize test inset component', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const element = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]');

        expect(element).to.be.ok;
        expect(element.component).to.be.ok;
        expect(element.component.element).to.be.ok.and.equal(element);
        expect(element.component.person_name).to.equal('Margaret');
        expect(element.getAttribute('person_name')).to.equal('Margaret');
    });


    it('should synchronize attributes between element and it\'s component', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const element = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]');

        element.setAttribute('person_name', 'Beatrice');
        expect(element.getAttribute('person_name')).to.equal('Beatrice');
        expect(element.component.person_name).to.equal('Beatrice');

        element.component.person_name = 'Margaret';
        expect(element.getAttribute('person_name')).to.equal('Margaret');
        expect(element.component.person_name).to.equal('Margaret');
    });





});