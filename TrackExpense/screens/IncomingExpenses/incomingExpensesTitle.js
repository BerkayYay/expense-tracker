import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const renderIncomingExpensesTitle = () => {
  return (
    <View style={{padding: SIZES.padding, backgroundColor: COLORS.lightGray2}}>
      <Text style={{...FONTS.h3, color: COLORS.primary}}>
        INCOMING EXPENSES
      </Text>
      <Text style={{...FONTS.h3, color: COLORS.darkgray}}>12 Total</Text>
    </View>
  );
};

export default renderIncomingExpensesTitle;
