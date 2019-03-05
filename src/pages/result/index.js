import React from 'react';
import { View, Spinner } from 'native-base';
import { FlatList } from 'react-native'

//comps
import { GetAll, Find } from '../../Data/db'
import ResultItem from './comps/ResultItem';
import Layout from '../../shared/comps/layout'

export default class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    componentWillMount() {
        this._calcualte();
    }
    _calcualte() {
        GetAll('unit', (units) => {
            Find('cost', this.props.ids, (costs) => {
                let res = [];
                let sum = costs.map(x=>x.price).reduce((total, x) => (total +  x)) / costs.length;
                let count = units.map(x=>x.count).reduce((total, x) => (total + x));
                units.forEach((u) => {
                    res.push({ id: u.id, name: u.name, price: Math.ceil(u.count * (sum / count)) });
                });
                this.setState(prev => ({ ...prev, items: res }));

            });
        });
    }
    render() {
        return (
            <Layout>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <FlatList
                        style={{}}
                        data={this.state.items.map(x => ({ ...x, key: x.id.toString() }))}
                        renderItem={(item) => (<ResultItem item={item.item} />)}
                        extraData={this.state}
                        ListEmptyComponent={<Spinner color='blue' />}
                    >
                    </FlatList>
                </View>
            </Layout>
        );
    }

}