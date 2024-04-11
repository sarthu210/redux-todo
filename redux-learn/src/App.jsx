import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/addTodo'
import ListTodo from './components/listTodo'

function App() {
  return (
    <>
      <h1>Create Redux Toolkit</h1>
      <Todos />
      <ListTodo />
    </>
  )
}

export default App
