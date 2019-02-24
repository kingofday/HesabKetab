import React from 'react';

import { Header, Title, Button, Right, Left, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class DefaultHeader extends React.Component {
    render() {
        return (<Header style={{ backgroundColor: 'navy' }}>
            <Left style={{padding:3}}>
                <Button transparent onPress={() => Actions.drawerOpen()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{this.props.title}</Title>
            </Body>
            <Right />
        </Header>);
    }
}

export class HomeHeader extends React.Component {
    render() {
        return (<Header>
            <Left style={{padding:7.5}}>
                <Text style={{ color: '#ffffff' }}>({this.props.count})</Text>
            </Left>
            <Body style={{alignItems:'center'}}>
                <Title>{this.props.title}</Title>
            </Body>
            <Right style={{padding:7.5}}>
                <Button transparent onPress={() => console.log('calculate...')}>
                    <Icon name='calculator' />
                </Button>
            </Right>

        </Header>);
    }
}