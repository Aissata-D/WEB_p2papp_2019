import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage
} from 'react-native';
import {ImagePicker} from 'react-native-image-picker';
import { Input, Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: [],
      loaderContainer: {
        backgroundColor: '#ffffff',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      profilUri: "https://covers.openlibrary.org/w/id/7984916-M.jpg",
      nickName: ""
    };
  }

  async componentWillMount() {
    try {
      const profilPicture = await AsyncStorage.getItem('profilePicture');
      const nickName = await AsyncStorage.getItem('nickname');


      if (this.props.navigation.state.params) {
        this.setState({profilUri: this.props.navigation.state.params.profilePreview});    
      } else if (profilPicture !== null) {
        this.setState({profilUri: profilPicture});             
      }

      if (nickName) {
        this.setState({nickName: nickName});
        this.setState({text: nickName});
        return nickName;
      } else {
        const randomNumber = Math.floor(Math.random() * 10000000000) + 1;
        
        await AsyncStorage.setItem('nickname', '#' + randomNumber);
        this.setState({nickName: nickName});
      }
    } catch (error) {
      // Error retrieving data
    }
    
  }

  _setError = (error) => {
    this.setState({
      loaderContainer: {
        backgroundColor: '#c44741',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
    this.setState({
      error:[error]
    });
  };

  _setSuccess = (error) => {
    this.setState({
      loaderContainer: {
        backgroundColor: '#5cb85c',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });
    this.setState({
      error:['Profil updated']
    });
    setTimeout(() => {
      this.setState({
        loaderContainer: {
          backgroundColor: '#ffffff',
          color: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
      this.setState({
        error:['']
      });
    }, 2000);
  };
  

  _setProfil = async () => {
    if (this.state.text != '') {
      this.setState({nickName: this.state.text});
      await AsyncStorage.setItem('nickname', this.state.text);
      this._setSuccess();
    } else {
      this._setError('Please enter your name !');
    }
    await AsyncStorage.setItem('profilePicture', this.state.profilUri);
  };
  
  _renderCamera = () => {
    _renderCamera = this.props.navigation.navigate('ProfilCamera');
  }

  _renderMessage = () => {
    if (this.state.error[0]) {
      return (
        <View>
          <Text style={styles.message}>{this.state.error[0]}</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={this.state.loaderContainer}  resetScrollToCoords={{ x: 0, y: 0 }} enabled>
        <View style={this.state.loaderContainer}>
          <Text style={styles.title}>Profil</Text>
          <TouchableOpacity
            title=""
            onPress={this._renderCamera}
          >
            <Image style={styles.thumbnail} source={{uri: this.state.profilUri }} />
          </TouchableOpacity>
          {this._renderMessage()}
          <TextInput
            defaultValue={this.state.nickName}
            style={styles.codeInput}
            placeholderTextColor="white"
            placeholder='Enter your nickname'
            editable={true}
            textAlign={'center'}
            onChangeText={(text) => this.setState({ text })}
          />
          <TouchableOpacity
            title=""
            style={styles.btnSend}
            onPress={this._setProfil}
          >
            <Icon name="md-checkmark" type="ionicon" size={28} color="#ffffff" />
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
    color: 'grey'
  },
  message: {
    marginTop: 10,
    fontSize: 20,
    color: '#ffffff'
  },
  loaderContainer: {
    backgroundColor: '#ffffff',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    width: 200, 
    height: 200, 
    borderRadius: 400/ 2
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
    padding: 10,
    marginTop: 30,
    borderRadius: 50,
    fontSize: 20,
    color: 'gray'
  }
});