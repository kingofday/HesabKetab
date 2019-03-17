import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity,Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

//comps
import words from '../../shared/words'
import commonStyles from '../../shared/styles'
import splashStyles from './styles'

export default class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.reset('root');
        }, 3000)
    }
    _redirectToKingofday() {
        Linking.openURL("http://www.kingofday.ir").catch((err) => console.error('An error occurred', err));
    }
    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={splashStyles.wrapper}>
                <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <ActivityIndicator size="large" color="white" />
                    <View style={{ paddingTop: 20, }}>
                        <Text style={[{ color: '#ffffff' }, commonStyles.fontFa]}>{words.Loading}</Text>
                    </View>
                </View>

                <TouchableOpacity style={{ flex: 0.5, paddingBottom: 10,alignItems: 'center', justifyContent: 'flex-end' }} onPress={() => { this._redirectToKingofday() }}>
                    <Image source={require('../../../src/assets/images/kingofday.png')}/>
                    <Text style={{ color: 'white' }}>Kingofday.ir</Text>
                </TouchableOpacity >
            </LinearGradient>
        );
    }
}