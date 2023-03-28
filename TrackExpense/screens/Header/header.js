import React from 'react';
import {View, Text, Image} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import styles from './header.style';

const renderHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerTitleText1}>My Expenses</Text>
        <Text style={styles.headerTitleText2}>Summary (private)</Text>
      </View>

      <View style={styles.headerContainer2}>
        <View style={styles.headerContainer2ImageContainer}>
          <Image source={icons.calendar} style={styles.headerContainer2Image} />
        </View>
        <View style={styles.headerContainer2TextContainer}>
          <Text style={styles.headerContainer2Text1}>Nov 1, 2020</Text>
          <Text style={styles.headerContainer2Text2}>
            %18 more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

export default renderHeader;
