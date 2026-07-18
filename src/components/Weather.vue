<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <img class="weather__icon" src="" alt="" />

        <div class="weather__content">

            <div class="weather__header">
                <h2 id="weather-heading">El tiempo</h2>

                <div class="weather__selector">
                    <label for="location-select">Seleccionar</label>

                    <select id="location-select" name="location">
                        <optgroup label="Nacional">
                            <option value="nacional" selected>Resumen nacional</option>
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

            <p class="weather__temperature">27°</p>
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
                    <span class="weather__forecast-temp">29°/16°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Mar</span>
                    <span class="weather__forecast-temp">28°/14°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Mié</span>
                    <span class="weather__forecast-temp">30°/14°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Jue</span>
                    <span class="weather__forecast-temp">30°/14°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Vie</span>
                    <span class="weather__forecast-temp">27°/16°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Sáb</span>
                    <span class="weather__forecast-temp">27°/16°</span>
                </li>

                <li>
                    <span class="weather__forecast-day">Dom</span>
                    <span class="weather__forecast-temp">30°/18°</span>
                </li>
            </ul>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.weather {
    position: relative;
    overflow: hidden;
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
    padding: 16px;
}

/* NUEVO */

.weather__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
}

.weather__header h2 {
    font-family: var(--font-heading);
    font-size: 14px;
    font-weight: var(--fw-semibold);
    color: var(--color-text-muted);
    margin: 0;
}

.weather__selector {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    label {
        font-size: 12px;
        color: var(--color-text-muted);
        margin-bottom: 4px;
    }

    select {
        padding: 4px 8px;
        border-radius: 6px;
        border: 1px solid var(--color-secondary);
        background-color: var(--color-surface);
        font-family: var(--font-body);
        font-size: 13px;
    }
}

.weather__temperature {
    font-family: var(--font-body);
    font-size: 48px;
    font-weight: var(--fw-bold);
    color: var(--color-primary);
    line-height: 1;
    margin: 0 0 8px;
}

.weather__sky {
    font-family: var(--font-body);
    font-size: 14px;
    color: var(--color-text-muted);
    margin-bottom: 24px;
}

.weather__stats {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 24px;
    padding-top: 12px;
    border-top: 1px solid var(--color-secondary);
    margin-bottom: 16px;

    dt {
        font-size: 12px;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.03em;
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
    gap: 6px;

    list-style: none;

    margin: 0;
    padding: 12px 0 0;

    border-top: 1px solid var(--color-secondary);

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        flex: 1;
        padding: 6px 2px;
        border-radius: 6px;
        background-color: color-mix(in srgb,
                var(--color-surface) 60%,
                transparent);
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