import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Image,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import TopBar from '../../components/TopBar';
import DiscutionInput from '../../components/Discution/DiscutionInput';

export default class Discution extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBar navigation={this.props.navigation} backPage="AllDiscutions" />
          <View style={styles.rowContainer}>
            <Image source={{uri: this.props.navigation.state.params.thumbnail}}
            style={styles.thumbnail} />
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.navigation.state.params.title}
              </Text>
            </View>
            <TouchableOpacity
                        title=""
                        style={styles.btnOption}
                    >
                        <Icon name="ios-videocam" type="ionicon" size={25} color="#ffffff" />
            </TouchableOpacity>
          </View>
          <DiscutionInput receiverThumbnail={this.props.navigation.state.params.thumbnail}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    zIndex: 1000,
    height: 100,
    marginRight: 20,
    paddingLeft: 70,
    paddingTop: 80,
    marginTop: -80,
    marginBottom: 80,
    marginLeft: 0,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  thumbnail: {
    width: 50, 
    height: 50, 
    borderRadius: 400/ 2
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  },
  btnOption: {
    height: 40,
    borderRadius: 50,
    paddingTop: 7,
    paddingLeft: 2,
    marginLeft: 5,
    marginTop: -5,
    width: 40,
    backgroundColor: "#0275d8",
    color: 'grey'
  },
});