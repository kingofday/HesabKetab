import React, { Component } from 'react';
import { View, FlatList, I18nManager } from 'react-native';
import HistoryItem from '../components/HistoryItem';
I18nManager.forceRTL(true);
//coms
import Layout from '../components/Layout'

export default class Home extends React.Component {
    componentWillMount() {
        // this.setState({

        // });
    }
    _loadInfo() {
        return [{ key: "1", title: 'test1', date: '1397/08/20' }, { key: "2", title: 'test2', date: '1397/08/21' }];
    }
    render() {
        return (
            <Layout>
                <View>
                    <FlatList data={this._loadInfo()}
                        renderItem={(item) => (<HistoryItem item={item.item} />)}>

                    </FlatList>
                </View>
            </Layout>

        );
    }
}