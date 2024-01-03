const ex6 = () => {

    // Skapa en typ temperatureMeasurement och använd den i funktionen

    type temperatureMeasurement = {
        day: number;
        temp: number;
        
    }

    const getSummerNightsTemperature = (tempMeasurements: temperatureMeasurement[]): temperatureMeasurement []=>

      tempMeasurements.filter((data: temperatureMeasurement) => data.temp > 10);


    const tempMeasurements: temperatureMeasurement []= [

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


    const summerTemperatures: temperatureMeasurement[] = getSummerNightsTemperature(tempMeasurements);

    console.log(summerTemperatures);

};
  
ex6();