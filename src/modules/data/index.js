import FragmentTemplatesReducer from './FragmentTemplatesReducer';
import ObservationsTemplatesReducer from './ObservationsTemplatesReducer';
import ProjectsReducer from './ProjectsReducer';
import ObservationsReducer from './ObservationsReducer';
import UsersReducer from './UsersReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  FragmentTemplates: FragmentTemplatesReducer,
  ObservationTemplates: ObservationsTemplatesReducer,
  Projects: ProjectsReducer,
  Users: UsersReducer,
  Observations: ObservationsReducer,
});
