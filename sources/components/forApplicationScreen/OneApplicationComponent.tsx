import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

export default function OneApplicationComponent({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: string;
}) {
  return (
    <TouchableOpacity
      style={styles.touchableStyle}
      onPress={() => navigation.navigate('TripsInfoScreen')}>
      <View style={styles.mainView}>
        <View style={styles.nameMainView}>
          <Text style={styles.nameText}>{route}</Text>
        </View>

        <View style={styles.infoMainView}>
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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableStyle: {
    width: '100%',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: '3%',
    marginTop: '2%',
  },
  mainView: {
    paddingRight: '5%',
    paddingLeft: '5%',
    width: '100%',
    backgroundColor: '#FFF',
    height: 120,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameMainView: {
    justifyContent: 'center',
    width: '100%',
    flex: 0.4,
  },
  infoMainView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
    flex: 0.6,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Montserrat-Bold'
  },
  infoLabel: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },
  infoValue: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Montserrat-Bold'
  },
});
