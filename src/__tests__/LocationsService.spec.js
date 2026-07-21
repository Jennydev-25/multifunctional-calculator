import { describe, test, expect, vi } from 'vitest';
import LocationsService from '../core/services/LocationsService.js';

describe('LocationsService', () => {
    test('deberia devolver las ciudades nacionales mapeadas', async () => {
        const fakeRepo = {
            getAxios: vi.fn().mockResolvedValue({
                ciudades: [{ id: { '0': '33044' }, idProvince: '33', name: 'Oviedo' }],
            }),
        };
        const service = new LocationsService(fakeRepo);
        const cities = await service.getNationalCities();

        expect(cities).toEqual([{ codMunicipio: '33044', codProv: '33', name: 'Oviedo' }]);
    });

    test('deberia devolver las provincias mapeadas', async () => {
        const fakeRepo = {
            getProvinciasUri: vi.fn().mockReturnValue('fake-uri'),
            getAxios: vi.fn().mockResolvedValue({
                provincias: [{ CODPROV: '33', NOMBRE_PROVINCIA: 'Asturias' }],
            }),
        };
        const service = new LocationsService(fakeRepo);
        const provinces = await service.getProvinces();

        expect(provinces).toEqual([{ codProv: '33', name: 'Asturias' }]);
    });

    test('deberia devolver los municipios mapeados', async () => {
        const fakeRepo = {
            getMunicipiosUri: vi.fn().mockReturnValue('fake-uri'),
            getAxios: vi.fn().mockResolvedValue({
                municipios: [{ CODPROV: '33', CODIGOINE: '33024000000', NOMBRE: 'Gijón' }],
            }),
        };
        const service = new LocationsService(fakeRepo);
        const municipalities = await service.getMunicipalities('33');

        expect(municipalities).toEqual([{ codProv: '33', codMunicipio: '33024', name: 'Gijón' }]);
    });
});