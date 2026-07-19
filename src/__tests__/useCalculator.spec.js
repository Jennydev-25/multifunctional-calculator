import { describe, test, expect } from 'vitest';
import { useCalculator } from '../composables/useCalculator.js';

describe('useCalculator', () => {
    test('deberia empezar con el display en 0', () => {
        const { display } = useCalculator();
        expect(display.value).toBe('0');
    });

    test('deberia mostrar el digito pulsado cuando el display esta en 0', () => {
        const { display, inputDigit } = useCalculator();
        inputDigit('5');
        expect(display.value).toBe('5');
    });

    test('deberia concatenar digitos si el display ya tiene un numero', () => {
        const { display, inputDigit } = useCalculator();
        inputDigit('1');
        inputDigit('2');
        expect(display.value).toBe('12');
    });

    test('deberia añadir un punto decimal al display', () => {
        const { display, inputDigit, inputDecimal } = useCalculator();
        inputDigit('5');
        inputDecimal();
        expect(display.value).toBe('5.');
    });

    test('no deberia añadir un segundo punto decimal', () => {
        const { display, inputDigit, inputDecimal } = useCalculator();
        inputDigit('5');
        inputDecimal();
        inputDecimal();
        expect(display.value).toBe('5.');
    });

    test('deberia guardar el valor anterior y el operador al pulsar un operador', () => {
        const { previousValue, operator, inputDigit, inputOperator } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        expect(previousValue.value).toBe('5');
        expect(operator.value).toBe('+');
    });

    test('deberia calcular una suma al pulsar igual', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        inputDigit('3');
        calculate();
        expect(display.value).toBe('8');
    });

    test('deberia calcular una resta al pulsar igual', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('9');
        inputOperator('-');
        inputDigit('4');
        calculate();
        expect(display.value).toBe('5');
    });

    test('deberia calcular una multiplicacion al pulsar igual', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('6');
        inputOperator('*');
        inputDigit('7');
        calculate();
        expect(display.value).toBe('42');
    });

    test('deberia calcular una division al pulsar igual', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('8');
        inputOperator('/');
        inputDigit('2');
        calculate();
        expect(display.value).toBe('4');
    });

    test('deberia mostrar Error al dividir entre cero', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('5');
        inputOperator('/');
        inputDigit('0');
        calculate();
        expect(display.value).toBe('Error');
    });

    test('deberia encadenar operaciones sin pulsar igual', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        inputDigit('3');
        inputOperator('-');
        inputDigit('2');
        calculate();
        expect(display.value).toBe('6');
    });

    test('deberia resetear la calculadora al pulsar CE', () => {
        const { display, previousValue, operator, inputDigit, inputOperator, clear } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        inputDigit('3');
        clear();
        expect(display.value).toBe('0');
        expect(previousValue.value).toBe(null);
        expect(operator.value).toBe(null);
    });

    test('no deberia mostrar ceros a la izquierda', () => {
        const { display, inputDigit } = useCalculator();
        inputDigit('0');
        inputDigit('0');
        inputDigit('5');
        expect(display.value).toBe('5');
    });

    test('deberia reemplazar el operador sin alterar el valor si se pulsan dos seguidos', () => {
        const { previousValue, operator, inputDigit, inputOperator } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        inputOperator('-');
        expect(previousValue.value).toBe('5');
        expect(operator.value).toBe('-');
    });

    test('no deberia cambiar el display si se pulsa igual sin operacion pendiente', () => {
        const { display, inputDigit, calculate } = useCalculator();
        inputDigit('7');
        calculate();
        expect(display.value).toBe('7');
    });

    test('no deberia calcular si se pulsa igual justo despues de un operador', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        calculate();
        expect(display.value).toBe('5');
    });

    test('deberia mostrar Error si el resultado es Infinity', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        const maxNumber = '9'.repeat(12);
        for (const digit of maxNumber) {
            inputDigit(digit);
        }
        for (let i = 0; i < 30; i++) {
            inputOperator('*');
            for (const digit of maxNumber) {
                inputDigit(digit);
            }
            calculate();
        }
        expect(display.value).toBe('Error');
    });

    test('deberia mostrar Error si el resultado es NaN', () => {
        const { display, inputDigit, inputOperator, calculate } = useCalculator();
        inputDigit('5');
        inputOperator('/');
        inputDigit('0');
        calculate();
        inputOperator('+');
        inputDigit('3');
        calculate();
        expect(display.value).toBe('Error');
    });

    test('deberia ignorar un operador si se pulsa antes de introducir un digito', () => {
        const { operator, inputOperator } = useCalculator();
        inputOperator('+');
        expect(operator.value).toBe(null);
    });

    test('no deberia superar los 12 caracteres en el display', () => {
        const { display, inputDigit } = useCalculator();
        for (let i = 0; i < 15; i++) {
            inputDigit('9');
        }
        expect(display.value.length).toBe(12);
    });

    test('deberia mostrar la expresion en curso', () => {
        const { expression, inputDigit, inputOperator } = useCalculator();
        inputDigit('5');
        inputOperator('+');
        expect(expression.value).toBe('5 +');
    });
});