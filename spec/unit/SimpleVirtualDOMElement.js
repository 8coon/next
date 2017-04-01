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

        Array.from(element.children).forEach(child => {
            expect([0, 2, 4].includes(child.getAttribute('id'))).to.equal(false);
        });

        Array.from(element.children).forEach(child => {
            expect([1, 3].includes(child.getAttribute('id')));
        })
    });

    it('should render dom element', done => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.setAttribute('id', '1');

        element.render();
        expect(element.rendered.getAttribute('id')).to.equal('1');
        done();
    });

    it('should render dom element after adding children',() => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        for (let i = 0; i < 5; i++) {
            const child = virtualDOM.createElement('div');
            element.appendChild(child);
        }
        element.render();

        expect(element.rendered.childNodes.length).to.equal(5);
    });

    it('should render DOM element after deleting children', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        for (let i = 0; i < 5; i++) {
            const child = virtualDOM.createElement('div');
            element.appendChild(child);
        }
        element.render();
        expect(element.rendered.childNodes.length).to.equal(5);
        expect(element.children.length).to.equal(5);

        [0, 2, 4].forEach(index => {
            element.removeChild(element.children[index]);
        });

        element.render();
        expect(element.rendered.childNodes.length).to.equal(2);
    });

});
