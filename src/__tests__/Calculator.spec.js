import { describe, test, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import Calculator from '@/components/Calculator.vue';

describe('Calculator', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Calculator, {
            global: {
                plugins: [
                    createTestingPinia({
                        stubActions: false,
                        createSpy: vi.fn,
                    }),
                ],
            },
        });
    });

    test('deberia mostrar 0 en el display al montar', () => {
        expect(wrapper.find('.calculator__result').text()).toBe('0');
    });

    test('deberia sumar dos numeros al pulsar los botones', async () => {
        await wrapper.find('#btn-5').trigger('click');
        await wrapper.find('#btn-add').trigger('click');
        await wrapper.find('#btn-3').trigger('click');
        await wrapper.find('#btn-equals').trigger('click');
        expect(wrapper.find('.calculator__result').text()).toBe('8');
    });

    test('deberia guardar y recuperar un valor de la memoria', async () => {
        await wrapper.find('#btn-7').trigger('click');
        await wrapper.find('#btn-ms').trigger('click');
        await wrapper.find('#btn-ce').trigger('click');
        await wrapper.find('#btn-mr').trigger('click');
        expect(wrapper.find('.calculator__result').text()).toBe('7');
    });
});