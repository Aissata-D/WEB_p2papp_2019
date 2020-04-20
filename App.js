import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {TabsNavigator} from './app/router';
import {BookcaseStack} from './app/router';

export default createAppContainer(createSwitchNavigator(
  {
    TabsNavigator: TabsNavigator,
    BookcaseStack: BookcaseStack
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
