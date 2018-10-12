import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
//import { ping } from './enchancers/ping'
import logger from 'redux-logger'

export const store = createStore(rootReducer, applyMiddleware(logger))
