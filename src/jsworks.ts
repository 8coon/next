import {JSWorksController} from './Controller/ControllerDecorator';
import {JSWorksComponent} from './Component/ComponentDecorator';
import {JSWorksPage} from './Component/PageDecorator';
import {JSWorksService} from './Service/ServiceDecorator';
import {JSWorksComponentProperty} from './Component/ComponentPropertyDecorator';
import {JSWorksCustomElement} from './CustomElements/CustomElementDecorator';
import {JSWorksComponentCollectionProperty} from './Component/ComponentCollectionPropertyDecorator';


declare const JSWorks: any;
declare const __JSWorks_services__: any;


JSWorks.__registerServices__ = () => {
    const holder = new JSWorks.Internal.ServiceHolder();

    __JSWorks_services__.forEach((serviceData) => {
        holder.registerService(serviceData);
    });

    return holder;
};


JSWorks.__init__ = () => {
    JSWorks.EventManager = JSWorks.Internal.EventManager;

    JSWorks.Service = JSWorksService;
    JSWorks.Controller = JSWorksController;
    JSWorks.Component = JSWorksComponent;
    JSWorks.Page = JSWorksPage;
    JSWorks.ComponentProperty = JSWorksComponentProperty;
    JSWorks.CustomElement = JSWorksCustomElement;
    JSWorks.ComponentCollectionProperty = JSWorksComponentCollectionProperty;
};


JSWorks.__init__();


window.addEventListener('load', () => {
    JSWorks.applicationContext = new JSWorks.Internal.ApplicationContext(JSWorks.__registerServices__());
    JSWorks.applicationContext.run();
});

