const initalState= [

  {
    id: '1',
    firstName: 'Stuart',
    lastName: `Lynn`,
    email: 'stuart.lynn@gmail.com',
    bio: "Just looking to help out"
  },
  {
    id: '2',
    firstName: 'Nicole',
    lastName: `McCabe`,
    email: 'puffins@gmail.com',
    bio: "Mostly interested in pufifns"
  },
  {
    id: '3',
    firstName: 'Liz',
    lastName: `Barry`,
    email: 'liz@gmail.com',
    bio: "New Creek advocate"
  }
]

export default (state=initalState, action)=>{
  switch(action.type){
    default:
      return state
  }
}
