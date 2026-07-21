import { describe, test, expect, vi } from 'vitest';
import WeatherService from '../core/services/WeatherService.js';

describe('WeatherService', () => {
    test('deberia devolver un WeatherModel con los datos mapeados', async () => {
        const fakeRepo = {
            getAxios: vi.fn().mockResolvedValue({
                stateSky: { description: 'Nuboso', id: '14' },
                temperatura_actual: '27',
                humedad: '49',
                viento: '21',
                proximos_dias: [],
            }),
        };
        const service = new WeatherService(fakeRepo);
        const weather = await service.getWeather();

        expect(weather.getSkyDescription()).toBe('Nuboso');
        expect(weather.getTemperature()).toBe('27');
    });
});