<script setup>
import { useWeather } from '@/composables/useWeather.js'
import { skyIdToImage } from '@/utils/skyIdToImage.js'

const {
    location, skyDescription, skyId, temperature, humidity, wind, forecast,
    isLoading, errorMessage, nationalCities, provinces, municipalities,
    changeLocation, changeProvinceForMunicipalities,
} = useWeather()

function handleLocationChange() {
    changeLocation(location.value)
}
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <div class="weather__hero">
            <img class="weather__icon" :src="skyIdToImage(skyId)" alt="" />

            <div class="weather__location">
                <label for="location-select" class="sr-only">Ubicación</label>
                <select id="location-select" name="location" v-model="location" @change="handleLocationChange">
                    <optgroup label="Nacional">
                        <option v-for="city in nationalCities" :key="city.codMunicipio"
                            :value="`nacional:${city.codProv}:${city.codMunicipio}`">
                            {{ city.name }}
                        </option>
                    </optgroup>
                    <optgroup label="Provincia">
                        <option v-for="province in provinces" :key="province.codProv"
                            :value="`provincia:${province.codProv}:33044`">
                            {{ province.name }}
                        </option>
                    </optgroup>
                    <optgroup label="Municipio">
                        <option v-for="municipio in municipalities" :key="municipio.codMunicipio"
                            :value="`municipio:${municipio.codProv}:${municipio.codMunicipio}`">
                            {{ municipio.name }}
                        </option>
                    </optgroup>
                </select>
                <span class="material-symbols-outlined weather__sky-icon" aria-hidden="true">cloud</span>
            </div>

            <p class="weather__temperature" v-if="!isLoading">{{ temperature }}<span>°</span></p>
            <p class="weather__temperature" v-else>...</p>
        </div>

        <div class="weather__content">
            <h2 id="weather-heading" class="sr-only">El tiempo</h2>
            <p class="weather__sky">{{ errorMessage || skyDescription }}</p>

            <dl class="weather__stats">
                <dt>Humedad</dt>
                <dd>{{ humidity }}%</dd>
                <dt>Viento</dt>
                <dd>{{ wind }} km/h</dd>
            </dl>

            <ul class="weather__forecast">
                <li v-for="day in forecast" :key="day.date">
                    <span class="weather__forecast-day">{{ day.date }}</span>
                    <span class="weather__forecast-temp">{{ day.max }}°/{{ day.min }}°</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.weather {
    background-color: var(--color-surface);
    border: 1px solid var(--color-secondary);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    overflow: hidden;
}

.weather__hero {
    position: relative;
    height: 200px;
}

.weather__icon {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.weather__location {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    select {
        max-width: 60%;
        padding: 4px 10px;
        border-radius: var(--radius-full);
        border: 1px solid var(--color-secondary);
        background-color: color-mix(in srgb, var(--color-surface) 85%, transparent);
        font-family: var(--font-body);
        font-size: 12px;
        font-weight: var(--fw-semibold);
    }
}

.weather__sky-icon {
    font-size: 28px;
    color: var(--color-primary);
    background-color: color-mix(in srgb, var(--color-surface) 70%, transparent);
    border-radius: var(--radius-full);
    padding: 4px;
}

.weather__temperature {
    position: absolute;
    bottom: 8px;
    left: 16px;
    z-index: 1;
    font-family: var(--font-body);
    font-size: 44px;
    font-weight: var(--fw-bold);
    color: var(--color-primary);
    line-height: 1;
    margin: 0;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.8);

    span {
        font-size: 24px;
    }
}

.weather__content {
    padding: 16px;
}

.weather__sky {
    font-family: var(--font-body);
    font-size: 13px;
    color: var(--color-text-muted);
    margin: 0 0 12px;
}

.weather__stats {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-secondary);
    margin-bottom: 12px;

    dt {
        font-size: 11px;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    dd {
        margin: 0;
        font-size: 14px;
        font-weight: var(--fw-semibold);
        color: var(--color-text);
    }

    dt:nth-of-type(1) {
        grid-column: 1;
        grid-row: 1;
    }

    dd:nth-of-type(1) {
        grid-column: 1;
        grid-row: 2;
    }

    dt:nth-of-type(2) {
        grid-column: 2;
        grid-row: 1;
    }

    dd:nth-of-type(2) {
        grid-column: 2;
        grid-row: 2;
    }
}

.weather__forecast {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        flex: 1;
        padding: 8px 2px;
        border-radius: 6px;
        background-color: color-mix(in srgb, var(--color-surface-warm) 60%, transparent);
    }
}

.weather__forecast-day {
    font-size: 10px;
    font-weight: var(--fw-semibold);
    color: var(--color-text-muted);
}

.weather__forecast-temp {
    font-size: 11px;
    font-weight: var(--fw-semibold);
    color: var(--color-text);
    white-space: nowrap;
}
</style>