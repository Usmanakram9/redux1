import {createStore} from 'react-redux'
import {combineReducers,applyMiddleware} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import slice from './slice'

const reducer = combineReducers({data:slice}) 
const store = createStore(reducer,applyMiddleware(thunk))

export default store