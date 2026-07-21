import { describe, test, expect, vi } from 'vitest';
import WeatherService from '../core/services/WeatherService.js';
import LocationsService from '../core/services/LocationsService.js';
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

    test('deberia cargar las ubicaciones nacionales provincias y municipios', async () => {
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockResolvedValue([{ name: 'Oviedo' }]);
        vi.spyOn(LocationsService.prototype, 'getProvinces').mockResolvedValue([{ name: 'Asturias' }]);
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([{ name: 'Gijón' }]);

        const { nationalCities, provinces, municipalities, loadLocations } = useWeather();
        await loadLocations();

        expect(nationalCities.value).toEqual([{ name: 'Oviedo' }]);
        expect(provinces.value).toEqual([{ name: 'Asturias' }]);
        expect(municipalities.value).toEqual([{ name: 'Gijón' }]);
    });

    test('deberia cargar los municipios de otra provincia', async () => {
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockResolvedValue([{ name: 'Avilés' }]);

        const { municipalities, changeProvinceForMunicipalities } = useWeather();
        changeProvinceForMunicipalities('33');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(municipalities.value).toEqual([{ name: 'Avilés' }]);
    });

    test('deberia mostrar error si la ubicacion no tiene codigos validos', async () => {
        const { errorMessage, changeLocation } = useWeather();
        changeLocation('invalido');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(errorMessage.value).toBe('Ubicación no valida');
    });

    test('deberia mostrar error si falla la carga de ubicaciones', async () => {
        vi.spyOn(LocationsService.prototype, 'getNationalCities').mockRejectedValue(new Error('fail'));

        const { errorMessage, loadLocations } = useWeather();
        await loadLocations();

        expect(errorMessage.value).toBe('No se pudieron cargar las ubicaciones');
    });

    test('deberia mostrar error si falla la carga de municipios', async () => {
        vi.spyOn(LocationsService.prototype, 'getMunicipalities').mockRejectedValue(new Error('fail'));

        const { errorMessage, changeProvinceForMunicipalities } = useWeather();
        changeProvinceForMunicipalities('33');
        await new Promise((resolve) => setTimeout(resolve, 0));

        expect(errorMessage.value).toBe('No se pudieron cargar los municipios');
    });

    test('deberia usar valores por defecto si la API devuelve campos vacios', async () => {
        vi.spyOn(WeatherService.prototype, 'getWeather').mockResolvedValue({
            getSkyDescription: () => null,
            getSkyId: () => '14',
            getTemperature: () => null,
            getHumidity: () => null,
            getWind: () => null,
            getForecast: () => [],
        });

        const { skyDescription, temperature, humidity, wind, fetchWeather } = useWeather();
        await fetchWeather();

        expect(skyDescription.value).toBe('Información no disponible');
        expect(temperature.value).toBe('--');
        expect(humidity.value).toBe('--');
        expect(wind.value).toBe('--');
    });
});