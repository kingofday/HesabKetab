import React, { Component } from 'react';
import { Container, Content, Header, Footer, FooterTab, Title, Button, Text, Right, Left ,Body, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Actions } from 'react-native-router-flux';

export default class HeaderExample extends Component {
    render() {
        let header;
        if (!this.props.hideHeader) {
            header =
                (
                    <Header>
                        <Left>
                            <Button transparent onPress={()=>Actions.drawerOpen()}>
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
        let footer;
        if (!this.props.hideFooter) {
            footer = (
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            );
        }
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <Container>
                    {header}
                    <Content>
                        {this.props.children}
                    </Content>
                    {footer}
                </Container>
            </LinearGradient>
        );
    }
}