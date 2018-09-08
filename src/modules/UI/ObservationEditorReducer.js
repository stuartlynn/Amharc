import Fragments from '../Components/Fragments/Fragments';

const base = 'OBSERVATION_EDITOR';

export const REMOVE_FRAGMENT = `${base}/REMOVE_FRAGMENT`;
export const ADD_FRAGMENT = `${base}/ADD_FRAGMENT`;
export const UPDATE_FRAGMENT = `${base}/UPDATE_FRAGMENT`;

const initalState = {
  observationName: 'New Observation',
  newFragmentName: null,
  saved: false,
  flow: [
    {
      fragmentName: 'First Name',
      fragmentType: Fragments.TextFragment.type,
      fragmentParameters: {
        prompt: 'enter your first name',
      },
    },
    {
      fragmentName: 'Last Name',
      fragmentType: Fragments.TextFragment.type,
      fragmentParameters: {
        prompt: 'enter your last name',
      },
    },
    {
      fragmentName: 'Age',
      fragmentType: Fragments.RangeFragment.type,
      fragmentParameters: {
        prompt: 'Select your age',
      },
    },
  ],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case REMOVE_FRAGMENT:
      const flowWithoutFragment = state.flow.filter(
        fragment => fragment.fragmentName !== action.id,
      );
      return {...state, flow: flowWithoutFragment};

    case ADD_FRAGMENT:
      return {
        ...state,
        flow: [...state.flow, action.fragment],
      };

    case UPDATE_FRAGMENT:
      const flowWithUpdate = state.flow.map(fragment => {
        if (fragment.fragmentName !== action.id) {
          return fragment;
        }
        const oldParameters = fragment.fragmentParameters;
        const newParameters = {...oldParameters, ...action.updates};
        return {...fragment, fragmentParameters: newParameters};
      });
      return {...state, flow: flowWithUpdate};

    default:
      return state;
  }
};

export const removeFragment = fragmentID => {
  return dispatch => {
    dispatch({
      id: fragmentID,
      type: REMOVE_FRAGMENT,
    });
  };
};

export const addFragment = (type, name) => {
  const newFragment = {
    fragmentName: name,
    fragmentType: type,
    fragmentParameters: Fragments[type].defaults,
  };

  return dispatch => {
    dispatch({
      type: ADD_FRAGMENT,
      fragment: newFragment,
    });
  };
};

export const updateFragment = (fragmentID, updates) => {
  return dispatch => {
    dispatch({
      type: UPDATE_FRAGMENT,
      id: fragmentID,
      updates: updates,
    });
  };
};
