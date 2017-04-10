'use strict';


describe('Router(History API)', () => {

    const baseUrl = `${location.href.split(':')[0]}://${location.host}`;


    it('should exist', () => {
        expect(JSWorks.Internal.Router).to.be.ok;
        expect(JSWorks.Internal.HistoryAPIRouter).to.be.ok;
    });


    it('should be created', () => {
        const appContext = JSWorks.applicationContext;
        const router = appContext.router;

        expect(router).to.be.ok;
    });


    describe('navigation', () => {


        afterEach((done) => {
            window.history.back();
            setTimeout(done, 35);
        });


        it('should navigate', () => {
            const appContext = JSWorks.applicationContext;
            const router = appContext.router;

            const usersRoute = appContext.routeHolder.getRoute('UsersRoute');

            router.navigate(usersRoute, {});

            const state = window.history.state;
            expect(state.name).to.equal(usersRoute.name);
        });



        it('should navigate routes with path variables', () => {
            const appContext = JSWorks.applicationContext;
            const router = appContext.router;

            const profileRoute = appContext.routeHolder.getRoute('ProfileRoute');
            const pv = {':id': 123};
            router.navigate(profileRoute, pv);

            const state = window.history.state;

            expect(state).to.exist;
            expect(state.name).to.exist;
            expect(state.name).to.equal(profileRoute.name);

            const stateRoute = appContext.routeHolder.getRoute(state.name);
            expect(baseUrl + stateRoute.getPath(pv)).to.equal(window.location.href);
        });


    });


});
