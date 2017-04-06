'use strict';

describe('Route', () => {

    it('should exist', () => {
        expect(JSWorks.Internal.Route).to.be.ok;
    });


    it('should create', () => {

        const route = new JSWorks.Internal.Route('main', 'http://localhost:3000/main',
            undefined, 'MainRoute', 'MainPage');

        expect(route).to.be.ok;
        expect(route.pageName).to.equal('MainPage');
        expect(route.path).to.equal('http://localhost:3000/main');
        expect(route.match).to.equal('main');
        expect(route.pathVariableName).to.be.undefined;
    });


    it('should get path', () => {
        const route = new JSWorks.Internal.Route('profile',
            'http://localhost:3000/users/:id/:login/profile',
            undefined, 'ProfileRoute', 'ProfilePage');

        const pathVariables = {':id': '123', ':login':'vileven'};
        const realPath = 'http://localhost:3000/users/123/vileven/profile';

        expect(route.getPath(pathVariables)).to.equal(realPath);
    });

});