import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import { combineReducers } from 'redux';
import { userReducer } from './reducer';

const middleware = [reduxThunk]

if(process.env.NODE_ENV === "developemnt"){
    middleware.push(logger)
}

const rootReducer = combineReducers({
    users : userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(...middleware))