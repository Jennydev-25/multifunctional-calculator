import { weatherMapper } from "@/core/mappers/weather-mapper"
import WeatherModel from "@/core/models/WeatherModel"

export default class WeatherService {

    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getWeather() {
        const data = await this.#repo.getAxios()
        return WeatherModel.createWeather(data, weatherMapper)
    }

}