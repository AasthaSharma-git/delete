
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
render(){
  return(
       <AppContainer/>
  )
}




}

const AppNavigator=createBottomTabNavigator(
  { Transaction:{screen:TransactionScreen,
    navigationOptions:{
    tabBarIcon:()=>{
      return <Image source={require('./assets/appIcon.png')} style={{width:30,height:30}}/>
    }

  }},
   Search:{screen:SearchScreen,navigationOptions:{
    tabBarIcon:()=>{
      return <Image source={require('./assets/appIcon.png')} style={{width:30,height:30}}/>
    }

  }},
  },
 
  
  )

const AppContainer=createAppContainer(AppNavigator)