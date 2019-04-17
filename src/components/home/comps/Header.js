import React from 'react';

import { Header, Title, Button, Right, Left, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import commonStyles from '../../shared/styles';

export default class HomeHeader extends React.Component {
    render() {
        return (
            <Header style={{ backgroundColor: 'navy' }}>
                <Left style={{ flex: 0.4, padding: 7.5 }}>
                    <Text style={{ color: '#ffffff' }}>({this.props.count})</Text>
                </Left>
                <Body style={{ flex: 0.2, alignItems: 'center' }}>
                    <Title style={[commonStyles.fontFa,{fontSize: 14}]}>{this.props.title}</Title>
                </Body>
                <Right style={{ flex: 0.4, padding: 7.5 }}>
                    <Button transparent onPress={() => this.props.delete()}>
                        <Icon name='trash' />
                    </Button>
                    <Button transparent onPress={() => Actions.result()}>
                        <Icon name='calculator' />
                    </Button>
                </Right>

            </Header>);
    }
}