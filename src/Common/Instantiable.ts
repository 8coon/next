

/**
 * Классы, реализующие этот интерфейс, должны предоставлять метод getInstance, который
 * должен возвращать копию объекта или сам объект, если это синглтон. Опционально, в
 * метод передаётся объект args, заполняющийся на усмотрение вызвавшего getInstance объекта
 * в соответствие с требованиями объекта, реализующего данный интерфейс.
 */
export interface Instantiable {

    getInstance(args: Object): Instantiable;

}
