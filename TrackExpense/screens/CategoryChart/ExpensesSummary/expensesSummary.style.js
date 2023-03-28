//create style
import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../../constants';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
  },
  itemRowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBox: {
    width: 20,
    height: 20,

    borderRadius: 5,
  },
  itemText: {
    marginLeft: SIZES.base,

    ...FONTS.h3,
  },
  itemExpensesContainer: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },
  itemExpensesText: {
    ...FONTS.h3,
  },
});

export default styles;
