import React from 'react';
import {View, Text} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../constants';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray2,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>
    </View>
  );
};
export default Home;
