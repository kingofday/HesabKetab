import React, { Component } from 'react';
import { View, Card, CardItem, Body, Text, Left, Right, CheckBox } from 'native-base';

export default class HistoryItem extends React.Component {
    componentWillMount() {
        this.setState({ selected: false });
    }
    _selectDebt() {
        console.log('pressed' + item.id);
        this.props.changeHeader(item.id, !this.state.selected);
        this.setState((prev) => ({ ...prev, selected: !prev.selected }));
    }
    render() {
        var item = this.props.item;
        return (
            <Card style={{ flex: 1, backgroundColor: '#ffffff', direction: "rtl" }}>
                <CardItem onPress={() => { this._selectDebt(item.id) }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 50 }}>
                            <CheckBox checked={true} />

                        </View>
                        <View style={{ flex:1,flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000000', paddingLeft: 15 }}>{item.title}</Text>
                            <Text>{item.date}</Text>
                        </View>
                    </View>
                </CardItem>
            </Card>
        );
    }
}