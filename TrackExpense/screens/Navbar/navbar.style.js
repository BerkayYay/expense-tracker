import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  navbarBackImageContainer: {
    justifyContent: 'center',
    width: 50,
  },
  navbarBackImage: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  navbarMoreImageContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 50,
  },
  navbarMoreImage: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
});

export default styles;
