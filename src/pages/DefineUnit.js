import React, { Component } from 'react';
import { AsyncStorage } from "react-native"
import { Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import { TextField } from 'react-native-materialui-textfield';
import { unit } from '../Businness/domain'
import { add } from '../Businness/db'
//coms
import Layout from '../components/Layout'
import words from '../assets/Wrods';

export default class DefineUnit extends React.Component {
    componentWillMount() {
        this.setState({
            unit: new unit('', '')
        });
    }

    _saveUnit() {
        let u = this.state.unit;
        add(new unit(u.name,u.peopleCount));
    }
    render() {
        return (
            <Layout>
                <Content padder>

                    <TextField  
                        label={words.Name}
                        onChangeText={(txt) => this.setState((prev) => ({ ...prev, unit: { ...prev.unit, name: txt } }))}
                    />
                    <TextField
                        label={words.PeopleCount}
                        onChangeText={(txt) => this.setState((prev) => ({ ...prev, unit: { ...prev.unit, peopleCount: txt } }))}
                    />
                    <Item p>
                        <Button iconLeft success onPress={() => this._saveUnit()}>
                            <Icon name="md-add" />
                            <Text>{words.Submit}</Text>
                        </Button>
                    </Item>

                </Content>
            </Layout>

        );
    }
}