'use strict';


describe('addSomethingToDOM', () => {

    it('should add element with the text specified and return true', () => {
        expect(addSomethingToDOM('It works!')).toBe(true);

        expect(() => {
            [...document.querySelectorAll('div')].forEach((element) => {
                if (element.innerHTML === 'It works!') {
                    return true;
                }
            });

            return false;
        }).toBe(true);
    });

});