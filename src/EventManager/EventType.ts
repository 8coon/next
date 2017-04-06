

export enum EventType {
    NOTIFY,
    LOAD,
    ENTER,
    LEAVE,
    CREATE,
    UPDATE,
    DOMPropertyChange,
    DOMChildAppend,
    DOMChildRemove,
    DOMRemove,
    DOMContentChange,
    UrlChange,
    ROUTE_FIRED,
    ViewExtended,
    ViewsInheritanceRendered,
    InstallViewsListeners,
    ViewsListenersInstalled,
    ApplicationLoaded,
    PostUpdate,
}


declare const JSWorks: any;
JSWorks.EventType = EventType;
