import React from 'react';
import { View, Fab, Icon } from 'native-base';
import { FlatList } from 'react-native'

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

//comps
import { Get, Delete, Find } from '../../Data/db'
import UnitItem from './comps/UnitItem';
import Layout from '../../shared/comps/layout'
import { selectUnitRow, deselectUnitRow, resetHeader } from '../../shared/comps/layout/actions'

class UnitManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], ids: [], page: 1, loading: false };
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
        if (selected) {
            this.props.selectUnitRow(id, this._Delete.bind(this));
            this.setState(prev => ({ ...prev, ids: [...prev.ids, id] }));
        }
        else {
            this.props.deselectUnitRow(id, this._Delete.bind(this));
            this.setState(prev => ({ ...prev, ids: prev.ids.filter(x => x !== id) }));
        }

    }


    _Delete() {
        Delete('unit', this.state.ids);
        this.props.resetHeader();
        this._getUnits(true);
    }


    render() {
        const data = this.state.items.map(x => ({ ...x, selected: false, key: x.id.toString() }))
        return (
            <Layout>
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

const mapStateToProps = state => {
    return { ...state.unitReducer };
}

const mapDispatchToProps = dispatch => {
    return {
        selectUnitRow: (id, dlt) => { dispatch(selectUnitRow(id, dlt)); },
        deselectUnitRow: (id, dlt) => { dispatch(deselectUnitRow(id, dlt)); },
        resetHeader: () => { dispatch(resetHeader()); }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitManage);