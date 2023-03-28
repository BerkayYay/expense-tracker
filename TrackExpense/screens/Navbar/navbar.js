import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import styles from './navbar.style';

const renderNavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={styles.navbarBackImageContainer}
        onPress={() => console.log('Menu on Pressed')}>
        <Image source={icons.back_arrow} style={styles.navbarBackImage} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navbarMoreImageContainer}
        onPress={() => console.log('More on Pressed')}>
        <Image source={icons.more} style={styles.navbarMoreImage} />
      </TouchableOpacity>
    </View>
  );
};

export default renderNavBar;
