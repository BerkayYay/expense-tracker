import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS, SIZES, icons} from '../constants';

import Navbar from './Navbar/navbar';
import Header from './Header/header';
import CategoryHeader from './Header/categoryHeader';
import CategoryList from './CategoryList/categoryList';
import IncomingExpenses from './IncomingExpenses/incomingExpenses';
import CategoryChart from './CategoryChart/categoryChart';
import ExpensesSummary from './CategoryChart/ExpensesSummary/expensesSummary';

const Home = () => {
  const viewMode = useSelector(state => state.viewMode);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray2,
      }}>
      {/* Navbar Section */}
      <Navbar />

      {/* Header Section */}
      <Header />

      {/* Category Header Section */}
      <CategoryHeader />

      <ScrollView contentContainerStyle={{paddingBottom: 60}}>
        {viewMode == 'list' && (
          <View>
            <CategoryList />
            <IncomingExpenses />
          </View>
        )}
        {viewMode == 'chart' && (
          <View>
            <CategoryChart />
            <ExpensesSummary />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
