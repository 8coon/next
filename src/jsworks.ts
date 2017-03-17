

import {ApplicationContext} from './ApplicationContext/ApplicationContext';

import {ApplicationInfoProvider} from './ApplicationInfo/ApplicationInfoProvider';
import {HTMLApplicationInfoProvider} from './ApplicationInfo/HTMLApplicationInfoProvider';

import {HTMLParserService} from './Parser/HTML/HTMLParserService';
import {ParserService} from './Parser/ParserService';

import {Service} from './Service/Service';
import {ServiceHolder} from './Service/ServiceHolder';

import {HTTPError} from './Service/Error/HTTPError';
import {MethodNotImplementedError} from './Service/Error/MethodNotImplementedError';
import {ServiceAlreadyRegisteredError} from './Service/Error/ServiceAlreadyRegisteredError';
import {ServiceUnresolvableError} from './Service/Error/ServiceUnresolvableError';
import {UnknownServiceError} from './Service/Error/UnknownServiceError';
import {UnknownServiceTypeError} from './Service/Error/UnknownServiceTypeError';

import {ConfigurationService} from './Configuration/ConfigurationService';
import {JSONParserService} from './Parser/JSON/JSONParserService';

import {NetworkService} from './Network/NetworkService';
import {EventManager} from './EventManager/EventManager';
import {EventType} from './EventManager/EventType';


declare const JSWorks: any;


/**
 * Adds div with texts to document body.
 * @param text
 * @returns {boolean}
 */
export function addSomethingToDOM(text: string): boolean {
    const div = document.createElement('div');
    div.innerHTML = text;
    document.querySelector('body').appendChild(div);

    return true;
}


/* export function servicesTest(): void {
    const appContext: ApplicationContext = new ApplicationContext();

    // appContext.serviceHolder.registerService(new HTMLParser());

    appContext.run();

    // console.log((<Parser> appContext.serviceHolder.getService('Parser')).getParsedData({}));
} */


JSWorks.__registerServices__ = () => {
    const holder = new JSWorks.Internal.ServiceHolder();

    Object.keys(JSWorks.Internal).forEach((name) => {
        if (name.indexOf('Service') > 0) {
            const service = new JSWorks.Internal[name]();

            if (typeof service.getInstance === 'function') {
                holder.registerService(service);
            }
        }
    });

    return holder;
};


JSWorks.__init__ = () => {
    JSWorks.Internal = {};
    JSWorks.Internal.ApplicationContext = ApplicationContext;
    JSWorks.Internal.ApplicationInfoProvider = ApplicationInfoProvider;
    JSWorks.Internal.HTMLApplicationInfoProvider = HTMLApplicationInfoProvider;

    JSWorks.Internal.Service = Service;
    JSWorks.Internal.ServiceHolder = ServiceHolder;

    JSWorks.Internal.ParserService = ParserService;
    JSWorks.Internal.HTMLParserService = HTMLParserService;
    JSWorks.Internal.JSONParserService = JSONParserService;
    JSWorks.Internal.ConfigurationService = ConfigurationService;
    JSWorks.Internal.NetworkService = NetworkService;
    JSWorks.Internal.EventManager = EventManager;
    JSWorks.Internal.EventType = EventType;

    JSWorks.Errors = {};
    JSWorks.Errors.HTTPError = HTTPError;
    JSWorks.Errors.MethodNotImplementedError = MethodNotImplementedError;
    JSWorks.Errors.ServiceAlreadyRegisteredError = ServiceAlreadyRegisteredError;
    JSWorks.Errors.ServiceUnresolvableError = ServiceUnresolvableError;
    JSWorks.Errors.UnknownServiceError = UnknownServiceError;
    JSWorks.Errors.UnknownServiceTypeError = UnknownServiceTypeError;

    JSWorks.EventManager = JSWorks.Internal.EventManager;
    JSWorks.EventType = JSWorks.Internal.EventType;
};


window.addEventListener('load', () => {
    JSWorks.__init__();
    JSWorks.applicationContext = JSWorks.__registerServices__();
});

