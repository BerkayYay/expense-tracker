import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import styles from './categoryHeader.style';

import {useDispatch, useSelector} from 'react-redux';
import {setViewMode} from '../../Redux/reducers';

const renderCategoryHeaderSection = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const viewMode = useSelector(state => state.viewMode);

  return (
    <View style={styles.headerContainer}>
      {/* Title */}
      <View>
        <Text style={styles.headerTitleText1}>CATEGORIES</Text>
        <Text style={styles.headerTitleText2}>{categories.length} Total</Text>
      </View>

      {/* Buttons */}
      <View style={styles.headerButtonContainer}>
        <TouchableOpacity
          style={[
            styles.headerChartButton,
            {backgroundColor: viewMode == 'chart' ? COLORS.secondary : null},
          ]}
          onPress={() => dispatch(setViewMode('chart'))}>
          <Image
            source={icons.chart}
            resizeMode="contain"
            style={[
              styles.headerChartButtonImage,
              {tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray},
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.headerListButton,
            {backgroundColor: viewMode == 'list' ? COLORS.secondary : null},
          ]}
          onPress={() => dispatch(setViewMode('list'))}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={[
              styles.headerListButtonImage,
              {tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default renderCategoryHeaderSection;
