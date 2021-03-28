import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationEnable, notificationDisable } from '../reducers/notificationReducer'


const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()
  const searchText = useSelector(state => state.searchText)
  const voteNotification = () => {
    dispatch(voteAction(anecdote.id))
    dispatch(notificationEnable(`You voted for ${anecdote.content}`))
    setTimeout(() => {
      dispatch(notificationDisable())
    }, 1000)
  }
  console.log(anecdote.content)

  if (anecdote.content.toLowerCase().search(searchText.toLowerCase()) >= 0) {
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