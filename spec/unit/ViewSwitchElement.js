'use strict';


describe('ViewSwitchElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ViewSwitchElement).to.be.ok;
    });


    it('should render default condition value', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const html = page.view.DOMRoot.getOuterHTML();

        expect(html).to.not.contain('Color is red');
        expect(html).to.not.contain('Color is blue');
        expect(html).to.contain('Color is neither red nor blue');
    });


});
