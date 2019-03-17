import { createStore } from 'redux';
import { combineReducers } from 'redux';

//comps
import homeReducer from '../pages/home/reducer';
import resultReducer from '../pages/result/reducer';

const appReducers = combineReducers({
  homeReducer,
  resultReducer
})

const appStore = () => {
  return createStore(appReducers);
}

export default appStore;