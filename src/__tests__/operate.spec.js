import { describe, test, expect } from 'vitest';
import { operate } from '../utils/operate.js';

describe('Logica de Negocio: operate', () => {
    test('Deberia sumar dos numeros', () => {
        const result = operate(7, 3, '+');
        expect(result).toBe(10);
    });

    test('Deberia restar dos numeros', () => {
        const result = operate(7, 3, '-');
        expect(result).toBe(4);
    });

    test('Deberia multiplicar dos numeros', () => {
        const result = operate(7, 3, '*');
        expect(result).toBe(21);
    });

    test('Deberia dividir dos numeros', () => {
        const result = operate(6, 3, '/');
        expect(result).toBe(2);
    });

    test('Deberia devolver Error al dividir entre cero', () => {
        const result = operate(6, 0, '/');
        expect(result).toBe('Error');
    });
});