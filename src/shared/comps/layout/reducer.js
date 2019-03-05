
import React from 'react';
import actionTypes from './actions'
import DefaultHeader from './comps/DefaultHeader'
import HomeHeader from '../../../pages/home/comps/Header'
import UnitHeader from '../../../pages/unit_manage/comps/Header'

const layoutInit = { header: (<DefaultHeader title='' />), ids: [] };
export default LayoutReducer = (state = layoutInit, action) => {
    switch (action.type) {
        case actionTypes.resetHeader:
            return { ...state, header: (<DefaultHeader />), ids: [] }
        case actionTypes.selectCostRow:
            state.ids.push(action.payload.id);
            return { ...state, header: (<HomeHeader title={''} ids={state.ids} delete={action.payload.dlt} reset={action.payload.reset} />), items: state.ids }
        case actionTypes.deselectCostRow:
            let costIds = state.ids.filter(x => x !== action.payload.id);
            return { ...state, ids: costIds, header: (costIds.length > 0 ? (<HomeHeader ids={costIds} delete={action.payload.dlt} reset={action.payload.reset} />) : (<DefaultHeader title='' />)) };
        case actionTypes.selectUnitRow:
            state.ids.push(action.payload.id);
            return { ...state, header: (<UnitHeader count={state.ids.length} calc={action.payload.calc} delete={action.payload.dlt} />), items: state.ids }
        case actionTypes.deselectUnitRow:
            let unitIds = state.ids.filter(x => x !== action.payload.id);
            return { ...state, ids: unitIds, header: unitIds.length > 0 ? (<UnitHeader count={unitIds.length} delete={action.payload.dlt} />) : (<DefaultHeader title='' />) };
        default:
            return state
    }
}