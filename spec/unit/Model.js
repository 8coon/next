'use strict';


describe('Model', () => {


    it('should load test model data', () => {
        expect(JSWorks.applicationContext.modelHolder).to.be.ok;
        expect(__JSWorks_models__).to.be.ok;
        expect(__JSWorks_models__.TestModel).to.be.ok;
        expect(__JSWorks_models__.TestModel.proto).to.be.ok;
        expect(__JSWorks_models__.TestModel.primaryKey).to.be.ok;
        expect(__JSWorks_models__.TestModel.fields).to.be.ok;
        expect(__JSWorks_models__.TestModel.createMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.readMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.updateMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.deleteMethod).to.be.ok;
        expect(__JSWorks_models__.TestModel.queryMethod).to.be.ok;
    });


    it('should return a promise on query and resolve it with the result', () => {
        return JSWorks.applicationContext.modelHolder.getModel('TestModel')
                .query({ sort: 'ASC' }).then((result) => {
            expect(result).to.be.ok;
            expect(result.forEach).to.be.ok;
            let lastRes;

            result.forEach((item) => {
                if (lastRes) {
                    expect(item.id).to.be.ok;
                    expect(item.name).to.be.ok;
                    expect(item.age).to.be.ok;
                    expect(lastRes.age).to.be.lessThan(item.age);

                    lastRes = item;
                }
            });
        });
    });


    it('should return a promise on query and resolve it with the result(2)', () => {
        return JSWorks.applicationContext.modelHolder.getModel('TestModel')
            .query({ sort: 'DESC' }).then((result) => {
                expect(result).to.be.ok;
                expect(result.forEach).to.be.ok;
                let lastRes;

                result.forEach((item) => {
                    if (lastRes) {
                        expect(item.id).to.be.ok;
                        expect(item.name).to.be.ok;
                        expect(item.age).to.be.ok;
                        expect(lastRes.age).to.be.greaterThan(item.age);

                        lastRes = item;
                    }
                });
            });
    });



    it('should be able to put response data in a collection with view-for tag updating', (done) => {
        const page = JSWorks.applicationContext.componentHolder.getPage('TestPage');

        JSWorks.applicationContext.modelHolder.getModel('TestModel').query({ sort: 'ASC' }).then((result) => {
            const srcValues = page.people.getValues();
            page.people.setValues(result);

            const html = page.view.DOMRoot.querySelector('view-for[in="$.people"]').getOuterHTML();

            expect(html).to.not.contain('Catty');

            expect(html).to.contain('M_a_e___B_o_r_o_w_s_k_i');
            expect(html).to.contain('<view-eval value="person.age">19</view-eval>');

            expect(html).to.contain('Goubar');
            expect(html).to.contain('<view-eval value="person.age">9000</view-eval>');

            expect(html).to.contain('Mr. Skeltal');
            expect(html).to.contain('<view-eval value="person.age">-1</view-eval>');

            expect(html).to.contain('Kek Kek');
            expect(html).to.contain('<view-eval value="person.age">0</view-eval>');

            page.people.setValues(srcValues);
            done();
        });

    });


});
