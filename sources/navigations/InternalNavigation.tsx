import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ApplicationScreen from '../screens/ApplicationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddScreen from '../screens/AddScreen';

// @ts-ignore
import FirstIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import SecondIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// @ts-ignore
import ThirdIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function InternalNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true, // Название экрана сверху
        tabBarShowLabel: false, // Подписи под иконками
        tabBarStyle: {
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          height: 60,
        },
      }}
      initialRouteName="ApplicationScreen">
      <Tab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FirstIcon
              name="application-edit"
              size={28}
              color={!focused ? '#000000' : '#886DEC'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ApplicationScreen"
        component={ApplicationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SecondIcon
              name="application"
              size={35}
              color={!focused ? '#000000' : '#886DEC'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
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
