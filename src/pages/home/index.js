import React from 'react';
import { View, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native'

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

//comps
import { Get, Delete, Find } from '../../Data/db'
import CostItem from './comps/CostItem';
import Layout from '../../shared/comps/layout'
import { selectCostRow, deselectCostRow, resetHeader } from '../../shared/comps/layout/actions'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], ids: [], page: 1, loading: false };
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
        if (selected) {
            this.props.selectCostRow(id, this._Delete.bind(this), this.props.resetHeader);
            this.setState(prev => ({ ...prev, ids: [...prev.ids, id] }));
        }
        else {
            this.props.deselectCostRow(id, this._Delete.bind(this), this.props.resetHeader);
            this.setState(prev => ({ ...prev, ids: prev.ids.filter(x => x !== id) }));
        }

    }


    _Delete() {
        Delete('cost', this.state.ids);
        this.props.resetHeader();
        this._getCosts(true);
    }


    render() {
        const data = this.state.items.map(x => ({ ...x, selected: false, key: x.id.toString() }))
        return (
            <Layout>
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
    return { ...state.homeReducer };
}

const mapDispatchToProps = dispatch => {
    return {
        selectCostRow: (id, dlt, reset) => { dispatch(selectCostRow(id, dlt, reset)); },
        deselectCostRow: (id, dlt, reset) => { dispatch(deselectCostRow(id, dlt, reset)); },
        resetHeader: () => { dispatch(resetHeader()); }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);