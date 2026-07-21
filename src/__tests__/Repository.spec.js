import { describe, test, expect, vi } from 'vitest';
import axios from 'axios';
import Repository from '../core/repositories/Repository.js';

vi.mock('axios');

describe('Repository', () => {
    test('deberia devolver los datos si la peticion tiene exito', async () => {
        axios.get.mockResolvedValue({ data: { foo: 'bar' } });
        const repo = new Repository('https://fake-uri.com');
        const result = await repo.getAxios();

        expect(result).toEqual({ foo: 'bar' });
    });

    test('deberia lanzar un error si la peticion falla', async () => {
        axios.get.mockRejectedValue(new Error('network error'));
        const repo = new Repository('https://fake-uri.com');

        await expect(repo.getAxios()).rejects.toThrow('Algo pasó');
    });
});