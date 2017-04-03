import {JSWorksController} from './Controller/ControllerDecorator';


declare const JSWorks: any;
declare const __JSWorks_services__: any;
declare const __JSWorks_controllers__: any;


JSWorks.__registerServices__ = () => {
    const holder = new JSWorks.Internal.ServiceHolder();

    __JSWorks_services__.forEach((serviceData) => {
        holder.registerService(serviceData);
    });

    return holder;
};


JSWorks.__init__ = () => {
    JSWorks.EventManager = JSWorks.Internal.EventManager;
    JSWorks.Controller = JSWorksController;
    JSWorks.CustomController = JSWorks.Internal.Controller;
};


JSWorks.__init__();


window.addEventListener('load', () => {
    JSWorks.applicationContext = new JSWorks.Internal.ApplicationContext(JSWorks.__registerServices__());
    JSWorks.applicationContext.run();
});

