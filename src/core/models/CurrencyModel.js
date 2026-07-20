export default class CurrencyModel {

    constructor(date, base, rate) {
        this.date = date
        this.base = base
        this.rate = rate
    }

    getDate() {
        return this.date
    }

    getBase() {
        return this.base
    }

    getRate() {
        return this.rate
    }

    static createRate(data, currency, mapper) {
        return new CurrencyModel(mapper.date(data), mapper.base(data), mapper.rate(data, currency))
    }

}