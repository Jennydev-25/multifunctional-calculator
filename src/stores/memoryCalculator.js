import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMemoryCalculatorStore = defineStore('memoryCalculator', () => {
    const memoryValue = ref(0);

    return { memoryValue };
});