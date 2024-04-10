import axios from "axios";

export class MeteoAPI{
    static async fetchWeatherByCoords(coords){
       return(
            await axios.get(
               `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
            )
        ).data;
    };

    static async fetchCityByCoords(coords){
        const {address: {city, village, town},} = ( 
             await axios.get(
               /* `https://nominatim.openstreetmap.org/reverse?lat=${coords.lat}&lon=${coords.lng}`*/
               /*   `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=48.85&lon=2.35` */
                   `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}`
             )
         ).data;
         return city || village || town;
     };

     //https://geocoding-api.open-meteo.com/v1/search?name=Paris&count=1&language=en&format=json

     static async fetchCoordsByCity(city){
        const {latitude: lat, longgitude: lng}=(
             await axios.get(
               `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
             )
         ).data.results[0];
         
         return {lat, lng};
     };
     
     
}