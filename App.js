/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * riogunawan INstagram UI
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { StackNavigator } from "react-navigation";
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
