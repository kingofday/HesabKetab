import { createStore} from 'redux';
import { combineReducers } from 'redux';

//comps
import LayoutReducer from './comps/layout/reducer';
import homeReducer from '../pages/home/reducer';
import unitManageReducer from '../pages/unit_manage/reducer';

const appReducers = combineReducers({
  LayoutReducer,
  homeReducer,
  unitManageReducer
})

const appStore = () => {
  return createStore(appReducers);
}

export default appStore;