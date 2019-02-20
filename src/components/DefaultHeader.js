import React from 'react'
import { Actions } from 'react-native-router-flux';
import { Header, Left, Body, Right, Title, Icon, Button } from 'native-base';

export default class DefaultHeader extends React.Component {
    componentWillMount(){
        this.setState({title:''});
    }
    componentWillReceiveProps({title}) {
        console.log('title is:'+title);
        this.setState({...this.state,title})
      }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => Actions.drawerOpen()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.state.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}