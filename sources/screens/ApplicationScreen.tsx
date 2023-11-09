import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import OneApplicationComponent from '../components/forApplicationScreen/OneApplicationComponent';

function ApplicationScreen() {
  const [city, setCity] = useState(false);

  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{borderStyle: 'solid', borderWidth: 2, width: '50%'}}
          onPress={() => setCity(true)}>
          <Text style={{textAlign: 'center', fontSize: 25}}>В город</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{borderStyle: 'solid', borderWidth: 2, width: '50%'}}
          onPress={() => setCity(false)}>
          <Text style={{textAlign: 'center', fontSize: 25}}>Из города</Text>
        </TouchableOpacity>
      </View>

      {city ? <OneApplicationComponent /> : <Text>Не город</Text>}
    </SafeAreaView>
  );
}

export default ApplicationScreen;
