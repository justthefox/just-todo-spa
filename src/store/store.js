import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger()
export const store = createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware));
