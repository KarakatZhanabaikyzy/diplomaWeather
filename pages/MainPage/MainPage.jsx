import {View, Text, Image, Alert, ScrollView, Dimensions } from "react-native";
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
import { useEffect, useRef, useState } from 'react';
import { getWeatherInterpretation } from "..//../meteo-utils";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useRoute } from '@react-navigation/native';

const { width } = Dimensions.get('window'); 

async function getUserCity() {
  const token = await AsyncStorage.getItem('access_token');
  if (!token) {
    console.log('No user token found, using default coordinates');
    return 'Astana';
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
    return 'Astana'; 
  }
}

async function getCoordinatesForCity(city) {
  if (!city) {
    return { lat: "51.1801", lng: "71.44598" }; 
  }

  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(city)}&key=AIzaSyB3hP9BwoEz9C3p5DsDokB9YmRjgjCWQ_Y`);
    const data = response.data;
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error('Error getting coordinates for city:', error);
    return { lat: "51.1801", lng: "71.44598" };
  }
}




export function MainPage(){

  const nav = useNavigation();
  const route = useRoute();

  const [coordinates, setCoordinates] = useState(null);
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [images, setImages] = useState([]);
  const scrollViewRef = useRef(null); 
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    if (route.params?.updatedCity) {
        setCity(route.params.updatedCity);
    }
}, [route.params]);


//движение картинок через интервал 
//   useEffect(() => {
//     const interval = setInterval(() => {
//         if (scrollViewRef.current) {
//             let newScrollIndex = scrollIndex + 1;
//             if (newScrollIndex >= images.length) {
//                 newScrollIndex = 0; 
//             }
//             scrollViewRef.current.scrollTo({ x: width * newScrollIndex, animated: true });
//             setScrollIndex(newScrollIndex); // Обновление индекса прокрутки
//         }
//     }, 5000); // Прокрутка каждые 5000 мс (5 секунд)

//     return () => clearInterval(interval);
// }, [scrollIndex, images.length]); 


//   useEffect(() => {
//     const fetchImages = async () => {
//         try {
//             const token = await AsyncStorage.getItem('access_token');
//             const response = await axios.get('https://diplomawork-production.up.railway.app/images/today', {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
//             console.log(response.data.map(img => ({ image_url: img.image_url })));
//             // const carouselImg = response.data.map(img => ({ image_url: img.image_url }));
//             // setImages(carouselImg); 
//             setImages(response.data.map(img => ({ image_url: img.image_url })));
//             console.log('Images for Carousel:', images);
//         } catch (error) {
//             console.error('Failed to fetch images', error);
//         }
//     };

//     fetchImages();
    

// }, [city]); //city


useEffect(() => {
  const fetchImages = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      let response;
      if (token) {
        response = await axios.get('https://diplomawork-production.up.railway.app/images/today', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } else {
        response = await axios.get('https://diplomawork-production.up.railway.app/images');
        setImages(response.data.map(img => ({ image_url: img.image_url })));
        console.log("no tokennnn", images)
      }
      console.log(response.data.map(img => ({ image_url: img.image_url })));
      setImages(response.data.map(img => ({ image_url: img.image_url })));
      console.log('Images for Carousel:', images);
    } catch (error) {
      console.error('Failed to fetch images', error);
    }
  };

  fetchImages();
}, [city]); 


  useEffect(() => {
    getUserCity().then(city => {
      setCity(city);
      getCoordinatesForCity(city).then(setCoordinates);
    });
  }, [city]); //city

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
            <TopHeader style={{height:80}}>
                    <Txt>{city}</Txt>
                    <Txt style={s.date}>Today, 29 May</Txt>
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
              <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={s.scrollViewStyle}
                pagingEnabled={true} 
              >
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <Image 
                            key={index}
                            style={ s.img_carousel} 
                            source={{ uri: img.image_url }}
                        />
                    ))
                ) : (
                    <Text style={{color:"#000"}}>Images loading...</Text>
                )}
            </ScrollView>
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