import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function TripsInfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoAndButtonView}>
        <View style={styles.infoView}>
          <View style={{width: '100%', flex: 0.1}}>
            <Text style={styles.nameText}>Розы Люксембург 49 -- Кампус</Text>
          </View>

          <View style={styles.priceStyle}>
            <View style={{flex: 0.33, alignItems: 'flex-start'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoLabel}>отправление</Text>
                <Text style={styles.infoValue}>21:18</Text>
              </View>
            </View>

            <View style={{flex: 0.33, alignItems: 'center'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoLabel}>стоимость</Text>
                <Text style={styles.infoValue}>100₽</Text>
              </View>
            </View>

            <View style={{flex: 0.33, alignItems: 'flex-end'}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.infoLabel}>свободно</Text>
                <Text style={styles.infoValue}>2</Text>
              </View>
            </View>
          </View>
          <View style={{width: '100%', flex: 0.2}}>
            <Text style={[styles.infoLabel, {textAlign: 'left'}]}>
              водитель
            </Text>
            <Text style={[styles.infoValue, {textAlign: 'left'}]}>
              Маркелов Артемий
            </Text>
          </View>
          <View style={{width: '100%', flex: 0.2}}>
            <Text style={[styles.infoLabel, {textAlign: 'left'}]}>
              марка и модель
            </Text>
            <Text style={[styles.infoValue, {textAlign: 'left'}]}>
              Mercedes S, а225ло
            </Text>
          </View>
          <View style={{width: '100%', flex: 0.2}}>
            <Text style={[styles.infoLabel, {textAlign: 'left'}]}>
              номер для перевода
            </Text>
            <Text style={[styles.infoValue, {textAlign: 'left'}]}>
              +79122602002
            </Text>
          </View>
          <View style={{width: '100%', flex: 0.2}}>
            <Text style={[styles.infoLabel, {textAlign: 'left'}]}>банк</Text>
            <Text style={[styles.infoValue, {textAlign: 'left'}]}>
              Сбербанк
            </Text>
          </View>
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
    fontSize: 16,
  },
  buttonStyle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9FCAFF',
    backgroundColor: '#DCEDFF',
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceStyle: {
    width: '100%',
    flex: 0.23,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
  },
  infoLabel: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
  infoValue: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  infoView: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  infoAndButtonView: {
    height: '80%',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    marginTop: '4%',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
});

export default TripsInfoScreen;
