import { describe, test, expect } from 'vitest';
import { weatherMapper } from '../core/mappers/weather-mapper.js';

describe('weatherMapper', () => {
    test('deberia extraer la descripcion del cielo', () => {
        const data = { stateSky: { description: 'Nuboso' } };
        expect(weatherMapper.skyDescription(data)).toBe('Nuboso');
    });

    test('deberia extraer el id del cielo', () => {
        const data = { stateSky: { id: '14' } };
        expect(weatherMapper.skyId(data)).toBe('14');
    });

    test('deberia extraer la temperatura', () => {
        const data = { temperatura_actual: '27' };
        expect(weatherMapper.temperature(data)).toBe('27');
    });

    test('deberia extraer la humedad', () => {
        const data = { humedad: '49' };
        expect(weatherMapper.humidity(data)).toBe('49');
    });

    test('deberia extraer el viento', () => {
        const data = { viento: '21' };
        expect(weatherMapper.wind(data)).toBe('21');
    });
});