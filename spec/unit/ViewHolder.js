'use strict';


describe('ViewHolder', () => {


    it('should exist and be initialized', () => {
        expect(JSWorks.Internal.ViewHolder).to.be.ok;
        expect(JSWorks.applicationContext.viewHolder).to.be.ok;
    });


    it('should load sample view', (done) => {
        const appContext = JSWorks.applicationContext;

        if (appContext.viewHolder.getView('SampleView')) {
            done();
            return;
        }

        JSWorks.EventManager.subscribe({}, appContext.viewHolder, JSWorks.EventType.LOAD, (event) => {
            expect(appContext.viewHolder.getView('SampleView')).to.be.ok;
            done();
        });
    });


    it('should render sample view', (done) => {
        const appContext = JSWorks.applicationContext;
        const view = appContext.viewHolder.getView('SampleView');
        const virtualRoot = view.DOMRoot;
        const renderedRoot = virtualRoot.rendered;

        JSWorks.EventManager.subscribe({}, view, JSWorks.EventType.UPDATE, (event) => {
            const renderedTitle = renderedRoot.querySelector('h2');
            expect(renderedTitle.innerHTML).to.equal('It changed!');

            done();
        });

        const virtualTitle = virtualRoot.querySelector('h2');
        virtualTitle.innerHTML = 'It changed!';
    });


});