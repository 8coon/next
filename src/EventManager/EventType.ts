

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
    ViewExtended,
    ViewsInheritanceRendered,
    InstallViewsListeners,
    ViewsListenersInstalled,
    ApplicationLoaded,
    PostUpdate,
}


declare const JSWorks: any;
JSWorks.EventType = EventType;
