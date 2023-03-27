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
        style={{
          flex: 1,
          flexDirection: 'row',
          margin: 5,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.radius,
          borderRadius: 5,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}
        onPress={() => dispatch(setSelectedCategory(item))}>
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.primary,
            ...FONTS.h4,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{paddingHorizontal: SIZES.padding - 5}}>
      <Animated.View style={{height: categoryListHeightAnimationValue}}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
        />
      </Animated.View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          justifyContent: 'center',
        }}
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
        <Text style={{...FONTS.body4}}>{showMoreToggle ? 'LESS' : 'MORE'}</Text>
        <Image
          source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
          style={{
            marginLeft: 5,
            width: 15,
            height: 15,
            alignSelf: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default renderCategoryList;
