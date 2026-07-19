import { ref } from 'vue';

export function useCalculator() {
    const display = ref('0');

    function inputDigit(digit) {
        display.value = display.value === '0' ? digit : display.value + digit;
    }

    function inputDecimal() {
        display.value = display.value + '.';
    }

    return { display, inputDigit, inputDecimal };
}