import { describe, test, expect } from 'vitest';
import { locationsMapper } from '../core/mappers/locations-mapper.js';

describe('locationsMapper', () => {
    test('deberia mapear las ciudades nacionales', () => {
        const data = { ciudades: [{ id: { '0': '33044' }, idProvince: '33', name: 'Oviedo' }] };
        expect(locationsMapper.nationalCities(data)).toEqual([{ codMunicipio: '33044', codProv: '33', name: 'Oviedo' }]);
    });

    test('deberia devolver un array vacio si no hay ciudades', () => {
        expect(locationsMapper.nationalCities({})).toEqual([]);
    });

    test('deberia mapear las provincias', () => {
        const data = { provincias: [{ CODPROV: '33', NOMBRE_PROVINCIA: 'Asturias' }] };
        expect(locationsMapper.provinces(data)).toEqual([{ codProv: '33', name: 'Asturias' }]);
    });

    test('deberia devolver un array vacio si no hay provincias', () => {
        expect(locationsMapper.provinces({})).toEqual([]);
    });

    test('deberia mapear los municipios', () => {
        const data = { municipios: [{ CODPROV: '33', CODIGOINE: '33024000000', NOMBRE: 'Gijón' }] };
        expect(locationsMapper.municipalities(data)).toEqual([{ codProv: '33', codMunicipio: '33024', name: 'Gijón' }]);
    });

    test('deberia devolver un array vacio si no hay municipios', () => {
        expect(locationsMapper.municipalities({})).toEqual([]);
    });
});