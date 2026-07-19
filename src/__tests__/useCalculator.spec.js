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
});