'use strict';


describe('ComponentElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ComponentElement).to.be.ok;
    });


    it('should create and initialize test inset component', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const element = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset1');

        expect(element).to.be.ok;
        expect(element.component).to.be.ok;
        expect(element.component.element).to.be.ok.and.equal(element);
        expect(element.component.person_name).to.equal('Margaret');
        expect(element.getAttribute('person_name')).to.equal('Margaret');
    });


    it('should synchronize attributes between element and it\'s component', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const element = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset1');

        element.setAttribute('person_name', 'Beatrice');
        expect(element.getAttribute('person_name')).to.equal('Beatrice');
        expect(element.component.person_name).to.equal('Beatrice');

        element.component.person_name = 'Margaret';
        expect(element.getAttribute('person_name')).to.equal('Margaret');
        expect(element.component.person_name).to.equal('Margaret');
    });


    it('should render itself when a parent renders', (done) => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const element = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset1');

        window.setTimeout(() => {
            const html = element.rendered.innerHTML;

            expect(html).to.contain('value="number">3');
            expect(html).to.contain('value="number">5');
            expect(html).to.contain('value="number">7');
            expect(html).to.contain('value="number">52');
            expect(html).to.contain('Number is bigger than 10!');

            done();
        }, 1);
    });


    it('should render multiple components independently', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');

        const element1 = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset1');
        const element2 = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset2');
        const element3 = page.view.DOMRoot.querySelector('view-component[name="TestInsetComponent"]#inset3');

        expect(element1.rendered.innerHTML).to.contain(' Margaret');
        expect(element2.rendered.innerHTML).to.contain(' Gregg');
        expect(element3.rendered.innerHTML).to.contain(' Beatrice');
    });


});