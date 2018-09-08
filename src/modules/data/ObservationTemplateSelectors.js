import {createSelector} from 'reselect';
import {getProjectById} from './ProjectSelectors';


export const getObservationTemplatesForProject = (state, projectId) => {
  const ObservationTemplateIds = getProjectById(state, projectId)
    .observationTemplates;
  console.log('Findong observation templates ', ObservationTemplateIds);
  return state.data.ObservationTemplates.filter(ot =>
    ObservationTemplateIds.includes(ot.id),
  );
};
