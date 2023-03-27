import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';

const renderNavBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          width: 50,
        }}
        onPress={() => console.log('Menu on Pressed')}>
        <Image
          source={icons.back_arrow}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          width: 50,
        }}
        onPress={() => console.log('More on Pressed')}>
        <Image
          source={icons.more}
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.primary,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default renderNavBar;
