import { describe, test, expect } from 'vitest';
import CurrencyModel from '../core/models/CurrencyModel.js';

describe('CurrencyModel', () => {
    test('deberia crear un modelo con los datos del mapper', () => {
        const data = { date: '2026-07-20', base: 'USD', rates: { EUR: '0.87' } };
        const fakeMapper = {
            date: (d) => d.date,
            base: (d) => d.base,
            rate: (d, currency) => Number(d.rates[currency]),
        };
        const model = CurrencyModel.createRate(data, 'EUR', fakeMapper);

        expect(model.getDate()).toBe('2026-07-20');
        expect(model.getBase()).toBe('USD');
        expect(model.getRate()).toBe(0.87);
    });
});