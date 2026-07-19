import { describe, test, expect } from 'vitest';
import { convertAmount } from '../utils/convertAmount.js';

describe('convertAmount', () => {
    test('deberia convertir una cantidad usando las tasas de cambio', () => {
        const result = convertAmount(100, 1, 0.85);
        expect(result).toBe(85);
    });

    test('deberia convertir desde USD a otra divisa', () => {
        const result = convertAmount(50, 1, 0.92);
        expect(result).toBe(46);
    });
});