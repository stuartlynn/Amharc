export const CREATE_PROJECT = 'data/Projects/CREATE_PROJECTS';

const initalState = [
  {
    id: '1',
    name: 'Bushwick gentrification resistance',
    aim: `We have been seeing an increased number of residents targetd for buyouts in
    the neighborhood. As a results we want to minitor the coordinated efforts of
    landlords and estate agents to better understand where they are targeting and the
    methods being used. We will use this information to provide guidance to residents
    about how to better resist such efforts and to better publicly expose the tactics
    being used`,
    desiredOutcome: `To decrease the relocation of famalies in the neighborhood.`,
    img:
      'https://villagevoice.freetls.fastly.net/wp-content/uploads/2015/08/oda_bushwick_exterior_02_final-1366x836.jpg',
    observationTemplates: [1, 2],
    projectCoordinators: [1, 2],
  },
  {
    id: '2',
    name: `Newtown Creek polution survey`,
    aim: `Better understand the spread of a speciic type of bacteria in New Town Creek`,
    desiredOutcome: `Collect longitudional data about the spread of the bacteria and
    determine if the presence of overflow outlets are causing the spread`,
    observationTemplates: [3, 4],
    img:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/LIC-NewtownCreek.JPG/325px-LIC-NewtownCreek.JPG',
    projectCoordinators: [3],
  },
];

export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return [...state, action.project];
    default:
      return state;
  }
};

export const createProject = (project, user) => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_PROJECT,
      project,
    });
  };
};
