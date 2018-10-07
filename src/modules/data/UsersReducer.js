const initalState = [
  {
    id: '1',
    firstName: 'Stuart',
    lastName: `Lynn`,
    email: 'stuart.lynn@gmail.com',
    bio: 'Just looking to help out',
    profileImg:
      'https://pbs.twimg.com/profile_images/2392941891/anq5bkkx8rtdhn8p2i9m_400x400.png',
    currentUser: true,
  },
  {
    id: '2',
    firstName: 'Nicole',
    lastName: `McCabe`,
    email: 'puffins@gmail.com',
    bio: 'Mostly interested in pufifns',
    profileImg:
      'https://pbs.twimg.com/profile_images/964605529715806208/fmxSmFQu_400x400.jpg',
    currentUser: false,
  },
  {
    id: '3',
    firstName: 'Liz',
    lastName: `Barry`,
    email: 'liz@gmail.com',
    bio: 'New Creek advocate',
    profileImg:
      'https://pbs.twimg.com/profile_images/781208132836089856/qImWEQwf_400x400.jpg',
    currentUser: false,
  },
];

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
