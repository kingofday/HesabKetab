import React from 'react';
import { Text, Icon, Item, Content } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

//coms
import words from '../../words';
import drawer from './styles';
import styles from '../../styles';


export default class SideMenu extends React.Component {
    render() {
        return (
            <Content>
                <Item style={drawer.header}>
                    <Image style={drawer.headerImage} source={require("../../../assets/images/home.png")} />
                </Item>
                <Item style={drawer.item} onPress={() => Actions.unitManage()}>
                    <Icon name="md-add" style={drawer.routeIcon} />
                    <Text style={[drawer.routeName, styles.fontFa]}>{words.DefineUnit}</Text>
                </Item>
                <Item style={drawer.item} onPress={() => Actions.home()}>
                    <Icon name="cash" style={drawer.routeIcon} />
                    <Text style={[drawer.routeName, styles.fontFa]}>{words.SaveCost}</Text>
                </Item>
            </Content>
        );
    }
}