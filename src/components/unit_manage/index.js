import React from 'react';
import { View, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux';

//comps
import { Get, Delete, Find } from '../../Data/db'
import UnitItem from './comps/UnitItem';
import Layout from '../shared/layout';
import UnitManageHeader from './comps/Header';
import DefaultHeader from '../shared/layout/comps/DefaultHeader';

export default class UnitManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { header: (<DefaultHeader title={words.DefineUnit} />), items: [], ids: [], page: 1, loading: false };
    }

    componentWillMount() {
        this._getUnits(true);
    }

    _getUnits = (reset) => {
        if (!this.state.loading) {
            let page = reset ? 1 : this.state.page;
            this.setState(prev => ({ ...prev, state: reset ? 1 : prev.page, loading: true }));
            Get("unit", 12, 12 * (page - 1), (items) => {
                this.setState(prev => ({ ...prev, loading: false, page: items.length > 0 ? page + 1 : page, items: reset ? items : [...prev.items, ...items] }));
            });
        }
    }

    _onPressItem(id, selected) {
        let ids = [...this.state.ids];
        if (selected) {
            ids.push(id);
            this.setState(prev => ({ ...prev, header: (<UnitManageHeader title={words.DefineUnit} count={ids.length} delete={this._Delete.bind(this)} />), ids: ids }));
        }
        else {
            ids = [...ids.filter(x => x !== id)];
            this.setState(prev => ({ ...prev, ids: ids }));
            if (ids.length > 0)
                this.setState(prev => ({ ...prev, header: (<UnitManageHeader title={words.DefineUnit} count={ids.length} delete={this._Delete.bind(this)} />) }));
            else
                this.setState(prev => ({ ...prev, header: (<DefaultHeader title={words.DefineUnit} />) }));
        }

    }


    _Delete() {
        Delete('unit', this.state.ids);
        this._getUnits(true);
        this.setState(prev => ({ ...prev, header: (<DefaultHeader title={words.DefineUnit} />) }));
    }


    render() {
        const data = this.state.items.map(x => ({ ...x, selected: false, key: x.id.toString() }))
        return (
            <Layout>
                {this.state.header}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <FlatList
                        style={{}}
                        data={data}
                        renderItem={(item) => (<UnitItem item={item.item} onPressItem={this._onPressItem.bind(this)} />)}
                        extraData={this.state}
                        onEndReached={this._getUnits.bind(this)}
                        onEndReachedThreshold={0.1}
                    >
                    </FlatList>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomLeft"
                        onPress={() => Actions.addUnitLightBox({ resetList: () => { this._getUnits(true); } })}>
                        <Icon name="md-add" />
                    </Fab>
                </View>


            </Layout>

        );
    }
}