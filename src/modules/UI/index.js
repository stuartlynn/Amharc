import ActiveObservationReducer from './ActiveObservationReducer'
import ObservationTemplateEditorReducer from './ObservationTemplateEditorReducer'
import NewProjectReducer from './NewProjectReducer'
import { combineReducers } from 'redux'

export default combineReducers({
  ActiveObservation: ActiveObservationReducer,
  ObservationTemplateEditorReducer: ObservationTemplateEditorReducer,
  NewProject : NewProjectReducer
})
