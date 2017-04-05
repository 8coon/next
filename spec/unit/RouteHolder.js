'use strict';


describe('RouteHolder', () => {

    it('should exists', () => {
        expect(JSWorks.Internal.RouteHolder).is.exist;
    });

    it('should created at appContext', () => {
        const appContext = JSWorks.applicationContext;
        const routeHolder = appContext.router.routeHolder;

        expect(routeHolder).is.exist;
        console.dir(routeHolder);
    });

    it('should load routes', done => {
        const routeHolder = new JSWorks.Internal.RouteHolder();

        JSWorks.EventManager.subscribe({}, routeHolder, JSWorks.EventType.LOAD, (event) => {
            const apiRoute = routeHolder.root.children['api'];
            expect(apiRoute).is.ok;
            expect(apiRoute.match).to.equal('api');
            expect(apiRoute.path).to.equal('/api');

            const usersRoute = apiRoute.children['users'];
            expect(usersRoute.name).to.equal('UsersRoute');
            expect(usersRoute.pageName).to.equal('UsersPage');
            expect(usersRoute.path).to.equal('/api/users');

            const profileRoute = usersRoute.children['*'];
            expect(profileRoute.name).to.equal('ProfileRoute');
            expect(profileRoute.pageName).to.equal('ProfilePage');
            expect(profileRoute.pathVariableName).to.equal(':id');
            expect(profileRoute.path).to.equal('/api/users/:id');

            const editRoute = profileRoute.children['edit'];
            expect(editRoute.name).to.equal('EditProfileRoute');
            expect(editRoute.pageName).to.equal('EditProfilePage');
            expect(editRoute.path).to.equal('/api/users/:id/edit');

            const postsRoute = usersRoute.children['posts'];
            expect(postsRoute.match).to.equal('posts');
            expect(postsRoute.path).to.equal('/api/users/posts');
            expect(postsRoute.name).is.undefined;

            const allPostsRoute = postsRoute.children['all'];
            expect(allPostsRoute.name).to.equal('UserPostsAllRoute');
            expect(allPostsRoute.pageName).to.equal('UserPostsAllPage');
            expect(allPostsRoute.path).to.equal('/api/users/posts/all');

            const postRoute = postsRoute.children['*'];
            expect(postRoute.name).to.equal('UserPostRoute');
            expect(postRoute.pageName).to.equal('UserPostPage');
            expect(postRoute.pathVariableName).to.equal(':slug');
            expect(postRoute.path).to.equal('/api/users/posts/:slug');

            done();
        });

        routeHolder.load();
    });

    it('should gets routes by name', done => {
        const routeHolder = new JSWorks.Internal.RouteHolder();

        JSWorks.EventManager.subscribe({}, routeHolder, JSWorks.EventType.LOAD, (event) => {
            expect(routeHolder.getRoute('UsersRoute')).is.exist;
            expect(routeHolder.getRoute('UsersRoute').match).to.equal('users');
            done();
        });

        routeHolder.load();
    });



});