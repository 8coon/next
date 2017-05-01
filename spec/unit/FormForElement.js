'use strict';


describe('FormForElement', () => {


    it('should exist', () => {
        expect(JSWorks.Internal.FormForElement).to.be.ok;
    });


    it('should load sample form', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const form = page.view.DOMRoot.querySelector('form-for');

        expect(form).to.be.ok;
        expect(form.model).to.be.ok;
        expect(form.fields.length).to.equal(2);
        expect(form.fields[0]).to.be.ok;
        expect(form.fields[0].getAttribute('for')).to.equal('name');
        expect(form.fields[1]).to.be.ok;
        expect(form.fields[1].getAttribute('for')).to.equal('age');

        expect(form.getSubmitButton()).to.be.ok;
    });


    it('should allow submission only if all fields are valid', () => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');
        const form = page.view.DOMRoot.querySelector('form-for');

        expect(form.canSubmit()).to.be.false;
        expect(form.getSubmitButton().hasAttribute('disabled'));

        return new Promise((resolve) => {
            window.setTimeout(() => {
                form.fields[0].value = 'kek';

                resolve();
            }, 2);
        }).then(() => {
            form.fields[1].value = 'kek';

            return new Promise((resolve) => {
                window.setTimeout(() => {
                    expect(form.canSubmit()).to.be.false;
                    expect(form.getSubmitButton().hasAttribute('disabled'));
                    expect(form.getOuterHTML()).to.contain('Value should be a number!');

                    resolve();
                }, 2);
            });
        }).then(() => {
            form.fields[1].value = '13';

            return new Promise((resolve) => {
                window.setTimeout(() => {
                    expect(form.canSubmit()).to.be.false;
                    expect(form.getSubmitButton().hasAttribute('disabled'));
                    expect(form.getOuterHTML()).to.contain('Too young to fall in love!');

                    resolve();
                }, 2);
            });
        }).then(() => {
            form.fields[1].value = '19';

            return new Promise((resolve) => {
                window.setTimeout(() => {
                    expect(form.canSubmit()).to.be.true;
                    expect(form.getSubmitButton().hasAttribute('disabled')).to.be.false;
                    expect(form.getOuterHTML()).to.not.contain('Value should be a number!');
                    expect(form.getOuterHTML()).to.not.contain('Too young to fall in love!');

                    resolve();
                }, 2);
            });
        }).then(() => {
            return new Promise((resolve) => {
                form.onSuccess = () => {
                    expect(form.model.name).to.equal('kek');
                    expect(form.model.age).to.equal('19');
                    expect(form.model.important).to.be.false;
                    expect(form.model.id).to.be.ok;

                    resolve();
                };

                form.submit();
            })
        });
    });


});