import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ui from './UI'
import data from './data'

export default combineReducers({
    routing: routerReducer,
    ui: ui,
    data: data
})
