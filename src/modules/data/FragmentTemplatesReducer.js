const initalState = [
  {
    id: 1,
    name: 'Address',
    type: 'AddressFragment',
    prompt: `Address of the occupant`,
    required: true,
    oneOff: true,
  },
  {
    id: 2,
    name: 'Residents Name',
    type: 'NameFragment',
    prompt: `Residents Name`,
    required: true,
    oneOff: true,
  },
  {
    id: 3,
    name: 'buyout_offered',
    type: 'OptionFragment',
    prompt: `Has been offered buyout in past 6 months`,
    parameters: {options: ['yes', 'no']},
    required: true,
    oneOff: true,
  },
  {
    id: 4,
    name: 'buyout_accepted',
    type: 'OptionFragment',
    prompt: `Was the buyout accepted`,
    parameters: {options: ['yes', 'no', 'still considering']},
    required: true,
    oneOff: true,
  },
  {
    id: 5,
    name: 'buyout_amount',
    type: 'MoneyAmount',
    prompt: `How much was the buyout for?`,
    parameters: {currency: 'USD'},
    required: false,
    oneOff: true,
  },
  {
    id: 6,
    name: 'tactic',
    type: 'Checkboxes',
    prompt: `What kind of pressue was used?`,
    parameters: {
      options: [
        'Heating Turned off',
        'Electricity turned off',
        'Noise',
        'Repairs Ignored',
      ],
    },
    required: true,
  },
  {
    id: 7,
    name: 'Landlord',
    type: 'text',
    prompt: `Landlord Name`,
    required: true,
  },

  {
    id: 8,
    name: 'Location',
    type: 'GPSLocation',
    prompt: "GPSLocation",
    required: true,
  },
];

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


