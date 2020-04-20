import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import { RNCamera } from 'react-native-camera'
import { Icon } from 'react-native-elements';

export default class ProfilCamera extends Component {
    state = {
        hasCameraPermission: null,
        type: RNCamera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _flipCamera = () => {
        this.setState({
            type:
                this.state.type === RNCamera.Constants.Type.back
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back,
        });
    };

    _takePicture = async () => {
        let photo = await this.camera.takePictureAsync({ base64: true });
        try {
            this.props.navigation.navigate('Profile',{profilePreview: photo.uri});
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <RNCamera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                            }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    marginTop: 50,
                                    marginRight: 20
                                }}
                                onPress={() => { this._flipCamera() }}>
                                <Icon name="ios-repeat" type="ionicon" size={40} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignSelf: 'flex-end',
                                    backgroundColor: 'transparent',
                                }}>
                                <TouchableOpacity
                                    style={{
                                        alignSelf: 'center',
                                        alignItems: 'center',
                                        marginBottom: 30
                                    }}
                                    onPress={() => { this._takePicture() }}>
                                    <Icon name="md-aperture" type="ionicon" size={80} color="#ffffff" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </RNCamera>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});