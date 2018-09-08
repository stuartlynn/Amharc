import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

export const history = createHistory()
export const initialState={}

//const persistConfig = {
    //key: 'root',
    //storage,
    //stateReconciler: autoMergeLevel2
//}

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

//const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  //persistedReducer,
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
