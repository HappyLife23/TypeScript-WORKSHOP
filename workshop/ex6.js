"use strict";
const ex6 = () => {
    // Skapa en typ temperatureMeasurement och använd den i funktionen
    const getSummerNightsTemperature = (tempMeasurements) => tempMeasurements.filter((data) => data.temp > 10);
    const tempMeasurements = [
        {
            day: 1,
            temp: 12,
        },
        {
            day: 2,
            temp: 9,
        },
        {
            day: 3,
            temp: 15,
        },
    ];
    const summerTemperatures = getSummerNightsTemperature(tempMeasurements);
    console.log(summerTemperatures);
};
ex6();
