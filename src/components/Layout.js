import React, { Component } from 'react';
import { Container, Content, Header, Footer, FooterTab, Title, Button, Text, Right, Left, Body, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';


const defaultHeader = (title) => (<Header>
    <Left>
        <Button transparent onPress={() => Actions.drawerOpen()}>
            <Icon name='menu' />
        </Button>
    </Left>
    <Body>
        <Title>{title}</Title>
    </Body>
    <Right />
</Header>);

export default class Layout extends Component {
    componentWillMount() {
        if (!this.props.header)
            this.setState({ header: defaultHeader('') });
        else this.setState({ header: this.props.header });
        console.log('header')
        console.log(this.props.header)
    }

    componentWillReceiveProps({ header }) {
        this.setState({ ...this.state, header })
    }

    render() {
        this.props.setHeader = (comp) => {
            this.setState({ header: comp });
        }
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <Container>
                    {this.state.header}
                    <Content>
                        {this.props.children}
                    </Content>
                </Container>
            </LinearGradient>
        );
    }
}