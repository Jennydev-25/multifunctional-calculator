import { describe, test, expect } from 'vitest';
import { weatherMapper } from '../core/mappers/weather-mapper.js';

describe('weatherMapper', () => {
    test('deberia extraer la descripcion del cielo', () => {
        const data = { stateSky: { description: 'Nuboso' } };
        expect(weatherMapper.skyDescription(data)).toBe('Nuboso');
    });
});