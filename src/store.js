import reducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

const reducers = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  searchText: filterReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store