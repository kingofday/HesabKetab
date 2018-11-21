import React, {Component} from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import { Row } from 'native-base';


export default class SideMenu extends React.Component {
    componentWillMount(){
        // this.setState({
           
        // });
    }
    render(){
        return (
        <View>
            <Row>
                <TouchableOpacity>
                    <Text>ok</Text>
                </TouchableOpacity>
            </Row>
        </View>
        );
    }
}