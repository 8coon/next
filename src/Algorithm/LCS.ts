import {JSWorksInternal} from '../Common/InternalDecorator';



function LSCLength<T>(a: T[], b: T[], comparator: (a: T, b: T) => boolean,
                      cached?: number[][], indices: number[] = [],
                      aPos: number = a.length - 1, bPos: number = b.length - 1): number {
    if (!cached) {
        cached = [];

        for (let i = 0; i < a.length; i++) {  // tslint:disable-line
            const line = [];

            // line.length = b.length;
            cached.push(line);
        }
    }

    if (cached[aPos][bPos]) {
        return cached[aPos][bPos];
    }

    if (a.length === 0 && b.length === 0) {
        return 0;
    }

    if (comparator(a[aPos], b[bPos])) {
        const value = LSCLength(a, b, comparator, cached, indices, aPos - 1, bPos - 1) + 1;
        cached[aPos][bPos] = value;
        indices.push(aPos);

        return value;
    }

    const value = Math.max(
        LSCLength(a, b, comparator, cached, indices, aPos - 1, bPos),
        LSCLength(a, b, comparator, cached, indices, aPos, bPos - 1),
    );

    cached[aPos][bPos] = value;
    return value;
}


@JSWorksInternal
export class LCSAlgorithm<T> {


    /**
     * Вычисление наибольшей общей подпоследовательности
     * @param a
     * @param b
     * @param comparator
     * @returns {number}
     */
    public countLength(a: T[], b: T[], comparator: (a: T, b: T) => boolean): number[] {
        const indices: number[] = [];
        LSCLength(a, b, comparator, undefined, indices);

        return indices;
    }


}
