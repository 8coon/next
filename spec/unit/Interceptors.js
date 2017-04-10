'use strict';



describe('Interceptors', () => {


    describe('Decorator', () => {

        it('should exists', () => {
           expect(JSWorks.Interceptor).is.exist;
        });

        it('should added classes to __JSWorks_Interceptor__', () => {
           expect(__JSWorks_interceptors__.length).is.greaterThan(0);
        });

    });

    describe('InterceptorHolder', () => {

        it('should exists', () => {
           expect(JSWorks.Internal.InterceptorHolder).to.exist;
        });

        it('should created', () => {
           const holder =  new JSWorks.Internal.InterceptorHolder();
           expect(holder).is.exist;
        });

        it('should register interceptor from prototype in __JSWorks_interceptors__', () => {
            const holder =  new JSWorks.Internal.InterceptorHolder();
            const proto = __JSWorks_interceptors__[0];
            const interceptor = new proto();
            interceptor.type = proto.__type__;
            interceptor.name = proto.name;
            expect(interceptor.type).to.equal(JSWorks.InterceptorType.RouteBeforeNavigateInterceptor);

            holder.registerInterceptor(interceptor);

            expect(holder.interceptors[JSWorks.InterceptorType.RouteBeforeNavigateInterceptor].length).to.equal(1);
            expect(holder.interceptors[JSWorks.InterceptorType.RouteBeforeNavigateInterceptor][0].name)
                .to.equal('TestBefore1Interceptor');
        });

        it('should load interceptors from __JSWorks_interceptors__', () => {
            const holder =  new JSWorks.Internal.InterceptorHolder();
            holder.load();

            expect(holder.getInterceptorsByType(JSWorks.InterceptorType.RouteBeforeNavigateInterceptor).length)
                .to.equal(2);

            expect(holder.getInterceptorsByType(JSWorks.InterceptorType.RouteAfterNavigateInterceptor).length)
                .to.equal(3);
        });

        it('should exists in applicationContext', () => {
           const holder = JSWorks.applicationContext.interceptorHolder;
           expect(holder).is.exist;
        });

        it('should be already loaded interceptors in applicationContext', () => {
            const holder = JSWorks.applicationContext.interceptorHolder;

            expect(holder.getInterceptorsByType(JSWorks.InterceptorType.RouteBeforeNavigateInterceptor).length)
                .to.equal(2);

            expect(holder.getInterceptorsByType(JSWorks.InterceptorType.RouteAfterNavigateInterceptor).length)
                .to.equal(3);
        });

        it('should correctly synchrony activate interceptors', (done) => {
            const holder = JSWorks.applicationContext.interceptorHolder;

            holder
                .activateInterceptors(JSWorks.InterceptorType.RouteBeforeNavigateInterceptor, {})
                .then(res => {
                    expect(res).to.equal(1);
                    done();
                })
            ;
        });

        it('should abort execution if some interceptor rejected', (done) => {
            const holder = JSWorks.applicationContext.interceptorHolder;

            holder
                .activateInterceptors(JSWorks.InterceptorType.RouteAfterNavigateInterceptor, {})
                .catch(error => {
                    expect(error).to.equal('error');
                    done();
                })
            ;
        })

    });

});