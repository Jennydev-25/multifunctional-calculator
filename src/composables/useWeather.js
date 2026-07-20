import { ref } from 'vue';
import WeatherRepository from '@/core/apis/weather/WeatherRepository';
import WeatherService from '@/core/apis/weather/WeatherService';

const LOCATIONS = {
    'nacional:33044': { codProv: '33', codMunicipio: '33044' },
    'provincia:33': { codProv: '33', codMunicipio: '33044' },
    'municipio:33024': { codProv: '33', codMunicipio: '33024' },
}

export function useWeather() {
    const location = ref('municipio:33024');
    const skyDescription = ref('');
    const skyId = ref('');
    const temperature = ref('');
    const humidity = ref('');
    const wind = ref('');
    const forecast = ref([]);
    const isLoading = ref(false);
    const errorMessage = ref('');

    async function fetchWeather() {
        const selected = LOCATIONS[location.value];
        if (!selected) {
            errorMessage.value = 'Ubicación no valida';
            return;
        }

        isLoading.value = true;
        errorMessage.value = '';
        try {
            const repository = new WeatherRepository(selected.codProv, selected.codMunicipio);
            const service = new WeatherService(repository);
            const weather = await service.getWeather();

            skyDescription.value = weather.getSkyDescription() ?? 'Información no disponible';
            skyId.value = weather.getSkyId();
            temperature.value = weather.getTemperature() ?? '--';
            humidity.value = weather.getHumidity() ?? '--';
            wind.value = weather.getWind() ?? '--';
            forecast.value = weather.getForecast();
        } catch (error) {
            errorMessage.value = 'No se pudo obtener el tiempo';
        } finally {
            isLoading.value = false;
        }
    }

    function changeLocation(newLocation) {
        location.value = newLocation;
        fetchWeather();
    }

    return { location, skyDescription, skyId, temperature, humidity, wind, forecast, isLoading, errorMessage, fetchWeather, changeLocation };
}