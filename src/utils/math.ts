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

/**
 * Ограничивает значение x между min и max.
 * @param {number} x - Значение, которое нужно ограничить.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @return {number} Ограниченное значение.
 */

export function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}

/**
 * Масштабирует значение x из диапазона [inMin, inMax] в диапазон [outMin, outMax].
 * @param {number} x - Значение, которое нужно масштабировать.
 * @param {number} inMin - Минимальное значение входного диапазона.
 * @param {number} inMax - Максимальное значение входного диапазона.
 * @param {number} outMin - Минимальное значение выходного диапазона.
 * @param {number} outMax - Максимальное значение выходного диапазона.
 * @return {number} Масштабированное значение.
 */
export function map(x: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
    return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

/**
 * Преобразует угол в градусах в угол в радианах.
 * @param {number} degrees - Угол в градусах.
 * @return {number} Угол в радианах.
 */
export function degToRad(degrees: number): number {
    return degrees * (Math.PI / 180);
}

/**
 * Преобразует угол в радианах в угол в градусах.
 * @param {number} radians - Угол в радианах.
 * @return {number} Угол в градусах.
 */
export function radToDeg(radians: number): number {
    return radians * (180 / Math.PI);
}

/**
 * Вычисляет расстояние между двумя точками (x1, y1) и (x2, y2).
 * @param {number} x1 - Координата x первой точки.
 * @param {number} y1 - Координата y первой точки.
 * @param {number} x2 - Координата x второй точки.
 * @param {number} y2 - Координата y второй точки.
 * @return {number} Расстояние между точками.
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Генерирует случайное число между min и max.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @return {number} Случайное число.
 */
export function random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

/**
 * Генерирует случайное целое число между min и max.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @return {number} Случайное целое число.
 */
export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Генерирует синусоидальное значение в зависимости от времени t.
 * @param {number} t - Время.
 * @param {number} amplitude - Амплитуда.
 * @param {number} frequency - Частота.
 * @return {number} Синусоидальное значение.
 */
export function sinusoid(t: number, amplitude: number, frequency: number): number {
    return amplitude * Math.sin(frequency * t);
}

/**
 * Функция плавного ускорения.
 * @param {number} t - Время.
 * @param {number} b - Начальное значение.
 * @param {number} c - Изменение значения.
 * @param {number} d - Длительность.
 * @return {number} Значение, измененное с плавным ускорением.
 */
export function easeIn(t: number, b: number, c: number, d: number): number {
    return c * (t /= d) * t + b;
}

/**
 * Функция плавного замедления.
 * @param {number} t - Время.
 * @param {number} b - Начальное значение.
 * @param {number} c - Изменение значения.
 * @param {number} d - Длительность.
 * @return {number} Значение, измененное с плавным замедлением.
 */
export function easeOut(t: number, b: number, c: number, d: number): number {
    return -c * ((t = t / d - 1) * t + 1) + b;
}

/**
 * Функция плавного ускорения и замедления.
 * @param {number} t - Время.
 * @param {number} b - Начальное значение.
 * @param {number} c - Изменение значения.
 * @param {number} d - Длительность.
 * @return {number} Значение, измененное с плавным ускорением и замедлением.
 */
export function easeInOut(t: number, b: number, c: number, d: number): number {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
}
