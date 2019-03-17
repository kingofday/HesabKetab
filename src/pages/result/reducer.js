import types from './actions'
const init = { ids: [] };
export default resultReducer = (state = init, action) => {

    switch (action.type) {
        case types.setIds:
            return { ...state, ids: action.payload.ids };
        default:
            return state
    }
}
