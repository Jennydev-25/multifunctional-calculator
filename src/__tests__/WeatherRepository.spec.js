import { describe, test, expect } from 'vitest';
import WeatherRepository from '../core/repositories/WeatherRepository.js';

describe('WeatherRepository', () => {
    test('deberia construir la URL correcta con provincia y municipio', () => {
        const repo = new WeatherRepository('33', '33024');
        expect(repo.getUri()).toContain('/provincias/33/municipios/33024');
    });
});