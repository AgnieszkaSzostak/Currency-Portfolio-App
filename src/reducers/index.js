import { combineReducers } from 'redux';
import { localStorageReducer } from '../modules/localStorage/localStorage.reducer';
import { exchangeReducer } from '../modules/exchange/exchange.reducer';

const reducers = combineReducers({
    ls: localStorageReducer,
    exchanges: exchangeReducer
})

export default reducers
  