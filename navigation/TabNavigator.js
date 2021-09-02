import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home.js'
import Search from '../screens/Search.js'
import Upload from '../screens/Upload.js'
import Activity from '../screens/Activity.js'
import Profile from '../screens/Profile.js'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


const TabNavigator = createBottomTabNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={ focused ? 'ios-home' :'ios-home-outline'} size={32} />
        ) 
      }
    },
    Search: { 
      screen: Search,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={ focused ? 'ios-search' :'ios-search-outline'} size={32} />
        ) 
      }
    },
    Upload: { 
      screen: Upload,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'} size={32} />
        ) 
      }
    },
    Activity: { 
      screen: Activity,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? 'ios-heart' : 'ios-heart-outline'} size={32} />
        ) 
      }
    },
    Profile: { 
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: ({focused}) => (
          <Ionicons name={focused ?'ios-person':'ios-person-outline'} size={32} />
        ) 
      }
    }
  }, 
  { 
    tabBarOptions: {
      style: {
        paddingVertical: 10,
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);