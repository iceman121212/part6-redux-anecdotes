import reducer from './reducers/anecdoteReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const reducers = combineReducers({
  anecdotes: reducer,
  notification: notificationReducer,
  searchText: filterReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

// anecdoteService.getAll().then(anecdotes => store.dispatch(initializeAnecdotes(anecdotes)))

export default store