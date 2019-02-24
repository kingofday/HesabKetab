import React, { Component } from 'react';
import { View, Item, Text, Left, Right, CheckBox } from 'native-base';

//Comps
import { commaThousondSeperator } from '../assets/util';

export default class HistoryItem extends React.Component {
    componentWillMount() {
        this.setState({ selected: false });
    }
    _selectCost() {
        this.props.onPressItem(this.props.item.id, !this.state.selected);
        this.setState(prev => ({ ...prev, selected: !prev.selected }))
    }
    render() {
        var item = this.props.item;
        return (
            <Item
                style={{ backgroundColor: '#ffffff', flexDirection: "row",padding:7.5 }}>
                <View style={{ flex: 0.3 }}>
                    <CheckBox checked={this.state.selected} onPress={this._selectCost.bind(this)} />
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', paddingLeft: 15 }}>{item.title}</Text>
                    <Text>{commaThousondSeperator(item.price.toString())}</Text>
                </View>
            </Item>
        );
    }
}