'use strict';


describe('ViewForElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ViewForElement).to.be.ok;
    });


    it('should render default collection value', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const html = page.view.DOMRoot.getOuterHTML();

        expect(html).to.contain('Mae Borowski').and.to.contain('20');
        expect(html).to.contain('Asriel Dreemurr').and.to.contain('9000');

        expect(html).to.contain('This is probably Mae.').and.to.contain('It\'s Maaaeee!!!!');
        expect(html).to.contain('Hello, Mae!');
    });


    it('should re-render according to collection changes', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        let html;


        // Test 1
        page.persons.removeItem(page.persons.last);

        html = page.view.DOMRoot.getOuterHTML();
        expect(html).not.to.contain('Mae Borowski').and.to.contain('20');
        expect(html).to.contain('Asriel Dreemurr').and.to.contain('9000');

        expect(html).to.contain('Person\'s age is above or equal 30');
        expect(html).to.contain('Hello, Asriel!');


        // Test 2
        for (let i = 0; i < 10; i++) {
            page.persons.push({ name: 'Trash Mammal', age: 20 });
        }

        html = page.view.DOMRoot.getOuterHTML();
        const elem = document.createElement('DIV');
        elem.innerHTML = page.view.DOMRoot.getOuterHTML();
        let mae = 0;
        let asriel = 0;

        [...elem.querySelectorAll('view-item')].forEach((item) => {
            if (item.innerHTML.includes('Trash Mammal')) {
                mae++;
            }

            if (item.innerHTML.includes('Asriel Dreemurr')) {
                asriel++;
            }
        });

        expect(mae).to.equal(10);
        expect(asriel).to.equal(1);

        expect(html).to.contain('This is probably Mae.');
        expect(html).to.contain('It\'s no Mae :\'C');
        expect(html).to.contain('Hello, Asriel!');


        // Test 3
        page.persons.clear();

        html = page.view.DOMRoot.getOuterHTML();
        expect(page.view.DOMRoot.querySelector('view-for').children.length).to.equal(0);


        // Test 4
        page.persons.push({ name: 'Asriel Dreemurr', age: 9000 });
        page.persons.push({ name: 'Mae Borowski', age: 20 });

        html = page.view.DOMRoot.getOuterHTML();
        expect(html).to.contain('Mae Borowski').and.to.contain('20');
        expect(html).to.contain('Asriel Dreemurr').and.to.contain('9000');

        expect(html).to.contain('This is probably Mae.').and.to.contain('It\'s Maaaeee!!!!');
        expect(html).to.contain('Hello, Mae!');
    });


    /* it('should re-render according to collection changes async', (done) => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        let html;

        const test4 = () => {
            page.persons.push({ name: 'Asriel Dreemurr', age: 9000 });
            page.persons.push({ name: 'Mae Borowski', age: 20 });

            window.setTimeout(() => {
                html = page.view.DOMRoot.getOuterHTML();
                expect(html).to.contain('Mae Borowski').and.to.contain('20');
                expect(html).to.contain('Asriel Dreemurr').and.to.contain('9000');

                done();
            }, 100);
        };

        const test3 = () => {
            page.persons.clear();

            window.setTimeout(() => {
                expect(page.view.DOMRoot.querySelector('view-for').children.length).to.equal(0);

                test4();
            }, 100);
        };

        const test2 = () => {
            for (let i = 0; i < 10; i++) {
                page.persons.push({ name: 'Trash Mammal', age: 20 });
            }

            window.setTimeout(() => {
                const elem = document.createElement('DIV');
                elem.innerHTML = page.view.DOMRoot.getOuterHTML();
                let mae = 0;
                let asriel = 0;

                [...elem.querySelectorAll('view-item')].forEach((item) => {
                    if (item.innerHTML.includes('Trash Mammal')) {
                        mae++;
                    }

                    if (item.innerHTML.includes('Asriel Dreemurr')) {
                        asriel++;
                    }
                });

                expect(mae).to.equal(10);
                expect(asriel).to.equal(1);

                test3();
            }, 100);
        };

        const test1 = () => {
            page.persons.removeItem(page.persons.last);

            window.setTimeout(() => {
                console.log('time is out');
                html = page.view.DOMRoot.getOuterHTML();
                expect(html).not.to.contain('Mae Borowski').and.to.contain('20');
                expect(html).to.contain('Asriel Dreemurr').and.to.contain('9000');

                test2();
            }, 100);
        };

        test1();
    }) */


});
