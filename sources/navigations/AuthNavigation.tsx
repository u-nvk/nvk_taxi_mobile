import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import InternalNavigation from './InternalNavigation';
import LoginScreen from '../screens/LoginScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../components/forAuth/useAuth';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };

  const auth = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen
          name={auth.isAuth ? 'Application' : 'Auth'}
          component={auth.isAuth ? InternalNavigation : LoginScreen}
        />
        <Stack.Screen
          name={auth.isAuth ? 'Auth' : 'Application'}
          component={auth.isAuth ? LoginScreen : InternalNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
