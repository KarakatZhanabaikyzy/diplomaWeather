import {View, Text, Image, TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";
import {Txt} from "../../components/Txt/Txt";
import {s} from "./TabNav.style";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainPage } from "../MainPage/MainPage";
import { SvgXml } from 'react-native-svg';
import { CategoryPage, RecommendationPage } from "../CategoryPage/CategoryPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 

  const Tab = createBottomTabNavigator();

  const Icon1 = ({ active }) => (
    <SvgXml
      xml={`
        <svg width="27" height="27"  viewBox="0 0 71 70">
          <path fill="${active ? '#FFCC70' : 'white'}" d="M18.4569 64.1654H51.5237C52.2628 64.1656 52.9743 64.4464 53.5144 64.951C54.0545 65.4556 54.3829 66.1464 54.4333 66.8838C54.4837 67.6213 54.2523 68.3503 53.7858 68.9237C53.3194 69.4971 52.6527 69.872 51.9204 69.9728L51.5237 70H18.4569C17.7177 69.9998 17.0062 69.719 16.4661 69.2144C15.926 68.7098 15.5976 68.019 15.5472 67.2815C15.4969 66.5441 15.7283 65.815 16.1947 65.2417C16.6612 64.6683 17.3279 64.2934 18.0601 64.1926L18.4569 64.1654ZM6.80707 52.5739H63.2085C63.943 52.5808 64.6479 52.8645 65.1824 53.3684C65.7169 53.8723 66.0416 54.5593 66.0917 55.2921C66.1418 56.025 65.9136 56.7497 65.4526 57.3217C64.9917 57.8936 64.332 58.2706 63.6052 58.3774L63.2085 58.4046H6.80707C6.06792 58.4044 5.35642 58.1236 4.81632 57.619C4.27623 57.1144 3.94781 56.4236 3.89743 55.6862C3.84705 54.9487 4.07847 54.2197 4.54491 53.6463C5.01136 53.0729 5.67807 52.698 6.41031 52.5972L6.80707 52.57V52.5739ZM35.0078 0C47.3305 0 54.3243 8.15681 55.3395 18.0096H55.6507C57.535 18.0065 59.4015 18.3748 61.1434 19.0934C62.8854 19.812 64.4686 20.8669 65.8027 22.1977C67.1367 23.5285 68.1954 25.1092 68.9183 26.8493C69.6412 28.5895 70.014 30.4551 70.0156 32.3394C70.013 34.2231 69.6394 36.0878 68.9161 37.8271C68.1927 39.5664 67.1339 41.1461 65.7999 42.4761C64.4659 43.8061 62.8831 44.8602 61.1416 45.5784C59.4002 46.2965 57.5344 46.6645 55.6507 46.6615H14.3649C12.4812 46.6645 10.6153 46.2965 8.87392 45.5784C7.1325 44.8602 5.54961 43.8061 4.21566 42.4761C2.88171 41.1461 1.82283 39.5664 1.09949 37.8271C0.376163 36.0878 0.002552 34.2231 0 32.3394C0.00204145 30.4554 0.375276 28.5903 1.09838 26.8505C1.82148 25.1108 2.88028 23.5306 4.21428 22.2002C5.54829 20.8698 7.13135 19.8153 8.87302 19.0969C10.6147 18.3786 12.4808 18.0104 14.3649 18.0134H14.676C15.6952 8.09458 22.6812 0.0038904 35.0078 0.0038904V0Z"/>
        </svg>
      `}
    />
  );

  const Icon2 = ({ active }) => (
    <SvgXml
      xml={`
        <svg width="27" height="27" viewBox="0 0 75 67">
          <path fill="${active ? '#FFCC70' : 'white'}"  d="M48.1915 0.151852L48.5437 0.125894L48.9591 0.140727L49.3781 0.203768L49.7972 0.315019L72.0472 7.73169C72.716 7.95467 73.3074 8.3637 73.752 8.91081C74.1967 9.45792 74.4762 10.1204 74.5577 10.8207L74.5837 11.2509V29.7926C74.5835 30.7009 74.2501 31.5775 73.6465 32.2563C73.0429 32.935 72.2113 33.3687 71.3092 33.4749L70.8753 33.5009H63.4587V59.4592C63.4593 61.3304 62.7526 63.1326 61.4803 64.5046C60.208 65.8766 58.4641 66.717 56.5982 66.8574L56.042 66.8759H18.9587C17.0875 66.8765 15.2853 66.1698 13.9133 64.8975C12.5413 63.6252 11.7009 61.8813 11.5605 60.0155L11.542 59.4592V33.5009H4.12533C3.21703 33.5008 2.34037 33.1673 1.66161 32.5637C0.982858 31.9602 0.549221 31.1285 0.442951 30.2264L0.416992 29.7926V11.2509C0.416754 10.5457 0.617571 9.85514 0.995894 9.26007C1.37422 8.665 1.91436 8.19013 2.55299 7.89114L2.95349 7.73169L25.2035 0.315019C25.761 0.12934 26.3546 0.0787935 26.9355 0.167547C27.5163 0.256301 28.0678 0.481813 28.5443 0.825499C29.0209 1.16918 29.4091 1.62121 29.6767 2.14431C29.9443 2.66742 30.0838 3.24663 30.0837 3.83423C30.075 5.75879 30.8149 7.61134 32.1469 9.0005C33.4789 10.3897 35.2987 11.2066 37.222 11.2789C39.1452 11.3511 41.0212 10.6729 42.4536 9.38749C43.886 8.10212 44.7627 6.31027 44.8984 4.39048L44.9318 3.50048L44.9949 3.08144L45.1321 2.58452L45.2952 2.20256L45.4807 1.86139L45.7328 1.51652L45.9887 1.21985C46.1964 1.0196 46.4077 0.849019 46.6377 0.700685L46.9937 0.504144L47.3756 0.340977L47.7761 0.22231L48.1915 0.151852Z"/>
        </svg>
      `}
    />
  );

  const Icon3 = ({ active }) => (
    <SvgXml
      xml={`
      <svg width="27" height="27" viewBox="0 0 70 70">
          <path  fill="${active ? '#FFCC70' : 'white'}" d="M19.4444 15.5556C19.4444 11.43 21.0833 7.47335 24.0006 4.55612C26.9178 1.63888 30.8744 0 35 0C39.1256 0 43.0822 1.63888 45.9994 4.55612C48.9167 7.47335 50.5556 11.43 50.5556 15.5556C50.5556 19.6811 48.9167 23.6378 45.9994 26.555C43.0822 29.4722 39.1256 31.1111 35 31.1111C30.8744 31.1111 26.9178 29.4722 24.0006 26.555C21.0833 23.6378 19.4444 19.6811 19.4444 15.5556ZM19.4444 38.8889C14.2875 38.8889 9.34169 40.9375 5.69515 44.584C2.04861 48.2306 0 53.1763 0 58.3333C0 61.4275 1.22916 64.395 3.41709 66.5829C5.60501 68.7708 8.57247 70 11.6667 70H58.3333C61.4275 70 64.395 68.7708 66.5829 66.5829C68.7708 64.395 70 61.4275 70 58.3333C70 53.1763 67.9514 48.2306 64.3049 44.584C60.6583 40.9375 55.7125 38.8889 50.5556 38.8889H19.4444Z"/>
        </svg>
      `}
    />
  );


export function TabNav(){
    

    const screenOptions = {
        tabBarStyle:{
          backgroundColor:'#22668D',
          height: 65,
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          borderRadius: 10,
          // position: 'absolute',
          // bottom: 0,
          // left: 0,
          // right: 0,
          

        },
        tabBarItemStyle:{
          backgroundColor:'#22668D',
          margin:5,
          height: 30,
          width: 30,
        },
        
        tabBarShowLabel: false,
        headerShown: false,
        
      };

    return(
      
      
          <Tab.Navigator  {...{ screenOptions }}
          > 
            <Tab.Screen 
                name="MainPage" 
                component={MainPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                      <Icon1 active={focused} />
                    ),
                    headerShown: false 
                  }}
                 />
            <Tab.Screen 
                name="CategoryPage" 
                component={CategoryPage} 
                options={{
                    tabBarIcon: ({ focused }) => (
                      <Icon2 active={focused} />
                    ),
                    headerShown: false
                  }}
                />
            <Tab.Screen 
                name="ProfilePage" 
                component={ProfilePage} 
                options={{
                    tabBarIcon: ({ focused }) => (
                      <Icon3 active={focused} />
                    ),
                    headerShown: false 
                  }}
                />
          </Tab.Navigator>

      )
}