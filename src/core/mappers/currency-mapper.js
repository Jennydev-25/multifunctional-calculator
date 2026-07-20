export const currencyMapper = {
    date: (data) => data.date,
    base: (data) => data.base,
    rate: (data, currency) => Number(data.rates?.[currency])
}