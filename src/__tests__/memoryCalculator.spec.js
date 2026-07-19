import { describe, test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useMemoryCalculatorStore } from '../stores/memoryCalculator.js';

describe('useMemoryCalculatorStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test('deberia empezar con la memoria en 0', () => {
        const store = useMemoryCalculatorStore();
        expect(store.memoryValue).toBe(0);
    });

    test('deberia guardar un valor en la memoria con MS', () => {
        const store = useMemoryCalculatorStore();
        store.memoryStore(25);
        expect(store.memoryValue).toBe(25);
    });

    test('deberia sumar un valor a la memoria con M+', () => {
        const store = useMemoryCalculatorStore();
        store.memoryStore(10);
        store.memoryAdd(5);
        expect(store.memoryValue).toBe(15);
    });

    test('deberia restar un valor a la memoria con M-', () => {
        const store = useMemoryCalculatorStore();
        store.memoryStore(10);
        store.memorySubtract(3);
        expect(store.memoryValue).toBe(7);
    });
});