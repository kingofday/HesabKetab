import React from 'react';
import { Header, Title, Button, Right, Left, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export class HomeHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left style={{ padding: 7.5 }}>
                    <Text style={{ color: '#ffffff' }}>({this.props.ids.length})</Text>
                </Left>
                <Body style={{ alignItems: 'center' }}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right style={{ padding: 7.5 }}>
                    <Button transparent onPress={() => this.props.delete()}>
                        <Icon name='trash' />
                    </Button>
                    <Button transparent onPress={() => Actions.result({ ids: this.props.ids })}>
                        <Icon name='calculator' />
                    </Button>
                </Right>

            </Header>);
    }
}