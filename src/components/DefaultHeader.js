import React from 'react'
import { Actions } from 'react-native-router-flux';
import { Header, Left, Body, Right, Title, Icon, Button } from 'native-base';

export default class DefaultHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.drawerOpen()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}