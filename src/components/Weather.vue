<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
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

        <img class="weather__icon" src="" alt="" />

        <p class="weather__temperature"></p>
        <p class="weather__humidity"></p>
        <p class="weather__wind"></p>
    </section>
</template>

<style lang="scss" scoped></style>