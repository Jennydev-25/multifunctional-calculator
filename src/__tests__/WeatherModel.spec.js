import { describe, test, expect } from 'vitest';
import WeatherModel from '../core/models/WeatherModel.js';

describe('WeatherModel', () => {
    test('deberia crear un modelo con los datos del mapper', () => {
        const data = {};
        const fakeMapper = {
            skyDescription: () => 'Nuboso',
            skyId: () => '14',
            temperature: () => '27',
            humidity: () => '49',
            wind: () => '21',
            forecast: () => [],
        };
        const model = WeatherModel.createWeather(data, fakeMapper);

        expect(model.getSkyDescription()).toBe('Nuboso');
        expect(model.getSkyId()).toBe('14');
        expect(model.getTemperature()).toBe('27');
        expect(model.getHumidity()).toBe('49');
        expect(model.getWind()).toBe('21');
        expect(model.getForecast()).toEqual([]);
    });
});