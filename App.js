import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/routes/Route';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  color = '#d82622'

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Liturgia" 
          component={Routes.Liturgia} 
          options={{ 
            headerShown:false,
            tabBarLabel:'Liturgia',
            tabBarLabelStyle: {fontSize:16, color: color},
            tabBarIcon:() => (
              <MaterialCommunityIcons name="book-outline" color={color} size={26} />

            )
          }}/>
        <Tab.Screen 
          name="Orações" 
          component={Routes.Oracoes} 
          options={{ 
            headerShown:false,
            tabBarLabel:'Orações',
            tabBarLabelStyle: {fontSize:16, color: color},
            tabBarIcon:() => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }}/>
        <Tab.Screen 
          name="Devoções e Carismas" 
          component={Routes.Devocoes} 
          options={{ 
            headerShown:false,
            tabBarLabel:'Devoções e Carismas',
            tabBarLabelStyle: {fontSize:16, color: color},
            tabBarIcon:() => (
              <MaterialCommunityIcons name="candle" color={color} size={26} />
            ) 
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}