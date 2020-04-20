import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import AllDiscutions from './screens/AllDiscutions';
import Explore from './screens/Explore';
import ProfilCamera from './screens/ProfilCamera';
import Profile from './screens/Profile';
import Discution from './screens/DiscutionComponents/Discution';

let screen = Dimensions.get('window');


export const BookcaseStack = createStackNavigator({
  'ProfilCamera': {
    screen: ProfilCamera,
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }),
  },
  'Discution': {
    screen: Discution,
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    })
  }
});

export const TabsNavigator = createBottomTabNavigator({
  'AllDiscutions': {
    screen: AllDiscutions,
    navigationOptions: {
      tabBarLabel: 'Discutions',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-chatbubbles" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Explore': {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-search" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="md-contact" type="ionicon" size={28} color={tintColor} />
    },
  },
},
  {
    style: {
      backgroundColor: '#ffffff',
      elevation: 10,
      shadowOffset: { width: 50, height: 50 },
      shadowColor: 'black',
      shadowOpacity: 1.0,
    },
  });