import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import loginReducer from './reducers/loginReducer'


const rootReducer = combineReducers({
    loginReducer
})

export default createStore(rootReducer, applyMiddleware(promise))