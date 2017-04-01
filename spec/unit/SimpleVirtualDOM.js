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
        expect(div2.getOuterHTML()).to.equal('<DIV ></DIV>');
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


});
