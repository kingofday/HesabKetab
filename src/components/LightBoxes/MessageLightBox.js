import React from 'react';
import {View, Text } from 'react-native';

export default class MessageLightBox extends React.Component {
    render() {
        return (
            <View>
                <Text>light box</Text>
                <Icon name='menu' />
            </View>
        );
    }
}