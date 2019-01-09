import React, { Component } from 'react';
import { AsyncStorage } from "react-native"
import { Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
import {addUnit,removeUnit,getUnit} from '../Businness/Service'
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
        console.log(this.state.unit);
        addUnit(this.state.unit);

    }
    render() {
        return (
            <Layout>
                <Content padder>

                        <TextField
                            label={words.Name}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, name: txt }))}
                        />
                        <TextField
                            label={words.PeopleCount}
                            onChangeText={(txt) => this.setState((prev) => ({ ...prev, peopleCount: txt }))}
                        />
                    <Item p>
                        <Button iconLeft success onPress={() =>  this._saveUnit().bind(this)}>
                            <Icon name="md-add" />
                            <Text>{words.Submit}</Text>
                        </Button>
                    </Item>

                </Content>
            </Layout>

        );
    }
}