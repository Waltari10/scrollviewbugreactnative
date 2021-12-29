import React, {useEffect, useRef} from 'react';
import {
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
} from 'react-native';

const emptyDataObj = {
  value: '',
  label: '',
};

const itemHeight = 30;

const ScrollPicker = ({selectedValue, onValueChange, data = [], style}) => {
  const ref = useRef(null);

  useEffect(() => {
    const index = data.findIndex(obj => obj.value === selectedValue);

    ref.current?.scrollTo({
      y: index * itemHeight,
      animated: false,
    });
  }, [data, selectedValue]);

  return (
    <ScrollView
      style={{
        height: 150,
      }}
      ref={ref}
      snapToInterval={itemHeight}
      onMomentumScrollEnd={e => {
        const index = e.nativeEvent.contentOffset.y / itemHeight;

        console.log(e.nativeEvent.layoutMeasurement.height); // should be 150
        console.log(e.nativeEvent.contentOffset.y);
        console.log(index);

        if (e.nativeEvent.contentOffset.y % itemHeight === 0) {
          const value = data[index];
          onValueChange(value.value);
        }
      }}>
      {data
        ? [emptyDataObj, emptyDataObj, ...data, emptyDataObj, emptyDataObj].map(
            obj => (
              <Text
                onLayout={layout => {
                  console.log(
                    'appText height',
                    layout.nativeEvent.layout.height,
                  );
                }}
                alignCenter
                style={{
                  // backgroundColor: "red",
                  height: 30,
                  minHeight: 30,
                  maxHeight: 30,
                }}>
                {obj.label}
              </Text>
            ),
          )
        : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

export default ScrollPicker;
