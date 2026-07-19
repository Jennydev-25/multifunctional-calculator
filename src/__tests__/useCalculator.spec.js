import { describe, test, expect } from 'vitest';
import { useCalculator } from '../composables/useCalculator.js';

describe('useCalculator', () => {
    test('deberia empezar con el display en 0', () => {
        const { display } = useCalculator();
        expect(display.value).toBe('0');
    });
});