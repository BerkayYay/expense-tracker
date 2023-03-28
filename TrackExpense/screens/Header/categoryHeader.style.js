// This is styles.js:
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: SIZES.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleText1: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  headerTitleText2: {
    color: COLORS.darkgray,
    ...FONTS.body4,
  },
  headerButtonContainer: {
    flexDirection: 'row',
  },
  headerChartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,

    borderRadius: 25,
  },
  headerChartButtonImage: {
    width: 20,
    height: 20,
  },
  headerListButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,

    borderRadius: 25,
  },
  headerListButtonImage: {
    width: 20,
    height: 20,
  },
});

export default styles;
