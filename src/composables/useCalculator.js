import { ref } from 'vue';

export function useCalculator() {
    const display = ref('0');

    function inputDigit(digit) {
        if (display.value === '0') {
            display.value = digit;
        } else {
            display.value = display.value + digit;
        }
    }

    return { display, inputDigit };
}