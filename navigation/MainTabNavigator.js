import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SummaryScreen from '../screens/SummaryScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ReviewsScreen from '../screens/ReviewsScreen';
import {Button, Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
   tabBarIcon: (
            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/home.png')}/>
   )
};

const SummaryStack = createStackNavigator({
  Summary: SummaryScreen,
});

SummaryStack.navigationOptions = {
  tabBarLabel: 'Summary',
  tabBarIcon: (
            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/summary-icon.png')}/>
   )
};

const PortfolioStack = createStackNavigator({
  Portfolio: PortfolioScreen,
});

PortfolioStack.navigationOptions = {
  tabBarLabel: 'Portfolio',
  tabBarIcon: (
            <Image style={{ width: 20, height: 20 }} source={require('../assets/images/portfolio.png')}/>
   )
};

const ReviewsStack = createStackNavigator({
  Reviews: ReviewsScreen,
});

ReviewsStack.navigationOptions = {
  tabBarLabel: 'Reviews',
  tabBarIcon: (
            <Image style={{ width: 50, height: 50 }} source={require('../assets/images/reviews.jpg')}/>
   )
};

export default createBottomTabNavigator({
  HomeStack,
  SummaryStack,
  PortfolioStack,
  ReviewsStack,
});
