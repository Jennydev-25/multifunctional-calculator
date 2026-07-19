import { ref } from 'vue';

export function useCalculator() {
    const display = ref('0');

    function inputDigit(digit) {
        display.value = display.value === '0' ? digit : display.value + digit;
    }

    return { display, inputDigit };
}