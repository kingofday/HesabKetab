import React, { Component } from 'react';
import { View, Item, Text, Left, Right, CheckBox } from 'native-base';

//Comps
import { commaThousondSeperator } from '../../../shared/util';
import commonStyles from '../../shared/styles';
import homeStyles from '../styles';
import words from '../../../shared/words';

export default class CostItem extends React.Component {
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
                style={homeStyles.item}>
                <View style={{ flex: 0.3 }}>
                    <CheckBox checked={this.state.selected} onPress={this._selectCost.bind(this)} />
                </View>
                <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[homeStyles.itemTitle, commonStyles.fontFa]}>{item.title}</Text>
                    <Text>
                        {commaThousondSeperator(item.price.toString())}
                        <Text style={commonStyles.fontFa}> {words.MoneyCurrency}</Text>
                    </Text>
                </View>
            </Item>
        );
    }
}