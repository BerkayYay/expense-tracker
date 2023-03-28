import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  FlatList,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedCategory, setShowMoreToggle} from '../../Redux/reducers';
import styles from './categoryList.style';

const renderCategoryList = () => {
  const dispatch = useDispatch();
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115),
  ).current;
  const categories = useSelector(state => state.categories);
  const showMoreToggle = useSelector(state => state.showMoreToggle);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => dispatch(setSelectedCategory(item))}>
        <Image
          source={item.icon}
          style={[styles.itemImage, {tintColor: item.color}]}
        />
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <Animated.View style={{height: categoryListHeightAnimationValue}}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
        />
      </Animated.View>

      <TouchableOpacity
        style={styles.categoryList}
        onPress={() => {
          if (showMoreToggle) {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 115,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 172.5,
              duration: 300,
              useNativeDriver: false,
            }).start();
          }

          dispatch(setShowMoreToggle(!showMoreToggle));
        }}>
        <Text style={styles.categoryListText}>
          {showMoreToggle ? 'LESS' : 'MORE'}
        </Text>
        <Image
          source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
          style={styles.categoryListImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default renderCategoryList;
