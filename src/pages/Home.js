import React, {Component} from 'react';
import {View, FlatList,Text } from 'react-native';
import HistoryItem from '../components/HistoryItem';

export default class Home extends React.Component {
    componentWillMount(){
        // this.setState({
           
        // });
    }
    _loadInfo(){
        return [{key:"1",title:'test1',date:'1397/08/20'}];
    }
    render(){
        return (
            <View>
                <FlatList data={this._loadInfo()} 
                renderItem={(item)=>(<HistoryItem item={item.item}/>)}>
            
                </FlatList>
            </View>
        );
    }
}