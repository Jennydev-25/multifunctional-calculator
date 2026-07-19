<script setup>
import { useCalculator } from '@/composables/useCalculator.js'

const { display, inputDigit, inputDecimal, inputOperator, calculate, clear } = useCalculator()
</script>

<template>
    <section class="calculator" aria-labelledby="calculator-heading">
        <h2 id="calculator-heading">Calculadora</h2>

        <output class="calculator__display" aria-live="polite">{{ display }}</output>

        <div class="calculator__keys" role="group" aria-label="Teclado de la calculadora">
            <button type="button" id="btn-ce" @click="clear">CE</button>
            <button type="button" id="btn-divide" aria-label="Dividir" @click="inputOperator('/')">÷</button>

            <button type="button" id="btn-7" @click="inputDigit('7')">7</button>
            <button type="button" id="btn-8" @click="inputDigit('8')">8</button>
            <button type="button" id="btn-9" @click="inputDigit('9')">9</button>
            <button type="button" id="btn-multiply" aria-label="Multiplicar" @click="inputOperator('*')">×</button>

            <button type="button" id="btn-4" @click="inputDigit('4')">4</button>
            <button type="button" id="btn-5" @click="inputDigit('5')">5</button>
            <button type="button" id="btn-6" @click="inputDigit('6')">6</button>
            <button type="button" id="btn-subtract" aria-label="Restar" @click="inputOperator('-')">-</button>

            <button type="button" id="btn-1" @click="inputDigit('1')">1</button>
            <button type="button" id="btn-2" @click="inputDigit('2')">2</button>
            <button type="button" id="btn-3" @click="inputDigit('3')">3</button>
            <button type="button" id="btn-add" aria-label="Sumar" @click="inputOperator('+')">+</button>
            <button type="button" id="btn-0" @click="inputDigit('0')">0</button>
            <button type="button" id="btn-decimal" aria-label="Punto decimal" @click="inputDecimal">.</button>
            <button type="button" id="btn-equals" aria-label="Igual" @click="calculate">=</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.calculator {
    box-sizing: border-box;
    background-color: var(--color-surface-warm);
    border: 1px solid var(--color-secondary);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    padding: 16px;
    width: 326px;

    h2 {
        font-family: var(--font-heading);
        font-size: 14px;
        font-weight: var(--fw-semibold);
        color: var(--color-text-muted);
        margin-bottom: 8px;
    }
}

.calculator__display {
    display: block;
    width: 100%;
    box-sizing: border-box;
    min-height: 70px;
    background-color: color-mix(in srgb, var(--color-display) 85%, var(--color-primary) 15%);
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: var(--fw-semibold);
    text-align: right;
    color: var(--color-text);
}

.calculator__keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        'ce      .        .      divide'
        'seven   eight    nine   multiply'
        'four    five     six    subtract'
        'one     two      three  add'
        'zero    decimal  equals equals';
    gap: 6px;

    button {
        box-sizing: border-box;
        width: 100%;
        border: none;
        border-radius: 8px;
        background-color: var(--color-surface);
        box-shadow: var(--shadow-interactive);
        padding: 8px 0;
        font-family: var(--font-body);
        font-size: 18px;
        font-weight: var(--fw-semibold);
        color: var(--color-text);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
            filter: brightness(0.97);
        }

        &:active {
            transform: scale(0.96);
            box-shadow: none;
        }
    }

    #btn-ce {
        grid-area: ce;
        font-size: 14px;
    }

    #btn-divide {
        grid-area: divide;
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
    }

    #btn-7 {
        grid-area: seven;
    }

    #btn-8 {
        grid-area: eight;
    }

    #btn-9 {
        grid-area: nine;
    }

    #btn-multiply {
        grid-area: multiply;
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
    }

    #btn-4 {
        grid-area: four;
    }

    #btn-5 {
        grid-area: five;
    }

    #btn-6 {
        grid-area: six;
    }

    #btn-subtract {
        grid-area: subtract;
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
    }

    #btn-1 {
        grid-area: one;
    }

    #btn-2 {
        grid-area: two;
    }

    #btn-3 {
        grid-area: three;
    }

    #btn-add {
        grid-area: add;
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
    }

    #btn-0 {
        grid-area: zero;
    }

    #btn-decimal {
        grid-area: decimal;
    }

    #btn-equals {
        grid-area: equals;
        background-color: var(--color-tertiary-container);
        color: var(--color-text-on-primary);
    }
}
</style>