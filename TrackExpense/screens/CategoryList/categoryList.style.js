// This is style.js:
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles2 = StyleSheet.create({
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

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    ...styles2.shadow,
  },
  itemImage: {
    width: 20,
    height: 20,
  },
  itemText: {
    marginLeft: SIZES.base,
    color: COLORS.primary,
    ...FONTS.h4,
  },
  categoryContainer: {
    paddingHorizontal: SIZES.padding - 5,
  },
  categoryList: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    justifyContent: 'center',
  },
  categoryListText: {
    ...FONTS.body4,
  },
  categoryListImage: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
});

export default styles;
