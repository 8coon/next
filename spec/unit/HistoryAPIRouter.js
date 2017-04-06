'use strict';

describe('Router(History API)', () => {

    const baseUrl = 'http://localhost:3000/';

    it('should exists', () => {
        expect(JSWorks.Internal.Router).is.exist;
        expect(JSWorks.Internal.HistoryAPIRouter).is.exist;
    });


    it('should created', () => {
        const appContext = JSWorks.applicationContext;
        const router = appContext.router;
        expect(router).is.exist;
    });


    describe('navigation', () => {

        afterEach((done) => {
            window.history.back();
            setTimeout(done, 30);
        });

        it('should navigate', () => {
            const appContext = JSWorks.applicationContext;
            const router = appContext.router;

            const usersRoute = router.routeHolder.getRoute('UsersRoute');

            router.navigate(usersRoute, {});
            console.log(window.history.length);
        });

        it('should navigate routes with path variables', () => {
            const appContext = JSWorks.applicationContext;
            const router = appContext.router;

            const profileRoute = router.routeHolder.getRoute('ProfileRoute');
            const pv = {':id': 123};
            router.navigate(profileRoute, pv);

            const state = window.history.state;
            expect(state).is.exist;
            expect(state.name).is.exist;
            expect(state.name).to.equal(profileRoute.name);
            const stateRoute = router.routeHolder.getRoute(state.name);
            expect(baseUrl.slice(0, -1) + stateRoute.getPath(pv)).to.equal(window.location.href);
        });
    });
});