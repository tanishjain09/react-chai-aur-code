import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  //<UserContextProvider> -> used provitde context to all children components
  // <UserContext.Provider> -> used to provide context to specific components
  // <UserContext.Consumer> -> used to consume context in class components
  return (
    <UserContextProvider>
      <h1>React context api </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
