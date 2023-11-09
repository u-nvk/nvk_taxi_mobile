import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const AvatarComponent = () => {
  const [image, setImage] = useState({});

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
      includeExif: true,
    })
      .then(image => {
        setImage({
          image: {
            uri: `data:${image.mime};base64,${image.data}`,
            width: image.width,
            height: image.height,
          },
        });
      })
      .catch(e => console.log(e));
  };

  return (
    <TouchableOpacity style={{height: 200, width: 200, backgroundColor: 'red'}} onPress={() => openPicker()}>
      <Text>AddScreen</Text>
    </TouchableOpacity>
  );
};

export default AvatarComponent;
