const base = 'NEW_PROJECT';
export const UPDATE_NEW_PROJECT = `${base}/UPDATE_NEW_PROJECT`;
export const CLEAR_NEW_PROJECT = `${base}/CLEAR_NEW_PROJECT`;

const initalState = {
  name: '',
  aim: '',
  img: '',
  desiredOutcome: '',
};

export default (state = initalState, action) => {
  switch (action.type) {

    case UPDATE_NEW_PROJECT:
      return {...state, ...action.update};

    case CLEAR_NEW_PROJECT:
      return initalState;

    default:
      return state;
  }
};

export const updateNewProject = update => {
  return dispatch => {
    dispatch({
      type: UPDATE_NEW_PROJECT,
      update,
    });
  };
};

export const clearNewProject  = ()=>{
	return distpatch =>{
		distpatch({
			type: CLEAR_NEW_PROJECT
		})
	}
}
