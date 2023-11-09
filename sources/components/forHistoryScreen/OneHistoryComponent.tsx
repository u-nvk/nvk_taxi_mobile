import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function OneHistoryComponent() {
  return (
    <TouchableOpacity
      style={[
        {
          alignSelf: 'center',
          marginBottom: '3%',
          marginTop: '2%',
          width: '95%',
        },
      ]}>
      <View style={[styles.parentsView]}>
        <View style={[{width: '36%'}]}>
          <Text style={[{fontSize: 20}]}>Гринвич</Text>
        </View>
        <View style={[{width: '33%', alignItems: 'center'}]}>
          <Text style={[{fontSize: 20}]}>Пассаж</Text>
        </View>
        <View style={[{alignItems: 'center', width: '31%'}]}>
          <Text style={[{fontSize: 20}]}>21 октября </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  parentsView: {
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: '3%',
    paddingVertical: '4%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
