import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Icon } from "native-base"
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class AddMediaTab extends Component {

    static navigationOptions = {

      tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square-o" style={{ color: tintColor, fontSize: 32 }} />
      )
    }

    render() {
        return (
          <View style={styles.container}>
            <Text>
                AddMediaTab
            </Text>
          </View>
        );
      }
}

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});