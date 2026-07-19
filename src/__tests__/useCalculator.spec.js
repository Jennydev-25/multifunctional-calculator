import { describe, test, expect } from 'vitest';
import { useCalculator } from '../composables/useCalculator.js';

describe('useCalculator', () => {
    test('deberia empezar con el display en 0', () => {
        const { display } = useCalculator();
        expect(display.value).toBe('0');
    });

    test('deberia mostrar el digito pulsado cuando el display esta en 0', () => {
        const { display, inputDigit } = useCalculator();
        inputDigit('5');
        expect(display.value).toBe('5');
    });

    test('deberia concatenar digitos si el display ya tiene un numero', () => {
        const { display, inputDigit } = useCalculator();
        inputDigit('1');
        inputDigit('2');
        expect(display.value).toBe('12');
    });

    test('deberia añadir un punto decimal al display', () => {
        const { display, inputDigit, inputDecimal } = useCalculator();
        inputDigit('5');
        inputDecimal();
        expect(display.value).toBe('5.');
    });

    test('no deberia añadir un segundo punto decimal', () => {
        const { display, inputDigit, inputDecimal } = useCalculator();
        inputDigit('5');
        inputDecimal();
        inputDecimal();
        expect(display.value).toBe('5.');
    });
});