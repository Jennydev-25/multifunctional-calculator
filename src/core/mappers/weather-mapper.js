export const weatherMapper = {
    skyDescription: (data) => data.stateSky?.description,
    skyId: (data) => data.stateSky?.id,
    temperature: (data) => data.temperatura_actual,
    humidity: (data) => data.humedad,
    wind: (data) => data.viento,
    forecast: (data) => data.proximos_dias?.slice(0, 5).map((day) => ({
        date: day['@attributes']?.fecha,
        max: day.temperatura?.maxima,
        min: day.temperatura?.minima,
        skyId: Array.isArray(day.estado_cielo) ? day.estado_cielo[0] : day.estado_cielo,
    })) ?? [],
}