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


    it('should render dom element', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.setAttribute('id', '1');

        element.render();
        expect(element.rendered.getAttribute('id')).to.equal('1');
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
            child.setAttribute('id', 'id' + i);

            element.appendChild(child);
        }

        element.render();

        expect(element.rendered.childNodes.length).to.equal(5);
        expect(element.children.length).to.equal(5);

        Array.from(element.children).forEach((child) => {
            [0, 2, 4].forEach((index) => {
                if (child.id === `id${index}`) {
                    element.removeChild(child);
                }
            });
        });

        element.render();
        expect(element.rendered.childNodes.length).to.equal(2);

        Array.from(element.children).forEach(child => {
            expect(['id1', 'id3'].includes(child.getAttribute('id'))).to.equal(true);
        });
    });


    it('should change itself according to innerHTML property', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');

        const html = `
            <ul>
                <li class="alpha">lol</li>
                <li class="beta">kek</li>
                <li class="gamma">cheburek</li>
            </ul>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        element.innerHTML = html;

        expect(element.children.item(0).tagName).to.equal('UL');
        expect(element.children.item(0).children.item(2).tagName).to.equal('LI');
        expect(element.innerHTML).to.equal(html);
    });


    it('should be able to insert element before another element', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.innerHTML = `
            <li id="0">lol</li>
            <li id="2">cheburek</li>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        const kek = virtualDOM.createElement('li');
        kek.id = '1';
        kek.innerHTML = 'kek';

        const end = virtualDOM.createElement('li');
        end.id = '3';
        end.innerHTML = 'end';

        element.insertBefore(kek, element.children.item(1));
        element.insertBefore(end, null);
        element.render();

        expect(element.children.length).to.equal(4);

        const html = `
            <li id="0">lol</li>
            <li id="1">kek</li>
            <li id="2">cheburek</li>
            <li id="3">end</li>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        expect(element.innerHTML).to.equal(html);
    });


});
