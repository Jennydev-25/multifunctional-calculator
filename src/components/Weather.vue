<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <div class="weather__hero">
            <img class="weather__icon" src="" alt="" />
            <div class="weather__hero-overlay"></div>

            <div class="weather__location">
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
                <span class="material-symbols-outlined weather__sky-icon" aria-hidden="true">cloud</span>
            </div>

            <p class="weather__temperature">27<span>°</span></p>
        </div>

        <div class="weather__content">
            <h2 id="weather-heading" class="sr-only">El tiempo</h2>
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
                    <span class="material-symbols-outlined weather__forecast-icon" aria-hidden="true">wb_sunny</span>
                    <span class="weather__forecast-temp">29°/16°</span>
                </li>
                <li>
                    <span class="weather__forecast-day">Mar</span>
                    <span class="material-symbols-outlined weather__forecast-icon"
                        aria-hidden="true">partly_cloudy_day</span>
                    <span class="weather__forecast-temp">28°/14°</span>
                </li>
                <li>
                    <span class="weather__forecast-day">Mié</span>
                    <span class="material-symbols-outlined weather__forecast-icon" aria-hidden="true">rainy</span>
                    <span class="weather__forecast-temp">30°/14°</span>
                </li>
                <li>
                    <span class="weather__forecast-day">Jue</span>
                    <span class="material-symbols-outlined weather__forecast-icon" aria-hidden="true">cloud</span>
                    <span class="weather__forecast-temp">30°/14°</span>
                </li>
                <li>
                    <span class="weather__forecast-day">Vie</span>
                    <span class="material-symbols-outlined weather__forecast-icon" aria-hidden="true">wb_sunny</span>
                    <span class="weather__forecast-temp">27°/16°</span>
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
    height: 160px;
    background: linear-gradient(to bottom, var(--color-primary-container), var(--color-surface));
}

.weather__icon {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.weather__hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--color-surface) 5%, transparent 60%);
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

.weather__forecast-icon {
    font-size: 18px;
    color: var(--color-primary);
}

.weather__forecast-temp {
    font-size: 11px;
    font-weight: var(--fw-semibold);
    color: var(--color-text);
    white-space: nowrap;
}
</style>