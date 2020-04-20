import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import giphyError from '../assets/animations/giphyError.gif'
import giphySearch from '../assets/animations/giphySearch.gif'
import { Input, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export default class Explore extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: [],
      loaderContainer: {
        backgroundColor: '#6ae2f0',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    };
  }

  _displayError = () => {
    this.setState({
      loaderContainer:
      {
        backgroundColor: '#c44741',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
    this.setState({
      error:['User not found']
    });
  };
  
  _renderAnimations = () => {
    if (!this.state.error[0]) {
      return (
        <View>
          <Image style={styles.loader} source={giphySearch} resizeMode="contain" />
        </View>
      );
    } else {
      return (
        <View>
          <Image style={styles.loader} source={giphyError} resizeMode="contain" />
        </View>
      );
    }
  };

  _renderMessage = () => {
    if (this.state.error[0]) {
      return (
        <View>
          <Text style={styles.title}>User not found !</Text>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>Add your friends !</Text>          
        </View>
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={this.state.loaderContainer}  resetScrollToCoords={{ x: 0, y: 0 }} enabled>
        <View style={this.state.loaderContainer}>
          {this._renderAnimations()}
          <View>
            {this._renderMessage()}
          </View>
          <TextInput
            style={styles.codeInput}
            placeholderTextColor="#FF5733"
            placeholder="Enter your friend code here"
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <TouchableOpacity
            title=""
            style={styles.btnSend}
            onPress={this._displayError}
          >
            <Icon name="md-send" type="ionicon" size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  logo: {
    height: 60,
    width: 60,
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  loaderContainer: {
    backgroundColor: '#c44741',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    height: 150
  },
  btnSend: {
    height: 50,
    borderRadius: 50,
    paddingTop: 20 / 2,
    paddingLeft: 2,
    width: 50,
    backgroundColor: "#5cb85c",
    marginTop: 20,
  },
  codeInput: {
    color: '#FFFFFF',
    padding: 10,
    borderRadius: 50,
    fontSize: 20,
    backgroundColor: '#DCDCDC'
  }
});