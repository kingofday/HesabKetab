import React from 'react';

import { Header, Title, Button, Right, Left, Body, Icon, Text } from 'native-base';

export default class UnitHeader extends React.Component {
    render() {
        return (<Header>
            <Left style={{ padding: 7.5 }}>
                <Text style={{ color: '#ffffff' }}>({this.props.count})</Text>
            </Left>
            <Body style={{ alignItems: 'center' }}>
                <Title>{this.props.title}</Title>
            </Body>
            <Right style={{ padding: 7.5 }}>
                <Button transparent onPress={() => this.props.delete()}>
                    <Icon name='trash' />
                </Button>
            </Right>

        </Header>);
    }
}