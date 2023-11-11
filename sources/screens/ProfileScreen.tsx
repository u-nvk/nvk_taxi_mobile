import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';

function ProfileScreen({navigation}: {navigation: NavigationProp<any>}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState({});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Auth'}],
      }),
    );
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const token = await AsyncStorage.getItem('access_token');
        const response = await fetch(
          'https://urfu-nvk.ru/profile/api/v1/data',
          {
            method: 'GET',
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await response.json();
        console.log(data);
        setUser(data);
        setLoading(false);
      };

      getData();
    } catch (e: unknown) {
      console.log(e);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={40} color="#886DEC" />
        </View>
      ) : (
        <>
          <Text style={styles.textLabel}>Фамилия</Text>

          <View style={styles.labelViewStyle}>
            <Text style={styles.textValue}>
              {user.surname ? user.surname : 'Нет данных'}
            </Text>
          </View>
          <Text style={[styles.textLabel, {marginTop: '5%'}]}>Имя</Text>
          <View style={styles.labelViewStyle}>
            <Text style={styles.textValue}>
              {user.firstname ? user.firstname : 'Нет данных'}
            </Text>
          </View>
          <View style={styles.checkBoxView}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
              Я водитель
            </Text>
          </View>
          {toggleCheckBox && (
            <>
              <Text style={styles.isDriverText}>Для водителей</Text>
              <Text style={[styles.textLabel, {marginTop: '5%'}]}>
                Номер для перевода
              </Text>
              <View style={styles.labelViewStyle}>
                <Text style={styles.textValue}>Хз</Text>
              </View>
              <Text style={[styles.textLabel, {marginTop: '5%'}]}>Банк</Text>
              <View style={styles.labelViewStyle}>
                <Text style={styles.textValue}>Хз</Text>
              </View>
            </>
          )}
        </>
      )}
      <Button title={'Выйти'} onPress={() => logout()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  isDriverText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    marginTop: '5%',
  },
  checkBoxView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: '5%',
  },
  loadingView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelViewStyle: {
    width: '100%',
    height: '7%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginTop: '3%',
  },
  textValue: {
    color: 'black',
    fontSize: 18,
    fontWeight: '400',
  },
  textLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    marginTop: '4%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
});

export default ProfileScreen;
