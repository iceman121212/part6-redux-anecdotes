import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'


const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch()

  return (
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => dispatch(voteAction(anecdote.id))}>vote</button>
      </div>
    </div>
  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  return (
    anecdotes.map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} />)
  )
}

export default AnecdoteList