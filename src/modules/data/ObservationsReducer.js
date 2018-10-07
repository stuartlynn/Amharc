const base = 'OBSERVATIONS';

export const SAVE_OBSERVATION = `${base}/SAVE_OBSERVATION`;

const initalState = [];

export default (state = initalState, action) => {
  switch (action.type) {
    case SAVE_OBSERVATION:
      return [...state, action.observation];
    default:
      return initalState;
  }
};
