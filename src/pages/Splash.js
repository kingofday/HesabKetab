import React from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

import { unit } from '../Businness/domain';
import { Create, Read, Update } from '../Businness/db';

export default class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.reset('root');
        }, 2000)
    }

    render() {
        let t = new unit('unit7',12);
        //t.id = 5
        Create(t);
        //Update('unit',t);
        Read('unit', (d) => { console.log(d); });
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {/* <Image style={{marginBottom: 10}} source={require('../assets/images/kingofday.png')}/> */}
                    <Text style={{ color: '#ffffff' }}>در حال بارگذاری ...</Text>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </LinearGradient>
        );
    }
}