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

    test('deberia extraer y limitar la prevision a 5 dias', () => {
        const data = {
            proximos_dias: [
                { '@attributes': { fecha: '2026-07-18' }, temperatura: { maxima: '27', minima: '16' }, estado_cielo: ['45', '46'] },
                { '@attributes': { fecha: '2026-07-19' }, temperatura: { maxima: '30', minima: '18' }, estado_cielo: '13' },
                { '@attributes': { fecha: '2026-07-20' }, temperatura: { maxima: '29', minima: '16' }, estado_cielo: '12' },
                { '@attributes': { fecha: '2026-07-21' }, temperatura: { maxima: '28', minima: '14' }, estado_cielo: '12' },
                { '@attributes': { fecha: '2026-07-22' }, temperatura: { maxima: '30', minima: '14' }, estado_cielo: '11' },
                { '@attributes': { fecha: '2026-07-23' }, temperatura: { maxima: '30', minima: '14' }, estado_cielo: '12' },
            ],
        };
        const result = weatherMapper.forecast(data);
        expect(result).toHaveLength(5);
        expect(result[0]).toEqual({ date: '2026-07-18', max: '27', min: '16', skyId: '45' });
        expect(result[1].skyId).toBe('13');
    });

    test('deberia devolver un array vacio si no hay proximos_dias', () => {
        expect(weatherMapper.forecast({})).toEqual([]);
    });
});