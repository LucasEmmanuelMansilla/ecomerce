import {View, Image} from 'react-native';
import React from 'react';

export default function UserUI() {
  return (
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png',
        }}
      />
    </View>
  );
}
