import {SAVE_OBSERVATION} from '../data/ObservationsReducer';

const base = 'ACTIVE_OBSERVATION';
export const UPDATE_RECORD_FOR_FRAGMENT = `${base}/UPDATE_RECORD_FOR_FRAGMENT`;
export const CLEAR_RECORD_FOR_FRAGMENT = `${base}/CLEAR_RECORD_FOR_FRAGMENT`;
export const START_NEW_RECORD = `${base}/START_RECORD`;

const initalState = {
  fragmentRecords: [],
  projectId: null,
  observationId: null,
  progress: 0,
  steps: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case START_NEW_RECORD:
      return {
        ...state,
        progress: 0,
        ...action.newObs,
      };
    case UPDATE_RECORD_FOR_FRAGMENT:
      return {
        ...state,
        fragmentRecords: state.fragmentRecords.map(
          f =>
            f.fragmentId !== action.fragmentId
              ? f
              : {...f, data: {...f.data, ...action.data}},
        ),
      };
    default:
      return state;
  }
};

export const updateRecordForFragment = (data, fragmentId) => {
  return dispatch => {
    dispatch({
      type: UPDATE_RECORD_FOR_FRAGMENT,
      data: data,
      fragmentId,
    });
  };
};

//TODO This seems cludgy ... is there a better way?
export const saveActiveObservation = () => {
  return (dispatch, getState) => {
    const observation = getState().ui.ActiveObservation;
    dispatch({
      type: SAVE_OBSERVATION,
      observation: observation,
    });
  };
};

export const startRecordForObservationTemplate = (
  observationTemplate,
  projectId,
) => {
  return dispatch => {
    const steps = observationTemplate.fragmentTemplates.length;
    const observationTemplateId = observationTemplate.id;
    const fragmentRecords = observationTemplate.fragmentTemplates.map(ft => ({
      fragmentId: ft.id,
      data: {},
    }));

    dispatch({
      type: START_NEW_RECORD,
      steps,
      newObs: {
        observationTemplateId,
        projectId,
        userId: 1,
        startedAt: new Date(),
        fragmentRecords,
      },
    });
  };
};
