import { locationsMapper } from "@/core/mappers/locations-mapper"

export default class LocationsService {

    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getNationalCities() {
        const data = await this.#repo.getAxios()
        return locationsMapper.nationalCities(data)
    }

    async getProvinces() {
        const uri = this.#repo.getProvinciasUri()
        const data = await this.#repo.getAxios(uri)
        return locationsMapper.provinces(data)
    }

    async getMunicipalities(codProv) {
        const uri = this.#repo.getMunicipiosUri(codProv)
        const data = await this.#repo.getAxios(uri)
        return locationsMapper.municipalities(data)
    }

}