import { combineReducers } from 'redux';

//Comps
import { actionLayout } from './actions';


const headerInit = actionLayout(false, '');
const headerReducer = (state = headerInit, action) => {
    switch (action.type) {
        case 'changeHeader':
        return Object.assign({},state,action.payload);
        default:
            return state
    }
}

const homeInit = actionLayout(false, '');
const homeReducer = (state = headerInit, action) => {
    switch (action.type) {
        case 'changeHeader':
        return Object.assign({},state,action.payload);
        default:
            return state
    }
}
const todoApp = combineReducers({
    headerReducer,
    homeReducer
  })
  
  export default appReducers;