import React, { Component } from 'react';
// import { I18nManager } from 'react-native';
// I18nManager.forceRTL(true);
import { Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class Layout extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <Container style={{ flex: 1, backgroundColor: 'transparent' }}>
                    {this.props.children}
                </Container>
            </LinearGradient>


        );
    }
}