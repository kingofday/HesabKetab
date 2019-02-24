import { combineReducers } from 'redux';
import React from 'react';
//Comps
import actionTypes from './actions';
import DefaultHeader, { HomeHeader } from '../components/Headers';

const layoutInit = { header: (<DefaultHeader title='' />), ids: [] };
const LayoutReducer = (state = layoutInit, action) => {
    console.log('reducers-->LayoutReducer: fired');
    console.log(action.type);
    switch (action.type) {
        case actionTypes.selectRow:
            console.log('reducer-->homeReducer:');
            state.ids.push(action.payload.id);
            return { ...state, header: (<HomeHeader count={state.ids.length} />), items: state.ids }
        case actionTypes.deselectRow:
            let ids = state.ids.filter(x => x !== action.payload.id);
            return { ...state, ids: ids, header: ids.length > 0 ? (<HomeHeader count={ids.length} />) : (<DefaultHeader title='' />) };
        default:
            return state
    }
}

const homeInit = { items: [], count: 0 };
const homeReducer = (state = homeInit, action) => {
    let items = [];
    switch (action.type) {
        case actionTypes.getCosts:
            items = [...new Set([...action.payload.items])];
            return { ...state, items };
        // case actionTypes.selectCost:
        //     console.log(state.items);
        //     return { ...state, items: state.items }
        // case actionTypes.deselectCost:
        //     items = state.items.filter(x => x !== action.payload.id);
        //     return { ...state, items: items };
        default:
            return state
    }
}

const appReducers = combineReducers({
    LayoutReducer,
    homeReducer
})

export default appReducers;