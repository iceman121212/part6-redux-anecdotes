import React from 'react'
import { useDispatch } from 'react-redux'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationEnable, notificationDisable } from '../reducers/notificationReducer'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value

    dispatch(notificationEnable(`You added ${anecdote}`))
    setTimeout(() => {
      dispatch(notificationDisable())
    }, 1000)

    event.target.anecdote.value = ''
    dispatch(anecdoteCreator(anecdote))
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm