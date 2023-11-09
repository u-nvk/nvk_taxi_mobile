import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import InternalNavigation from './InternalNavigation';
import LoginScreen from '../screens/LoginScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name="Auth" component={LoginScreen} />
        <Stack.Screen name="Notifications" component={InternalNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
