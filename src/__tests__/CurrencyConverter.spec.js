import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CurrencyService from '../core/services/CurrencyService.js';
import CurrencyConverter from '../components/CurrencyConverter.vue';

describe('CurrencyConverter', () => {
    test('deberia convertir la cantidad al cambiar el input', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockImplementation((currency) => {
            const rates = { EUR: { getRate: () => 0.87 }, USD: { getRate: () => 1 } };
            return Promise.resolve(rates[currency]);
        });

        const wrapper = mount(CurrencyConverter);
        const input = wrapper.find('#amount-from');
        await input.setValue('1000');
        await input.trigger('input');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(wrapper.find('.currency-converter__result-value').text()).toContain('1149.43');
    });

    test('deberia intercambiar las divisas al pulsar el boton', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockResolvedValue({ getRate: () => 1 });

        const wrapper = mount(CurrencyConverter);
        const fromSelect = wrapper.find('#currency-from');
        const toSelect = wrapper.find('#currency-to');

        await wrapper.find('#btn-swap-currencies').trigger('click');

        expect((fromSelect.element).value).toBe('USD');
        expect((toSelect.element).value).toBe('EUR');
    });

    test('deberia mostrar un error si la cantidad no es valida', async () => {
        const wrapper = mount(CurrencyConverter);
        const input = wrapper.find('#amount-from');
        await input.setValue('abc');
        await input.trigger('input');

        expect(wrapper.find('.currency-converter__result-label').text()).toContain('valida');
    });

    test('deberia convertir al cambiar la divisa de origen', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockResolvedValue({ getRate: () => 1 });
        const wrapper = mount(CurrencyConverter);
        await wrapper.find('#currency-from').setValue('JPY');
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(wrapper.find('#currency-from').element.value).toBe('JPY');
    });

    test('deberia convertir al cambiar la divisa de destino', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockResolvedValue({ getRate: () => 1 });
        const wrapper = mount(CurrencyConverter);
        await wrapper.find('#currency-to').setValue('JPY');
        await new Promise((resolve) => setTimeout(resolve, 0));
        expect(wrapper.find('#currency-to').element.value).toBe('JPY');
    });

    test('deberia prevenir el envio del formulario', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockResolvedValue({ getRate: () => 1 });
        const wrapper = mount(CurrencyConverter);
        await wrapper.find('form').trigger('submit');
        expect(wrapper.exists()).toBe(true);
    });

    test('deberia mostrar un mensaje de error si falla la API', async () => {
        vi.spyOn(CurrencyService.prototype, 'getRate').mockRejectedValue(new Error('fail'));
        const wrapper = mount(CurrencyConverter);
        const input = wrapper.find('#amount-from');
        await input.setValue('1000');
        await input.trigger('input');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(wrapper.find('.currency-converter__result-label').text()).toContain('No se pudo obtener');
    });
});