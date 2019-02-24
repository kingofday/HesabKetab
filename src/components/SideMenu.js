import React from 'react';
import { Text,Icon, Item, Content } from 'native-base';
import {Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';

//coms
import words from '../assets/Wrods';
import {drawer} from '../assets/Styles/Index';

EStyleSheet.build();
export default class SideMenu extends React.Component {
    componentWillMount() {
        // this.setState({

        // });
    }
    render() {
        return (
            <Content>
                <Item style={drawer.header}>
                    <Image style={drawer.headerImage} source={require("../assets/images/home.png")}/>
                </Item>
                <Item style={drawer.item} onPress={()=>Actions.unitManage()}>
                    <Icon name="md-add" style={drawer.routeIcon} />
                    <Text style={drawer.routeName}>{words.DefineUnit}</Text>
                </Item>
                <Item style={drawer.item} onPress={()=>Actions.defineCost()}>
                    <Icon name="cash" style={drawer.routeIcon} />
                    <Text style={drawer.routeName}>{words.SaveDebt}</Text>
                </Item>
            </Content>
        );
    }
}