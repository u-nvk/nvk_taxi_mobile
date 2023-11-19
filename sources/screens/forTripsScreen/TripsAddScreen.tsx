import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// @ts-ignore
import RadioForm from 'react-native-simple-radio-button';

function TripsAddScreen() {
  const [isInCampus, setIsInCampus] = useState(true);
  const [radioValue, setRadioValue] = useState('');

  var radio_props = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
  ];
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', paddingHorizontal: 20}}>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Направление</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={!isInCampus ? styles.oneButton : styles.oneButtonHover}
            onPress={() => setIsInCampus(true)}>
            <Text style={styles.buttonTextStyle}>В кампус</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={isInCampus ? styles.oneButton : styles.oneButtonHover}
            onPress={() => setIsInCampus(false)}>
            <Text style={styles.buttonTextStyle}>Из кампуса</Text>
          </TouchableOpacity>
        </View>
        <Text>Откуда</Text>
        <View style={styles.labelViewStyle}>
          <TextInput
            onChangeText={() => null}
            value={'123'}
            style={{padding: 10}}
          />
        </View>
        <Text>Машина</Text>
        <View style={styles.labelViewStyle}>
          <Picker selectedValue={'123'} onValueChange={() => null}>
            <Picker.Item label={'123'} value={1} />
          </Picker>
        </View>
        <Text>Количество свободных мест</Text>
        <View style={[styles.labelViewStyle, {backgroundColor: '#F3F2F8'}]}>
          <RadioForm
            formHorizontal={true}
            radio_props={radio_props}
            initial={0}
            labelHorizontal={true}
            animation={true}
            onPress={value => {
              setRadioValue(value);
            }}
          />
        </View>
        <Text>Стоимость</Text>
        <View style={styles.labelViewStyle}>
          <TextInput
            onChangeText={() => null}
            value={'123'}
            style={{padding: 10}}
          />
        </View>
        <Text>Номер для перевода</Text>
        <View style={styles.labelViewStyle}>
          <Picker selectedValue={'123'} onValueChange={() => null}>
            <Picker.Item label={'123'} value={1} />
          </Picker>
        </View>
        <Text>Банк</Text>
        <View style={styles.labelViewStyle}>
          <Picker selectedValue={'123'} onValueChange={() => null}>
            <Picker.Item label={'123'} value={1} />
          </Picker>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Присоединиться</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  buttonStyle: {
    marginTop: '10%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9FCAFF',
    backgroundColor: '#DCEDFF',
    width: '100%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelViewStyle: {
    width: '100%',
    height: '6%',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    marginTop: '3%',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  oneButton: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    justifyContent: 'center',
  },
  oneButtonHover: {
    width: '48%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#9FCAFF',
    backgroundColor: '#DCEDFF',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
  },
  loadingView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default TripsAddScreen;
