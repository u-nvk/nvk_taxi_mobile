import React, {useEffect, useState} from 'react';
import {AuthContext} from './sources/components/forAuth/AuthContext';
import AuthNavigation from './sources/navigations/AuthNavigation';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): Element {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('access_token');
      console.log(token);
      if (token) {
        setIsAuth(true);
        setIsLoading(false);
      }
    } catch (e: unknown) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getAuth = async () => {
      await checkAuth();
    };
    getAuth();
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <View style={[{backgroundColor: '#F3F2F8', height: '100%'}]}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        {isLoading ? (
          <View style={[{marginTop: '50%'}]}>
            <ActivityIndicator animating={true} size="large" color="#C5C5C5" />
          </View>
        ) : (
          <AuthNavigation />
        )}
      </View>
    </AuthContext.Provider>
  );
}

export default App;
