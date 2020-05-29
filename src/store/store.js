import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import todoApp from './reducers.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
export default function createMyStore() {
	return createStore(todoApp, enhancer)
}