import Repository from "@/core/models/Repository";

export default class WeatherRepository extends Repository {

    constructor(codProv, codMunicipio) {
        const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
        super(`${baseUrl}/provincias/${codProv}/municipios/${codMunicipio}`);
    }

}