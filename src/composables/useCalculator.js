import { ref } from 'vue';

export function useCalculator() {
    const display = ref('0');

    return { display };
}