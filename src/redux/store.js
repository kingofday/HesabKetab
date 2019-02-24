import { createStore} from 'redux';
import appReducers from './reducers';


const appStore = () => {
  return createStore(appReducers);
}

export default appStore;