'use strict';


describe('ViewIfElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ViewIfElement).to.be.ok;
    });


    it('should render default condition value', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const html = page.view.DOMRoot.getOuterHTML();

        expect(html).to.not.contain('Color is not green');
        expect(html).to.contain('Color is green');
    });


    it('should re-render on condition value change', (done) => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        let fired = false;

        console.log(page.view.DOMRoot.getOuterHTML());

        JSWorks.EventManager.subscribe({}, page, JSWorks.EventType.PostUpdate, (event) => {
            if (fired) {
                return;
            }

            const html = page.view.DOMRoot.getOuterHTML();
            fired = true;

            expect(html).to.not.contain('Color is green');
            expect(html).to.contain('Color is not green');

            page.color1 = 'green';
            done();
        });

        page.color1 = 'red';
    });


});
