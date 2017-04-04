'use strict';


describe('ComponentHolder', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.ComponentHolder).to.be.ok;
    });


    it('should load sample page', (done) => {
        const appContext = JSWorks.applicationContext;

        if (appContext.loaded) {
            expect(appContext.componentHolder.getPage('SamplePage')).to.be.ok;
            done();
        }

        JSWorks.EventManager.subscribe({}, appContext, JSWorks.EventType.LOAD, (event) => {
            expect(appContext.componentHolder.getPage('SamplePage')).to.be.ok;
            done();
        });
    });


});
