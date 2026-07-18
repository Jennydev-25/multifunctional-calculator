<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <img class="weather__icon" src="" alt="" />

        <div class="weather__content">
            <h2 id="weather-heading">El tiempo</h2>

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

            <p class="weather__temperature"></p>
            <p class="weather__humidity"></p>
            <p class="weather__wind"></p>
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
    background: linear-gradient(to bottom, var(--color-primary-container), var(--color-surface));
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

    h2 {
        font-family: var(--font-heading);
        font-size: 14px;
        font-weight: var(--fw-semibold);
        color: var(--color-text-muted);
        margin-bottom: 8px;
    }
}
</style>