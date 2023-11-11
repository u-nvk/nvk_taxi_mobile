import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';

// @ts-ignore
import FirstIcon from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import SecondIcon from 'react-native-vector-icons/FontAwesome5';
// @ts-ignore
import ThirdIcon from 'react-native-vector-icons/AntDesign';
import TripsScreenNavigation from './forTripsScreen/TripsScreenNavigation';

const Tab = createBottomTabNavigator();

export default function InternalNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false, // Название экрана сверху
        tabBarShowLabel: false, // Подписи под иконками
        tabBarStyle: {
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          height: 60,
        },
      }}
      initialRouteName="TripsScreenNavigation">
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FirstIcon
              name="history"
              size={28}
              color={!focused ? '#000000' : '#886DEC'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TripsScreenNavigation"
        component={TripsScreenNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <SecondIcon
              name="route"
              size={28}
              color={!focused ? '#000000' : '#886DEC'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <ThirdIcon
              name="profile"
              size={28}
              color={!focused ? '#000000' : '#886DEC'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
