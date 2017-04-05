

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
    ApplicationLoaded,
}


declare const JSWorks: any;
JSWorks.EventType = EventType;
