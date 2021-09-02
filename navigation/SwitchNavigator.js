import React from 'react';
import TabNavigator from './TabNavigator.js'
import AuthNavigator from './AuthNavigator.js'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Home: { 
      screen: TabNavigator
    },
    Auth: { 
      screen: AuthNavigator
    }
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(SwitchNavigator);