import React from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon, Button, View, Text } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
//comps
import BaseLightbox from '../../shared/light_box/BaseLightBox';
import { cost } from '../../../Data/domain';
import { Add } from '../../../Data/db'
import words from '../../../shared/words';
import { convertToJalali } from '../../../shared/util';
import commonStyles from '../../shared/styles';


export default class AddCostLightBox extends React.Component {
    componentWillMount() {
        this.setState({ cost: new cost('', 0), errors: { title: '', price: '' } });
    }
    _saveCost() {
        let c = this.state.cost;
        if (!c.title)
            this.setState(prev => ({ ...prev, errors: { title: words.RequiredField } }));

        else if (!c.price || Number.isInteger(c.price))
            this.setState(prev => ({ ...prev, errors: { price: words.InvalidPrice } }));
        else {
            let dt = new Date();
            Add('cost', new cost(c.title, c.price, convertToJalali(dt.getFullYear(), dt.getMonth() + 1, dt.getDate()).toString()), this.props.resetList);
            this.setState(prev => ({ ...prev, errors: { title: '' } }));
            this.inputs[0].clear();
            this.inputs[1].clear();
            Actions.pop();
        }
    }

    render() {
        return (
            <BaseLightbox verticalPercent={0.4} horizontalPercent={0.7}>
                <View style={{ flex: 1, width: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flex: 1, position: "relative", flexDirection: 'column', justifyContent: 'center' }}>
                        <TextField
                            style={{ flex: 1 }}
                            ref={(comp) => { this.inputs = []; this.inputs.push(comp); }}
                            labelTextStyle={commonStyles.fontFa}
                            label={words.Title}
                            baseColor="#666"
                            error={this.state.errors.title}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, cost: { ...prev.cost, title: txt } }))}
                        />
                    </View>
                    <View style={{ flex: 1, position: "relative", flexDirection: 'column', justifyContent: 'center' }}>
                        <TextField
                            direction='ltr'
                            keyboardType='numeric'
                            ref={(comp) => { this.inputs.push(comp); }}
                            labelTextStyle={commonStyles.fontFa}
                            label={words.Price}
                            baseColor="#666"
                            error={this.state.errors.price}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, cost: { ...prev.cost, price: txt } }))}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ paddingTop: 15 }}>
                            <Button small iconLeft info onPress={this._saveCost.bind(this)}>
                                <Icon name="md-add" />
                                <Text style={commonStyles.fontFa}>{words.Submit}</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </BaseLightbox >
        );
    }
}