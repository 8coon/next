import {IAbstractVirtualDOMElement} from './IAbstractVirtualDOMElement';


export abstract class VirtualDOM {


    /**
     * Возвращает корневой элемент
     */
    public abstract get root(): IAbstractVirtualDOMElement;


    /**
     * Сравнивает дерево, чьим корневым элементом является root и дерево, реализуемое VirtualDOM, при обнаружении
     * переносит изменения в root.
     *
     * Применяется одновременный обход двух деревьев в ширину (возможно, через цикл for).
     *
     * В случае обнаружения несоответствия имени тега, данная нода и связанное с ней поддерево перерисовываются
     * (создаются соответствующие узлы с помощью HTMLElement и записываются на место такой ноды) и обход
     * продолжается дальше.
     *
     * Дальше ещё напишу.
     *
     * @param root
     */
    public abstract render(root: HTMLElement): void;

}
