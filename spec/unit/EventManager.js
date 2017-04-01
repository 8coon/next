'use strict';


describe('EventManager', () => {


    it('should exist', () => {
        expect(JSWorks.EventManager).to.be.ok;
    });


    it('should patch emitter.emitEvent and fire event through EventManager.subscribe correctly', () => {
        const data = 'It works!';
        let called = false;

        const emitter = {};
        const receiver = {
            receiveEvent: function(event, eventEmitter) {
                expect(event.data).to.equal(data);
                expect(eventEmitter).to.equal(emitter);
                called = true;
            }
        };

        JSWorks.EventManager.subscribe(receiver, emitter);

        expect(typeof emitter.emitEvent === 'function');
        emitter.emitEvent({ data: data, type: JSWorks.EventType.NOTIFY });
        expect(called).to.equal(true);
    });


    it('should fire events to both subscribers', () => {
        let received = 0;

        const emitter = {};
        const receiver = {
            receiveEvent: function(event, eventEmitter) {
                received++;
            }
        };


        JSWorks.EventManager.subscribe(receiver, emitter);
        JSWorks.EventManager.subscribe(receiver, emitter);
        emitter.emitEvent({ type: JSWorks.EventType.NOTIFY });

        expect(received).to.equal(2);
    });


    it('should filter events', () => {
        const emitter = {};
        const receiver = {
            receiveEvent: function(event, eventEmitter) {
                expect(event.type).not.to.equal(JSWorks.EventType.NOTIFY);
                expect(event.type).to.equal(JSWorks.EventType.ENTER);
            }
        };

        JSWorks.EventManager.subscribe(receiver, emitter, JSWorks.EventType.ENTER);
        emitter.emitEvent({ type: JSWorks.EventType.NOTIFY });
        emitter.emitEvent({ type: JSWorks.EventType.ENTER });
    });


    it('should call custom handler and method', () => {
        let called1 = false;
        let called2 = false;

        const emitter = {};
        const receiver = {
            customHandler: function(event, eventEmitter) {
                called1 = true;
            }
        };

        JSWorks.EventManager.subscribe(receiver, emitter, undefined, 'customHandler');
        JSWorks.EventManager.subscribe(receiver, emitter, undefined, (event, emitter) => {
            expect(emitter).to.equal(emitter);
            called2 = true;
        });

        emitter.emitEvent({ type: JSWorks.EventType.NOTIFY });

        expect(called1).to.equal(true);
        expect(called2).to.equal(true);
    })


});
