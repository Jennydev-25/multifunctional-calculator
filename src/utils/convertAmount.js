export function convertAmount(amount, rateFrom, rateTo) {
    return amount * (rateTo / rateFrom);
}