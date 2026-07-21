import { describe, test, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import WeatherService from '../core/services/WeatherService.js';
import LocationsService from '../core/services/LocationsService.js';
import Weather from '../components/Weather.vue';

describe('Weather', () => {
    test('deberia mostrar la temperatura y el cielo al montar', async () => {
        vi.spyOn(WeatherService.prototype, 'getWeather').mockResolvedValue({
            getSkyDescription: () => 'Nuboso',
            getSkyId: () => '14',
            getTemperature: () => '27',
            getHumidity: () => '49',
            getWind: () => '21',
            getForecast: () => [{ date: '2026-07-20', max: '27', min: '16', skyId: '14' }],
        });
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockResolvedValue([{ codProv: '33', codMunicipio: '33044', name: 'Oviedo' }]);
        vi.spyOn(LocationsService.prototype, 'getProvinces').mockResolvedValue([{ codProv: '33', name: 'Asturias' }]);
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([{ codProv: '33', codMunicipio: '33024', name: 'Gijón' }]);

        const wrapper = mount(Weather);
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(wrapper.find('.weather__temperature').text()).toContain('27');
        expect(wrapper.find('.weather__sky').text()).toContain('Nuboso');
    });

    test('deberia mostrar un mensaje de error si falla la peticion', async () => {
        vi.spyOn(WeatherService.prototype, 'getWeather').mockRejectedValue(new Error('fail'));
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockResolvedValue([]);
        vi.spyOn(LocationsService.prototype, 'getProvinces').mockResolvedValue([]);
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([]);

        const wrapper = mount(Weather);
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(wrapper.find('.weather__sky').text()).toContain('No se pudo obtener el tiempo');
    });

    test('deberia cambiar la ubicacion al seleccionar otra opcion', async () => {
        vi.spyOn(WeatherService.prototype, 'getWeather').mockResolvedValue({
            getSkyDescription: () => 'Despejado',
            getSkyId: () => '11',
            getTemperature: () => '30',
            getHumidity: () => '40',
            getWind: () => '10',
            getForecast: () => [],
        });
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockResolvedValue([{ codProv: '33', codMunicipio: '33044', name: 'Oviedo' }]);
        vi.spyOn(LocationsService.prototype, 'getProvinces').mockResolvedValue([{ codProv: '33', name: 'Asturias' }]);
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([{ codProv: '33', codMunicipio: '33024', name: 'Gijón' }]);

        const wrapper = mount(Weather);
        await new Promise((resolve) => setTimeout(resolve, 0));

        await wrapper.find('#location-select').setValue('nacional:33:33044');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(wrapper.find('#location-select').element.value).toBe('nacional:33:33044');
    });
});