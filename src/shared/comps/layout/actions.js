export default actionTypes = {
    resetHeader: 'Reset_Header',

    selectCostRow: 'Select_Cost_Row',
    deselectCostRow: 'Deselect_Cost_Row',

    selectUnitRow: 'Select_Unit-Row',
    deselectUnitRow: 'Deselect_Unit_Row',


};

export const resetHeader = () => ({
    type: actionTypes.resetHeader,
    payload: {
    }
})


export const selectCostRow = (id, dlt, reset) => ({
    type: actionTypes.selectCostRow,
    payload: {
        id,
        dlt,
        reset
    }
})

export const deselectCostRow = (id, dlt, reset) => ({
    type: actionTypes.deselectCostRow,
    payload: {
        id,
        dlt,
        reset
    }
})

export const selectUnitRow = (id, dlt) => ({
    type: actionTypes.selectUnitRow,
    payload: {
        id,
        dlt
    }
})

export const deselectUnitRow = (id, dlt) => ({
    type: actionTypes.deselectUnitRow,
    payload: {
        id,
        dlt
    }
})

