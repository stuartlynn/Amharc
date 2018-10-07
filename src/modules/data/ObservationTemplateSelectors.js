import {createSelector} from 'reselect';
import {getProjectById} from './ProjectSelectors';

export const getObservationTemplates = (state, props) =>
  state.data.ObservationTemplates;

export const getFragmentTemplates = (state, props) =>
  state.data.FragmentTemplates;

export const activeObservationTemplateId = (state, props) =>
  parseInt(props.match.params.observationTemplateId);

export const getActiveObservationTemplate = createSelector(
  [getObservationTemplates, activeObservationTemplateId],
  (observationTemplates, id) => {
    const match = observationTemplates.filter(
      od => od.id === id
    );
    if (match[0]) {
      return match[0];
    } else {
      throw new Error('Observation Template not found');
    }
  }
);

export const getActiveObservationTemplateWithFragmentTemplates = createSelector(
  [getActiveObservationTemplate, getFragmentTemplates],
  (observationTemplate, fragmentTemplates) => ({
    ...observationTemplate,
    fragmentTemplates: observationTemplate.fragmentTemplates.map(id =>
      fragmentTemplates.filter(ft => ft.id === id)[0],
    ),
  }),
);
