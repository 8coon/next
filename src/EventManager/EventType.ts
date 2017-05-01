import {JSWorksLib} from '../jsworks';


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
    NAVIGATION_ENDED,
    ViewExtended,
    ViewsInheritanceRendered,
    InstallViewsListeners,
    ViewsListenersInstalled,
    ApplicationLoaded,
    PostUpdate,
    ViewIncludesRendered,
    RenderCustomElements,
    FormSubmitted,
}


declare const JSWorks: JSWorksLib;
JSWorks.EventType = EventType;
