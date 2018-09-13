import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { createBottomTabNavigator, TabNavigator } from 'react-navigation'
import { Icon } from "native-base"

export default class MainScreen extends React.Component {

    static navigationOptions = {

        header: null

    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}

const AppTabNavigator = createBottomTabNavigator({
// const AppTabNavigator = TabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    SearchTab: {
        screen: SearchTab
    },
    AddMediaTab: {
        screen: AddMediaTab
    },
    LikesTab: {
        screen: LikesTab
    },
    ProfileTab: {
        screen: ProfileTab
    }
}, {
    // animationEnabled: true,
    // swipeEnabled: true,
    // tabBarPosition: 'bottom',
    tabBarOptions: {
        style:{
            ...Platform.select({
                android: {
                    backgroundColor: '#fff'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
