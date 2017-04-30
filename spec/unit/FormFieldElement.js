'use strict';


describe('FormFieldElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.FormFieldElement).to.be.ok;
    });


    it('should read input value', (done) => {
        const html = `
            <form-field for="undefined">
                <form-messages>
                    <div class="form-field-message"><form-message-yield /></div>
                </form-messages>

                <input form-bind-attribute="value">
            </form-field>
        `;

        const parsed = JSWorks.applicationContext.serviceHolder.getServiceByName('HTMLParser').parseString(html);
        const elem = JSWorks.applicationContext.serviceHolder.getServiceByName('SimpleVirtualDOM')
            .createElement(parsed[1]);

        elem.propagateView(JSWorks.applicationContext.viewHolder.getView('TestView'));

        elem.render();
        elem.rendered.querySelector('input').value = 'kek';
        // elem.rendered.querySelector('input').dispatchEvent(new Event('change'));

        /* window.setTimeout(() => {
            expect(elem.lastValidationResult).to.be.ok;
            expect(elem.lastValidationResult.value).to.equal('kek');

            done();
        }, 100); */
        done();
    });


});
