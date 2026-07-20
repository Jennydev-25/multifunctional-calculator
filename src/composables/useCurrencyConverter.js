import { ref } from 'vue';
import { convertAmount } from '../utils/convertAmount.js';
import CurrencyRepository from '@/core/apis/currency/CurrencyRepository';
import CurrencyService from '@/core/apis/currency/CurrencyService';

export function useCurrencyConverter() {
    const amount = ref('');
    const currencyFrom = ref('EUR');
    const currencyTo = ref('USD');
    const result = ref(null);
    const rateLabel = ref('');
    const isLoading = ref(false);
    const errorMessage = ref('');

    const service = new CurrencyService(new CurrencyRepository());

    async function convert() {
        errorMessage.value = '';

        if (!amount.value || isNaN(Number(amount.value))) {
            errorMessage.value = 'Introduce una cantidad valida';
            return;
        }

        isLoading.value = true;
        try {
            const fromRate = await service.getRate(currencyFrom.value);
            const toRate = await service.getRate(currencyTo.value);
            const converted = convertAmount(Number(amount.value), fromRate.getRate(), toRate.getRate());
            result.value = converted.toFixed(2);
            rateLabel.value = `1 ${currencyFrom.value} = ${(toRate.getRate() / fromRate.getRate()).toFixed(4)} ${currencyTo.value}`;
        } catch (error) {
            errorMessage.value = 'No se pudo obtener el tipo de cambio';
        } finally {
            isLoading.value = false;
        }
    }

    function swapCurrencies() {
        const temp = currencyFrom.value;
        currencyFrom.value = currencyTo.value;
        currencyTo.value = temp;
        convert();
    }

    return { amount, currencyFrom, currencyTo, result, rateLabel, isLoading, errorMessage, convert, swapCurrencies };
}