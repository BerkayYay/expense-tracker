import {useDispatch, useSelector} from 'react-redux';
import {setSelectedCategory} from '../Redux/reducers';

const dispatch = useDispatch();
const categories = useSelector(state => state.categories);

function processCategoryDataToDisplay() {
  // Filter expenses with "Confirmed" status
  let chartData = categories.map(item => {
    let confirmExpenses = item.expenses.filter(a => a.status == 'C');
    var total = confirmExpenses.reduce((a, b) => a + (b['total'] || 0), 0);

    return {
      name: item.name,
      y: total,
      expenseCount: confirmExpenses.length,
      color: item.color,
      id: item.id,
    };
  });

  // Filter out the categories with no data/expenses
  let filterChartData = chartData.filter(a => a.y > 0);

  // Calculate the total expenses
  let totalExpense = filterChartData.reduce((a, b) => a + (b['y'] || 0), 0);

  // Calculate the percentage and repopulate the chart data
  let finalChartData = filterChartData.map(item => {
    let percentage = ((item.y / totalExpense) * 100).toFixed(0);
    return {
      label: `${percentage}%`,
      y: Number(item.y),
      expenseCount: item.expenseCount,
      color: item.color,
      name: item.name,
      id: item.id,
    };
  });

  return finalChartData;
}

function setSelectedCategoryByName(name) {
  let category = categories.filter(a => a.name == name);
  dispatch(setSelectedCategory(category[0]));
}

export {processCategoryDataToDisplay, setSelectedCategoryByName};
