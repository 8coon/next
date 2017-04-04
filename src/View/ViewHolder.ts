import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {EventType} from '../EventManager/EventType';
import {View} from './View';
import {DuplicateViewIdError} from '../Error/DuplicateViewIdError';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {ViewConfig} from './ViewConfig';
import {IDOMParsed} from '../Parser/HTML/IDOMParsed';
import {VirtualDOM} from '../VirtualDOM/VirtualDOM';


declare const JSWorks: any;


@JSWorksInternal
export class ViewHolder implements IEventEmitter {

    /**
     * Все загруженные View приложения
     */
    public views: object = {};

    private _templates: IDOMParsed[] = [];


    /**
     * Загрузить информацию о всех View из файлов приложения
     * @returns {undefined}
     */
    public load(): void {
        const appContext: ApplicationContext = JSWorks.applicationContext;
        const virtualDOM: VirtualDOM = appContext.serviceHolder.getServiceByName('SimpleVirtualDOM');

        this.queryViewTemplates().then(() => {
            this._templates.forEach((template) => {
                const node = virtualDOM.createElement(template);

                node.querySelectorAll(ViewConfig.VIEW_TEMPLATE_TAG).forEach((tag) => {
                    const view = new View({ id: tag.id, template: tag });

                    if (this.views[view.id]) {
                        throw new DuplicateViewIdError(view.id);
                    }

                    this.views[view.id] = view;
                    view.render();
                });
            });

            this.emitEvent({ type: EventType.LOAD, data: this });
        });
    }


    /**
     * Получить экземпляр View по имени
     * @param name
     * @returns {any}
     */
    public getView(name: string) {
        return this.views[name];
    }


    private queryViewTemplates() {
        const imports: Element[] = Array.from(document.querySelectorAll('link[rel="import"]'));
        const templatePromises: Array<Promise<any>> = [];

        const appContext: ApplicationContext = JSWorks.applicationContext;
        const htmlParser: HTMLParserService = appContext.serviceHolder.getServiceByName('HTMLParser');

        imports.forEach((tag) => {
            if ((<any> tag).import) {
                this._templates.push(htmlParser.parseDOM((<any> tag).import.firstChild));
                templatePromises.push(Promise.resolve(true));

                return;
            }

            templatePromises.push(
                htmlParser.parseURLAsync(tag.getAttribute('href')).then((result: any[]) => {
                    result.forEach((template) => {
                        this._templates.push(template);
                    });
                }),
            );
        });

        return Promise.all(templatePromises);
    }


    public emitEvent(event: IEvent): void {}  // tslint:disable-line

}
