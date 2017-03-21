

import {ApplicationContext} from './ApplicationContext/ApplicationContext';

import {HTMLParserService} from './Parser/HTML/HTMLParserService';
import {ParserService} from './Parser/ParserService';

import {ServiceHolder} from './Service/ServiceHolder';



import {HTTPError} from './Service/Error/HTTPError';
import {MethodNotImplementedError} from './Service/Error/MethodNotImplementedError';
import {ServiceAlreadyRegisteredError} from './Service/Error/ServiceAlreadyRegisteredError';
import {ServiceUnresolvableError} from './Service/Error/ServiceUnresolvableError';
import {UnknownServiceError} from './Service/Error/UnknownServiceError';
import {UnknownServiceTypeError} from './Service/Error/UnknownServiceTypeError';

import {JSONParserService} from './Parser/JSON/JSONParserService';

import {NetworkService} from './Network/NetworkService';
import {EventManager} from './EventManager/EventManager';

import {EventType} from './EventManager/EventType';
import {HTTPMethod} from './Network/HTTPMethod';
import {HTTPResponse} from './Network/HTTPResponse';


declare const JSWorks: any;
declare const __JSWorks_services__: any;


JSWorks.__registerServices__ = () => {
    const holder = new JSWorks.Internal.ServiceHolder();

    __JSWorks_services__.forEach((serviceData) => {
        holder.registerService(serviceData);
    });

    /*Object.keys(JSWorks.Internal).forEach((name) => {
        if (name.indexOf('Service') > 0) {
            const service = new JSWorks.Internal[name]();

            if (typeof service.getInstance === 'function') {
                holder.registerService(service);
            }
        }
    });*/

    return holder;
};


JSWorks.__init__ = () => {
    /* JSWorks.Internal = {};
    JSWorks.Internal.ApplicationContext = ApplicationContext;

    JSWorks.Internal.ServiceHolder = ServiceHolder;

    JSWorks.Internal.ParserService = ParserService;
    JSWorks.Internal.HTMLParserService = HTMLParserService;
    JSWorks.Internal.JSONParserService = JSONParserService;
    JSWorks.Internal.NetworkService = NetworkService;
    JSWorks.Internal.EventManager = EventManager;
    JSWorks.Internal.EventType = EventType; */

    /* JSWorks.Errors = {};
    JSWorks.Errors.HTTPError = HTTPError;
    JSWorks.Errors.MethodNotImplementedError = MethodNotImplementedError;
    JSWorks.Errors.ServiceAlreadyRegisteredError = ServiceAlreadyRegisteredError;
    JSWorks.Errors.ServiceUnresolvableError = ServiceUnresolvableError;
    JSWorks.Errors.UnknownServiceError = UnknownServiceError;
    JSWorks.Errors.UnknownServiceTypeError = UnknownServiceTypeError; */

    JSWorks.EventManager = JSWorks.Internal.EventManager;
};


window.addEventListener('load', () => {
    JSWorks.__init__();
    JSWorks.applicationContext = new JSWorks.Internal.ApplicationContext(JSWorks.__registerServices__());
    JSWorks.applicationContext.run();
});

