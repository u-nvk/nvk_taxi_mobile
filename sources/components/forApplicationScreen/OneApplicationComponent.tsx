import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function OneApplicationComponent() {
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 15,
          alignSelf: 'center',
          marginBottom: '3%',
          marginTop: '2%',
          width: '98%',
        },
      ]}>
      <View style={{backgroundColor: 'red', height: 220, borderRadius: 15, alignItems:'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', backgroundColor:'green'}}>
          <View style={{width: '33%', alignItems:'center'}}>
            <Text style={{fontSize:25}}>КПП №2</Text>
          </View>
          <View style={{width: '33%', alignItems:'center'}}>
            <Text style={{fontSize:25}}>18:00</Text>
          </View>
          <View style={{width: '33%', alignItems:'center'}}>
            <Text style={{fontSize:25}}>ГУК</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parentsView: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '4%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
