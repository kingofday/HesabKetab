import React, { Component } from 'react';
import { View, Text } from 'native-base';
import { FlatList } from 'react-native';
import HistoryItem from '../components/HistoryItem';
//comps
import { Read } from '../components/Layout'
import Layout from '../components/Layout'

export default class Home extends React.Component {
    componentWillMount() {
        this.setState({ header: null });
    }
    _loadInfo() {
        return [{ key: "1", id: 1, title: 'test1', date: '1397/08/20' }, { key: "2", id: 2, title: 'test2', date: '1397/08/21' }];
    }
    _changeHeader = (id, selected) => {
        console.log(selected);
    }

    render() {
        return (
            <Layout header={this.state.header}>
                <View>
                    <FlatList data={this._loadInfo()}
                        renderItem={(item) => (<HistoryItem item={item.item} changeHeader={this._changeHeader} />)}>

                    </FlatList>
                </View>

            </Layout>

        );
    }
}