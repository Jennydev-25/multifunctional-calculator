import Repository from "@/core/repositories/Repository";

export default class CurrencyRepository extends Repository {

    constructor() {
        const apiKey = import.meta.env.VITE_CURRENCYFREAKS_API_KEY;
        const baseUrl = import.meta.env.VITE_CURRENCYFREAKS_BASE_URL;
        super(`${baseUrl}/rates/latest?apikey=${apiKey}&symbols=EUR,USD,JPY`);
    }

}