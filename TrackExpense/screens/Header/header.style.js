import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerTitleText1: {
    color: COLORS.primary,
    ...FONTS.h2,
  },
  headerTitleText2: {
    color: COLORS.darkgray,
    ...FONTS.h3,
  },
  headerContainer2: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  headerContainer2ImageContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer2Image: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightBlue,
  },
  headerContainer2TextContainer: {
    marginLeft: SIZES.padding,
  },
  headerContainer2Text1: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  headerContainer2Text2: {
    color: COLORS.darkgray,
    ...FONTS.body3,
  },
});

export default styles;
