import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import AvatarComponent from '../components/forProfileScreen/AvatarComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, NavigationProp} from '@react-navigation/native';

function ProfileScreen({navigation}: {navigation: NavigationProp<any>}) {
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      }),
    );
  };
  return (
    <SafeAreaView>
      <AvatarComponent />
      <Text>ProfileScreen</Text>

      <Button title={'Выйти'} onPress={() => logout()} />
    </SafeAreaView>
  );
}

export default ProfileScreen;
