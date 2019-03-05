import React from 'react';
import { View, Item, Text, CheckBox } from 'native-base';

//Comps
import words from '../../../shared/words';
import commonStyles from '../../../shared/styles';

export default class UnitItem extends React.Component {
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
                style={{ backgroundColor: '#ffffff', flexDirection: "row", padding: 7.5, height: 60 }}>
                <View style={{ flex: 0.3 }}>
                    <CheckBox checked={this.state.selected} onPress={this._selectCost.bind(this)} />
                </View>
                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[{ color: '#000000', paddingLeft: 15 }, commonStyles.fontFa]}>{item.name}</Text>
                </View>
                <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={[{ color: '#000000', paddingLeft: 15 }, , commonStyles.fontFa]}>{`${item.count.toString()} ${words.PeopleUnit}`}</Text>
                </View>
            </Item>
        );
    }
}