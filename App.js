import React from 'react';
import {View} from 'react-native';

export default () => (
  <View
    onLayout={layout => {
      console.log('appText height', layout.nativeEvent.layout.height); // Should be 30, but says 30.18181800842285
    }}
    style={{
      height: 30,
    }}
  />
);
