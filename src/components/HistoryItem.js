import React, {Component} from 'react';
import {Card, CardItem,Body,Text  } from 'native-base';

export default class HistoryItem extends React.Component{
    render(){
        var item = this.props.item;
        return (
            <Card style={{flex:1,backgroundColor:'#ffffff',direction:"rtl"}}>
                <CardItem >
                    <Body>
                        <Text style={{color:'#000000'}}>{item.title}</Text>
                        <Text>{item.date}</Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}