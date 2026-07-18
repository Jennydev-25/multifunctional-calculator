<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <img class="weather__icon" src="" alt="" />

        <div class="weather__content">

            <div class="weather__header">
                <h2 id="weather-heading">El tiempo</h2>

                <div class="weather__selector">
                    <label for="location-select" class="sr-only">Ubicación</label>
                    <select id="location-select" name="location">
                        <option value="" selected disabled>Ubicación</option>

                        <optgroup label="Nacional">
                            <option value="nacional:33044">Oviedo</option>
                        </optgroup>

                        <optgroup label="Provincia">
                            <option value="provincia:33">Asturias</option>
                        </optgroup>

                        <optgroup label="Municipio">
                            <option value="municipio:33024">Gijón</option>
                        </optgroup>
                    </select>
                </div>
            </div>

            <div class="weather__current">
                <p class="weather__temperature">27°</p>

                <span class="material-symbols-outlined weather__sky-icon" aria-hidden="true">
                    cloud
                </span>
            </div>

            <p class="weather__sky">Nuboso</p>

            <dl class="weather__stats">
                <dt>Humedad</dt>
                <dd>49%</dd>

                <dt>Viento</dt>
                <dd>21 km/h</dd>
            </dl>

            <ul class="weather__forecast">
                <li>
                    <span class="weather__forecast-day">Lun</span>
                    <span class="material-symbols-outlined weather__forecast-icon">sunny</span>
                    <span class="weather__forecast-temp">29°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Mar</span>
                    <span class="material-symbols-outlined weather__forecast-icon">partly_cloudy_day</span>
                    <span class="weather__forecast-temp">28°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Mié</span>
                    <span class="material-symbols-outlined weather__forecast-icon">rainy</span>
                    <span class="weather__forecast-temp">30°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Jue</span>
                    <span class="material-symbols-outlined weather__forecast-icon">cloud</span>
                    <span class="weather__forecast-temp">30°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Vie</span>
                    <span class="material-symbols-outlined weather__forecast-icon">sunny</span>
                    <span class="weather__forecast-temp">27°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Sáb</span>
                    <span class="material-symbols-outlined weather__forecast-icon">sunny</span>
                    <span class="weather__forecast-temp">27°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Dom</span>
                    <span class="material-symbols-outlined weather__forecast-icon">partly_cloudy_day</span>
                    <span class="weather__forecast-temp">30°</span>
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
    position: relative;
    overflow: hidden;
    display: flex;
    border: 1px solid var(--color-secondary);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    background: linear-gradient(to bottom,
            var(--color-primary-container),
            var(--color-surface));
}

.weather__icon {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

.weather__content {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 16px;
}

.weather__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}

.weather__header h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: var(--fw-semibold);
    color: var(--color-text-muted);
}

.weather__selector {
    select {
        padding: 4px 8px;
        border: 1px solid var(--color-secondary);
        border-radius: 6px;
        background: var(--color-surface);
        font-family: var(--font-body);
        font-size: 13px;
    }
}

.weather__current {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.weather__temperature {
    margin: 0;
    font-family: var(--font-body);
    font-size: 48px;
    font-weight: var(--fw-bold);
    line-height: 1;
    color: var(--color-primary);
}

.weather__sky-icon {
    font-size: 64px;
    color: var(--color-primary);

    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 48;
}

.weather__sky {
    margin: 0 0 10px;
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--color-text-muted);
}

.weather__stats {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 24px;

    padding: 10px 0;
    margin-bottom: 10px;

    border-top: 1px solid var(--color-secondary);

    dt {
        font-size: 12px;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: .03em;
    }

    dd {
        margin: 0;
        font-size: 15px;
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
    align-items: center;

    list-style: none;

    margin: 0;
    padding: 10px 0 0;

    border-top: 1px solid var(--color-secondary);
}

.weather__forecast li {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 6px;
}

.weather__forecast-day {
    font-size: 13px;
    font-weight: var(--fw-semibold);
    color: var(--color-text-muted);
}

.weather__forecast-icon {
    font-size: 30px;
    color: var(--color-primary);

    font-variation-settings:
        'FILL' 0,
        'wght' 300,
        'GRAD' 0,
        'opsz' 24;
}

.weather__forecast-temp {
    font-size: 16px;
    font-weight: var(--fw-bold);
    color: var(--color-text);
    white-space: nowrap;
}
</style>