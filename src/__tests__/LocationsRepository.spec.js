import { describe, test, expect } from 'vitest';
import LocationsRepository from '../core/repositories/LocationsRepository.js';

describe('LocationsRepository', () => {
    test('deberia construir la URL de ciudades nacionales', () => {
        const repo = new LocationsRepository();
        expect(repo.getUri()).toContain('/general');
    });

    test('deberia construir la URL de provincias', () => {
        const repo = new LocationsRepository();
        expect(repo.getProvinciasUri()).toContain('/provincias');
    });

    test('deberia construir la URL de municipios de una provincia', () => {
        const repo = new LocationsRepository();
        expect(repo.getMunicipiosUri('33')).toContain('/provincias/33/municipios');
    });
});