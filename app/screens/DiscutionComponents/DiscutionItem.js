import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';
export default class DiscutionItem extends Component {

  _onDiscution = () => {
    let id = this.props.id;
    let title = this.props.title;
    let thumbnail = this.props.thumbnail;
    
    this.props.navigation.navigate('Discution', {
      id: id,
      title: title,
      thumbnail: thumbnail
    });
  }

  render() {
    return(
      <TouchableOpacity onPress={this._onDiscution}>
        <View style={styles.rowContainer}>
          <Image source={{uri: this.props.thumbnail}}
          style={styles.thumbnail} />
          <View style={styles.rowText}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
              {this.props.title}
            </Text>
            <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
              {this.props.author}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 1,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
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
  }
});