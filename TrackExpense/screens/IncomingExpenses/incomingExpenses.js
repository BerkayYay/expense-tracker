import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from '../../constants';

import {useSelector} from 'react-redux';

import styles from './incomingExpenses.style';
import RenderIncomingExpensesTitle from './incomingExpensesTitle';

const renderIncomingExpenses = () => {
  const selectedCategory = useSelector(state => state.selectedCategory);
  let allExpenses = selectedCategory ? selectedCategory.expenses : [];
  // filter pending expenses
  let ie = allExpenses.filter(a => a.status == 'P');
  const renderItem = ({item, index}) => (
    <View
      style={[
        styles.ieContainer,
        {marginLeft: index == 0 ? SIZES.padding : 0},
      ]}>
      {/* Title */}
      <View style={styles.ieTitleContainer}>
        <View style={styles.ieTitleImageContainer}>
          <Image
            source={selectedCategory.icon}
            style={[styles.ieTitleImage, {tintColor: selectedCategory.color}]}
          />
        </View>
        <Text style={{...FONTS.h3, color: selectedCategory.color}}>
          {selectedCategory.name}
        </Text>
      </View>
      {/* Expenses Description */}
      <View style={styles.ieDescriptionContainer}>
        <Text style={{...FONTS.h2}}>{item.title}</Text>
        <Text style={styles.ieDescriptionText}>{item.description}</Text>
        {/* Location */}
        <Text style={styles.ieLocationHeader}>Location</Text>
        <View style={{flexDirection: 'row'}}>
          <Image source={icons.pin} style={styles.ieLocationImage} />
          <Text style={styles.ieLocationText}> {item.location}</Text>
        </View>
      </View>
      {/* Price */}
      <View
        style={[
          styles.iePriceContainer,
          {
            backgroundColor: selectedCategory.color,
          },
        ]}>
        <Text style={styles.iePriceText}>
          CONFIRM {item.total.toFixed(2)} USD
        </Text>
      </View>
    </View>
  );

  return (
    <View>
      <RenderIncomingExpensesTitle />
      {ie.length > 0 && (
        <FlatList
          data={ie}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
      {ie.length == 0 && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 300,
          }}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
        </View>
      )}
    </View>
  );
};

export default renderIncomingExpenses;
