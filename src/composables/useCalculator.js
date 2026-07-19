import { ref } from 'vue';

export function useCalculator() {
    const display = ref('0');
    const previousValue = ref(null);
    const operator = ref(null);

    function inputDigit(digit) {
        display.value = display.value === '0' ? digit : display.value + digit;
    }

    function inputDecimal() {
        if (!display.value.includes('.')) {
            display.value = display.value + '.';
        }
    }

    function inputOperator(nextOperator) {
        previousValue.value = display.value;
        operator.value = nextOperator;
    }

    return { display, previousValue, operator, inputDigit, inputDecimal, inputOperator };
}