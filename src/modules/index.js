import { combineReducers } from 'redux'
import ui from './UI'
import backend from '../backends/Orbit/reducer'
import data from './data'

export default combineReducers({
    ui: ui,
    data: data,
    backend: backend
})
