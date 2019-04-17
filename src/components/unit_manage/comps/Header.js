import React from 'react';

import { Header, Title, Button, Right, Left, Body, Icon, Text } from 'native-base';

export default class UnitHeader extends React.Component {
    render() {
        return (<Header>
            <Left style={{ flex: 0.2, padding: 7.5 }}>
                <Text style={{ color: '#ffffff' }}>({this.props.count})</Text>
            </Left>
            <Body style={{ flex: 0.6, alignItems: 'center' }}>
                <Title>{this.props.title}</Title>
            </Body>
            <Right style={{ flex: 0.2, padding: 7.5 }}>
                <Button transparent onPress={() => this.props.delete()}>
                    <Icon name='trash' />
                </Button>
            </Right>

        </Header>);
    }
}