import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationEnable, notificationDisable } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.searchText)
  const voteNotification = async () => {
    console.log(anecdote.id)
    const votedAnecdote = await anecdoteService.updateVote(anecdote.id)
    console.log(votedAnecdote)
    console.log(votedAnecdote.id)
    dispatch(voteAction(votedAnecdote.id))
    dispatch(notificationEnable(`You voted for ${anecdote.content}`))
    setTimeout(() => {
      dispatch(notificationDisable())
    }, 1000)
  }
  console.log(anecdote.content)

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