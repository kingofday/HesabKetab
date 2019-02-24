import React from 'react';
import { View, Item, Button, Text, Icon, Form, Picker } from 'native-base';
// import { Picker } from 'react-native'
import { TextField } from 'react-native-materialui-textfield';
import { unit } from '../Data/domain'
import { add } from '../Data/db'
//coms
import Layout from '../components/Layout'
import words from '../assets/Wrods';

export default class UnitManage extends React.Component {
    componentWillMount() {
        this.setState({
            unit: new unit('', '')
        });
    }

    _saveUnit() {
        let u = this.state.unit;
        add(new unit(u.name, u.peopleCount));
    }
    _pickerItems = () => {
        var rep = [];
        for (var i = 1; i < 9; i++) {
            rep.push((<Picker.Item label={`${i} ${words.PeopleUnit}`} value={i.toString()} />));
        }
        return rep;
    }
    render() {
        return (
            <Layout>
                <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 0.4 }}>
                        <TextField
                            style={{}}
                            label={`${words.Name} ${words.Unit}`}
                            tintColor='#ffffff'
                            baseColor='#ffffff'
                            textColor='#ffffff'
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, unit: { ...prev.unit, name: txt } }))}
                        />
                    </View>
                    <View style={{ flex: 0.2, paddingLeft: 10, paddingRight: 10 }}>
                        {/* <Picker
                            selectedValue={this.state.language}
                            style={{ height: 50, width: 100 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ language: itemValue })
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */}

                        <Picker
                            note
                            mode="dropdown"
                            style={{ width: 120 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            {
                                this._pickerItems()
                            }
                        </Picker>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', paddingBottom: 8 }}>
                        <View>
                            <Button small iconLeft success onPress={() => this._saveUnit()}>
                                <Icon name="md-add" />
                                <Text>{words.Submit}</Text>
                            </Button>
                        </View>
                    </View>

                </View>
            </Layout>

        );
    }
}