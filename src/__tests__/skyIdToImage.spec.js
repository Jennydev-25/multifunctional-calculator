import { describe, test, expect } from 'vitest';
import { skyIdToImage } from '../utils/skyIdToImage.js';

describe('skyIdToImage', () => {
    test('deberia devolver la imagen soleada para el codigo 11', () => {
        expect(skyIdToImage('11')).toContain('sunny');
    });
});