<script setup>
</script>

<template>
    <section class="weather" aria-labelledby="weather-heading">
        <h2 id="weather-heading">El tiempo</h2>

        <label for="scope-select">Seleccionar</label>
        <select id="scope-select" name="scope">
            <option value="nacional">Nacional</option>
            <option value="provincia">Provincia</option>
            <option value="municipio" selected>Municipio</option>
        </select>

        <label for="province-select">Provincia</label>
        <select id="province-select" name="province">
            <option value="33" selected>Asturias</option>
        </select>

        <label for="municipality-select">Municipio</label>
        <select id="municipality-select" name="municipality">
            <option value="33044" selected>Oviedo</option>
        </select>
    </section>
</template>

<style lang="scss" scoped></style>