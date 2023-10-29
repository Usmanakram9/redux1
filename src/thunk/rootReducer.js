import { combineReducers } from '@reduxjs/toolkit'
import slice from './slice'


const RootReducer = combineReducers({data: slice})

export default RootReducer