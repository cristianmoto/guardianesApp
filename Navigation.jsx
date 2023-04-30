import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



//screens

import BioScreens from './screens/BioScreens';
import LoginScreens from './screens/LoginScreens';
import GameScreens from './screens/GameScreens';

const Tab = createBottomTabNavigator ();

function MiNavegacion (){
    return (
      <Tab.Navigator 
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: 'darkseagreen',
        tabBarInactiveTintColor: 'orangered',
      }}>

        <Tab.Screen 
            name='Bios'
            component={BioScreens}
            options={{
                tabBarIcon : ({color, size}) =>(
                    <MaterialCommunityIcons name="account-box-multiple" size={size} color={color} />
                )
            }} />
        <Tab.Screen name='Game'
         component={GameScreens}
            options={{
                tabBarIcon : ({color , size}) => (
                    <MaterialCommunityIcons name="gamepad-variant" size={size} color={color} />
                )
            }}
         />
        <Tab.Screen name='Login'
         component={ LoginScreens}
             options={{
                tabBarIcon : ({color, size}) =>(
                    <MaterialCommunityIcons name="login" size={size} color={color} />
                )
             }}
         />
      </Tab.Navigator>
    );
}
export default function Navigation(){
    return (
        <NavigationContainer>
            <MiNavegacion />
        </NavigationContainer>
    )
}
