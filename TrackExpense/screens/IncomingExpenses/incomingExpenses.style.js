import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

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

const ieStyles = StyleSheet.create({
  // ie Styles
  ieContainer: {
    width: 300,
    marginRight: SIZES.padding,

    marginVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
    ...styles.shadow,
  },
  ieTitleContainer: {
    flexDirection: 'row',
    padding: SIZES.base,
    alignItems: 'center',
  },
  ieTitleImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.base,
  },
  ieTitleImage: {
    width: 20,
    height: 20,
  },
  ieTitleText: {
    ...FONTS.h3,
  },
  ieDescriptionContainer: {
    paddingHorizontal: SIZES.padding,
  },
  ieDescriptionTitleText: {
    ...FONTS.h2,
  },
  ieDescriptionText: {
    ...FONTS.body3,
    flexWrap: 'wrap',
    color: COLORS.darkgray,
  },
  ieLocationHeader: {
    marginTop: SIZES.padding,
    ...FONTS.h4,
  },
  ieLocationImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
    marginRight: 5,
  },
  ieLocationText: {
    marginBottom: SIZES.base,
    ...FONTS.body4,
    color: COLORS.darkgray,
  },
  iePriceContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
  },
  iePriceText: {
    color: COLORS.white,
    ...FONTS.body3,
  },
});

export default ieStyles;
