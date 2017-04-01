'use strict';


describe('SimpleVirtualDOMElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.SimpleVirtualDOMElement).to.be.ok;
    });

    it('should set attribute', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        expect(element.tagName).to.equal('DIV');

        element.setAttribute('id', 'id1');
        expect(element.getAttribute('id')).to.equal('id1');
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


    it('should remove child', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        for (let i = 0; i < 5; i++) {
            const child = virtualDOM.createElement('div');
            child.setAttribute('id', '' + i);
            element.appendChild(child);
        }

        [0,2,4].forEach(id => {
            element.removeChild(element.children[id]);
        });

        expect(element.children.length).to.equal(2);

        // element.children
        element.children.forEach(child => {
            expect([0,2,4].includes(child.getAttribute('id'))).to.equal(false);
        })
    })

});
