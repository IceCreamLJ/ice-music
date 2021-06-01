import reducer from './reducer'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' 
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true})) || compose;
const enhancer = applyMiddleware(thunk)

const store = createStore(reducer, composeEnhancers(enhancer))

export default store;