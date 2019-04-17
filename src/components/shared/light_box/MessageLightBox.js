import React from 'react';
import {View, Text } from 'react-native';

//cops
import BaseLightbox  from './BaseLightBox';

export default class MessageLightBox extends React.Component {
    render() {
        return (
            <BaseLightbox verticalPercent={0.7} horizontalPercent={0.5}>
                <Text>light box</Text>
               
            </BaseLightbox>
        );
    }
}