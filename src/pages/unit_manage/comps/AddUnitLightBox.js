import React from 'react';
import { Icon, Button, View, Text } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
import ModalDropdown from 'react-native-modal-dropdown';
import { Actions } from 'react-native-router-flux';
import EStyleSheet from 'react-native-extended-stylesheet';
//comps
import BaseLightbox from '../../../shared/comps/light_box/BaseLightBox';
import { unit } from '../../../Data/domain'
import { Add } from '../../../Data/db'
import words from '../../../shared/words';
import commonStyles from '../../../shared/styles';

export default class AddUnitLightBox extends React.Component {
    componentWillMount() {
        this.setState({ unit: new unit('', 1), errors: { name: '' } });
        console.log(this.props);
    }
    _saveUnit() {
        let u = this.state.unit;
        if (!u.name) {
            this.setState(prev => ({ ...prev, errors: { name: words.requiredField } }));
        }
        else {
            Add('unit', new unit(u.name, u.count), () => { this.props.resetList(words.DefineUnit) });
            this.setState(prev => ({ ...prev, errors: { name: '' } }));
            this.inputs[0].clear();
            Actions.pop();
        }
    }


    _pickerItems = () => {
        var rep = [];
        for (var i = 0; i < 9; i++) {
            rep.push(i);
        }
        return rep;
    }

    render() {
        return (
            <BaseLightbox verticalPercent={0.4} horizontalPercent={0.5}>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ width: 100 }}>
                        <TextField
                            ref={(comp) => { this.inputs = []; this.inputs.push(comp); }}
                            labelTextStyle={[{ color: 'black' }, commonStyles.fontFa]}
                            label={`${words.Name} ${words.Unit}`}
                            baseColor="#666"
                            error={this.state.errors.name}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, unit: { ...prev.unit, name: txt } }))}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 100, paddingTop: 15, borderBottomWidth: 1.5, borderBottomColor: '#a0afcd', overflow: 'hidden', position: 'absolute', left: 0 }}>
                            <ModalDropdown
                                style={[{ flexDirection: 'row', justifyContent: 'flex-start' }, commonStyles.fontFa]}
                                dropdownStyle={{borderTopWidth:2,borderTopColor: EStyleSheet.value('$inputActivecolor'),}}
                                dropdownTextStyle={{margin:15}}
                                renderSeparator={()=>(<View></View>)}
                                options={this._pickerItems()}
                                defaultValue="1"
                                defaultIndex={0}
                                renderRow={(option, index, isSelected) => {
                                    return <View style={{ flex: 1, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingLeft: 5, width: 100 }}><Text>{`${option} ${words.PeopleUnit}`}</Text></View>
                                }}
                                onSelect={(idx, val) => { this.setState(prev => ({ ...prev, unit: { ...prev.unit, count: parseInt(val) } })) }}
                            >
                                <View style={{ flex: 1, width: 100, direction: 'rtl', flexDirection: 'row', justifyContent: 'flex-start', paddingBottom: 5 }}>
                                    <Text>{`${this.state.unit.count} ${words.PeopleUnit}`}</Text>
                                </View>
                            </ModalDropdown>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ paddingTop: 35 }}>
                            <Button small iconLeft info onPress={this._saveUnit.bind(this)}>
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