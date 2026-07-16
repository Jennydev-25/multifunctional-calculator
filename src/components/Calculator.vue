<script setup>
</script>

<template>
    <section class="calculator" aria-labelledby="calculator-heading">
        <h2 id="calculator-heading">Calculadora</h2>

        <output class="calculator__display" aria-live="polite">0</output>

        <div class="calculator__keys" role="group" aria-label="Teclado de la calculadora">
            <button type="button" id="btn-ce">CE</button>
            <button type="button" id="btn-divide" aria-label="Dividir">÷</button>

            <button type="button" id="btn-7">7</button>
            <button type="button" id="btn-8">8</button>
            <button type="button" id="btn-9">9</button>
            <button type="button" id="btn-multiply" aria-label="Multiplicar">×</button>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>