import React, { Component } from 'react';
import { } from 'react-native';
import { Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
//coms
import Layout from '../components/Layout'
import words from '../assets/Wrods';

export default class DefineUnit extends React.Component {
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