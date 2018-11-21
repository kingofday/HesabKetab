import React, {Component} from 'react';
import {View,Text } from 'react-native';
export default class HistoryItem extends React.Component{
    render(){
        var item = this.props.item;
        return (
            <View style={{flex:1,backgroundColor:'#ffffff',direction:"rt"}}>
                <Text style={{color:'#000000'}}>{item.title}</Text>
                <Text>{item.date}</Text>
            </View>
        );
    }
}