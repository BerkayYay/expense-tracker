import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../../constants';
import {useSelector} from 'react-redux';
import {
  processCategoryDataToDisplay,
  setSelectedCategoryByName,
} from '../../../helpers/categoryFunctions';
import styles from './expensesSummary.style';

const renderExpensesSummary = () => {
  const selectedCategory = useSelector(state => state.selectedCategory);
  let data = processCategoryDataToDisplay();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {
            backgroundColor:
              selectedCategory && selectedCategory.name == item.name
                ? item.color
                : COLORS.white,
          },
        ]}
        onPress={() => {
          let categoryName = item.name;
          setSelectedCategoryByName(categoryName);
        }}>
        {/* Name/Category */}
        <View style={styles.itemRowContainer}>
          <View
            style={[
              styles.itemBox,
              {
                backgroundColor:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : item.color,
              },
            ]}></View>
          <Text
            style={[
              styles.itemText,
              {
                color:
                  selectedCategory && selectedCategory.name == item.name
                    ? COLORS.white
                    : COLORS.primary,
              },
            ]}>
            {item.name}
          </Text>

          {/* Expenses */}
          <View style={styles.itemExpensesContainer}>
            <Text
              style={[
                styles.itemExpensesText,
                {
                  color:
                    selectedCategory && selectedCategory.name == item.name
                      ? COLORS.white
                      : COLORS.primary,
                },
              ]}>
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
