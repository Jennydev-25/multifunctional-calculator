import Repository from "@/core/models/Repository";

export default class LocationsRepository extends Repository {

    constructor() {
        const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
        super(`${baseUrl}/general`);
    }

    getProvinciasUri() {
        const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
        return `${baseUrl}/provincias`;
    }

    getMunicipiosUri(codProv) {
        const baseUrl = import.meta.env.VITE_WEATHER_BASE_URL;
        return `${baseUrl}/provincias/${codProv}/municipios`;
    }

}