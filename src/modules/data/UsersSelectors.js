import {createSelector} from 'reselect'

export const getCurrentUser = (state)=> state.data.Users.find((u)=>u.currentUser)
