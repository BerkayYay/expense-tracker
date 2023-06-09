import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {
  processCategoryDataToDisplay,
  setSelectedCategoryByName,
} from '../../helpers/categoryFunctions';
import {useSelector} from 'react-redux';
import {VictoryPie} from 'victory-native';

const renderChart = () => {
  const selectedCategory = useSelector(state => state.selectedCategory);
  let chartData = processCategoryDataToDisplay();
  let colorScales = chartData.map(item => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b['expenseCount'] || 0),
    0,
  );

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <VictoryPie
        data={chartData}
        colorScale={colorScales}
        labels={({datum}) => `${datum.y}`}
        radius={({datum}) =>
          selectedCategory && selectedCategory.name == datum.name
            ? SIZES.width * 0.4
            : SIZES.width * 0.4 - 10
        }
        innerRadius={70}
        labelRadius={({innerRadius}) => (SIZES.width * 0.4 + innerRadius) / 2.5}
        style={{
          labels: {fill: COLORS.white, ...FONTS.body3},
          parent: {...styles.shadow},
        }}
        width={SIZES.width * 0.8}
        height={SIZES.width * 0.8}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    target: 'labels',
                    mutation: props => {
                      let categoryName = chartData[props.index].name;
                      setSelectedCategoryByName(categoryName);
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <View style={{position: 'absolute', top: '42%', left: '42%'}}>
        <Text style={{...FONTS.h1, textAlign: 'center'}}>
          {totalExpenseCount}
        </Text>
        <Text style={{...FONTS.body3, textAlign: 'center'}}>Expenses</Text>
      </View>
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

export default renderChart;
