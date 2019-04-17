import React from 'react';
import { View, Fab, Icon } from 'native-base';
import { FlatList, Alert } from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

//comps
import { Get, Delete } from '../../Data/db'
import CostItem from './comps/CostItem';
import Layout from '../shared/layout'
import words from '../../shared/words';
import HomeHeader from './comps/Header';
import {setIds} from '../result/actions';
import DefaultHeader from '../shared/layout/comps/DefaultHeader';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { header: (<DefaultHeader title={words.SaveCost} />), items: [], ids: [], page: 1, loading: false };
    }

    componentWillMount() {
        this._getCosts(true);
    }

    _getCosts = (reset) => {
        if (!this.state.loading) {
            let page = reset ? 1 : this.state.page;
            this.setState(prev => ({ ...prev, state: reset ? 1 : prev.page, loading: true }));
            Get("cost", 12, 12 * (page - 1), (items) => {
                this.setState(prev => ({ ...prev, loading: false, page: items.length > 0 ? page + 1 : page, items: reset ? items : [...prev.items, ...items] }));
            });
        }
    }

    _onPressItem(id, selected) {
        let ids = [...this.state.ids];
        if (selected) {
            ids.push(id);
            this.setState(prev => ({ ...prev, header: (<HomeHeader title={words.SaveCost} count={ids.length} delete={this._Delete.bind(this)} />), ids: ids }));
        }
        else {
            ids = [...ids.filter(x => x !== id)];
            this.setState(prev => ({ ...prev, ids: ids }));
            if (ids.length > 0)
                this.setState(prev => ({ ...prev, header: (<HomeHeader title={words.SaveCost} count={ids.length} delete={this._Delete.bind(this)} />) }));
            else
                this.setState(prev => ({ ...prev, header: (<DefaultHeader title={words.SaveCost} />) }));
        }
        this.props.setIds(ids);
    }


    _Delete() {
        Delete('cost', this.state.ids);
        this._getCosts(true);
        this.setState(prev => ({ ...prev, header: (<DefaultHeader title={words.SaveCost} />) }));
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
                        renderItem={(item) => (<CostItem item={item.item} onPressItem={this._onPressItem.bind(this)} />)}
                        extraData={this.state}
                        onEndReached={this._getCosts.bind(this)}
                        onEndReachedThreshold={0.1}
                    >
                    </FlatList>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomLeft"
                        onPress={() => Actions.addCostLightBox({ resetList: () => { this._getCosts(true); } })}>
                        <Icon name="md-add" />
                    </Fab>
                </View>
            </Layout>

        );
    }
}

const mapStateToProps = state => {
    return { ...state};
}

const mapDispatchToProps = dispatch => {
    return {
        setIds: (ids) => { dispatch(setIds(ids)); },

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);