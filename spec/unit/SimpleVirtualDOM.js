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

        const div1 = virtualDOM.createElement();
        const div2 = virtualDOM.createElement('DIV');

        expect(div1.tagName).to.equal('DIV');
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

        expect(dst.id).to.equal(src.id);
        expect(dst.className).to.equal(src.className);
        expect(dst.style.display).to.equal(src.style.display);
        expect(dst.style.width).to.equal(src.style.width);
        expect(dst.getAttribute('x-kek')).to.equal(src.getAttribute('x-kek'));
        expect(dst.getAttribute('style')).to.equal(src.getAttribute('style'));
    });


});
