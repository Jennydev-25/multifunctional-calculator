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
});