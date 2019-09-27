import {createStore, combineReducers, applyMiddleware} from 'redux'
import promise from 'redux-promise-middleware'
import loginReducer from './reducers/loginReducer'
import devFormReducer from './reducers/devFormReducer'
import employerFormReducer from './reducers/employerFormReducer'


const rootReducer = combineReducers({
    loginReducer,
    devFormReducer,
    employerFormReducer
})

export default createStore(rootReducer, applyMiddleware(promise))