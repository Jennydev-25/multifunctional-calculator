import { describe, test, expect, vi } from 'vitest';
import CurrencyService from '../core/services/CurrencyService.js';

describe('CurrencyService', () => {
    test('deberia devolver un CurrencyModel con la tasa pedida', async () => {
        const fakeRepo = {
            getAxios: vi.fn().mockResolvedValue({
                date: '2026-07-20',
                base: 'USD',
                rates: { EUR: '0.87' },
            }),
        };
        const service = new CurrencyService(fakeRepo);
        const rate = await service.getRate('EUR');

        expect(rate.getRate()).toBe(0.87);
    });
});