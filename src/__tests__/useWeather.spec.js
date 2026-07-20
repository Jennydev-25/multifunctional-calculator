import { describe, test, expect, vi } from 'vitest';
import WeatherService from '../core/apis/weather/WeatherService.js';
import LocationsService from '../core/apis/weather/LocationsService.js';
import { useWeather } from '../composables/useWeather.js';

describe('useWeather', () => {
    test('deberia cargar el tiempo de Gijon al montar', async () => {
        vi.spyOn(WeatherService.prototype, 'getWeather').mockResolvedValue({
            getSkyDescription: () => 'Nuboso',
            getSkyId: () => '14',
            getTemperature: () => '27',
            getHumidity: () => '49',
            getWind: () => '21',
            getForecast: () => [],
        });
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockResolvedValue([]);
        vi.spyOn(LocationsService.prototype, 'getProvinces').mockResolvedValue([]);
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([]);

        const { temperature, skyDescription, fetchWeather } = useWeather();
        await fetchWeather();

        expect(temperature.value).toBe('27');
        expect(skyDescription.value).toBe('Nuboso');
    });
});