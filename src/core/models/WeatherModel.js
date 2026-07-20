export default class WeatherModel {

    constructor(skyDescription, skyId, temperature, humidity, wind, forecast) {
        this.skyDescription = skyDescription
        this.skyId = skyId
        this.temperature = temperature
        this.humidity = humidity
        this.wind = wind
        this.forecast = forecast
    }

    getSkyDescription() {
        return this.skyDescription
    }

    getSkyId() {
        return this.skyId
    }

    getTemperature() {
        return this.temperature
    }

    getHumidity() {
        return this.humidity
    }

    getWind() {
        return this.wind
    }

    getForecast() {
        return this.forecast
    }

    static createWeather(data, mapper) {
        return new WeatherModel(
            mapper.skyDescription(data),
            mapper.skyId(data),
            mapper.temperature(data),
            mapper.humidity(data),
            mapper.wind(data),
            mapper.forecast(data)
        )
    }

}