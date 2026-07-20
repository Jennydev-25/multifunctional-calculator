import { currencyMapper } from "@/core/mappers/currency-mapper"
import CurrencyModel from "@/core/models/CurrencyModel"

export default class CurrencyService {

    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getRate(currency) {
        const data = await this.#repo.getAxios()
        return CurrencyModel.createRate(data, currency, currencyMapper)
    }

}