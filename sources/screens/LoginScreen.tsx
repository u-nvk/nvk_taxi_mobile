import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import VKLogin from 'react-native-vkontakte-login';

function LoginScreen() {
  const auth = async () => {
    const isLoggedIn = await VKLogin.isLoggedIn();
    const auth = await VKLogin.login(['friends', 'photos', 'email']);
    console.log(auth);
    await VKLogin.logout();
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => auth()}
        style={{backgroundColor: 'gray', borderRadius: 15, padding: '5%'}}>
        <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
          Войти через вк
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default LoginScreen;
