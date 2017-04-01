'use strict';


describe('SimpleVirtualDOM', () => {


    it('should exist and be resolvable as a service', () => {
        expect(JSWorks.Internal.SimpleVirtualDOM).to.be.ok;

        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');
        expect(virtualDOM).to.be.ok;
    });


    it('should create empty DIV', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const div1 = virtualDOM.createElement('SPAN');
        const div2 = virtualDOM.createElement('DIV');

        expect(div1.tagName).to.equal('SPAN');
        expect(div2.tagName).to.equal('DIV');
        expect(div1.id).to.equal(undefined);
        expect(div2.getOuterHTML()).to.equal('<div></div>');
    });


    it('should copy contents of DIV with attributes and styles', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createElement('DIV');
        src.id = 'my-awesome-node';
        src.className = 'my-node my-red-node';
        src.style.display = 'inline-block';
        src.style.width = '100px';
        src.setAttribute('x-kek', 'lol');

        const dst = virtualDOM.createFromDOM(src);

        expect(dst.isText()).to.equal(false);
        expect(dst.id).to.equal(src.id);
        expect(dst.className).to.equal(src.className);
        expect(dst.style.display).to.equal(src.style.display);
        expect(dst.style.width).to.equal(src.style.width);
        expect(dst.getAttribute('x-kek')).to.equal(src.getAttribute('x-kek'));
        expect(dst.getAttribute('style')).to.equal(src.getAttribute('style'));

        let test = document.createElement('SPAN');
        test.innerHTML = dst.getOuterHTML();
        test = test.querySelector('div');

        Array.from(test.attributes).forEach((attribute) => {
            if (attribute.specified) {
                expect(attribute.value).to.equal(src.getAttribute(attribute.name));
            }
        });
    });


    it('should create text node', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const node = virtualDOM.createTextElement('lol kek cheburek');

        expect(node.isText());
        expect(node.text).to.equal('lol kek cheburek');
        expect(node.innerHTML).to.equal('lol kek cheburek');
    });


    it('should parse text node from DOM', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createTextNode('lol kek cheburek');
        const dst = virtualDOM.createFromDOM(src);

        expect(dst.isText());
        expect(dst.getOuterHTML()).to.equal(dst.innerHTML);
        expect(dst.text).to.equal(src.textContent);
    });


    it('should parse DOM hierarchy', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createElement('DIV');
        src.innerHTML = 'lol <b>kek<i style="border: dashed; color: aquamarine;"></i></b>' +
            ' <span class="kek" x-kek="true" x-lol cheburek="yes">cheburek</span>';

        const dst = virtualDOM.createFromDOM(src);
        expect(dst.getOuterHTML()).to.equal(src.outerHTML);
    });


    it('should render and reverse-render virtual DOM hierarchy', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createElement('DIV');
        src.innerHTML = `
            lol kek
            <ul class="links">
                <li>cheburek 1</li>
                <li>cheburek 2</li>
                <li>cheburek 2</li>
            </ul>
            <div align="center">
                Maximum Power!!!
                <x-custom id="powerline" value="0">
                    Change me!
                </x-custom>
            </div>
        `.split('\n').map((l) => { return l.trim(); }).join('');
        const srcHTML = src.outerHTML;

        const dst = virtualDOM.createFromDOM(src);
        expect(dst.getOuterHTML()).to.equal(srcHTML);

        dst.rendered = null;
        dst.render();
        expect(dst.rendered.outerHTML).to.equal(srcHTML);


        const ul = dst.children.item(1);
        ul.toggleClass('chebureks', true);
        ul.toggleClass('links', false);
        ul.toggleClass('keks', true);

        const secondLi = ul.children.item(1);
        secondLi.id = 'second';

        const node = virtualDOM.createElement('A');
        node.setAttribute('href', 'https://google.com/');
        node.innerHTML = 'Please visit Google to find some hot lol kek chebureks';

        secondLi.appendChild(node);

        const custom = dst.children.item(2);
        custom.removeAttribute('powerline');
        custom.setAttribute('value', 'MAXIMUM POWER');
        custom.removeChild(custom.children.item(0));


        dst.rendered = src;
        dst.render();

        expect(src).to.equal(dst.rendered);
        expect(dst.getOuterHTML()).to.equal(dst.rendered.outerHTML);
        expect(dst.rendered.outerHTML).to.not.equal(srcHTML);
    });

    it('should create empty element from DOM ', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createElement('div');
        src.setAttribute('id', 'id1');
        const dst = virtualDOM.createFromDOM(src);

        expect(dst.tagName).to.equal('DIV');
        expect(dst.isText()).to.be.equal(false);
        expect(dst.getAttribute('id')).to.equal('id1');
    });

    it('should create elements with children from DOM', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const src = document.createElement('div');
        for (let i = 0; i < 5; i++) {
            const temp_el = document.createElement('div');
            src.appendChild(temp_el);
        }

        expect(src.childNodes.length).to.equal(5);

        const dst = virtualDOM.createFromDOM(src);

        expect(dst.children.length).to.equal(5);
    });


});
