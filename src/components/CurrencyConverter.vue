<script setup>
import { useCurrencyConverter } from '@/composables/useCurrencyConverter.js'

const { amount, currencyFrom, currencyTo, result, rateLabel, isLoading, errorMessage, convert, swapCurrencies } = useCurrencyConverter()
</script>

<template>
    <section class="currency-converter" aria-labelledby="currency-converter-heading">
        <h3 id="currency-converter-heading">Conversor de divisas</h3>

        <form class="currency-converter__body" @submit.prevent="convert">
            <div class="currency-converter__amount">
                <label for="amount-from">Cantidad</label>
                <input type="number" id="amount-from" name="amount-from" min="0" v-model="amount" @input="convert" />
            </div>

            <div class="currency-converter__pair">
                <span class="currency-converter__pair-label">Convertir a</span>

                <label for="currency-from" class="sr-only">Divisa de origen</label>
                <select id="currency-from" name="currency-from" v-model="currencyFrom" @change="convert">
                    <option value="USD">USD · Dólar</option>
                    <option value="EUR">EUR · Euro</option>
                    <option value="JPY">JPY · Yen</option>
                </select>

                <button type="button" id="btn-swap-currencies" aria-label="Intercambiar divisas"
                    @click="swapCurrencies">⇄</button>

                <label for="currency-to" class="sr-only">Convertir a</label>
                <select id="currency-to" name="currency-to" v-model="currencyTo" @change="convert">
                    <option value="EUR">EUR · Euro</option>
                    <option value="USD">USD · Dólar</option>
                    <option value="JPY">JPY · Yen</option>
                </select>
            </div>

            <output class="currency-converter__result" aria-live="polite">
                <span class="currency-converter__result-label">
                    {{ isLoading ? 'Calculando...' : (errorMessage || 'Resultado estimado') }}
                </span>
                <span class="currency-converter__result-value">{{ result ?? '0.00' }} <span>{{ currencyTo
                        }}</span></span>
                <span class="currency-converter__result-rate" v-if="rateLabel">{{ rateLabel }}</span>
            </output>
        </form>
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

.currency-converter {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-secondary);

    h3 {
        font-family: var(--font-heading);
        font-size: 12px;
        font-weight: var(--fw-semibold);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
        margin-bottom: 12px;
    }
}

.currency-converter__body {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.currency-converter__amount {
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-sizing: border-box;
    background-color: var(--color-bg);
    border-radius: var(--radius-button);
    box-shadow: var(--shadow-interactive);
    padding: 12px;

    label {
        font-size: 10px;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        border: none;
        background: none;
        padding: 0;
        font-family: 'Courier New', monospace;
        font-size: 22px;
        font-weight: var(--fw-bold);
        color: var(--color-text);
        appearance: textfield;
        -moz-appearance: textfield;

        &:focus {
            outline: none;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }
}

.currency-converter__pair {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    select {
        box-sizing: border-box;
        flex: 1;
        padding: 8px 10px;
        border: 1px solid var(--color-secondary);
        border-radius: 8px;
        background-color: var(--color-surface-warm);
        font-family: var(--font-body);
        font-size: 12px;
        font-weight: var(--fw-semibold);
        color: var(--color-text);
    }
}

.currency-converter__pair-label {
    display: none;
}

#btn-swap-currencies {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: none;
    border-radius: var(--radius-full);
    background-color: var(--color-tertiary-container);
    color: var(--color-text-on-primary);
    font-size: 13px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
        filter: brightness(0.97);
    }

    &:active {
        transform: scale(0.9) rotate(180deg);
    }
}

.currency-converter__result {
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-sizing: border-box;
    background-color: color-mix(in srgb, var(--color-primary) 15%, transparent);
    border-radius: var(--radius-button);
    padding: 12px;
}

.currency-converter__result-label {
    font-size: 10px;
    font-weight: var(--fw-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
}

.currency-converter__result-value {
    font-family: 'Courier New', monospace;
    font-size: 20px;
    font-weight: var(--fw-bold);
    color: var(--color-primary);

    span {
        font-size: 12px;
        font-weight: var(--fw-normal);
        opacity: 0.7;
    }
}

.currency-converter__result-rate {
    font-size: 11px;
    color: var(--color-text-muted);
}
</style>