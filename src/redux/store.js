import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import loginReducer from './reducers/loginReducer'
import devFormReducer from './reducers/devFormReducer'


const rootReducer = combineReducers({
    loginReducer,
    devFormReducer
})

export default createStore(rootReducer, applyMiddleware(promise))