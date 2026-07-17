<script setup>
</script>

<template>
    <section class="currency-converter" aria-labelledby="currency-converter-heading">
        <h2 id="currency-converter-heading">Conversor de divisas</h2>

        <form>
            <div class="currency-converter__field">
                <label for="amount-from">Cantidad</label>
                <input type="number" id="amount-from" name="amount-from" min="0" />

                <label for="currency-from">Divisa de origen</label>
                <select id="currency-from" name="currency-from">
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">Dólar ($)</option>
                    <option value="JPY">Yen (¥)</option>
                </select>
            </div>

            <button type="button" id="btn-swap-currencies" aria-label="Intercambiar divisas">⇄</button>

            <div class="currency-converter__field">
                <label for="currency-to">Divisa de destino</label>
                <select id="currency-to" name="currency-to">
                    <option value="EUR">Euro (€)</option>
                    <option value="USD">Dólar ($)</option>
                    <option value="JPY">Yen (¥)</option>
                </select>
            </div>
        </form>

        <output class="currency-converter__result" aria-live="polite">0</output>
    </section>
</template>

<style lang="scss" scoped></style>