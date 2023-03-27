import React from 'react';
import {View, Text, Image} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';

const renderHeader = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
      }}>
      <View>
        <Text style={{color: COLORS.primary, ...FONTS.h2}}>My Expenses</Text>
        <Text style={{color: COLORS.darkgray, ...FONTS.h3}}>
          Summary (private)
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: COLORS.lightGray,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={icons.calendar}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.lightBlue,
            }}
          />
        </View>
        <View
          style={{
            marginLeft: SIZES.padding,
          }}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>Nov 1, 2020</Text>
          <Text style={{color: COLORS.darkgray, ...FONTS.body3}}>
            %18 more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default renderHeader;
