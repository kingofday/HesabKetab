import React from 'react';
import { Header, Title, Button, Right, Left, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class DefaultHeader extends React.Component {
    render() {
        return (<Header style={{ backgroundColor: 'navy' }}>
            <Left style={{ padding: 3 }}>
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