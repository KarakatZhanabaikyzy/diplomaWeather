import {View, Text, Image, Alert} from "react-native";
import { Txt } from "../../components/Txt/Txt"; 
import {s} from "./MainPage.style";
import { TopHeader } from "../../components/TopHeader/TopHeader";
import { TempBoard } from "../../components/TempBoard/TempBoard";
import { ButtonBig } from "../../components/ButtonBig/ButtonBig";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainPageExample from "..//../assets/mainPageExample.png";
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform } from 'react-native';
import { MeteoAPI } from "..//../API/weather";
import {useEffect, useState } from "react";
import { getWeatherInterpretation } from "..//../meteo-utils";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


async function getUserCity() {
  const token = await AsyncStorage.getItem('access_token');
  if (!token) {
    console.log('No user token found, using default coordinates');
    return 'Default City';
  }

  try {
    const response = await axios.get('https://diplomawork-production.up.railway.app/user', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const userData = response.data;
    return userData.city;
  } catch (error) {
    console.error('Error fetching user city:', error);
    return 'Warsaw'; 
  }
}

async function getCoordinatesForCity(city) {
  if (!city) {
    return { lat: "41.38879", lng: "2.15899" }; 
  }

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=AIzaSyB3hP9BwoEz9C3p5DsDokB9YmRjgjCWQ_Y`);
    const data = response.data;
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error('Error getting coordinates for city:', error);
    return { lat: "41.38879", lng: "2.15899" };
  }
}




export function MainPage(){

  const nav = useNavigation();

  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    getUserCity().then(city => {
      setCity(city);
      getCoordinatesForCity(city).then(setCoordinates);
    });
  }, []);

  useEffect(() => {
    if (coordinates) {
      MeteoAPI.fetchWeatherByCoords(coordinates).then(weatherData => {
        setWeather(weatherData);
        console.log("Weather Data Fetched:", weatherData);
      });
    }
  }, [coordinates]);



    return(
        <View style={s.box}>
          <View>
          <View style={s.topHeader}>
            <TopHeader style={{height:95}}>
                    <Txt>{city}</Txt>
                    <Txt style={s.date}>Today, 22 sep</Txt>
            </TopHeader>
          </View>  
          </View>
          <View style={s.main_box}>
            <TempBoard
                city={city}
                interpretation ={getWeatherInterpretation(weather?.current_weather?.weathercode)}
                temperature={Math.round(weather?.current_weather?.temperature)}
                windspeed={Math.round(weather?.current_weather?.windspeed)}
            />
            <View style={s.carousel_box}>
                 <Txt>
                      Liked outfits for today
                 </Txt>
                 <Image style={s.img_carousel} source={mainPageExample}/>
            </View>
            <View  style={s.btn_box}>
            <ButtonBig style={{backgroundColor:"#22668D"}}
                onPress={()=> nav.navigate("StyleChoice", {})}>
                <Txt style={{color:"white"}}>
                    Get Recommendation
                </Txt>
            </ButtonBig>
            </View>
          </View>

        </View>
    );
};