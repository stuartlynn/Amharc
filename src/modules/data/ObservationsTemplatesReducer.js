const initalState = [
  {
    id: 1,
    name: 'Door to Door survey of buyout offers',
    type: 'In person collection',
    description: `We need people to collect information on potential buy out offers in
    the neighborhood.`,
    fragmentTemplates: [1, 2, 3, 4, 5,8],
  },
  {
    id: 2,
    name: 'Email survey of Landlord tactics',
    type: 'Email Survey',
    description: `A survey to send out to residents to ask about landlord tactics
    being used`,
    fragmentTemplates: [1, 7, 6],
  },

  {
    id: 3,
    name: 'Ecoli survey',
    type: 'In person collection',
    description: `We are collecting samples from the river to determine what the
    ecoli levels are`,
    fragmentTemplates: [],
  },

  {
    id: 4,
    name: 'Residents survey',
    type: 'In person Collection',
    description: `We are asking residents who live by the creek some questions about
    their experince there`,
    fragmentTemplates: [],
  },
];

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
