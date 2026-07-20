import { describe, test, expect } from 'vitest';
import { currencyMapper } from '../core/mappers/currency-mapper.js';

describe('currencyMapper', () => {
    test('deberia extraer la fecha', () => {
        const data = { date: '2026-07-20' };
        expect(currencyMapper.date(data)).toBe('2026-07-20');
    });

    test('deberia extraer la base', () => {
        const data = { base: 'USD' };
        expect(currencyMapper.base(data)).toBe('USD');
    });

    test('deberia extraer la tasa de una divisa concreta', () => {
        const data = { rates: { EUR: '0.87' } };
        expect(currencyMapper.rate(data, 'EUR')).toBe(0.87);
    });
});