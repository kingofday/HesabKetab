import React from 'react';
import { View, Item, Text, Left, Right, CheckBox } from 'native-base';

//Comps
import words from '../../../shared/words';
import { commaThousondSeperator } from '../../../shared/util';

export default class UnitItem extends React.Component {
    componentWillMount() {
        this.setState({ selected: false });
    }
    render() {
        const item = this.props.item;
        return (
            <Item style={{ backgroundColor: '#ffffff', flexDirection: "row", padding: 7.5 }}>
                <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', paddingLeft: 15 }}>{item.name}</Text>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#000000', paddingLeft: 15 }}>{commaThousondSeperator(item.price.toString())}</Text>
                </View>
            </Item>
        );
    }
}