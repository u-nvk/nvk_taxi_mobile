import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TripsScreen from '../../screens/TripsScreen';
import TripsInfoScreen from '../../screens/forTripsScreen/TripsInfoScreen';
import TripsAddScreen from '../../screens/forTripsScreen/TripsAddScreen';

const Stack = createStackNavigator();

export default function TripsScreenNavigation() {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name={'TripsScreen'} component={TripsScreen} />
      <Stack.Screen name={'TripsInfoScreen'} component={TripsInfoScreen} />
      <Stack.Screen name={'TripsAddScreen'} component={TripsAddScreen} />
    </Stack.Navigator>
  );
}
