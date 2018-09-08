import {createSelector} from 'reselect';

const getObservationTemplates = state => state.data.ObservationTemplates;
const getProjects = state => state.data.Projects;
const activeProject = (_state, props) => props.match.params.projectId;

export const getProjectById = (state, id) =>
  state.data.Projects.find(p => p.id === id);

export const getActiveProject = createSelector(
  [getProjects, activeProject],
  (projects, id) => {
    const match = projects.find(project => project.id === id);
    console.log('match ', match);
    if (match) {
      return match;
    } else {
      throw new Error('project not found');
    }
  },
);

export const getActiveProjectWithObservationTemplates = createSelector(
  [getActiveProject, getObservationTemplates],
  (project, observationTemplates) =>
    (project = {
      ...project,
      observationTemplates: project.observationTemplates.map(ot =>
        observationTemplates.find((obs) => obs.id === ot),
      ),
    }),
);
