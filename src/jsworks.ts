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
import {JSWorksModelQueryMethod} from './Model/Decorators/ModelQueryMethodDecorator';
import {HTTPMethod} from './Network/HTTPMethod';
import {EventManager} from './EventManager/EventManager';
import {ApplicationContext} from './ApplicationContext/ApplicationContext';
import {ServiceHolder} from './Service/ServiceHolder';


/* tslint:disable */
export class JSWorksLib {

    public Internal: object;

    public EventManager = EventManager;
    public EventType = EventType;
    public InterceptorType = InterceptorType;
    public HTTPMethod = HTTPMethod;

    public Service = JSWorksService;
    public Controller = JSWorksController;
    public Interceptor = JSWorksInterceptor;
    public Component = JSWorksComponent;
    public Page = JSWorksPage;
    public ComponentProperty = JSWorksComponentProperty;
    public CustomElement = JSWorksCustomElement;
    public ComponentCollectionProperty = JSWorksComponentCollectionProperty;
    public Model = JSWorksModel;
    public ModelField = JSWorksModelField;
    public ModelPrimaryKey = JSWorksModelPrimaryKey;
    public ModelCreateMethod = JSWorksModelCreateMethod;
    public ModelReadMethod = JSWorksModelReadMethod;
    public ModelUpdateMethod = JSWorksModelUpdateMethod;
    public ModelDeleteMethod = JSWorksModelDeleteMethod;
    public ModelQueryMethod = JSWorksModelQueryMethod;

    public applicationContext: ApplicationContext;
    public config: object = {};


    constructor() {
        this.Internal = JSWorks.Internal;
    }


    public registerServices(): ServiceHolder {
        const holder = new JSWorks.Internal['ServiceHolder']();

        __JSWorks_services__.forEach((serviceData) => {
            holder.registerService(serviceData);
        });

        return holder;
    };
}


declare let JSWorks: JSWorksLib;
declare const __JSWorks_services__: any;


JSWorks = new JSWorksLib();


window.addEventListener('load', () => {
    JSWorks.applicationContext = new JSWorks.Internal['ApplicationContext'](JSWorks.registerServices());
    JSWorks.applicationContext.run();
});

