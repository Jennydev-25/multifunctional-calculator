export const locationsMapper = {
    nationalCities: (data) => data.ciudades?.map((city) => ({
        codMunicipio: city.id?.['0'],
        codProv: city.idProvince,
        name: city.name,
    })) ?? [],
    provinces: (data) => data.provincias?.map((province) => ({
        codProv: province.CODPROV,
        name: province.NOMBRE_PROVINCIA,
    })) ?? [],
    municipalities: (data) => data.municipios?.map((municipio) => ({
        codProv: municipio.CODPROV,
        codMunicipio: municipio.CODIGOINE?.substring(0, 5),
        name: municipio.NOMBRE,
    })) ?? [],
}