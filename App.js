import React from 'react';
import {Text, View} from 'react-native';

export default () => (
  <View>
    {new Array(100).fill('foo').map(item => (
      <Text
        onLayout={layout => {
          console.log('appText height', layout.nativeEvent.layout.height); // Should be 30, but says 29.81818199157715 and 30.18181800842285 for every other
        }}
        style={{
          height: 30,
        }}>
        {item}
      </Text>
    ))}
  </View>
);
