import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationEnable, notificationDisable } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.searchText)
  const voteNotification = async () => {
    // const votedAnecdote = await anecdoteService.updateVote(anecdote.id)
    dispatch(voteAction(anecdote.id))
    dispatch(notificationEnable(`You voted for ${anecdote.content}`, 1))
  }

  if (anecdote.content.toString().toLowerCase().search(searchText.toString().toLowerCase()) >= 0) {
    return (
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => voteNotification()}>vote</button>
        </div>
      </div>
    )
  }
  return null
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  return (
    anecdotes.map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} />)
  )
}

export default AnecdoteList