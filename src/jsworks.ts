import {JSWorksController} from './Controller/ControllerDecorator';
import {JSWorksComponent} from './Component/ComponentDecorator';
import {JSWorksPage} from './Component/PageDecorator';
import {JSWorksService} from './Service/ServiceDecorator';
import {JSWorksComponentProperty} from './Component/ComponentPropertyDecorator';
import {JSWorksCustomElement} from './CustomElements/CustomElementDecorator';
import {JSWorksComponentCollectionProperty} from './Component/ComponentCollectionPropertyDecorator';
import {EventType} from './EventManager/EventType';
import {InterceptorType} from './Interceptor/InterceptorType';
import {JSWorksInterceptor} from './Interceptor/InterceptorDecorator';
import {JSWorksModel} from './Model/Decorators/ModelDecorator';
import {JSWorksModelField} from './Model/Decorators/ModelFieldDecorator';
import {JSWorksModelPrimaryKey} from './Model/Decorators/ModelPrimaryKeyDecorator';
import {JSWorksModelCreateMethod} from './Model/Decorators/ModelCreateMethodDecorator';
import {JSWorksModelReadMethod} from './Model/Decorators/ModelReadMethodDecorator';
import {JSWorksModelUpdateMethod} from './Model/Decorators/ModelUpdateMethodDecorator';
import {JSWorksModelDeleteMethod} from './Model/Decorators/ModelDeleteMethodDecorator';


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
    JSWorks.EventType = EventType;
    JSWorks.InterceptorType = InterceptorType;

    JSWorks.Service = JSWorksService;
    JSWorks.Controller = JSWorksController;
    JSWorks.Interceptor = JSWorksInterceptor;
    JSWorks.Component = JSWorksComponent;
    JSWorks.Page = JSWorksPage;
    JSWorks.ComponentProperty = JSWorksComponentProperty;
    JSWorks.CustomElement = JSWorksCustomElement;
    JSWorks.ComponentCollectionProperty = JSWorksComponentCollectionProperty;
    JSWorks.Model = JSWorksModel;
    JSWorks.ModelField = JSWorksModelField;
    JSWorks.ModelPrimaryKey = JSWorksModelPrimaryKey;
    JSWorks.ModelCreateMethod = JSWorksModelCreateMethod;
    JSWorks.ModelReadMethod = JSWorksModelReadMethod;
    JSWorks.ModelUpdateMethod = JSWorksModelUpdateMethod;
    JSWorks.ModelDeleteMethod = JSWorksModelDeleteMethod;
};


JSWorks.__init__();


window.addEventListener('load', () => {
    JSWorks.applicationContext = new JSWorks.Internal.ApplicationContext(JSWorks.__registerServices__());
    JSWorks.applicationContext.run();
});

