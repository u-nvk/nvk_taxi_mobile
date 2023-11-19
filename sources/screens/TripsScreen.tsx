import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OneApplicationComponent from '../components/forApplicationScreen/OneApplicationComponent';
import {NavigationProp} from '@react-navigation/native';

function TripsScreen({navigation}: {navigation: NavigationProp<any>}) {
  const [isInCampus, setIsInCampus] = useState(true);

  const trips = {
    inCampus: ['1', '2', '3', '4', '5', '6'],
    outCampus: ['1', '2', '3', '4', '5', '6'],
  };
  return (
    <SafeAreaView style={styles.container}>
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

      <ScrollView style={{marginTop: '5%'}}>
        {isInCampus
          ? trips.inCampus.map((e, index) => (
              <OneApplicationComponent
                route={'Розы Люксембург 49 ➙ Кампус'}
                key={index}
                navigation={navigation}
              />
            ))
          : trips.outCampus.map((e, index) => (
              <OneApplicationComponent
                route={'Кампус ➙ Розы Люксембург 49'}
                key={index}
                navigation={navigation}
              />
            ))}
      </ScrollView>
      {/*{city ? <OneApplicationComponent /> : <Text>Не город</Text>}*/}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    marginTop: '4%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
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
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
});
export default TripsScreen;
