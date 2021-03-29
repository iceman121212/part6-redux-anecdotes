import reducer from './reducers/anecdoteReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const reducers = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  searchText: filterReducer
})

const store = createStore(reducers, composeWithDevTools())

anecdoteService.getAll().then(anecdotes => store.dispatch(initializeAnecdotes(anecdotes)))

export default store