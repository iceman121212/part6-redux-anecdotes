import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const anecdoteCreator = (anecdote) => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'NEW',
      data: newNote
    })
  }
}

export const voteAction = (id) => {
  return async dispatch => {
    const newNote = await anecdoteService.updateVote(id)
    dispatch({
      type: 'VOTE',
      data: { id: newNote.id }
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'NEW':
      const newState = [...state, action.data]
      return newState.sort((first, next) => next.votes - first.votes)
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id)
      const updatedAnecdote = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1
      }
      const newState2 = state.map((anecdote) => anecdote.id !== id ? anecdote : updatedAnecdote)
      return newState2.sort((first, next) => next.votes - first.votes)
    default:
      return state
  }
}

export default reducer