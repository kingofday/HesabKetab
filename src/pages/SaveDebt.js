import React, { Component } from 'react';
import { } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text,Picker } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
//coms
import Layout from '../components/Layout'
import words from '../assets/Wrods';

export default class SaveDebt extends React.Component {
    componentWillMount() {
        this.setState({
            unit: {
                name: '',
                peopleCount: '',
            }
        });
    }

    _saveUnit(){
        console.log(this.state);
    }
    render() {
        return (
            <Layout>
                <Content padder>

                    <Form>
                    <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select your SIM"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>

                        <TextField
                            label={words.name}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, name: txt }))}
                        />
                        <TextField
                            label={words.peopleCount}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, peopleCount: txt }))}
                        />

                        <Item>
                            <Button onPress={() =>  _saveUnit().bind(this)}>
                                <Text></Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Layout>

        );
    }
}