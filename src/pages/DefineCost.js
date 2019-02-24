import React, { Component } from 'react';
import { } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text,Picker,Icon } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';

//coms
import Layout from '../components/Layout'
import words from '../assets/Wrods';

export default class SaveDebt extends React.Component {
    componentWillMount() {
        this.setState({
            unit: {
                price: 0,
                withWeight: false
            }
        });
    }

    _saveUnit(){
        console.log(this.state);
    }
    _setUnit(val){
        console.log(this.state);
    }
    _saveDebt(){
        console.log(this.state);
    }

    render() {
        //let items = 
        return (
            <Layout>
                <Content padder>

                    <Form>

                        <TextField
                            label={words.name}
                            keyboardType='numeric'
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, price: txt }))}
                        />
                        <Item>
                            <CheckBox checked={false} />
                            <Body>
                                <Text>Discussion with Client</Text>
                            </Body>
                        </Item>

                        <Item>
                            <Button onPress={() =>  _saveDebt().bind(this)}>
                                <Text></Text>
                            </Button>
                        </Item>
                    </Form>
                </Content>
            </Layout>

        );
    }
}