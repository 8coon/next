'use strict';


describe('AppViewElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.AppViewElement).to.be.ok;
    });


    it('should render SampleView inherited from BaseView', (done) => {
        const appContext = JSWorks.applicationContext;

        const test = () => {
            const page = appContext.componentHolder.getPage('SamplePage');

            expect(page.view.DOMRoot.getOuterHTML()).to.contain('This is BaseView.');
            expect(page.view.DOMRoot.getOuterHTML()).to.contain('This is SampleView.');
            done();
        };

        if (appContext.loaded) {
            test();
        }

        JSWorks.EventManager.subscribe({}, appContext, JSWorks.EventType.ApplicationLoaded, (event) => {
            test();
        });
    });


    it('should render view-include in TestView', (done) => {
        const appContext = JSWorks.applicationContext;

        const test = () => {
            const page = appContext.componentHolder.getPage('TestPage');

            expect(page.view.DOMRoot.getOuterHTML()).to.contain('This is a person');
            expect(page.view.DOMRoot.getOuterHTML()).to.contain('Catty');
            expect(page.view.DOMRoot.getOuterHTML()).to.contain('This person is important!');
            done();
        };

        if (appContext.loaded) {
            test();
        }

        JSWorks.EventManager.subscribe({}, appContext, JSWorks.EventType.ApplicationLoaded, (event) => {
            test();
        });
    });


});