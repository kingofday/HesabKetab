import React from 'react';
import { View} from 'native-base';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

//comps
import { GetAll } from '../Data/db'
import HistoryItem from '../components/HistoryItem';
import Layout from '../components/Layout'
import { getCosts, selectRow, deselectRow } from '../redux/actions'

class Home extends React.Component {
    componentWillMount() {
        GetAll('cost', this._getCost);
    }
    _getCost = (items) => {
        this.props.getCosts(items);
    }
    _onPressItem(id, selected) {
        console.log('select is: ' + selected);
        if (selected) this.props.selectRow(id);
        else this.props.deselectRow(id);
    }

    render() {
        const data = this.props.items.map(x => ({ ...x, selected: false, key: x.id.toString() }))
        return (
            <Layout>
                <View style={{ flexDirection: "column" }}>
                    <FlatList
                        data={data}
                        renderItem={(item) => (<HistoryItem item={item.item} onPressItem={this._onPressItem.bind(this)} />)}
                        extraData={this.state}
                    >
                    </FlatList>
                </View>

            </Layout>

        );
    }
}

const mapStateToProps = state => {
    //const { homeReducer } = state;
    return { ...state.homeReducer };
}

const mapDispatchToProps = dispatch => {
    return {
        getCosts: (items) => { dispatch(getCosts(items)); },
        selectRow: (id) => { dispatch(selectRow(id)); },
        deselectRow: (id) => { dispatch(deselectRow(id)); }
        // select: (checked) => {

        //     dispatch(addPlace(name))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);