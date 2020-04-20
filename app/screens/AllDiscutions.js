import React, { Component } from 'react';
import giphy from '../assets/animations/giphy.gif'
import logo from '../../assets/icon.png'
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('window');
import DiscutionItem from './DiscutionComponents/DiscutionItem';

export default class AllDiscutions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Harry Potter and the Goblet of Fire',
          author: 'J. K. Rowling',
          thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
          id: 2,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
      ]
    }
  }

  _renderItem = ({ item }) => (
    <DiscutionItem
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
      navigation={this.props.navigation}
    />
  );

  _keyExtractor = (item, index) => item.id;

  _renderDiscutions = () => {
    if (this.state.books[0]) {
      return (
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      );
    } else {
      return (
        <View style={styles.loaderContainer}>
          <View>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>
              Chat with your friends !
              </Text>
          </View>
          <Image style={styles.loader} source={giphy} resizeMode="contain" />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <StatusBar
          barStyle="light-content"
        />
        {this._renderDiscutions()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: -10,
    fontWeight: 'bold',
    color: '#777'
  },
  loader: {
    marginTop: -40,
    alignSelf: "center",
    width: width / 1.4,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});