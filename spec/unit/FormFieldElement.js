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
        elem.rendered.querySelector('input').setAttribute('value', 'kek');
        elem.rendered.querySelector('input').dispatchEvent(new Event('change'));

        window.setTimeout(() => {
            expect(elem.lastValidationResult).to.be.ok;
            expect(elem.lastValidationResult.value).to.equal('kek');

            done();
        }, 2);
    });


    it('should validate input value', () => {
        const html = `
            <form-field for="undefined" validates="NumericValidator, AgeValidator">
                <form-messages>
                    <div class="form-field-message">
                        <view-eval value="error.text"></view-eval>
                    </div>
                </form-messages>

                <input form-bind-attribute="value">
            </form-field>
        `;

        const parsed = JSWorks.applicationContext.serviceHolder.getServiceByName('HTMLParser').parseString(html);
        const elem = JSWorks.applicationContext.serviceHolder.getServiceByName('SimpleVirtualDOM')
            .createElement(parsed[1]);

        elem.propagateView(JSWorks.applicationContext.viewHolder.getView('TestView'));

        elem.render();


        elem.rendered.querySelector('input').setAttribute('value', 'kek');
        elem.rendered.querySelector('input').dispatchEvent(new Event('change'));

        return new Promise((resolve) => {

            window.setTimeout(() => {
                expect(elem.lastValidationResult).to.be.ok;
                expect(elem.lastValidationResult.success).to.equal(false);
                expect(elem.lastValidationResult.messages[0].text).to.equal('Value should be a number!');
                expect(elem.getOuterHTML()).to.contain('Value should be a number!');
                expect(elem.getOuterHTML()).to.not.contain('Too young to fall in love!');
                expect(elem.getOuterHTML()).to.not.contain('You spin me right round, baby, right round');

                resolve();
            }, 2);

        }).then(() => {

            elem.rendered.querySelector('input').setAttribute('value', '13');
            elem.rendered.querySelector('input').dispatchEvent(new Event('change'));

            return new Promise((resolve) => {
                window.setTimeout(() => {
                    expect(elem.lastValidationResult).to.be.ok;
                    expect(elem.lastValidationResult.success).to.equal(false);
                    expect(elem.lastValidationResult.messages[0].text).to.equal('Too young to fall in love!');
                    expect(elem.getOuterHTML()).to.contain('Too young to fall in love!');
                    expect(elem.getOuterHTML()).to.not.contain('Value should be a number!');
                    expect(elem.getOuterHTML()).to.not.contain('You spin me right round, baby, right round');

                    resolve();
                }, 2);
            });

        }).then(() => {

            elem.rendered.querySelector('input').setAttribute('value', '19');
            elem.rendered.querySelector('input').dispatchEvent(new Event('change'));

            return new Promise((resolve) => {
                window.setTimeout(() => {
                    expect(elem.lastValidationResult).to.be.ok;
                    expect(elem.lastValidationResult.success).to.equal(true);
                    expect(elem.lastValidationResult.messages[0].text).to.equal('You spin me right round, baby,' +
                        ' right round');
                    expect(elem.getOuterHTML()).to.contain('You spin me right round, baby, right round');
                    expect(elem.getOuterHTML()).to.not.contain('Value should be a number!');
                    expect(elem.getOuterHTML()).to.not.contain('Too young to fall in love!');

                    resolve();
                }, 2);
            });

        });
    });


});
