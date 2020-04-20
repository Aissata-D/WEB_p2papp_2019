import React, { Component } from 'react';
import { Dimensions, Platform, TouchableOpacity } from 'react-native';
import {
    StatusBar,
    StyleSheet,
    FlatList,
    Text,
    View,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { Icon, Input, Badge } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

export default class DiscutionInput extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            showTime: false
        };
    }

    _onDisplayTime = () => {
        if (this.state.showTime == false){
            this.setState({showTime: true})
        } else {
            this.setState({showTime: false})
        }
    }

    _renderTime = () => {
        if (this.state.showTime) {
            return (
                <Text style={styles.discutionTime}>
                    23/08/19 14:00{"\n"}
                </Text>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.container} contentContainerStyle={{ paddingBottom: 50 }} resetScrollToCoords={{ x: 0, y: 0 }} enabled>
                <ScrollView style={styles.discution}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{uri: this.props.receiverThumbnail}} style={styles.thumbnailReceived}/>
                        <Text style={styles.bubbleSend} onPress={this._onDisplayTime}>
                            {this._renderTime()}
                            BONJOURRRRR  AISSATA !!!
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.bubbleReceived} onPress={this._onDisplayTime}>
                            {this._renderTime()}
                            Hey, What’s Up?
                        </Text>
                        <Image source={{uri: this.props.receiverThumbnail}} style={styles.thumbnail}/>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        title=""
                        style={styles.btnOption}
                    >
                        <Icon name="ios-call" type="ionicon" size={20} color="#FF5733" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        title=""
                        style={styles.btnOption}
                    >
                        <Icon name="ios-images" type="ionicon" size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        title=""
                        style={styles.btnOption}
                    >
                        <Icon name="ios-microphone" type="ionicon" size={20} color="#ffffff" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.bottom}
                        editable={true}
                        multiline={true}
                        placeholder="Message..."
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TouchableOpacity
                        title=""
                        style={styles.btnSend}
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
        paddingLeft: 10,
        paddingRight: 10
    },
    thumbnail: {
        width: 30, 
        height: 30,
        marginLeft: 10, 
        borderRadius: 400/ 2
    },
    thumbnailReceived: {
        width: 30, 
        height: 30,
        marginRight: 10, 
        borderRadius: 400/ 2
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    discution: {
        height: height - 180,
    },
    rowBackNavigation: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 35,
        paddingLeft: 10,
        color: '#F5FCFF',
    },
    bottom: {
        marginTop: 20,
        maxHeight: 20,
        paddingLeft: 20,
        width: width - 170,
        borderRadius: 40,
        borderColor: 'grey',
    },
    btnSend: {
        height: 50,
        borderRadius: 50,
        paddingTop: 20 / 2,
        paddingLeft: 2,
        width: 50,
        backgroundColor: "#0275d8",
    },
    btnOption: {
        marginTop: 15,
        height: 30,
        borderRadius: 50,
        paddingTop: 5,
        paddingLeft: 2,
        marginLeft: 2,
        width: 30,
        backgroundColor: "#0275d8",
        color: 'grey'
    },
    bubbleSend: {
        maxWidth: 150,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
        overflow: "visible",
        color: "#ffffff",
        backgroundColor: "#0275d8"
    },
    bubbleReceived: {
        maxWidth: 150,
        maxHeight: undefined,
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 20,
        overflow: "visible",
        color: "#0CB507",
        backgroundColor:"#0A0A0A", 
        //"#5cb85c",
    },
    discutionTime:{
        color: '#DCDCDC',
        fontSize: 10
    }
});