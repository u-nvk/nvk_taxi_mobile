import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import OneApplicationComponent from '../components/forApplicationScreen/OneApplicationComponent';
import {NavigationProp, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TripsScreen({navigation}: {navigation: NavigationProp<any>}) {
  const [isInCampus, setIsInCampus] = useState(true);
  const [isDriver, setIsDriver] = useState(false);
  const [loading, setLoading] = useState(true);

  const trips = {
    inCampus: ['1', '2', '3', '4', '5', '6'],
    outCampus: ['1', '2', '3', '4', '5', '6'],
  };

  const scrollViewRef = useRef(null);

  const getDriver = async () => {
    setLoading(true);
    const driver = await AsyncStorage.getItem('isDriver');
    if (driver) {
      setIsDriver(true);
    } else {
      setIsDriver(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    try {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => true,
      );
      getDriver();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (scrollViewRef.current) {
        // @ts-ignore
        scrollViewRef.current.scrollTo({y: 0, animated: true});
      }

      void getDriver();
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingView}>
          <ActivityIndicator size={40} color="#886DEC" />
        </View>
      ) : (
        <>
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

          {isDriver && (
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('TripsAddScreen')}>
              <Text style={styles.buttonText}>Добавить</Text>
            </TouchableOpacity>
          )}

          <ScrollView
            overScrollMode="never"
            ref={scrollViewRef}
            style={{marginTop: '1%'}}>
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
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  loadingView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
  },
  buttonStyle: {
    marginTop: '3%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9FCAFF',
    backgroundColor: '#DCEDFF',
    width: '100%',
    height: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
