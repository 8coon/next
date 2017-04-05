

getTestServiceHolder = (services) => {
    'use strict';

    /* const holder = new JSWorks.Internal.ServiceHolder();

    services.forEach((service) => {
        if (typeof service === 'string') {
            holder.registerService(new JSWorks.Internal[`${service}Service`]());
            return;
        }

        holder.registerService(service);
    });

    holder.instantiateServices();
    return holder; */

    return JSWorks.applicationContext.serviceHolder;
};

getTestControllerHolder = () => {
    'use strict';
    return JSWorks.applicationContext.controllerHolder;
};
