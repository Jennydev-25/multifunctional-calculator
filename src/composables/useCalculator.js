import { ref } from 'vue';
import { operate } from '../utils/operate.js';

const MAX_DISPLAY_LENGTH = 12;

export function useCalculator() {
    const display = ref('0');
    const previousValue = ref(null);
    const operator = ref(null);
    const waitingForOperand = ref(false);
    const hasInput = ref(false);

    function inputDigit(digit) {
        hasInput.value = true;
        if (waitingForOperand.value) {
            display.value = digit;
            waitingForOperand.value = false;
            return;
        }
        if (display.value.length >= MAX_DISPLAY_LENGTH) {
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
        if (!hasInput.value) {
            return;
        }
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
        if (waitingForOperand.value) {
            return;
        }
        const a = Number(previousValue.value);
        const b = Number(display.value);
        const result = operate(a, b, operator.value);
        display.value = Number.isFinite(result) ? String(result) : 'Error';
    }

    function clear() {
        display.value = '0';
        previousValue.value = null;
        operator.value = null;
        waitingForOperand.value = false;
        hasInput.value = false;
    }

    return { display, previousValue, operator, inputDigit, inputDecimal, inputOperator, calculate, clear };
}