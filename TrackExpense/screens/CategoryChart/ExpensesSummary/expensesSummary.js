import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {useSelector} from 'react-redux';
import {
  processCategoryDataToDisplay,
  setSelectedCategoryByName,
} from '../../../helpers/categoryFunctions';

const renderExpensesSummary = () => {
  const selectedCategory = useSelector(state => state.selectedCategory);
  let data = processCategoryDataToDisplay();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          height: 40,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor:
            selectedCategory && selectedCategory.name == item.name
              ? item.color
              : COLORS.white,
        }}
        onPress={() => {
          let categoryName = item.name;
          setSelectedCategoryByName(categoryName);
        }}>
        {/* Name/Category */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : item.color,
              borderRadius: 5,
            }}></View>
          <Text
            style={{
              marginLeft: SIZES.base,
              color:
                selectedCategory && selectedCategory.name == item.name
                  ? COLORS.white
                  : COLORS.primary,
              ...FONTS.h3,
            }}>
            {item.name}
          </Text>

          {/* Expenses */}
          <View
            style={{
              justifyContent: 'flex-end',
              flex: 1,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,
                ...FONTS.h3,
              }}>
              {item.y} USD - {item.label}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{padding: SIZES.padding}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default renderExpensesSummary;
