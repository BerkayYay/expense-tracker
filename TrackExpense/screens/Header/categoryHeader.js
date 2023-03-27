import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';

import {useDispatch, useSelector} from 'react-redux';
import {setViewMode} from '../../Redux/reducers';

const renderCategoryHeaderSection = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  const viewMode = useSelector(state => state.viewMode);

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: SIZES.padding,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {/* Title */}
      <View>
        <Text style={{color: COLORS.primary, ...FONTS.h3}}>CATEGORIES</Text>
        <Text style={{color: COLORS.darkgray, ...FONTS.body4}}>
          {categories.length} Total
        </Text>
      </View>

      {/* Buttons */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: viewMode == 'chart' ? COLORS.secondary : null,
            borderRadius: 25,
          }}
          onPress={() => dispatch(setViewMode('chart'))}>
          <Image
            source={icons.chart}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            backgroundColor: viewMode == 'list' ? COLORS.secondary : null,
            borderRadius: 25,
          }}
          onPress={() => dispatch(setViewMode('list'))}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default renderCategoryHeaderSection;
