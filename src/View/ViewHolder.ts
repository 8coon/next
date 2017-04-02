import {ApplicationContext} from '../ApplicationContext/ApplicationContext';
import {HTMLParserService} from '../Parser/HTML/HTMLParserService';
import {IEventEmitter} from '../EventManager/IEventEmitter';
import {IEvent} from '../EventManager/IEvent';
import {EventType} from '../EventManager/EventType';
import {View} from './View';
import {DuplicateViewIdError} from '../Service/Error/DuplicateViewIdError';
import {JSWorksInternal} from '../Common/InternalDecorator';
import {IAbstractVirtualDOMElement} from '../VirtualDOM/IAbstractVirtualDOMElement';


@JSWorksInternal
export class ViewHolder implements IEventEmitter {

    /**
     * Все загруженные View приложения
     */
    public views: Object = {};

    private _templates: IAbstractVirtualDOMElement[] = [];


    /**
     * Загрузить информацию о всех View из файлов приложения
     * @returns {undefined}
     */
    public load(): void {
        this.queryViewTemplates().then(() => {
            this._templates.forEach((template) => {
                const id = template.id;

                if (this.views[id]) {
                    throw new DuplicateViewIdError(id);
                }

                // this.views[id] = new View({ id, template });
            });

            this.emitEvent({ type: EventType.LOAD, data: this });
        });
    }


    private queryViewTemplates() {
        const imports: Element[] = Array.from(document.querySelectorAll('link[rel="import"]'));
        const templatePromises: Array<Promise<HTMLElement>> = [];

        const appContext: ApplicationContext = JSWorks.applicationContext;
        const htmlParser: HTMLParserService = appContext.serviceHolder.getServiceByName('HTMLParser');

        imports.forEach((tag) => {
            if ((<any> tag).import) {
                this._templates.push((<any> tag).import);
                templatePromises.push(Promise.resolve((<any> tag).import));

                return;
            }

            templatePromises.push(new Promise((resolve) => {
                htmlParser.parseURLAsync(tag.getAttribute('href')).then((result) => {
                    console.log(result);

                    // this._templates.push(<HTMLElement> (<HTMLElement> result).childNodes[0]);
                    resolve((<HTMLElement> result).childNodes[0]);
                });
            }));
        });

        return Promise.all(templatePromises);
    }


    public emitEvent(event: IEvent): void {}  // tslint:disable-line

}
