/**
 * Линейно интерполирует значение между двумя другими значениями.
 * @param {number} a - Начальное значение.
 * @param {number} b - Конечное значение.
 * @param {number} t - Коэффициент интерполяции в диапазоне [0, 1].
 * @return {number} Интерполированное значение.
 */

export function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

