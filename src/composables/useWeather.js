import { ref, onMounted } from 'vue';
import WeatherRepository from '@/core/apis/weather/WeatherRepository';
import WeatherService from '@/core/apis/weather/WeatherService';
import LocationsRepository from '@/core/apis/weather/LocationsRepository';
import LocationsService from '@/core/apis/weather/LocationsService';

export function useWeather() {
    const location = ref('municipio:33:33024');
    const skyDescription = ref('');
    const skyId = ref('');
    const temperature = ref('');
    const humidity = ref('');
    const wind = ref('');
    const forecast = ref([]);
    const isLoading = ref(false);
    const errorMessage = ref('');

    const nationalCities = ref([]);
    const provinces = ref([]);
    const municipalities = ref([]);
    const isLoadingLocations = ref(false);

    async function loadLocations() {
        isLoadingLocations.value = true;
        try {
            const locationsRepo = new LocationsRepository();
            const locationsService = new LocationsService(locationsRepo);
            nationalCities.value = await locationsService.getNationalCities();
            provinces.value = await locationsService.getProvinces();
            municipalities.value = await locationsService.getMunicipalities('33');
        } catch (error) {
            errorMessage.value = 'No se pudieron cargar las ubicaciones';
        } finally {
            isLoadingLocations.value = false;
        }
    }

    async function loadMunicipalities(codProv) {
        try {
            const locationsRepo = new LocationsRepository();
            const locationsService = new LocationsService(locationsRepo);
            municipalities.value = await locationsService.getMunicipalities(codProv);
        } catch (error) {
            errorMessage.value = 'No se pudieron cargar los municipios';
        }
    }

    async function fetchWeather() {
        const [, codProv, codMunicipio] = location.value.split(':');
        if (!codProv || !codMunicipio) {
            errorMessage.value = 'Ubicación no valida';
            return;
        }

        isLoading.value = true;
        errorMessage.value = '';
        try {
            const repository = new WeatherRepository(codProv, codMunicipio);
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

    function changeProvinceForMunicipalities(codProv) {
        loadMunicipalities(codProv);
    }

    onMounted(() => {
        loadLocations();
        fetchWeather();
    });

    return {
        location, skyDescription, skyId, temperature, humidity, wind, forecast,
        isLoading, errorMessage, nationalCities, provinces, municipalities,
        isLoadingLocations, fetchWeather, changeLocation, changeProvinceForMunicipalities,
    };
}