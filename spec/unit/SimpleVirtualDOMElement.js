'use strict';


describe('SimpleVirtualDOMElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.SimpleVirtualDOMElement).to.be.ok;
    });

    it('should append child', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');

        for (let i = 0; i < 5; i++) {
            const child = virtualDOM.createElement('div');
            element.appendChild(child);
        }

        expect(element.children.length).to.equal(5);
    });

});
