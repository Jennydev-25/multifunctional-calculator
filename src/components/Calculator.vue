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
            <button type="button" id="btn-4">4</button>
            <button type="button" id="btn-5">5</button>
            <button type="button" id="btn-6">6</button>
            <button type="button" id="btn-subtract" aria-label="Restar">-</button>
            <button type="button" id="btn-1">1</button>
            <button type="button" id="btn-2">2</button>
            <button type="button" id="btn-3">3</button>
            <button type="button" id="btn-add" aria-label="Sumar">+</button>
            <button type="button" id="btn-0">0</button>
            <button type="button" id="btn-decimal" aria-label="Punto decimal">.</button>
            <button type="button" id="btn-equals" aria-label="Igual">=</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.calculator {
    background-color: var(--color-surface-warm);
    border-radius: var(--radius-card);
    box-shadow: var(--shadow-card);
    padding: var(--sp-sm);

    h2 {
        font-family: var(--font-heading);
        font-size: var(--fs-xl);
        margin-bottom: var(--sp-sm);
    }
}

.calculator__display {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: color-mix(in srgb, var(--color-display) 85%, var(--color-primary) 15%);
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: var(--radius-button);
    padding: var(--sp-sm);
    margin-bottom: var(--sp-sm);
    font-family: 'Courier New', monospace;
    font-size: var(--fs-2xl);
    font-weight: var(--fw-semibold);
    text-align: right;
    color: var(--color-text);
}

@media (min-width: 768px) {
    .calculator {
        padding: var(--sp-lg);
    }
}
</style>