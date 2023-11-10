import React, {useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../components/forAuth/useAuth';
import {NavigationProp} from '@react-navigation/native';

function LoginScreen({navigation}: {navigation: NavigationProp<any>}) {
  const {isAuth, setIsAuth} = useAuth();

  const authVk = async () => {
    const isLoggedIn = await VKLogin.isLoggedIn();
    const auth = await VKLogin.login(['friends', 'photos', 'email']);
    console.log(auth);
    await VKLogin.logout();
    if (auth.user_id !== null) {
      const mainAuth = await fetch(
        'https://urfu-nvk.ru/identity/api/v1/exchange-vk-access-token',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            vkAccessToken: auth.access_token,
            vkId: parseInt(auth.user_id, 10),
          }),
        },
      ).then(async response => response.json());
      console.log(mainAuth);
      if (mainAuth.accessToken) {
        await AsyncStorage.setItem('access_token', mainAuth.accessToken);
        setIsAuth();
        navigation.navigate('Application');
      } else {
        Alert.alert('Жаль(', 'Очень плохо');
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => authVk()}
        style={{backgroundColor: 'gray', borderRadius: 15, padding: '5%'}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
          Войти через вк
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
