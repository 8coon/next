export declare class ServiceHolder {
    private services;
    private serviceInstances;
    private serviceInstancesByType;
    private serviceCount;
    private serviceInitCount;
    /**
     * Конструктор по умолчанию
     */
    /**
     * Зарегистрировать сервис
     * @param service экземпляр сервиса, либо объект с двумя полями: name и type. Поле name
     * является необизательным. В случае, когда это поле будет undefined, регистрируемый сервис
     * будет проинициализирован первым попавшимся сервисом подходящего типа.
     */
    registerService(service: any): void;
    /**
     * Инициализирует все сервисы. Вызывается один раз из ApplicationContext.
     */
    instantiateServices(): void;
    /**
     * Получить сервис по имени типа. Выбрасывает UnknownServiceTypeError в случае, если подходящий
     * сервис не найден.
     * @param serviceType тип сервиса
     * @returns {any}
     */
    getService(serviceType: string): any;
    /**
     * Получить сервис по имени. Выбрасывает UnknownServiceError в случае, если сервис с таким
     * типом не был зарегистрирован.
     * @param serviceName имя сервиса
     * @returns {any}
     */
    getServiceByName(serviceName: string): any;
    private instantiateRequirementsMet();
}
