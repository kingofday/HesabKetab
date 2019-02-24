export default actionTypes = {
    selectRow:'selectRowّ',
    deselectRow:'deselectRow',
    getCosts:'getCosts',
    selectCost: 'selectCost',
    deselectCost: 'deselectCost',
    home: 'home'
};

export const getCosts = (items) => ({
    type: actionTypes.getCosts,
    payload: {items}
})
export const selectRow = (id) => ({
    type: actionTypes.selectRow,
    payload: {
        id
    }
})

export const deselectRow = (id) => ({
    type: actionTypes.deselectRow,
    payload: {
        id
    }
})

export const selectCost = (id) => ({
    type: actionTypes.selectCost,
    payload: {
        id
    }
})

export const deselectCost = (id) => ({
    type: actionTypes.deselectCost,
    payload: {
        id
    }
})

export const actionHome = () => ({
    type: actionTypes.home,
    payload: {

    }
})