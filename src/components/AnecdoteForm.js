import React from 'react'
import { useDispatch } from 'react-redux'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationEnable, notificationDisable } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()

    const anecdote = event.target.anecdote.value

    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(anecdoteCreator(newAnecdote.content))
    dispatch(notificationEnable(`You added ${anecdote}`, 1))
    event.target.anecdote.value = ''
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' /></div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm