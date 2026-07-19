import { ref } from 'vue';
import { operate } from '../utils/operate.js';

export function useCalculator() {
    const display = ref('0');
    const previousValue = ref(null);
    const operator = ref(null);
    const waitingForOperand = ref(false);

    function inputDigit(digit) {
        if (waitingForOperand.value) {
            display.value = digit;
            waitingForOperand.value = false;
            return;
        }
        display.value = display.value === '0' ? digit : display.value + digit;
    }

    function inputDecimal() {
        if (!display.value.includes('.')) {
            display.value = display.value + '.';
        }
    }

    function inputOperator(nextOperator) {
        if (waitingForOperand.value) {
            operator.value = nextOperator;
            return;
        }
        if (previousValue.value !== null && operator.value !== null) {
            calculate();
        }
        previousValue.value = display.value;
        operator.value = nextOperator;
        waitingForOperand.value = true;
    }

    function calculate() {
        const a = Number(previousValue.value);
        const b = Number(display.value);
        const result = operate(a, b, operator.value);
        display.value = String(result);
    }

    function clear() {
        display.value = '0';
        previousValue.value = null;
        operator.value = null;
        waitingForOperand.value = false;
    }

    return { display, previousValue, operator, inputDigit, inputDecimal, inputOperator, calculate, clear };
}