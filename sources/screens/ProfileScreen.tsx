import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AvatarComponent from "../components/forProfileScreen/AvatarComponent";

function ProfileScreen() {
  return (
    <SafeAreaView>
        <AvatarComponent />
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
}

export default ProfileScreen;
