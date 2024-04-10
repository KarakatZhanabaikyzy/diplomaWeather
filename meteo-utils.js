export const WEATHER_INTERPRETATION = [
    {
         codes: [0], 
         image: require("./assets/weatherOptions/sun.png"),
         label: "Sunny",
    },
    {
         codes: [1, 2, 3, 45, 48],
         label: "Cloudy",
         image: require("./assets/weatherOptions/clouds.png"),
    },
    {
        codes: [
            51,53,55,56,57,61,63,65,66,67,80,81,82,85,86
        ],
        label: "Rainy",
        image: require("./assets/weatherOptions/rain.png"),
    },
    {
        codes: [71,73,75,77],
        label: "Snowy",
        image: require("./assets/weatherOptions/snow.png"),
    },
    {
        codes: [96,99],
        label: "Thunderous",
        image: require("./assets/weatherOptions/thunder.png"),
    },
];

export function getWeatherInterpretation(code){
   return WEATHER_INTERPRETATION.find((interpretation) => 
      interpretation.codes.includes(code))
};

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];