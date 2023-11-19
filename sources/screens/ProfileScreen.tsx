import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import {Picker} from '@react-native-picker/picker';

function ProfileScreen({navigation}: {navigation: NavigationProp<any>}) {
  const [loading, setLoading] = useState<boolean>(true);
  const [number, setNumber] = useState<string>('');
  const [bank, setBank] = useState<string>('');
  const [user, setUser] = useState({});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const BankNumber = [
    {name: 'Сбербанк', value: 0},
    {name: 'Тинькофф', value: 1},
    {name: 'Альфабанк', value: 2},
    {name: 'ВТБ', value: 3},
  ];

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
          'https://urfu-nvk.ru/profile/api/v1/data/user',
          {
            method: 'GET',
            headers: {
              Authorization: token,
              'Content-Type': 'application/json',
            },
          },
        );
        const data = await response.json();
        setUser(data);
        const driver = await AsyncStorage.getItem('isDriver');
        if (driver) {
          setToggleCheckBox(true);
        }
        setLoading(false);
      };

      getData();
    } catch (e: unknown) {
      console.log(e);
    }
  }, []);

  const setIsDriverTrue = () => {
    if (number !== '' && bank !== '') {
      AsyncStorage.setItem('isDriver', 'true');
    } else {
      Alert.alert('Ошибка', 'Заполните все данные');
    }
  };

  const handleCheckBox = async (value: boolean) => {
    setToggleCheckBox(value);
    if (!value) {
      await AsyncStorage.removeItem('isDriver');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={40} color="#886DEC" />
        </View>
      ) : (
        <View style={{height: '90%'}}>
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
              onValueChange={newValue => handleCheckBox(newValue)}
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
                <TextInput
                  onChangeText={text => setNumber(text)}
                  value={number}
                  style={{padding: 10}}
                />
              </View>
              <Text style={[styles.textLabel, {marginTop: '5%'}]}>Банк</Text>
              <View style={styles.labelViewStyle}>
                <Picker
                  selectedValue={bank}
                  onValueChange={itemValue => setBank(itemValue)}>
                  {BankNumber.map((e, index) => (
                    <Picker.Item key={index} label={e.name} value={e.value} />
                  ))}
                </Picker>
              </View>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => setIsDriverTrue()}>
                <Text style={styles.buttonText}>Сохранить</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
      <View style={{marginTop: '5%'}}>
        <Button title={'Выйти'} onPress={() => logout()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  buttonView: {
    alignSelf: 'center',
    width: '50%',
    marginTop: '5%',
    borderRadius: 7,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#8392cc',
    backgroundColor: 'rgb(33,150,243)',
  },
  isDriverText: {
    color: 'black',
    fontSize: 27,
    fontWeight: '600',
    marginTop: '5%',
    fontFamily: 'Montserrat-ExtraBold',
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
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Montserrat-SemiBold',
  },
  textLabel: {
    color: 'black',
    fontSize: 23,
    fontWeight: '500',
    fontFamily: 'Montserrat-SemiBold',
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
