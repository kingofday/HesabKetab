import React from 'react';
import { Header, Title, Button, Right, Left, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
//cpmps
import commonStyles from '../../../styles'

export default class DefaultHeader extends React.Component {
    render() {
        return (<Header style={{ backgroundColor: 'navy' }}>
            <Left style={{ flex: 0.3, padding: 3 }}>
                <Button transparent onPress={() => Actions.drawerOpen()}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body style={{ flex: 0.4, alignItems: 'center' }}>
                <Title style={[commonStyles.fontFa, { fontSize: 14 }]}>{this.props.title}</Title>
            </Body>
            <Right style={{ flex: 0.3 }} />
        </Header>);
    }
}