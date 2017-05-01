'use strict';


describe('Validators', () => {


    it('should be loaded', () => {
        const appContext = JSWorks.applicationContext;

        const numberValidator = appContext.interceptorHolder.getInterceptor('NumericValidator');
        const ageValidator = appContext.interceptorHolder.getInterceptor('AgeValidator');

        expect(numberValidator.type).to.equal(JSWorks.InterceptorType.ValidatorInterceptor);
        expect(ageValidator.type).to.equal(JSWorks.InterceptorType.ValidatorInterceptor);
    });


    it('should resolve validator chain', () => {
        const appContext = JSWorks.applicationContext;
        const chain = appContext.interceptorHolder.getInterceptors(['NumericValidator', 'AgeValidator']);
        const found = {};

        chain.forEach((validator) => {
            found[validator.name] = true;
        });

        expect(found['NumericValidator']).to.equal(true);
        expect(found['AgeValidator']).to.equal(true);
    });


});
