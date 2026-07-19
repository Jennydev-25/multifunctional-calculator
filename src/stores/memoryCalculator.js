import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMemoryCalculatorStore = defineStore('memoryCalculator', () => {
    const memoryValue = ref(0);

    function memoryStore(value) {
        memoryValue.value = value;
    }

    function memoryAdd(value) {
        memoryValue.value = memoryValue.value + value;
    }

    function memorySubtract(value) {
        memoryValue.value = memoryValue.value - value;
    }

    return { memoryValue, memoryStore, memoryAdd, memorySubtract };
});