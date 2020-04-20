import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';
import { Icon } from 'react-native-elements';

export default class TopBar extends Component {
    

    _onNavigateBack = () => {
        backPage =  this.props.backPage;
        _onNavigateBack = this.props.navigation.navigate(backPage);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._onNavigateBack} style={{zIndex: 3000}}>
                <View style={styles.rowBackNavigation}>
                    <Icon name="md-arrow-back" type="ionicon" size={40} color="#0275D8" />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5733',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  rowBackNavigation: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 35, 
    paddingLeft: 10,
    backgroundColor: '#FF5733',
  }
});