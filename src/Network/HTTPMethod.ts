import {JSWorksLib} from '../jsworks';


export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';


export const HTTPMethod = {  // tslint:disable-line

    DELETE: 'DELETE' as HTTPMethod,
    GET: 'GET' as HTTPMethod,
    HEAD: 'HEAD' as HTTPMethod,
    OPTIONS: 'OPTIONS' as HTTPMethod,
    PATCH: 'PATCH' as HTTPMethod,
    POST: 'POST' as HTTPMethod,
    PUT: 'PUT' as HTTPMethod,

};


declare const JSWorks: JSWorksLib;
JSWorks.HTTPMethod = HTTPMethod;
