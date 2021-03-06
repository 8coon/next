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
            child.setAttribute('id', 'id' + i);
            element.appendChild(child);
        }

        Array.from(element.children).forEach((child) => {
            [0, 2, 4].forEach((index) => {
                if (child.id === `id${index}`) {
                    element.removeChild(child);
                }
            });
        });

        expect(element.children.length).to.equal(2);
        let count = 0;

        Array.from(element.children).forEach(child => {
            [0, 2, 4].forEach(id => {
                if (child.id === `id${id}`) {
                    count++;
                }
            });
        });

        expect(count).to.equal(0);

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


    it('should return children on selector', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.innerHTML = `
            <div align="center">
                <a href="https://google.com">Please visit Google to find some hot lol kek chebureks</a><br>
                <ul id="classification">
                    <li class="meme">lol</li>
                    <li class="meme">kek</li>
                    <li class="food">cheburek</li>
                </ul>
            </div>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        expect(element.querySelectorAll('div a').length).to.equal(1);
        expect(element.querySelectorAll('#classification > li').length).to.equal(3);
        expect(element.querySelectorAll('div[align="left"]').length).to.equal(0);
        // expect(element.querySelectorAll('#classification::first-child').length).to.equal(1);

        const ul = element.querySelector('ul');

        element.querySelectorAll('.meme').forEach((meme) => {
            expect(meme.className).to.equal('meme');
            ul.removeChild(meme);
        });

        expect(element.querySelectorAll('.meme').length).to.equal(0);
    });


    it('should clone itself', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.innerHTML = `
            <div align="center">
                <a href="https://google.com">Please visit Google to find some hot lol kek chebureks</a><br>
                <ul id="classification">
                    <li class="meme">lol</li>
                    <li class="meme">kek</li>
                    <li class="food">cheburek</li>
                </ul>
            </div>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        const copy = element.cloneNode();
        expect(copy.getOuterHTML()).to.equal(element.getOuterHTML());
    });


    it('should replace existing child with one or many nodes', () => {
        const holder = getTestServiceHolder('SimpleVirtualDOM');
        const virtualDOM = holder.getServiceByName('SimpleVirtualDOM');

        const element = virtualDOM.createElement('div');
        element.innerHTML = `
            <div align="center">
                <a href="https://google.com">Please visit Google to find some hot lol kek chebureks</a>
                <ul id="classification">
                    <li class="meme">lol</li>
                    <li id="replace-me" class="meme">kek</li>
                    <li class="food">cheburek</li>
                </ul>
            </div>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        const href = element.querySelector('a[href="https://google.com"]');
        const hrefReplace = virtualDOM.createElement('DIV');
        expect(href).to.be.ok;

        const li = element.querySelector('li#replace-me');
        const liReplace = [virtualDOM.createTextElement('chebu'), virtualDOM.createTextElement('rek')];
        expect(li).to.be.ok;

        href.parentNode.replaceChild(hrefReplace, href);
        li.parentNode.replaceChild(liReplace, li);

        const html = `
            <div align="center">
                <div></div>
                <ul id="classification">
                    <li class="meme">lol</li>
                    cheburek
                    <li class="food">cheburek</li>
                </ul>
            </div>
        `.split('\n').map((l) => { return l.trim(); }).join('');

        expect(element.innerHTML).to.equal(html);
    });


});
