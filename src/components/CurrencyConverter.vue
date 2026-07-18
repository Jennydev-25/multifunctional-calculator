<script setup>
</script>

<template>
    <section class="currency-converter" aria-labelledby="currency-converter-heading">
        <h2 id="currency-converter-heading">Conversor de divisas</h2>

        <form class="currency-converter__body">
            <div class="currency-converter__amount">
                <label for="amount-from">Cantidad</label>
                <input type="number" id="amount-from" name="amount-from" min="0" value="1000" />
            </div>

            <div class="currency-converter__pair">
                <span class="currency-converter__pair-label">Convertir a</span>

                <label for="currency-from" class="sr-only">Divisa de origen</label>
                <select id="currency-from" name="currency-from">
                    <option value="USD" selected>USD · Dólar</option>
                    <option value="EUR">EUR · Euro</option>
                    <option value="JPY">JPY · Yen</option>
                </select>

                <button type="button" id="btn-swap-currencies" aria-label="Intercambiar divisas">⇄</button>

                <label for="currency-to" class="sr-only">Convertir a</label>
                <select id="currency-to" name="currency-to">
                    <option value="EUR" selected>EUR · Euro</option>
                    <option value="USD">USD · Dólar</option>
                    <option value="JPY">JPY · Yen</option>
                </select>
            </div>

            <output class="currency-converter__result" aria-live="polite">
                <span class="currency-converter__result-label">Resultado estimado</span>
                <span class="currency-converter__result-value">924.50 <span>EUR</span></span>
                <span class="currency-converter__result-rate">1 USD = 0.9245 EUR</span>
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
    background-color: var(--color-surface);
    border: 1px solid var(--color-secondary);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    padding: 16px;

    h2 {
        font-family: var(--font-heading);
        font-size: 14px;
        font-weight: var(--fw-semibold);
        color: var(--color-text-muted);
        margin-bottom: 12px;
    }
}

.currency-converter__body {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.currency-converter__amount {
    display: flex;
    flex-direction: column;
    gap: 6px;
    box-sizing: border-box;
    background-color: var(--color-bg);
    border-radius: var(--radius-button);
    box-shadow: var(--shadow-interactive);
    padding: 16px;

    label {
        font-size: 11px;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    input {
        box-sizing: border-box;
        width: 100%;
        flex: 1;
        border: none;
        background: none;
        padding: 0;
        font-family: 'Courier New', monospace;
        font-size: 32px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

    select {
        box-sizing: border-box;
        width: 100%;
        padding: 8px 10px;
        border: 1px solid var(--color-secondary);
        border-radius: 8px;
        background-color: var(--color-surface-warm);
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: var(--fw-semibold);
        color: var(--color-text);
    }
}

.currency-converter__pair-label {
    align-self: flex-start;
    font-size: 11px;
    color: var(--color-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin-bottom: 2px;
}

#btn-swap-currencies {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border: none;
    border-radius: var(--radius-full);
    background-color: var(--color-tertiary-container);
    color: var(--color-text-on-primary);
    font-size: 14px;
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
    justify-content: center;
    gap: 4px;
    box-sizing: border-box;
    background-color: var(--color-primary);
    border-radius: var(--radius-button);
    padding: 16px;
}

.currency-converter__result-label {
    font-size: 11px;
    font-weight: var(--fw-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: color-mix(in srgb, var(--color-text-on-primary) 70%, transparent);
}

.currency-converter__result-value {
    font-family: 'Courier New', monospace;
    font-size: 32px;
    font-weight: var(--fw-bold);
    color: var(--color-text-on-primary);

    span {
        font-size: 16px;
        font-weight: var(--fw-normal);
        color: color-mix(in srgb, var(--color-text-on-primary) 80%, transparent);
    }
}

.currency-converter__result-rate {
    font-size: 12px;
    color: color-mix(in srgb, var(--color-text-on-primary) 70%, transparent);
}

@media (min-width: 768px) {
    .currency-converter__body {
        flex-direction: row;
        align-items: stretch;
        gap: 20px;
    }

    .currency-converter__amount {
        flex: 1;
    }

    .currency-converter__pair {
        flex: 0 0 200px;
    }

    .currency-converter__result {
        flex: 1;
    }
}
</style>